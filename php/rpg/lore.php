<?php
// Each slug maps to a body partial at php/rpg/lore/{slug}.php.
function sf_lore_titles() {
	static $titles = [
		'first-ai-panic' => 'The First AI Panic',
		'end-of-science' => 'The End of Science',
		'nuclear-disarmament' => 'Nuclear Disarmament',
		'interplanetary-colonization' => 'Interplanetary Colonization',
		'exodus' => 'Exodus',
		'the-gift' => 'The Gift',
		'rebirth-of-science' => 'The Rebirth of Science',
		'first-interstellar-expansion' => 'First Interstellar Expansion',
		'first-switch-gate-catastrophe' => 'The First Switch-Gate Catastrophe',
	];
	return $titles;
}

function sf_lore_title($slug) {
	$titles = sf_lore_titles();
	return $titles[$slug];
}

function sf_lore_body($slug) {
	include __DIR__ . '/lore/' . $slug . '.php';
}

function sf_lore_entry($slug, $heading = 'h4') {
	echo '<div class="lore-entry" id="lore-' . $slug . '">';
	echo '<' . $heading . ' class="lore-title">' . sf_lore_title($slug) . '</' . $heading . '>';
	echo '<div class="lore-body">';
	sf_lore_body($slug);
	echo '</div></div>';
}

function sf_lore_entries($slugs, $heading = 'h4') {
	foreach ($slugs as $i => $slug) {
		if ($i > 0) {
			echo '<div class="bumper"></div>';
		}
		sf_lore_entry($slug, $heading);
	}
}

function sf_lore_link($slug, $text) {
	return '<a href="#lore-' . $slug . '" class="lore-link" data-lore-open="' . $slug . '" aria-haspopup="dialog">' . $text . '</a>';
}
