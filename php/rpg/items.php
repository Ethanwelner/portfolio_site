<?php
// Equipment cards, the item counterpart to the Traits page's .trait-box cards
// (Example Items on rpg-items.php). Items are drafted on the "Items" tab of the
// Strange Frontiers traits Sheet; values are in ERC for Earth items, Luras for
// Isekai items, and both for items found on any plane.

// 600 → "600", 1500 → "1.5k", 25000 → "25k", 30000000 → "30M"
function sf_item_value($amount) {
	foreach ([1000000 => 'M', 1000 => 'k'] as $size => $suffix) {
		if ($amount >= $size) {
			return rtrim(rtrim(number_format($amount / $size, 1, '.', ''), '0'), '.') . $suffix;
		}
	}
	return (string) $amount;
}

// $values maps a currency's short name to an amount, e.g. ['ERC' => 600, 'Luras' => 150].
function sf_equipment_card($name, $category, $plane, $description, $values) {
	echo '<div class="equipment-box">';
	echo '<div class="equipment-name">' . htmlspecialchars($name) . '</div>';
	echo '<div class="equipment-meta">' . htmlspecialchars($category) . ' &bull; ' . htmlspecialchars($plane) . '</div>';
	echo '<div class="copy">' . htmlspecialchars($description) . '</div>';
	echo '<div class="equipment-values">';
	foreach ($values as $currency => $amount) {
		$label = number_format($amount) . ' ' . $currency;
		echo '<div class="equipment-value" title="' . $label . '" aria-label="Value: ' . $label . '">';
		echo '<span class="equipment-amount">' . sf_item_value($amount) . '</span>';
		echo '<span class="equipment-currency">' . $currency . '</span>';
		echo '</div>';
	}
	echo '</div></div>';
}

// Example Items, grouped by category: [name, category, plane, description, values]
function sf_example_items() {
	return [
		'Weapons' => [
			['Longsword', 'Weapon', 'Any', 'A long straight sword wielded in one or two hands.', ['ERC' => 600, 'Luras' => 150]],
			['Crossbow', 'Weapon', 'Any', 'A bow mounted on a stock, slow to load but easy to aim.', ['ERC' => 500, 'Luras' => 120]],
			['Rifle', 'Weapon', 'Earth', 'A modern rifle, the standard arm of soldiers across the systems.', ['ERC' => 1200]],
			['Missile Launcher', 'Weapon', 'Earth', 'A shoulder-fired tube for rockets and guided missiles.', ['ERC' => 25000]],
		],
		'Wearables' => [
			['Chainmail', 'Wearable', 'Any', 'A shirt of interlocking iron rings.', ['ERC' => 1200, 'Luras' => 400]],
			['Ballistic Vest', 'Wearable', 'Earth', 'A modern vest with armor plates, made to stop bullets.', ['ERC' => 800]],
			['Vacuum Suit', 'Wearable', 'Earth', 'A sealed, pressurized suit with its own air, for working in space.', ['ERC' => 50000]],
		],
		'Equipment' => [
			['Potion Kit', 'Equipment', 'Isekai', 'Vials, a mortar and pestle, a burner and a few common reagents.', ['Luras' => 50]],
			['Healer’s Kit', 'Equipment', 'Any', 'Bandages, salves, splints and needle and thread.', ['ERC' => 80, 'Luras' => 15]],
			['Comm Unit', 'Equipment', 'Earth', 'A personal communicator and computer. Doesn’t reach across a switch gate without a relay.', ['ERC' => 800]],
		],
		'Vehicles and Animals' => [
			['Riding Animal', 'Animal', 'Any', 'A common saddle animal trained to carry a rider.', ['ERC' => 5000, 'Luras' => 300]],
			['Wagon', 'Vehicle', 'Any', 'A four-wheeled wagon pulled by draft animals. Occupants: 2, plus cargo.', ['ERC' => 3000, 'Luras' => 200]],
			['Fighter', 'Vehicle', 'Earth', 'A single-seat combat spacecraft. Occupants: 1.', ['ERC' => 30000000]],
		],
		'Misc' => [
			['Arrows', 'Misc', 'Any', 'A quiver of arrows.', ['ERC' => 40, 'Luras' => 4]],
			['Ration Pack', 'Misc', 'Earth', 'A sealed, self-heating meal for one day.', ['ERC' => 12]],
		],
	];
}
