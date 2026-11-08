<?php
// A Background as the creator's card: its name with what it is and its
// setting as chips, the summary and features, then what it gives as labeled
// rows of chips, and a Kind's Stats as bonus / maximum. Used beside the
// sample character sheet (rpg-character.php) and in Building a Dreftian
// (dreftian-starters.php). $bonusNote is added to each Bonus, like Edwin's
// "placed in Grace".
if ( ! function_exists( 'sf_background_card' ) ) {
	function sf_background_card( $b, $bonusNote = '' ) {
		$e     = function ( $s ) { return htmlspecialchars( $s, ENT_QUOTES, 'UTF-8' ); };
		$bonus = array_map( function ( $x ) use ( $bonusNote ) { return $x . $bonusNote; }, $b['bonus'] );
		$rows  = array( 'Bonus' => $bonus, 'Grants' => $b['grants'], 'Choose' => $b['choices'], 'Background list' => $b['backgroundList'] );
		if ( ! empty( $b['stats'] ) ) {
			$groups = array( 'Physical' => array( 'endurance', 'power', 'grace' ), 'Social' => array( 'empathy', 'persuasion', 'demeanor' ), 'Mental' => array( 'logic', 'intuition', 'memory' ) );
			foreach ( $groups as $group => $stats ) {
				$rows[ $group . ' (bonus / maximum)' ] = array_map( function ( $s ) use ( $b ) { $x = $b['stats'][ $s ]; return ucfirst( $s ) . ' +' . $x['bonus'] . '/' . $x['max']; }, $stats );
			}
		}
		$rows = array_filter( $rows );
		// A Kind's lore entry shares the first word of its id (tatot-orcoid is Tatot)
		$lore = $b['lore'];
		if ( ! $lore && 'Kind' === $b['slot'] && isset( sf_lore_titles()[ strtok( $b['id'], '-' ) ] ) ) {
			$lore = strtok( $b['id'], '-' );
		}
		?>
		<div class="trait-box sample-bg-card">
			<div class="trait-name trait-name-with-chip">
				<span><?php echo $e( $b['name'] ); ?></span>
				<span class="trait-name-chips"><span class="chip"><?php echo $b['slot']; ?></span><span class="chip chip-muted"><?php echo $e( ucfirst( $b['plane'] ) ); ?></span></span>
			</div>
			<p class="copy"><?php echo $e( $b['summary'] ); ?></p>
			<?php foreach ( $b['features'] as $f ) : ?>
				<p class="copy"><strong><?php echo $e( $f['name'] ); ?>.</strong> <?php echo $e( $f['description'] ); ?></p>
			<?php endforeach; ?>
			<?php if ( $rows ) : ?>
				<div class="sample-bg-grants">
					<?php foreach ( $rows as $label => $list ) : ?>
						<div>
							<span class="sample-bg-label"><?php echo $label; ?></span>
							<?php foreach ( $list as $x ) { echo '<span class="chip' . ( in_array( $label, array( 'Bonus', 'Grants' ), true ) ? ' chip-accent' : '' ) . '">' . $e( $x ) . '</span>'; } ?>
						</div>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
			<?php if ( $lore ) : ?>
				<p class="copy small">More in the lore: <?php echo sf_lore_link( $lore, sf_lore_titles()[ $lore ] ?? $lore ); ?></p>
			<?php endif; ?>
		</div>
		<?php
	}
}
