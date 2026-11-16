<?php
// The short-form sheet for Strange Frontiers NPCs and monsters: the name and
// what it is, HP, VP, SP (and MP for anything with Magic) and Movement on
// one line, the core Stats with their focus Stats as plain numbers, then its
// Attacks, Traits and Items as cards. One component, so every NPC and
// monster reads the same way, wherever it's dropped in.
//
// It's the full character sheet's short-form sibling (components/sheet.php
// draws the player's sheet): the same dark panel, core stat icons and cards,
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
require_once dirname( __DIR__ ) . '/core-stat-icons.php';

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

		// The name and what it is, then HP, VP, SP, MP and Movement
		echo '<div class="sf-npc-head"><div class="sf-npc-who">';
		echo '<' . $heading . ' class="sf-npc-name">' . sf_npc_e( $npc['name'] ) . '</' . $heading . '>';
		if ( ! empty( $npc['kind'] ) ) {
			echo '<p class="sf-npc-kind">' . sf_npc_e( $npc['kind'] ) . '</p>';
		}
		echo '</div><ul class="sf-npc-resources">';
		foreach ( sf_npc_resources( $npc ) as $id => $value ) {
			echo '<li class="sf-npc-resource"><strong class="sf-npc-resource-name sf-npc-resource-name--' . $id . '" title="' . $names[ $id ] . '">' . strtoupper( $id ) . '</strong><span class="sf-npc-value">' . (int) $value . '</span></li>';
		}
		if ( ! empty( $npc['move'] ) ) {
			// Movement as the character sheet's person-running icon (php/rpg/components/sheet.php)
			echo '<li class="sf-npc-resource" title="Movement"><strong class="sf-npc-resource-name sf-npc-resource-name--move"><svg class="sf-npc-move-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M400 224h-44l-26.12-53.25c-12.5-25.5-35.38-44.25-61.75-51L197 98.63C189.5 96.84 181.1 95.97 174.5 95.97c-20.88 0-41.33 6.81-58.26 19.78L76.5 146.3C68.31 152.5 64.01 162 64.01 171.6c0 17.11 13.67 32.02 32.02 32.02c6.808 0 13.67-2.158 19.47-6.616l39.63-30.38c5.92-4.488 13.01-6.787 19.53-6.787c2.017 0 3.981 .2196 5.841 .6623l14.62 4.25l-37.5 87.5C154.1 260.3 152.5 268.8 152.5 277.2c0 22.09 11.49 43.52 31.51 55.29l85 50.13l-27.5 87.75c-.9875 3.174-1.458 6.388-1.458 9.55c0 13.65 8.757 26.31 22.46 30.58C265.6 511.5 268.9 512 272 512c13.62 0 26.25-8.75 30.5-22.5l31.75-101c1.211-4.278 1.796-8.625 1.796-12.93c0-16.57-8.661-32.51-23.55-41.44l-61.13-36.12l31.25-78.38l20.25 41.5C310.9 277.4 327.9 288 345.1 288H400c17.62 0 32-14.38 32-32C432 238.3 417.6 224 400 224zM288 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48S261.5 96 288 96zM129.8 317.5L114.9 352H48c-17.62 0-32 14.38-32 32s14.38 32 32 32h77.5c19.25 0 36.5-11.5 44-29.12l8.875-20.5l-10.75-6.25C150.4 349.9 137.6 334.8 129.8 317.5z"/></svg><span class="sr-only">Movement</span></strong><span class="sf-npc-value">' . sf_npc_e( $npc['move'] ) . '</span></li>';
		}
		echo '</ul></div>';

		if ( ! empty( $npc['description'] ) ) {
			echo '<p class="sf-npc-description">' . sf_npc_e( $npc['description'] ) . '</p>';
		}

		// Each core Stat's icon, name and number, its focus Stats under it
		echo '<div class="sf-npc-stats">';
		foreach ( $groups as $group => $label ) {
			echo '<div class="sf-npc-box sf-npc-group sf-npc-group--' . $group . '"><div class="sf-npc-core"><span class="sf-npc-badge" title="Core Stat">';
			sf_core_stat_icon( $group, 'sf-npc-badge-icon' );
			echo '</span><strong>' . $label . '</strong><span class="sf-npc-value">' . (int) ( $npc['stats'][ $label ] ?? 0 ) . '</span></div>';
			if ( isset( SF_NPC_FOCUS[ $group ] ) ) {
				echo '<dl class="sf-npc-focus">';
				foreach ( SF_NPC_FOCUS[ $group ] as $stat ) {
					echo '<div><dt>' . $stat . '</dt><dd class="sf-npc-value">' . (int) ( $npc['stats'][ $stat ] ?? 0 ) . '</dd></div>';
				}
				echo '</dl>';
			} else {
				// Magic has no focus Stats: what its points give
				echo '<p class="sf-npc-note">' . ( 3 * (int) $npc['stats'][ $label ] ) . ' MP, 3 per point</p>';
			}
			echo '</div>';
		}
		echo '</div>';

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
