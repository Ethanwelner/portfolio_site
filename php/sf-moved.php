<?php
// Strange Frontiers moved to its own site on 2026-11-23 (repo: strange-frontiers-site).
// The old pages here send visitors to the same page there, keeping the query string.
// Pages get 301; the APIs get 308 so a POST stays a POST.
function sf_moved($path, $status = 301) {
	$query = $_SERVER['QUERY_STRING'] ?? '';
	header('Location: https://strangefrontiersrpg.com/' . $path . ($query !== '' ? '?' . $query : ''), true, $status);
	exit;
}
