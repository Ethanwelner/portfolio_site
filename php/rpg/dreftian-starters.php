<p class="copy mb-5">
	Starter packages for characters from Dreft. These are placeholders: Trait lists are still being worked out, and names will change. Stats are listed as Kind bonus / maximum. For comparison, a Human gets +1 to every focus Stat and can’t raise any above 15. Each Kind here gives the same 9 bonus points and the same total of maximums, spread to fit the Kind. Every Kind here but the Orcoid Tatot is born with Magical Heritage, which gives them Magic Access: they can put Levels into the Magic core Stat and take Magic Traits.
</p>
<?php
// The Kinds and Backgrounds of Dreft as the creator's cards, from its
// content (php/rpg/dreftian-backgrounds.json, built by scripts/dreftian-backgrounds.cjs from the creator's
// content/kinds/dreft and the dreft Origins, Professions and Pasts)
include_once __DIR__ . '/background-card.php';
$sf_dreft = json_decode( file_get_contents( __DIR__ . '/dreftian-backgrounds.json' ), true );
// Kinds in two columns
$sf_dreft_card_cols = function ( $cols ) use ( $sf_dreft ) {
	echo '<div class="d-flex flex-wrap flex-xs-nowrap split-cols">';
	foreach ( $cols as $i => $col ) {
		echo '<div class="' . ( $i ? 'flex-6' : 'flex-7' ) . ' content-stack content-stack-xs">';
		foreach ( $col as $title => $list ) {
			if ( $title ) {
				echo '<div class="line-container"><h5><strong>' . $title . '</strong></h5><div class="line"></div></div>';
			}
			foreach ( $list as $b ) {
				sf_background_card( $b );
			}
		}
		echo '</div>';
	}
	echo '</div>';
};
$sf_kinds_half = (int) ceil( count( $sf_dreft['kinds'] ) / 2 );
?>
<div class="tech-fields">
	<div class="tech-field-tab-list" role="tablist" aria-label="Building a Dreftian">
		<button type="button" class="tech-field-tab is-active" role="tab" id="tab-dreft-kinds" aria-controls="dreft-kinds" aria-selected="true">Kinds</button>
		<button type="button" class="tech-field-tab" role="tab" id="tab-dreft-backgrounds" aria-controls="dreft-backgrounds" aria-selected="false">Backgrounds</button>
		<button type="button" class="tech-field-tab" role="tab" id="tab-dreft-characters" aria-controls="dreft-characters" aria-selected="false">Characters</button>
	</div>
	<div class="tech-field-panel is-active" id="dreft-kinds" role="tabpanel" aria-labelledby="tab-dreft-kinds">
		<?php $sf_dreft_card_cols( array( array( '' => array_slice( $sf_dreft['kinds'], 0, $sf_kinds_half ) ), array( '' => array_slice( $sf_dreft['kinds'], $sf_kinds_half ) ) ) ); ?>
	</div>
	<div class="tech-field-panel" id="dreft-backgrounds" role="tabpanel" aria-labelledby="tab-dreft-backgrounds">
		<div class="content-stack">
			<?php foreach ( array( 'Origins' => 'origins', 'Professions' => 'professions', 'Pasts' => 'pasts' ) as $title => $key ) : ?>
			<div class="content-stack content-stack-xs">
				<div class="line-container">
					<h5><strong><?php echo $title; ?></strong></h5>
					<div class="line"></div>
				</div>
				<div class="bg-card-grid">
					<?php foreach ( $sf_dreft[ $key ] as $b ) { sf_background_card( $b ); } ?>
				</div>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
	<div class="tech-field-panel" id="dreft-characters" role="tabpanel" aria-labelledby="tab-dreft-characters">
		<p class="copy mb-0">Content coming soon</p>
	</div>
</div>
