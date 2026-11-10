<?php
// The popup for Strange Frontiers: the page dimmed behind it, the panel
// holding its content, and the round X on the panel's top right corner. One
// component, so every popup opens, looks and closes the same way.
//
// This draws the same markup as the creator's Popup
// (strange-frontiers-character-creator src/app/components/popup.tsx),
// styled by the same stylesheet: css/sf-popup.css here is a copy of the
// creator's src/app/popup.css. Change the popup in the creator first, then
// bring the markup here and copy the stylesheet over.
//
// The site has one popup per page, drawn empty by sf_popup_shell() and
// filled and opened by showLoreModal() in php/javascript-loads.php: a lore
// entry, a search result, the sample sheet's Knowledges and backgrounds. It
// takes the creator's options, under the same names:
//
//   tone   'light' (the white panel, a dark X: the site's light pages) or
//          'dark' (the creator's panel gray, a light X: creator.php and
//          game-tools.php)
//   size   'narrow' (480px), 'default' (720px) or 'wide' (1100px)
//   card   true: a card on its own, the card the popup's edge. The site's
//          script sets it per entry instead (an entry with .lore-card), so
//          one popup shows both.
require_once __DIR__ . '/buttons.php';

if ( ! function_exists( 'sf_popup_shell' ) ) {
	function sf_popup_class( $options = array() ) {
		$tone = $options['tone'] ?? 'light';
		$size = $options['size'] ?? 'default';
		return 'sf-popup sf-popup--' . ( 'dark' === $tone ? 'dark' : 'light' )
			. ( in_array( $size, array( 'narrow', 'wide' ), true ) ? ' sf-popup--' . $size : '' )
			. ( empty( $options['card'] ) ? '' : ' sf-popup--card' );
	}

	// The X on the panel's corner: the round button, light on a dark panel
	function sf_popup_close( $options = array() ) {
		$tone = $options['tone'] ?? 'light';
		return '<button type="button" class="' . sf_button_class( array( 'tone' => 'dark' === $tone ? 'light' : 'dark', 'round' => 'lg' ), 'sf-popup-close' ) . '" aria-label="Close">'
			. '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" aria-hidden="true"><path d="M2 2l16 16M18 2L2 18" fill="none" stroke="currentColor" stroke-width="2"/></svg>'
			. '</button>';
	}

	// The page's popup, empty and closed, for showLoreModal() to fill
	function sf_popup_shell( $options = array() ) {
		echo '<div class="' . sf_popup_class( $options ) . '" role="dialog" aria-modal="true" aria-labelledby="sf-popup-title">';
		// On the site a dark panel also takes the site's black-bg, for its
		// light text and links
		echo '<div class="sf-popup-panel' . ( 'dark' === ( $options['tone'] ?? 'light' ) ? ' black-bg' : '' ) . '">' . sf_popup_close( $options );
		echo '<div class="sf-popup-scroll"><h4 class="sf-popup-title" id="sf-popup-title"></h4><div class="sf-popup-body"></div></div>';
		echo '</div></div>';
	}
}
