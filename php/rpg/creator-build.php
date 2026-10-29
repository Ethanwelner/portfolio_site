<?php
// The built Character Creator and Game Tools in creator/, from
// `npm run build:site` in the strange-frontiers-character-creator repo. Their
// scripts and stylesheets have hashed names, so the pages read them from
// Vite's manifest. $entry is the app's source entry: src/app/main.tsx for the
// creator, src/tools/main.tsx for Game Tools. Returns null until that app's
// build is in place.
function creator_build($entry = 'src/app/main.tsx') {
	$manifest = __DIR__ . '/../../creator/.vite/manifest.json';
	if (! is_file($manifest)) {
		return null;
	}
	$chunks = json_decode(file_get_contents($manifest), true) ?: array();
	if (empty($chunks[$entry]['isEntry']) || empty($chunks[$entry]['file'])) {
		return null;
	}
	// The entry's stylesheets and those of the chunks it shares with the
	// other app, like the creator's components.
	$css = array();
	$seen = array();
	$visit = function ($key) use (&$visit, &$css, &$seen, $chunks) {
		if (isset($seen[$key]) || ! isset($chunks[$key])) {
			return;
		}
		$seen[$key] = true;
		foreach ($chunks[$key]['imports'] ?? array() as $import) {
			$visit($import);
		}
		foreach ($chunks[$key]['css'] ?? array() as $path) {
			$css[] = 'creator/' . $path;
		}
	};
	$visit($entry);
	return array('css' => array_values(array_unique($css)), 'js' => array('creator/' . $chunks[$entry]['file']));
}
