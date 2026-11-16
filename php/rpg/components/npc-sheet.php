<?php
// The short-form sheet for Strange Frontiers NPCs and monsters: the name and
// what it is with its Movement, the core Stats and focus Stats laid out as
// on a Kind card with live HP, VP, SP (and MP for anything with Magic)
// beside them, then its Attacks, Traits and Items as cards. One component, so every NPC and
// monster reads the same way, wherever it's dropped in.
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
//   'name'        => 'Murk Legs',
//   'kind'        => 'Monster, Isekai',         // what it is, under the name
//   'description' => '…',                       // optional, a line or two
//   'move'        => '10 m',
//   'resistances' => '2 Blunt, 1 Slashing',      // optional
//   'stats'       => array( 'Physical' => 12, 'Endurance' => 10, …,
//                           'Magic' => 2 ),     // Magic is optional
//   'resources'   => array( 'hp' => 40 ),       // optional, over the rules
//   'attacks'     => array( … ),                // sf_card_item() arrays
//   'traits'      => array( … ),                // sf_card_trait() arrays
//   'items'       => array( … ),                // sf_card_item() arrays
// ), array( 'fold' => 'closed' ) );
//
// Options, as with the cards:
//
//   fold     'closed': the Attacks, Traits and Items start closed to their
//            name's bar, each opening from its chevron, for a page that
//            lists many NPCs; 'open' starts them open but folding. Without
//            it they're always open, for a page with one.
//   heading  the name's heading level, 'h5' by default, so the sheet fits
//            the page's outline
//
// Anything left out isn't drawn: no Attacks box for an NPC without Attacks.
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

	// A box of cards under its ruled title
	function sf_npc_cards( $title, $cards, $draw ) {
		if ( empty( $cards ) ) {
			return;
		}
		echo '<div class="sf-npc-box"><h6 class="sf-npc-title">' . $title . '</h6><ul class="sf-npc-cards">';
		foreach ( $cards as $card ) {
			echo '<li>';
			$draw( $card );
			echo '</li>';
		}
		echo '</ul></div>';
	}

	function sf_npc_sheet( $npc, $options = array() ) {
		$fold    = $options['fold'] ?? '';
		$heading = in_array( $options['heading'] ?? 'h5', array( 'h2', 'h3', 'h4', 'h5', 'h6' ), true ) ? ( $options['heading'] ?? 'h5' ) : 'h5';
		$names   = array( 'hp' => 'Hit Points', 'vp' => 'Vibe Points', 'sp' => 'Savvy Points', 'mp' => 'Mana Points' );
		$groups  = array( 'physical' => 'Physical', 'social' => 'Social', 'mental' => 'Mental' );
		if ( isset( $npc['stats']['Magic'] ) ) {
			$groups['magic'] = 'Magic';
		}

		echo '<div class="sf-npc">';

		// The name and what it is, then its resistances and Movement
		echo '<div class="sf-npc-head"><div class="sf-npc-who">';
		echo '<' . $heading . ' class="sf-npc-name">' . sf_npc_e( $npc['name'] ) . '</' . $heading . '>';
		if ( ! empty( $npc['kind'] ) ) {
			echo '<p class="sf-npc-kind">' . sf_npc_e( $npc['kind'] ) . '</p>';
		}
		echo '</div><div class="sf-npc-aside">';
		// Its resistances as a shield badge, as on item and chassis cards
		if ( ! empty( $npc['resistances'] ) ) {
			echo sf_item_stats( 'shield', $npc['resistances'] );
		}
		if ( ! empty( $npc['move'] ) ) {
			// Movement as the character sheet's person-running icon (php/rpg/components/sheet.php)
			echo '<p class="sf-npc-move" title="Movement"><strong class="sf-npc-resource-name sf-npc-resource-name--move"><svg class="sf-npc-move-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M400 224h-44l-26.12-53.25c-12.5-25.5-35.38-44.25-61.75-51L197 98.63C189.5 96.84 181.1 95.97 174.5 95.97c-20.88 0-41.33 6.81-58.26 19.78L76.5 146.3C68.31 152.5 64.01 162 64.01 171.6c0 17.11 13.67 32.02 32.02 32.02c6.808 0 13.67-2.158 19.47-6.616l39.63-30.38c5.92-4.488 13.01-6.787 19.53-6.787c2.017 0 3.981 .2196 5.841 .6623l14.62 4.25l-37.5 87.5C154.1 260.3 152.5 268.8 152.5 277.2c0 22.09 11.49 43.52 31.51 55.29l85 50.13l-27.5 87.75c-.9875 3.174-1.458 6.388-1.458 9.55c0 13.65 8.757 26.31 22.46 30.58C265.6 511.5 268.9 512 272 512c13.62 0 26.25-8.75 30.5-22.5l31.75-101c1.211-4.278 1.796-8.625 1.796-12.93c0-16.57-8.661-32.51-23.55-41.44l-61.13-36.12l31.25-78.38l20.25 41.5C310.9 277.4 327.9 288 345.1 288H400c17.62 0 32-14.38 32-32C432 238.3 417.6 224 400 224zM288 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48S261.5 96 288 96zM129.8 317.5L114.9 352H48c-17.62 0-32 14.38-32 32s14.38 32 32 32h77.5c19.25 0 36.5-11.5 44-29.12l8.875-20.5l-10.75-6.25C150.4 349.9 137.6 334.8 129.8 317.5z"/></svg><span class="sr-only">Movement</span></strong><span class="sf-npc-value">' . sf_npc_e( $npc['move'] ) . '</span></p>';
		}
		echo '</div></div>';

		if ( ! empty( $npc['description'] ) ) {
			echo '<p class="sf-npc-description">' . sf_npc_e( $npc['description'] ) . '</p>';
		}

		// The Stats as on a Kind card (php/rpg/components/cards.php): each core
		// Stat's name in its color with its number, its focus Stats under it
		// by their first three letters, in columns; then HP, VP, SP and MP to
		// their right, dropping under them when there's no room
		echo '<div class="sf-npc-box sf-npc-vitals"><div class="sf-npc-stats">';
		foreach ( $groups as $group => $label ) {
			echo '<div class="sf-npc-group sf-npc-group--' . $group . '"><div class="sf-npc-label">' . $label . '<span class="sf-npc-value">' . (int) ( $npc['stats'][ $label ] ?? 0 ) . '</span></div>';
			if ( isset( SF_NPC_FOCUS[ $group ] ) ) {
				foreach ( SF_NPC_FOCUS[ $group ] as $stat ) {
					echo '<div class="sf-npc-stat"><abbr title="' . $stat . '">' . substr( $stat, 0, 3 ) . '</abbr><span class="sf-npc-value">' . (int) ( $npc['stats'][ $stat ] ?? 0 ) . '</span></div>';
				}
			} else {
				// Magic has no focus Stats: what its points give
				echo '<p class="sf-npc-note">3 MP per point</p>';
			}
			echo '</div>';
		}
		echo '</div><ul class="sf-npc-resources">';
		// Each one live, as in Player Tools: −, the value over its max, + and
		// restore to full, with a meter under it. The page's script
		// (php/javascript-loads.php) moves the value; nothing is saved, so a
		// reload puts it back to full.
		foreach ( sf_npc_resources( $npc ) as $id => $value ) {
			$value = (int) $value;
			$abbr  = strtoupper( $id );
			echo '<li class="sf-npc-resource sf-npc-resource--' . $id . '" data-npc-resource data-max="' . $value . '" data-current="' . $value . '">'
				. '<strong class="sf-npc-resource-name sf-npc-resource-name--' . $id . '" title="' . $names[ $id ] . '">' . $abbr . '</strong>'
				. sf_button( sf_npc_icon( 'minus' ), array( 'round' => 'xs', 'class' => 'sf-npc-step', 'attrs' => array( 'data-npc-step' => '-1', 'aria-label' => '1 less ' . $abbr ) ) )
				. '<span class="sf-npc-value" aria-live="polite"><span class="sf-npc-current">' . $value . '</span><span class="sf-npc-max"> / ' . $value . '</span></span>'
				. sf_button( sf_npc_icon( 'plus' ), array( 'round' => 'xs', 'class' => 'sf-npc-step', 'attrs' => array( 'data-npc-step' => '1', 'aria-label' => '1 more ' . $abbr ) ) )
				. sf_button( sf_npc_icon( 'restore' ), array( 'round' => 'xs', 'class' => 'sf-npc-step', 'disabled' => true, 'attrs' => array( 'data-npc-restore' => '', 'aria-label' => 'Restore ' . $abbr . ' to full', 'title' => 'Restore to full' ) ) )
				. '<span class="sf-npc-meter" aria-hidden="true"><span style="width: 100%"></span></span>'
				. '</li>';
		}
		echo '</ul></div>';

		// The Attacks as item cards, the Traits as trait cards, then any Items
		$with_fold = function ( $card ) use ( $fold ) {
			return '' === $fold ? $card : $card + array( 'fold' => $fold );
		};
		sf_npc_cards( 'Attacks', $npc['attacks'] ?? array(), function ( $a ) use ( $with_fold ) {
			sf_card_item( $with_fold( $a ) );
		} );
		sf_npc_cards( 'Traits', $npc['traits'] ?? array(), function ( $t ) use ( $with_fold ) {
			sf_card_trait( $with_fold( $t ) );
		} );
		sf_npc_cards( 'Items', $npc['items'] ?? array(), function ( $i ) use ( $with_fold ) {
			sf_card_item( $with_fold( $i ) );
		} );

		echo '</div>';
	}
}
