<?php
$personalNavActive = $personalNavActive ?? 'blog';
$personalNavTone = $personalNavTone ?? 'white';
$navTextClass = $personalNavTone === 'black' ? 'black-text' : 'white-text';
$navBulletClass = $navTextClass;
$navExtraClass = $personalNavExtraClass ?? '';
$navAuto = $personalNavActive === 'auto';
?>
<div class="section-scroll-links personal-page-nav repaint <?php echo $navTextClass; ?> <?php echo $navExtraClass; ?>">
	<div class="force-dark">
		<a href="#blog" class="js-personal-page" data-page="personal">Projects &amp; Blog<?php if ($navAuto || $personalNavActive === 'blog'): ?> <span class="<?php echo $navBulletClass; ?> nav-bullet nav-bullet-personal">&#8226;</span><?php endif; ?></a>
	</div>
	<div class="force-dark">
		<a href="#strangefrontiers" class="js-personal-page frontiers-accent" data-page="frontiers">STRANGE FRONTIERS<?php if ($navAuto || $personalNavActive === 'frontiers'): ?> <span class="frontiers-accent nav-bullet nav-bullet-frontiers">&#8226;</span><?php endif; ?></a>
	</div>
</div>
