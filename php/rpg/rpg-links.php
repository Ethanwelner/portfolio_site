<?php
$rpgLinksTone = $rpgLinksTone ?? 'black';
$rpgLinksKind = $rpgLinksKind ?? 'mechanics';
$rpgLinksInvert = $rpgLinksTone === 'white';
$rpgLinksClass = $rpgLinksTone === 'white' ? 'white' : 'black';
$rpgLinks = $rpgLinksKind === 'setting'
	? [
		'#introduction' => 'Introduction',
		'#setting' => 'Timeline',
		'#technologies' => 'Technologies',
		'#hierarchy' => 'The Planes',
	]
	: [
		'#stats' => 'Stats',
		'#traits' => 'Traits',
		'#skills' => 'Skills',
		'#items' => 'Items',
		'#character' => 'Character',
	];
?>
<?php if ($rpgLinksInvert): ?>
<div class="section-clip rpg-links-clip" data-links="<?php echo $rpgLinksKind; ?>" aria-hidden="true">
	<a href="index.php" class="section-logo-bug white-bg repaint z-4">EW</a>
<?php endif; ?>
	<div class="rpg-links <?php echo $rpgLinksClass; ?>">
		<span class="rpg-links-dot" aria-hidden="true"></span>
		<?php foreach ($rpgLinks as $href => $label): ?>
			<a href="<?php echo $href; ?>"><badge class="badge"><?php echo $label; ?></badge></a>
		<?php endforeach; ?>
	</div>
<?php if ($rpgLinksInvert): ?>
</div>
<?php endif; ?>
