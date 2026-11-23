<?php
if (!function_exists('asset_url')) {
	function asset_url($path) {
		$file = dirname(__DIR__) . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $path);
		$version = is_file($file) ? filemtime($file) : time();
		return htmlspecialchars($path, ENT_QUOTES, 'UTF-8') . '?v=' . $version;
	}
}

if (!headers_sent()) {
	header('Cache-Control: no-cache, must-revalidate');
}
?>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="Ethan Welner - Home" content="Ethan Welner Portfolio">
<meta name="theme-color" content="#eb0844">

<?php
// Link previews (LinkedIn, Slack, iMessage). A page can set $og before including this file; anything it
// leaves out falls back to the site defaults. Images are JPGs because LinkedIn doesn't reliably show WebP.
$og = array_merge(array(
	'title' => 'Ethan Welner | Senior Product Designer',
	'description' => 'Senior product designer with 15 years in B2B SaaS, edtech and govtech. Case studies, design systems, and work shipped in code.',
	'image' => 'img/og/og-home.jpg',
), isset($og) && is_array($og) ? $og : array());
$og_base = 'https://ethanwelner.com/';
$og_path = strtok(isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '/', '?');
$og_e = function ($s) { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); };
?>
<meta name="description" content="<?php echo $og_e($og['description']); ?>">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Ethan Welner">
<meta property="og:title" content="<?php echo $og_e($og['title']); ?>">
<meta property="og:description" content="<?php echo $og_e($og['description']); ?>">
<meta property="og:url" content="<?php echo $og_e(rtrim($og_base, '/') . $og_path); ?>">
<meta property="og:image" content="<?php echo $og_e($og_base . $og['image']); ?>">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="627">
<meta name="twitter:card" content="summary_large_image">

<!-- favicons -->
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
<link rel="icon" type="image/gif" href="favicon.gif">
<link rel="shortcut icon" href="favicon.ico">
<link rel="manifest" href="site.webmanifest">

<!-- bootstrap css -->
<link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/bootstrap.min.css'); ?>"/>

<!-- site css -->
<link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/tokens.css'); ?>"/>
<!-- <link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/portfolio.css'); ?>"/> -->
<link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/portfolio-nested.css'); ?>"/>
<link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/portfolio-media-queries.css'); ?>"/>
<link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/rpg.css'); ?>"/>
<!-- Strange Frontiers buttons (php/rpg/components/buttons.php) -->
<link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/sf-buttons.css'); ?>"/>
<!-- Strange Frontiers card components (php/rpg/components/cards.php) -->
<link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/sf-cards.css'); ?>"/>
<!-- Strange Frontiers stat block (php/rpg/components/stats.php) -->
<link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/sf-stats.css'); ?>"/>
<!-- Strange Frontiers character sheet layout (php/rpg/components/sheet.php) -->
<link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/sf-sheet.css'); ?>"/>
<!-- Strange Frontiers NPC and monster sheet (php/rpg/components/npc-sheet.php) -->
<link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/sf-npc-sheet.css'); ?>"/>
<!-- Strange Frontiers popup (php/rpg/components/popup.php) -->
<link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/sf-popup.css'); ?>"/>