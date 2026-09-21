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