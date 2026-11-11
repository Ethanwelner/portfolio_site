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
//   sf_card_background() Kinds, Origins, Professions and Pasts
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
	 * rank       Optional. Shown after the name, like "Local History (1)".
	 * plane      Optional. 'isekai' for Dreft's green and Isekai's mark,
	 *            'earth' for The Settled Systems' mark. (region 'dreft' works
	 *            too.)
	 * chips      Optional. Chips in the bar, like where a sheet's Trait was
	 *            chosen from (Origin, Profession, Past).
	 * flags      Optional. Muted chips after the category: Ranked, Mastery,
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
			// The category (a Language is a Knowledge), its flags and magic
			// types, then where it came from, on one line
			$title = 'language' === $kind ? 'Knowledge' : ucfirst( $kind );
			$tags  = '<span class="sf-chip">' . $title . '</span>';
			foreach ( $t['flags'] ?? array() as $flag ) {
				$tags .= '<span class="sf-chip sf-chip--muted">' . sf_card_e( $flag ) . '</span>';
			}
			foreach ( $t['types'] ?? array() as $type ) {
				$tags .= '<span class="sf-chip sf-chip--muted">(' . sf_card_e( $type ) . ')</span>';
			}
			if ( ! empty( $t['from'] ) ) {
				$tags .= '<span class="sf-card-note">From ' . sf_card_e( $t['from'] ) . '</span>';
			}
			$body .= '<div class="sf-card-tags">' . $tags . '</div>';
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
		if ( ! empty( $t['needs'] ) ) {
			$body .= '<p class="sf-card-note">Needs ' . sf_card_e( $t['needs'] ) . '</p>';
		}

		$name = sf_card_setting_icon( $plane ) . sf_card_e( $t['name'] ) . ( isset( $t['rank'] ) ? ' (' . (int) $t['rank'] . ')' : '' );
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
	 * count        Optional. How many, in a circle on its left edge.
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
	 *           'Endurance', 'value' => 5, 'bonus' => 0, 'max' => 20 ), ... ) )
	 * hp        Optional. Its HP now, when it's taken damage; full without it.
	 * attacks   Optional. Item cards' arrays, as sf_card_item() takes them.
	 * traits    Optional. Trait cards' arrays, as sf_card_trait() takes them.
	 * Everything else is sf_card_item()'s; category defaults to Chassis.
	 */
	function sf_card_chassis( $c ) {
		$physical = $c['physical'];
		$attacks  = $c['attacks'] ?? array();
		$traits   = $c['traits'] ?? array();
		$max_hp   = 10 + array_sum( array_column( $physical['stats'], 'value' ) );
		$hp       = array( $c['hp'] ?? $max_hp, $max_hp );
		unset( $c['physical'], $c['attacks'], $c['traits'] );
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
	 * backgroundList, lore, and a Kind's stats as bonus / maximum.
	 * $bonusNote is added to each Bonus, like Edwin's ", placed in Grace".
	 */
	function sf_card_background( $b, $bonusNote = '' ) {
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

		if ( 'Kind' === $b['slot'] ) {
			// Each stat's bonus and maximum, grouped Physical / Social / Mental
			if ( ! empty( $b['stats'] ) ) {
				echo '<div class="stat-ranges">';
				foreach ( array( 'Physical' => array( 'endurance', 'power', 'grace' ), 'Social' => array( 'empathy', 'persuasion', 'demeanor' ), 'Mental' => array( 'logic', 'intuition', 'memory' ) ) as $group => $stats ) {
					echo '<div><div class="stat-ranges-group">' . $group . '</div>';
					foreach ( $stats as $s ) {
						$x = $b['stats'][ $s ];
						echo '<div class="stat-range"><span>' . ucfirst( $s ) . '</span><span class="num">+' . (int) $x['bonus'] . '<span class="muted">/' . (int) $x['max'] . '</span></span></div>';
					}
					echo '</div>';
				}
				echo '</div>';
			}
			$rows = $row( 'Grants', $b['grants'] ?? array(), true );
			if ( $rows ) {
				echo '<div class="sf-background-rows">' . $rows . '</div>';
			}
			if ( $features ) {
				echo '<ul class="sf-card-features">';
				foreach ( $features as $f ) {
					echo '<li><strong>' . sf_card_e( $f['name'] ) . '.</strong> ' . sf_card_e( $f['description'] ) . '</li>';
				}
				echo '</ul>';
			}
		} else {
			$rows  = $row( 'Bonus', array_map( function ( $x ) use ( $bonusNote ) { return $x . $bonusNote; }, $b['bonus'] ?? array() ), true );
			$rows .= $row( 'Grants', $b['grants'] ?? array(), true );
			$rows .= $row( 'Choose', $b['choices'] ?? array(), false );
			$rows .= $row( 'Background list', $b['backgroundList'] ?? array(), false );
			foreach ( $features as $f ) {
				$rows .= '<p><strong>' . sf_card_e( $f['name'] ) . '.</strong> ' . sf_card_e( $f['description'] ) . '</p>';
			}
			if ( $rows ) {
				echo '<div class="sf-background-rows">' . $rows . '</div>';
			}
		}

		// A Kind's lore entry shares the first word of its id (tatot-orcoid is Tatot)
		$lore = $b['lore'] ?? '';
		if ( ! $lore && 'Kind' === $b['slot'] && function_exists( 'sf_lore_titles' ) && isset( sf_lore_titles()[ strtok( $b['id'], '-' ) ] ) ) {
			$lore = strtok( $b['id'], '-' );
		}
		if ( $lore && function_exists( 'sf_lore_link' ) ) {
			echo '<p class="sf-card-note">More in the lore: ' . sf_lore_link( $lore, sf_lore_titles()[ $lore ] ?? $lore ) . '</p>';
		}
		echo '</div></div>';
	}
}
