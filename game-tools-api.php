<?php
// The Player Tools assistant's Claude proxy. Player Tools runs its chat loop in
// the visitor's browser (strange-frontiers-character-creator, src/tools/chat.ts)
// and sends each turn here. This only passes on requests shaped like Game
// Tools': its own instructions and tools, a capped conversation, and a few
// turns per question. php/rpg/claude-proxy.php keeps the per-visitor and daily
// limits, adds the API key and holds the model to Haiku.

require __DIR__ . '/php/rpg/claude-proxy.php';

const GT_MAX_TOKENS = 4096;
// Player Tools gives up after 6 turns on one question.
const GT_MAX_TURNS = 6;
// The earlier messages it sends along (20), plus one question's turns.
const GT_MAX_MESSAGES = 60;
const GT_INSTRUCTIONS_START = 'You help a player run their Strange Frontiers character at the table.';
const GT_TOOLS = array('search_traits', 'get_trait', 'get_state', 'change_resources', 'add_item', 'remove_item', 'add_condition', 'remove_condition');
const GT_FIELDS = array('model', 'max_tokens', 'tools', 'system', 'messages');

// A player's question is plain text; tool results come back as a list.
function gt_is_question($message) {
	return ($message['role'] ?? null) === 'user' && is_string($message['content'] ?? null);
}

// The request must be one turn of Player Tools' own chat loop.
function gt_check_request($body) {
	if (! is_array($body) || isset($body[0])) {
		return 'Send one turn of a Player Tools chat.';
	}
	foreach (array_keys($body) as $field) {
		if (! in_array($field, GT_FIELDS, true)) {
			return 'The request has a field Player Tools doesn\'t send: ' . $field;
		}
	}
	$system = $body['system'] ?? null;
	if (! is_array($system) || ! isset($system[0]['text']) || ! is_string($system[0]['text']) || strpos($system[0]['text'], GT_INSTRUCTIONS_START) !== 0) {
		return 'Only Player Tools\' own instructions are accepted.';
	}
	$tools = $body['tools'] ?? null;
	if (! is_array($tools) || count($tools) !== count(GT_TOOLS)) {
		return 'Only Player Tools\' own tools are accepted.';
	}
	foreach ($tools as $tool) {
		if (! is_array($tool) || ! in_array($tool['name'] ?? null, GT_TOOLS, true)) {
			return 'Only Player Tools\' own tools are accepted.';
		}
	}
	$messages = $body['messages'] ?? null;
	if (! is_array($messages) || ! $messages || count($messages) > GT_MAX_MESSAGES) {
		return 'The chat has too many messages.';
	}
	if ((end($messages)['role'] ?? null) !== 'user') {
		return 'The last message must be the player\'s.';
	}
	// Turns Claude has taken on the latest question.
	$turns = 0;
	for ($i = count($messages) - 1; $i >= 0 && ! gt_is_question($messages[$i]); $i--) {
		if (($messages[$i]['role'] ?? null) === 'assistant') {
			$turns++;
		}
	}
	if ($turns >= GT_MAX_TURNS) {
		return 'That question took too many steps.';
	}
	return null;
}

$config = sf_config();
$body = sf_read_request($config, 'Player Tools');
$problem = gt_check_request($body);
if ($problem) {
	sf_fail(400, 'bad-request', $problem);
}

// A question is counted at its first turn.
sf_take_limits($config, gt_is_question(end($body['messages'])), array(
	'file' => 'game-tools-limits.json',
	'turns' => $config['tool_turns_per_visitor_per_hour'],
	'starts' => $config['questions_per_visitor_per_hour'],
	'day' => $config['questions_per_day'],
	'too_many_starts' => 'You\'ve asked ' . $config['questions_per_visitor_per_hour'] . ' questions in the last hour. Try again in a little while.',
	'day_message' => 'The Player Tools assistant has hit its daily limit. Try again tomorrow.',
), 'Player Tools');

sf_forward($config, GT_MAX_TOKENS, 'Player Tools');
