<?php
// Ornate card (a test): a Kind's Background card in a gilded frame, a
// thin gunmetal border running in to a line in the card's key color
// (silver for The Settled Systems, green for Isekai), a star in each
// corner and a compass behind the text. Only the
// component library (rpg-components.php) draws it for now; styled by
// css/sf-ornate-card.css. It takes a background as sf_card_background()
// does.
require_once __DIR__ . '/cards.php';

if ( ! function_exists( 'sf_card_ornate' ) ) {
	// The key color's gradient for the frame's strokes and stars, written
	// once per page: silver for The Settled Systems, Dreft's green for Isekai
	function sf_card_ornate_defs() {
		static $done = false;
		if ( $done ) {
			return '';
		}
		$done  = true;
		$stops = array(
			'silver' => array( '#ffffff', '#c3c8cf', '#7b8189', '#e3e6ea', '#9aa0a8' ),
			'green'  => array( '#d4f2e0', '#6fb38d', '#2c5a44', '#a6dcbc', '#4f8f6d' ),
		);
		$html = '<svg class="sf-ornate-defs" aria-hidden="true" focusable="false"><defs>';
		foreach ( $stops as $key => $c ) {
			$html .= '<linearGradient id="sf-ornate-' . $key . '" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">'
				. '<stop offset="0" stop-color="' . $c[0] . '"/><stop offset=".35" stop-color="' . $c[1] . '"/><stop offset=".6" stop-color="' . $c[2] . '"/><stop offset=".85" stop-color="' . $c[3] . '"/><stop offset="1" stop-color="' . $c[4] . '"/>'
				. '</linearGradient>';
		}
		return $html . '</defs></svg>';
	}

	// A four-pointed star
	function sf_card_ornate_star( $cx, $cy, $r ) {
		$s = $r * 0.22;
		return '<path d="M' . $cx . ' ' . ( $cy - $r ) . 'L' . ( $cx + $s ) . ' ' . ( $cy - $s ) . 'L' . ( $cx + $r ) . ' ' . $cy . 'L' . ( $cx + $s ) . ' ' . ( $cy + $s ) . 'L' . $cx . ' ' . ( $cy + $r ) . 'L' . ( $cx - $s ) . ' ' . ( $cy + $s ) . 'L' . ( $cx - $r ) . ' ' . $cy . 'L' . ( $cx - $s ) . ' ' . ( $cy - $s ) . 'Z"/>';
	}

	// One corner of the frame, drawn top left; CSS turns it for the others.
	// The key-colored line runs 10px in from the card's edge. At the top left
	// it steps in around a star on an 18px arc, the star halfway between the
	// card's rounded corner and the arc; the other three corners are simply
	// rounded.
	function sf_card_ornate_corner( $where, $key ) {
		$star = 'tl' === $where;
		return '<svg class="sf-ornate-corner sf-ornate-corner--' . $where . '" viewBox="0 0 100 100" aria-hidden="true" focusable="false">'
			. '<path fill="none" stroke="url(#sf-ornate-' . $key . ')" stroke-width="2" d="' . ( $star ? 'M100 10H28A18 18 0 0 1 10 28V100' : 'M100 10H16A6 6 0 0 0 10 16V100' ) . '"/>'
			. ( $star ? '<g fill="url(#sf-ornate-' . $key . ')">' . sf_card_ornate_star( 13.5, 13.5, 8 ) . '</g>' : '' )
			. '</svg>';
	}

	// The compass behind the text: eight long diamonds meeting at the
	// middle, each split down its length into a light and a dark face. The
	// four cardinal ones are as wide as they are far from the middle at
	// their widest, so they close over the middle, and the four smaller
	// intercardinal ones come out from under them. The whole rose is turned
	// 15° off north.
	function sf_card_ornate_emblem() {
		$c       = 150;
		$diamond = function ( $deg, $len, $at, $width ) use ( $c ) {
			$a  = deg2rad( $deg - 90 );
			$ux = cos( $a );
			$uy = sin( $a );
			$p  = function ( $x, $y ) { return sprintf( '%.1f %.1f', $x, $y ); };
			$tip   = $p( $c + $ux * $len, $c + $uy * $len );
			$left  = $p( $c + $ux * $at + $uy * $width, $c + $uy * $at - $ux * $width );
			$right = $p( $c + $ux * $at - $uy * $width, $c + $uy * $at + $ux * $width );
			return '<path class="sf-ornate-rose-light" d="M' . $c . ' ' . $c . 'L' . $left . 'L' . $tip . 'Z"/>'
				. '<path class="sf-ornate-rose-dark" d="M' . $c . ' ' . $c . 'L' . $right . 'L' . $tip . 'Z"/>';
		};
		$rose = '';
		foreach ( array( array( 45, 96, 46, 13 ), array( 0, 132, 24, 24 ) ) as $winds ) {
			list( $offset, $len, $at, $width ) = $winds;
			for ( $i = 0; $i < 4; $i++ ) {
				$rose .= $diamond( $offset + $i * 90, $len, $at, $width );
			}
		}
		return '<svg class="sf-ornate-emblem" viewBox="0 0 300 300" aria-hidden="true" focusable="false">'
			. '<circle class="sf-ornate-rose-ring" cx="150" cy="150" r="142" stroke-width="8"/><g transform="rotate(15 150 150)">' . $rose . '</g></svg>';
	}

	// A faint starfield for the field, like the site's night sky: small dots
	// that pulse slowly and a few four-pointed twinkles. Placed from the
	// card's name, so a card's sky stays the same between visits.
	function sf_card_ornate_stars( $seed ) {
		mt_srand( crc32( $seed ) );
		$html = '<div class="sf-ornate-stars">';
		for ( $i = 0; $i < 46; $i++ ) {
			$html .= sprintf(
				'<span class="sf-ornate-dot%s" style="top:%.1f%%;left:%.1f%%;opacity:%.2f;animation-delay:%.1fs"></span>',
				0 === $i % 5 ? ' is-big' : '',
				mt_rand( 0, 1000 ) / 10,
				mt_rand( 0, 1000 ) / 10,
				mt_rand( 25, 70 ) / 100,
				mt_rand( 0, 70 ) / 10
			);
		}
		for ( $i = 0; $i < 4; $i++ ) {
			$html .= sprintf(
				'<span class="sf-ornate-twinkle" style="top:%.1f%%;left:%.1f%%;animation-delay:%.1fs"></span>',
				mt_rand( 80, 920 ) / 10,
				mt_rand( 80, 920 ) / 10,
				mt_rand( 0, 120 ) / 10
			);
		}
		mt_srand();
		return $html . '</div>';
	}

	/**
	 * An ornate Kind card: the frame, its name and summary, each stat's
	 * bonus and maximum, the Traits it grants and its features, then its
	 * slot and plane at the foot.
	 */
	function sf_card_ornate( $b ) {
		$plane = strtolower( $b['plane'] );
		$key   = 'isekai' === $plane ? 'green' : 'silver';
		echo sf_card_ornate_defs();
		echo '<article class="sf-ornate-card' . ( 'isekai' === $plane ? ' sf-ornate-card--dreft' : '' ) . '"><div class="sf-ornate-panel">';
		echo '<div class="sf-ornate-field" aria-hidden="true">' . sf_card_ornate_stars( $b['name'] ) . sf_card_ornate_emblem() . '</div>';
		foreach ( array( 'tl', 'tr', 'bl', 'br' ) as $where ) {
			echo sf_card_ornate_corner( $where, $key );
		}
		echo '<span class="sf-ornate-edge sf-ornate-edge--top"></span><span class="sf-ornate-edge sf-ornate-edge--right"></span><span class="sf-ornate-edge sf-ornate-edge--bottom"></span><span class="sf-ornate-edge sf-ornate-edge--left"></span>';

		echo '<div class="sf-ornate-content">';
		echo '<h3 class="sf-ornate-name">' . sf_card_e( $b['name'] ) . '</h3>';
		echo '<div class="sf-ornate-rule" aria-hidden="true"><svg viewBox="0 0 20 20"><g fill="url(#sf-ornate-' . $key . ')">' . sf_card_ornate_star( 10, 10, 9 ) . '</g></svg></div>';
		echo '<p class="sf-ornate-summary">' . sf_card_e( $b['summary'] ) . '</p>';

		if ( ! empty( $b['stats'] ) ) {
			echo '<div class="sf-ornate-stats">';
			foreach ( array( 'Physical' => array( 'endurance', 'power', 'grace' ), 'Social' => array( 'empathy', 'persuasion', 'demeanor' ), 'Mental' => array( 'logic', 'intuition', 'memory' ) ) as $group => $stats ) {
				echo '<div><div class="sf-ornate-label">' . $group . '</div>';
				foreach ( $stats as $s ) {
					$x = $b['stats'][ $s ];
					echo '<div class="sf-ornate-stat"><span>' . ucfirst( $s ) . '</span><span class="sf-ornate-num">+' . (int) $x['bonus'] . '<span>/' . (int) $x['max'] . '</span></span></div>';
				}
				echo '</div>';
			}
			echo '</div>';
		}
		if ( ! empty( $b['grants'] ) ) {
			echo '<div class="sf-ornate-grants"><span class="sf-ornate-label">Grants</span>';
			foreach ( $b['grants'] as $g ) {
				echo '<span class="sf-ornate-chip">' . sf_card_e( $g ) . '</span>';
			}
			echo '</div>';
		}
		if ( ! empty( $b['features'] ) ) {
			echo '<ul class="sf-ornate-features">';
			foreach ( $b['features'] as $f ) {
				echo '<li><strong>' . sf_card_e( $f['name'] ) . '.</strong> ' . sf_card_e( $f['description'] ) . '</li>';
			}
			echo '</ul>';
		}
		echo '<p class="sf-ornate-foot">' . sf_card_e( $b['slot'] ) . '<span aria-hidden="true">✦</span>' . ( 'isekai' === $plane ? 'Isekai' : 'The Settled Systems' ) . '</p>';
		echo '</div></div></article>';
	}
}
