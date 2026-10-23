<?php
// The built Character Creator in creator/ (from the
// strange-frontiers-character-creator repo's `npm run build`). Vite writes
// creator/index.html with hashed asset names, so the page reads its script
// and stylesheet tags from there. Returns null until the build is in place.
function creator_build() {
	$index = __DIR__ . '/../../creator/index.html';
	if (! is_file($index)) {
		return null;
	}
	$html = file_get_contents($index);
	$assets = array('css' => array(), 'js' => array());
	preg_match_all('/<link[^>]+rel="stylesheet"[^>]+href="\.\/([^"]+)"/', $html, $css);
	preg_match_all('/<script[^>]+type="module"[^>]+src="\.\/([^"]+)"/', $html, $js);
	foreach ($css[1] as $path) {
		$assets['css'][] = 'creator/' . $path;
	}
	foreach ($js[1] as $path) {
		$assets['js'][] = 'creator/' . $path;
	}
	return $assets['js'] ? $assets : null;
}
