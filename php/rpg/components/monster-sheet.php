<?php
// The monster sheet: the short-form sheet for Strange Frontiers monsters and
// enemies, anything the party fights (Murk Legs, the Monsters tab's
// encounters). It draws the same sheet as the NPC sheet for now
// (components/npc-sheet.php, which documents the fields and options),
// with .sf-npc--monster on the sheet to style it apart by. Its blob shows
// a threat level in place of a character level, since a level doesn't
// scale with how dangerous a monster is: 1 to 10, its tier after what it
// is (1–2 Minor, 3–4 Standard, 5–6 Elite, 7–8 Deadly, 9–10 Legendary).
// Without one, the blob shows a dash.
//
// sf_monster_sheet( array(
//   'name'    => 'Murk Legs',
//   'kind'    => 'Monster, Isekai',
//   'threat'  => 8,                      // Deadly
//   'boss'    => true,                   // optional: the tough one in its
//                                        // threat band, a flaming skull
//   'move'    => '10 m',
//   'stats'   => array( 'Physical' => 12, 'Endurance' => 10, … ),
//   'attacks' => array( … ),
//   'traits'  => array( … ),             // components/monster-traits.php
// ), array( 'fold' => 'closed' ) );
//
// Its frame has a deep red band and a red line with a gold star in the
// corner, a gold filigree line inside with a gold skull at its top (a
// larger one in flames for a boss), and gold
// noise gathered in the field's corners. Its field has the storm background
// (drifting clouds tinted #202826, lightning now and then) unless the
// options say 'background' => 'none'.
require_once __DIR__ . '/npc-sheet.php';

if ( ! function_exists( 'sf_monster_sheet' ) ) {
	function sf_monster_sheet( $monster, $options = array() ) {
		sf_npc_sheet_draw( $monster, $options, 'monster' );
	}
}
