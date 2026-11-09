<?php
// Strange Frontiers component library. Hidden: nothing links here, it's
// left out of the sitemap, and search engines are asked not to index it.
// Every card kind is drawn by its component in php/rpg/components/cards.php,
// with real content from the site and the creator, on a light band and a
// dark one to show it looks the same in both.
require_once 'php/rpg/lore.php';
require_once 'php/rpg/components/cards.php';
include_once 'php/rpg/magic-items.php';

$sf_sample = json_decode( file_get_contents( 'php/rpg/sample-character.json' ), true );
$sf_dreft  = json_decode( file_get_contents( 'php/rpg/dreftian-backgrounds.json' ), true );
$sf_trait  = function ( $name ) use ( $sf_sample ) {
	foreach ( $sf_sample['traits'] as $t ) {
		if ( $t['name'] === $name ) {
			return $t;
		}
	}
};

// Trait cards: one of each kind, then the variants (Rank, flags, magic types,
// an Action, a Condition's duration, Dreft, folding, where it came from)
$sf_traits = array(
	array(
		'kind'   => 'knowledge',
		'name'   => 'Local History',
		'rank'   => 1,
		'effect' => 'This character has knowledge of the history of a specific local region and can be assumed to be familiar with local facts like names, locations, and occurrences.',
		'needs'  => 'Memory 3',
	),
	array(
		'kind'   => 'language',
		'name'   => 'English (Spoken)',
		'effect' => $sf_trait( 'English (Spoken)' )['effect'],
		'from'   => $sf_trait( 'English (Spoken)' )['from'],
	),
	array(
		'kind'   => 'skill',
		'name'   => 'Haggler',
		'effect' => $sf_trait( 'Haggler' )['effect'],
		'from'   => $sf_trait( 'Haggler' )['from'],
	),
	array(
		'kind'   => 'ability',
		'name'   => 'Rally',
		'effect' => 'This character gains the Rally Action.',
		'action' => 'Rally: As a Full RP Action, this character ends the Frightened Condition on every ally within 10 m who can hear them.',
		'needs'  => 'Demeanor 5, Persuasion 4',
	),
	array(
		'kind'   => 'ability',
		'name'   => 'Dark Haze',
		'flags'  => array( 'Ranked' ),
		'types'  => array( 'Illusion' ),
		'effect' => 'This character gains the Cast Dark Haze Action.',
		'action' => 'Cast Dark Haze: This character may spend 2 MP to give the Dark Haze Condition to a character within 3 m. The Condition’s Rank is equal to the caster’s Dark Haze Rank.',
		'needs'  => 'Magic 4',
	),
	array(
		'kind'      => 'condition',
		'name'      => 'Stone Skin',
		'flags'     => array( 'Conveyed', 'Ranked' ),
		'types'     => array( 'Enchantment' ),
		'temporary' => 'Every hour after a character is affected by Stone Skin, it loses one Rank of Stone Skin.',
		'effect'    => 'This character gains Rank *3 resistance to all Physical damage types.',
	),
	array(
		'kind'   => 'condition',
		'name'   => 'Dark Haze',
		'rank'   => 2,
		'flags'  => array( 'Permanent' ),
		'effect' => 'Characters trying to perceive any visual information about this character must succeed on an Intuition check of 20 (10 per Rank). If they fail, they can’t make sense of what they’re looking at and see only a dark, shimmering haze.',
		'from'   => 'Murk Legs',
	),
	array(
		'kind'   => 'circumstance',
		'name'   => 'Caravan Charter',
		'region' => 'dreft',
		'flags'  => array( 'Conveyed' ),
		'effect' => 'This character holds a charter to lead a caravan on Dreft’s trade roads. They can hire guards and drivers under it, and their caravan is allowed through the kingdom’s waystations and tolls.',
	),
	array(
		'kind'   => 'skill',
		'name'   => 'Curse Sense',
		'region' => 'dreft',
		'effect' => 'This character gains +5 to Intuition rolls relating to noticing cursed or dangerous magical objects.',
		'needs'  => 'Intuition 4, Magic 1',
	),
	array(
		'kind'   => 'other',
		'name'   => 'Long in the Tooth',
		'region' => 'dreft',
		'flags'  => array( 'Background' ),
		'effect' => 'This character has kept their teeth through a long life and has the Long Toothed Condition.',
		'needs'  => 'Power 10, Endurance 5, Demeanor 5, Middle Aged or Older',
	),
);
// Folding (fold), as on a character sheet: a Skill closed to its bar and one
// open, then an Ability closed to its name and effect (keep)
$sf_folding = array(
	array(
		'kind'   => 'skill',
		'name'   => 'Concealment',
		'effect' => $sf_trait( 'Concealment' )['effect'],
		'from'   => $sf_trait( 'Concealment' )['from'],
		'fold'   => 'closed',
	),
	array(
		'kind'   => 'skill',
		'name'   => 'Wielder: Dagger',
		'rank'   => 1,
		'effect' => $sf_trait( 'Wielder: Dagger (1)' )['effect'],
		'from'   => $sf_trait( 'Wielder: Dagger (1)' )['from'],
		'fold'   => 'open',
	),
	array(
		'kind'   => 'ability',
		'name'   => 'Bolt',
		'effect' => $sf_trait( 'Bolt' )['effect'],
		'action' => $sf_trait( 'Bolt' )['action'],
		'from'   => $sf_trait( 'Bolt' )['from'],
		'fold'   => 'closed',
		'keep'   => true,
	),
);

// Item cards: the Example Items as rpg-items.php lists them, the magic Items
// from the Adventures page's Magic tab, and an NPC's natural weapons
$sf_items = array();
foreach ( array( 'Weapons', 'Wearables', 'Equipment' ) as $group ) {
	foreach ( array_slice( sf_example_items()[ $group ], 0, 2 ) as $x ) {
		$sf_items[] = array(
			'name'        => $x[0],
			'category'    => $x[1],
			'plane'       => $x[2],
			'description' => $x[3],
			'value'       => $x[4],
			'currency'    => $x[5],
			'damage'      => $x[6] ?? '',
			'resistances' => $x[7] ?? '',
			'ranged'      => in_array( $x[0], sf_ranged_items(), true ),
		);
	}
}
foreach ( $sf_magic_item_kinds as $group => $kind ) {
	$m             = $sf_magic_items[ $group ][0];
	$m['category'] = $kind;
	$m['plane']    = 'Isekai';
	if ( isset( $m['value'] ) ) {
		$m['currency'] = 'Luras';
	}
	$sf_items[] = $m;
}
$sf_items[] = array(
	'name'        => 'Massive Claws',
	'damage'      => '10 Slashing',
	'formula'     => 'Power - 5',
	'range'       => '3 m',
	'area'        => '3 m',
	'chips'       => array( 'Melee' ),
	'description' => 'Natural weapon.',
);
$sf_items[] = array(
	'name'        => 'Breath Weapon',
	'damage'      => '1 Blunt + Physical',
	'ranged'      => true,
	'range'       => '10 m',
	'area'        => '3 m',
	'chips'       => array( 'Ranged' ),
	'description' => 'Natural weapon, granted by Natural Breath Weapon.',
);

// The same Item card as each interface draws it: a catalog's (always open),
// a character sheet's (count, read-only Equip, closed to its line), and the
// sheet's open
$sf_item_modes = array(
	array( 'Catalog (no options)', array() ),
	array( 'Sheet: count, equip “on”, fold “closed”', array( 'count' => 1, 'equip' => 'on', 'fold' => 'closed' ) ),
	array( 'Sheet: count, equip “off”, fold “open”', array( 'count' => 2, 'equip' => 'off', 'fold' => 'open' ) ),
);
$sf_pistol = array( 'name' => 'Pistol', 'category' => 'Weapon', 'value' => 600, 'currency' => 'ERC', 'attack' => 'Ranged', 'stat' => 'Grace', 'reload' => 'Partial', 'damage' => '7 Piercing', 'ranged' => true, 'range' => '50 m', 'description' => 'A modern handgun.' );

// Background cards: Edwin's four, then a Dreftian Kind with its Stats and a
// Dreftian Profession
$sf_backgrounds = $sf_sample['background'];
$sf_backgrounds[] = $sf_dreft['kinds'][0];
$sf_backgrounds[] = $sf_dreft['professions'][0];

// Where each component is used
$sf_used_in = array(
	'trait'      => array(
		'php/rpg/rpg-traits.php: Trait Categories and Example Traits',
		'php/rpg/rpg-incidents.php: Dress Wounds',
		'php/rpg/rpg-character.php: the sample sheet’s Healthy Condition, Abilities (closed, keeping their effect), Skills (closed), Other Traits, and its Knowledges’ popups',
		'php/rpg/npc-sheet.php: an NPC’s Traits (Murk Legs’ Dark Haze)',
	),
	'item'       => array(
		'php/rpg/items.php: sf_equipment_card(), the Item Types and Example Items',
		'php/rpg/magic-items.php: sf_magic_item_card(), Artifacts, Enchantments and Potions',
		'php/rpg/npc-sheet.php: an NPC’s Attacks (Murk Legs)',
		'php/rpg/rpg-character.php: the sample sheet’s Items (count, read-only Equip, closed)',
	),
	'background' => array(
		'php/rpg/background-card.php: sf_background_card(), beside the sample sheet, in its popups and in Building a Dreftian',
	),
);
$sf_list = function ( $items ) {
	echo '<ul class="copy sf-library-used">';
	foreach ( $items as $x ) {
		echo '<li>' . sf_card_e( $x ) . '</li>';
	}
	echo '</ul>';
};
?>
<!doctype html>
<html lang="en">
	<head>
		<?php include 'php/head-loads.php'; ?>
		<meta name="robots" content="noindex, nofollow">
		<title>Strange Frontiers Components</title>
		<style>
			.sf-library-band { padding: 48px 0; }
			.sf-library-band.is-dark { background-color: var(--portfolio-black); color: var(--portfolio-white); }
			.sf-library-band.is-dark .copy, .sf-library-band.is-dark h3, .sf-library-band.is-dark h4 { color: var(--portfolio-white); }
			.sf-library-label { margin: 0 0 12px; font-size: .75rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; opacity: .6; }
			.sf-library-used { margin: 0 0 24px; font-size: .875rem; }
			.sf-library-used li { margin-bottom: 4px; }
			.sf-library-api { margin: 0 0 24px; padding: 12px 16px; background: var(--portfolio-near-white); border: 1px solid var(--portfolio-light-gray); border-radius: 4px; font-size: .8125rem; white-space: pre-wrap; }
			.sf-card-grid + .sf-library-label { margin-top: 32px; }
			.sf-library-items { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(360px, 100%), 1fr)); align-items: start; gap: 16px; }
			.sf-library-backgrounds { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr)); align-items: start; gap: 16px; }
		</style>
	</head>
	<body class="white-bg">
		<div class="sf-library-band">
			<div class="container">
				<h3 class="sub-title mb-3">Strange Frontiers Components</h3>
				<div class="copy stinger black mb-3">Component Library</div>
				<p class="copy">There’s one card per kind of card: Trait, Item and Background. The Character Creator’s and Player Tools’ cards are the reference. The site draws the same markup from <code>php/rpg/components/cards.php</code>, and <code>css/sf-cards.css</code> is a copy of the creator’s <code>src/app/cards.css</code>, so a card looks the same everywhere: in a light section, a dark one or a popup.</p>
				<p class="copy">Each card takes options that say how it behaves where it’s used, under the same names in the creator and here. A Trait card can fold (opening from the chevron at the end of its bar, and only there) and keep its effect in view while it’s closed. An Item card can show a count, an Equip box and fold. The creator adds the live ones the site can’t: a working Equip box, Edit and Note on items, and picking a card.</p>
				<p class="copy mb-0">This page isn’t linked from anywhere. Under each component is where the site uses it.</p>
			</div>
		</div>

		<!-- Trait cards -->
		<div class="sf-library-band">
			<div class="container">
				<div class="line-container"><h5><strong>Trait Card</strong></h5><div class="line"></div></div>
				<pre class="sf-library-api">sf_card_trait( array( 'kind' =&gt; 'ability', 'name' =&gt; 'Rally', 'effect' =&gt; '…', 'action' =&gt; 'Rally: …', 'needs' =&gt; 'Demeanor 5, Persuasion 4' ) );
kind: knowledge | language | skill | ability | condition | circumstance | other
optional: rank, plane ('isekai' | 'earth'), chips, flags, types, action (one or an array), grants, temporary, needs, from
options: fold ('open' | 'closed'), keep (true: the effect stays in view while it's closed)</pre>
				<p class="sf-library-label">Used in</p>
				<?php $sf_list( $sf_used_in['trait'] ); ?>
				<p class="sf-library-label">Each kind and variant</p>
				<div class="sf-card-grid">
					<?php foreach ( $sf_traits as $t ) { sf_card_trait( $t ); } ?>
				</div>
				<p class="sf-library-label">fold and keep, as on a character sheet: closed, open, and an Ability closed to its name and effect</p>
				<div class="sf-card-grid">
					<?php foreach ( $sf_folding as $t ) { sf_card_trait( $t ); } ?>
				</div>
			</div>
		</div>
		<div class="sf-library-band is-dark">
			<div class="container">
				<p class="sf-library-label">The same cards on a dark section</p>
				<div class="sf-card-grid">
					<?php foreach ( array( $sf_traits[3], $sf_traits[5], $sf_traits[7], $sf_folding[0] ) as $t ) { sf_card_trait( $t ); } ?>
				</div>
			</div>
		</div>

		<!-- Item cards -->
		<div class="sf-library-band">
			<div class="container">
				<div class="line-container"><h5><strong>Item Card</strong></h5><div class="line"></div></div>
				<pre class="sf-library-api">sf_card_item( array( 'name' =&gt; 'Rifle', 'category' =&gt; 'Weapon', 'plane' =&gt; 'Earth', 'value' =&gt; 1200, 'currency' =&gt; 'ERC', 'damage' =&gt; '7 Piercing', 'ranged' =&gt; true, 'description' =&gt; '…' ) );
optional: value + currency, attack, stat, reload, slot, chips, plane, damage, formula, ranged, range, area, resistances, mp, description, lead, effects
options: count, equip ('on' | 'off'), fold ('open' | 'closed')</pre>
				<p class="sf-library-label">Used in</p>
				<?php $sf_list( $sf_used_in['item'] ); ?>
				<p class="sf-library-label">The same card in each interface</p>
				<div class="sf-library-items">
					<?php foreach ( $sf_item_modes as $mode ) : ?>
						<div>
							<p class="copy small mb-2"><?php echo sf_card_e( $mode[0] ); ?></p>
							<?php sf_card_item( $sf_pistol + $mode[1] ); ?>
						</div>
					<?php endforeach; ?>
				</div>
				<p class="sf-library-label">Weapons, wearables, equipment, magic Items and natural weapons</p>
				<div class="sf-library-items">
					<?php foreach ( $sf_items as $i ) { sf_card_item( $i ); } ?>
				</div>
			</div>
		</div>
		<div class="sf-library-band is-dark">
			<div class="container">
				<p class="sf-library-label">The same cards on a dark section</p>
				<div class="sf-library-items">
					<?php foreach ( array( $sf_items[0], $sf_items[2], $sf_items[ count( $sf_items ) - 2 ] ) as $i ) { sf_card_item( $i ); } ?>
				</div>
			</div>
		</div>

		<!-- Background cards -->
		<div class="sf-library-band">
			<div class="container">
				<div class="line-container"><h5><strong>Background Card</strong></h5><div class="line"></div></div>
				<pre class="sf-library-api">sf_card_background( $background, ', placed in Grace' );
takes a background as the creator exports it: sample-character.json, dreftian-backgrounds.json</pre>
				<p class="sf-library-label">Used in</p>
				<?php $sf_list( $sf_used_in['background'] ); ?>
				<p class="sf-library-label">Edwin’s Kind, Origin, Profession and Past, then a Dreftian Kind and Profession</p>
				<div class="sf-library-backgrounds">
					<?php foreach ( $sf_backgrounds as $b ) { sf_card_background( $b, 'Origin' === $b['slot'] && 'earth' === $b['plane'] ? ', placed in Grace' : '' ); } ?>
				</div>
			</div>
		</div>
		<div class="sf-library-band is-dark">
			<div class="container">
				<p class="sf-library-label">The same cards on a dark section</p>
				<div class="sf-library-backgrounds">
					<?php sf_card_background( $sf_backgrounds[0] ); sf_card_background( $sf_dreft['kinds'][0] ); ?>
				</div>
			</div>
		</div>

		<div class="sf-library-band">
			<div class="container">
				<div class="line-container"><h5><strong>Not Components Yet</strong></h5><div class="line"></div></div>
				<ul class="copy mb-0">
					<li>The sample sheet’s Knowledge and Language list.</li>
				</ul>
			</div>
		</div>

		<?php include 'php/rpg/lore-modal.php'; ?>
		<?php include 'php/javascript-loads.php'; ?>
	</body>
</html>
