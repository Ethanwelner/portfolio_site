<?php
// Monster Traits: the bespoke Traits that make a monster dangerous without
// gear or Wield Skills. One place for their wording, so every monster sheet
// (php/rpg/encounters.php, php/rpg/lore/murk-legs.php) reads the same. Each
// returns an sf_card_trait() array for an sf_npc_sheet()'s 'traits'.
//
// sf_monster_trait( 'Natural Armor', 2 )
// sf_monster_trait( 'Many Limbs', null, array( 'weapon' => 'Massive Claws' ) )
//
// The combat sim (strange-frontiers-character-creator/scripts/combat-sim.ts,
// makeMonster) models the same rules; change both together.

if ( ! function_exists( 'sf_monster_trait' ) ) {
	function sf_monster_trait( $name, $rank = null, $args = array() ) {
		$weapon = $args['weapon'] ?? 'natural weapons';
		$defs   = array(
			'Honed Instincts' => array( 'condition', 'This character gains +1 per Rank to Attack Rolls with its natural weapons.', true ),
			'Natural Armor'   => array( 'condition', 'This character has +1 Blunt, Slashing and Piercing Resistance per Rank.', true ),
			'Massive'         => array( 'condition', 'This character has +10 Hit Points per Rank.', true ),
			'Many Limbs'      => array( 'condition', "Each Attack Action this character takes with its {$weapon} makes two Attacks, against the same target or two targets within reach.", false ),
			'Apex'            => array( 'condition', 'This character takes two full Actions each Round: one at its Priority, and one at its Priority -5.', false ),
			'Ambusher'        => array( 'condition', 'This character has +3 Priority on the first Round of an Incident.', false ),
			'Cornered'        => array( 'condition', 'While below half its Hit Points, this character’s Attacks deal +2 damage.', false ),
			'Regeneration'    => array( 'condition', 'At the start of each Round, this character regains 2 Hit Points per Rank, unless it took Heat damage the Round before.', true ),
			'Seize'           => array( 'condition', "On a Solid Hit or better with its {$weapon}, this character holds the target: it gains the Rooted Condition until it breaks free with a Power check of 15 as its Action.", false ),
		);
		$actions = array(
			'Pounce'     => "Pounce: This character moves up to its full Movement and Attacks with its {$weapon} as one Action. On a Solid Hit or better, the target gains the Prone Condition.",
			'Drag Under' => 'Drag Under: This character pulls a character it has Seized under the water. That character is Blinded and loses 1d6 Hit Points at the start of each Round until it breaks free.',
		);
		if ( isset( $actions[ $name ] ) ) {
			return array(
				'kind'   => 'ability',
				'name'   => $name,
				'effect' => "This character gains the {$name} Action.",
				'action' => $actions[ $name ],
			);
		}
		list( $kind, $effect, $ranked ) = $defs[ $name ];
		$trait = array(
			'kind'   => $kind,
			'name'   => $name,
			'flags'  => array( 'Permanent' ),
			'effect' => $effect,
		);
		if ( $ranked && $rank ) {
			$trait['rank'] = $rank;
		}
		return $trait;
	}
}
