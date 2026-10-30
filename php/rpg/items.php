<?php
// Equipment cards, the item counterpart to the Traits page's .trait-box cards
// (Example Items on rpg-items.php). Items are drafted on the "Items" tab of the
// Strange Frontiers traits Sheet. Each item has one value: in Luras for Isekai
// items, and in ERC for Earth items and items found on any plane. Play
// converts between currencies as needed.

// 600 → "600", 1500 → "1.5k", 25000 → "25k", 30000000 → "30M"
function sf_item_value($amount) {
	foreach ([1000000 => 'M', 1000 => 'k'] as $size => $suffix) {
		if ($amount >= $size) {
			return rtrim(rtrim(number_format($amount / $size, 1, '.', ''), '0'), '.') . $suffix;
		}
	}
	return (string) $amount;
}

function sf_equipment_card($name, $category, $plane, $description, $value, $currency) {
	$label = number_format($value) . ' ' . $currency;
	echo '<div class="equipment-box">';
	echo '<div class="equipment-name">' . htmlspecialchars($name) . '</div>';
	echo '<div class="equipment-meta">' . htmlspecialchars($category) . ' &bull; ' . htmlspecialchars($plane) . '</div>';
	echo '<div class="copy">' . htmlspecialchars($description) . '</div>';
	echo '<div class="equipment-value" title="' . $label . '" aria-label="Value: ' . $label . '">';
	echo '<span class="equipment-amount">' . sf_item_value($value) . '</span>';
	echo '<span class="equipment-currency">' . $currency . '</span>';
	echo '</div></div>';
}

// Example Items, grouped by category: [name, category, plane, description, value, currency]
function sf_example_items() {
	return [
		'Weapons' => [
			['Longsword', 'Weapon', 'Any', 'A long straight sword wielded in one or two hands.', 600, 'ERC'],
			['Crossbow', 'Weapon', 'Any', 'A bow mounted on a stock, slow to load but easy to aim.', 500, 'ERC'],
			['Rifle', 'Weapon', 'Earth', 'A modern rifle, the standard arm of soldiers across the systems.', 1200, 'ERC'],
			['Missile Launcher', 'Weapon', 'Earth', 'A shoulder-fired tube for rockets and guided missiles.', 25000, 'ERC'],
		],
		'Wearables' => [
			['Chainmail', 'Wearable', 'Any', 'A shirt of interlocking iron rings.', 1200, 'ERC'],
			['Ballistic Vest', 'Wearable', 'Earth', 'A modern vest with armor plates, made to stop bullets.', 800, 'ERC'],
			['Vacuum Suit', 'Wearable', 'Earth', 'A sealed, pressurized suit with its own air, for working in space.', 50000, 'ERC'],
		],
		'Equipment' => [
			['Potion Kit', 'Equipment', 'Isekai', 'Vials, a mortar and pestle, a burner and a few common reagents.', 50, 'Luras'],
			['Healer’s Kit', 'Equipment', 'Any', 'Bandages, salves, splints and needle and thread.', 80, 'ERC'],
			['Comm Unit', 'Equipment', 'Earth', 'A personal communicator and computer. Doesn’t reach across a switch gate without a relay.', 800, 'ERC'],
		],
		'Vehicles and Animals' => [
			['Riding Animal', 'Animal', 'Any', 'A common saddle animal trained to carry a rider.', 5000, 'ERC'],
			['Wagon', 'Vehicle', 'Any', 'A four-wheeled wagon pulled by draft animals. Occupants: 2, plus cargo.', 3000, 'ERC'],
			['Fighter', 'Vehicle', 'Earth', 'A single-seat combat spacecraft. Occupants: 1.', 30000000, 'ERC'],
		],
		'Misc' => [
			['Arrows', 'Misc', 'Any', 'A quiver of arrows.', 40, 'ERC'],
			['Ration Pack', 'Misc', 'Earth', 'A sealed, self-heating meal for one day.', 12, 'ERC'],
		],
	];
}
