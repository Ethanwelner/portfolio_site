<?php
// Stat sheets for the Another World adventure's encounters, in the
// Adventures section's Monsters tab. Each is an sf_npc_sheet()
// (components/npc-sheet.php), the same short form as Murk Legs.
// People are built like characters: Human's 1 in every focus Stat, the
// Origin's bonus point (Dreft's is Physical), then 1 core point and 3 focus
// points per Level. Traits a Profession grants skip their Stat requirements.
// Monsters are built from Physical only.
require_once __DIR__ . '/components/npc-sheet.php';
require_once __DIR__ . '/components/monster-traits.php';

// The component library (rpg-components.php) shows these same sheets open;
// the Monsters tab, which lists several, starts them closed.
$sf_encounters_fold = $sf_encounters_fold ?? 'closed';

$sf_wield = function ( $weapon, $rank ) {
	return array(
		'kind'   => 'skill',
		'name'   => 'Wield: ' . $weapon,
		'rank'   => $rank,
		'effect' => "- This character can use and maintain a {$weapon} without a Skill Check.\n- Rank *5 added to Skill Check rolls involving a {$weapon}.\n- Rank *1 added to Attack Rolls using a {$weapon}.",
	);
};

sf_npc_sheet(
	array(
		'name'    => 'Bandit',
		'kind'    => 'Human',
		'level'   => 1,
		'move'    => '10 m',
		'resistances' => '2 Blunt, 1 Slashing, 2 Cold',
		'stats'   => array(
			'Physical'   => 1,
			'Endurance'  => 1,
			'Power'      => 3,
			'Grace'      => 3,
			'Social'     => 0,
			'Empathy'    => 1,
			'Persuasion' => 1,
			'Demeanor'   => 1,
			'Mental'     => 0,
			'Logic'      => 1,
			'Intuition'  => 1,
			'Memory'     => 1,
		),
		'attacks' => array(
			array(
				'name'   => 'Spear',
				'damage' => '7 Piercing',
				'attack' => 'Melee',
				'range'  => '3 m',
			),
			array(
				'name'   => 'Dagger',
				'damage' => '5 Slashing / 5 Piercing',
				'attack' => 'Melee',
				'range'  => '1 m',
			),
		),
		'items'   => array(
			array(
				'name'        => 'Gambeson',
				'category'    => 'Armor',
				'resistances' => '2 Blunt, 1 Slashing, 2 Cold',
			),
		),
	),
	array( 'fold' => $sf_encounters_fold )
);

sf_npc_sheet(
	array(
		'name'    => 'Skeleton',
		'kind'    => 'Monster, Undead',
		'level'   => 4,
		'move'    => '10 m',
		'resistances' => '3 Piercing, 2 Slashing, -2 Blunt',
		'stats'   => array(
			'Physical'   => 4,
			'Endurance'  => 3,
			'Power'      => 4,
			'Grace'      => 5,
			'Social'     => 0,
			'Empathy'    => 0,
			'Persuasion' => 0,
			'Demeanor'   => 0,
			'Mental'     => 0,
			'Logic'      => 0,
			'Intuition'  => 0,
			'Memory'     => 0,
		),
		'attacks' => array(
			array(
				'name'   => 'Shortsword',
				'damage' => '7 Slashing / 6 Piercing',
				'attack' => 'Melee',
				'range'  => '1 m',
			),
		),
		'traits'  => array(
			array(
				'kind'   => 'condition',
				'name'   => 'Undead',
				'flags'  => array( 'Permanent' ),
				'effect' => 'This character doesn’t breathe, eat, sleep or bleed. It is immune to the Asleep, Charmed and Frightened Conditions and to Psychic damage.',
			),
		),
	),
	array( 'fold' => $sf_encounters_fold )
);

sf_npc_sheet(
	array(
		'name'        => 'Briar Boar',
		'kind'        => 'Monster, Isekai',
		'move'        => '12 m',
		'resistances' => '1 Blunt, 1 Slashing, 1 Piercing',
		'resources'   => array( 'hp' => 32 ),
		'stats'       => array(
			'Physical'   => 4,
			'Endurance'  => 5,
			'Power'      => 5,
			'Grace'      => 2,
			'Social'     => 0,
			'Empathy'    => 0,
			'Persuasion' => 0,
			'Demeanor'   => 0,
			'Mental'     => 0,
			'Logic'      => 0,
			'Intuition'  => 0,
			'Memory'     => 0,
		),
		'attacks'     => array(
			array(
				'name'   => 'Gore',
				'damage' => '7 Piercing',
				'attack' => 'Melee',
				'range'  => '1 m',
				'description' => 'Natural weapon.',
			),
		),
		'traits'      => array(
			sf_monster_trait( 'Pounce', null, array( 'weapon' => 'Gore' ) ),
			sf_monster_trait( 'Cornered' ),
			sf_monster_trait( 'Massive', 1 ),
			sf_monster_trait( 'Natural Armor', 1 ),
			sf_monster_trait( 'Honed Instincts', 1 ),
		),
	),
	array( 'fold' => $sf_encounters_fold )
);

sf_npc_sheet(
	array(
		'name'        => 'Mire Lurker',
		'kind'        => 'Monster, Isekai',
		'move'        => '10 m',
		'resistances' => '3 Blunt, 3 Slashing, 3 Piercing',
		'resources'   => array( 'hp' => 64 ),
		'stats'       => array(
			'Physical'   => 8,
			'Endurance'  => 9,
			'Power'      => 9,
			'Grace'      => 6,
			'Social'     => 0,
			'Empathy'    => 0,
			'Persuasion' => 0,
			'Demeanor'   => 0,
			'Mental'     => 0,
			'Logic'      => 0,
			'Intuition'  => 0,
			'Memory'     => 0,
		),
		'attacks'     => array(
			array(
				'name'   => 'Jaws',
				'damage' => '9 Piercing',
				'attack' => 'Melee',
				'range'  => '2 m',
				'chips'  => array( '(Breach: 1)' ),
				'description' => 'Natural weapon.',
			),
		),
		'traits'      => array(
			sf_monster_trait( 'Ambusher' ),
			sf_monster_trait( 'Seize', null, array( 'weapon' => 'Jaws' ) ),
			sf_monster_trait( 'Drag Under' ),
			sf_monster_trait( 'Regeneration', 1 ),
			sf_monster_trait( 'Massive', 3 ),
			sf_monster_trait( 'Natural Armor', 3 ),
			sf_monster_trait( 'Honed Instincts', 2 ),
		),
	),
	array( 'fold' => $sf_encounters_fold )
);

sf_npc_sheet(
	array(
		'name'    => 'Dreftian Mercenary',
		'kind'    => 'Human',
		'level'   => 8,
		'move'    => '10 m',
		'resistances' => '2 Blunt, 3 Slashing, 2 Piercing',
		'stats'   => array(
			'Physical'   => 5,
			'Endurance'  => 5,
			'Power'      => 7,
			'Grace'      => 7,
			'Social'     => 1,
			'Empathy'    => 1,
			'Persuasion' => 3,
			'Demeanor'   => 2,
			'Mental'     => 2,
			'Logic'      => 2,
			'Intuition'  => 3,
			'Memory'     => 4,
		),
		'attacks' => array(
			array(
				'name'   => 'Longsword',
				'damage' => '8 Slashing / 6 Piercing',
				'attack' => 'Melee',
				'range'  => '2 m',
			),
			array(
				'name'   => 'Dagger',
				'damage' => '5 Slashing / 5 Piercing',
				'attack' => 'Melee',
				'range'  => '1 m',
			),
		),
		'items'   => array(
			array(
				'name'        => 'Brigandine',
				'category'    => 'Armor',
				'resistances' => '2 Blunt, 3 Slashing, 2 Piercing',
			),
			array(
				'name'        => 'Wooden Shield',
				'category'    => 'Armor',
				'resistances' => '4 Blunt, 4 Slashing, 3 Piercing (when Defending)',
				'lead'        => 'Defense +4 when Defending.',
			),
		),
		'traits'  => array(
			array( 'from' => 'Dreft Mercenary' ) + $sf_wield( 'Longsword', 1 ),
			array(
				'kind'   => 'ability',
				'name'   => 'Shield Wall',
				'from'   => 'Dreft Mercenary',
				'effect' => 'This character gains the Shieldwall Action.',
				'action' => 'Shieldwall: While holding a shield, this character may take the Defend Action as part of a shield wall. This character and every ally within 1 m who is holding a shield and also Defending gain an additional +4 Defense for the Round.',
			),
			array(
				'kind'   => 'skill',
				'name'   => 'Haggler',
				'from'   => 'Dreft Mercenary',
				'effect' => 'This character gains +5 to Persuasion or Demeanor checks relating to haggling, bartering, and price negotiations.',
			),
			array(
				'kind'   => 'knowledge',
				'name'   => 'Bandits & Brigands',
				'from'   => 'Dreft Mercenary',
				'rank'   => 1,
				'effect' => 'This character has knowledge of the criminal underworld of Isekai and can be assumed to be familiar with its groups and places.',
			),
		),
	),
	array( 'fold' => $sf_encounters_fold )
);
