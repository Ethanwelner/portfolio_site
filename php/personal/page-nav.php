<?php
$personalNavActive = $personalNavActive ?? 'blog';
$personalNavTone = $personalNavTone ?? 'white';
$navTextClass = $personalNavTone === 'black' ? 'black-text' : 'white-text';
$navBulletClass = $navTextClass;
$navExtraClass = $personalNavExtraClass ?? '';
?>
<div class="section-scroll-links personal-page-nav repaint <?php echo $navTextClass; ?> <?php echo $navExtraClass; ?>">
	<div class="force-dark">
		<a href="#blog" class="js-personal-page" data-page="personal">Projects &amp; Blog<?php if ($personalNavActive === 'blog'): ?> <span class="<?php echo $navBulletClass; ?> nav-bullet">&#8226;</span><?php endif; ?></a>
	</div>
	<div class="force-dark">
		<a href="#introduction" class="js-personal-page frontiers-accent" data-page="frontiers">STRANGE FRONTIERS<?php if ($personalNavActive === 'frontiers'): ?> <span class="frontiers-accent nav-bullet">&#8226;</span><?php endif; ?></a>
	</div>
</div>
