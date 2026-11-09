<?php
// Card components for Strange Frontiers. Every card of a kind should come
// from one of these functions, so a new card can't drift from the others:
//
//   sf_card_trait()      Knowledges, Languages, Skills, Abilities and spells,
//                        Conditions, Circumstances and Other Traits
//   sf_card_item()       Weapons, wearables, equipment, magic Items and
//                        natural weapons (an NPC's or monster's Attacks)
//   sf_card_background() Kinds, Origins, Professions and Pasts
//
// Each takes one array of what the card shows. Trait and background cards
// are styled by css/sf-cards.css, which carries its own colors so a card
// looks the same in a light section, a dark one or a lore popup. Item cards
// use the item styles in css/rpg.css (.equipment-box), already global.
// The component library (rpg-components.php) shows every variant.
require_once dirname( __DIR__ ) . '/items.php';

if ( ! function_exists( 'sf_card_e' ) ) {
	function sf_card_e( $text ) {
		return htmlspecialchars( (string) $text, ENT_QUOTES, 'UTF-8' );
	}

	// Isekai's mark, before the name of a Dreft card, as in the creator
	function sf_card_isekai_icon() {
		return '<svg class="sf-card-setting-icon" viewBox="0 0 512 512" role="img" aria-label="Isekai"><title>Isekai</title><path d="m194.547 20.182-12.815 195.064L73.522 94.22l45.562 160.89-92.547-8.542 54.106 103.94-61.225 8.54 79.943 65.73a159.426 159.426 0 0 1-4.204-36.206l-20.963-1.7 1.508-18.626 20.536 1.664a156.566 156.566 0 0 1 15.233-51.414l-40.48-29.09 10.908-15.176 38.9 27.96a158.684 158.684 0 0 1 35.288-38.31l-27.73-50.21 16.36-9.033 26.845 48.607a156.696 156.696 0 0 1 48.88-19.217l-12.952-90.87 18.502-2.637 12.94 90.785c4.583-.4 9.22-.62 13.906-.62h.004c4.13 0 8.223.163 12.275.475l6.574-62.775 18.587 1.945-6.634 63.37a157.415 157.415 0 0 1 37.95 12.68l18.37-36.737L356.678 218l-18.746 37.492a159.36 159.36 0 0 1 24.59 19.342l46.53-52.115 13.942 12.446-47.707 53.438a157.87 157.87 0 0 1 20.957 33.115l32.97-22.372 10.493 15.464-36.393 24.696a155.963 155.963 0 0 1 7.327 36.707l19.594-3.19 3.002 18.448-22.29 3.627a156.823 156.823 0 0 1-4.706 32.09l80.9-63.87-56.24-5.695 54.034-85.428-59.73 9.252 39.868-103.57-88.28 35.94 32.75-116.752-96.82 111.057-17.085-168.008-42.715 108.207-58.375-128.142zm58.29 229.193c-76.976.002-138.993 62.02-138.993 138.996 0 33.147 11.532 63.544 30.783 87.485l-130.545-46.02h-.713v62.487h146.823l.004.004h29.6c-.002 0-.004-.002-.006-.004h1.548l-3.07-1.082c-28.443-20.302-46.98-53.577-46.98-91.19 0-61.712 49.773-112.13 111.55-112.13 61.776 0 112.13 50.354 112.13 112.13 0 37.508-18.62 70.66-47.05 90.97l-3.69 1.302h1.848l-.006.004h29.424c.002 0 .003-.003.004-.004h146.7v-62.488h-.716l-130.195 45.898c19.395-23.942 31.13-54.303 31.13-87.36 0-76.932-62.6-138.995-139.577-138.997h-.004z"/></svg>';
	}

	// A Trait's effect, as the creator shows it: lines starting with "- " are
	// bullets, other lines paragraphs
	function sf_card_effect( $text ) {
		$lines = array_values( array_filter( array_map( 'trim', explode( "\n", $text ) ), 'strlen' ) );
		$html  = '';
		$open  = false;
		foreach ( $lines as $l ) {
			if ( 0 === strpos( $l, '- ' ) ) {
				$html .= ( $open ? '' : '<ul>' ) . '<li>' . sf_card_e( substr( $l, 2 ) ) . '</li>';
				$open  = true;
			} else {
				$html .= ( $open ? '</ul>' : '' ) . '<p>' . sf_card_e( $l ) . '</p>';
				$open  = false;
			}
		}
		return '<div class="sf-card-effect">' . $html . ( $open ? '</ul>' : '' ) . '</div>';
	}

	/**
	 * A Trait card: the name bar (name, Rank, then the flags and category as
	 * chips), then what it does.
	 *
	 * kind       knowledge | language | skill | ability | condition |
	 *            circumstance | other. Sets the category chip; a condition
	 *            gets the gray bar.
	 * name       The Trait's name.
	 * rank       Optional. Shown after the name, like "Local History (1)".
	 * flags      Optional. Muted chips before the category: Conveyed, Ranked,
	 *            Mastery, Background, Permanent...
	 * types      Optional. Its magic types, muted in parentheses: (Illusion).
	 * region     Optional. "dreft" for Isekai's green bar and mark.
	 * effect     What it does. Lines starting "- " become bullets.
	 * action     Optional. The Action it grants, "Name: what it does", set
	 *            off by a rule at its left.
	 * temporary  Optional. How long a Condition lasts.
	 * needs      Optional. Its Stat requirements and prerequisites.
	 * from       Optional. Where a character got it, on a sheet.
	 * fold       Optional. "open" or "closed": the body opens from a chevron
	 *            in the bar, like the sheet's Skills.
	 */
	function sf_card_trait( $t ) {
		$kinds = array(
			'knowledge'    => 'Knowledge',
			'language'     => 'Language',
			'skill'        => 'Skill',
			'ability'      => 'Ability',
			'condition'    => 'Condition',
			'circumstance' => 'Circumstance',
			'other'        => 'Other',
		);
		$kind    = $t['kind'];
		$classes = 'sf-card sf-trait-card sf-trait-card--' . $kind;
		if ( ! empty( $t['region'] ) ) {
			$classes .= ' sf-card--' . $t['region'];
		}
		$name = sf_card_e( $t['name'] ) . ( isset( $t['rank'] ) ? ' (' . (int) $t['rank'] . ')' : '' );
		if ( 'dreft' === ( $t['region'] ?? '' ) ) {
			$name = sf_card_isekai_icon() . $name;
		}
		$chips = '';
		foreach ( $t['flags'] ?? array() as $flag ) {
			$chips .= '<span class="sf-chip sf-chip--muted">' . sf_card_e( $flag ) . '</span>';
		}
		foreach ( $t['types'] ?? array() as $type ) {
			$chips .= '<span class="sf-chip sf-chip--muted">(' . sf_card_e( $type ) . ')</span>';
		}
		$chips .= '<span class="sf-chip">' . $kinds[ $kind ] . '</span>';

		$body = '';
		if ( ! empty( $t['temporary'] ) ) {
			$body .= '<p class="sf-card-note">Temporary: ' . sf_card_e( $t['temporary'] ) . '</p>';
		}
		$body .= sf_card_effect( $t['effect'] );
		if ( ! empty( $t['action'] ) ) {
			$colon = strpos( $t['action'], ': ' );
			$body .= '<p class="sf-card-action">' . ( false !== $colon ? '<strong>' . sf_card_e( substr( $t['action'], 0, $colon ) ) . ':</strong> ' . sf_card_e( substr( $t['action'], $colon + 2 ) ) : sf_card_e( $t['action'] ) ) . '</p>';
		}
		if ( ! empty( $t['needs'] ) ) {
			$body .= '<p class="sf-card-note">Needs ' . sf_card_e( $t['needs'] ) . '</p>';
		}
		if ( ! empty( $t['from'] ) ) {
			$body .= '<p class="sf-card-note">From ' . sf_card_e( $t['from'] ) . '</p>';
		}

		// A folding card's chevron sits with the chips, so it wraps with them
		$chevron = empty( $t['fold'] ) ? '' : '<svg class="sf-card-chevron" viewBox="0 0 12 8" aria-hidden="true" focusable="false"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
		$bar     = '<span class="sf-card-name">' . $name . '</span><span class="sf-card-chips">' . $chips . $chevron . '</span>';
		if ( ! empty( $t['fold'] ) ) {
			echo '<details class="' . $classes . '"' . ( 'open' === $t['fold'] ? ' open' : '' ) . '>';
			echo '<summary class="sf-card-bar">' . $bar . '</summary>';
			echo '<div class="sf-card-body">' . $body . '</div>';
			echo '</details>';
			return;
		}
		echo '<div class="' . $classes . '">';
		echo '<div class="sf-card-bar">' . $bar . '</div>';
		echo '<div class="sf-card-body">' . $body . '</div>';
		echo '</div>';
	}

	/**
	 * An Item card: the name, its badges (damage led by a sword or crosshairs,
	 * Max Range, Area of Effect, resistances led by a shield) and stored MP,
	 * its chips and value at the right, then its description and effects.
	 *
	 * name         The Item's name.
	 * category     Optional. Weapon, Wearable, Equipment, Artifact...
	 * plane        Optional. Any, Earth, Isekai...
	 * chips        Optional. More chips, like Melee or Natural weapon.
	 * value        Optional. Its value, with currency (ERC or Luras).
	 * damage       Optional. As the creator words it: "7 Piercing",
	 *              "6 Slashing / 4 Piercing" for a choice.
	 * formula      Optional. A damage formula shown in place of the number,
	 *              with the number after it: "Power - 5" (10).
	 * ranged       Optional. True for crosshairs instead of a sword.
	 * range        Optional. Max Range, like "3 m".
	 * area         Optional. Area of Effect, like "3 m".
	 * resistances  Optional. "1 Blunt, 1 Slashing".
	 * mp           Optional. An enchanted Item's stored MP.
	 * description  Optional. In italics under the name.
	 * lead         Optional. A line before the effects.
	 * effects      Optional. array( array( label, text ), ... ).
	 */
	function sf_card_item( $i ) {
		$badges = '';
		if ( ! empty( $i['damage'] ) ) {
			$lead = ! empty( $i['ranged'] ) ? 'crosshairs' : 'sword';
			if ( ! empty( $i['formula'] ) && preg_match( '~^\s*(-?\d+)\s+(.+?)\s*$~', $i['damage'], $m ) ) {
				$badges .= '<span class="chip equipment-stat" title="' . sf_card_e( $i['formula'] . ' ' . $m[2] . ': ' . $m[1] . ' ' . $m[2] ) . '">' . sf_item_stat_lead( $lead ) . '<span class="equipment-stat-value">' . sf_damage_icon( $m[2] ) . sf_card_e( $i['formula'] ) . ' <span class="sf-damage-total">(' . (int) $m[1] . ')</span></span></span>';
			} elseif ( preg_match( '~^\s*(\d+)\s+(\w+)\s*\+\s*(.+?)\s*$~', $i['damage'], $m ) ) {
				// Damage plus a Stat, like Fists' "1 Blunt + Power": the type's
				// icon, then "1 + Power", as the creator's badges show it
				$badges .= '<span class="chip equipment-stat" title="' . sf_card_e( $i['damage'] ) . '">' . sf_item_stat_lead( $lead ) . '<span class="equipment-stat-value">' . sf_damage_icon( $m[2] ) . (int) $m[1] . ' + ' . sf_card_e( $m[3] ) . '</span></span>';
			} else {
				$badges .= sf_item_stats( $lead, $i['damage'] );
			}
		}
		if ( ! empty( $i['range'] ) ) {
			$badges .= sf_item_reach( 'range', $i['range'] );
		}
		if ( ! empty( $i['area'] ) ) {
			$badges .= sf_item_reach( 'burst', $i['area'] );
		}
		if ( ! empty( $i['resistances'] ) ) {
			$badges .= sf_item_stats( 'shield', $i['resistances'] );
		}

		echo '<div class="equipment-box sf-item-card">';
		echo '<div class="equipment-row">';
		echo '<span class="equipment-name">' . sf_card_e( $i['name'] ) . '</span>';
		// One group, so a narrow card moves the badges under the name together
		if ( $badges ) {
			echo '<span class="equipment-stats sf-item-badges">' . $badges . '</span>';
		}
		if ( isset( $i['mp'] ) ) {
			echo '<span class="equipment-mp"><strong class="resource-name resource-mp" title="Mana Points">MP</strong><span class="num">' . (int) $i['mp'] . '<span class="muted"> / ' . (int) $i['mp'] . '</span></span></span>';
		}
		$chips = array_merge( $i['chips'] ?? array(), array_filter( array( $i['category'] ?? '', $i['plane'] ?? '' ) ) );
		if ( $chips || isset( $i['value'] ) ) {
			echo '<span class="equipment-chips">';
			foreach ( $chips as $chip ) {
				echo '<span class="chip">' . sf_card_e( $chip ) . '</span>';
			}
			if ( isset( $i['value'] ) ) {
				$label = number_format( $i['value'] ) . ' ' . $i['currency'];
				echo '<span class="chip equipment-value" title="' . $label . '" aria-label="Value: ' . $label . '">' . sf_item_value( $i['value'] ) . ' ' . sf_card_e( $i['currency'] ) . '</span>';
			}
			echo '</span>';
		}
		echo '</div>';
		if ( ! empty( $i['description'] ) ) {
			echo '<p class="equipment-description">' . sf_card_e( $i['description'] ) . '</p>';
		}
		if ( ! empty( $i['lead'] ) ) {
			echo '<p class="equipment-effect">' . sf_card_e( $i['lead'] ) . '</p>';
		}
		foreach ( $i['effects'] ?? array() as $effect ) {
			echo '<p class="equipment-effect"><strong>' . sf_card_e( $effect[0] ) . ':</strong> ' . sf_card_e( $effect[1] ) . '</p>';
		}
		echo '</div>';
	}

	/**
	 * A Background card, as the creator's: the name with its slot and plane
	 * as chips, the summary and features, then what it gives as labeled rows
	 * of chips, Bonus and Grants in the lighter gray.
	 *
	 * Takes a background as the creator exports it (sample-character.json,
	 * dreftian-backgrounds.json): id, slot (Kind | Origin | Profession |
	 * Past), name, plane, summary, features, bonus, grants, choices,
	 * backgroundList, lore, and a Kind's stats as bonus / maximum.
	 * $bonusNote is added to each Bonus, like Edwin's ", placed in Grace".
	 */
	function sf_card_background( $b, $bonusNote = '' ) {
		$rows = array(
			'Bonus'           => array_map( function ( $x ) use ( $bonusNote ) { return $x . $bonusNote; }, $b['bonus'] ?? array() ),
			'Grants'          => $b['grants'] ?? array(),
			'Choose'          => $b['choices'] ?? array(),
			'Background list' => $b['backgroundList'] ?? array(),
		);
		if ( ! empty( $b['stats'] ) ) {
			$groups = array( 'Physical' => array( 'endurance', 'power', 'grace' ), 'Social' => array( 'empathy', 'persuasion', 'demeanor' ), 'Mental' => array( 'logic', 'intuition', 'memory' ) );
			foreach ( $groups as $group => $stats ) {
				$rows[ $group . ' (bonus / maximum)' ] = array_map( function ( $s ) use ( $b ) { $x = $b['stats'][ $s ]; return ucfirst( $s ) . ' +' . $x['bonus'] . '/' . $x['max']; }, $stats );
			}
		}
		// A Kind's lore entry shares the first word of its id (tatot-orcoid is Tatot)
		$lore = $b['lore'] ?? '';
		if ( ! $lore && 'Kind' === $b['slot'] && function_exists( 'sf_lore_titles' ) && isset( sf_lore_titles()[ strtok( $b['id'], '-' ) ] ) ) {
			$lore = strtok( $b['id'], '-' );
		}
		$b['rows'] = $rows;
		$b['lore'] = $lore && function_exists( 'sf_lore_titles' ) ? array( $lore, sf_lore_titles()[ $lore ] ?? $lore ) : '';

		$dreft = 'isekai' === strtolower( $b['plane'] );
		echo '<div class="sf-card sf-background-card' . ( $dreft ? ' sf-card--dreft' : '' ) . '">';
		echo '<div class="sf-card-bar"><span class="sf-card-name">' . ( $dreft ? sf_card_isekai_icon() : '' ) . sf_card_e( $b['name'] ) . '</span>';
		echo '<span class="sf-card-chips"><span class="sf-chip">' . sf_card_e( $b['slot'] ) . '</span><span class="sf-chip sf-chip--muted">' . sf_card_e( ucfirst( $b['plane'] ) ) . '</span></span></div>';
		echo '<div class="sf-card-body">';
		echo '<p>' . sf_card_e( $b['summary'] ) . '</p>';
		foreach ( $b['features'] ?? array() as $f ) {
			echo '<p><strong>' . sf_card_e( $f['name'] ) . '.</strong> ' . sf_card_e( $f['description'] ) . '</p>';
		}
		$rows = array_filter( $b['rows'] ?? array() );
		if ( $rows ) {
			echo '<div class="sf-background-rows">';
			foreach ( $rows as $label => $list ) {
				echo '<div><span class="sf-background-label">' . sf_card_e( $label ) . '</span>';
				foreach ( $list as $x ) {
					echo '<span class="sf-chip' . ( in_array( $label, array( 'Bonus', 'Grants' ), true ) ? ' sf-chip--accent' : '' ) . '">' . sf_card_e( $x ) . '</span>';
				}
				echo '</div>';
			}
			echo '</div>';
		}
		if ( ! empty( $b['lore'] ) && function_exists( 'sf_lore_link' ) ) {
			echo '<p class="sf-card-note">More in the lore: ' . sf_lore_link( $b['lore'][0], $b['lore'][1] ) . '</p>';
		}
		echo '</div></div>';
	}
}
