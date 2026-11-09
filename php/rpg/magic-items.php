<?php
// Example magical Items for the Adventures page's Magic tab (personal.php),
// shown under the rules for making them: Artifacts, Enchantments and Potions.
// Each is an item card (items.php's equipment card): the name, a weapon's
// damage with its magic already added, an enchantment's stored MP as the
// character sheet's MP, what kind of magic Item it is, its plane and a
// potion's value, then its description and what it does. Spells, Conditions
// and potion values are the creator's (content/traits, content/items).
include_once __DIR__ . '/items.php';

$sf_magic_items = array(
	'Artifacts'    => array(
		array(
			'name'        => 'Santar’s Sword of Rust',
			'description' => 'A longsword whose edge is forever slick with magical acid.',
			'damage'      => '6 Slashing, 4 Corrosive / 4 Piercing, 4 Corrosive',
			'effects'     => array(
				array( 'Item – Rustblade (2)', 'The sword has the Corrosive Weapon Condition at Rank 2, its damage already added above.' ),
			),
		),
		array(
			'name'        => 'L’orian’s Erstwhile Companion',
			'description' => 'A backpack that hides whoever wears it.',
			'effects'     => array(
				array( 'Wearer – Invisibility (1)', 'Its wearer has the Invisible Condition at Rank 1.' ),
			),
		),
		array(
			'name'        => 'The Ring of the Wild Children',
			'description' => 'A ring that lets its wearer move unheard among the beasts and keep up with them.',
			'effects'     => array(
				array( 'Wearer – Silence (1)', 'Its wearer has the Silenced Condition at Rank 1.' ),
				array( 'Wearer – Speak with Animals (1)', 'Its wearer can understand and speak with animals within 10 m. They aren’t made friendly by it, only able to answer.' ),
				array( 'Wearer – Wild Vigor', 'Its wearer gains +2 Endurance, +2 Power and +2 Grace.' ),
			),
		),
	),
	'Enchantments' => array(
		array(
			'name'        => 'Traveler’s Respite',
			'description' => 'A leather bag that never leaves its owner hungry or thirsty for long.',
			'mp'          => 10,
			'effects'     => array(
				array( 'Create Water (1)', 'For 1 MP from the bag, its wielder creates a 1-meter-diameter sphere of water at a location within 10 m.' ),
				array( 'Create Food (1)', 'For 1 MP from the bag, its wielder creates enough plain, edible food to feed one person for a day, within 3 m.' ),
				array( 'Using it', 'Either takes a Magic Skill Check with a difficulty of 5.' ),
			),
		),
		array(
			'name'        => 'Amulet of the Seas',
			'description' => 'An amulet that lets its wielder, or a companion, breathe beneath the waves.',
			'mp'          => 3,
			'effects'     => array(
				array( 'Water Breathing (3)', 'For 1 MP from the amulet, its wielder gives a character within 3 m the Water Breathing Condition at Rank 3.' ),
				array( 'Using it', 'Takes a Magic Skill Check with a difficulty of 15.' ),
			),
		),
	),
	'Potions'      => array(
		array(
			'name'        => 'Healing Potion (3)',
			'description' => 'The common healing potion, brewed by a skilled hand.',
			'value'       => 60,
			'lead'        => 'Whoever drinks it:',
			'effects'     => array(
				array( 'Heal (3)', 'Is healed 12 HP.' ),
			),
		),
		array(
			'name'        => 'Firewalker’s Draught (2)',
			'description' => 'A two-effect potion for running through a burning building, or out of one.',
			'value'       => 160,
			'lead'        => 'Whoever drinks it:',
			'effects'     => array(
				array( 'Flameproof (2)', 'Gains the Magically Flameproof Condition at Rank 2.' ),
				array( 'Haste (2)', 'Gains the Hasted Condition at Rank 2.' ),
			),
		),
	),
);
$sf_magic_item_kinds = array( 'Artifacts' => 'Artifact', 'Enchantments' => 'Enchantment', 'Potions' => 'Potion' );

// One magic Item's card
function sf_magic_item_card( $item, $kind ) {
	require_once __DIR__ . '/components/cards.php';
	$item['category'] = $kind;
	$item['plane']    = 'Isekai';
	if ( isset( $item['value'] ) ) {
		$item['currency'] = 'Luras';
	}
	sf_card_item( $item );
}

// One group's cards, under the rules that make them
function sf_magic_item_examples( $title ) {
	global $sf_magic_items, $sf_magic_item_kinds;
	?>
	<div class="bg-card-grid mt-3">
		<?php foreach ( $sf_magic_items[ $title ] as $item ) { sf_magic_item_card( $item, $sf_magic_item_kinds[ $title ] ); } ?>
	</div>
	<?php
}
