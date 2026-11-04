<?php
require_once __DIR__ . '/lore.php';

// Edwin's Kind, background packages and Traits, dumped from the Character
// Creator's content and rules engine (Human, The American Empire: Earth,
// Smuggler and Gutter Trash at Level 5), so the names, effects and sources
// read as they do in the creator
$sf_sample = json_decode( file_get_contents( __DIR__ . '/sample-character.json' ), true );
$sf_e = function ( $text ) {
	return htmlspecialchars( $text, ENT_QUOTES, 'UTF-8' );
};
?>
<div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<h3 class="sub-title mb-3" id="character">Sample Character Sheet</h3>
		<div class="copy stinger black mb-3">Putting It All Together</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
<div class="d-flex flex-wrap flex-xs-nowrap">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<div class="d-flex flex-wrap flex-xs-nowrap split-cols">
			<div class="flex-7 content-stack">
				<div class="content-stack content-stack-sm">
					<h3>Musings on the process for creating a character</h3>
					<ul class="copy">
						<li>Character Level is tracked separately from focus Stats.</li>
						<li>Core Stats are listed as a single number docked to their focus Stat lines.</li>
						<li>The focus Stat lines start unfilled, and are filled in as the player adds points to them, looking at the circle or squares to know what type of Trait they gain.</li>
						<li>Characters select a Kind, Origin, Profession, and Past.</li>
						<li>The character's Kind adds a bonus to their Stats, sets their max Stats, grants any unique ability the Kind may possess, and grants access to various Trait categories.</li>
						<li>The character's Origin grants access to a starting set of Origin Traits, typically a mix of regular and Knowledge Traits. It also grants access to selectable Traits related to the Origin as well as other RP-specific things (wealth, identification, etc.). Some Origins also give a bonus point to place in one category's focus Stats, like the American Empire's +1 Physical.</li>
						<li>The character's Profession grants access to a starting set of Profession Traits, typically a mix of regular and Knowledge Traits. It also grants access to selectable Traits related to the Profession as well as other RP-specific things (Equipment, licenses, etc.).</li>
						<li>Every character's Stats start at 0, and their Kind adds 9 bonus points to their focus Stats, spread out to fit the Kind. A Human gets +1 in each focus Stat.</li>
						<li>Characters always start at Level 1 or higher, so every new character also gets their Level 1 points: 1 core point and 3 focus points to spend in that category.</li>
						<li>Since every focus point grants a Trait, characters will typically start with a set of player-selectable Traits. A Human's 9 bonus points give them 9 Universal Traits, plus the Traits from their Level 1 points, in addition to the Traits automatically granted to them by their Kind, Origin, Profession, and Past. Since they only have a point or two in each Stat, their selection will be relatively limited to less powerful and more common Traits.
						</li>
						<li>It may be preferable to start a campaign with characters at Level 2 or 3, so that they can pick out the low-level but still specialized Traits their character would possess and to help them differentiate from each other.</li>
						<li>This sample character is Level 5: 9 bonus points from its Kind, 1 from its Origin, and 15 from five Levels, so 25 focus points and 25 Traits from them. It has spent five of them as Universal Traits and six as Background Traits from its Origin’s, Profession’s and Past’s lists, and it has banked the other fourteen for in-game opportunities. Future Stat gains cannot be used to gain Knowledge Traits, though this is at the GM's discretion.
						</li>
					</ul>
				</div>
			</div>
			<div class="flex-6 content-stack">
				<div class="content-stack content-stack-sm">
					<h3>Backgrounds used in the sample character sheet</h3>
					<?php foreach ( $sf_sample['background'] as $b ) : ?>
						<div class="content-stack content-stack-sm">
							<div class="line-container">
								<h5><strong><?php echo $b['slot'] . ': ' . sf_lore_link( 'sample-' . $b['id'], $sf_e( $b['name'] ) ); ?></strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy"><?php echo $sf_e( $b['summary'] ); ?></p>
							<?php foreach ( $b['features'] as $f ) : ?>
								<div class="content-stack content-stack-xxs">
									<h6><?php echo $sf_e( $f['name'] ); ?></h6>
									<p class="copy"><?php echo $sf_e( $f['description'] ); ?></p>
								</div>
							<?php endforeach; ?>
							<?php
							// The Origin's bonus point went into Grace
							$bonus = array_map( function ( $x ) use ( $b ) { return $x . ( 'Origin' === $b['slot'] ? ', placed in Grace' : '' ); }, $b['bonus'] );
							foreach ( array( 'Bonus' => $bonus, 'Grants' => $b['grants'], 'Choose' => $b['choices'], 'Background list' => $b['backgroundList'] ) as $label => $list ) :
								if ( ! $list ) { continue; }
								?>
								<div class="content-stack content-stack-xxs">
									<h6><?php echo $label; ?></h6>
									<p class="copy"><?php echo implode( '<br>', array_map( $sf_e, $list ) ); ?></p>
								</div>
							<?php endforeach; ?>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
<div class="separator"></div>





<!-- ------------ CHARACTER SHEET ------------ -->

<div class="d-flex flex-wrap flex-xs-nowrap">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
<?php
// One stat's 20 slots, drawn as the creator's sheet draws them (StatLine in
// the creator): circles on odd points and squares on even, the Kind's bonus
// points first, then the player's, open slots up to the max and faded slots
// past it.
if ( ! function_exists( 'sf_sample_stat' ) ) {
	function sf_sample_stat( $name, $bonus, $value, $max = 15 ) {
		echo "<div class=\"sheet-stat\">\n";
		echo "\t<div class=\"tiny-text\"><strong>{$name} - {$value}</strong><span class=\"muted\"> max {$max}</span></div>\n";
		echo "\t<div class=\"stat-line\">";
		for ( $point = 1; $point <= 20; $point++ ) {
			$shape = $point % 2 ? 'dot' : 'square';
			$fill  = $point <= $value ? ( $point <= $bonus ? 'default' : 'filled' ) : ( $point <= $max ? 'empty' : 'unavailable' );
			echo "<div class=\"stat {$shape} {$fill}\"></div>";
		}
		echo "</div>\n</div>\n";
	}
}

// Each Knowledge's type as an icon in place of a "Knowledge:" or "Language:" label
$sf_knowledge_icon = '<svg class="sheet-type-icon" viewBox="0 0 640 512" role="img" aria-label="Knowledge" focusable="false"><title>Knowledge</title><path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"/></svg>';
// A Knowledge's or background card's link, opening it in the lore popup
$sf_sheet_link = function ( $key ) use ( $sf_sample, $sf_e ) {
	foreach ( array_merge( $sf_sample['background'], $sf_sample['traits'] ) as $x ) {
		if ( ( $x['slot'] ?? $x['id'] ) === $key ) {
			return sf_lore_link( 'sample-' . $x['id'], $sf_e( $x['name'] ) );
		}
	}
	return '';
};
// Knowledges, then Languages, as on the creator's sheet; the rest are cards
$sf_knowledges = array_filter( $sf_sample['traits'], function ( $t ) { return 'Knowledge' === $t['category'] && ! $t['language']; } );
$sf_languages  = array_filter( $sf_sample['traits'], function ( $t ) { return $t['language']; } );
$sf_cards      = array_filter( $sf_sample['traits'], function ( $t ) { return 'Knowledge' !== $t['category']; } );
// Where a Trait came from, in words: "a background pick (Origin)"
$sf_from = function ( $t ) {
	$from = str_replace( array( 'universal pick', 'background pick' ), array( 'a universal pick', 'a background pick' ), $t['from'] );
	return $t['badges'] ? $from . ' (' . implode( ', ', $t['badges'] ) . ')' : $from;
};
$sf_language_icon = '<svg class="sheet-type-icon" viewBox="0 0 640 512" role="img" aria-label="Language" focusable="false"><title>Language</title><path d="M416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9C387.3 320 416 291.2 416 256zM576 128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .0013v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.0073l82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128z"/></svg>';
?>
<!-- Laid out like the Character Creator's sheet: the level's blob on the
     corner, the portrait, name and description, HP, VP and SP, then the
     stats, Conditions and Items, then the Knowledges and Traits, each in a
     box of its own -->
<div class="c-sheet sample-sheet">
	<div class="level-badge" aria-label="Level 5"><span class="level-badge-label">Level</span><span class="level-badge-number">5</span></div>

	<div class="c-sheet-box sheet-head">
		<div class="sheet-head-who">
			<img loading="lazy" data-src="img/char_portrait_1.webp" alt="Edwin Humble" class="c-sheet-image sheet-portrait">
			<div class="sheet-head-main">
				<h2 class="sheet-name">Edwin Humble</h2>
				<div class="sheet-line">
					<p class="sheet-line-row">
						<span class="sheet-line-item"><span class="field-label">Kind</span><strong><?php echo $sf_sheet_link( 'Kind' ); ?></strong></span>
						<span class="sheet-line-item"><span class="field-label">Age</span><strong>30</strong></span>
						<span class="sheet-line-item"><span class="field-label">Gender</span><strong>Male</strong></span>
						<span class="sheet-line-item"><span class="field-label">Height</span><strong>6 feet</strong></span>
						<span class="sheet-line-item"><span class="field-label">Weight</span><strong>190 lbs</strong></span>
					</p>
					<p class="sheet-line-row sheet-line-stack">
						<span class="sheet-line-item"><span class="field-label">Origin</span><strong><?php echo $sf_sheet_link( 'Origin' ); ?></strong></span>
						<span class="sheet-line-item"><span class="field-label">Profession</span><strong><?php echo $sf_sheet_link( 'Profession' ); ?></strong></span>
						<span class="sheet-line-item"><span class="field-label">Past</span><strong><?php echo $sf_sheet_link( 'Past' ); ?></strong></span>
					</p>
					<p class="sheet-line-row">
						<span class="sheet-line-item"><span class="field-label">Cash</span><strong>2,000 ERC</strong></span>
						<span class="sheet-line-item"><span class="field-label">Wealth</span><strong>15,000 ERC</strong></span>
					</p>
				</div>
			</div>
		</div>
		<div class="sheet-description">
			<p>Edwin Humble is a truck driver and part-time smuggler in Earth orbit, working the American Empire’s Sol territories. Raised rough, Edwin was cared for by his mother in the teeming streets of Chicago before stowing away on his father's cargo <?php echo sf_lore_link('shuttles', 'shuttle'); ?> during one of the man's rare visits. The boy quickly learned the trade of private cargo running, both the legal and less-than-legal sides of it. After a delivery went south and his father was killed, Edwin took over the “family business” and runs a small-time cargo transportation operation under his own name, though his real income comes from what’s stored in the secret compartment at the back of the shuttle. Edwin's two goals in life are to get rich and to find out who was responsible for his father's murder.</p>
		</div>
	</div>

	<div class="c-sheet-box">
		<div class="sheet-resources">
			<div class="sheet-resource"><strong class="resource-name resource-hp" title="Hit Points">HP</strong><span class="num">17<span class="muted"> / 17</span></span></div>
			<div class="sheet-resource"><strong class="resource-name resource-vp" title="Vibe Points">VP</strong><span class="num">9<span class="muted"> / 9</span></span></div>
			<div class="sheet-resource"><strong class="resource-name resource-sp" title="Savvy Points">SP</strong><span class="num">9<span class="muted"> / 9</span></span></div>
			<div class="sheet-resource"><strong class="resource-name" title="Movement">Movement</strong><span class="num">10<span class="muted"> m</span></span></div>
		</div>
	</div>

	<div class="sheet-row">
		<!-- The resistances go here, under HP and over the stats, while the
		     sheet is a single column, and over the Conditions and Items beside
		     the stats otherwise -->
		<div class="c-sheet-box sheet-resistances sheet-resistances-first">
			<h4 class="sheet-rule">Resistances</h4>
			<ul class="sheet-resistance-list">
				<li class="sheet-resistance" tabindex="0" aria-describedby="sample-resist-a1">
					<svg class="damage-icon" viewBox="0 0 512 512" role="img" aria-label="Blunt" focusable="false"><title>Blunt</title><path d="M215.97 27.813c-2.218.04-4.35.177-6.407.375l-.532.062c-2.774.266-5.796 1.01-9.124 1.844-4.418 1.11-8.096 2.607-11.125 4.406l77.782 59.313 7.375 5.656-5.593 7.405-13.72 18.156 67.595 51.626 14.217-18.812 9.47-12.53 6.5 14.342 19.656 43.47 60.593-80.095-47.187-7.124-15.533-2.312 9.47-12.563 14.28-18.843-67.593-51.624L310.78 50.78l-5.03 6.657-7.188-4.25c-28.635-16.917-58.02-25.157-80.343-25.374a76.706 76.706 0 0 0-2.25 0zM453 127.124l-71.47 94.438 34.564 26.187c44.24-20.22 64.01-52.594 71.312-94.625l-34.406-26zm-193.688 25.03c-27.17 33.09-55.308 64.706-82.812 96.22l47.406 39.875c23.11-35.343 46.336-71.61 71.938-108.22l-36.53-27.874zM164.25 262.47c-11.355 13.115-22.564 26.254-33.5 39.5l48.375 52.717c11.707-16.6 23.107-33.515 34.438-50.687l-49.313-41.53zm-45.438 54.124a1111.646 1111.646 0 0 0-23.093 29.72l33.468 73.842c13.586-16.22 26.434-32.893 38.843-49.937l-49.218-53.626zm-35.75 47.03c-12.108 16.978-23.57 34.335-34.124 52.282L98.53 454.47a688.442 688.442 0 0 0 17.22-18.72l-32.688-72.125zm-43.437 68.688a546.43 546.43 0 0 0-14.75 29l37.375 28.313a611.184 611.184 0 0 0 23.125-21.72l-45.75-35.592z"/></svg><span class="num">1</span>
					<div class="sheet-resistance-pop" role="tooltip" id="sample-resist-a1">
						<strong class="sheet-resistance-pop-title">Blunt 1</strong>
						<ul><li><span>Sturdy Leather Jacket <span class="muted">(torso)</span></span><span class="num">1</span></li></ul>
					</div>
				</li>
				<li class="sheet-resistance" tabindex="0" aria-describedby="sample-resist-a2">
					<svg class="damage-icon" viewBox="0 0 512 512" role="img" aria-label="Slashing" focusable="false"><title>Slashing</title><path d="M275.03 20c35.223 49.563 53.59 113.64 55.69 173.47C315.154 143 289.092 88.423 250.81 48.75c40.294 79.527 51.15 172.312 37.938 256.094-12.287-75.777-40.564-159.524-92.375-227.156 29.6 70.937 36.64 149.785 24.813 221.843-8.745-51.804-25.41-107.4-52.594-158.81 13.023 54.315 12.854 107.64 3.437 159.28l21.657 6.813 15 4.718-11.28 10.908c-10.68 10.332-19.868 21.905-27.345 34.343 93.614 35.486 232.952 64.53 298.032 41.376-41.02 56.466-210.332 13.822-309.313-18.687-1.514 3.775-2.918 7.594-4.124 11.467a152.536 152.536 0 0 0-6.062 29.657l176.47 66.375c98.5 31.095 150.5-24.62 158.655-81.72C505.253 254.472 485.016 105.66 426.06 20h-22.187c40.092 65.52 66.67 154.216 60.47 255.344-8.154-79.833-42.8-157.214-98.44-219.5 38.676 85.094 56.566 185.746 34.376 288.625.057-118.816-33.1-225.865-105.092-324.47H275.03zm-110.186 1.594c41.255 29.176 74.328 74.093 97.5 120.656-7.702-46.15-21.3-86.79-44-120.656h-53.5zm176.375 0c28.882 15.143 52.096 36.614 71.28 66.78-7.14-27.79-17.217-49.85-31.438-66.78H341.22zM123.686 304.406a179.344 179.344 0 0 1-4.062 64L18.812 336.344V366l91.938 29.094a178.602 178.602 0 0 1-30.313 48.28l50.094 15.75c-3.038-24.898-1.136-49.885 6.282-73.718 7.446-23.92 20.223-46.108 37.032-65.22l-50.156-15.78z"/></svg><span class="num">1</span>
					<div class="sheet-resistance-pop" role="tooltip" id="sample-resist-a2">
						<strong class="sheet-resistance-pop-title">Slashing 1</strong>
						<ul><li><span>Sturdy Leather Jacket <span class="muted">(torso)</span></span><span class="num">1</span></li></ul>
					</div>
				</li>
			</ul>
		</div>

		<div class="c-sheet-box sheet-body">
			<div class="sheet-stats">
				<div class="sheet-group stat-group-physical">
					<div class="sheet-group-head">
						<div class="stat-badge" title="Core Stat">1</div>
						<h4 class="sheet-rule">Physical</h4>
					</div>
					<?php sf_sample_stat( 'Endurance', 1, 2 ); sf_sample_stat( 'Power', 1, 2 ); sf_sample_stat( 'Grace', 2, 3 ); ?>
				</div>
				<div class="sheet-group stat-group-social">
					<div class="sheet-group-head">
						<div class="stat-badge" title="Core Stat">2</div>
						<h4 class="sheet-rule">Social</h4>
					</div>
					<?php sf_sample_stat( 'Empathy', 1, 2 ); sf_sample_stat( 'Persuasion', 1, 3 ); sf_sample_stat( 'Demeanor', 1, 4 ); ?>
				</div>
				<div class="sheet-group stat-group-mental">
					<div class="sheet-group-head">
						<div class="stat-badge" title="Core Stat">2</div>
						<h4 class="sheet-rule">Mental</h4>
					</div>
					<?php sf_sample_stat( 'Logic', 1, 1 ); sf_sample_stat( 'Intuition', 1, 2 ); sf_sample_stat( 'Memory', 1, 6 ); ?>
				</div>
			</div>
		</div>

		<div class="sheet-side-stack">
			<div class="c-sheet-box sheet-resistances">
				<h4 class="sheet-rule">Resistances</h4>
				<ul class="sheet-resistance-list">
					<li class="sheet-resistance" tabindex="0" aria-describedby="sample-resist-b1">
						<svg class="damage-icon" viewBox="0 0 512 512" role="img" aria-label="Blunt" focusable="false"><title>Blunt</title><path d="M215.97 27.813c-2.218.04-4.35.177-6.407.375l-.532.062c-2.774.266-5.796 1.01-9.124 1.844-4.418 1.11-8.096 2.607-11.125 4.406l77.782 59.313 7.375 5.656-5.593 7.405-13.72 18.156 67.595 51.626 14.217-18.812 9.47-12.53 6.5 14.342 19.656 43.47 60.593-80.095-47.187-7.124-15.533-2.312 9.47-12.563 14.28-18.843-67.593-51.624L310.78 50.78l-5.03 6.657-7.188-4.25c-28.635-16.917-58.02-25.157-80.343-25.374a76.706 76.706 0 0 0-2.25 0zM453 127.124l-71.47 94.438 34.564 26.187c44.24-20.22 64.01-52.594 71.312-94.625l-34.406-26zm-193.688 25.03c-27.17 33.09-55.308 64.706-82.812 96.22l47.406 39.875c23.11-35.343 46.336-71.61 71.938-108.22l-36.53-27.874zM164.25 262.47c-11.355 13.115-22.564 26.254-33.5 39.5l48.375 52.717c11.707-16.6 23.107-33.515 34.438-50.687l-49.313-41.53zm-45.438 54.124a1111.646 1111.646 0 0 0-23.093 29.72l33.468 73.842c13.586-16.22 26.434-32.893 38.843-49.937l-49.218-53.626zm-35.75 47.03c-12.108 16.978-23.57 34.335-34.124 52.282L98.53 454.47a688.442 688.442 0 0 0 17.22-18.72l-32.688-72.125zm-43.437 68.688a546.43 546.43 0 0 0-14.75 29l37.375 28.313a611.184 611.184 0 0 0 23.125-21.72l-45.75-35.592z"/></svg><span class="num">1</span>
						<div class="sheet-resistance-pop" role="tooltip" id="sample-resist-b1">
							<strong class="sheet-resistance-pop-title">Blunt 1</strong>
							<ul><li><span>Sturdy Leather Jacket <span class="muted">(torso)</span></span><span class="num">1</span></li></ul>
						</div>
					</li>
					<li class="sheet-resistance" tabindex="0" aria-describedby="sample-resist-b2">
						<svg class="damage-icon" viewBox="0 0 512 512" role="img" aria-label="Slashing" focusable="false"><title>Slashing</title><path d="M275.03 20c35.223 49.563 53.59 113.64 55.69 173.47C315.154 143 289.092 88.423 250.81 48.75c40.294 79.527 51.15 172.312 37.938 256.094-12.287-75.777-40.564-159.524-92.375-227.156 29.6 70.937 36.64 149.785 24.813 221.843-8.745-51.804-25.41-107.4-52.594-158.81 13.023 54.315 12.854 107.64 3.437 159.28l21.657 6.813 15 4.718-11.28 10.908c-10.68 10.332-19.868 21.905-27.345 34.343 93.614 35.486 232.952 64.53 298.032 41.376-41.02 56.466-210.332 13.822-309.313-18.687-1.514 3.775-2.918 7.594-4.124 11.467a152.536 152.536 0 0 0-6.062 29.657l176.47 66.375c98.5 31.095 150.5-24.62 158.655-81.72C505.253 254.472 485.016 105.66 426.06 20h-22.187c40.092 65.52 66.67 154.216 60.47 255.344-8.154-79.833-42.8-157.214-98.44-219.5 38.676 85.094 56.566 185.746 34.376 288.625.057-118.816-33.1-225.865-105.092-324.47H275.03zm-110.186 1.594c41.255 29.176 74.328 74.093 97.5 120.656-7.702-46.15-21.3-86.79-44-120.656h-53.5zm176.375 0c28.882 15.143 52.096 36.614 71.28 66.78-7.14-27.79-17.217-49.85-31.438-66.78H341.22zM123.686 304.406a179.344 179.344 0 0 1-4.062 64L18.812 336.344V366l91.938 29.094a178.602 178.602 0 0 1-30.313 48.28l50.094 15.75c-3.038-24.898-1.136-49.885 6.282-73.718 7.446-23.92 20.223-46.108 37.032-65.22l-50.156-15.78z"/></svg><span class="num">1</span>
						<div class="sheet-resistance-pop" role="tooltip" id="sample-resist-b2">
							<strong class="sheet-resistance-pop-title">Slashing 1</strong>
							<ul><li><span>Sturdy Leather Jacket <span class="muted">(torso)</span></span><span class="num">1</span></li></ul>
						</div>
					</li>
				</ul>
			</div>

			<div class="sheet-side-row">
				<div class="c-sheet-box sheet-conditions">
					<h4 class="sheet-rule">Conditions</h4>
					<ul class="sheet-cards">
						<li class="trait-box sheet-condition">
							<div class="trait-name">Healthy</div>
							<p class="muted small">From HP. A character or object gains this trait while they are at their maximum HP total</p>
							<p class="copy">This Trait has no effect on its own.</p>
						</li>
					</ul>
				</div>

				<div class="c-sheet-box sheet-items">
					<h4 class="sheet-rule">Items</h4>
					<ul class="sheet-cards">
						<!-- As in the creator and Player Tools: the count in a circle on the
						     card's left edge, then Equip, the name, its resistances in one
						     badge led by a shield, the category, and the chevron that opens the card there -->
						<li class="sheet-item">
							<span class="sheet-item-count" aria-label="1 of Sturdy Leather Jacket">1</span>
							<div class="sheet-item-row">
								<span class="sheet-check" role="img" aria-label="Equipped"></span>
								<span class="sheet-item-title">Sturdy Leather Jacket</span>
								<span class="sheet-item-stats">
									<span class="chip sheet-item-stat"><span class="item-stat-lead"><svg viewBox="0 0 512 512" role="img" aria-label="Resists" focusable="false"><title>Resists</title><path d="M466.5 83.71l-192-80C269.6 1.67 261.3 0 256 0C250.7 0 242.5 1.67 237.6 3.702l-192 80C27.7 91.1 16 108.6 16 127.1c0 257.2 189.2 384 239.1 384c51.1 0 240-128.2 240-384C496 108.6 484.3 91.1 466.5 83.71zM256 446.5l.0234-381.1c.0059-.0234 0 0 0 0l175.9 73.17C427.8 319.7 319 417.1 256 446.5z"/></svg></span><span class="sheet-item-stat-value"><svg class="damage-icon" viewBox="0 0 512 512" role="img" aria-label="Blunt" focusable="false"><title>Blunt</title><path d="M215.97 27.813c-2.218.04-4.35.177-6.407.375l-.532.062c-2.774.266-5.796 1.01-9.124 1.844-4.418 1.11-8.096 2.607-11.125 4.406l77.782 59.313 7.375 5.656-5.593 7.405-13.72 18.156 67.595 51.626 14.217-18.812 9.47-12.53 6.5 14.342 19.656 43.47 60.593-80.095-47.187-7.124-15.533-2.312 9.47-12.563 14.28-18.843-67.593-51.624L310.78 50.78l-5.03 6.657-7.188-4.25c-28.635-16.917-58.02-25.157-80.343-25.374a76.706 76.706 0 0 0-2.25 0zM453 127.124l-71.47 94.438 34.564 26.187c44.24-20.22 64.01-52.594 71.312-94.625l-34.406-26zm-193.688 25.03c-27.17 33.09-55.308 64.706-82.812 96.22l47.406 39.875c23.11-35.343 46.336-71.61 71.938-108.22l-36.53-27.874zM164.25 262.47c-11.355 13.115-22.564 26.254-33.5 39.5l48.375 52.717c11.707-16.6 23.107-33.515 34.438-50.687l-49.313-41.53zm-45.438 54.124a1111.646 1111.646 0 0 0-23.093 29.72l33.468 73.842c13.586-16.22 26.434-32.893 38.843-49.937l-49.218-53.626zm-35.75 47.03c-12.108 16.978-23.57 34.335-34.124 52.282L98.53 454.47a688.442 688.442 0 0 0 17.22-18.72l-32.688-72.125zm-43.437 68.688a546.43 546.43 0 0 0-14.75 29l37.375 28.313a611.184 611.184 0 0 0 23.125-21.72l-45.75-35.592z"/></svg>1</span><span class="sheet-item-stat-value"><svg class="damage-icon" viewBox="0 0 512 512" role="img" aria-label="Slashing" focusable="false"><title>Slashing</title><path d="M275.03 20c35.223 49.563 53.59 113.64 55.69 173.47C315.154 143 289.092 88.423 250.81 48.75c40.294 79.527 51.15 172.312 37.938 256.094-12.287-75.777-40.564-159.524-92.375-227.156 29.6 70.937 36.64 149.785 24.813 221.843-8.745-51.804-25.41-107.4-52.594-158.81 13.023 54.315 12.854 107.64 3.437 159.28l21.657 6.813 15 4.718-11.28 10.908c-10.68 10.332-19.868 21.905-27.345 34.343 93.614 35.486 232.952 64.53 298.032 41.376-41.02 56.466-210.332 13.822-309.313-18.687-1.514 3.775-2.918 7.594-4.124 11.467a152.536 152.536 0 0 0-6.062 29.657l176.47 66.375c98.5 31.095 150.5-24.62 158.655-81.72C505.253 254.472 485.016 105.66 426.06 20h-22.187c40.092 65.52 66.67 154.216 60.47 255.344-8.154-79.833-42.8-157.214-98.44-219.5 38.676 85.094 56.566 185.746 34.376 288.625.057-118.816-33.1-225.865-105.092-324.47H275.03zm-110.186 1.594c41.255 29.176 74.328 74.093 97.5 120.656-7.702-46.15-21.3-86.79-44-120.656h-53.5zm176.375 0c28.882 15.143 52.096 36.614 71.28 66.78-7.14-27.79-17.217-49.85-31.438-66.78H341.22zM123.686 304.406a179.344 179.344 0 0 1-4.062 64L18.812 336.344V366l91.938 29.094a178.602 178.602 0 0 1-30.313 48.28l50.094 15.75c-3.038-24.898-1.136-49.885 6.282-73.718 7.446-23.92 20.223-46.108 37.032-65.22l-50.156-15.78z"/></svg>1</span></span>
								</span>
								<span class="chip">Armor</span>
								<svg class="sheet-item-chevron" viewBox="0 0 12 8" aria-hidden="true" focusable="false"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="sheet-lower">
		<div class="c-sheet-box sheet-side">
			<h3 class="sheet-subhead">Knowledges</h3>
			<ul class="sheet-knowledges">
				<?php foreach ( $sf_knowledges as $t ) { echo '<li>' . $sf_knowledge_icon . ' ' . $sf_sheet_link( $t['id'] ) . "</li>\n"; } ?>
				<?php foreach ( $sf_languages as $t ) { echo '<li>' . $sf_language_icon . ' ' . $sf_sheet_link( $t['id'] ) . "</li>\n"; } ?>
			</ul>
		</div>
		<div class="c-sheet-box">
			<h3 class="sheet-subhead">Traits</h3>
			<p class="sheet-banked"><?php echo $sf_sample['picks']['universal']; ?> universal and <?php echo $sf_sample['picks']['background']; ?> background picks available</p>
			<ul class="sheet-traits">
				<?php foreach ( $sf_cards as $t ) : ?>
					<li class="trait-box">
						<div class="trait-name trait-name-with-chip"><span><?php echo $sf_e( $t['name'] ); ?></span><span class="trait-name-chips"><?php foreach ( array_merge( $t['badges'], array( $t['category'] ) ) as $chip ) { echo '<span class="chip">' . $chip . '</span>'; } ?></span></div>
						<p class="copy"><?php echo $sf_e( $t['effect'] ); ?></p>
						<p class="muted small">From <?php echo $sf_e( $sf_from( $t ) ); ?></p>
					</li>
				<?php endforeach; ?>
			</ul>
		</div>
	</div>
</div>

<!-- What the sheet's Knowledges and background links open in the lore popup -->
<div hidden>
	<?php foreach ( array_merge( $sf_knowledges, $sf_languages ) as $t ) : ?>
		<div id="lore-sample-<?php echo $t['id']; ?>">
			<h4 class="lore-title"><?php echo $sf_e( $t['name'] ); ?></h4>
			<div class="lore-body">
				<p class="copy"><?php echo $sf_e( $t['effect'] ); ?></p>
				<p class="copy small mb-0">Knowledge. From <?php echo $sf_e( $sf_from( $t ) ); ?>.</p>
			</div>
		</div>
	<?php endforeach; ?>
	<?php foreach ( $sf_sample['background'] as $b ) : ?>
		<div id="lore-sample-<?php echo $b['id']; ?>">
			<h4 class="lore-title"><?php echo $sf_e( $b['name'] ); ?></h4>
			<div class="lore-body">
				<p class="copy"><strong><?php echo $b['slot']; ?>.</strong> <?php echo $sf_e( $b['summary'] ); ?></p>
				<?php foreach ( $b['features'] as $f ) : ?>
					<p class="copy"><strong><?php echo $sf_e( $f['name'] ); ?>.</strong> <?php echo $sf_e( $f['description'] ); ?></p>
				<?php endforeach; ?>
				<?php foreach ( array( 'Bonus' => $b['bonus'], 'Grants' => $b['grants'], 'Choose' => $b['choices'], 'Background list' => $b['backgroundList'] ) as $label => $list ) : ?>
					<?php if ( $list ) : ?>
						<p class="copy"><strong><?php echo $label; ?>:</strong> <?php echo $sf_e( implode( ', ', $list ) ); ?></p>
					<?php endif; ?>
				<?php endforeach; ?>
				<?php if ( $b['lore'] ) : ?>
					<p class="copy">More in the lore: <?php echo sf_lore_link( $b['lore'], sf_lore_titles()[ $b['lore'] ] ?? $b['lore'] ); ?></p>
				<?php endif; ?>
			</div>
		</div>
	<?php endforeach; ?>
</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>