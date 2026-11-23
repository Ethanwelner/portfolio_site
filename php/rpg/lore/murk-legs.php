<?php require_once dirname( __DIR__ ) . '/murk-legs-sheet.php'; ?>
<p class="copy">
	Stats for a typical Murk Legs. The full entry is coming soon.
</p>
<!-- In the half-width column the sheets take everywhere (.sf-npc-grid) -->
<div class="sf-npc-grid">
	<?php
	sf_monster_sheet( sf_murk_legs() );
	?>
</div>
