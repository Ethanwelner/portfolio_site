<?php require_once dirname( __DIR__ ) . '/npc-sheet.php'; ?>
<p class="copy">
	Stats for a typical Murk Legs. The full entry is coming soon.
</p>
<?php
sf_npc_sheet(
	array(
		'name'    => 'Murk Legs',
		'kind'    => 'Monster, Isekai',
		'move'    => '10 m',
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
			'Logic'      => 2,
			'Intuition'  => 4,
			'Memory'     => 2,
		),
		'attacks' => array(
			array(
				'name'    => 'Massive Claws',
				'damage'  => 10,
				'type'    => 'Slashing',
				'formula' => 'Power - 5',
				'range'   => '3 m',
				'area'    => '3 m',
				'chips'   => array( 'Melee' ),
				'profile' => 'Natural weapon.',
			),
			array(
				'name'    => 'Horrid Bite',
				'damage'  => 15,
				'type'    => 'Piercing',
				'formula' => 'Power',
				'range'   => '3 m',
				'chips'   => array( 'Melee' ),
				'profile' => 'Natural weapon.',
			),
		),
		'traits'  => array(
			array(
				'name'   => 'Dark Haze',
				'chips'  => array( 'Rank 2', 'Permanent' ),
				'effect' => 'Characters trying to perceive any visual information about this character must succeed on an Intuition check of 20 (10 per Rank). If they fail, they can’t make sense of what they’re looking at and see only a dark, shimmering haze.',
			),
		),
	)
);
