<?php require_once dirname( __DIR__ ) . '/components/npc-sheet.php'; ?>
<p class="copy">
	Stats for a typical Murk Legs. The full entry is coming soon.
</p>
<?php
sf_npc_sheet(
	array(
		'name'    => 'Murk Legs',
		'kind'    => 'Monster, Isekai',
		'move'    => '10 m',
		'resistances' => '2 Blunt, 1 Slashing',
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
				'damage'  => '10 Slashing',
				'range'   => '3 m',
				'area'    => '3 m',
				'chips'   => array( 'Melee' ),
				'description' => 'Natural weapon.',
			),
			array(
				'name'    => 'Horrid Bite',
				'damage'  => '15 Piercing',
				'range'   => '3 m',
				'chips'   => array( 'Melee' ),
				'description' => 'Natural weapon.',
			),
		),
		'traits'  => array(
			array(
				'kind'   => 'condition',
				'name'   => 'Dark Haze',
				'class'  => 'rules-new',
				'rank'   => 2,
				'flags'  => array( 'Permanent' ),
				'effect' => 'Characters trying to perceive any visual information about this character must succeed on an Intuition check of 20 (10 per Rank). A character who fails can’t make sense of what they’re looking at and sees only a dark, shimmering haze. They can still Attack the haze, but at -6, as if this character were in Heavy Cover. During an Incident, they can try the check again each Round, and once they succeed, the Dark Haze has no effect on them for the rest of the Incident.',
			),
			array(
				'kind'   => 'condition',
				'name'   => 'Fearsome',
				'class'  => 'rules-new',
				'flags'  => array( 'Permanent' ),
				'effect' => 'The first time in an Incident that a character wishes to Attack this character, they must succeed on a Demeanor check of 13. If they fail, that Attack fails and they gain the Frightened Condition at Rank 3. A character must only make this check once per Incident.',
			),
		),
	)
);
