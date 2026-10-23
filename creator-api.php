<?php
// The Character Creator's Claude proxy. The creator runs its build loop in
// the visitor's browser (strange-frontiers-character-creator, src/ai/remote.ts)
// and sends each turn here. This adds the API key, which never reaches the
// browser, and only passes on requests shaped like the creator's: Haiku, its
// own instructions and tools, a capped number of turns and tokens, and
// per-visitor and daily limits.
//
// Settings live in sf-creator-config.php one folder above the site, outside
// the web root, so deploys never touch them. See
// php/rpg/creator-config.example.php.

const SF_MODEL = 'claude-haiku-5-5';
const SF_API_URL = 'https://api.anthropic.com/v1/messages?beta=true';
const SF_MAX_BODY = 2 * 1024 * 1024;
const SF_MAX_TOKENS = 16000;
// The creator gives up after 12 turns.
const SF_MAX_TURNS = 12;
const SF_MAX_MESSAGES = 40;
const SF_INSTRUCTIONS_START = 'You build player characters for Strange Frontiers, a tabletop RPG.';
const SF_TOOLS = array('search_traits', 'list_packages', 'get_package', 'get_kind', 'submit_build');
const SF_FIELDS = array('model', 'max_tokens', 'tools', 'system', 'messages', 'thinking', 'output_config', 'cache_control');

header('Content-Type: application/json');
header('Cache-Control: no-store');

// Replies like the creator's local AI server, which the creator shows as written.
function sf_fail($status, $error, $message) {
	http_response_code($status);
	echo json_encode(array('error' => $error, 'message' => $message));
	exit;
}

function sf_config() {
	$path = getenv('SF_CREATOR_CONFIG') ?: dirname(__DIR__) . '/sf-creator-config.php';
	$config = is_file($path) ? include $path : array();
	$defaults = array(
		'api_key' => '',
		'builds_per_visitor_per_hour' => 5,
		'turns_per_visitor_per_hour' => 60,
		'builds_per_day' => 100,
		'data_dir' => dirname(__DIR__) . '/sf-creator-data',
	);
	return array_merge($defaults, is_array($config) ? $config : array());
}

// The request must be one turn of the creator's own build loop.
function sf_check_request($body) {
	if (! is_array($body) || isset($body[0])) {
		return 'Send one turn of a character build.';
	}
	foreach (array_keys($body) as $field) {
		if (! in_array($field, SF_FIELDS, true)) {
			return 'The request has a field the Character Creator doesn\'t send: ' . $field;
		}
	}
	$system = $body['system'] ?? null;
	if (! is_array($system) || ! isset($system[0]['text']) || ! is_string($system[0]['text']) || strpos($system[0]['text'], SF_INSTRUCTIONS_START) !== 0) {
		return 'Only the Character Creator\'s own instructions are accepted.';
	}
	$tools = $body['tools'] ?? null;
	if (! is_array($tools) || count($tools) !== count(SF_TOOLS)) {
		return 'Only the Character Creator\'s own tools are accepted.';
	}
	foreach ($tools as $tool) {
		if (! is_array($tool) || ! in_array($tool['name'] ?? null, SF_TOOLS, true)) {
			return 'Only the Character Creator\'s own tools are accepted.';
		}
	}
	$messages = $body['messages'] ?? null;
	if (! is_array($messages) || ! $messages || count($messages) > SF_MAX_MESSAGES) {
		return 'The build has too many messages.';
	}
	$turns = 0;
	foreach ($messages as $message) {
		if (($message['role'] ?? null) === 'assistant') {
			$turns++;
		}
	}
	if ($turns >= SF_MAX_TURNS) {
		return 'The build ran out of turns.';
	}
	if (isset($body['thinking']) && $body['thinking'] !== array('type' => 'adaptive')) {
		return 'Thinking must be adaptive.';
	}
	$effort = $body['output_config']['effort'] ?? 'high';
	if (! in_array($effort, array('low', 'medium', 'high'), true)) {
		return 'Effort must be low, medium or high.';
	}
	return null;
}

// Per-visitor and site-wide limits, kept in a JSON file outside the web root.
// Visitors are stored as salted hashes of their IP address, never the address.
// A build is counted at its first turn.
function sf_take_limits($config, $isFirstTurn) {
	$dir = $config['data_dir'];
	if (! is_dir($dir) && ! @mkdir($dir, 0700, true)) {
		sf_fail(500, 'server', 'The Character Creator can\'t save its limits right now.');
	}
	$handle = fopen($dir . '/limits.json', 'c+');
	if (! $handle || ! flock($handle, LOCK_EX)) {
		sf_fail(500, 'server', 'The Character Creator can\'t save its limits right now.');
	}
	$state = json_decode(stream_get_contents($handle), true);
	$today = gmdate('Y-m-d');
	if (! is_array($state) || ($state['day'] ?? '') !== $today) {
		$state = array('day' => $today, 'builds' => 0, 'salt' => bin2hex(random_bytes(16)), 'visitors' => array());
	}
	$now = time();
	$visitor = hash('sha256', $state['salt'] . ($_SERVER['REMOTE_ADDR'] ?? ''));
	$recent = function ($times) use ($now) {
		return array_values(array_filter($times, function ($t) use ($now) {
			return $t > $now - 3600;
		}));
	};
	$mine = $state['visitors'][$visitor] ?? array('builds' => array(), 'turns' => array());
	$mine['builds'] = $recent($mine['builds']);
	$mine['turns'] = $recent($mine['turns']);

	$problem = null;
	if (count($mine['turns']) >= $config['turns_per_visitor_per_hour']) {
		$problem = 'You\'ve made a lot of requests in the last hour. Try again later.';
	} elseif ($isFirstTurn && count($mine['builds']) >= $config['builds_per_visitor_per_hour']) {
		$problem = 'You\'ve built ' . $config['builds_per_visitor_per_hour'] . ' characters in the last hour. Try again in a little while.';
	} elseif ($isFirstTurn && $state['builds'] >= $config['builds_per_day']) {
		$problem = 'The Character Creator has hit its daily limit. Try again tomorrow.';
	}
	if (! $problem) {
		$mine['turns'][] = $now;
		if ($isFirstTurn) {
			$mine['builds'][] = $now;
			$state['builds']++;
		}
		$state['visitors'][$visitor] = $mine;
		ftruncate($handle, 0);
		rewind($handle);
		fwrite($handle, json_encode($state));
	}
	flock($handle, LOCK_UN);
	fclose($handle);
	if ($problem) {
		sf_fail(429, 'rate-limit', $problem);
	}
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
	sf_fail(405, 'bad-request', 'Use POST.');
}
// Only the site's own pages may call this.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== parse_url('http://' . ($_SERVER['HTTP_HOST'] ?? ''), PHP_URL_HOST)) {
	sf_fail(403, 'bad-request', 'The Character Creator only answers its own site.');
}

$config = sf_config();
if ($config['api_key'] === '') {
	sf_fail(503, 'missing-key', 'The Character Creator isn\'t set up on this site yet.');
}

$raw = file_get_contents('php://input', false, null, 0, SF_MAX_BODY + 1);
if ($raw === false || strlen($raw) > SF_MAX_BODY) {
	sf_fail(413, 'bad-request', 'The request is too large.');
}
$body = json_decode($raw, true);
$problem = sf_check_request($body);
if ($problem) {
	sf_fail(400, 'bad-request', $problem);
}

$isFirstTurn = count($body['messages']) === 1;
sf_take_limits($config, $isFirstTurn);

// Whatever the browser asked for, the build runs on Haiku within the token cap.
$body['model'] = SF_MODEL;
$body['max_tokens'] = min((int) ($body['max_tokens'] ?? SF_MAX_TOKENS), SF_MAX_TOKENS);

set_time_limit(180);
$curl = curl_init(SF_API_URL);
curl_setopt_array($curl, array(
	CURLOPT_POST => true,
	CURLOPT_POSTFIELDS => json_encode($body),
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_CONNECTTIMEOUT => 10,
	CURLOPT_TIMEOUT => 170,
	CURLOPT_HTTPHEADER => array(
		'content-type: application/json',
		'anthropic-version: 2023-06-01',
		'x-api-key: ' . $config['api_key'],
	),
));
$reply = curl_exec($curl);
$status = curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
curl_close($curl);

if ($reply === false || $status === 0) {
	sf_fail(502, 'api', 'Couldn\'t reach the Claude API. Try again in a minute.');
}
if ($status === 200) {
	echo $reply;
	exit;
}
$error = json_decode($reply, true)['error'] ?? array();
$detail = $error['message'] ?? 'no details';
// Out of prepaid credits: the API answers with a billing error, or a 400
// that says the credit balance is too low.
if ($status === 402 || ($error['type'] ?? '') === 'billing_error' || stripos($detail, 'credit balance') !== false) {
	sf_fail(503, 'unavailable', 'The Character Creator is taking a break. Try again later.');
}
if ($status === 401 || $status === 403) {
	sf_fail(502, 'auth', 'The Character Creator\'s Claude API key was rejected.');
}
if ($status === 429) {
	sf_fail(429, 'rate-limit', 'The Claude API is busy. Wait a minute and try again.');
}
if ($status === 529 || $status >= 500) {
	sf_fail(503, 'unavailable', 'The Claude API is overloaded right now. Try again in a minute.');
}
sf_fail(502, 'api', 'The Claude API returned an error (' . $status . '): ' . $detail);
