<?php
// Ornate card (a test): a Kind's Background card in a gilded frame, a
// gunmetal border running in to a gold filigree line, a star in each
// corner and a compass behind the text. Only the
// component library (rpg-components.php) draws it for now; styled by
// css/sf-ornate-card.css. It takes a background as sf_card_background()
// does.
require_once __DIR__ . '/cards.php';

if ( ! function_exists( 'sf_card_ornate' ) ) {
	// The gold gradient the frame's strokes and stars use, written once per page
	function sf_card_ornate_defs() {
		static $done = false;
		if ( $done ) {
			return '';
		}
		$done = true;
		return '<svg class="sf-ornate-defs" aria-hidden="true" focusable="false"><defs>'
			. '<linearGradient id="sf-ornate-gold" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">'
			. '<stop offset="0" stop-color="#fbeeb8"/><stop offset=".35" stop-color="#d8ad4c"/><stop offset=".6" stop-color="#8f6a24"/><stop offset=".85" stop-color="#e8c977"/><stop offset="1" stop-color="#b08532"/>'
			. '</linearGradient></defs></svg>';
	}

	// A four-pointed star with a smaller one turned 45° behind it
	function sf_card_ornate_star( $cx, $cy, $r ) {
		$s = $r * 0.22;
		$d = $r * 0.55;
		$big   = "M$cx " . ( $cy - $r ) . " L" . ( $cx + $s ) . ' ' . ( $cy - $s ) . " L" . ( $cx + $r ) . " $cy L" . ( $cx + $s ) . ' ' . ( $cy + $s ) . " L$cx " . ( $cy + $r ) . " L" . ( $cx - $s ) . ' ' . ( $cy + $s ) . " L" . ( $cx - $r ) . " $cy L" . ( $cx - $s ) . ' ' . ( $cy - $s ) . 'Z';
		$small = 'M' . ( $cx - $d ) . ' ' . ( $cy - $d ) . " L$cx " . ( $cy - $s ) . ' L' . ( $cx + $d ) . ' ' . ( $cy - $d ) . " L" . ( $cx + $s ) . " $cy L" . ( $cx + $d ) . ' ' . ( $cy + $d ) . " L$cx " . ( $cy + $s ) . ' L' . ( $cx - $d ) . ' ' . ( $cy + $d ) . " L" . ( $cx - $s ) . " $cy Z";
		return '<path class="sf-ornate-star-back" d="' . $small . '"/><path d="' . $big . '"/>';
	}

	// One corner of the frame, drawn top left; CSS turns it for the others.
	// The gold line steps in around the corner's star, and a curl grows from
	// each side of the step.
	function sf_card_ornate_corner( $where ) {
		return '<svg class="sf-ornate-corner sf-ornate-corner--' . $where . '" viewBox="0 0 100 100" aria-hidden="true" focusable="false">'
			. '<g fill="none" stroke="url(#sf-ornate-gold)" stroke-linecap="round">'
			. '<path stroke-width="2" d="M100 18H46A28 28 0 0 1 18 46V100"/>'
			. '<path stroke-width="1" d="M100 25H58C52 25 50 30 54 33C57 35 61 32 59 29"/>'
			. '<path stroke-width="1" d="M25 100V58C25 52 30 50 33 54C35 57 32 61 29 59"/>'
			. '<path stroke-width="1.25" d="M37.8 37.8C46 46 58 44 62 37C64.5 32.5 60 29.5 57 32.5"/>'
			. '<path stroke-width="1.25" d="M37.8 37.8C46 46 44 58 37 62C32.5 64.5 29.5 60 32.5 57"/>'
			. '</g><g fill="url(#sf-ornate-gold)">' . sf_card_ornate_star( 17, 17, 13 ) . '<circle cx="37.8" cy="37.8" r="2.2"/></g></svg>';
	}

	// The compass behind the text: eight long diamonds meeting at the
	// middle, each split down its length into a light and a dark face. The
	// four smaller intercardinal ones lie under the four cardinal ones.
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
		foreach ( array( array( 45, 92, 20, 12 ), array( 0, 132, 28, 17 ) ) as $winds ) {
			list( $offset, $len, $at, $width ) = $winds;
			for ( $i = 0; $i < 4; $i++ ) {
				$rose .= $diamond( $offset + $i * 90, $len, $at, $width );
			}
		}
		return '<svg class="sf-ornate-emblem" viewBox="0 0 300 300" aria-hidden="true" focusable="false">'
			. '<circle class="sf-ornate-rose-ring" cx="150" cy="150" r="142" stroke-width="8"/>' . $rose . '</svg>';
	}

	/**
	 * An ornate Kind card: the frame, its name and summary, each stat's
	 * bonus and maximum, the Traits it grants and its features, then its
	 * slot and plane at the foot.
	 */
	function sf_card_ornate( $b ) {
		$plane = strtolower( $b['plane'] );
		echo sf_card_ornate_defs();
		echo '<article class="sf-ornate-card' . ( 'isekai' === $plane ? ' sf-ornate-card--dreft' : '' ) . '"><div class="sf-ornate-panel">';
		echo '<div class="sf-ornate-field" aria-hidden="true">' . sf_card_ornate_emblem() . '</div>';
		foreach ( array( 'tl', 'tr', 'bl', 'br' ) as $where ) {
			echo sf_card_ornate_corner( $where );
		}
		echo '<span class="sf-ornate-edge sf-ornate-edge--top"></span><span class="sf-ornate-edge sf-ornate-edge--right"></span><span class="sf-ornate-edge sf-ornate-edge--bottom"></span><span class="sf-ornate-edge sf-ornate-edge--left"></span>';

		echo '<div class="sf-ornate-content">';
		echo '<h3 class="sf-ornate-name">' . sf_card_e( $b['name'] ) . '</h3>';
		echo '<div class="sf-ornate-rule" aria-hidden="true"><svg viewBox="0 0 20 20"><g fill="url(#sf-ornate-gold)">' . sf_card_ornate_star( 10, 10, 9 ) . '</g></svg></div>';
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
