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
<div class="breakout shadow-diffuse black-bg white-text">
<?php $rpgLinksTone = 'white'; include 'php/rpg/rpg-links.php'; ?>
<div class="separator"></div>
<div class="container">
<div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<h3 class="sub-title mb-3" id="character">Sample Character Sheet</h3>
		<div class="copy stinger white mb-3">Putting It All Together</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
<div class="d-flex flex-wrap flex-xs-nowrap">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<!-- Building a Character leads the section, as in the Mechanics Doc,
		     with the backgrounds Edwin uses (from the creator) beside it -->
		<div class="d-flex flex-wrap flex-xs-nowrap split-cols">
		<div class="flex-7 content-stack content-stack-sm">
			<h3>Building a Character</h3>
			<p class="copy">The sheet below belongs to Edwin Humble, a Level 5 Human smuggler, and shows how the systems in this section come together on a finished character. Every character is built from four Backgrounds, a starting set of Stat points, and the Traits those points grant.</p>
			<p class="copy">Every character selects a Kind, Origin, Profession, and Past. Together these Backgrounds set a character’s starting Stats and Traits and tie them to the world:</p>
			<ul class="copy">
				<li><strong>Kind</strong> is what the character is. It adds 9 bonus points to their focus Stats, spread out to fit the Kind, and sets their maximum Stats. It also grants any unique abilities the Kind possesses and determines which kinds of Traits they can take. Humans get +1 in each focus Stat, cannot exceed 15 in any focus Stat, and can take (Cybernetic) and genetic engineering Traits.</li>
				<li><strong>Origin</strong> is where the character comes from. It grants a starting set of Traits, typically a mix of Skill and Knowledge Traits, and opens selectable Traits related to the Origin. It also covers RP details like wealth and identification. Some Origins give a bonus point to place in one category’s focus Stats, like the American Empire’s +1 Physical.</li>
				<li><strong>Profession</strong> is what the character does. It grants a starting set of Traits, opens selectable Traits related to the Profession, and covers RP details like Equipment and licenses.</li>
				<li><strong>Past</strong> is how the character grew up. Like a Profession, it grants a starting set of Traits and opens selectable Traits related to it.</li>
			</ul>
			<p class="copy">Every character’s Stats start at 0 before their Kind’s bonus points are added. Characters always start at Level 1 or higher, so every new character also gets their Level 1 points: 1 core point and the 3 focus points that come with it. Since every focus point grants a Trait, a new character begins with a set of Traits they choose, on top of the ones their Backgrounds grant automatically. A starting Human, for example, has 9 Universal Traits from their Kind’s bonus points plus the Traits from their Level 1 points. With only a point or two in each Stat, these early picks are limited to less powerful and more common Traits. A GM may prefer to start a campaign at Level 2 or 3 so players can pick out the low-level but still specialized Traits that help their characters stand apart from each other.</p>
			<p class="copy">Reading the sheet:</p>
			<ul class="copy">
				<li>Level is tracked at the top, separately from Stats.</li>
				<li>Each core Stat is shown as a single number beside its category, like Physical (1), with its focus Stats listed below it.</li>
				<li>Each focus Stat’s dot bar starts empty and fills in as points are added. A circle or square shows whether that point granted a Universal or a Background Trait.</li>
				<li>Traits are grouped into Knowledges, Abilities, and Skills. Numbers in parentheses are a Trait’s Rank.</li>
				<li>Picks available are Traits the character has banked for in-game opportunities.</li>
			</ul>
			<p class="copy">Edwin’s 25 focus points come from his Kind (9), his Origin (1), and five Levels (15), and each one granted a Trait. He spent six of those as Universal Traits and six as Background Traits from his Backgrounds’ lists, including the Spanish and Mandarin Languages, and banked the other thirteen for in-game opportunities. One of those has since gone to Eagle Eye, a Conveyed Ability he gained in play, leaving twelve. Spending Traits on Knowledges this way is allowed because he’s a freshly created character. Future Stat gains can’t be used to gain Knowledge Traits, though this is at the GM’s discretion.</p>
		</div>
		<div class="flex-6 content-stack">
			<h3>Backgrounds used in the sample character sheet</h3>
			<!-- Each background as the creator's card: its name with what it is
			     and its setting as badges, the summary and features, then what it
			     gives as labeled rows of badges -->
			<div class="content-stack content-stack-xs">
				<?php foreach ( $sf_sample['background'] as $b ) : ?>
					<div class="trait-box sample-bg-card">
						<div class="trait-name trait-name-with-chip">
							<span><?php echo $sf_e( $b['name'] ); ?></span>
							<span class="trait-name-chips"><span class="chip"><?php echo $b['slot']; ?></span><span class="chip chip-muted"><?php echo $sf_e( $b['plane'] ); ?></span></span>
						</div>
						<p class="copy"><?php echo $sf_e( $b['summary'] ); ?></p>
						<?php foreach ( $b['features'] as $f ) : ?>
							<p class="copy"><strong><?php echo $sf_e( $f['name'] ); ?>.</strong> <?php echo $sf_e( $f['description'] ); ?></p>
						<?php endforeach; ?>
						<?php
						// The Origin's bonus point went into Grace
						$bonus = array_map( function ( $x ) use ( $b ) { return $x . ( 'Origin' === $b['slot'] ? ', placed in Grace' : '' ); }, $b['bonus'] );
						$rows  = array_filter( array( 'Bonus' => $bonus, 'Grants' => $b['grants'], 'Choose' => $b['choices'], 'Background list' => $b['backgroundList'] ) );
						?>
						<?php if ( $rows ) : ?>
							<div class="sample-bg-grants">
								<?php foreach ( $rows as $label => $list ) : ?>
									<div>
										<span class="sample-bg-label"><?php echo $label; ?></span>
										<?php foreach ( $list as $x ) { echo '<span class="chip' . ( in_array( $label, array( 'Bonus', 'Grants' ), true ) ? ' chip-accent' : '' ) . '">' . $sf_e( $x ) . '</span>'; } ?>
									</div>
								<?php endforeach; ?>
							</div>
						<?php endif; ?>
						<?php if ( $b['lore'] ) : ?>
							<p class="copy small">More in the lore: <?php echo sf_lore_link( $b['lore'], sf_lore_titles()[ $b['lore'] ] ?? $b['lore'] ); ?></p>
						<?php endif; ?>
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
// Where a Trait came from, in words: "a background pick"
$sf_from = function ( $t ) {
	return str_replace( array( 'universal pick', 'background pick' ), array( 'a universal pick', 'a background pick' ), $t['from'] );
};
// The cards by category, as the creator's sheet boxes them
$sf_abilities = array_filter( $sf_cards, function ( $t ) { return 'Ability' === $t['category']; } );
$sf_skills    = array_filter( $sf_cards, function ( $t ) { return 'Skill' === $t['category']; } );
$sf_other     = array_filter( $sf_cards, function ( $t ) { return ! in_array( $t['category'], array( 'Ability', 'Skill' ), true ); } );
// Movement's small box, left of the resistances, as in the creator: its
// ruled title, then a running figure (the creator's person-running icon)
// before the number, which runs into its unit
$sf_move_box = '<div class="c-sheet-box sheet-movement"><h4 class="sheet-rule" title="Movement">Move</h4><div class="sheet-movement-value" title="Movement"><svg class="sheet-movement-icon" viewBox="0 0 448 512" role="img" aria-label="Movement" focusable="false"><title>Movement</title><path d="M400 224h-44l-26.12-53.25c-12.5-25.5-35.38-44.25-61.75-51L197 98.63C189.5 96.84 181.1 95.97 174.5 95.97c-20.88 0-41.33 6.81-58.26 19.78L76.5 146.3C68.31 152.5 64.01 162 64.01 171.6c0 17.11 13.67 32.02 32.02 32.02c6.808 0 13.67-2.158 19.47-6.616l39.63-30.38c5.92-4.488 13.01-6.787 19.53-6.787c2.017 0 3.981 .2196 5.841 .6623l14.62 4.25l-37.5 87.5C154.1 260.3 152.5 268.8 152.5 277.2c0 22.09 11.49 43.52 31.51 55.29l85 50.13l-27.5 87.75c-.9875 3.174-1.458 6.388-1.458 9.55c0 13.65 8.757 26.31 22.46 30.58C265.6 511.5 268.9 512 272 512c13.62 0 26.25-8.75 30.5-22.5l31.75-101c1.211-4.278 1.796-8.625 1.796-12.93c0-16.57-8.661-32.51-23.55-41.44l-61.13-36.12l31.25-78.38l20.25 41.5C310.9 277.4 327.9 288 345.1 288H400c17.62 0 32-14.38 32-32C432 238.3 417.6 224 400 224zM288 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48S261.5 96 288 96zM129.8 317.5L114.9 352H48c-17.62 0-32 14.38-32 32s14.38 32 32 32h77.5c19.25 0 36.5-11.5 44-29.12l8.875-20.5l-10.75-6.25C150.4 349.9 137.6 334.8 129.8 317.5z"/></svg><span class="num">10<span class="sheet-movement-unit">m</span></span></div></div>';
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
		</div>
	</div>

	<div class="sheet-row">
		<!-- The resistances go here, under HP and over the stats, while the
		     sheet is a single column, and over the Conditions and Items beside
		     the stats otherwise -->
		<div class="sheet-move-row sheet-resistances-first">
			<?php echo $sf_move_box; ?>
			<div class="c-sheet-box sheet-resistances">
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
			<div class="sheet-move-row">
			<?php echo $sf_move_box; ?>
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
						<li class="sheet-item">
							<span class="sheet-item-count" aria-label="1 of Pistol">1</span>
							<div class="sheet-item-row">
								<span class="sheet-check" role="img" aria-label="Equipped"></span>
								<span class="sheet-item-title">Pistol</span>
								<span class="sheet-item-stats"><span class="chip sheet-item-stat"><span class="item-stat-lead"><svg viewBox="0 0 512 512" role="img" aria-label="Ranged damage" focusable="false"><title>Ranged damage</title><path d="M145.7 286.9l45.25-45.14L100.5 151.3C128.2 136.1 159.5 128 191.1 128c31.1 0 62.88 7.749 90.38 22.5l46.63-46.62c-40.62-25.87-87.76-39.87-137-39.87c-49.75 0-97.26 14.25-138.1 40.62l-3.875-3.873C46.83 97.63 42.7 96.06 38.57 96.06c-4.108 0-8.209 1.558-11.33 4.675l-22.54 22.51C1.586 126.4 .023 130.5 .023 134.6c0 4.113 1.565 8.226 4.692 11.35L145.7 286.9zM408.1 182.4l-46.63 46.62c14.75 27.49 22.5 58.24 22.5 90.36c0 32.49-8.126 63.74-23.25 91.48l-90.5-90.61l-45.25 45.24l141.8 141.8c3.125 3.124 7.22 4.687 11.31 4.687s8.188-1.563 11.31-4.687l22.62-22.62c3.125-3.124 4.688-7.249 4.688-11.37c0-4.124-1.563-8.249-4.688-11.37l-4.625-4.498c26.37-40.87 40.63-88.36 40.63-138.1C447.1 269.1 433.1 222.1 408.1 182.4zM512 15.64c0-8.634-7.093-15.64-15.72-15.64c-1.004 0-2.015 .0896-3.053 .29l-128.6 25.75c-7.885 1.609-12.61 8.447-12.61 15.47c0 3.89 1.449 7.831 4.612 10.99l34.5 34.5L140.5 337.6l-49.75-16.7c-2.104-.6776-4.349-1.006-6.497-1.006c-5.38 0-10.57 2.076-14.5 6.006l-63.75 63.82C1.901 393.8 0 399 0 404.1c0 8.377 5.1 16.6 14.1 19.62l55.62 18.5L88.22 497.9c3.027 9.001 11.24 14.12 19.65 14.12c5.134 0 10.35-1.923 14.47-5.997l63.62-63.74c3.93-3.93 6.011-9.191 6.011-14.57c0-2.148-.3325-4.323-1.01-6.427L174.4 371.4l250.6-250.5l34.5 34.47c3.162 3.161 7.11 4.639 11.01 4.639c7.037 0 13.88-4.755 15.49-12.64l25.72-128.6C511.9 17.75 512 16.65 512 15.64z"/></svg></span><span class="sheet-item-stat-value"><svg class="damage-icon" viewBox="0 0 512 512" role="img" aria-label="Piercing" focusable="false"><title>Piercing</title><path d="M242.5 21.5c-25.192 3.245-47.28 32.016-47.28 68.78 0 20.28 7.038 38.25 17.5 50.75l10.25 12.25-15.69 2.94c-6.058 1.128-11.42 3.163-16.25 6.093l50.907 29.343.22.125c10.092 5.547 17.387 12.847 21.687 20.72 4.332 7.932 5.865 16.78 2.562 24.75-3.302 7.97-12.133 13.29-21.687 13.344-9.457.054-20.02-3.703-32.345-11.5-.13-.082-.245-.136-.375-.22l-52.313-30.06a192.847 192.847 0 0 0-4.156 14.56c-8.238 33.626-9.925 74.615-10.155 110.407H189.5l.625 8.626 11.28 149.78 96.69.002 9.935-149.69.564-8.72h42c-.013-36.18-.378-77.737-7.844-111.624-4.05-18.384-10.197-34.295-18.813-45.75-8.615-11.454-19.257-18.706-34.593-21.062l-16-2.438L283.5 140.25c10.008-12.437 16.72-30.183 16.72-49.97-.002-39.2-24.78-68.718-52.5-68.718-2.913 0-4.762-.12-5.22-.062zM20.812 85.78v21.626l200.875 115.5.188.094.188.125c10.573 6.74 18.416 8.805 22.53 8.78 4.115-.022 4.113-.724 4.563-1.81.45-1.09.63-4.324-1.72-8.626-2.348-4.304-7.01-9.363-14.436-13.407l-.094-.032-.094-.06-212-122.19zm396.97 187.626-15.626 28.22-33.656-19.063c.355 8.144.576 16.234.688 24.187l22.906 13.03-15.47 27.94 114.97 15.124-73.813-89.438z"/></svg>7</span></span></span>
								<span class="chip">Weapon</span>
								<svg class="sheet-item-chevron" viewBox="0 0 12 8" aria-hidden="true" focusable="false"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
							</div>
						</li>
						<li class="sheet-item">
							<span class="sheet-item-count" aria-label="1 of Disguise Kit">1</span>
							<div class="sheet-item-row">
								<span class="sheet-check is-off" role="img" aria-label="Not equipped"></span>
								<span class="sheet-item-title">Disguise Kit</span>
								<span class="chip">Gear</span>
								<svg class="sheet-item-chevron" viewBox="0 0 12 8" aria-hidden="true" focusable="false"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
							</div>
						</li>
						<li class="sheet-item">
							<span class="sheet-item-count" aria-label="1 of Comm Unit">1</span>
							<div class="sheet-item-row">
								<span class="sheet-check is-off" role="img" aria-label="Not equipped"></span>
								<span class="sheet-item-title">Comm Unit</span>
								<span class="chip">Gear</span>
								<svg class="sheet-item-chevron" viewBox="0 0 12 8" aria-hidden="true" focusable="false"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- The Knowledges, then the Abilities and the Skills, each a box along
	     the row, as in the creator. Skill cards start closed to their name and
	     open from the chevron; a card's category sits in its body. -->
	<div class="sheet-lower">
		<div class="c-sheet-box sheet-side">
			<h3 class="sheet-rule sheet-subhead">Knowledges</h3>
			<ul class="sheet-knowledges">
				<?php foreach ( $sf_knowledges as $t ) { echo '<li>' . $sf_knowledge_icon . ' ' . $sf_sheet_link( $t['id'] ) . "</li>\n"; } ?>
				<?php foreach ( $sf_languages as $t ) { echo '<li>' . $sf_language_icon . ' ' . $sf_sheet_link( $t['id'] ) . "</li>\n"; } ?>
			</ul>
		</div>
		<div class="c-sheet-box sheet-abilities">
			<h3 class="sheet-rule sheet-subhead">Abilities</h3>
			<?php if ( $sf_abilities ) : ?>
				<ul class="sheet-traits">
					<?php foreach ( $sf_abilities as $t ) : ?>
						<li class="trait-box">
							<div class="trait-name"><?php echo $sf_e( $t['name'] ); ?></div>
							<div class="trait-card-badges"><span class="chip"><?php echo $t['category']; ?></span><span class="muted small trait-card-from">From <?php echo $sf_e( $sf_from( $t ) ); ?></span></div>
							<p class="copy"><?php echo $sf_e( $t['effect'] ); ?></p>
						</li>
					<?php endforeach; ?>
				</ul>
			<?php else : ?>
				<p class="sheet-empty">No Abilities yet.</p>
			<?php endif; ?>
		</div>
		<div class="c-sheet-box sheet-skills">
			<!-- The Skills title, then along its line the picks left, together -->
			<div class="sheet-traits-head">
				<h3 class="sheet-rule sheet-subhead">Skills</h3>
				<?php $sf_picks = $sf_sample['picks']['universal'] + $sf_sample['picks']['background']; ?>
				<span class="sheet-banked"><?php echo $sf_picks . ( 1 === $sf_picks ? ' pick' : ' picks' ); ?> available</span>
			</div>
			<ul class="sheet-traits">
				<?php foreach ( $sf_skills as $t ) : ?>
					<li>
						<details class="trait-box">
							<summary class="trait-name trait-name-with-chip"><span><?php echo $sf_e( $t['name'] ); ?></span><svg class="sheet-trait-chevron" viewBox="0 0 12 8" aria-hidden="true" focusable="false"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></summary>
							<div class="trait-card-badges"><span class="chip"><?php echo $t['category']; ?></span><span class="muted small trait-card-from">From <?php echo $sf_e( $sf_from( $t ) ); ?></span></div>
							<p class="copy"><?php echo $sf_e( $t['effect'] ); ?></p>
						</details>
					</li>
				<?php endforeach; ?>
			</ul>
		</div>
		<?php if ( $sf_other ) : ?>
			<div class="c-sheet-box sheet-other">
				<h3 class="sheet-rule sheet-subhead">Other Traits</h3>
				<ul class="sheet-traits">
					<?php foreach ( $sf_other as $t ) : ?>
						<li class="trait-box">
							<div class="trait-name"><?php echo $sf_e( $t['name'] ); ?></div>
							<div class="trait-card-badges"><span class="chip"><?php echo $t['category']; ?></span><span class="muted small trait-card-from">From <?php echo $sf_e( $sf_from( $t ) ); ?></span></div>
							<p class="copy"><?php echo $sf_e( $t['effect'] ); ?></p>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
		<?php endif; ?>
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
</div>
<div class="separator"></div>
</div>
