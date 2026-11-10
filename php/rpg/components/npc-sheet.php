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
			echo '<li class="sf-npc-resource"><strong class="sf-npc-resource-name" title="Movement">Move</strong><span class="sf-npc-value">' . sf_npc_e( $npc['move'] ) . '</span></li>';
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
