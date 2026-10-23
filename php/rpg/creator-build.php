<?php
// The built Character Creator in creator/, from `npm run build:site` in the
// strange-frontiers-character-creator repo. Its script and stylesheet have
// hashed names, so the page reads them from Vite's manifest. Returns null
// until the build is in place.
function creator_build() {
	$manifest = __DIR__ . '/../../creator/.vite/manifest.json';
	if (! is_file($manifest)) {
		return null;
	}
	foreach (json_decode(file_get_contents($manifest), true) ?: array() as $chunk) {
		if (! empty($chunk['isEntry']) && ! empty($chunk['file'])) {
			$css = array();
			foreach ($chunk['css'] ?? array() as $path) {
				$css[] = 'creator/' . $path;
			}
			return array('css' => $css, 'js' => array('creator/' . $chunk['file']));
		}
	}
	return null;
}
