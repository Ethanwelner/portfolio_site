<?php
// Murk Legs' monster sheet (components/monster-sheet.php): its lore entry
// (lore/murk-legs.php) draws it in the half-width column, and the
// component library also draws it in the wide layout
require_once __DIR__ . '/components/monster-sheet.php';
require_once __DIR__ . '/components/monster-traits.php';

if ( ! function_exists( 'sf_murk_legs' ) ) {
	function sf_murk_legs() {
		return array(
			'name'    => 'Murk Legs',
			'kind'    => 'Monster, Isekai',
			'threat'  => 8,
			'boss'    => true,
			'move'    => '10 m',
			'resistances' => '4 Blunt, 3 Slashing, 2 Piercing',
			'resources'   => array( 'hp' => 66 ),
			'stats'   => array(
				'Physical'   => 12,
				'Endurance'  => 10,
				'Power'      => 15,
				'Grace'      => 11,
				'Social'     => 1,
				'Empathy'    => 2,
				'Persuasion' => 1,
				'Demeanor'   => 0,
				'Mental'     => 2,
				'Logic'      => 1,
				'Intuition'  => 4,
				'Memory'     => 1,
			),
			'attacks' => array(
				array(
					'name'    => 'Massive Claws',
					'damage'  => '9 Slashing',
					'range'   => '3 m',
					'area'    => '3 m',
					'attack'  => 'Melee',
					'natural' => true,
				),
				array(
					'name'    => 'Horrid Bite',
					'damage'  => '12 Piercing',
					'attack'  => 'Melee',
					'natural' => true,
					'chips'   => array( '(Breach: 2)' ),
					'range'   => '3 m',
				),
			),
			'traits'  => array(
				sf_monster_trait( 'Apex' ),
				sf_monster_trait( 'Many Limbs', null, array( 'weapon' => 'Massive Claws' ) ),
				sf_monster_trait( 'Massive', 2 ),
				sf_monster_trait( 'Natural Armor', 2 ),
				sf_monster_trait( 'Honed Instincts', 3 ),
				array(
					'kind'   => 'condition',
					'name'   => 'Dark Haze',
					'rank'   => 2,
					'flags'  => array( 'Permanent' ),
					'effect' => 'Characters trying to perceive any visual information about this character must succeed on an Intuition check of 20 (10 per Rank). A character who fails can’t make sense of what they’re looking at and sees only a dark, shimmering haze. They can still Attack the haze, but at -6, as if this character were in Heavy Cover. During an Incident, they can try the check again each Round, and once they succeed, the Dark Haze has no effect on them for the rest of the Incident.',
				),
				array(
					'kind'   => 'condition',
					'name'   => 'Fearsome',
					'flags'  => array( 'Permanent' ),
					'effect' => 'The first time in an Incident that a character wishes to Attack this character, they must succeed on a Demeanor check of 13. If they fail, that Attack fails and they gain the Frightened Condition at Rank 3. A character must only make this check once per Incident.',
				),
			),
		);
	}
}
