<?php
// Game Master tables: a Game Master and their players, joined over the site.
// A table lives in a SQLite database in the data folder outside the web root
// (data_dir in sf-creator-config.php), so deploys never touch it.
//
// There are no accounts. Making a table gives the Game Master a private GM
// key, and joining one gives a player a private seat key; each stays in the
// browser that holds it, and the database only keeps their hashes. The
// player's sheet stays in Player Tools: it sends the table a copy whenever
// the character changes, and the Game Master tools show that copy.
//
// A table also keeps a log: its chat, the players' rolls, and who joined and
// left, with the time of each, the last 500 entries.
//
// game-table-api.php answers one action per POST:
//   create  { name }                                  → { code, name, gmKey }
//   gm      { code, gmKey, known, since }              → { table, seats (with pending), log }
//   join    { code, name, sheet }                      → { seatId, playerKey, table }
//   sync    { code, seatId, playerKey, sheet?, since, ack? } → { table, version, log, changes }
//   leave   { code, seatId, playerKey }                → { ok }
//   say     { code, gmKey | seatId + playerKey, text } → { entry }
//   roll    { code, gmKey | seatId + playerKey, value } → { entry }
//   change  { code, gmKey, seatId, op, trait, rank, name } → { change, entry }
// A change is the Game Master adding a Trait to a player's character or
// taking one away. It waits for the player's Player Tools, which gets it
// with its next check-in, applies it to the character and says so with the
// check-in after (`ack`: the last change's id it applied). The Game Master
// sees each seat's changes still waiting (`pending`).
// `known` maps each seat id to the sheet version the Game Master already has,
// so only changed sheets come back; `since` is the last log entry's id the
// page has, so only newer entries come back (the latest 200 when it's 0).

require_once __DIR__ . '/claude-proxy.php';

const TBL_MAX_BODY = 96 * 1024;
const TBL_MAX_SHEET = 64 * 1024;
const TBL_MAX_SEATS = 8;
const TBL_CREATES_PER_DAY = 3;
const TBL_MAX_TABLES = 500;
const TBL_EXPIRE_DAYS = 30;
const TBL_NAME_MAX = 60;
const TBL_CHARACTER_MAX = 80;
// Join codes skip letters and digits that look alike (0 and O, 1 and I).
const TBL_CODE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const TBL_CODE_LENGTH = 6;
const TBL_LOG_KEEP = 500;
const TBL_LOG_PAGE = 200;
const TBL_MESSAGE_MAX = 1000;
// Chat and rolls one person can post a minute
const TBL_POSTS_PER_MINUTE = 30;
// A player's check-in only records them as here this often
const TBL_SEEN_EVERY = 15;
// Game Master changes waiting for one player
const TBL_MAX_PENDING = 50;

function tbl_db($config) {
	$dir = $config['data_dir'];
	if (! is_dir($dir) && ! @mkdir($dir, 0700, true)) {
		sf_fail(500, 'server', 'Tables can\'t be saved right now.');
	}
	try {
		$db = new PDO('sqlite:' . $dir . '/sf-tables.sqlite');
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
		$db->setAttribute(PDO::ATTR_TIMEOUT, 5);
		$db->exec('PRAGMA journal_mode = WAL');
		$db->exec('PRAGMA foreign_keys = ON');
		$db->exec('CREATE TABLE IF NOT EXISTS tables (
			code TEXT PRIMARY KEY,
			name TEXT NOT NULL,
			gm_hash TEXT NOT NULL,
			visitor TEXT NOT NULL,
			created INTEGER NOT NULL,
			used INTEGER NOT NULL
		)');
		$db->exec('CREATE TABLE IF NOT EXISTS seats (
			id TEXT PRIMARY KEY,
			code TEXT NOT NULL REFERENCES tables(code) ON DELETE CASCADE,
			key_hash TEXT NOT NULL,
			name TEXT NOT NULL,
			sheet TEXT,
			version INTEGER NOT NULL DEFAULT 0,
			joined INTEGER NOT NULL,
			seen INTEGER NOT NULL
		)');
		$db->exec('CREATE INDEX IF NOT EXISTS seats_code ON seats (code)');
		$db->exec('CREATE TABLE IF NOT EXISTS meta (k TEXT PRIMARY KEY, v TEXT NOT NULL)');
		$db->exec('CREATE TABLE IF NOT EXISTS log (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			code TEXT NOT NULL REFERENCES tables(code) ON DELETE CASCADE,
			at INTEGER NOT NULL,
			seat TEXT,
			author TEXT NOT NULL,
			kind TEXT NOT NULL,
			text TEXT NOT NULL,
			value INTEGER
		)');
		$db->exec('CREATE INDEX IF NOT EXISTS log_code ON log (code, id)');
		$db->exec('CREATE TABLE IF NOT EXISTS changes (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			seat TEXT NOT NULL REFERENCES seats(id) ON DELETE CASCADE,
			at INTEGER NOT NULL,
			op TEXT NOT NULL,
			trait TEXT NOT NULL,
			rank INTEGER NOT NULL DEFAULT 1
		)');
		$db->exec('CREATE INDEX IF NOT EXISTS changes_seat ON changes (seat, id)');
		return $db;
	} catch (PDOException $e) {
		sf_fail(500, 'server', 'Tables can\'t be opened right now.');
	}
}

function tbl_hash($key) {
	return hash('sha256', (string) $key);
}

function tbl_random_key() {
	return bin2hex(random_bytes(16));
}

// A visitor, as a salted hash of their IP address that changes every day; the
// address itself is never stored.
function tbl_visitor($db) {
	$day = 'salt:' . gmdate('Y-m-d');
	$get = $db->prepare('SELECT v FROM meta WHERE k = ?');
	$get->execute(array($day));
	$salt = $get->fetchColumn();
	if ($salt === false) {
		$salt = bin2hex(random_bytes(16));
		$db->prepare('INSERT OR IGNORE INTO meta (k, v) VALUES (?, ?)')->execute(array($day, $salt));
		$db->prepare("DELETE FROM meta WHERE k LIKE 'salt:%' AND k <> ?")->execute(array($day));
		$get->execute(array($day));
		$salt = $get->fetchColumn();
	}
	return hash('sha256', $salt . ($_SERVER['REMOTE_ADDR'] ?? ''));
}

// A join code as typed, like "kxv-482", as stored: KXV482.
function tbl_code($code) {
	return substr(preg_replace('/[^A-Z0-9]/', '', strtoupper((string) $code)), 0, TBL_CODE_LENGTH);
}

function tbl_new_code($db) {
	$find = $db->prepare('SELECT 1 FROM tables WHERE code = ?');
	for ($try = 0; $try < 20; $try++) {
		$code = '';
		for ($i = 0; $i < TBL_CODE_LENGTH; $i++) {
			$code .= TBL_CODE_ALPHABET[random_int(0, strlen(TBL_CODE_ALPHABET) - 1)];
		}
		$find->execute(array($code));
		if ($find->fetchColumn() === false) {
			return $code;
		}
	}
	sf_fail(500, 'server', 'Couldn\'t make a join code. Try again.');
}

function tbl_text($value, $max, $fallback) {
	$text = trim(preg_replace('/\s+/u', ' ', is_string($value) ? $value : ''));
	if ($text === '') {
		return $fallback;
	}
	return mb_substr($text, 0, $max);
}

// The request as sent, decoded as objects: a sheet is stored from this, since
// as PHP arrays an empty object ({}) would come back as an empty list ([]).
function tbl_raw_body($raw = null) {
	static $kept = null;
	if ($raw !== null) {
		$kept = json_decode($raw);
	}
	return $kept;
}

// A sheet copy as JSON, under the size cap, or null if none was sent.
function tbl_sheet($body) {
	if (! array_key_exists('sheet', $body) || $body['sheet'] === null) {
		return null;
	}
	$sheet = tbl_raw_body()->sheet ?? null;
	if (! is_object($sheet)) {
		sf_fail(400, 'bad-request', 'The sheet must be an object.');
	}
	$json = json_encode($sheet, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
	if ($json === false || strlen($json) > TBL_MAX_SHEET) {
		sf_fail(413, 'too-large', 'This character is too large to share with the table.');
	}
	return $json;
}

// Tables nobody has used in 30 days go, with their seats.
function tbl_expire($db) {
	$db->prepare('DELETE FROM tables WHERE used < ?')->execute(array(time() - TBL_EXPIRE_DAYS * 86400));
}

function tbl_table($db, $code) {
	$get = $db->prepare('SELECT * FROM tables WHERE code = ?');
	$get->execute(array(tbl_code($code)));
	$table = $get->fetch();
	if (! $table) {
		sf_fail(404, 'no-table', 'There\'s no table with that code. It may have closed.');
	}
	return $table;
}

function tbl_gm_table($db, $body) {
	$table = tbl_table($db, $body['code'] ?? '');
	if (! hash_equals($table['gm_hash'], tbl_hash($body['gmKey'] ?? ''))) {
		sf_fail(403, 'not-gm', 'This browser isn\'t the Game Master of that table.');
	}
	return $table;
}

function tbl_player_seat($db, $body) {
	$table = tbl_table($db, $body['code'] ?? '');
	$get = $db->prepare('SELECT * FROM seats WHERE id = ? AND code = ?');
	$get->execute(array((string) ($body['seatId'] ?? ''), $table['code']));
	$seat = $get->fetch();
	if (! $seat || ! hash_equals($seat['key_hash'], tbl_hash($body['playerKey'] ?? ''))) {
		sf_fail(404, 'no-seat', 'This character isn\'t at that table anymore.');
	}
	return array($table, $seat);
}

function tbl_touch($db, $code) {
	$db->prepare('UPDATE tables SET used = ? WHERE code = ?')->execute(array(time(), $code));
}

function tbl_public($table) {
	return array('code' => $table['code'], 'name' => $table['name']);
}

// ---- The log ----

function tbl_entry($row) {
	$entry = array(
		'id' => (int) $row['id'],
		'at' => (int) $row['at'],
		'kind' => $row['kind'],
		'author' => $row['author'],
		'seat' => $row['seat'],
		'text' => $row['text'],
	);
	if ($row['value'] !== null) {
		$entry['value'] = (int) $row['value'];
	}
	return $entry;
}

// Adds an entry, keeping the table's last 500. $seat is the player's seat id,
// 'gm' for the Game Master, or null for the table's own notes (joins, leaves).
function tbl_log($db, $code, $seat, $author, $kind, $text, $value = null) {
	$db->prepare('INSERT INTO log (code, at, seat, author, kind, text, value) VALUES (?, ?, ?, ?, ?, ?, ?)')
		->execute(array($code, time(), $seat, $author, $kind, $text, $value));
	$id = (int) $db->lastInsertId();
	// Ids count across every table, so the table's 500th-newest is looked up
	$db->prepare('DELETE FROM log WHERE code = ? AND id < (SELECT MIN(id) FROM (SELECT id FROM log WHERE code = ? ORDER BY id DESC LIMIT ' . TBL_LOG_KEEP . '))')
		->execute(array($code, $code));
	$get = $db->prepare('SELECT * FROM log WHERE id = ?');
	$get->execute(array($id));
	return tbl_entry($get->fetch());
}

// The entries after $since, oldest first; the latest 200 when $since is 0.
function tbl_log_since($db, $code, $since) {
	$since = max(0, (int) $since);
	if ($since === 0) {
		$get = $db->prepare('SELECT * FROM (SELECT * FROM log WHERE code = ? ORDER BY id DESC LIMIT ' . TBL_LOG_PAGE . ') ORDER BY id');
		$get->execute(array($code));
	} else {
		$get = $db->prepare('SELECT * FROM log WHERE code = ? AND id > ? ORDER BY id LIMIT ' . TBL_LOG_PAGE);
		$get->execute(array($code, $since));
	}
	return array_map('tbl_entry', $get->fetchAll());
}

// Who's posting: the Game Master (with the GM key) or a player (with their
// seat), held to 30 posts a minute.
function tbl_poster($db, $body) {
	if (isset($body['gmKey'])) {
		$table = tbl_gm_table($db, $body);
		$poster = array($table, 'gm', 'Game Master');
	} else {
		list($table, $seat) = tbl_player_seat($db, $body);
		$poster = array($table, $seat['id'], $seat['name']);
	}
	$recent = $db->prepare('SELECT COUNT(*) FROM log WHERE code = ? AND seat = ? AND at > ?');
	$recent->execute(array($table['code'], $poster[1], time() - 60));
	if ((int) $recent->fetchColumn() >= TBL_POSTS_PER_MINUTE) {
		sf_fail(429, 'rate-limit', 'That\'s a lot of messages in a minute. Wait a moment and try again.');
	}
	return $poster;
}

function tbl_say($db, $body) {
	$text = trim(is_string($body['text'] ?? null) ? $body['text'] : '');
	if ($text === '') {
		sf_fail(400, 'bad-request', 'Write something to send.');
	}
	list($table, $seat, $author) = tbl_poster($db, $body);
	tbl_touch($db, $table['code']);
	return array('entry' => tbl_log($db, $table['code'], $seat, $author, 'chat', mb_substr($text, 0, TBL_MESSAGE_MAX)));
}

function tbl_change_out($row) {
	return array('id' => (int) $row['id'], 'op' => $row['op'], 'trait' => $row['trait'], 'rank' => (int) $row['rank']);
}

function tbl_pending($db, $seatId) {
	$get = $db->prepare('SELECT * FROM changes WHERE seat = ? ORDER BY id');
	$get->execute(array($seatId));
	return array_map('tbl_change_out', $get->fetchAll());
}

// The Game Master adds a Trait to a player's character, at a rank, or takes
// one away. `name` is the Trait's name, for the log.
function tbl_change($db, $body) {
	$table = tbl_gm_table($db, $body);
	$get = $db->prepare('SELECT * FROM seats WHERE id = ? AND code = ?');
	$get->execute(array((string) ($body['seatId'] ?? ''), $table['code']));
	$seat = $get->fetch();
	if (! $seat) {
		sf_fail(404, 'no-seat', 'That player isn\'t at the table anymore.');
	}
	$op = $body['op'] ?? '';
	$trait = (string) ($body['trait'] ?? '');
	$rank = $body['rank'] ?? 1;
	if (($op !== 'add' && $op !== 'remove') || ! preg_match('/^[a-z0-9-]{1,80}$/', $trait) || ! is_int($rank) || $rank < 1 || $rank > 20) {
		sf_fail(400, 'bad-request', 'A change adds or removes one Trait, at a rank from 1 to 20.');
	}
	$count = $db->prepare('SELECT COUNT(*) FROM changes WHERE seat = ?');
	$count->execute(array($seat['id']));
	if ((int) $count->fetchColumn() >= TBL_MAX_PENDING) {
		sf_fail(429, 'rate-limit', $seat['name'] . ' has ' . TBL_MAX_PENDING . ' changes waiting already. They go through when their Player Tools is open.');
	}
	$db->prepare('INSERT INTO changes (seat, at, op, trait, rank) VALUES (?, ?, ?, ?, ?)')
		->execute(array($seat['id'], time(), $op, $trait, $rank));
	$change = tbl_change_out(array('id' => $db->lastInsertId(), 'op' => $op, 'trait' => $trait, 'rank' => $rank));
	$name = tbl_text($body['name'] ?? '', 80, $trait) . ($op === 'add' && $rank > 1 ? ' (' . $rank . ')' : '');
	$text = $op === 'add' ? 'The Game Master gave ' . $seat['name'] . ' ' . $name . '.' : 'The Game Master took ' . $name . ' from ' . $seat['name'] . '.';
	$entry = tbl_log($db, $table['code'], 'gm', 'Game Master', 'change', $text);
	tbl_touch($db, $table['code']);
	return array('change' => $change, 'entry' => $entry);
}

// A d20 roll, made in the roller's browser and reported here.
function tbl_roll($db, $body) {
	$value = $body['value'] ?? null;
	if (! is_int($value) || $value < 1 || $value > 20) {
		sf_fail(400, 'bad-request', 'A roll is a whole number from 1 to 20.');
	}
	list($table, $seat, $author) = tbl_poster($db, $body);
	tbl_touch($db, $table['code']);
	return array('entry' => tbl_log($db, $table['code'], $seat, $author, 'roll', 'rolled a d20: ' . $value, $value));
}

function tbl_create($db, $body, $config) {
	tbl_expire($db);
	if ((int) $db->query('SELECT COUNT(*) FROM tables')->fetchColumn() >= TBL_MAX_TABLES) {
		sf_fail(503, 'full', 'The site has as many tables as it can hold right now. Try again later.');
	}
	$visitor = tbl_visitor($db);
	$recent = $db->prepare('SELECT COUNT(*) FROM tables WHERE visitor = ? AND created > ?');
	$recent->execute(array($visitor, time() - 86400));
	$perDay = (int) ($config['tables_per_visitor_per_day'] ?? TBL_CREATES_PER_DAY);
	if ((int) $recent->fetchColumn() >= $perDay) {
		sf_fail(429, 'rate-limit', 'You\'ve made ' . $perDay . ' tables today. Try again tomorrow.');
	}
	$code = tbl_new_code($db);
	$gmKey = tbl_random_key();
	$name = tbl_text($body['name'] ?? '', TBL_NAME_MAX, 'Untitled table');
	$now = time();
	$db->prepare('INSERT INTO tables (code, name, gm_hash, visitor, created, used) VALUES (?, ?, ?, ?, ?, ?)')
		->execute(array($code, $name, tbl_hash($gmKey), $visitor, $now, $now));
	return array('code' => $code, 'name' => $name, 'gmKey' => $gmKey);
}

function tbl_gm($db, $body) {
	$table = tbl_gm_table($db, $body);
	tbl_touch($db, $table['code']);
	$known = is_array($body['known'] ?? null) ? $body['known'] : array();
	$get = $db->prepare('SELECT id, name, sheet, version, joined, seen FROM seats WHERE code = ? ORDER BY joined');
	$get->execute(array($table['code']));
	$seats = array();
	foreach ($get->fetchAll() as $seat) {
		$out = array(
			'id' => $seat['id'],
			'name' => $seat['name'],
			'version' => (int) $seat['version'],
			'joined' => (int) $seat['joined'],
			'seen' => (int) $seat['seen'],
			'pending' => tbl_pending($db, $seat['id']),
		);
		if ((int) ($known[$seat['id']] ?? -1) !== (int) $seat['version'] && $seat['sheet'] !== null) {
			$out['sheet'] = json_decode($seat['sheet']);
		}
		$seats[] = $out;
	}
	return array('table' => tbl_public($table), 'now' => time(), 'seats' => $seats, 'log' => tbl_log_since($db, $table['code'], $body['since'] ?? 0));
}

// A character joins a table. One that's already seated under the same name
// (rejoining from a new browser) takes its seat back with a new key.
function tbl_join($db, $body) {
	$table = tbl_table($db, $body['code'] ?? '');
	$name = tbl_text($body['name'] ?? '', TBL_CHARACTER_MAX, 'Unnamed character');
	$sheet = tbl_sheet($body);
	$playerKey = tbl_random_key();
	$now = time();
	$same = $db->prepare('SELECT id FROM seats WHERE code = ? AND lower(name) = lower(?)');
	$same->execute(array($table['code'], $name));
	$seatId = $same->fetchColumn();
	if ($seatId !== false) {
		$db->prepare('UPDATE seats SET key_hash = ?, sheet = COALESCE(?, sheet), version = version + 1, seen = ? WHERE id = ?')
			->execute(array(tbl_hash($playerKey), $sheet, $now, $seatId));
		tbl_log($db, $table['code'], null, $name, 'join', $name . ' rejoined the table.');
	} else {
		$count = $db->prepare('SELECT COUNT(*) FROM seats WHERE code = ?');
		$count->execute(array($table['code']));
		if ((int) $count->fetchColumn() >= TBL_MAX_SEATS) {
			sf_fail(409, 'full', 'That table already has ' . TBL_MAX_SEATS . ' players.');
		}
		$seatId = bin2hex(random_bytes(8));
		$db->prepare('INSERT INTO seats (id, code, key_hash, name, sheet, version, joined, seen) VALUES (?, ?, ?, ?, ?, 1, ?, ?)')
			->execute(array($seatId, $table['code'], tbl_hash($playerKey), $name, $sheet, $now, $now));
		tbl_log($db, $table['code'], null, $name, 'join', $name . ' joined the table.');
	}
	tbl_touch($db, $table['code']);
	return array('seatId' => $seatId, 'playerKey' => $playerKey, 'table' => tbl_public($table));
}

// Player Tools checks in every few seconds: with a new copy of the sheet when
// the character changed, or without one to say it's still there, getting the
// log's new entries. Being here is only recorded every 15 seconds.
function tbl_sync($db, $body) {
	list($table, $seat) = tbl_player_seat($db, $body);
	// The changes Player Tools has applied are done
	if (is_int($body['ack'] ?? null)) {
		$db->prepare('DELETE FROM changes WHERE seat = ? AND id <= ?')->execute(array($seat['id'], $body['ack']));
	}
	$sheet = tbl_sheet($body);
	$now = time();
	$version = (int) $seat['version'];
	if ($sheet !== null) {
		$version++;
		$name = tbl_text($body['name'] ?? '', TBL_CHARACTER_MAX, $seat['name']);
		$db->prepare('UPDATE seats SET sheet = ?, name = ?, version = ?, seen = ? WHERE id = ?')
			->execute(array($sheet, $name, $version, $now, $seat['id']));
	} else {
		if ($now - (int) $seat['seen'] >= TBL_SEEN_EVERY) {
			$db->prepare('UPDATE seats SET seen = ? WHERE id = ?')->execute(array($now, $seat['id']));
			tbl_touch($db, $table['code']);
		}
	}
	if ($sheet !== null) {
		tbl_touch($db, $table['code']);
	}
	return array(
		'table' => tbl_public($table),
		'version' => $version,
		'log' => tbl_log_since($db, $table['code'], $body['since'] ?? 0),
		'changes' => tbl_pending($db, $seat['id']),
	);
}

function tbl_leave($db, $body) {
	list($table, $seat) = tbl_player_seat($db, $body);
	$db->prepare('DELETE FROM seats WHERE id = ?')->execute(array($seat['id']));
	tbl_log($db, $table['code'], null, $seat['name'], 'leave', $seat['name'] . ' left the table.');
	return array('ok' => true);
}

function tbl_handle() {
	if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
		sf_fail(405, 'bad-request', 'Use POST.');
	}
	$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
	if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== parse_url('http://' . ($_SERVER['HTTP_HOST'] ?? ''), PHP_URL_HOST)) {
		sf_fail(403, 'bad-request', 'Tables only answer their own site.');
	}
	$raw = file_get_contents('php://input', false, null, 0, TBL_MAX_BODY + 1);
	if ($raw === false || strlen($raw) > TBL_MAX_BODY) {
		sf_fail(413, 'too-large', 'The request is too large.');
	}
	$body = json_decode($raw, true);
	tbl_raw_body($raw);
	if (! is_array($body) || isset($body[0])) {
		sf_fail(400, 'bad-request', 'Send one action as a JSON object.');
	}
	$actions = array('create' => 'tbl_create', 'gm' => 'tbl_gm', 'join' => 'tbl_join', 'sync' => 'tbl_sync', 'leave' => 'tbl_leave', 'say' => 'tbl_say', 'roll' => 'tbl_roll', 'change' => 'tbl_change');
	$action = $actions[$body['action'] ?? ''] ?? null;
	if (! $action) {
		sf_fail(400, 'bad-request', 'Unknown action.');
	}
	$config = sf_config();
	$db = tbl_db($config);
	if (random_int(1, 50) === 1) {
		tbl_expire($db);
	}
	try {
		$db->beginTransaction();
		$out = $action($db, $body, $config);
		$db->commit();
	} catch (PDOException $e) {
		if ($db->inTransaction()) {
			$db->rollBack();
		}
		sf_fail(500, 'server', 'The table couldn\'t be saved. Try again.');
	}
	echo json_encode($out, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
}
