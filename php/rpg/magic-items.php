<?php
// Example magical Items for the Adventures page's Magic tab (personal.php),
// shown under the rules for making them: Artifacts, Enchantments and Potions. Each is a creator-style card (background-card.php): what it
// is and its plane as chips, what it does, then what it's imbued with and
// what making it takes by those rules. Spells, Conditions and potion values
// are the creator's (content/traits, content/items).
include_once __DIR__ . '/background-card.php';

$sf_magic_items = array(
	'Artifacts'    => array(
		array(
			'name'     => 'Santar’s Sword of Rust',
			'summary'  => 'A longsword (6 Slashing / 4 Piercing) whose edge is forever slick with magical acid.',
			'features' => array(
				array( 'name' => 'Rustblade, Rank 2 (on the Item)', 'description' => 'The sword has the Corrosive Weapon Condition at Rank 2: it deals 4 more Corrosive damage, and every target it hits gains 1 Rank of the Corroding Condition.' ),
			),
			'rows'     => array(
				'Imbued with' => array( 'Rustblade 2' ),
				'Making it'   => array( '20 MP', '3× Rustblade’s Enchantment reagents', '+10 Item HP', 'Lasts 6 years' ),
			),
		),
		array(
			'name'     => 'L’orian’s Erstwhile Companion',
			'summary'  => 'A backpack that hides whoever wears it.',
			'features' => array(
				array( 'name' => 'Invisibility, Rank 1 (on the wearer)', 'description' => 'Its wearer has the Invisible Condition at Rank 1: it can’t be seen by normal sight and can request Advantage on rolls to hide, sneak, or slip past others unnoticed, and characters Attacking it have -2 to Attack Rolls.' ),
			),
			'rows'     => array(
				'Imbued with' => array( 'Invisibility 1' ),
				'Making it'   => array( '10 MP', '3× Invisibility’s Illusion reagents', '+5 Item HP', 'Lasts 3 years' ),
			),
		),
		array(
			'name'     => 'The Ring of the Wild Children',
			'summary'  => 'A ring that lets its wearer move unheard among the beasts and keep up with them.',
			'features' => array(
				array( 'name' => 'Silence, Rank 1 (on the wearer)', 'description' => 'Its wearer has the Silenced Condition at Rank 1: it can’t make or hear any sound.' ),
				array( 'name' => 'Speak with Animals, Rank 1 (on the wearer)', 'description' => 'Its wearer can understand and speak with animals within 10 m. They aren’t made friendly by it, only able to answer.' ),
				array( 'name' => 'Wild Vigor (on the wearer)', 'description' => 'Its wearer gains +2 Endurance, +2 Power and +2 Grace. This isn’t a Cast Action, so the GM approves how it’s made.' ),
			),
			'rows'     => array(
				'Imbued with' => array( 'Silence 1', 'Speak with Animals 1', '+2 Physical focus Stats' ),
				'Making it'   => array( '15 MP', '3× the Illusion and Divination reagents', '+10 Item HP', 'Lasts 6 years', 'A GM-approved process for the Stat bonus' ),
			),
		),
	),
	'Enchantments' => array(
		array(
			'name'     => 'Traveler’s Respite',
			'summary'  => 'A leather bag that never leaves its owner hungry or thirsty for long.',
			'features' => array(
				array( 'name' => 'Create Water, Rank 1', 'description' => 'For 1 MP from the bag, its wielder creates a 1-meter-diameter sphere of water at a location within 10 m.' ),
				array( 'name' => 'Create Food, Rank 1', 'description' => 'For 1 MP from the bag, its wielder creates enough plain, edible food to feed one person for a day, within 3 m.' ),
				array( 'name' => 'Using it', 'description' => 'Either takes a Magic Skill Check with a difficulty of 5. The bag holds 10 MP, ten uses between recharges.' ),
			),
			'rows'     => array(
				'Enchanted with' => array( 'Create Water 1', 'Create Food 1', '10 MP stored' ),
				'Making it'      => array( '8 MP', 'Conjuration reagents', '6 hours', 'Lost after 1 week below 1 MP' ),
			),
		),
		array(
			'name'     => 'Amulet of the Seas',
			'summary'  => 'An amulet that lets its wielder, or a companion, breathe beneath the waves.',
			'features' => array(
				array( 'name' => 'Water Breathing, Rank 3', 'description' => 'For 1 MP from the amulet, its wielder gives a character within 3 m the Water Breathing Condition at Rank 3, about three hours of breathing water as easily as air.' ),
				array( 'name' => 'Using it', 'description' => 'Takes a Magic Skill Check with a difficulty of 15. The amulet holds 3 MP, three uses between recharges.' ),
			),
			'rows'     => array(
				'Enchanted with' => array( 'Water Breathing 3', '3 MP stored' ),
				'Making it'      => array( '4 MP', 'Enchantment reagents', '9 hours', 'Lost after 3 weeks below 1 MP' ),
			),
		),
	),
	'Potions'      => array(
		array(
			'name'     => 'Healing Potion (Rank 3)',
			'summary'  => 'The common healing potion, brewed by a skilled hand.',
			'features' => array(
				array( 'name' => 'Heal, Rank 3', 'description' => 'Whoever drinks it is healed 12 HP.' ),
			),
			'rows'     => array(
				'Brewed with' => array( 'Heal 3', 'Worth 60 Luras' ),
				'Making it'   => array( 'Intuition or Magic check, difficulty 15', '1 MP', 'Restoration reagents', '3 hours' ),
			),
		),
		array(
			'name'     => 'Firewalker’s Draught (Rank 2)',
			'summary'  => 'A two-effect potion for running through a burning building, or out of one.',
			'features' => array(
				array( 'name' => 'Flameproof, Rank 2', 'description' => 'Whoever drinks it gains the Magically Flameproof Condition at Rank 2: 6 Heat resistance for an hour.' ),
				array( 'name' => 'Haste, Rank 2', 'description' => 'Whoever drinks it gains the Hasted Condition at Rank 2: +2 Priority and +10 m Movement for one minute.' ),
			),
			'rows'     => array(
				'Brewed with' => array( 'Flameproof 2', 'Haste 2', 'Worth 160 Luras' ),
				'Making it'   => array( 'Intuition or Magic check, difficulty 20', '6 MP', 'Enchantment reagents', '4 hours' ),
			),
		),
	),
);
$sf_magic_item_slots = array( 'Artifacts' => 'Artifact', 'Enchantments' => 'Enchantment', 'Potions' => 'Potion' );

// One group's cards, under the rules that make them
function sf_magic_item_examples( $title ) {
	global $sf_magic_items, $sf_magic_item_slots;
	?>
	<div class="content-stack content-stack-xs mt-3">
		<h6 class="mb-0"><strong>Example <?php echo $title; ?></strong></h6>
		<div class="bg-card-grid">
			<?php
			foreach ( $sf_magic_items[ $title ] as $item ) {
				sf_background_card( $item + array( 'slot' => $sf_magic_item_slots[ $title ], 'plane' => 'isekai', 'id' => '' ) );
			}
			?>
		</div>
	</div>
	<?php
}
