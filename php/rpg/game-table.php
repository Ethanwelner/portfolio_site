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
// game-table-api.php answers one action per POST:
//   create  { name }                           → { code, name, gmKey }
//   gm      { code, gmKey, known }              → { table, seats }
//   join    { code, name, sheet }               → { seatId, playerKey, table }
//   sync    { code, seatId, playerKey, sheet? } → { table, version }
//   leave   { code, seatId, playerKey }         → { ok }
// `known` maps each seat id to the sheet version the Game Master already has,
// so only changed sheets come back.

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
		);
		if ((int) ($known[$seat['id']] ?? -1) !== (int) $seat['version'] && $seat['sheet'] !== null) {
			$out['sheet'] = json_decode($seat['sheet']);
		}
		$seats[] = $out;
	}
	return array('table' => tbl_public($table), 'now' => time(), 'seats' => $seats);
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
	} else {
		$count = $db->prepare('SELECT COUNT(*) FROM seats WHERE code = ?');
		$count->execute(array($table['code']));
		if ((int) $count->fetchColumn() >= TBL_MAX_SEATS) {
			sf_fail(409, 'full', 'That table already has ' . TBL_MAX_SEATS . ' players.');
		}
		$seatId = bin2hex(random_bytes(8));
		$db->prepare('INSERT INTO seats (id, code, key_hash, name, sheet, version, joined, seen) VALUES (?, ?, ?, ?, ?, 1, ?, ?)')
			->execute(array($seatId, $table['code'], tbl_hash($playerKey), $name, $sheet, $now, $now));
	}
	tbl_touch($db, $table['code']);
	return array('seatId' => $seatId, 'playerKey' => $playerKey, 'table' => tbl_public($table));
}

// Player Tools checks in: with a new copy of the sheet when the character
// changed, or without one to say it's still there.
function tbl_sync($db, $body) {
	list($table, $seat) = tbl_player_seat($db, $body);
	$sheet = tbl_sheet($body);
	$now = time();
	$version = (int) $seat['version'];
	if ($sheet !== null) {
		$version++;
		$name = tbl_text($body['name'] ?? '', TBL_CHARACTER_MAX, $seat['name']);
		$db->prepare('UPDATE seats SET sheet = ?, name = ?, version = ?, seen = ? WHERE id = ?')
			->execute(array($sheet, $name, $version, $now, $seat['id']));
	} else {
		$db->prepare('UPDATE seats SET seen = ? WHERE id = ?')->execute(array($now, $seat['id']));
	}
	tbl_touch($db, $table['code']);
	return array('table' => tbl_public($table), 'version' => $version);
}

function tbl_leave($db, $body) {
	list($table, $seat) = tbl_player_seat($db, $body);
	$db->prepare('DELETE FROM seats WHERE id = ?')->execute(array($seat['id']));
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
	$actions = array('create' => 'tbl_create', 'gm' => 'tbl_gm', 'join' => 'tbl_join', 'sync' => 'tbl_sync', 'leave' => 'tbl_leave');
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
