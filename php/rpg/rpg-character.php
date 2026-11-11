<?php
require_once __DIR__ . '/lore.php';
require_once __DIR__ . '/core-stat-icons.php';

// Edwin's Kind, background packages and Traits, dumped from the Character
// Creator's content and rules engine (Human, The American Empire: Earth,
// Smuggler and Gutter Trash at Level 6), so the names, effects and sources
// read as they do in the creator
$sf_sample = json_decode( file_get_contents( __DIR__ . '/sample-character.json' ), true );
$sf_e = function ( $text ) {
	return htmlspecialchars( $text, ENT_QUOTES, 'UTF-8' );
};
// A Trait's effect, as the creator shows it: lines starting with "- " are
// bullets, one for each part that does something different; other lines are
// paragraphs
$sf_effect = function ( $text ) use ( $sf_e ) {
	$lines = array_values( array_filter( array_map( 'trim', explode( "\n", $text ) ), 'strlen' ) );
	$bulleted = array_filter( $lines, function ( $l ) { return 0 === strpos( $l, '- ' ); } );
	if ( ! $bulleted ) {
		return '<p class="copy">' . $sf_e( $text ) . '</p>';
	}
	$html = '';
	$open = false;
	foreach ( $lines as $l ) {
		if ( 0 === strpos( $l, '- ' ) ) {
			if ( ! $open ) {
				$html .= '<ul>';
				$open = true;
			}
			$html .= '<li>' . $sf_e( substr( $l, 2 ) ) . '</li>';
		} else {
			if ( $open ) {
				$html .= '</ul>';
				$open = false;
			}
			$html .= '<p>' . $sf_e( $l ) . '</p>';
		}
	}
	if ( $open ) {
		$html .= '</ul>';
	}
	return '<div class="copy sheet-effect">' . $html . '</div>';
};
?>
<div class="breakout shadow-diffuse black-bg white-text">
<?php $rpgLinksTone = 'white'; include 'php/rpg/rpg-links.php'; ?>
<div class="separator"></div>
<div class="container">
<div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<h3 class="sub-title mb-3" id="character">Sample Character Sheet</h3>
		<div class="copy stinger white mb-3">Putting It All Together</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
<div class="d-flex flex-wrap flex-xs-nowrap">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<!-- Building a Character leads the section, as in the Mechanics Doc,
		     with the backgrounds Edwin uses (from the creator) beside it -->
		<div class="d-flex flex-wrap flex-xs-nowrap split-cols">
		<div class="flex-7 content-stack content-stack-sm">
			<h3>Building a Character</h3>
			<p class="copy">The sheet below belongs to Edwin Humble, a Level 6 Human smuggler, and shows how the systems in this section come together on a finished character. Every character is built from four Backgrounds, a starting set of Stat points, and the Traits those points grant.</p>
			<p class="copy">Every character selects a Kind, Origin, Profession, and Past. Together these Backgrounds set a character’s starting Stats and Traits and tie them to the world:</p>
			<ul class="copy">
				<li><strong>Kind</strong> is what the character is. It adds 9 bonus points to their focus Stats, spread out to fit the Kind, and sets their maximum Stats. It also grants any unique abilities the Kind possesses and determines which kinds of Traits they can take. Humans get +1 in each focus Stat, cannot exceed 15 in any focus Stat, and can take (Cybernetic) and genetic engineering Traits.</li>
				<li><strong>Origin</strong> is where the character comes from. It grants a starting set of Traits, typically a mix of Skill and Knowledge Traits, and opens selectable Traits related to the Origin. It also covers RP details like wealth and identification. Some Origins give a bonus point to place in one category’s focus Stats, like the American Empire’s +1 Physical.</li>
				<li><strong>Profession</strong> is what the character does. It grants a starting set of Traits, opens selectable Traits related to the Profession, and covers RP details like Equipment and licenses.</li>
				<li><strong>Past</strong> is how the character grew up. Like a Profession, it grants a starting set of Traits and opens selectable Traits related to it.</li>
			</ul>
			<p class="copy">Every character’s Stats start at 0 before their Kind’s bonus points are added. Characters always start at Level 1 or higher, so every new character also gets their Level 1 points: 1 core point and the 3 focus points that come with it. Since every focus point grants a Trait, a new character begins with a set of Traits they choose, on top of the ones their Backgrounds grant automatically. A starting Human, for example, has 9 Universal Traits from their Kind’s bonus points plus the Traits from their Level 1 points. With only a point or two in each Stat, these early picks are limited to less powerful and more common Traits. A GM may prefer to start a campaign at Level 2 or 3 so players can pick out the low-level but still specialized Traits that help their characters stand apart from each other.</p>
			<p class="copy">Reading the sheet:</p>
			<ul class="copy">
				<li>Level is tracked at the top, separately from Stats.</li>
				<li>Each core Stat is shown by its category’s icon, with its number after the name, like Physical - 1, and its focus Stats listed below it.</li>
				<li>Each focus Stat’s dot bar starts empty and fills in as points are added. A circle or square shows whether that point granted a Universal or a Background Trait.</li>
				<li>Traits are grouped into Knowledges, Abilities, and Skills. Numbers in parentheses are a Trait’s Rank.</li>
				<li>Picks available are Traits the character has banked for in-game opportunities.</li>
			</ul>
			<p class="copy">Edwin’s 28 focus points come from his Kind (9), his Origin (1), and six Levels (18), and each one granted a Trait. He spent six of those as Universal Traits and six as Background Traits from his Backgrounds’ lists, including the Spanish and Mandarin Languages, and banked the other sixteen for in-game opportunities. Four of those have since gone to Skills he gained in play: Eagle Eye, a Conveyed Skill, then Cover Identity, Poker Face and Procurement as his smuggling runs went on, leaving twelve. At Level 6 he spent eleven more on the Skills and Abilities his work had been teaching him, five of them from the Smuggler’s list, leaving one Background pick banked. Spending Traits on Knowledges this way is allowed because he’s a freshly created character. Future Stat gains can’t be used to gain Knowledge Traits, though this is at the GM’s discretion.</p>
		</div>
		<div class="flex-6 content-stack">
			<h3>Backgrounds used in the sample character sheet</h3>
			<!-- Each background as the creator's card (php/rpg/background-card.php) -->
			<div class="content-stack content-stack-xs">
				<?php
				include_once __DIR__ . '/background-card.php';
				// The Origin's bonus point went into Grace
				foreach ( $sf_sample['background'] as $b ) {
					sf_background_card( $b, 'Origin' === $b['slot'] ? ', placed in Grace' : '' );
				}
				?>
			</div>
		</div>
		</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
<div class="separator"></div>





<!-- ------------ CHARACTER SHEET ------------ -->

<div class="d-flex flex-wrap flex-xs-nowrap">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
<?php
require_once __DIR__ . '/components/stats.php';

// Each Knowledge's type as an icon in place of a "Knowledge:" or "Language:" label
$sf_knowledge_icon = '<svg class="sheet-type-icon" viewBox="0 0 640 512" role="img" aria-label="Knowledge" focusable="false"><title>Knowledge</title><path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"/></svg>';
// A Knowledge's or background card's link, opening it in the lore popup
$sf_sheet_link = function ( $key ) use ( $sf_sample, $sf_e ) {
	foreach ( array_merge( $sf_sample['background'], $sf_sample['traits'] ) as $x ) {
		if ( ( $x['slot'] ?? $x['id'] ) === $key ) {
			return sf_lore_link( 'sample-' . $x['id'], $sf_e( $x['name'] ) );
		}
	}
	return '';
};
// Knowledges, then Languages, as on the creator's sheet; the rest are cards
$sf_knowledges = array_filter( $sf_sample['traits'], function ( $t ) { return 'Knowledge' === $t['category'] && ! $t['language']; } );
$sf_languages  = array_filter( $sf_sample['traits'], function ( $t ) { return $t['language']; } );
$sf_cards      = array_filter( $sf_sample['traits'], function ( $t ) { return 'Knowledge' !== $t['category']; } );
// Where a Trait came from, in words: "a background pick"
$sf_from = function ( $t ) {
	return str_replace( array( 'universal pick', 'background pick' ), array( 'a universal pick', 'a background pick' ), $t['from'] );
};
// The cards by category, as the creator's sheet boxes them
$sf_abilities = array_filter( $sf_cards, function ( $t ) { return 'Ability' === $t['category']; } );
$sf_skills    = array_filter( $sf_cards, function ( $t ) { return 'Skill' === $t['category']; } );
$sf_other     = array_filter( $sf_cards, function ( $t ) { return ! in_array( $t['category'], array( 'Ability', 'Skill' ), true ); } );
// A sample Trait as a trait card (php/rpg/components/cards.php), folding
// as the creator's sheet does: Abilities closed to their name and effect,
// Skills closed to their name
require_once __DIR__ . '/components/cards.php';
$sf_card = function ( $t, $fold = '', $keep = false ) use ( $sf_from ) {
	sf_card_trait( array(
		'kind'   => strtolower( $t['category'] ),
		'name'   => $t['name'],
		'effect' => $t['effect'],
		'action' => $t['action'] ?? '',
		'from'   => $sf_from( $t ),
		'fold'   => $fold,
		'keep'   => $keep,
	) );
};
$sf_language_icon = '<svg class="sheet-type-icon" viewBox="0 0 640 512" role="img" aria-label="Language" focusable="false"><title>Language</title><path d="M416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9C387.3 320 416 291.2 416 256zM576 128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .0013v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.0073l82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128z"/></svg>';
?>
<!-- Edwin's sheet in the shared layout (php/rpg/components/sheet.php), in
     its sample context: everything a sheet shows in play, with nothing to
     change. The level's blob on the corner, the portrait, name and
     description, HP, VP and SP at full, then the stats beside Movement, the
     resistances, Conditions and Items, then the Knowledges, Abilities and
     Skills. -->
<?php
require_once __DIR__ . '/components/sheet.php';

// The resistances: each damage type's icon and total, its sources in a
// popover. Drawn twice by the layout, so each copy's ids are its own.
$sf_blunt_icon    = '<svg class="damage-icon" viewBox="0 0 512 512" role="img" aria-label="Blunt" focusable="false"><title>Blunt</title><path d="M215.97 27.813c-2.218.04-4.35.177-6.407.375l-.532.062c-2.774.266-5.796 1.01-9.124 1.844-4.418 1.11-8.096 2.607-11.125 4.406l77.782 59.313 7.375 5.656-5.593 7.405-13.72 18.156 67.595 51.626 14.217-18.812 9.47-12.53 6.5 14.342 19.656 43.47 60.593-80.095-47.187-7.124-15.533-2.312 9.47-12.563 14.28-18.843-67.593-51.624L310.78 50.78l-5.03 6.657-7.188-4.25c-28.635-16.917-58.02-25.157-80.343-25.374a76.706 76.706 0 0 0-2.25 0zM453 127.124l-71.47 94.438 34.564 26.187c44.24-20.22 64.01-52.594 71.312-94.625l-34.406-26zm-193.688 25.03c-27.17 33.09-55.308 64.706-82.812 96.22l47.406 39.875c23.11-35.343 46.336-71.61 71.938-108.22l-36.53-27.874zM164.25 262.47c-11.355 13.115-22.564 26.254-33.5 39.5l48.375 52.717c11.707-16.6 23.107-33.515 34.438-50.687l-49.313-41.53zm-45.438 54.124a1111.646 1111.646 0 0 0-23.093 29.72l33.468 73.842c13.586-16.22 26.434-32.893 38.843-49.937l-49.218-53.626zm-35.75 47.03c-12.108 16.978-23.57 34.335-34.124 52.282L98.53 454.47a688.442 688.442 0 0 0 17.22-18.72l-32.688-72.125zm-43.437 68.688a546.43 546.43 0 0 0-14.75 29l37.375 28.313a611.184 611.184 0 0 0 23.125-21.72l-45.75-35.592z"/></svg>';
$sf_slashing_icon = '<svg class="damage-icon" viewBox="0 0 512 512" role="img" aria-label="Slashing" focusable="false"><title>Slashing</title><path d="M275.03 20c35.223 49.563 53.59 113.64 55.69 173.47C315.154 143 289.092 88.423 250.81 48.75c40.294 79.527 51.15 172.312 37.938 256.094-12.287-75.777-40.564-159.524-92.375-227.156 29.6 70.937 36.64 149.785 24.813 221.843-8.745-51.804-25.41-107.4-52.594-158.81 13.023 54.315 12.854 107.64 3.437 159.28l21.657 6.813 15 4.718-11.28 10.908c-10.68 10.332-19.868 21.905-27.345 34.343 93.614 35.486 232.952 64.53 298.032 41.376-41.02 56.466-210.332 13.822-309.313-18.687-1.514 3.775-2.918 7.594-4.124 11.467a152.536 152.536 0 0 0-6.062 29.657l176.47 66.375c98.5 31.095 150.5-24.62 158.655-81.72C505.253 254.472 485.016 105.66 426.06 20h-22.187c40.092 65.52 66.67 154.216 60.47 255.344-8.154-79.833-42.8-157.214-98.44-219.5 38.676 85.094 56.566 185.746 34.376 288.625.057-118.816-33.1-225.865-105.092-324.47H275.03zm-110.186 1.594c41.255 29.176 74.328 74.093 97.5 120.656-7.702-46.15-21.3-86.79-44-120.656h-53.5zm176.375 0c28.882 15.143 52.096 36.614 71.28 66.78-7.14-27.79-17.217-49.85-31.438-66.78H341.22zM123.686 304.406a179.344 179.344 0 0 1-4.062 64L18.812 336.344V366l91.938 29.094a178.602 178.602 0 0 1-30.313 48.28l50.094 15.75c-3.038-24.898-1.136-49.885 6.282-73.718 7.446-23.92 20.223-46.108 37.032-65.22l-50.156-15.78z"/></svg>';
$sf_resistances = function ( $copy ) use ( $sf_blunt_icon, $sf_slashing_icon ) {
	$html = sf_sheet_title( 'Resistances' ) . '<ul class="sf-resistance-list">';
	foreach ( array( array( 'Blunt', $sf_blunt_icon ), array( 'Slashing', $sf_slashing_icon ) ) as $i => $r ) {
		$id    = 'sample-resist-' . $copy . ( $i + 1 );
		$html .= '<li class="sf-resistance" tabindex="0" aria-describedby="' . $id . '">' . $r[1] . '<span class="sf-resistance-total">1</span>'
			. '<div class="sf-resistance-pop" role="tooltip" id="' . $id . '"><strong class="sf-resistance-pop-title">' . $r[0] . ' 1</strong>'
			. '<ul><li><span>Sturdy Leather Jacket <span class="sf-sheet-muted">(torso)</span></span><span class="sf-resistance-pop-total">1</span></li></ul></div></li>';
	}
	return $html . '</ul>';
};

// The stat block (php/rpg/components/stats.php), with each stat's maximum
require_once __DIR__ . '/components/stats.php';
$sf_stat = function ( $name, $bonus, $value ) {
	return array( 'name' => $name, 'bonus' => $bonus, 'value' => $value, 'max' => 15 );
};
$sf_stats = sf_sheet_capture( function () use ( $sf_stat ) {
	sf_stat_block(
		array(
			array( 'group' => 'physical', 'core' => 1, 'stats' => array( $sf_stat( 'Endurance', 1, 2 ), $sf_stat( 'Power', 1, 2 ), $sf_stat( 'Grace', 2, 3 ) ) ),
			array( 'group' => 'social', 'core' => 3, 'stats' => array( $sf_stat( 'Empathy', 1, 3 ), $sf_stat( 'Persuasion', 1, 4 ), $sf_stat( 'Demeanor', 1, 5 ) ) ),
			array( 'group' => 'mental', 'core' => 2, 'stats' => array( $sf_stat( 'Logic', 1, 1 ), $sf_stat( 'Intuition', 1, 2 ), $sf_stat( 'Memory', 1, 6 ) ) ),
		),
		array( 'max' => SF_SHEET_RULES['sample']['statMax'] )
	);
} );

// Healthy, from full HP
$sf_conditions = sf_sheet_title( 'Conditions', '', 'h4', true ) . '<ul class="sf-sheet-cards sf-sheet-scroll"><li>'
	. sf_sheet_capture( function () {
		sf_card_trait( array( 'kind' => 'condition', 'name' => 'Healthy', 'effect' => '', 'from' => 'HP. A character or object gains this Trait while they are at their maximum HP total' ) );
	} ) . '</li></ul>';

// The item cards, as the creator's inventory draws them: the count on its
// left edge, Equip (read-only here), the name and its badges, and the
// chevron that opens it to its category, value and the like, then its
// description
$sf_sheet_items = array(
	array( 'name' => 'Sturdy Leather Jacket', 'category' => 'Armor', 'value' => 200, 'currency' => 'ERC', 'slot' => 'Outerwear', 'resistances' => '1 Blunt, 1 Slashing', 'description' => 'A heavy leather jacket. Turns a scrape or a cold wind, not much more.', 'equip' => 'on' ),
	array( 'name' => 'Pistol', 'category' => 'Weapon', 'value' => 600, 'currency' => 'ERC', 'attack' => 'Ranged', 'stat' => 'Grace', 'reload' => 'Partial', 'damage' => '7 Piercing', 'ranged' => true, 'range' => '50 m', 'description' => 'A modern handgun.', 'equip' => 'on' ),
	array( 'name' => 'Disguise Kit', 'category' => 'Gear', 'value' => 150, 'currency' => 'ERC', 'description' => 'Makeup, wigs, false hair and a few changes of clothes.', 'equip' => 'off' ),
	array( 'name' => 'Comm Unit', 'category' => 'Gear', 'value' => 800, 'currency' => 'ERC', 'description' => 'A personal communicator and computer. Doesn’t reach across a switch gate without a relay.', 'equip' => 'off' ),
);
$sf_items = sf_sheet_title( 'Items', '', 'h4', true ) . '<ul class="sf-sheet-cards sf-sheet-scroll sf-sheet-scroll--short">'
	. sf_sheet_capture( function () use ( $sf_sheet_items ) {
		foreach ( $sf_sheet_items as $item ) {
			echo '<li>';
			sf_card_item( $item + array( 'count' => 1, 'fold' => 'closed' ) );
			echo '</li>';
		}
	} ) . '</ul>';

// Knowledges, then Languages, each a link opening its card
$sf_knowledge_list = '<ul class="sf-sheet-knowledge-list sf-sheet-scroll">';
foreach ( $sf_knowledges as $t ) {
	$sf_knowledge_list .= '<li>' . $sf_knowledge_icon . ' ' . $sf_sheet_link( $t['id'] ) . "</li>\n";
}
foreach ( $sf_languages as $t ) {
	$sf_knowledge_list .= '<li>' . $sf_language_icon . ' ' . $sf_sheet_link( $t['id'] ) . "</li>\n";
}
$sf_knowledge_list .= '</ul>';

// Cards in the layout's card grid: Abilities closed to their name and
// effect, Skills to their name, each opening from its chevron
$sf_trait_cards = function ( $list, $fold = '', $keep = false, $scroll = true ) use ( $sf_card ) {
	if ( ! $list ) {
		return '';
	}
	return '<ul class="sf-sheet-traits' . ( $scroll ? ' sf-sheet-scroll' : '' ) . '">' . sf_sheet_capture( function () use ( $list, $fold, $keep, $sf_card ) {
		foreach ( $list as $t ) {
			echo '<li>';
			$sf_card( $t, $fold, $keep );
			echo '</li>';
		}
	} ) . '</ul>';
};
$sf_picks = $sf_sample['picks']['universal'] + $sf_sample['picks']['background'];

sf_sheet_layout(
	array(
		'context'      => 'sample',
		'level'        => 6,
		'who'          => '<img loading="lazy" data-src="img/char_portrait_1.webp" alt="Edwin Humble" class="c-sheet-image sheet-portrait sf-sheet-portrait">'
			. '<div class="sf-sheet-main"><h2 class="sheet-name">Edwin Humble</h2>'
			// Age, gender, height and weight on one line, then the Kind and the
			// Backgrounds on the next, each wrapping when it runs out of room
			. '<div class="sheet-line">'
			. '<p class="sheet-line-row">'
			. '<span class="sheet-line-item"><span class="field-label">Age</span><strong>30</strong></span>'
			. '<span class="sheet-line-item"><span class="field-label">Gender</span><strong>Male</strong></span>'
			. '<span class="sheet-line-item"><span class="field-label">Height</span><strong>6 feet</strong></span>'
			. '<span class="sheet-line-item"><span class="field-label">Weight</span><strong>190 lbs</strong></span>'
			. '</p><p class="sheet-line-row">'
			. '<span class="sheet-line-item"><span class="field-label">Kind</span><strong>' . $sf_sheet_link( 'Kind' ) . '</strong></span>'
			. '<span class="sheet-line-item"><span class="field-label">Origin</span><strong>' . $sf_sheet_link( 'Origin' ) . '</strong></span>'
			. '<span class="sheet-line-item"><span class="field-label">Profession</span><strong>' . $sf_sheet_link( 'Profession' ) . '</strong></span>'
			. '<span class="sheet-line-item"><span class="field-label">Past</span><strong>' . $sf_sheet_link( 'Past' ) . '</strong></span>'
			. '</p><p class="sheet-line-row">'
			. '<span class="sheet-line-item"><span class="field-label">Wealth</span><strong>15,000 ERC</strong></span>'
			. '</p></div></div>',
		'description'  => '<p>Edwin Humble is a truck driver and part-time smuggler in Earth orbit, working the American Empire’s Sol territories. Raised rough, Edwin was cared for by his mother in the teeming streets of Chicago before stowing away on his father\'s cargo ' . sf_lore_link( 'shuttles', 'shuttle' ) . ' during one of the man\'s rare visits. The boy quickly learned the trade of private cargo running, both the legal and less-than-legal sides of it. After a delivery went south and his father was killed, Edwin took over the “family business” and runs a small-time cargo transportation operation under his own name, though his real income comes from what’s stored in the secret compartment at the back of the shuttle. Edwin\'s two goals in life are to get rich and to find out who was responsible for his father\'s murder.</p>',
		'resources'    => sf_sheet_full_resources( array( 'hp' => 17, 'vp' => 12, 'sp' => 9 ) ),
		'stats'        => $sf_stats,
		'movement'     => '10 m',
		'resistances'  => $sf_resistances,
		'conditions'   => $sf_conditions,
		'items'        => $sf_items,
		'knowledges'   => $sf_knowledge_list,
		'abilities'    => $sf_abilities ? $sf_trait_cards( $sf_abilities, 'closed', true ) : '<p class="sf-sheet-empty">No Abilities yet.</p>',
		'skills'       => $sf_skills ? $sf_trait_cards( $sf_skills, 'closed' ) : '<p class="sf-sheet-empty">No Skills yet.</p>',
		'skills_aside' => '<span class="sf-sheet-aside">' . $sf_picks . ( 1 === $sf_picks ? ' pick' : ' picks' ) . ' available</span>',
		'other'        => $sf_other ? sf_sheet_title( 'Other Traits' ) . $sf_trait_cards( $sf_other, '', false, false ) : '',
	),
	array( 'class' => 'sample-sheet' )
);
?>

<!-- What the sheet's Knowledges and background links open in the lore
     popup: the card on its own, as the creator's sheet opens them
     (.lore-card puts the popup in its card mode) -->
<div hidden>
	<?php foreach ( array_merge( $sf_knowledges, $sf_languages ) as $t ) : ?>
		<div id="lore-sample-<?php echo $t['id']; ?>" class="lore-card">
			<h4 class="lore-title"><?php echo $sf_e( $t['name'] ); ?></h4>
			<div class="lore-body">
				<?php
				sf_card_trait( array(
					'kind'   => $t['language'] ? 'language' : 'knowledge',
					'name'   => $t['name'],
					'effect' => $t['effect'],
					'from'   => $sf_from( $t ),
				) );
				?>
			</div>
		</div>
	<?php endforeach; ?>
	<?php foreach ( $sf_sample['background'] as $b ) : ?>
		<div id="lore-sample-<?php echo $b['id']; ?>" class="lore-card">
			<h4 class="lore-title"><?php echo $sf_e( $b['name'] ); ?></h4>
			<div class="lore-body">
				<?php sf_background_card( $b, 'Origin' === $b['slot'] ? ', placed in Grace' : '' ); ?>
			</div>
		</div>
	<?php endforeach; ?>
</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
</div>
<div class="separator"></div>
</div>
