<?php require_once __DIR__ . '/lore.php'; ?>
<div class="lore-store" hidden>
	<?php foreach (array_keys(sf_lore_titles()) as $slug) { if (! isset(sf_lore_rendered()[$slug])) { sf_lore_entry($slug); } } ?>
	<?php // Opened from the footer's Attributions link. Not a lore-entry, so the header search skips it. ?>
	<div class="attribution-entry" id="lore-attribution">
		<h4 class="lore-title">Attributions</h4>
		<div class="lore-body">
			<p class="copy">
				Some of the art in Strange Frontiers comes from other creators who were kind enough to share their work. Thanks to all of them.
			</p>
			<ul class="copy mb-0">
				<li><a href="https://fropl.itch.io/sci-fi-portrait-pack" target="_blank" rel="noopener">Sci-fi Portrait Pack</a> by bobbobfred, with the Vireo 4 palette by Snowy Owl. Character portraits.</li>
				<li><a href="https://watabou.github.io/index.html" target="_blank" rel="noopener">Watabou’s Procgen Arcana</a> by Oleg Dolya (Watabou). Map generators.</li>
				<li><a href="https://deep-fold.itch.io/pixel-planet-generator" target="_blank" rel="noopener">Pixel Planet Generator</a> by Deep-Fold. Planets.</li>
				<li>Icons from <a href="https://game-icons.net" target="_blank" rel="noopener">game-icons.net</a> by Lorc, sbed, and Skoll, under <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener">CC BY 3.0</a>. Damage type icons.</li>
			</ul>
		</div>
	</div>
</div>
<div class="lore-modal" role="dialog" aria-modal="true" aria-labelledby="lore-modal-title">
	<div class="lore-modal-panel">
		<button type="button" class="lore-modal-close" aria-label="Close">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
				<path d="M2 2l16 16M18 2L2 18" fill="none" stroke="currentColor" stroke-width="2"/>
			</svg>
		</button>
		<h4 class="lore-modal-title" id="lore-modal-title"></h4>
		<div class="lore-modal-body"></div>
	</div>
</div>
