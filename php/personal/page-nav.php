<?php
$personalNavActive = $personalNavActive ?? 'blog';
$personalNavTone = $personalNavTone ?? 'white';
$navTextClass = $personalNavTone === 'black' ? 'black-text' : 'white-text';
$navBulletClass = $navTextClass;
$navExtraClass = $personalNavExtraClass ?? '';
?>
<div class="section-scroll-links personal-page-nav repaint <?php echo $navTextClass; ?> <?php echo $navExtraClass; ?>">
	<div class="force-dark">
		<a href="#blog" class="js-personal-page" data-page="personal"><?php if ($personalNavActive === 'blog'): ?><span class="<?php echo $navBulletClass; ?> nav-bullet">&#8226;</span> <?php endif; ?>BLOG</a>
	</div>
	<div class="force-dark">
		<a href="#setting" class="js-personal-page" data-page="frontiers"><?php if ($personalNavActive === 'frontiers'): ?><span class="<?php echo $navBulletClass; ?> nav-bullet">&#8226;</span> <?php endif; ?>STRANGE FRONTIERS</a>
	</div>
</div>
