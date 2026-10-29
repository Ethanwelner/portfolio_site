<?php
// Shared by the site's two Claude proxies: creator-api.php (the Character
// Creator's build loop) and game-tools-api.php (the Game Tools assistant).
// Both loops run in the visitor's browser and send each turn to their proxy,
// which checks it's shaped like its own app's, then comes here to keep the
// limits and add the API key, which never reaches the browser.
//
// Settings live in sf-creator-config.php one folder above the site, outside
// the web root, so deploys never touch them. See
// php/rpg/creator-config.example.php.

const SF_MODEL = 'claude-haiku-5-5';
const SF_API_URL = 'https://api.anthropic.com/v1/messages?beta=true';
const SF_MAX_BODY = 2 * 1024 * 1024;

header('Content-Type: application/json');
header('Cache-Control: no-store');

// Replies like the creator's local AI server, which the apps show as written.
function sf_fail($status, $error, $message) {
	http_response_code($status);
	echo json_encode(array('error' => $error, 'message' => $message));
	exit;
}

function sf_config() {
	$path = getenv('SF_CREATOR_CONFIG') ?: dirname(__DIR__, 3) . '/sf-creator-config.php';
	$config = is_file($path) ? include $path : array();
	$defaults = array(
		'api_key' => '',
		'builds_per_visitor_per_hour' => 5,
		'turns_per_visitor_per_hour' => 60,
		'builds_per_day' => 100,
		'questions_per_visitor_per_hour' => 30,
		'tool_turns_per_visitor_per_hour' => 120,
		'questions_per_day' => 300,
		'data_dir' => dirname(__DIR__, 3) . '/sf-creator-data',
	);
	return array_merge($defaults, is_array($config) ? $config : array());
}

// The request as it came, kept for sf_forward: it goes on to Claude as JSON
// objects, since decoded into PHP arrays an empty object ({}, like a tool
// that takes no input) would go out as an empty list ([]) and be refused.
function sf_raw_request($raw = null) {
	static $kept = '';
	if ($raw !== null) {
		$kept = $raw;
	}
	return $kept;
}

// The body Claude gets: the request as sent, on Haiku within $maxTokens.
function sf_outgoing_body($raw, $maxTokens) {
	$body = json_decode($raw);
	$body->model = SF_MODEL;
	$body->max_tokens = min((int) ($body->max_tokens ?? $maxTokens), $maxTokens);
	return json_encode($body, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
}

// The request body, as arrays for the proxies' checks, once it's a POST from
// this site's own pages, the key is set and the body is JSON under the size
// cap. $app names the app in errors, like "The Character Creator".
function sf_read_request($config, $app) {
	if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
		sf_fail(405, 'bad-request', 'Use POST.');
	}
	$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
	if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== parse_url('http://' . ($_SERVER['HTTP_HOST'] ?? ''), PHP_URL_HOST)) {
		sf_fail(403, 'bad-request', $app . ' only answers its own site.');
	}
	if ($config['api_key'] === '') {
		sf_fail(503, 'missing-key', $app . ' isn\'t set up on this site yet.');
	}
	$raw = file_get_contents('php://input', false, null, 0, SF_MAX_BODY + 1);
	if ($raw === false || strlen($raw) > SF_MAX_BODY) {
		sf_fail(413, 'bad-request', 'The request is too large.');
	}
	sf_raw_request($raw);
	return json_decode($raw, true);
}

// Per-visitor and site-wide limits, kept in a JSON file outside the web root.
// Visitors are stored as salted hashes of their IP address, never the address.
// A start (a new build, a new question) is counted at its first turn.
//
// $limits: file (the JSON file's name), turns and starts (per visitor per
// hour), day (starts a day across the site), and too_many_starts and
// day_message (what the visitor sees when they hit those).
function sf_take_limits($config, $isStart, $limits, $app) {
	$dir = $config['data_dir'];
	if (! is_dir($dir) && ! @mkdir($dir, 0700, true)) {
		sf_fail(500, 'server', $app . ' can\'t save its limits right now.');
	}
	$handle = fopen($dir . '/' . $limits['file'], 'c+');
	if (! $handle || ! flock($handle, LOCK_EX)) {
		sf_fail(500, 'server', $app . ' can\'t save its limits right now.');
	}
	$state = json_decode(stream_get_contents($handle), true);
	$today = gmdate('Y-m-d');
	if (! is_array($state) || ($state['day'] ?? '') !== $today) {
		$state = array('day' => $today, 'starts' => 0, 'salt' => bin2hex(random_bytes(16)), 'visitors' => array());
	}
	$now = time();
	$visitor = hash('sha256', $state['salt'] . ($_SERVER['REMOTE_ADDR'] ?? ''));
	$recent = function ($times) use ($now) {
		return array_values(array_filter($times, function ($t) use ($now) {
			return $t > $now - 3600;
		}));
	};
	$mine = $state['visitors'][$visitor] ?? array();
	$mine['starts'] = $recent($mine['starts'] ?? array());
	$mine['turns'] = $recent($mine['turns'] ?? array());
	$started = $state['starts'] ?? 0;

	$problem = null;
	if (count($mine['turns']) >= $limits['turns']) {
		$problem = 'You\'ve made a lot of requests in the last hour. Try again later.';
	} elseif ($isStart && count($mine['starts']) >= $limits['starts']) {
		$problem = $limits['too_many_starts'];
	} elseif ($isStart && $started >= $limits['day']) {
		$problem = $limits['day_message'];
	}
	if (! $problem) {
		$mine['turns'][] = $now;
		if ($isStart) {
			$mine['starts'][] = $now;
			$state['starts'] = $started + 1;
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

// Sends the checked turn to Claude on Haiku, within $maxTokens, and echoes
// the reply, or fails with a message the visitor can read.
function sf_forward($config, $maxTokens, $app) {
	set_time_limit(180);
	$curl = curl_init(SF_API_URL);
	curl_setopt_array($curl, array(
		CURLOPT_POST => true,
		// Whatever the browser asked for, the turn runs on Haiku within the token cap.
		CURLOPT_POSTFIELDS => sf_outgoing_body(sf_raw_request(), $maxTokens),
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
		sf_fail(503, 'unavailable', $app . ' is taking a break. Try again later.');
	}
	if ($status === 401 || $status === 403) {
		sf_fail(502, 'auth', 'The site\'s Claude API key was rejected.');
	}
	if ($status === 429) {
		sf_fail(429, 'rate-limit', 'The Claude API is busy. Wait a minute and try again.');
	}
	if ($status === 529 || $status >= 500) {
		sf_fail(503, 'unavailable', 'The Claude API is overloaded right now. Try again in a minute.');
	}
	sf_fail(502, 'api', 'The Claude API returned an error (' . $status . '): ' . $detail);
}
