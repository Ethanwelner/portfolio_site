<?php
// The Character Creator's Claude proxy. The creator runs its build loop in
// the visitor's browser (strange-frontiers-character-creator, src/ai/remote.ts)
// and sends each turn here. This only passes on requests shaped like the
// creator's: its own instructions and tools, and a capped number of turns and
// tokens. php/rpg/claude-proxy.php keeps the per-visitor and daily limits,
// adds the API key and holds the model to Haiku.

require __DIR__ . '/php/rpg/claude-proxy.php';

const SF_MAX_TOKENS = 16000;
// The creator gives up after 12 turns.
const SF_MAX_TURNS = 12;
const SF_MAX_MESSAGES = 40;
const SF_INSTRUCTIONS_START = 'You build player characters for Strange Frontiers, a tabletop RPG.';
const SF_TOOLS = array('search_traits', 'list_packages', 'get_package', 'get_kind', 'submit_build');
const SF_FIELDS = array('model', 'max_tokens', 'tools', 'system', 'messages', 'thinking', 'output_config', 'cache_control');

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

$config = sf_config();
$body = sf_read_request($config, 'The Character Creator');
$problem = sf_check_request($body);
if ($problem) {
	sf_fail(400, 'bad-request', $problem);
}

// A build is counted at its first turn.
sf_take_limits($config, count($body['messages']) === 1, array(
	'file' => 'limits.json',
	'turns' => $config['turns_per_visitor_per_hour'],
	'starts' => $config['builds_per_visitor_per_hour'],
	'day' => $config['builds_per_day'],
	'too_many_starts' => 'You\'ve built ' . $config['builds_per_visitor_per_hour'] . ' characters in the last hour. Try again in a little while.',
	'day_message' => 'The Character Creator has hit its daily limit. Try again tomorrow.',
), 'The Character Creator');

sf_forward($config, SF_MAX_TOKENS, 'The Character Creator');
