<?php
// Equipment cards (Example Items on rpg-items.php), drawn like the item cards
// on the Character Creator's sheet and in Player Tools: a line with the
// name, its damage or resistances in a badge of icons and numbers, then the
// category and plane as chips and the value as a badge at the right, then the
// description under it. Items are drafted on the "Items" tab of the
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

// The damage types' icons, from the Character Creator (src/app/components/ui.tsx),
// for the ones the Example Items and Item Types use
function sf_damage_icon($type) {
	$paths = [
		'Blunt' => 'M215.97 27.813c-2.218.04-4.35.177-6.407.375l-.532.062c-2.774.266-5.796 1.01-9.124 1.844-4.418 1.11-8.096 2.607-11.125 4.406l77.782 59.313 7.375 5.656-5.593 7.405-13.72 18.156 67.595 51.626 14.217-18.812 9.47-12.53 6.5 14.342 19.656 43.47 60.593-80.095-47.187-7.124-15.533-2.312 9.47-12.563 14.28-18.843-67.593-51.624L310.78 50.78l-5.03 6.657-7.188-4.25c-28.635-16.917-58.02-25.157-80.343-25.374a76.706 76.706 0 0 0-2.25 0zM453 127.124l-71.47 94.438 34.564 26.187c44.24-20.22 64.01-52.594 71.312-94.625l-34.406-26zm-193.688 25.03c-27.17 33.09-55.308 64.706-82.812 96.22l47.406 39.875c23.11-35.343 46.336-71.61 71.938-108.22l-36.53-27.874zM164.25 262.47c-11.355 13.115-22.564 26.254-33.5 39.5l48.375 52.717c11.707-16.6 23.107-33.515 34.438-50.687l-49.313-41.53zm-45.438 54.124a1111.646 1111.646 0 0 0-23.093 29.72l33.468 73.842c13.586-16.22 26.434-32.893 38.843-49.937l-49.218-53.626zm-35.75 47.03c-12.108 16.978-23.57 34.335-34.124 52.282L98.53 454.47a688.442 688.442 0 0 0 17.22-18.72l-32.688-72.125zm-43.437 68.688a546.43 546.43 0 0 0-14.75 29l37.375 28.313a611.184 611.184 0 0 0 23.125-21.72l-45.75-35.592z',
		'Slashing' => 'M275.03 20c35.223 49.563 53.59 113.64 55.69 173.47C315.154 143 289.092 88.423 250.81 48.75c40.294 79.527 51.15 172.312 37.938 256.094-12.287-75.777-40.564-159.524-92.375-227.156 29.6 70.937 36.64 149.785 24.813 221.843-8.745-51.804-25.41-107.4-52.594-158.81 13.023 54.315 12.854 107.64 3.437 159.28l21.657 6.813 15 4.718-11.28 10.908c-10.68 10.332-19.868 21.905-27.345 34.343 93.614 35.486 232.952 64.53 298.032 41.376-41.02 56.466-210.332 13.822-309.313-18.687-1.514 3.775-2.918 7.594-4.124 11.467a152.536 152.536 0 0 0-6.062 29.657l176.47 66.375c98.5 31.095 150.5-24.62 158.655-81.72C505.253 254.472 485.016 105.66 426.06 20h-22.187c40.092 65.52 66.67 154.216 60.47 255.344-8.154-79.833-42.8-157.214-98.44-219.5 38.676 85.094 56.566 185.746 34.376 288.625.057-118.816-33.1-225.865-105.092-324.47H275.03zm-110.186 1.594c41.255 29.176 74.328 74.093 97.5 120.656-7.702-46.15-21.3-86.79-44-120.656h-53.5zm176.375 0c28.882 15.143 52.096 36.614 71.28 66.78-7.14-27.79-17.217-49.85-31.438-66.78H341.22zM123.686 304.406a179.344 179.344 0 0 1-4.062 64L18.812 336.344V366l91.938 29.094a178.602 178.602 0 0 1-30.313 48.28l50.094 15.75c-3.038-24.898-1.136-49.885 6.282-73.718 7.446-23.92 20.223-46.108 37.032-65.22l-50.156-15.78z',
		'Piercing' => 'M242.5 21.5c-25.192 3.245-47.28 32.016-47.28 68.78 0 20.28 7.038 38.25 17.5 50.75l10.25 12.25-15.69 2.94c-6.058 1.128-11.42 3.163-16.25 6.093l50.907 29.343.22.125c10.092 5.547 17.387 12.847 21.687 20.72 4.332 7.932 5.865 16.78 2.562 24.75-3.302 7.97-12.133 13.29-21.687 13.344-9.457.054-20.02-3.703-32.345-11.5-.13-.082-.245-.136-.375-.22l-52.313-30.06a192.847 192.847 0 0 0-4.156 14.56c-8.238 33.626-9.925 74.615-10.155 110.407H189.5l.625 8.626 11.28 149.78 96.69.002 9.935-149.69.564-8.72h42c-.013-36.18-.378-77.737-7.844-111.624-4.05-18.384-10.197-34.295-18.813-45.75-8.615-11.454-19.257-18.706-34.593-21.062l-16-2.438L283.5 140.25c10.008-12.437 16.72-30.183 16.72-49.97-.002-39.2-24.78-68.718-52.5-68.718-2.913 0-4.762-.12-5.22-.062zM20.812 85.78v21.626l200.875 115.5.188.094.188.125c10.573 6.74 18.416 8.805 22.53 8.78 4.115-.022 4.113-.724 4.563-1.81.45-1.09.63-4.324-1.72-8.626-2.348-4.304-7.01-9.363-14.436-13.407l-.094-.032-.094-.06-212-122.19zm396.97 187.626-15.626 28.22-33.656-19.063c.355 8.144.576 16.234.688 24.187l22.906 13.03-15.47 27.94 114.97 15.124-73.813-89.438z',
		'Heat' => 'M162.22 21.312c-183.876 106.68 51.994 227.35-10.19 332.47C116.95 413.083 38.11 325.45 43.75 227-6.035 353.376 30.21 443.745 95.22 492.75c1.386.34 17.577.498 41.186.562-28.478-16.9-32.06-75.355 32.813-103.25l15.78-7L182.062 400c-1.356 8.34-.318 13.95 1.188 16.937 1.507 2.987 3.106 3.544 5.844 4.094 5.475 1.1 16.963-2.395 26.28-14.624 18.636-24.457 29.117-80.228-26.874-167l-4.094-6.437-13.906-19.25 23.25 9.905 5.25 1.75c80.85 25.498 135.3 58.46 174.625 112.72 21.544-22.906 38.7-56.835 43.812-91.69l3.5-27.468 13.438 23.97c25.525 45.802 30.267 104.912 11.094 156.5-14.23 38.28-42.036 72.34-84 93.5 13.623-.01 24.05.032 25.25.124 154.76-34.77 139.345-244.952-14.19-394.093.012.726 0 1.46 0 2.188 78.964 185.87-136.465 189.104-119.25 11.47-41.686 100.463-132.86-2.147-91.06-91.283zM269.093 332.25c13.51 15.806 22.35 33.086 22.78 50.812.587 24.03-9.293 47.12-24.53 66.563-14.832 18.926-34.837 34.62-56.625 43.656 33.127-.065 64.926-.16 95.217-.25l-.062-.186c30.95-18.584 47.31-38.83 53.75-57.813 6.44-18.982 3.25-37.246-5.844-53.718-15.44-27.97-49.705-47.71-84.686-49.062z',
		'Cold' => 'M238.406 26.844c-9.653.12-18.926 2.69-30.437 7.062l-157.282 57c-20.984 7.65-21.587 11.834-22.344 33.28L20.937 358.22c-1.207 27.514-.654 33.187 23.25 43.56l185.783 81.41c19.34 8.29 31.906 7.655 45.186 3.218l181.938-56.53c21.95-7.295 25.04-9.627 25.875-36.845l7.686-250.155c.662-17.37-5.667-24.695-18.78-29.625L271.062 34.375c-12.977-5.344-23.003-7.653-32.657-7.53zm.813 24.875c23.637-.053 45.564 8.434 87.874 24.874 95.545 37.123 131.71 53.8 69.687 77.937-74.002 28.802-128.175 45.115-172.28 25.814L113.47 131.75c-34.57-15.127-44.69-27.46 17.843-50.094 55.64-20.14 82.742-29.882 107.906-29.937zm44.718 43.75c-38.284.402-55.285 21.205-56.813 38.936-.873 10.132 2.95 19.6 12.406 26.25 9.456 6.65 25.355 10.56 48.97 5.938 35.817-7.01 61.536-15.056 77.5-22.844 7.982-3.894 13.464-7.737 16.5-10.844 3.036-3.107 3.453-4.942 3.438-6-.016-1.057-.44-2.675-3.313-5.406-2.873-2.73-8.03-6.04-15.22-9.156-14.378-6.233-36.757-11.877-65.717-15.72-6.355-.842-12.28-1.213-17.75-1.155zM59.25 134c10.372-.29 29.217 7.2 63.906 22.656 140.925 62.786 140.52 65.876 130.97 200.656-7.783 109.81-8.797 109.85-128.47 59.282-73.15-30.91-86.806-40.853-85.187-88.97l5.468-162.937c.674-20.034 1.557-30.358 13.312-30.687zm381.938 30.906c29.172-.384 29.1 28.075 26.75 105.25-4.118 135.132-9.05 140.184-120.375 173.72-70.42 21.21-81.49 25.614-78.97-12.032l11-164.156c3.217-48.034 7.588-51.508 94.813-83.907 31.323-11.633 52.534-18.686 66.78-18.874zm-20.438 40.688c-.332-.002-.674.015-1 .03-5.22.263-10.226 2.77-14.188 8.407-3.96 5.638-6.81 14.71-5.687 27.907 1.448 17.033-4.507 38.11-15.156 56.938-10.65 18.827-26.502 35.91-47.814 38.813-29.127 3.968-42.41 23.58-43.5 42.062-.545 9.24 2.108 18.03 7.688 24.594s14.088 11.335 27.187 12.03c41.146 2.185 71.336-10.766 91.595-39.155 20.26-28.39 30.396-73.76 25.875-136.595-1.876-26.076-14.708-34.977-25-35.03zm-246.25 8.844c-.644 0-1.218.063-1.72.187-2.003.494-3.685 1.53-5.655 4.813-1.913 3.186-3.688 8.618-4.406 16.343l-.064.657c-1.388 16.732-8.098 28.602-17.844 35.063-9.745 6.46-20.794 7.808-31.125 9.094-10.33 1.286-20.177 2.39-28.156 5.75-7.977 3.36-14.36 8.38-19.468 19.78-7.2 16.076-7.143 28.027-3.124 38.563 4.018 10.537 12.688 20.106 24.687 28.75 23.998 17.29 60.27 29.956 88.906 41.844 11.386 4.727 20.496 6.484 27.282 6.126 6.787-.358 11.278-2.423 15.375-6.562 8.195-8.28 14.057-27.692 15-57.344 2.024-63.623-18.84-110.284-38.656-130.875-8.668-9.008-16.52-12.193-21.03-12.188zm184.22 6.812c-.95-.003-1.927.035-2.97.094-35.464 1.99-48.477 12.867-52.5 24.062-4.023 11.196.826 27.07 10.844 39.78 11.488 14.58 20.59 15.736 30.437 12.283 9.848-3.455 20.542-14.108 27.376-26.908s9.512-27.397 7.188-36.28c-1.163-4.443-3.144-7.422-6.47-9.626-2.908-1.928-7.274-3.388-13.905-3.406z',
		'Radiation' => 'M253.78 17.188c-130.728 0-236.905 106.177-236.905 236.906C16.875 384.824 123.052 491 253.78 491c130.73 0 236.907-106.18 236.907-236.906 0-130.73-106.177-236.906-236.906-236.906zm0 18.687c120.63 0 218.22 97.59 218.22 218.22 0 120.626-97.59 218.218-218.22 218.218-120.628 0-218.218-97.59-218.218-218.22s97.59-218.218 218.22-218.218zm101.19 46.313-76.41 132.875c15.916 9.635 25.177 26.33 26.125 43.78h148.407c1.644-70.01-33.49-138.867-98.125-176.656zm-205.126 2.468c-27.1 16.725-50.68 40.147-67.72 69.656-19.01 32.928-26.926 69.12-26 104.532H196a54.04 54.04 0 0 1 7.188-24.438c5.21-9.024 12.64-16 21.218-20.625L149.844 84.657zm100.594 141.156a36.723 36.723 0 0 0-2.594.094c-11.446.793-22.288 7.084-28.5 17.844-9.94 17.216-4.09 38.967 13.125 48.906 17.213 9.94 38.935 4.12 48.874-13.094 9.94-17.215 4.12-38.967-13.094-48.906-5.648-3.26-11.768-4.824-17.813-4.844zm28.218 82.375c-16.127 9.75-36.864 10.846-54.406 1.25l-68.03 117.22c29.454 16.785 61.044 25.177 92.75 26 34.567.898 68.72-7.786 99.124-24.032l-69.438-120.438z',
	];
	if (!isset($paths[$type])) {
		return htmlspecialchars($type) . ' ';
	}
	return '<svg class="damage-icon" viewBox="0 0 512 512" role="img" aria-label="' . $type . '" focusable="false"><title>' . $type . '</title><path d="' . $paths[$type] . '"/></svg>';
}

// A damage or resistances badge's lead circle (Font Awesome Pro solid icons):
// crosshairs for ranged and thrown weapons, a sword for other weapons, a shield
// for resistances
function sf_item_stat_lead($icon) {
	$icons = [
		'crosshairs' => ['Ranged damage', 'M224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256zM256 0C273.7 0 288 14.33 288 32V42.35C381.7 56.27 455.7 130.3 469.6 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H469.6C455.7 381.7 381.7 455.7 288 469.6V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V469.6C130.3 455.7 56.27 381.7 42.35 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H42.35C56.27 130.3 130.3 56.27 224 42.35V32C224 14.33 238.3 0 256 0V0zM224 404.6V384C224 366.3 238.3 352 256 352C273.7 352 288 366.3 288 384V404.6C346.3 392.1 392.1 346.3 404.6 288H384C366.3 288 352 273.7 352 256C352 238.3 366.3 224 384 224H404.6C392.1 165.7 346.3 119.9 288 107.4V128C288 145.7 273.7 160 256 160C238.3 160 224 145.7 224 128V107.4C165.7 119.9 119.9 165.7 107.4 224H128C145.7 224 160 238.3 160 256C160 273.7 145.7 288 128 288H107.4C119.9 346.3 165.7 392.1 224 404.6z'],
		'sword' => ['Melee damage', 'M110.1 227.6c-6.25-6.248-16.37-6.248-22.62 0l-18.75 18.75c-5.498 5.373-6.249 13.87-1.999 20.25l53.37 79.99l-53.5 53.5l-29.25-14.62c-5.375-2.748-11.75-1.623-16 2.625l-17.25 17.25c-5.5 5.375-5.5 14.25 0 19.62l82.87 82.87c5.375 5.5 14.25 5.5 19.62 0l17.25-17.25c4.25-4.25 5.375-10.62 2.625-16l-14.62-29.25l53.5-53.5l79.99 53.41c6.375 4.25 14.87 3.5 20.25-2l18.75-18.79c6.25-6.25 6.25-16.37 0-22.62L110.1 227.6zM493.7 .1497l-93.74 15.88L171.9 244.1l95.99 95.99l228.1-228.1l15.87-93.75C513.3 7.781 504.2-1.35 493.7 .1497z'],
		'shield' => ['Resists', 'M466.5 83.71l-192-80C269.6 1.67 261.3 0 256 0C250.7 0 242.5 1.67 237.6 3.702l-192 80C27.7 91.1 16 108.6 16 127.1c0 257.2 189.2 384 239.1 384c51.1 0 240-128.2 240-384C496 108.6 484.3 91.1 466.5 83.71zM256 446.5l.0234-381.1c.0059-.0234 0 0 0 0l175.9 73.17C427.8 319.7 319 417.1 256 446.5z'],
	];
	[$label, $path] = $icons[$icon];
	return '<span class="item-stat-lead"><svg viewBox="0 0 512 512" role="img" aria-label="' . $label . '" focusable="false"><title>' . $label . '</title><path d="' . $path . '"/></svg></span>';
}

// "6 Slashing / 4 Piercing" or "1 Blunt, 3 Slashing" as one badge of icons and
// numbers, with "or" between a choice's options, like the creator's item cards.
// A note on one entry, like a voidsuit's Blunt (decompression), is left to
// the item's description.
// The badge starts with $lead's circle: crosshairs, sword or shield.
function sf_item_stats($lead, $text) {
	$options = preg_split('~\s*/\s*(?=\d)~', $text);
	$html = '<span class="equipment-stats"><span class="chip equipment-stat">' . sf_item_stat_lead($lead);
	foreach ($options as $i => $option) {
		if ($i > 0) {
			$html .= '<span class="equipment-stat-or">or</span>';
		}
		foreach (explode(',', $option) as $part) {
			if (preg_match('~^\s*(-?\d+)\s+([^(]+?)\s*(?:\(([^)]*)\))?\s*$~', $part, $m)) {
				$html .= '<span class="equipment-stat-value">' . sf_damage_icon($m[2]) . $m[1] . '</span>';
			}
		}
	}
	return $html . '</span></span>';
}

// Example Items the creator tags ranged or thrown, whose damage gets the crosshairs
function sf_ranged_items() {
	return ['Crossbow', 'Rifle', 'Missile Launcher', 'Longbow'];
}

// The card: the name, its damage or resistances, the category and plane as
// chips and the value as a badge at the right, then the description under it
function sf_equipment_card($name, $category, $plane, $description, $value, $currency, $damage = '', $resistances = '') {
	$label = number_format($value) . ' ' . $currency;
	echo '<div class="equipment-box">';
	echo '<div class="equipment-row">';
	echo '<span class="equipment-name">' . htmlspecialchars($name) . '</span>';
	if ($damage) {
		echo sf_item_stats(in_array($name, sf_ranged_items(), true) ? 'crosshairs' : 'sword', $damage);
	}
	if ($resistances) {
		echo sf_item_stats('shield', $resistances);
	}
	echo '<span class="equipment-chips">';
	echo '<span class="chip">' . htmlspecialchars($category) . '</span>';
	echo '<span class="chip">' . htmlspecialchars($plane) . '</span>';
	echo '<span class="chip equipment-value" title="' . $label . '" aria-label="Value: ' . $label . '">' . sf_item_value($value) . ' ' . $currency . '</span>';
	echo '</span>';
	echo '</div>';
	echo '<p class="equipment-description">' . htmlspecialchars($description) . '</p>';
	echo '</div>';
}

// Example Items, grouped by category: [name, category, plane, description,
// value, currency, damage, resistances], the last two as the creator's
// content/items words them
function sf_example_items() {
	return [
		'Weapons' => [
			['Longsword', 'Weapon', 'Any', 'A long, straight sword wielded in one or two hands.', 600, 'ERC', '6 Slashing / 4 Piercing'],
			['Crossbow', 'Weapon', 'Any', 'A bow mounted on a stock, slow to load but easy to aim.', 500, 'ERC', '5 Piercing'],
			['Rifle', 'Weapon', 'Earth', 'A modern rifle, the standard arm of soldiers across the Settled Systems.', 1200, 'ERC', '7 Piercing'],
			['Missile Launcher', 'Weapon', 'Earth', 'A shoulder-fired tube for rockets and guided missiles.', 25000, 'ERC', '5 Blunt, 5 Heat'],
		],
		'Wearables' => [
			['Chainmail', 'Wearable', 'Any', 'A shirt of interlocking iron rings.', 1200, 'ERC', '', '1 Blunt, 3 Slashing, 1 Piercing'],
			['Ballistic Vest', 'Wearable', 'Earth', 'A modern vest with armor plates, made to stop bullets.', 800, 'ERC', '', '2 Blunt, 1 Slashing, 5 Piercing, 1 Cold'],
			['Voidsuit', 'Wearable', 'Earth', 'A sealed, pressurized suit with its own air, for working in space.', 50000, 'ERC', '', '2 Blunt (decompression), 4 Cold'],
		],
		'Equipment' => [
			['Potion Kit', 'Equipment', 'Isekai', 'Vials, a mortar and pestle, a burner, and a few common reagents.', 50, 'Luras'],
			['Healer’s Kit', 'Equipment', 'Any', 'Bandages, salves, splints, and needle and thread.', 80, 'ERC'],
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

// One example Item under each type on the Item Types tab, from the creator's
// content/items, in the same shape as sf_example_items()
function sf_item_type_examples() {
	return [
		'Wearables' => ['Power Armor', 'Wearable', 'Earth', 'A powered, sealed suit of heavy armor plates, worn like a small vehicle.', 250000, 'ERC', '', '6 Blunt, 6 Slashing, 6 Piercing, 2 Heat, 2 Cold, 2 Radiation'],
		'Equipment' => ['Grappling Hook', 'Equipment', 'Any', 'A folding hook for catching ledges and walls.', 50, 'ERC'],
		'Weapons' => ['Longbow', 'Weapon', 'Any', 'A tall bow with a heavy draw and a long reach.', 400, 'ERC', '4 Piercing'],
		'Structures' => ['Tent', 'Structure', 'Any', 'A canvas or synthetic tent for two.', 200, 'ERC'],
		'Vehicles' => ['Rowboat', 'Vehicle', 'Any', 'A small wooden boat with oars. Occupants: 4.', 1500, 'ERC'],
		'Animals, Robots, and Animal-like NPCs' => ['Pack Animal', 'Animal', 'Any', 'A sturdy animal for carrying loads or pulling a cart.', 2500, 'ERC'],
		'Misc' => ['Sling Stones', 'Misc', 'Any', 'A pouch of smooth stones or lead shot.', 5, 'ERC'],
	];
}
