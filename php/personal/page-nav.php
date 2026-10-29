<?php
$personalNavActive = $personalNavActive ?? 'blog';
$personalNavTone = $personalNavTone ?? 'white';
$navTextClass = $personalNavTone === 'black' ? 'black-text' : 'white-text';
$navBulletClass = $navTextClass;
$navExtraClass = $personalNavExtraClass ?? '';
$navAuto = $personalNavActive === 'auto';
// Off personal.php (on creator.php or game-tools.php), the pane links go to personal.php and
// don't slide panes.
$navPage = $personalNavPage ?? '';
$navPaneClass = $navPage === '' ? 'js-personal-page' : '';
require_once __DIR__ . '/../rpg/creator-build.php';
?>
<div class="section-scroll-links personal-page-nav repaint <?php echo $navTextClass; ?> <?php echo $navExtraClass; ?>">
	<div class="force-dark">
		<a href="<?php echo $navPage; ?>#blog" class="<?php echo $navPaneClass; ?>" data-page="personal">Projects &amp; Blog<?php if ($navAuto || $personalNavActive === 'blog'): ?> <span class="<?php echo $navBulletClass; ?> nav-bullet nav-bullet-personal">&#8226;</span><?php endif; ?></a>
	</div>
	<div class="force-dark">
		<a href="<?php echo $navPage; ?>#strangefrontiers" class="<?php echo $navPaneClass; ?> frontiers-accent" data-page="frontiers">STRANGE FRONTIERS<?php if ($navAuto || $personalNavActive === 'frontiers'): ?> <span class="frontiers-accent nav-bullet nav-bullet-frontiers">&#8226;</span><?php endif; ?></a>
	</div>
	<?php if (creator_build()): ?>
	<div class="force-dark">
		<a href="creator.php" class="frontiers-accent">CHARACTER CREATOR<?php if ($personalNavActive === 'creator'): ?> <span class="frontiers-accent nav-bullet">&#8226;</span><?php endif; ?></a>
	</div>
	<?php endif; ?>
	<?php if (creator_build('src/tools/main.tsx')): ?>
	<div class="force-dark">
		<a href="game-tools.php" class="frontiers-accent">PLAYER TOOLS<?php if ($personalNavActive === 'tools'): ?> <span class="frontiers-accent nav-bullet">&#8226;</span><?php endif; ?></a>
	</div>
	<?php endif; ?>
</div>
