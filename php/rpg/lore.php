<?php
// Each slug maps to a body partial at php/rpg/lore/{slug}.php.
function sf_lore_titles() {
	static $titles = [
		'first-ai-panic' => 'The First AI Panic',
		'drone-wars' => 'The Drone Wars',
		'end-of-science' => 'The End of Science',
		'nuclear-disarmament' => 'Nuclear Disarmament',
		'interplanetary-colonization' => 'Interplanetary Colonization',
		'exodus' => 'Exodus',
		'the-gift' => 'The Gift',
		'rebirth-of-science' => 'The Rebirth of Science',
		'first-interstellar-expansion' => 'First Interstellar Expansion',
		'first-switch-gate-catastrophe' => 'The First Switch-Gate Catastrophe',
		'paraloka' => '1/a/384 - “<i>Paraloka</i>”',
		'isekai' => '516/a/198 - “<i>Isekai</i>”',
		'gastown' => '76/f/55 - “<i>Gastown</i>”',
		'the-lost-world' => '380/c/12 - “<i>The Lost World</i>”',
		'flatland' => '419/f/05 - “<i>Flatland</i>”',
		'leviathan' => '513/y/11 - “<i>Leviathan</i>”',
		'saturdays-furnace' => '65/T/137 - “<i>Saturday’s Furnace</i>”',
		'st-245-e6' => 'St-245/E6 - “<i>Solum Inane</i>”',
		'st-1-e1' => 'St-1/E1 - “<i>Fast Hydrogen</i>”',
		'co-h2o-e2' => 'Co-H2O/E2 - “<i>Light Water</i>”',
		'switch-gates' => 'Switch Gates',
		'lorentz-field-generator' => 'Lorentz Field Generators',
		'aether-sails' => 'Aether Sails',
		'fuel-gates' => 'Fuel Gates',
		'skiffs' => 'Skiffs',
		'drone-craft' => 'Drone Craft',
		'shuttles' => 'Shuttles',
		'trucks' => 'Trucks',
		'fighters' => 'Fighters',
		'patrol-craft' => 'Patrol Craft',
		'cutters' => 'Cutters',
		'tugs' => 'Tugs',
		'corvettes' => 'Corvettes',
		'yachts' => 'Yachts',
		'lifters' => 'Lifters',
		'frigates' => 'Frigates',
		'administration-craft' => 'Administration Craft',
		'cruisers' => 'Cruisers',
		'carriers' => 'Carriers',
		'miners' => 'Miners',
		'foremen' => 'Foremen',
		'freighters' => 'Freighters',
		'dreadnoughts' => 'Dreadnoughts',
		'stellar-carriers' => 'Stellar Carriers',
		'colony-ships' => 'Colony Ships',
		'arks' => 'Arks',
		'kashgar-ark' => 'Kashgar Ark',
		'4544-xanthus' => '4544 Xanthus',
		'boneyard' => 'Boneyard',
		'tetra' => 'Tetra',
		'new-york' => 'New York',
		'zhulong' => 'Zhulong (The Torch Dragon)',
		'general-robotics' => 'General Robotics',
		'holy-oak-discovery-services' => 'Holy Oak Discovery Services, LLC',
		'huanghe-yanjiuyuan' => 'Huánghé Yánjiūyuàn (Yellow River Research Institute)',
		'kashgar-mindworks' => 'Kashgar Mindworks',
		'lagos-core-defense' => 'Lagos-Core Defense',
		'luna-hi' => 'Luna-HI',
		'luxoptica' => 'Luxoptica',
		'mars-creative-autonomy' => 'Mars Creative Autonomy',
		'meishou-jituan' => 'Měishǒu Jítuán (Beautiful Hand Group)',
		'plum-technologies' => 'Plum Technologies',
		'saltwater-energetics' => 'Saltwater Energetics',
		'shine' => 'Shine!',
		'sistemas-de-controle-amazonia' => 'Sistemas de Controle Amazônia',
		'stellar-omnium' => 'Stellar Omnium',
		'tetra-frontiers-co' => 'Tetra Frontiers Co.',
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

// Slugs already rendered on the page, so the modal store can skip them.
function sf_lore_rendered($slug = null) {
	static $rendered = [];
	if ($slug !== null) {
		$rendered[$slug] = true;
	}
	return $rendered;
}

// $heading is an h-tag name, or 'line' for the ruled h5 heading style.
function sf_lore_entry($slug, $heading = 'h4', $headingClass = '') {
	sf_lore_rendered($slug);
	$title = sf_lore_title($slug);
	echo '<div class="lore-entry" id="lore-' . $slug . '">';
	if ($heading === 'line') {
		echo '<div class="line-container"><h5><strong class="lore-title">' . $title . '</strong></h5><div class="line"></div></div>';
	} else {
		echo '<' . $heading . ' class="lore-title ' . $headingClass . '">' . $title . '</' . $heading . '>';
	}
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
