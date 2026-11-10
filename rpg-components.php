<?php
// Strange Frontiers component library. Hidden: nothing links here, it's
// left out of the sitemap, and search engines are asked not to index it.
// Every card kind is drawn by its component in php/rpg/components/cards.php,
// with real content from the site and the creator, on a light band and a
// dark one to show it looks the same in both.
require_once 'php/rpg/lore.php';
require_once 'php/rpg/components/cards.php';
require_once 'php/rpg/components/buttons.php';
require_once 'php/rpg/components/stats.php';
require_once 'php/rpg/components/sheet.php';
require_once 'php/rpg/components/npc-sheet.php';
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

// Button icons, as the creator draws them (src/app/components/ui.tsx)
$sf_icon = function ( $name ) {
	$icons = array(
		'download' => 'M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.670-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z',
		'restore'  => 'M496 48V192c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94c14.22-10.53 34.22-7.75 44.81 6.375c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32S496 30.31 496 48z',
		'send'     => 'M511.1 255.1c0 12.8-7.625 24.38-19.41 29.41L44.6 477.4c-4.062 1.75-8.344 2.594-12.59 2.594c-8.625 0-17.09-3.5-23.28-10.05c-9.219-9.766-11.34-24.25-5.344-36.27l73.66-147.3l242.1-30.37L77.03 225.6l-73.66-147.3C-2.623 66.3-.4982 51.81 8.72 42.05c9.25-9.766 23.56-12.75 35.87-7.453L492.6 226.6C504.4 231.6 511.1 243.2 511.1 255.1z',
	);
	return '<svg class="icon" viewBox="0 0 512 512" aria-hidden="true"><path d="' . $icons[ $name ] . '"/></svg>';
};
$sf_sign = '<svg class="sign-icon" viewBox="0 0 448 512" aria-hidden="true"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.990H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>';
$sf_close = '<svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><path d="M2 2l16 16M18 2L2 18" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
// Each button option, drawn by sf_button(), with what the creator uses it for
$sf_button_rows = array(
	'Tone' => array(
		array( $sf_icon( 'download' ) . ' Download', array(), 'gray, the default: Download, Import, Print, Cancel' ),
		array( 'Build it', array( 'tone' => 'primary' ), 'primary, the creator’s green: Build it, the next step, Submit' ),
		array( 'Replace image', array( 'tone' => 'dark' ), 'dark: Replace image, Switch character' ),
		array( 'Yes', array( 'tone' => 'light' ), 'light: on a dark panel' ),
		array( 'New', array( 'tone' => 'ghost' ), 'ghost: New, Yes and Cancel in the creator’s hero' ),
		array( 'Delete', array( 'tone' => 'danger' ), 'danger' ),
	),
	'Size' => array(
		array( 'Add<span class="sheet-section-add-noun"> Condition</span>', array( 'size' => 'small', 'tone' => 'condition' ), 'small, condition: a section’s Add' ),
		array( 'Add<span class="sheet-section-add-noun"> item</span>', array( 'size' => 'small', 'tone' => 'item' ), 'small, item' ),
		array( 'Add<span class="sheet-section-add-noun"> traits</span>', array( 'size' => 'small', 'tone' => 'primary' ), 'small, primary' ),
		array( $sf_icon( 'download' ) . ' Download character', array( 'size' => 'pill' ), 'pill: Player Tools’ badges' ),
		array( 'Level up', array( 'size' => 'pill', 'tone' => 'primary' ), 'pill, primary' ),
	),
	'Round' => array(
		array( $sf_sign, array( 'round' => 'xs', 'attrs' => array( 'aria-label' => 'Add one' ) ), 'xs, 24px: a picker’s count and Rank' ),
		array( $sf_sign, array( 'round' => 'sm', 'tone' => 'primary', 'ready' => true, 'attrs' => array( 'aria-label' => 'Add one' ) ), 'sm, 28px: a stat’s − and +, green and glitching while usable' ),
		array( $sf_icon( 'restore' ), array( 'round' => 'md', 'attrs' => array( 'aria-label' => 'Restore' ) ), 'md, 32px: HP, VP, SP and MP, Clear' ),
		array( $sf_icon( 'send' ), array( 'round' => 'md', 'tone' => 'primary', 'attrs' => array( 'aria-label' => 'Send' ) ), 'md, primary: Send' ),
		array( $sf_sign, array( 'round' => 'lg', 'attrs' => array( 'aria-label' => 'Add one' ) ), 'lg, 36px: the Level, a Condition’s Rank' ),
		array( $sf_close, array( 'round' => 'lg', 'tone' => 'dark', 'attrs' => array( 'aria-label' => 'Close' ) ), 'lg, dark: the lore popup’s close' ),
	),
	'Kind' => array(
		array( 'Caravaneer', array( 'kind' => 'link' ), 'link: a Kind or package, a Knowledge, Remove' ),
		array( 'Grosh', array( 'kind' => 'bare' ), 'bare: a value or an icon to click' ),
	),
	'State' => array(
		array( 'Download', array( 'disabled' => true ), 'disabled' ),
		array( 'Traits', array( 'tone' => 'primary', 'waiting' => true ), 'waiting: faded, but it works (the next step before its step is done)' ),
		array( 'Traits', array( 'tone' => 'primary', 'ready' => true ), 'ready: glitches, waiting on the player' ),
		array( 'Building 0:12', array( 'tone' => 'primary', 'disabled' => true, 'attrs' => array( 'aria-busy' => 'true' ) ), 'busy: working, at full strength' ),
	),
);
$sf_button_table = function () use ( $sf_button_rows ) {
	foreach ( $sf_button_rows as $group => $rows ) {
		echo '<p class="sf-library-label">' . $group . '</p><div class="sf-library-buttons">';
		foreach ( $rows as $row ) {
			echo '<div class="sf-library-button">' . sf_button( $row[0], $row[1] ) . '<span class="sf-library-note">' . sf_card_e( $row[2] ) . '</span></div>';
		}
		echo '</div>';
	}
};

// Where each component is used
$sf_used_in = array(
	'button'     => array(
		'Every button in the Character Creator and Player Tools (src/app/components/Button.tsx)',
		'php/rpg/lore-modal-shell.php: the lore popup’s close',
		'php/rpg/components/cards.php: a folding card’s chevron (bare)',
	),
	'trait'      => array(
		'php/rpg/rpg-traits.php: Trait Categories and Example Traits',
		'php/rpg/rpg-incidents.php: Dress Wounds',
		'php/rpg/rpg-character.php: the sample sheet’s Healthy Condition, Abilities (closed, keeping their effect), Skills (closed), Other Traits, and its Knowledges’ popups',
		'php/rpg/components/npc-sheet.php: an NPC’s or monster’s Traits (Murk Legs’ Dark Haze)',
	),
	'item'       => array(
		'php/rpg/items.php: sf_equipment_card(), the Item Types and Example Items',
		'php/rpg/magic-items.php: sf_magic_item_card(), Artifacts, Enchantments and Potions',
		'php/rpg/components/npc-sheet.php: an NPC’s or monster’s Attacks and Items (Murk Legs)',
		'php/rpg/rpg-character.php: the sample sheet’s Items (count, read-only Equip, closed)',
	),
	'background' => array(
		'php/rpg/background-card.php: sf_background_card(), beside the sample sheet, in its popups and in Building a Dreftian',
	),
	'stats'      => array(
		'php/rpg/rpg-stats.php: Example Stats (plain)',
		'php/rpg/rpg-character.php: the sample sheet’s stats (max)',
		'The Character Creator’s Sheet (max) and Stats step (edit), and Player Tools’ sheet (plain) and level up (edit) (src/app/components/stats.tsx)',
	),
	'npc'        => array(
		'php/rpg/lore/murk-legs.php: Murk Legs, in its lore entry',
	),
	'sheet'      => array(
		'php/rpg/rpg-character.php: the sample sheet (sample)',
		'Player Tools’ sheet (play) and the Character Creator’s Sheet step (build) (src/app/components/sheet-layout.tsx, through Sheet.tsx)',
	),
);

// Stat blocks: Edwin's stats, and a character with Magic (a package's bonus point first)
$sf_stat = function ( $name, $bonus, $value, $max = 15 ) {
	return array( 'name' => $name, 'bonus' => $bonus, 'value' => $value, 'max' => $max );
};
$sf_edwin_stats = array(
	array( 'group' => 'physical', 'core' => 1, 'stats' => array( $sf_stat( 'Endurance', 1, 2 ), $sf_stat( 'Power', 1, 2 ), $sf_stat( 'Grace', 2, 3 ) ) ),
	array( 'group' => 'social', 'core' => 3, 'stats' => array( $sf_stat( 'Empathy', 1, 3 ), $sf_stat( 'Persuasion', 1, 4 ), $sf_stat( 'Demeanor', 1, 5 ) ) ),
	array( 'group' => 'mental', 'core' => 2, 'stats' => array( $sf_stat( 'Logic', 1, 1 ), $sf_stat( 'Intuition', 1, 2 ), $sf_stat( 'Memory', 1, 6 ) ) ),
);
$sf_mage_stats = array(
	array( 'group' => 'mental', 'core' => 3, 'stats' => array( $sf_stat( 'Logic', 1, 4 ), $sf_stat( 'Intuition', 1, 4 ), $sf_stat( 'Memory', 1, 4 ) ) ),
	array( 'group' => 'magic', 'core' => 3, 'bonus' => 1 ),
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
			.sf-library-buttons { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 24px 32px; margin-bottom: 24px; }
			.sf-library-button { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; max-width: 220px; }
			.sf-library-note { font-size: .75rem; opacity: .7; }
			.sf-library-stats { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(560px, 100%), 1fr)); align-items: start; gap: 16px; }
			.sf-library-stat-box { padding: 24px; background-color: #292b2c; border-radius: 12px; }
			.sf-library-sheet { margin-top: 64px; }
			.sf-library-backgrounds { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr)); align-items: start; gap: 16px; }
		</style>
	</head>
	<body class="white-bg">
		<div class="sf-library-band">
			<div class="container">
				<h3 class="sub-title mb-3">Strange Frontiers Components</h3>
				<div class="copy stinger black mb-3">Component Library</div>
				<p class="copy">There’s one button component and one card per kind of card: Trait, Item and Background. Buttons come from <code>php/rpg/components/buttons.php</code>, styled by <code>css/sf-buttons.css</code>, a copy of the creator’s <code>src/app/buttons.css</code>.</p>
				<p class="copy">For the cards, there’s one per kind of card: Trait, Item and Background. The Character Creator’s and Player Tools’ cards are the reference. The site draws the same markup from <code>php/rpg/components/cards.php</code>, and <code>css/sf-cards.css</code> is a copy of the creator’s <code>src/app/cards.css</code>, so a card looks the same everywhere: in a light section, a dark one or a popup.</p>
				<p class="copy">Each card takes options that say how it behaves where it’s used, under the same names in the creator and here. A Trait card can fold (opening from the chevron at the end of its bar, and only there) and keep its effect in view while it’s closed. An Item card can show a count, an Equip box and fold. The creator adds the live ones the site can’t: a working Equip box, Edit and Note on items, and picking a card.</p>
				<p class="copy">The stat block works the same way: <code>php/rpg/components/stats.php</code> draws the creator’s markup, and <code>css/sf-stats.css</code> is a copy of the creator’s <code>src/app/stats.css</code>. Player Tools’ sheet is the reference.</p>
				<p class="copy">NPCs and monsters get the short-form sheet, <code>php/rpg/components/npc-sheet.php</code>, styled by <code>css/sf-npc-sheet.css</code>. It’s the site’s own for now.</p>
				<p class="copy">So does the character sheet’s layout: <code>php/rpg/components/sheet.php</code> draws the creator’s markup, and <code>css/sf-sheet.css</code> is a copy of the creator’s <code>src/app/sheet.css</code>. Player Tools’ sheet is the reference, and each sheet’s context sets what it draws.</p>
				<p class="copy mb-0">This page isn’t linked from anywhere. Under each component is where the site uses it.</p>
			</div>
		</div>

		<!-- Buttons -->
		<div class="sf-library-band">
			<div class="container">
				<div class="line-container"><h5><strong>Button</strong></h5><div class="line"></div></div>
				<pre class="sf-library-api">sf_button( 'Build it', array( 'tone' =&gt; 'primary', 'ready' =&gt; true ) );
sf_button_class( array( 'round' =&gt; 'lg', 'tone' =&gt; 'dark' ), 'lore-modal-close' );
tone: gray | primary | dark | light | ghost | danger | condition | item
size: default | small | pill    round: xs | sm | md | lg    kind: bare | link
states: ready, waiting, disabled, aria-busy; also: class, href, attrs</pre>
				<p class="sf-library-label">Used in</p>
				<?php $sf_list( $sf_used_in['button'] ); ?>
				<?php $sf_button_table(); ?>
				<p class="sf-library-label">Tabs (css/rpg.css)</p>
				<div class="tech-fields"><div class="tech-field-tab-list" role="tablist"><button type="button" class="tech-field-tab is-active" role="tab" aria-selected="true">Example Traits</button><button type="button" class="tech-field-tab" role="tab" aria-selected="false">Trait Rules</button></div></div>
			</div>
		</div>
		<div class="sf-library-band is-dark">
			<div class="container">
				<p class="sf-library-label">The same buttons on a dark section</p>
				<?php $sf_button_table(); ?>
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

		<!-- Stat block -->
		<div class="sf-library-band">
			<div class="container">
				<div class="line-container"><h5><strong>Stat Block</strong></h5><div class="line"></div></div>
				<pre class="sf-library-api">sf_stat_block( array( array( 'group' =&gt; 'physical', 'core' =&gt; 3, 'stats' =&gt; array( array( 'name' =&gt; 'Endurance', 'value' =&gt; 5, 'bonus' =&gt; 1, 'max' =&gt; 15 ), … ) ), … ), array( 'max' =&gt; true ) );
group: physical | social | mental | magic (Magic takes core and an optional bonus, no stats)
options: max (true: each stat's maximum beside its number). The creator adds edit (the − and + on each stat) for its Stats step and Player Tools' level up.</pre>
				<p class="sf-library-label">Used in</p>
				<?php $sf_list( $sf_used_in['stats'] ); ?>
				<p class="sf-library-label">Plain, as on Player Tools’ sheet, then max, as on the creator’s Sheet</p>
				<div class="sf-library-stats">
					<div class="sf-library-stat-box"><?php sf_stat_block( $sf_edwin_stats ); ?></div>
					<div class="sf-library-stat-box"><?php sf_stat_block( $sf_edwin_stats, array( 'max' => true ) ); ?></div>
				</div>
				<p class="sf-library-label" style="margin-top: 32px">Magic, a diamond per point, with a package’s bonus point first</p>
				<div class="sf-library-stats">
					<div class="sf-library-stat-box"><?php sf_stat_block( $sf_mage_stats ); ?></div>
				</div>
			</div>
		</div>

		<!-- Sheet layout -->
		<div class="sf-library-band">
			<div class="container">
				<div class="line-container"><h5><strong>Sheet Layout</strong></h5><div class="line"></div></div>
				<pre class="sf-library-api">sf_sheet_layout( array( 'context' =&gt; 'sample', 'level' =&gt; 6, 'who' =&gt; …, 'description' =&gt; …, 'resources' =&gt; sf_sheet_full_resources( array( 'hp' =&gt; 17, … ) ), 'stats' =&gt; …, 'movement' =&gt; '10 m', 'resistances' =&gt; …, 'conditions' =&gt; …, 'items' =&gt; …, 'knowledges' =&gt; …, 'abilities' =&gt; …, 'skills' =&gt; …, 'skills_aside' =&gt; …, 'other' =&gt; … ), array( 'class' =&gt; 'sample-sheet' ) );
Each slot is HTML (sf_sheet_capture() turns a component that echoes into it). sf_sheet_title( $text, $aside ) draws a box's ruled title.
context: play | build | sample. Only sample is drawn on the site; the creator draws play and build.</pre>
				<p class="sf-library-label">Each context’s rules</p>
				<ul class="copy sf-library-used">
					<li><strong>play</strong> (Player Tools, at the table): Level up on the blob’s corner; Download, Switch and the rules problems over the sheet; HP and the rest live, with their controls; the stats plain, editable while there are points to place; Conditions and Items changed as play goes; Add traits beside the picks left.</li>
					<li><strong>build</strong> (the Character Creator’s Sheet step): no Level up or play actions (its Download, Import and Print sit over the sheet); resources at full; each stat’s maximum; the name, portrait, description, starting Conditions and Items editable; picks left shown, spent in the Traits step.</li>
					<li><strong>sample</strong> (the site’s sample sheet): all of it, as it would look in play, with nothing to change. Resources at full, each stat’s maximum, cards and links that open.</li>
				</ul>
				<p class="sf-library-label">Used in</p>
				<?php $sf_list( $sf_used_in['sheet'] ); ?>
				<p class="sf-library-label">The boxes, with what fills each</p>
				<?php
				$sf_slot = function ( $text ) {
					return '<p class="sf-sheet-empty">' . $text . '</p>';
				};
				sf_sheet_layout(
					array(
						'context'      => 'sample',
						'level'        => 1,
						'who'          => $sf_slot( 'who: the portrait, name and character line' ),
						'description'  => $sf_slot( 'description' ),
						'resources'    => sf_sheet_full_resources( array( 'hp' => 10, 'vp' => 10, 'sp' => 10 ) ),
						'stats'        => $sf_slot( 'stats: the stat block' ),
						'movement'     => '10 m',
						'resistances'  => sf_sheet_title( 'Resistances' ) . $sf_slot( 'resistances' ),
						'conditions'   => sf_sheet_title( 'Conditions', '', 'h4', true ) . $sf_slot( 'conditions: Condition cards' ),
						'items'        => sf_sheet_title( 'Items', '', 'h4', true ) . $sf_slot( 'items: item cards' ),
						'knowledges'   => $sf_slot( 'knowledges: the list of links' ),
						'abilities'    => $sf_slot( 'abilities: Trait cards' ),
						'skills'       => $sf_slot( 'skills: Trait cards' ),
						'skills_aside' => '<span class="sf-sheet-aside">skills_aside</span>',
						'other'        => sf_sheet_title( 'Other Traits' ) . $sf_slot( 'other: anything else, when there is any' ),
					),
					array( 'class' => 'sf-library-sheet' )
				);
				?>
			</div>
		</div>

		<!-- NPC and monster sheet -->
		<div class="sf-library-band">
			<div class="container">
				<div class="line-container"><h5><strong>NPC and Monster Sheet</strong></h5><div class="line"></div></div>
				<pre class="sf-library-api">sf_npc_sheet( array( 'name' =&gt; 'Murk Legs', 'kind' =&gt; 'Monster, Isekai', 'description' =&gt; …, 'move' =&gt; '10 m', 'stats' =&gt; array( 'Physical' =&gt; 12, 'Endurance' =&gt; 10, …, 'Magic' =&gt; 2 ), 'resources' =&gt; array( 'hp' =&gt; 40 ), 'attacks' =&gt; array( … ), 'traits' =&gt; array( … ), 'items' =&gt; array( … ) ), array( 'fold' =&gt; 'closed' ) );
HP, VP, SP and MP follow the creator's rules (HP 10 + Physical focus Stats, VP Social, SP Mental, MP 3 per Magic); 'resources' sets any over them. Magic, description, attacks, traits and items are optional: what's left out isn't drawn.
options: fold ('closed' or 'open': the cards fold, for a page with many), heading (the name's level, h5 by default)</pre>
				<p class="sf-library-label">Used in</p>
				<?php $sf_list( $sf_used_in['npc'] ); ?>
				<p class="sf-library-label">Murk Legs, cards open, as in its lore entry</p>
				<?php include 'php/rpg/lore/murk-legs.php'; ?>
				<p class="sf-library-label" style="margin-top: 32px">A made-up NPC to show the options (not setting content): Magic, a description and Items, its cards folded</p>
				<?php
				sf_npc_sheet(
					array(
						'name'        => 'Hedge Witch',
						'kind'        => 'NPC, Dreft',
						'description' => 'A village healer who knows a little more magic than she lets on.',
						'move'        => '10 m',
						'stats'       => array(
							'Physical' => 1, 'Endurance' => 2, 'Power' => 1, 'Grace' => 2,
							'Social' => 2, 'Empathy' => 4, 'Persuasion' => 3, 'Demeanor' => 2,
							'Mental' => 3, 'Logic' => 3, 'Intuition' => 5, 'Memory' => 4,
							'Magic' => 2,
						),
						'attacks'     => array(
							array( 'name' => 'Walking Staff', 'damage' => '4 Blunt', 'formula' => 'Power', 'range' => '2 m', 'chips' => array( 'Melee' ), 'description' => 'A gnarled ash staff.' ),
						),
						'traits'      => array(
							array( 'kind' => 'skill', 'name' => 'Herbalism', 'rank' => 2, 'effect' => 'Rank ×5 added to Skill Checks involving herbs and remedies.' ),
						),
						'items'       => array(
							array( 'name' => 'Healing Potion', 'category' => 'Potion', 'description' => 'A small vial, brewed at Rank 1.', 'count' => 2 ),
						),
					),
					array( 'fold' => 'closed' )
				);
				?>
			</div>
		</div>

		<?php include 'php/rpg/lore-modal.php'; ?>
		<?php include 'php/javascript-loads.php'; ?>
	</body>
</html>
