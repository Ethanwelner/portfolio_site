<?php
$personalNavActive = $personalNavActive ?? 'blog';
$personalNavTone = $personalNavTone ?? 'white';
$navTextClass = $personalNavTone === 'black' ? 'black-text' : 'white-text';
$navBulletClass = $navTextClass;
$navExtraClass = $personalNavExtraClass ?? '';
$navAuto = $personalNavActive === 'auto';
// Strange Frontiers moved to strangefrontiersrpg.com, so its link leaves the site.
$navPage = $personalNavPage ?? '';
$navPaneClass = $navPage === '' ? 'js-personal-page' : '';
?>
<div class="section-scroll-links personal-page-nav repaint <?php echo $navTextClass; ?> <?php echo $navExtraClass; ?>">
	<div class="force-dark">
		<a href="<?php echo $navPage; ?>#blog" class="<?php echo $navPaneClass; ?>" data-page="personal">Projects &amp; Blog<?php if ($navAuto || $personalNavActive === 'blog'): ?> <span class="<?php echo $navBulletClass; ?> nav-bullet nav-bullet-personal">&#8226;</span><?php endif; ?></a>
	</div>
	<div class="force-dark">
		<a href="https://strangefrontiersrpg.com/" class="frontiers-accent">STRANGE FRONTIERS</a>
	</div>
</div>
