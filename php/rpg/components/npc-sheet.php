<?php
// The NPC sheet: the short-form sheet for Strange Frontiers NPCs (people the
// party meets, not foes): the name and what it is with its Movement, its
// description, the core Stats and focus Stats laid out as on a Kind card
// with live HP, VP, SP (and MP for anything with Magic) beside them, then
// its Items (Attacks first) and Traits as cards.
//
// Monsters and enemies get their own component, the monster sheet
// (components/monster-sheet.php, sf_monster_sheet()). The two draw the
// same sheet for now, through sf_npc_sheet_draw() below, each with its own
// class on the sheet (.sf-npc--npc, .sf-npc--monster) to change it by.
//
// It's the full character sheet's short-form sibling (components/sheet.php
// draws the player's sheet): the same frame, dark boxes and cards,
// cut down to what a GM needs at the table. It's styled by
// css/sf-npc-sheet.css. The site is its only home for now; if Player Tools
// or the creator ever shows NPCs, the creator gets a twin, as with the
// cards and the stat block.
//
// HP, VP, SP and MP follow the creator's rules engine
// (src/engine/validate.ts): HP is 10 plus the Physical focus Stats, VP the
// Social focus Stats, SP the Mental focus Stats, and MP 3 per point of
// Magic. An NPC can set its own (a boss with extra HP) with 'resources'.
//
// sf_npc_sheet( array(
//   'name'        => 'Hedge Witch',
//   'kind'        => 'NPC, Dreft',              // what it is, under the name
//   'level'       => 15,                        // optional, over the core
//                                               // Stats' total (NPCs; a
//                                               // monster has 'threat')
//   'description' => '…',                       // a short description and
//                                               // how the GM plays it; its
//                                               // box says Content coming
//                                               // soon until it's written
//   'move'        => '10 m',
//   'resistances' => '2 Blunt, 1 Slashing',      // optional
//   'stats'       => array( 'Physical' => 12, 'Endurance' => 10, …,
//                           'Magic' => 2 ),     // Magic is optional
//   'resources'   => array( 'hp' => 40 ),       // optional, over the rules
//   'attacks'     => array( … ),                // sf_card_item() arrays, first
//                                               // in the Items box
//   'traits'      => array( … ),                // sf_card_trait() arrays
//   'items'       => array( … ),                // sf_card_item() arrays
// ), array( 'fold' => 'closed' ) );
//
// Options, as with the cards:
//
//   fold     'closed', the default: the Items and Traits start closed to
//            their name's bar, each opening from its chevron; 'open' starts
//            them open but folding; '' keeps them always open, with no
//            chevrons.
//   layout   'wide': for a sheet given a full-width row, its Items and
//            Traits in a second column beside the name, description and
//            Stats (one column again below 720px). Without it, everything
//            stacks, for a half-width column (.sf-npc-grid).
//   heading  the name's heading level, 'h5' by default, so the sheet fits
//            the page's outline
//   background  what's drawn in the field behind the content, like the
//            Kind card's $background: 'storm' (a starry night under slowly
//            drifting storm clouds tinted #202728, with lightning now and
//            then), the monster sheet's default, or 'none', the NPC sheet's
//            (its plain field; on a monster sheet, the black field with its
//            filigree and corner noise).
//
// Anything left out isn't drawn: no Traits box for an NPC without Traits.
// Attacks and Items share the Items box, Attacks first.
require_once __DIR__ . '/cards.php';

if ( ! function_exists( 'sf_npc_sheet' ) ) {
	define(
		'SF_NPC_FOCUS',
		array(
			'physical' => array( 'Endurance', 'Power', 'Grace' ),
			'social'   => array( 'Empathy', 'Persuasion', 'Demeanor' ),
			'mental'   => array( 'Logic', 'Intuition', 'Memory' ),
		)
	);

	function sf_npc_e( $text ) {
		return htmlspecialchars( (string) $text, ENT_QUOTES, 'UTF-8' );
	}

	// A monster's threat level, 1 to 10, as its tier: 1–2 Minor, 3–4
	// Standard, 5–6 Elite, 7–8 Deadly, 9–10 Legendary
	function sf_threat_tier( $threat ) {
		$tiers = array( 'Minor', 'Standard', 'Elite', 'Deadly', 'Legendary' );
		return $tiers[ max( 0, min( 4, (int) ceil( $threat / 2 ) - 1 ) ) ];
	}

	// The resources' −, + and restore icons, the creator's (ui.tsx's Sign and
	// Icon), taking the button's text color
	function sf_npc_icon( $name ) {
		$icons = array(
			'minus'   => array( '0 0 448 512', 'M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z' ),
			'plus'    => array( '0 0 448 512', 'M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z' ),
			'restore' => array( '0 0 512 512', 'M496 48V192c0 17.69-14.31 32-32 32H320c-17.69 0-32-14.31-32-32s14.31-32 32-32h63.39c-29.97-39.7-77.25-63.78-127.6-63.78C167.7 96.22 96 167.9 96 256s71.69 159.8 159.8 159.8c34.88 0 68.03-11.03 95.88-31.94c14.22-10.53 34.22-7.75 44.81 6.375c10.59 14.16 7.75 34.22-6.375 44.81c-39.03 29.28-85.36 44.86-134.2 44.86C132.5 479.9 32 379.4 32 256s100.5-223.9 223.9-223.9c69.15 0 134 32.47 176.1 86.12V48c0-17.69 14.31-32 32-32S496 30.31 496 48z' ),
		);
		list( $box, $d ) = $icons[ $name ];
		return '<svg class="sf-npc-step-icon" xmlns="http://www.w3.org/2000/svg" viewBox="' . $box . '" aria-hidden="true"><path d="' . $d . '"/></svg>';
	}

	// HP, VP, SP and MP by the creator's rules, with any the NPC sets over them
	function sf_npc_resources( $npc ) {
		$stat = function ( $name ) use ( $npc ) {
			return (int) ( $npc['stats'][ $name ] ?? 0 );
		};
		$sum  = function ( $group ) use ( $stat ) {
			return array_sum( array_map( $stat, SF_NPC_FOCUS[ $group ] ) );
		};
		$resources = array(
			'hp' => 10 + $sum( 'physical' ),
			'vp' => $sum( 'social' ),
			'sp' => $sum( 'mental' ),
		);
		if ( $stat( 'Magic' ) > 0 ) {
			$resources['mp'] = 3 * $stat( 'Magic' );
		}
		return array_merge( $resources, $npc['resources'] ?? array() );
	}

	// A box of cards under its ruled title. $scroll is the character sheet's
	// long-list class (css/sf-sheet.css): the list stops at 60vh (Items at
	// min(60vh, 640px), as on the sheet) and scrolls inside its box.
	// $columns lays the cards out in columns that each run top to bottom, so
	// cards of different lengths don't leave gaps the way a grid's rows do;
	// the scrolling moves to a wrapper, since columns of a set height spill
	// sideways instead of scrolling.
	function sf_npc_cards( $title, $cards, $draw, $scroll = 'sf-sheet-scroll', $columns = false ) {
		if ( empty( $cards ) ) {
			return;
		}
		echo '<div class="sf-npc-box"><h6 class="sf-npc-title">' . $title . '</h6>';
		echo $columns
			? '<div class="sf-npc-scroll ' . $scroll . '"><ul class="sf-npc-cards sf-npc-cards--columns">'
			: '<ul class="sf-npc-cards ' . $scroll . '">';
		foreach ( $cards as $card ) {
			echo '<li>';
			$draw( $card );
			echo '</li>';
		}
		echo $columns ? '</ul></div></div>' : '</ul></div>';
	}

	// An NPC's sheet
	function sf_npc_sheet( $npc, $options = array() ) {
		sf_npc_sheet_draw( $npc, $options, 'npc' );
	}

	// The storm clouds' color pop (css/sf-npc-sheet.css, .sf-npc-sky), once a
	// page: the clouds' grays (about 45% to white in the images) remapped
	// from the field's own black (gray-900) up to #202728 at their lightest,
	// so no shading reads darker than the field, then pushed about by
	// turbulence, after
	// Johan Lagerqvist's CodePen "Color Pop". The turbulence changes in
	// bursts at the pen's speed (its detail climbing 1 to 10 every 0.75s, its
	// seed about 10 a second, its stretch growing), three bursts in a 40s
	// loop at uneven gaps. Between them the push is off (the displacement's
	// scale drops to 0), so the clouds rest unglitched. The still one, for
	// reduced motion, is the tint alone.
	function sf_npc_color_pop_filter() {
		static $done = false;
		if ( $done ) {
			return;
		}
		$done  = true;
		$color = '<feColorMatrix type="saturate" values="0" in="SourceGraphic" result="gray" />'
			. '<feColorMatrix type="matrix" values="0.0713 0 0 0 0.0542  0.1093 0 0 0 0.0449  0.1070 0 0 0 0.0499  0 0 0 1 0" in="gray" result="tint" />';

		// The bursts: start and length in seconds, in a 40s loop, stepped
		// every 0.05s; the push is on (15) only while one runs
		$loop   = 40;
		$bursts = array( array( 0, 0.4 ), array( 14, 0.25 ), array( 25, 0.35 ) );
		$times  = array();
		$detail = array();
		$seeds  = array();
		$fq     = array();
		$seed   = 1;
		$on     = array();
		foreach ( $bursts as $burst ) {
			list( $start, $length ) = $burst;
			$on[] = round( $start / $loop, 4 );
			$on[] = round( ( $start + $length ) / $loop, 4 );
			for ( $t = 0; $t < $length - 0.001; $t += 0.05 ) {
				$times[]  = round( ( $start + $t ) / $loop, 4 );
				$detail[] = 1 + (int) floor( 9 * fmod( $t, 0.75 ) / 0.75 );
				$seeds[]  = $seed = $seed % 100 + 1;
				$fq[]     = '0.002 ' . round( 0.008 + 0.002 * $t / $length, 5 );
			}
		}
		$keys   = implode( ';', $times );
		$push   = '<feColorMatrix type="saturate" values="30" in="noise" result="vivid" />'
			. '<feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 100 -15" in="vivid" result="map" />'
			. '<feDisplacementMap in="tint" in2="map" scale="0" xChannelSelector="R" yChannelSelector="A">'
			. '<animate attributeName="scale" values="' . implode( ';', array_map( function ( $i ) { return $i % 2 ? 0 : 15; }, array_keys( $on ) ) ) . '" keyTimes="' . implode( ';', $on ) . '" calcMode="discrete" dur="' . $loop . 's" repeatCount="indefinite" />'
			. '</feDisplacementMap>';
		$noise  = '<feTurbulence type="turbulence" baseFrequency="0.002 0.008" numOctaves="1" seed="1" result="noise">'
			. '<animate attributeName="baseFrequency" values="' . implode( ';', $fq ) . '" keyTimes="' . $keys . '" calcMode="discrete" dur="' . $loop . 's" repeatCount="indefinite" />'
			. '<animate attributeName="numOctaves" values="' . implode( ';', $detail ) . '" keyTimes="' . $keys . '" calcMode="discrete" dur="' . $loop . 's" repeatCount="indefinite" />'
			. '<animate attributeName="seed" values="' . implode( ';', $seeds ) . '" keyTimes="' . $keys . '" calcMode="discrete" dur="' . $loop . 's" repeatCount="indefinite" />'
			. '</feTurbulence>';

		echo '<svg class="sf-npc-filters" width="0" height="0" aria-hidden="true" focusable="false">'
			. '<filter id="sf-color-pop" color-interpolation-filters="sRGB">' . $color
			. $noise . $push . '</filter>'
			. '<filter id="sf-color-pop-still" color-interpolation-filters="sRGB">' . $color . '</filter></svg>';
	}

	// The monster sheet's filigree (css/sf-npc-sheet.css, .sf-npc-filigree),
	// after a tarot card's gold border: a line inside the frame line, drawn
	// as corner pieces joined by straight edges so it grows with the sheet.
	// Each corner crosses it with short ticks; the top right corner arcs it
	// around the frame's notch instead. A skull breaks it at the top's
	// middle, and a gold star sits in the notch. (The gold noise in the
	// field's corners, .sf-npc-dust, is drawn under the storm's clouds.)
	// $flaming: a boss's skull, larger and in its flames.
	function sf_npc_filigree( $flaming = false ) {
		$corner = '<svg class="sf-npc-fil-corner sf-npc-fil-corner--%s" viewBox="0 0 40 40" aria-hidden="true" focusable="false">'
			. '<path class="sf-npc-fil-outer" d="M13.5 40V13.5H40M8.5 13.5h5M13.5 8.5v5" /></svg>';
		// The skull from game-icons.net's Burning Skull by Lorc (CC BY 3.0),
		// without its flames, its eyes and nose cut out
		$skull = '<svg class="sf-npc-fil-skull" viewBox="120 154 272 330" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M268.725 389.28l3.74 28.7h-30.89l3.74-28.7a11.705 11.705 0 1 1 23.41 0zm33.84-71.83a29.5 29.5 0 1 0 29.5 29.5 29.5 29.5 0 0 0-29.51-29.5zm-94.4 0a29.5 29.5 0 1 0 29.5 29.5 29.5 29.5 0 0 0-29.51-29.5zM385.335 285.32c-2.45-65.49-54.88-119.59-120.26-124.07-3.06-.21-6.15-.31-9.16-.31a129.4 129.4 0 0 0-129.43 129.35 132.15 132.15 0 0 0 24.51 76v25a35 35 0 0 0 34.74 34.69h6.26v16.61a34.66 34.66 0 0 0 34.71 34.39h61.78a34.48 34.48 0 0 0 34.51-34.39v-16.61h5.38a34.89 34.89 0 0 0 34.62-34.75v-28a129.32 129.32 0 0 0 22.33-77.9z" /></svg>';
		// A boss's: the whole Burning Skull, flames and all
		if ( $flaming ) {
			$skull = '<svg class="sf-npc-fil-skull sf-npc-fil-skull--flaming" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="m268.725 389.28 3.74 28.7h-30.89l3.74-28.7a11.705 11.705 0 1 1 23.41 0zm33.84-71.83a29.5 29.5 0 1 0 29.5 29.5 29.5 29.5 0 0 0-29.51-29.5zm-94.4 0a29.5 29.5 0 1 0 29.5 29.5 29.5 29.5 0 0 0-29.51-29.5zm245.71-62c0 98.2-48.22 182.68-117.39 220.24-46 28.26-112.77 28.26-156.19 2.5-71.72-36.21-122.17-122.29-122.17-222.73 0-78.16 30.54-147.63 77.89-191.67 0 0-42.08 82.86 9.1 135-11.67-173.77 169.28-63 118-184 151.79 83.33 9.14 105 84.1 148.21 0 0 66.21 47 36.4-91.73 42.95 43.99 70.25 110.3 70.25 184.19zm-68.54 29.87c-2.45-65.49-54.88-119.59-120.26-124.07-3.06-.21-6.15-.31-9.16-.31a129.4 129.4 0 0 0-129.43 129.35 132.15 132.15 0 0 0 24.51 76v25a35 35 0 0 0 34.74 34.69h6.26v16.61a34.66 34.66 0 0 0 34.71 34.39h61.78a34.48 34.48 0 0 0 34.51-34.39v-16.61h5.38a34.89 34.89 0 0 0 34.62-34.75v-28a129.32 129.32 0 0 0 22.33-77.9z" /></svg>';
		}
		// The line, worn in splotches (.sf-npc-filigree--line), then the
		// skull and star on their own, unworn
		echo '<div class="sf-npc-filigree sf-npc-filigree--line" aria-hidden="true">';
		foreach ( array( 'tl', 'bl', 'br' ) as $where ) {
			printf( $corner, $where );
		}
		// The top right, around the notch: the line meets an arc about the
		// notch's center (5px in from the corner), as far inside the field's
		// own arc (26px) as the straight line is inside its edge
		echo '<svg class="sf-npc-fil-corner sf-npc-fil-corner--tr" viewBox="0 0 56 56" aria-hidden="true" focusable="false">'
			. '<path class="sf-npc-fil-outer" d="M56 13.5H36.37A32.5 32.5 0 0 1 13.5 36.37V56" /></svg>';
		foreach ( array( 'top', 'right', 'bottom', 'left' ) as $side ) {
			echo '<span class="sf-npc-fil-edge sf-npc-fil-edge--' . $side . '"></span>';
		}
		echo '</div><div class="sf-npc-filigree" aria-hidden="true">';
		// The skull on the top line, at the middle, and the NPC sheet's star
		// in the notch, in gold
		echo $skull;
		echo '<svg class="sf-npc-fil-star" viewBox="0 0 15 15" aria-hidden="true" focusable="false"><path d="M7.5 0L9.15 5.85L15 7.5L9.15 9.15L7.5 15L5.85 9.15L0 7.5L5.85 5.85Z" /></svg>';
		echo '</div>';
	}

	// The sheet the NPC sheet and the monster sheet (components/
	// monster-sheet.php) share, with the one's class: 'npc' or 'monster'
	function sf_npc_sheet_draw( $npc, $options, $variant ) {
		$fold    = $options['fold'] ?? 'closed';
		$heading = in_array( $options['heading'] ?? 'h5', array( 'h2', 'h3', 'h4', 'h5', 'h6' ), true ) ? ( $options['heading'] ?? 'h5' ) : 'h5';
		$names   = array( 'hp' => 'Hit Points', 'vp' => 'Vibe Points', 'sp' => 'Savvy Points', 'mp' => 'Mana Points' );
		$groups  = array( 'physical' => 'Physical', 'social' => 'Social', 'mental' => 'Mental' );
		if ( isset( $npc['stats']['Magic'] ) ) {
			$groups['magic'] = 'Magic';
		}

		$storm  = 'storm' === ( $options['background'] ?? ( 'monster' === $variant ? 'storm' : 'none' ) );
		// A boss: the tough one within its threat band, marked by a flaming
		// skull on the filigree (its tier doesn't change)
		$boss   = 'monster' === $variant && ! empty( $npc['boss'] );
		$wide   = 'wide' === ( $options['layout'] ?? '' );
		echo '<div class="sf-npc sf-npc--' . ( 'monster' === $variant ? 'monster' : 'npc' ) . ( $storm ? ' sf-npc--bg-storm' : '' ) . ( $boss ? ' sf-npc--boss' : '' ) . ( $wide ? ' sf-npc--wide' : '' ) . '">';
		// In the field behind everything (css/sf-npc-sheet.css), bottom up:
		// the storm's night, the monster sheet's gold noise in its corners
		// (.sf-npc-dust), the storm's clouds and lightning, then the monster
		// sheet's filigree
		if ( $storm ) {
			echo '<div class="sf-npc-night" aria-hidden="true"></div>';
		}
		if ( 'monster' === $variant ) {
			echo '<div class="sf-npc-dust" aria-hidden="true"></div>';
		}
		if ( $storm ) {
			echo '<div class="sf-npc-sky" aria-hidden="true"></div><canvas class="sf-npc-lightning" aria-hidden="true"></canvas>';
			sf_npc_color_pop_filter();
		}
		if ( 'monster' === $variant ) {
			sf_npc_filigree( $boss );
		}

		// Its level, name and what it is, then its resistances and Movement
		// In the character sheet's blob, over the sheet's top left corner: an NPC's level
		// (each level is a core point, so it's the core Stats' total unless
		// the NPC sets its own), or a monster's threat level, since a level
		// doesn't say how dangerous a monster is. A monster's threat tier
		// follows what it is under its name.
		$tier = '';
		if ( 'monster' === $variant ) {
			$threat = isset( $npc['threat'] ) ? (int) $npc['threat'] : null;
			$tier   = null === $threat ? '' : sf_threat_tier( $threat );
			$badge = '<div class="sf-npc-level sf-npc-threat" title="' . ( null === $threat ? 'Threat level not set' : 'Threat ' . $threat . ', ' . $tier ) . '"><span class="sf-npc-level-label">Threat</span><span class="sf-npc-level-number">' . ( null === $threat ? '–' : $threat ) . '</span></div>';
		} else {
			$level = isset( $npc['level'] ) ? (int) $npc['level'] : array_sum( array_map( function ( $label ) use ( $npc ) {
				return (int) ( $npc['stats'][ $label ] ?? 0 );
			}, $groups ) );
			$badge = '<div class="sf-npc-level" title="Level ' . $level . '"><span class="sf-npc-level-label">Level</span><span class="sf-npc-level-number">' . $level . '</span></div>';
		}
		// The blob sits over the sheet's top left corner, outside the top
		// row's box (whose mask would clip it), so the name starts flush
		// with the content's left edge
		echo $badge;
		// Wide, the name, description and Stats are the first column
		if ( $wide ) {
			echo '<div class="sf-npc-cols"><div class="sf-npc-col">';
		}
		echo '<div class="sf-npc-box sf-npc-head"><div class="sf-npc-who">';
		echo '<div>';
		echo '<' . $heading . ' class="sf-npc-name">' . sf_npc_e( $npc['name'] ) . '</' . $heading . '>';
		$kind = array_filter( array( $npc['kind'] ?? '', ! empty( $tier ) ? $tier . ' threat' : '' ) );
		if ( $kind ) {
			echo '<p class="sf-npc-kind">' . implode( ' · ', array_map( 'sf_npc_e', $kind ) ) . '</p>';
		}
		echo '</div></div><div class="sf-npc-aside">';
		// Its resistances as on the character sheet (css/sf-sheet.css's
		// .sf-resistance-list): a shield for the box's title, then each
		// damage type's icon and its number
		if ( ! empty( $npc['resistances'] ) ) {
			echo '<ul class="sf-npc-resistances" aria-label="Resistances"><li class="sf-npc-resistances-icon" title="Resistances"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><path d="M466.5 83.71l-192-80C269.6 1.67 261.3 0 256 0C250.7 0 242.5 1.67 237.6 3.702l-192 80C27.7 91.1 16 108.6 16 127.1c0 257.2 189.2 384 239.1 384c51.1 0 240-128.2 240-384C496 108.6 484.3 91.1 466.5 83.71zM256 446.5l.0234-381.1c.0059-.0234 0 0 0 0l175.9 73.17C427.8 319.7 319 417.1 256 446.5z"/></svg></li>';
			foreach ( explode( ',', $npc['resistances'] ) as $part ) {
				if ( preg_match( '~^\s*(-?\d+)\s+(.+?)\s*$~', $part, $m ) ) {
					echo '<li class="sf-npc-resistance" title="' . sf_npc_e( $m[2] . ' ' . $m[1] ) . '">' . sf_damage_icon( $m[2] ) . '<span class="sf-npc-value">' . (int) $m[1] . '</span></li>';
				}
			}
			echo '</ul>';
		}
		if ( ! empty( $npc['move'] ) ) {
			// Movement as the character sheet's person-running icon (php/rpg/components/sheet.php)
			echo '<p class="sf-npc-move" title="Movement"><strong class="sf-npc-resource-name sf-npc-resource-name--move"><svg class="sf-npc-move-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M400 224h-44l-26.12-53.25c-12.5-25.5-35.38-44.25-61.75-51L197 98.63C189.5 96.84 181.1 95.97 174.5 95.97c-20.88 0-41.33 6.81-58.26 19.78L76.5 146.3C68.31 152.5 64.01 162 64.01 171.6c0 17.11 13.67 32.02 32.02 32.02c6.808 0 13.67-2.158 19.47-6.616l39.63-30.38c5.92-4.488 13.01-6.787 19.53-6.787c2.017 0 3.981 .2196 5.841 .6623l14.62 4.25l-37.5 87.5C154.1 260.3 152.5 268.8 152.5 277.2c0 22.09 11.49 43.52 31.51 55.29l85 50.13l-27.5 87.75c-.9875 3.174-1.458 6.388-1.458 9.55c0 13.65 8.757 26.31 22.46 30.58C265.6 511.5 268.9 512 272 512c13.62 0 26.25-8.75 30.5-22.5l31.75-101c1.211-4.278 1.796-8.625 1.796-12.93c0-16.57-8.661-32.51-23.55-41.44l-61.13-36.12l31.25-78.38l20.25 41.5C310.9 277.4 327.9 288 345.1 288H400c17.62 0 32-14.38 32-32C432 238.3 417.6 224 400 224zM288 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48S261.5 96 288 96zM129.8 317.5L114.9 352H48c-17.62 0-32 14.38-32 32s14.38 32 32 32h77.5c19.25 0 36.5-11.5 44-29.12l8.875-20.5l-10.75-6.25C150.4 349.9 137.6 334.8 129.8 317.5z"/></svg><span class="sr-only">Movement</span></strong><span class="sf-npc-value">' . sf_npc_e( $npc['move'] ) . '</span></p>';
		}
		echo '</div></div>';

		// Its description, between the name and the Stats, as the character
		// sheet's description box (read-only here): a short description and
		// how the GM plays it, or Content coming soon until it's written
		echo '<div class="sf-npc-description' . ( empty( $npc['description'] ) ? ' is-coming-soon' : '' ) . '"><p>'
			. ( ! empty( $npc['description'] ) ? sf_npc_e( $npc['description'] ) : 'Content coming soon.' )
			. '</p></div>';

		// The Stats as on a Kind card (php/rpg/components/cards.php): each core
		// Stat's name in its color with its number, its focus Stats under it,
		// then its resource under those (HP
		// under Physical, VP Social, SP Mental, MP Magic), live as in Player
		// Tools: −, the value over its max, + and restore to full, with a
		// meter under it. The page's script (php/javascript-loads.php) moves
		// the value; nothing is saved, so a reload puts it back to full.
		// A sheet without 'stats' (the library's blank monster sheet) skips
		// the box.
		$resources = sf_npc_resources( $npc );
		$by_group  = array( 'physical' => 'hp', 'social' => 'vp', 'mental' => 'sp', 'magic' => 'mp' );
		if ( ! empty( $npc['stats'] ) ) {
			echo '<div class="sf-npc-box sf-npc-stats">';
			foreach ( $groups as $group => $label ) {
				echo '<div class="sf-npc-group sf-npc-group--' . $group . '"><div class="sf-npc-label">' . $label . '<span class="sf-npc-value">' . (int) ( $npc['stats'][ $label ] ?? 0 ) . '</span></div>';
				if ( isset( SF_NPC_FOCUS[ $group ] ) ) {
					foreach ( SF_NPC_FOCUS[ $group ] as $stat ) {
						echo '<div class="sf-npc-stat"><span class="sf-npc-stat-name">' . $stat . '</span><span class="sf-npc-value">' . (int) ( $npc['stats'][ $stat ] ?? 0 ) . '</span></div>';
					}
				} else {
					// Magic has no focus Stats: what its points give
					echo '<p class="sf-npc-note">3 MP per point</p>';
				}
				$id = $by_group[ $group ];
				if ( isset( $resources[ $id ] ) ) {
					$value = (int) $resources[ $id ];
					$abbr  = strtoupper( $id );
					echo '<div class="sf-npc-resource sf-npc-resource--' . $id . '" data-npc-resource data-max="' . $value . '" data-current="' . $value . '">'
						. '<strong class="sf-npc-resource-name sf-npc-resource-name--' . $id . '" title="' . $names[ $id ] . '">' . $abbr . '</strong>'
						. sf_button( sf_npc_icon( 'minus' ), array( 'round' => 'xs', 'class' => 'sf-npc-step', 'attrs' => array( 'data-npc-step' => '-1', 'aria-label' => '1 less ' . $abbr ) ) )
						. '<span class="sf-npc-value" aria-live="polite"><span class="sf-npc-current">' . $value . '</span><span class="sf-npc-max"> / ' . $value . '</span></span>'
						. sf_button( sf_npc_icon( 'plus' ), array( 'round' => 'xs', 'class' => 'sf-npc-step', 'attrs' => array( 'data-npc-step' => '1', 'aria-label' => '1 more ' . $abbr ) ) )
						. sf_button( sf_npc_icon( 'restore' ), array( 'kind' => 'bare', 'class' => 'sf-npc-restore', 'disabled' => true, 'attrs' => array( 'data-npc-restore' => '', 'aria-label' => 'Restore ' . $abbr . ' to full', 'title' => 'Restore to full' ) ) )
						. '<span class="sf-npc-meter" aria-hidden="true"><span style="width: 100%"></span></span>'
						. '</div>';
				}
				echo '</div>';
			}
			echo '</div>';
		}

		// Its Attacks and any other Items together as item cards, then the
		// Traits as trait cards
		// (wide, in the second column)
		if ( $wide ) {
			echo '</div><div class="sf-npc-col">';
		}
		$with_fold = function ( $card ) use ( $fold ) {
			return '' === $fold ? $card : $card + array( 'fold' => $fold );
		};
		sf_npc_cards( 'Items', array_merge( $npc['attacks'] ?? array(), $npc['items'] ?? array() ), function ( $i ) use ( $with_fold ) {
			sf_card_item( $with_fold( $i ) );
		}, 'sf-sheet-scroll sf-sheet-scroll--short' );
		sf_npc_cards( 'Traits', $npc['traits'] ?? array(), function ( $t ) use ( $with_fold ) {
			sf_card_trait( $with_fold( $t ) );
		}, 'sf-sheet-scroll', true );
		if ( $wide ) {
			echo '</div></div>';
		}

		echo '</div>';
	}
}
