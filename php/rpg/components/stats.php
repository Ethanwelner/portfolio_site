<?php
// The stat block for Strange Frontiers: each core stat (Physical, Social,
// Mental, and Magic for a character who can level it) with its badge and
// ruled title, then each focus stat's name and number over its bar of 20
// slots. One component, so the stats can't drift between the places that
// draw them.
//
// Player Tools' sheet is the reference. This draws the same markup as the
// creator's StatBlock (strange-frontiers-character-creator
// src/app/components/stats.tsx), styled by the same stylesheet:
// css/sf-stats.css here is a copy of the creator's src/app/stats.css.
// Change the block in the creator first, then bring the markup here and copy
// the stylesheet over.
//
// The block takes options that say what it does where it's drawn, under the
// same names as the creator's:
//
//   max   true: each stat's maximum beside its number ("max 15"), as on the
//         creator's Sheet: the sample sheet
//
// Without it, it's the plain block, as on Player Tools' sheet: the example
// stats. The creator's edit option (the − and + on each stat, for its Stats
// step and Player Tools' level up) doesn't exist here; the site's pages are
// static.
//
// A bar's slots are circles on odd points and squares on even (diamonds for
// Magic, which has no focus stats): bonus points first (the Kind's and the
// packages', a dark shade of the group's color), then the player's (the full
// color), then open slots up to the max, then faded slots past it. A point
// past the max is red.
//
// Each group:
//   array(
//     'group' => 'physical',
//     'core'  => 3,
//     'stats' => array(
//       array( 'name' => 'Endurance', 'value' => 5, 'bonus' => 1, 'max' => 15 ),
//       ...
//     ),
//   )
// Magic takes 'core' and an optional 'bonus' (a package's points) instead
// of 'stats'.
require_once dirname( __DIR__ ) . '/core-stat-icons.php';

if ( ! function_exists( 'sf_stat_block' ) ) {
	define( 'SF_STAT_SLOTS', 20 );
	define( 'SF_MP_PER_MAGIC', 3 );

	function sf_stat_e( $text ) {
		return htmlspecialchars( (string) $text, ENT_QUOTES, 'UTF-8' );
	}

	// A focus stat's bar
	function sf_stat_bar( $bonus, $value, $max ) {
		$html = '<div class="sf-stat-line" aria-hidden="true">';
		for ( $point = 1; $point <= SF_STAT_SLOTS; $point++ ) {
			if ( $point <= $value ) {
				$fill = $point > $max ? 'over' : ( $point <= $bonus ? 'bonus' : 'filled' );
			} else {
				$fill = $point <= $max ? 'empty' : 'unavailable';
			}
			$html .= '<span class="sf-stat-slot sf-stat-slot--' . ( $point % 2 ? 'dot' : 'square' ) . ' is-' . $fill . '"></span>';
		}
		return $html . '</div>';
	}

	// Magic's bar: a diamond per point, any bonus first
	function sf_stat_core_bar( $bonus, $value ) {
		$html = '<div class="sf-stat-line" aria-hidden="true">';
		for ( $n = 0; $n < SF_STAT_SLOTS; $n++ ) {
			$fill  = $n < $bonus ? 'bonus' : ( $n < $value ? 'filled' : 'empty' );
			$html .= '<span class="sf-stat-slot sf-stat-slot--diamond is-' . $fill . '"></span>';
		}
		return $html . '</div>';
	}

	function sf_stat_block( $groups, $options = array() ) {
		$max = ! empty( $options['max'] );
		echo '<div class="sf-stats">';
		foreach ( $groups as $g ) {
			$group = strtolower( $g['group'] );
			echo '<div class="sf-stat-group sf-stat-group--' . sf_stat_e( $group ) . '">';
			echo '<div class="sf-stat-group-head"><div class="sf-stat-core"><span class="sf-stat-badge" title="Core Stat">';
			sf_core_stat_icon( $group, 'sf-stat-badge-icon' );
			echo '</span></div><h4 class="sf-stat-group-title">' . sf_stat_e( ucfirst( $group ) ) . ' - ' . (int) $g['core'] . '</h4></div>';
			if ( empty( $g['stats'] ) ) {
				// Magic: a diamond per point
				echo '<div class="sf-stat"><div class="sf-stat-label"><strong>Each point in ' . sf_stat_e( ucfirst( $group ) ) . ' adds ' . SF_MP_PER_MAGIC . ' MP (Mana Points)</strong></div>';
				echo sf_stat_core_bar( (int) ( $g['bonus'] ?? 0 ), (int) $g['core'] ) . '</div>';
			}
			foreach ( $g['stats'] ?? array() as $s ) {
				echo '<div class="sf-stat"><div class="sf-stat-label"><strong>' . sf_stat_e( $s['name'] ) . ' - ' . (int) $s['value'] . '</strong>';
				if ( $max ) {
					echo '<span class="sf-stat-max"> max ' . (int) $s['max'] . '</span>';
				}
				echo '</div>' . sf_stat_bar( (int) $s['bonus'], (int) $s['value'], (int) $s['max'] ) . '</div>';
			}
			echo '</div>';
		}
		echo '</div>';
	}
}
