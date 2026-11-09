<?php
// The button component for Strange Frontiers. Every button comes from it,
// with the same options as the Character Creator's Button
// (strange-frontiers-character-creator src/app/components/Button.tsx),
// styled by css/sf-buttons.css, a copy of the creator's src/app/buttons.css.
// Change a button in the creator first, then copy the stylesheet over.
//
//   tone     gray (the default) · primary · dark · light · ghost · danger ·
//            condition · item
//   size     default · small · pill
//   round    xs (24px) · sm (28px) · md (32px) · lg (36px): a circle for an icon
//   kind     bare (no fill or padding) · link (a text link)
//   ready    true: glitches, for something that's waiting on the player
//   waiting  true: faded, but it still works
//
// The component library (rpg-components.php) shows each one.

if ( ! function_exists( 'sf_button_class' ) ) {
	// The classes for a button with these options, for anything that draws
	// one itself (a link, a label)
	function sf_button_class( $o = array(), $extra = '' ) {
		$classes = array( 'sf-btn' );
		if ( ! empty( $o['tone'] ) && 'gray' !== $o['tone'] ) {
			$classes[] = 'sf-btn--' . $o['tone'];
		}
		if ( ! empty( $o['size'] ) && 'default' !== $o['size'] ) {
			$classes[] = 'sf-btn--' . $o['size'];
		}
		if ( ! empty( $o['round'] ) ) {
			$classes[] = 'sf-btn--round sf-btn--' . $o['round'];
		}
		if ( ! empty( $o['kind'] ) ) {
			$classes[] = 'sf-btn--' . $o['kind'];
		}
		if ( ! empty( $o['ready'] ) ) {
			$classes[] = 'is-ready';
		}
		if ( ! empty( $o['waiting'] ) ) {
			$classes[] = 'is-waiting';
		}
		if ( $extra ) {
			$classes[] = $extra;
		}
		return implode( ' ', $classes );
	}

	/**
	 * A button. $label is HTML (escape text yourself); $o takes the options
	 * above plus:
	 *
	 * class     More classes, for the page's own layout.
	 * href      Makes it a link that looks like a button.
	 * disabled  True: faded and not clickable.
	 * attrs     More attributes, array( name => value ), like aria-label.
	 */
	function sf_button( $label, $o = array() ) {
		$attrs = $o['attrs'] ?? array();
		$html  = '';
		foreach ( $attrs as $name => $value ) {
			$html .= ' ' . $name . '="' . htmlspecialchars( (string) $value, ENT_QUOTES, 'UTF-8' ) . '"';
		}
		$class = sf_button_class( $o, $o['class'] ?? '' );
		if ( ! empty( $o['href'] ) ) {
			return '<a class="' . $class . '" href="' . htmlspecialchars( $o['href'], ENT_QUOTES, 'UTF-8' ) . '"' . ( ! empty( $o['disabled'] ) ? ' aria-disabled="true"' : '' ) . $html . '>' . $label . '</a>';
		}
		return '<button type="' . ( $o['type'] ?? 'button' ) . '" class="' . $class . '"' . ( ! empty( $o['disabled'] ) ? ' disabled' : '' ) . $html . '>' . $label . '</button>';
	}
}
