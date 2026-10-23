<?php
// The Strange Frontiers Character Creator, a React app built in the
// strange-frontiers-character-creator repo and copied into creator/. Until
// that build is here, visitors go to Strange Frontiers instead.
require_once 'php/rpg/creator-build.php';
$creator = creator_build();
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
        <title>Character Creator - Strange Frontiers</title>
    </head>
    <body>

        <?php include 'php/rpg/rpg-night.php'; ?>

        <div class="creator-shell">
            <?php include 'php/header.php'; ?>
            <?php
                $personalNavActive = 'creator';
                $personalNavTone = 'white';
                $personalNavExtraClass = '';
                $personalNavPage = 'personal.php';
                include 'php/personal/page-nav.php';
            ?>

            <div id="root"></div>

            <?php include 'php/footer.php'; ?>
        </div>

        <?php include 'php/about.php'; ?>
        <?php include 'php/javascript-loads.php'; ?>
        <?php foreach ($creator['js'] as $src): ?>
        <script type="module" src="<?php echo htmlspecialchars($src); ?>"></script>
        <?php endforeach; ?>

    </body>
</html>
