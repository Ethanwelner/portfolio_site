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
				array( 'Item – Rustblade (2)', 'The sword has the Corrosive Weapon Condition at Rank 2: 4 more Corrosive damage, already in its damage above, and every target it hits gains 1 Rank of the Corroding Condition.' ),
			),
		),
		array(
			'name'        => 'L’orian’s Erstwhile Companion',
			'description' => 'A backpack that hides whoever wears it.',
			'effects'     => array(
				array( 'Wearer – Invisibility (1)', 'Its wearer has the Invisible Condition at Rank 1: it can’t be seen by normal sight and can request Advantage on rolls to hide, sneak, or slip past others unnoticed, and characters Attacking it have -2 to Attack Rolls.' ),
			),
		),
		array(
			'name'        => 'The Ring of the Wild Children',
			'description' => 'A ring that lets its wearer move unheard among the beasts and keep up with them.',
			'effects'     => array(
				array( 'Wearer – Silence (1)', 'Its wearer has the Silenced Condition at Rank 1: it can’t make or hear any sound.' ),
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
				array( 'Water Breathing (3)', 'For 1 MP from the amulet, its wielder gives a character within 3 m the Water Breathing Condition at Rank 3: three hours of breathing water as easily as air.' ),
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
				array( 'Flameproof (2)', 'Gains the Magically Flameproof Condition at Rank 2: 6 Heat resistance for an hour.' ),
				array( 'Haste (2)', 'Gains the Hasted Condition at Rank 2: +2 Priority and +10 m Movement for one minute.' ),
			),
		),
	),
);
$sf_magic_item_kinds = array( 'Artifacts' => 'Artifact', 'Enchantments' => 'Enchantment', 'Potions' => 'Potion' );

// One magic Item's card
function sf_magic_item_card( $item, $kind ) {
	$e = function ( $s ) { return htmlspecialchars( $s, ENT_QUOTES, 'UTF-8' ); };
	echo '<div class="equipment-box magic-item">';
	echo '<div class="equipment-row">';
	echo '<span class="equipment-name">' . $e( $item['name'] ) . '</span>';
	if ( ! empty( $item['damage'] ) ) {
		echo sf_item_stats( 'sword', $item['damage'] );
	}
	if ( isset( $item['mp'] ) ) {
		echo '<span class="equipment-mp"><strong class="resource-name resource-mp" title="Mana Points">MP</strong><span class="num">' . $item['mp'] . '<span class="muted"> / ' . $item['mp'] . '</span></span></span>';
	}
	echo '<span class="equipment-chips"><span class="chip">' . $kind . '</span><span class="chip">Isekai</span>';
	if ( isset( $item['value'] ) ) {
		$label = $item['value'] . ' Luras';
		echo '<span class="chip equipment-value" title="' . $label . '" aria-label="Value: ' . $label . '">' . sf_item_value( $item['value'] ) . ' Luras</span>';
	}
	echo '</span></div>';
	echo '<p class="equipment-description">' . $e( $item['description'] ) . '</p>';
	if ( ! empty( $item['lead'] ) ) {
		echo '<p class="equipment-effect">' . $e( $item['lead'] ) . '</p>';
	}
	foreach ( $item['effects'] as $effect ) {
		echo '<p class="equipment-effect"><strong>' . $e( $effect[0] ) . ':</strong> ' . $e( $effect[1] ) . '</p>';
	}
	echo '</div>';
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
