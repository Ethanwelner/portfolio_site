<?php
// The lore popup, filled by showLoreModal() in php/javascript-loads.php.
// $loreModalDark gives it a dark panel, as on creator.php.
$loreModalDark = $loreModalDark ?? false;
require_once __DIR__ . '/components/buttons.php';
?>
<div class="lore-modal<?php echo $loreModalDark ? ' lore-modal-dark' : ''; ?>" role="dialog" aria-modal="true" aria-labelledby="lore-modal-title">
	<div class="lore-modal-panel<?php echo $loreModalDark ? ' black-bg' : ''; ?>">
		<button type="button" class="<?php echo sf_button_class( array( 'tone' => $loreModalDark ? 'light' : 'dark', 'round' => 'lg' ), 'lore-modal-close' ); ?>" aria-label="Close">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
				<path d="M2 2l16 16M18 2L2 18" fill="none" stroke="currentColor" stroke-width="2"/>
			</svg>
		</button>
		<div class="lore-modal-scroll">
			<h4 class="lore-modal-title" id="lore-modal-title"></h4>
			<div class="lore-modal-body"></div>
		</div>
	</div>
</div>
