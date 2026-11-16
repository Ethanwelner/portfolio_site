<?php
// Card components for Strange Frontiers: one per kind of card, so a new card
// can't drift from the others.
//
//   sf_card_trait()      Knowledges, Languages, Skills, Abilities and spells,
//                        Conditions, Circumstances and Other Traits
//   sf_card_item()       Weapons, wearables, equipment, magic Items and
//                        natural weapons (an NPC's or monster's Attacks)
//   sf_card_chassis()    An AI Core's chassis: an Item card holding
//                        Physical stats and Traits
//   sf_card_kind()       Kinds, in a framed card of their own
//   sf_card_background() Origins, Professions and Pasts (a Kind goes to
//                        sf_card_kind())
//
// The Character Creator's and Player Tools' cards are the reference. These
// draw the same markup as the creator's components
// (strange-frontiers-character-creator src/app/components/cards.tsx), styled
// by the same stylesheet: css/sf-cards.css here is a copy of the creator's
// src/app/cards.css. Change a card in the creator first, then bring the
// markup here and copy the stylesheet over.
//
// Each card takes options that say how it behaves on the page that draws it,
// under the same names as the creator's:
//
//   Trait card       fold  'open' or 'closed': opens and closes from the
//                          chevron at the end of its bar, and only there
//                    keep  true: its effect stays in view while it's closed
//                          (an Ability's)
//   Item card        count how many, in a circle on its left edge
//                    equip 'on' or 'off': its Equip box, read-only
//                    fold  'open' or 'closed', as for a Trait card
//                    body  more of the card, under its description
//   Background card  (none on the site)
//
// A card without fold is always open. The site's pages are static, so the
// creator's live options (Equip's checkbox, Edit, Note, picking a card)
// don't exist here; the same cards are drawn read-only. The component
// library (rpg-components.php) shows every variant.
require_once dirname( __DIR__ ) . '/items.php';
require_once __DIR__ . '/stats.php';
require_once __DIR__ . '/buttons.php';

if ( ! function_exists( 'sf_card_e' ) ) {
	function sf_card_e( $text ) {
		return htmlspecialchars( (string) $text, ENT_QUOTES, 'UTF-8' );
	}

	// The setting's mark before a card's name, as the creator's SettingIcon:
	// Isekai's for Isekai, The Settled Systems' for Earth
	function sf_card_setting_icon( $plane ) {
		$settings = array(
			'isekai' => array( 'isekai', 'Isekai' ),
			'earth'  => array( 'systems', 'The Settled Systems' ),
		);
		if ( ! isset( $settings[ $plane ] ) ) {
			return '';
		}
		list( $mark, $name ) = $settings[ $plane ];
		return '<span class="setting-icon setting-' . $mark . '" role="img" aria-label="' . $name . '" title="' . $name . '"></span>';
	}

	// A Trait card's kind as an icon before its name, in place of a category
	// chip, as the creator's (KIND_ICON in cards.tsx): so far a Knowledge's
	// mortarboard, a Language's speech bubbles, a Skill's pencil and wrench,
	// an Ability's weightlifter or a Condition's figure in its viewfinder. The sheet's section titles
	// use them too, with their own class (sf_sheet_title).
	function sf_card_kind_icon( $kind, $class = 'sf-card-kind-icon' ) {
		$icons = array(
			'knowledge' => array( 'Knowledge', '0 0 640 512', 'M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z' ),
			'language'  => array( 'Language', '0 0 640 512', 'M416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9C387.3 320 416 291.2 416 256zM576 128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .0013v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.0073l82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128z' ),
			'skill'     => array( 'Skill', '0 0 512 512', 'M7.6 45.6L134.1 85.9L47.9 172.1ZM115.7 138.2L151.1 102.8L407.1 358.8L371.7 394.2ZM64.8 189.1L100.2 153.7L356.2 409.7L320.8 445.1ZM424 375.8L436.1 387.8A61 61 0 0 1 349.8 474.1L337.8 462ZM262 187L300 150L300 75L372 5L432 16L378 70L378 132L437 130L490 82L507 128L434 212L322 246ZM208.4 359.5L162.7 405.2A65 65 0 1 1 102.1 347L149 300.1ZM131.1 411.8A33 33 0 1 0 65.1 411.8A33 33 0 1 0 131.1 411.8Z' ),
			'ability'   => array( 'Ability', '0 0 512 512', 'M256 6A56 56 0 1 1 256 118A56 56 0 1 1 256 6ZM150 222V198A56 56 0 0 1 206 142H306A56 56 0 0 1 362 198V222ZM38 256H474A22 22 0 0 1 496 278V278A22 22 0 0 1 474 300H38A22 22 0 0 1 16 278V278A22 22 0 0 1 38 256ZM196 334H316V478A22 22 0 0 1 272 478V384A16 16 0 0 0 240 384V478A22 22 0 0 1 196 478ZM66 160H96A20 20 0 0 1 116 180V376A20 20 0 0 1 96 396H66A20 20 0 0 1 46 376V180A20 20 0 0 1 66 160ZM416 160H446A20 20 0 0 1 466 180V376A20 20 0 0 1 446 396H416A20 20 0 0 1 396 376V180A20 20 0 0 1 416 160Z' ),
			'condition' => array( 'Condition', '0 0 512 512', 'M0 0H122.0A28.0 28.0 0 0 1 122.0 56H56V122.0A28.0 28.0 0 0 1 0 122.0ZM512 0V122.0A28.0 28.0 0 0 1 456 122.0V56H390.0A28.0 28.0 0 0 1 390.0 0ZM0 512V390.0A28.0 28.0 0 0 1 56 390.0V456H122.0A28.0 28.0 0 0 1 122.0 512ZM512 512H390.0A28.0 28.0 0 0 1 390.0 456H456V390.0A28.0 28.0 0 0 1 512 390.0ZM256 52A54 54 0 1 1 256 160A54 54 0 1 1 256 52ZM126 180H386A34 34 0 0 1 420 214V214A34 34 0 0 1 386 248H126A34 34 0 0 1 92 214V214A34 34 0 0 1 126 180ZM316 248V436A22 22 0 0 1 272 436V348A16 16 0 0 0 240 348V436A22 22 0 0 1 196 436V248Z' ),
		);
		if ( ! isset( $icons[ $kind ] ) ) {
			return '';
		}
		list( $label, $box, $d ) = $icons[ $kind ];
		return '<svg class="icon icon-' . $kind . ' ' . $class . '" xmlns="http://www.w3.org/2000/svg" viewBox="' . $box . '" role="img" aria-label="' . $label . '"><title>' . $label . '</title><path d="' . $d . '"/></svg>';
	}

	// The Isekai plane (old callers say region 'dreft')
	function sf_card_plane( $c ) {
		if ( ! empty( $c['plane'] ) ) {
			return strtolower( $c['plane'] );
		}
		return 'dreft' === ( $c['region'] ?? '' ) ? 'isekai' : '';
	}

	// A folding card's chevron, the only place that opens and closes it. The
	// script below, written once per page, does the opening.
	function sf_card_chevron( $open, $label, $class ) {
		$svg = '<svg' . ( 'sf-card-fold' === $class ? ' class="sf-card-chevron"' : '' ) . ' viewBox="0 0 12 8" aria-hidden="true" focusable="false"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';
		$html = '<button type="button" class="sf-btn sf-btn--bare ' . $class . '" data-sf-fold aria-label="' . ( $open ? 'Collapse ' : 'Expand ' ) . sf_card_e( $label ) . '" aria-expanded="' . ( $open ? 'true' : 'false' ) . '" title="' . ( $open ? 'Collapse' : 'Expand' ) . '">' . $svg . '</button>';
		static $script = false;
		if ( ! $script ) {
			$script = true;
			$html  .= '<script>document.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest("[data-sf-fold]");if(!b)return;var c=b.closest(".sf-card, .sf-item-card"),o=c.classList.contains("is-closed"),n=b.getAttribute("aria-label").replace(/^(Collapse|Expand) /,"");c.classList.toggle("is-open",o);c.classList.toggle("is-closed",!o);b.setAttribute("aria-expanded",o);b.setAttribute("aria-label",(o?"Collapse ":"Expand ")+n);b.title=o?"Collapse":"Expand";});</script>';
		}
		return $html;
	}

	// A Trait's effect, as the creator's Effect: lines starting with "- " are
	// bullets, other lines paragraphs; a plain effect is one paragraph
	function sf_card_effect( $text ) {
		$lines = array_values( array_filter( array_map( 'trim', explode( "\n", $text ) ), 'strlen' ) );
		if ( ! $lines ) {
			return '';
		}
		$bullets = array_filter( $lines, function ( $l ) { return 0 === strpos( $l, '- ' ); } );
		if ( ! $bullets ) {
			return '<p class="sf-card-effect">' . sf_card_e( $text ) . '</p>';
		}
		$html = '';
		$open = false;
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

	// The Action a Trait grants, "Name: what it does"
	function sf_card_action( $action ) {
		$colon = strpos( $action, ': ' );
		return '<p class="sf-card-action">' . ( false !== $colon ? '<strong>' . sf_card_e( substr( $action, 0, $colon ) ) . ':</strong> ' . sf_card_e( substr( $action, $colon + 2 ) ) : sf_card_e( $action ) ) . '</p>';
	}

	/**
	 * A Trait card: the name bar (the setting's mark, the name, its Rank, then
	 * its chips and the chevron at the right), then its body: the category
	 * and flags with where it came from, then its effect and Actions. A
	 * Condition shows where it came from and how long it lasts instead.
	 *
	 * kind       knowledge | language | skill | ability | condition |
	 *            circumstance | other. A condition gets the gray bar.
	 * name       The Trait's name.
	 * rank       Optional. In a rounded square before the name.
	 * plane      Optional. 'isekai' for Dreft's green and Isekai's mark,
	 *            'earth' for The Settled Systems' mark. (region 'dreft' works
	 *            too.)
	 * chips      Optional. Chips in the bar, like where a sheet's Trait was
	 *            chosen from (Origin, Profession, Past).
	 * flags      Optional. Muted chips after the category: Mastery,
	 *            Background, Conveyed, Permanent...
	 * types      Optional. Its magic types, muted in parentheses: (Illusion).
	 * effect     What it does. Lines starting "- " become bullets.
	 * action     Optional. The Action it grants, "Name: what it does". An
	 *            array for several.
	 * grants     Optional. Traits it gives, as a row of muted chips.
	 * temporary  Optional. How long a Condition lasts.
	 * needs      Optional. Its Stat requirements and prerequisites.
	 * from       Optional. Where a character got it.
	 * fold       Optional. 'open' or 'closed': it opens from the chevron.
	 * keep       Optional. True: its effect stays in view while it's closed.
	 */
	function sf_card_trait( $t ) {
		$kind   = $t['kind'];
		$plane  = sf_card_plane( $t );
		$fold   = $t['fold'] ?? '';
		$keep   = ! empty( $t['keep'] ) && $fold;
		$classes = 'sf-card sf-trait-card sf-trait-card--' . $kind . ( 'isekai' === $plane ? ' sf-card--dreft' : '' );
		if ( $fold ) {
			$classes .= 'open' === $fold ? ' is-open' : ' is-closed';
		}
		if ( $keep ) {
			$classes .= ' has-keep';
		}

		$chips = '';
		foreach ( $t['chips'] ?? array() as $chip ) {
			$chips .= '<span class="sf-chip">' . sf_card_e( $chip ) . '</span>';
		}
		if ( $fold ) {
			$chips .= sf_card_chevron( 'open' === $fold, $t['name'], 'sf-card-fold' );
		}

		$effect = sf_card_effect( $t['effect'] );
		$body   = '';
		if ( 'condition' === $kind ) {
			$note = trim( ( empty( $t['from'] ) ? '' : 'From ' . rtrim( $t['from'], '.' ) . '. ' ) . ( $t['temporary'] ?? '' ) );
			if ( $note ) {
				$body .= '<p class="sf-card-note">' . sf_card_e( $note ) . '</p>';
			}
		} else {
			// The category, its flags and magic
			// types, then where it came from, on one line
			// A Knowledge or Language says so with the icon in its bar
			// (sf_card_kind_icon)
			$tags = sf_card_kind_icon( $kind ) ? '' : '<span class="sf-chip">' . ucfirst( $kind ) . '</span>';
			foreach ( $t['flags'] ?? array() as $flag ) {
				$tags .= '<span class="sf-chip sf-chip--muted">' . sf_card_e( $flag ) . '</span>';
			}
			foreach ( $t['types'] ?? array() as $type ) {
				$tags .= '<span class="sf-chip sf-chip--muted">(' . sf_card_e( $type ) . ')</span>';
			}
			if ( ! empty( $t['from'] ) ) {
				$tags .= '<span class="sf-card-note">From ' . sf_card_e( $t['from'] ) . '</span>';
			}
			if ( $tags ) {
				$body .= '<div class="sf-card-tags">' . $tags . '</div>';
			}
		}
		if ( ! empty( $t['needs'] ) ) {
			// Under the badges, over the effect: each requirement in its own parens: "(Memory 2) (Intuition 2)"
			$needs = array_map( fn( $r ) => '(' . trim( $r ) . ')', explode( ',', $t['needs'] ) );
			$body .= '<p class="sf-card-note">' . sf_card_e( implode( ' ', $needs ) ) . '</p>';
		}
		if ( ! $keep ) {
			$body .= $effect;
		}
		foreach ( (array) ( $t['action'] ?? array() ) as $action ) {
			if ( $action ) {
				$body .= sf_card_action( $action );
			}
		}
		if ( ! empty( $t['grants'] ) ) {
			$body .= '<div class="sf-card-tags">';
			foreach ( $t['grants'] as $grant ) {
				$body .= '<span class="sf-chip sf-chip--muted">' . sf_card_e( $grant ) . '</span>';
			}
			$body .= '</div>';
		}

		// The Rank in a rounded square, between the kind's icon and the name
		// (.sf-card-rank)
		$rank = isset( $t['rank'] ) ? '<span class="sf-card-rank" title="Rank ' . (int) $t['rank'] . '" aria-label="Rank ' . (int) $t['rank'] . '">' . (int) $t['rank'] . '</span>' : '';
		$name = sf_card_kind_icon( $kind ) . $rank . sf_card_setting_icon( $plane ) . sf_card_e( $t['name'] );
		echo '<div class="' . $classes . '">';
		echo '<div class="sf-card-bar"><span class="sf-card-name">' . $name . '</span>' . ( $chips ? '<span class="sf-card-chips">' . $chips . '</span>' : '' ) . '</div>';
		echo '<div class="sf-card-body">' . ( $keep ? $effect : '' ) . ( $fold ? '<div class="sf-card-more">' . $body . '</div>' : $body ) . '</div>';
		echo '</div>';
	}

	/**
	 * An Item card, as the creator's: its top line (Equip, the name and its
	 * badges: damage led by a sword or crosshairs, Max Range, Area of Effect,
	 * resistances led by a shield, and an enchanted Item's MP), then, open,
	 * its category, value and the like as chips, its description in italics
	 * and its rules.
	 *
	 * name         The Item's name.
	 * category     Weapon, Armor, Gear, Artifact...
	 * value        Optional. Its value, with currency (ERC or Luras).
	 * weight       Optional. Its weight in kilograms, like 0.9: "0.9 kg".
	 * attack       Optional. How it Attacks: Melee, Ranged, Thrown.
	 * stat         Optional. Its Attack Stat: Power, Grace...
	 * reload       Optional. Its reload: Partial, Full...
	 * slot         Optional. The slot it takes: Body Armor, Outerwear...
	 * chips        Optional. More chips, like Natural weapon.
	 * plane        Optional. Any, Earth, Isekai: a chip after the rest.
	 * damage       Optional. As the creator words it: "7 Piercing",
	 *              "6 Slashing / 4 Piercing" for a choice.
	 * formula      Optional. A damage formula shown in place of the number,
	 *              with the number after it: "Power - 5" (10).
	 * ranged       Optional. True for crosshairs instead of a sword.
	 * range        Optional. Max Range, like "3 m".
	 * area         Optional. Area of Effect, like "3 m".
	 * resistances  Optional. "1 Blunt, 1 Slashing".
	 * mp           Optional. An enchanted Item's stored MP (its max), with
	 *              − and + (sf_item_resource).
	 * mp_now       Optional. Its MP now; full without it.
	 * hp           Optional. array( now, max ): a chassis's HP, with − and +.
	 * resists_in_chips  Optional. True: the resistances badge leads the
	 *              chips line instead of the top line (a chassis).
	 * description  Optional. In italics.
	 * lead         Optional. Its rules, after the description.
	 * effects      Optional. array( array( label, text ), ... ).
	 * count        Optional. How many of a counted item (a consumable), in a
	 *              circle on its left edge. One-of-a-kind items have none.
	 * equip        Optional. 'on' or 'off': its Equip box, read-only.
	 * fold         Optional. 'open' or 'closed': it opens from the chevron.
	 * body         Optional. A function that draws more of the card, under
	 *              its description, like a chassis's stats and Traits.
	 */
	function sf_card_item( $i ) {
		$badges = '';
		if ( ! empty( $i['damage'] ) ) {
			$lead = ! empty( $i['ranged'] ) ? 'crosshairs' : 'sword';
			if ( ! empty( $i['formula'] ) && preg_match( '~^\s*(-?\d+)\s+(.+?)\s*$~', $i['damage'], $m ) ) {
				$badges .= '<span class="sf-item-badge-group"><span class="chip equipment-stat" title="' . sf_card_e( $i['formula'] . ' ' . $m[2] . ': ' . $m[1] . ' ' . $m[2] ) . '">' . sf_item_stat_lead( $lead ) . '<span class="equipment-stat-value">' . sf_damage_icon( $m[2] ) . sf_card_e( $i['formula'] ) . ' <span class="sf-damage-total">(' . (int) $m[1] . ')</span></span></span></span>';
			} elseif ( preg_match( '~^\s*(\d+)\s+(\w+)\s*\+\s*(.+?)\s*$~', $i['damage'], $m ) ) {
				// Damage plus a Stat, like Fists' "1 Blunt + Power": the type's
				// icon, then "1 + Power", as the creator's badges show it
				$badges .= '<span class="sf-item-badge-group"><span class="chip equipment-stat" title="' . sf_card_e( $i['damage'] ) . '">' . sf_item_stat_lead( $lead ) . '<span class="equipment-stat-value">' . sf_damage_icon( $m[2] ) . (int) $m[1] . ' + ' . sf_card_e( $m[3] ) . '</span></span></span>';
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
		$resists = empty( $i['resistances'] ) ? '' : sf_item_stats( 'shield', $i['resistances'] );
		if ( empty( $i['resists_in_chips'] ) ) {
			$badges .= $resists;
		}

		$fold    = $i['fold'] ?? '';
		$classes = 'equipment-box sf-item-card' . ( $fold ? ( 'open' === $fold ? ' is-open' : ' is-closed' ) : '' ) . ( empty( $i['class'] ) ? '' : ' ' . $i['class'] );
		echo '<div class="' . $classes . '">';
		if ( isset( $i['count'] ) ) {
			echo '<span class="sf-item-count" aria-label="' . (int) $i['count'] . ' of ' . sf_card_e( $i['name'] ) . '">' . (int) $i['count'] . '</span>';
		}
		echo '<div class="equipment-row sf-item-summary">';
		if ( ! empty( $i['equip'] ) ) {
			echo '<label class="sf-item-equip" title="Equip"><input type="checkbox" aria-label="Equip"' . ( 'on' === $i['equip'] ? ' checked' : '' ) . ' disabled><span class="sf-item-equip-label">Equip</span></label>';
		}
		echo '<span class="sf-item-main"><span class="equipment-name">' . sf_card_e( $i['name'] ) . '</span>';
		if ( $badges ) {
			echo '<div class="equipment-stats sf-item-badges">' . $badges . '</div>';
		}
		if ( isset( $i['mp'] ) ) {
			sf_item_resource( 'mp', (int) $i['mp'], (int) ( $i['mp_now'] ?? $i['mp'] ) );
		}
		if ( isset( $i['hp'] ) ) {
			sf_item_resource( 'hp', (int) $i['hp'][1], (int) $i['hp'][0] );
		}
		echo '</span>';
		if ( $fold ) {
			echo sf_card_chevron( 'open' === $fold, $i['name'], 'sf-item-icon sf-item-expand' );
		}
		echo '</div>';

		// Open: the chips the top line leaves out, in the creator's order
		$chips = array( $i['category'] ?? '' );
		if ( isset( $i['value'] ) ) {
			$chips[] = number_format( $i['value'] ) . ' ' . $i['currency'];
		}
		if ( isset( $i['weight'] ) ) {
			$chips[] = $i['weight'] . ' kg';
		}
		$chips[] = empty( $i['attack'] ) ? '' : $i['attack'] . ' Attack';
		$chips[] = $i['stat'] ?? '';
		$chips[] = empty( $i['reload'] ) ? '' : 'Reload: ' . $i['reload'] . ' Action';
		$chips[] = empty( $i['slot'] ) ? '' : 'Slot: ' . $i['slot'];
		$chips   = array_merge( $chips, $i['chips'] ?? array(), array( $i['plane'] ?? '' ) );
		echo '<div class="sf-item-more"><div class="equipment-chips">';
		if ( ! empty( $i['resists_in_chips'] ) ) {
			echo $resists;
		}
		foreach ( array_filter( $chips ) as $chip ) {
			echo '<span class="chip">' . sf_card_e( $chip ) . '</span>';
		}
		echo '</div>';
		if ( ! empty( $i['description'] ) || ! empty( $i['lead'] ) || ! empty( $i['effects'] ) ) {
			echo '<div class="sf-item-stock">';
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
		if ( ! empty( $i['body'] ) ) {
			call_user_func( $i['body'] );
		}
		echo '</div></div>';
	}

	/**
	 * HP or MP on an Item's top line, as the creator's ItemResource and the
	 * character sheet's trackers: its name, −, the value over its max, +. −
	 * stops at 0; + goes past the max (bonus points), and the value then takes
	 * the resource's color. The site's pages are static, so a small script
	 * (drawn once, with the first readout) makes − and + work in the page.
	 */
	function sf_item_resource( $kind, $max, $now ) {
		static $script = false;
		$name  = strtoupper( $kind );
		$title = 'hp' === $kind ? 'Hit Points' : 'Mana Points';
		$minus = '<svg class="sign-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/></svg>';
		$plus  = '<svg class="sign-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg>';
		$over  = $now > $max;
		echo '<span class="equipment-mp equipment-resource equipment-' . $kind . '" data-sf-resource="' . $kind . '" data-max="' . $max . '" data-now="' . $now . '">';
		echo '<strong class="resource-name resource-' . $kind . '" title="' . $title . '">' . $name . '</strong>';
		echo sf_button( $minus, array( 'round' => 'xs', 'disabled' => $now <= 0, 'attrs' => array( 'aria-label' => '1 less ' . $name, 'data-sf-step' => '-1' ) ) );
		echo '<span class="num" aria-live="polite"><span class="equipment-resource-now' . ( $over ? ' resource-' . $kind : '' ) . '"' . ( $over ? ' title="Above the max of ' . $max . '"' : '' ) . '>' . $now . '</span><span class="muted"> / ' . $max . '</span></span>';
		echo sf_button( $plus, array( 'round' => 'xs', 'attrs' => array( 'aria-label' => '1 more ' . $name, 'data-sf-step' => '1' ) ) );
		echo '</span>';
		if ( ! $script ) {
			$script = true;
			?>
<script>
document.addEventListener('click', function (e) {
	var step = e.target.closest('[data-sf-step]');
	var box = step && step.closest('[data-sf-resource]');
	if (!box) return;
	var max = Number(box.dataset.max);
	var now = Math.max(0, Number(box.dataset.now) + Number(step.dataset.sfStep));
	box.dataset.now = now;
	var value = box.querySelector('.equipment-resource-now');
	value.textContent = now;
	value.className = 'equipment-resource-now' + (now > max ? ' resource-' + box.dataset.sfResource : '');
	if (now > max) { value.title = 'Above the max of ' + max; } else { value.removeAttribute('title'); }
	box.querySelector('[data-sf-step="-1"]').disabled = now <= 0;
});
</script>
			<?php
		}
	}

	/**
	 * A Chassis card, as the creator's ChassisCard: the body an AI Core
	 * inhabits, an Item card that holds part of a character sheet. Its top
	 * line is an Item card's with its HP, which − and + change, as on a
	 * character sheet; its armor's resistances badge leads its chips. Open,
	 * under its description, its Physical core and focus stats as a stat
	 * block (sf_stat_block), its Attacks as Item cards (natural weapons) and
	 * the Traits it gives whoever inhabits it, as Trait cards
	 * (sf_card_trait). Its HP sit on its top line, worked out as a
	 * character's are: 10 plus its Physical focus stats. An AI Core has no
	 * Physical stats of its own: its chassis's are its, and so are its HP.
	 *
	 * physical  array( 'core' => 4, 'stats' => array( array( 'name' =>
	 *           'Endurance', 'value' => 5, 'bonus' => 0, 'max' => 5 ), ... ) ):
	 *           max is the value, since no Level raises a chassis's stats
	 * hp        Optional. Its HP now, when it's taken damage; full without it.
	 * hp_bonus  Optional. More max HP from its Traits, like Reinforced's +10.
	 * attacks   Optional. Item cards' arrays, as sf_card_item() takes them.
	 * traits    Optional. Trait cards' arrays, as sf_card_trait() takes them.
	 * Everything else is sf_card_item()'s; category defaults to Chassis.
	 */
	function sf_card_chassis( $c ) {
		$physical = $c['physical'];
		$attacks  = $c['attacks'] ?? array();
		$traits   = $c['traits'] ?? array();
		$max_hp   = 10 + array_sum( array_column( $physical['stats'], 'value' ) ) + (int) ( $c['hp_bonus'] ?? 0 );
		$hp       = array( $c['hp'] ?? $max_hp, $max_hp );
		unset( $c['physical'], $c['attacks'], $c['traits'], $c['hp_bonus'] );
		sf_card_item(
			array( 'hp' => $hp, 'resists_in_chips' => true ) + $c + array(
				'category' => 'Chassis',
				'class'    => 'sf-chassis-card',
				'body'     => function () use ( $physical, $attacks, $traits ) {
					echo '<div class="sf-chassis">';
					sf_stat_block( array( array( 'group' => 'physical' ) + $physical ) );
					if ( $attacks ) {
						echo '<div class="sf-chassis-list"><h5 class="sf-chassis-label">Attacks</h5>';
						foreach ( $attacks as $a ) {
							sf_card_item( $a );
						}
						echo '</div>';
					}
					if ( $traits ) {
						echo '<div class="sf-chassis-list"><h5 class="sf-chassis-label">Traits</h5>';
						foreach ( $traits as $t ) {
							sf_card_trait( $t );
						}
						echo '</div>';
					}
					echo '</div>';
				},
			)
		);
	}

	/**
	 * A Background card, as the creator's: the name with its slot and plane
	 * as chips, the summary, then for a Kind its stats' bonus and maximum,
	 * its Grants and its features, and for a package what it gives as
	 * labeled rows of chips, Bonus and Grants in the lighter gray, and its
	 * features.
	 *
	 * Takes a background as the creator exports it (sample-character.json,
	 * dreftian-backgrounds.json): id, slot (Kind | Origin | Profession |
	 * Past), name, plane, summary, features, bonus, grants, choices,
	 * backgroundKeywords, lore, and a Kind's stats as bonus / maximum.
	 * $bonusNote is added to each Bonus, like Edwin's ", placed in Grace".
	 */
	function sf_card_background( $b, $bonusNote = '' ) {
		if ( 'Kind' === $b['slot'] ) {
			sf_card_kind( $b );
			return;
		}
		$plane = strtolower( $b['plane'] );
		echo '<div class="sf-card sf-background-card' . ( 'isekai' === $plane ? ' sf-card--dreft' : '' ) . '">';
		echo '<div class="sf-card-bar"><h3 class="sf-card-name">' . sf_card_setting_icon( $plane ) . sf_card_e( $b['name'] ) . '</h3>';
		echo '<span class="sf-card-chips"><span class="sf-chip">' . sf_card_e( $b['slot'] ) . '</span><span class="sf-chip sf-chip--muted">' . sf_card_e( $plane ) . '</span></span></div>';
		echo '<div class="sf-card-body">';
		echo '<p>' . sf_card_e( $b['summary'] ) . '</p>';

		$row = function ( $label, $list, $accent ) {
			if ( ! $list ) {
				return '';
			}
			$html = '<div><span class="sf-background-label">' . sf_card_e( $label ) . '</span>';
			foreach ( $list as $x ) {
				$html .= '<span class="sf-chip' . ( $accent ? ' sf-chip--accent' : '' ) . '">' . sf_card_e( $x ) . '</span>';
			}
			return $html . '</div>';
		};
		$features = $b['features'] ?? array();

		$rows  = $row( 'Bonus', array_map( function ( $x ) use ( $bonusNote ) { return $x . $bonusNote; }, $b['bonus'] ?? array() ), true );
		$rows .= $row( 'Grants', $b['grants'] ?? array(), true );
		$rows .= $row( 'Choose', $b['choices'] ?? array(), false );
		$rows .= $row( 'Background Keywords', $b['backgroundKeywords'] ?? array(), false );
		foreach ( $features as $f ) {
			$rows .= '<p><strong>' . sf_card_e( $f['name'] ) . '.</strong> ' . sf_card_e( $f['description'] ) . '</p>';
		}
		if ( $rows ) {
			echo '<div class="sf-background-rows">' . $rows . '</div>';
		}
		echo '</div></div>';
	}
	// ---- The Kind card: a thin gunmetal border running in to a 2px line in
	// the card's key color (silver for The Settled Systems, Dreft's green for
	// Isekai), around a dark field with a large quarter-circle cut out of its
	// top left corner and a four-pointed star in the cut-out (the gunmetal
	// stops short of it). The field holds a faded sun at the bottom whose
	// rays light a column of planets from below. The same
	// markup as the creator's KindCard (cards.tsx).

	// A four-pointed star
	function sf_card_kind_star( $cx, $cy, $r ) {
		$s = $r * 0.22;
		return 'M' . $cx . ' ' . ( $cy - $r ) . 'L' . ( $cx + $s ) . ' ' . ( $cy - $s ) . 'L' . ( $cx + $r ) . ' ' . $cy . 'L' . ( $cx + $s ) . ' ' . ( $cy + $s ) . 'L' . $cx . ' ' . ( $cy + $r ) . 'L' . ( $cx - $s ) . ' ' . ( $cy + $s ) . 'L' . ( $cx - $r ) . ' ' . $cy . 'L' . ( $cx - $s ) . ' ' . ( $cy - $s ) . 'Z';
	}

	// The sky: a faded sun at the bottom with rays fanning
	// out from it, and a column of planets above it, each the field's own
	// color, lit along its bottom edge, measured in the field's width (cqw).
	// The same list as the creator's KIND_PLANETS: [its center, as a CSS top;
	// its width, cqw; the crescent's thickness at the bottom, px].
	function sf_card_kind_sky() {
		$html = '<div class="sf-kind-sky"><span class="sf-kind-rays"></span><span class="sf-kind-sun"></span>';
		foreach ( array( array( 'calc(100% - 163cqw)', 112, 4 ), array( 'calc(100% - 90.5cqw)', 13, 2 ), array( 'calc(100% - 62cqw)', 24, 3 ), array( 'calc(100% - 35.5cqw)', 9, 2 ) ) as $p ) {
			$html .= '<span class="sf-kind-planet" style="top:' . $p[0] . ';width:' . $p[1] . 'cqw;--lit:' . $p[2] . 'px"></span>';
		}
		return $html . '</div>';
	}

	// The other card backgrounds, kept as options (sf_card_kind()'s
	// $background, like the creator's KindCard): 'compass', the first one,
	// an eight-point compass over a faint starfield, 'planet', a dark
	// planet's disc under a dense starfield, and 'orbits', a solar system's
	// rings over the faint starfield, the default. 'sun' is above.

	// The compass: eight long diamonds meeting at the middle, each split
	// down its length into a light and a dark face. The four cardinal ones
	// close over the middle, and the four smaller intercardinal ones come out
	// from under them. The rose is turned 15° off north.
	function sf_card_kind_emblem() {
		$c    = 150;
		$p    = function ( $x, $y ) { return sprintf( '%.1f %.1f', $x, $y ); };
		$rose = '';
		foreach ( array( array( 45, 96, 46, 13 ), array( 0, 132, 24, 24 ) ) as $winds ) {
			list( $offset, $len, $at, $width ) = $winds;
			for ( $i = 0; $i < 4; $i++ ) {
				$a     = deg2rad( $offset + $i * 90 - 90 );
				$ux    = cos( $a );
				$uy    = sin( $a );
				$tip   = $p( $c + $ux * $len, $c + $uy * $len );
				$rose .= '<path class="sf-kind-rose-light" d="M' . $c . ' ' . $c . 'L' . $p( $c + $ux * $at + $uy * $width, $c + $uy * $at - $ux * $width ) . 'L' . $tip . 'Z"/>'
					. '<path class="sf-kind-rose-dark" d="M' . $c . ' ' . $c . 'L' . $p( $c + $ux * $at - $uy * $width, $c + $uy * $at + $ux * $width ) . 'L' . $tip . 'Z"/>';
			}
		}
		return '<svg class="sf-kind-emblem" viewBox="0 0 300 300" aria-hidden="true" focusable="false"><circle class="sf-kind-rose-ring" cx="150" cy="150" r="142" stroke-width="4"/><g transform="rotate(15 150 150)">' . $rose . '</g></svg>';
	}

	// The starfields: one fixed sky each (top %, left %, opacity, delay in
	// seconds), shifted by the Kind's id so cards side by side differ: a
	// faint one for the compass, a dense one for the planet. The same lists
	// as the creator's KIND_DOTS_FAINT, KIND_DOTS_DENSE and KIND_TWINKLES.
	function sf_card_kind_stars( $seed, $dense = false ) {
		$dots     = $dense
			? array( array(16.6,36.4,0.43,4.8),array(18.4,96.8,0.28,2.1),array(53.8,78.7,0.34,4.7),array(48.6,55.1,0.88,4.1),array(58.4,25.4,0.31,4.3),array(37.2,78.9,0.39,5.3),array(67.7,67.4,0.59,4.5),array(67.1,47.5,0.42,0.5),array(10.5,99.5,0.34,4.0),array(99.7,72.0,0.48,4.7),array(64.5,41.3,0.25,3.9),array(10.2,5.8,0.48,7.0),array(40.9,19.7,0.4,3.2),array(50.8,56.3,0.42,0.5),array(75.0,34.5,0.35,0.0),array(39.5,97.1,0.4,6.7),array(2.3,59.6,0.37,0.0),array(47.8,2.2,0.84,6.2),array(3.9,20.8,0.39,4.0),array(3.5,11.2,0.53,4.0),array(94.2,19.6,0.77,4.4),array(1.1,52.8,0.66,6.6),array(49.7,37.5,0.29,5.7),array(55.7,81.4,0.25,0.3),array(35.2,77.5,0.62,4.3),array(68.1,5.2,0.29,6.1),array(28.5,33.6,0.25,3.1),array(52.6,90.4,0.26,4.5),array(50.0,91.9,0.34,2.4),array(85.9,90.0,0.35,1.6),array(49.4,3.5,0.45,3.4),array(36.6,97.9,0.36,6.8),array(43.9,17.5,0.88,4.6),array(14.1,70.7,0.32,1.3),array(67.3,32.2,0.45,5.3),array(90.4,5.5,0.44,2.0),array(46.7,37.0,0.69,2.9),array(33.0,56.7,0.27,0.6),array(16.5,32.9,0.65,4.5),array(62.2,62.3,0.74,2.3),array(58.2,46.2,0.32,3.5),array(82.4,95.1,0.25,1.2),array(5.9,41.7,0.28,1.7),array(43.5,15.3,0.3,1.8),array(9.9,84.7,0.38,5.5),array(90.0,63.0,0.4,4.3),array(71.9,39.9,0.47,5.4),array(47.0,39.4,0.23,4.9),array(31.8,27.2,0.74,2.9),array(87.8,43.6,0.45,1.2),array(49.0,92.0,0.26,6.0),array(10.7,17.9,0.84,2.4),array(55.5,11.1,0.33,3.4),array(92.3,8.9,0.22,5.5),array(72.6,61.9,0.38,1.3),array(85.5,55.7,0.38,5.6),array(95.8,0.3,0.26,2.6),array(10.3,2.7,0.28,0.5),array(63.0,20.1,0.36,2.3),array(91.9,17.5,0.38,2.1),array(24.0,66.4,0.38,3.7),array(51.8,42.2,0.9,3.1),array(86.0,50.8,0.47,2.8),array(96.4,41.1,0.41,0.7),array(15.5,23.4,0.23,3.7),array(30.3,64.3,0.53,1.2),array(63.6,37.1,0.81,5.3),array(4.7,23.4,0.23,0.8),array(21.5,92.5,0.2,1.2),array(39.3,98.5,0.82,6.4),array(63.2,96.8,0.34,5.0),array(80.4,19.2,0.8,2.2),array(79.3,37.4,0.41,1.9),array(1.7,24.7,0.49,6.6),array(20.0,50.3,0.21,1.8),array(65.6,98.6,0.24,0.4),array(37.1,53.1,0.35,6.5),array(21.5,21.8,0.45,4.0),array(43.9,28.7,0.35,0.1),array(90.7,67.6,0.23,6.6),array(59.8,96.3,0.32,3.0),array(37.7,67.1,0.36,1.1),array(54.6,90.1,0.4,6.2),array(18.3,69.7,0.71,4.0),array(74.4,43.9,0.4,2.9),array(64.8,73.2,0.8,1.7),array(0.6,62.8,0.23,1.4),array(40.1,39.3,0.41,3.8),array(70.7,28.8,0.77,0.2),array(57.8,90.4,0.32,0.7),array(47.8,84.6,0.48,0.8),array(34.6,16.5,0.88,6.9),array(93.3,31.0,0.26,5.6),array(24.7,58.0,0.68,6.9),array(16.9,93.2,0.32,0.9),array(20.9,60.3,0.23,1.7),array(43.0,55.0,0.26,1.2),array(46.8,33.4,0.85,5.0),array(2.2,6.9,0.25,5.2),array(14.8,18.4,0.25,4.6),array(94.2,46.5,0.28,3.6),array(24.8,52.9,0.28,5.4),array(20.2,80.8,0.58,7.0),array(95.4,73.8,0.38,5.3),array(67.2,92.6,0.9,3.0),array(26.9,44.5,0.41,2.5),array(78.6,94.7,0.25,1.8),array(42.3,19.9,0.22,0.3),array(52.6,17.1,0.37,6.3),array(24.8,93.6,0.22,6.9),array(8.7,95.9,0.56,5.4),array(29.3,98.8,0.74,1.5),array(85.9,13.0,0.79,2.5),array(12.7,39.9,0.27,1.7),array(64.4,18.2,0.26,1.2),array(41.7,13.9,0.42,1.3),array(10.3,47.5,0.42,1.0),array(82.2,28.4,0.73,4.7),array(80.0,61.0,0.31,1.0),array(36.7,16.0,0.32,0.1),array(78.7,37.8,0.32,4.6),array(36.5,12.2,0.21,5.4),array(27.2,45.0,0.41,2.7),array(70.5,95.1,0.32,4.8),array(66.7,67.5,0.42,6.8),array(86.4,41.8,0.33,3.6),array(48.7,69.8,0.7,1.5),array(25.4,43.8,0.29,3.7),array(40.9,51.8,0.3,6.4),array(99.9,79.5,0.42,1.3),array(16.6,83.0,0.28,1.3),array(78.2,91.7,0.75,4.7),array(91.5,59.2,0.21,2.0),array(32.3,85.6,0.23,5.7),array(48.5,19.5,0.25,1.2),array(30.5,99.8,0.3,5.8),array(18.3,16.6,0.45,4.0),array(12.2,1.5,0.27,3.8),array(71.8,67.8,0.22,5.0),array(53.2,94.3,0.44,4.3),array(22.6,34.8,0.67,4.0),array(89.9,12.7,0.38,6.1),array(45.4,14.6,0.42,1.2),array(32.5,1.0,0.22,1.0),array(27.1,39.2,0.41,1.5),array(44.7,83.8,0.22,5.7),array(57.2,66.1,0.87,6.1),array(98.4,5.9,0.28,6.9),array(82.2,23.5,0.22,6.5),array(54.8,97.7,0.27,5.4),array(1.4,56.0,0.81,1.4),array(11.2,19.5,0.41,4.5),array(10.2,18.0,0.42,3.9),array(21.5,2.8,0.26,4.5),array(85.3,26.8,0.3,4.7),array(0.3,88.4,0.62,3.4),array(14.4,44.3,0.32,1.5),array(77.9,38.8,0.6,5.9),array(20.4,57.8,0.3,4.2),array(12.5,40.5,0.31,0.7) )
			: array( array(32.4,15.1,0.54,0.5),array(53.6,36.6,0.28,3.6),array(3.7,43.4,0.28,0.6),array(42.5,82.7,0.31,1.6),array(62.7,94.8,0.51,2.8),array(97.6,4.7,0.64,2.0),array(14.4,11.8,0.39,5.7),array(18.1,58.2,0.54,2.6),array(54.8,6.3,0.28,1.4),array(68.0,42.8,0.39,4.1),array(45.3,30.0,0.61,4.9),array(24.4,57.4,0.49,6.1),array(72.9,28.8,0.69,0.8),array(41.8,75.7,0.32,3.4),array(3.9,66.8,0.59,4.0),array(87.5,31.4,0.56,4.2),array(58.0,45.6,0.63,6.6),array(47.4,66.4,0.28,4.9),array(64.7,99.3,0.62,2.0),array(38.6,66.9,0.26,3.2),array(16.8,11.7,0.28,5.4),array(12.9,24.8,0.43,6.1),array(8.1,44.9,0.5,6.2),array(81.9,86.4,0.38,2.9),array(35.9,88.4,0.68,1.1),array(17.6,23.2,0.36,3.4),array(58.9,26.3,0.25,2.9),array(36.9,56.6,0.68,4.8),array(51.5,61.8,0.55,0.4),array(90.0,78.0,0.64,5.6),array(39.2,39.9,0.3,4.4),array(6.2,6.7,0.34,1.1),array(34.0,5.3,0.25,1.1),array(10.1,36.4,0.26,6.1),array(61.4,14.9,0.36,2.4),array(36.4,12.3,0.63,7.0),array(46.6,48.4,0.29,0.7),array(34.3,26.5,0.62,1.1),array(2.3,95.1,0.49,1.0),array(54.3,2.7,0.49,6.8),array(86.3,69.6,0.37,2.6),array(16.7,77.2,0.49,5.5),array(33.0,22.3,0.62,6.9),array(85.3,80.6,0.62,5.2),array(22.7,51.8,0.41,0.2),array(2.8,27.9,0.37,4.8) );
		$twinkles = array( array(88.3,45.6,11.2),array(91.0,88.2,4.4),array(26.5,27.1,2.4),array(25.2,60.4,10.8) );
		$sum = 0;
		foreach ( str_split( $seed ) as $ch ) {
			$sum += ord( $ch );
		}
		$dy    = ( $sum * 13 ) % 100;
		$dx    = ( $sum * 29 ) % 100;
		$wrap  = function ( $v, $d ) { return sprintf( '%.1f', fmod( $v + $d, 100 ) ); };
		$inner = function ( $v, $d ) { return sprintf( '%.1f', fmod( $v - 8 + $d, 84 ) + 8 ); };
		$html  = '<div class="sf-kind-stars">';
		foreach ( $dots as $i => $x ) {
			$html .= '<span class="sf-kind-dot' . ( 0 === $i % ( $dense ? 7 : 5 ) ? ' is-big' : '' ) . '" style="top:' . $wrap( $x[0], $dy ) . '%;left:' . $wrap( $x[1], $dx ) . '%;opacity:' . $x[2] . ';animation-delay:' . $x[3] . 's"></span>';
		}
		foreach ( $twinkles as $x ) {
			$html .= '<span class="sf-kind-twinkle" style="top:' . $inner( $x[0], $dy ) . '%;left:' . $inner( $x[1], $dx ) . '%;animation-delay:' . $x[2] . 's"></span>';
		}
		return $html . '</div>';
	}

	// 'orbits': an abstract solar system over the faint starfield, its sun in
	// the middle of the field, evenly spaced rings running out past the
	// card's edges and a few planets riding them. One SVG twice the field's
	// width (cqw): 100 units are the field's width. The same numbers as the
	// creator's KIND_ORBIT_GAP, KIND_ORBIT_RINGS and KIND_ORBIT_PLANETS (ring,
	// angle in degrees from the right, radius). Each planet circles the sun
	// in a year of 24s × ring^1.5.
	function sf_card_kind_orbits() {
		$gap = 9;
		$svg = '<svg class="sf-kind-orbits" viewBox="0 0 200 200" aria-hidden="true" focusable="false">';
		for ( $i = 1; $i <= 11; $i++ ) {
			$svg .= '<circle class="sf-kind-orbit" cx="100" cy="100" r="' . ( $gap * $i ) . '"/>';
		}
		$svg .= '<circle class="sf-kind-orbit-sun" cx="100" cy="100" r="3"/>';
		foreach ( array( array( 2, 200, 1.1 ), array( 3, 110, 1.3 ), array( 5, 300, 1.6 ), array( 6, 160, 1.2 ), array( 8, 35, 1.8 ), array( 10, 220, 1.4 ) ) as $p ) {
			$a    = deg2rad( $p[1] );
			$d    = $gap * $p[0];
			$svg .= '<g class="sf-kind-orbit-turn" style="animation-duration:' . round( 24 * pow( $p[0], 1.5 ) ) . 's"><circle class="sf-kind-orbit-planet" cx="' . sprintf( '%.2f', 100 + $d * cos( $a ) ) . '" cy="' . sprintf( '%.2f', 100 - $d * sin( $a ) ) . '" r="' . $p[2] . '"/></g>';
		}
		return $svg . '</svg>';
	}

	/**
	 * A Kind's card: its name and summary, each focus stat's bonus and
	 * maximum, the Traits every character of the Kind holds, its features,
	 * a link to its lore entry, then "Kind ✦" and its setting at the foot.
	 * Takes a Kind as the creator exports it (sample-character.json,
	 * dreftian-backgrounds.json), and what's drawn behind the content:
	 * 'orbits' (the solar system, the default), 'sun', 'compass' or
	 * 'planet'.
	 */
	function sf_card_kind( $b, $background = 'orbits' ) {
		static $n = 0;
		$n++;
		$plane    = strtolower( $b['plane'] );
		$isekai   = 'isekai' === $plane;
		$key      = $isekai ? 'green' : 'silver';
		$gradient = 'sf-kind-' . $key . '-' . $n;
		$stops    = array(
			'silver' => array( '#949798', '#949798', '#626466', '#626466', '#626466' ),
			'green'  => array( '#47b767', '#47b767', '#47b767', '#47b767', '#47b767' ),
		);

		echo '<article class="sf-kind-card sf-kind-card--bg-' . $background . ( $isekai ? ' sf-kind-card--dreft' : '' ) . '"><div class="sf-kind-panel"><span class="sf-kind-plate" aria-hidden="true"></span>';
		echo '<svg class="sf-kind-defs" aria-hidden="true" focusable="false"><defs><linearGradient id="' . $gradient . '" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">';
		foreach ( array( 0, 0.35, 0.6, 0.85, 1 ) as $i => $offset ) {
			echo '<stop offset="' . $offset . '" stop-color="' . $stops[ $key ][ $i ] . '"/>';
		}
		echo '</linearGradient></defs></svg>';
		$backgrounds = array(
			'sun'     => sf_card_kind_sky(),
			'compass' => sf_card_kind_stars( $b['id'] ?? $b['name'] ) . sf_card_kind_emblem(),
			'planet'  => sf_card_kind_stars( $b['id'] ?? $b['name'], true ) . '<span class="sf-kind-globe"></span>',
			'orbits'  => sf_card_kind_stars( $b['id'] ?? $b['name'] ) . sf_card_kind_orbits(),
		);
		echo '<div class="sf-kind-field" aria-hidden="true">' . ( $backgrounds[ $background ] ?? $backgrounds['orbits'] ) . '</div>';
		// One corner piece, drawn top left and turned by CSS for the others:
		// at the top left the line follows the field's cut-out with the star
		// in it, and at the other three it rounds off
		foreach ( array( 'tl', 'tr', 'bl', 'br' ) as $where ) {
			$star = 'tl' === $where;
			echo '<svg class="sf-kind-corner sf-kind-corner--' . $where . '" viewBox="0 0 100 100" aria-hidden="true" focusable="false">'
				. '<path fill="none" stroke="currentColor" stroke-width="2" d="' . ( $star ? 'M100 6H30A24 24 0 0 1 6 30V100' : 'M100 6H23A17 17 0 0 0 6 23V100' ) . '"/>'
				. ( $star ? '<path fill="url(#' . $gradient . ')" d="' . sf_card_kind_star( 13, 13, 7.5 ) . '"/>' : '' )
				. '</svg>';
		}
		echo '<span class="sf-kind-edge sf-kind-edge--top"></span><span class="sf-kind-edge sf-kind-edge--right"></span><span class="sf-kind-edge sf-kind-edge--bottom"></span><span class="sf-kind-edge sf-kind-edge--left"></span>';

		echo '<div class="sf-kind-content">';
		echo '<p class="sf-kind-setting">Kind<span aria-hidden="true">✦</span>' . ( $isekai ? 'Isekai' : 'The Settled Systems' ) . '</p>';
		echo '<h3 class="sf-kind-name">' . sf_card_e( $b['name'] ) . '</h3>';
		echo '<p class="sf-kind-summary">' . sf_card_e( $b['summary'] ) . '</p>';
		if ( ! empty( $b['stats'] ) ) {
			echo '<div class="sf-kind-stats">';
			foreach ( array( 'Physical' => array( 'endurance', 'power', 'grace' ), 'Social' => array( 'empathy', 'persuasion', 'demeanor' ), 'Mental' => array( 'logic', 'intuition', 'memory' ) ) as $group => $stats ) {
				echo '<div><div class="sf-kind-label sf-kind-label--' . strtolower( $group ) . '">' . $group . '</div>';
				foreach ( $stats as $s ) {
					$x = $b['stats'][ $s ] ?? array( 'bonus' => 0, 'max' => 0 );
					echo '<div class="sf-kind-stat"><abbr title="' . ucfirst( $s ) . '">' . ucfirst( substr( $s, 0, 3 ) ) . '</abbr><span class="sf-kind-num">+' . (int) $x['bonus'] . '<span>/' . (int) $x['max'] . '</span></span></div>';
				}
				echo '</div>';
			}
			echo '</div>';
		}
		if ( ! empty( $b['grants'] ) ) {
			echo '<div class="sf-kind-grants"><span class="sf-kind-label">Grants</span>';
			foreach ( $b['grants'] as $g ) {
				echo '<span class="sf-chip sf-chip--accent">' . sf_card_e( $g ) . '</span>';
			}
			echo '</div>';
		}
		if ( ! empty( $b['features'] ) ) {
			echo '<ul class="sf-kind-features">';
			foreach ( $b['features'] as $f ) {
				echo '<li><strong>' . sf_card_e( $f['name'] ) . '.</strong> ' . sf_card_e( $f['description'] ) . '</li>';
			}
			echo '</ul>';
		}
		echo '</div></div></article>';
	}
}
