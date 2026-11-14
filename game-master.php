<?php
// Strange Frontiers Game Master Tools, for running a table: a React app built
// alongside the Character Creator and Player Tools in the
// strange-frontiers-character-creator repo and copied into creator/. Players
// join a table from Player Tools; game-table-api.php keeps the tables. Until
// that build is here, visitors go to Strange Frontiers instead.
require_once 'php/rpg/creator-build.php';
$creator = creator_build('src/gm/main.tsx');
if (! $creator) {
	header('Location: personal.php#strangefrontiers', true, 302);
	exit;
}
?>
<!doctype html>
<html lang="en">

    <head>
        <!-- this loads the head code -->
        <?php include 'php/head-loads.php'; ?>
        <link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/rpg-night.css'); ?>"/>
        <?php foreach ($creator['css'] as $href): ?>
        <link rel="stylesheet" href="<?php echo htmlspecialchars($href); ?>"/>
        <?php endforeach; ?>
        <?php include 'php/rpg/page-slide.php'; ?>
        <!-- The page waits to paint until the Game Master Tools have rendered,
             so a slide in from Player Tools shows them instead of an empty page. -->
        <?php foreach ($creator['js'] as $src): ?>
        <script type="module" blocking="render" src="<?php echo htmlspecialchars($src); ?>"></script>
        <?php endforeach; ?>
        <title>Game Master Tools - Strange Frontiers</title>
    </head>
    <body>

        <?php include 'php/rpg/rpg-night.php'; ?>

        <div class="creator-shell">
            <?php include 'php/header.php'; ?>
            <?php include 'php/rpg/rpg-search.php'; ?>
            <?php
                $personalNavActive = 'gm';
                $personalNavTone = 'white';
                $personalNavExtraClass = '';
                $personalNavPage = 'personal.php';
                include 'php/personal/page-nav.php';
            ?>

            <div id="root"></div>

            <?php include 'php/footer.php'; ?>
        </div>

        <?php include 'php/about.php'; ?>
        <?php // Search results open here, on a dark panel like the tools'; the lore itself comes from personal.php. ?>
        <?php require_once 'php/rpg/components/popup.php'; sf_popup_shell( array( 'tone' => 'dark' ) ); ?>
        <?php include 'php/javascript-loads.php'; ?>

    </body>
</html>
