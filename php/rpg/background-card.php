<?php
// A Background's card, drawn by the background card component
// (php/rpg/components/cards.php). Used beside the sample character sheet
// (rpg-character.php) and in Building a Dreftian (dreftian-starters.php).
// $bonusNote is added to each Bonus, like Edwin's ", placed in Grace".
require_once __DIR__ . '/components/cards.php';
if ( ! function_exists( 'sf_background_card' ) ) {
	function sf_background_card( $b, $bonusNote = '' ) {
		sf_card_background( $b, $bonusNote );
	}
}
