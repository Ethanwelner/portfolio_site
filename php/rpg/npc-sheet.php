<?php
// A compact sheet for NPCs and monsters: the name and what it is, HP, VP, SP
// and Movement, the three core Stats with their focus Stats as numbers, then
// its Attacks and its Traits. Built from the Murk Legs profile in the
// Strange Frontiers doc's To Do tab. HP, VP and SP follow the creator
// (src/engine/validate.ts): HP is 10 plus the Physical focus Stats, VP the
// Social focus Stats, SP the Mental focus Stats.
require_once __DIR__ . '/components/cards.php';
require_once __DIR__ . '/core-stat-icons.php';

if ( ! function_exists( 'sf_npc_sheet' ) ) {
	function sf_npc_sheet( $npc ) {
		$e     = function ( $text ) {
			return htmlspecialchars( $text, ENT_QUOTES, 'UTF-8' );
		};
		$focus = array(
			'physical' => array( 'Endurance', 'Power', 'Grace' ),
			'social'   => array( 'Empathy', 'Persuasion', 'Demeanor' ),
			'mental'   => array( 'Logic', 'Intuition', 'Memory' ),
		);
		$sum   = function ( $group ) use ( $npc, $focus ) {
			$total = 0;
			foreach ( $focus[ $group ] as $stat ) {
				$total += $npc['stats'][ $stat ];
			}
			return $total;
		};
		$resources = array(
			array( 'hp', 'Hit Points', 'HP', 10 + $sum( 'physical' ) ),
			array( 'vp', 'Vibe Points', 'VP', $sum( 'social' ) ),
			array( 'sp', 'Savvy Points', 'SP', $sum( 'mental' ) ),
		);
		?>
		<div class="c-sheet npc-sheet">
			<div class="npc-sheet-head">
				<div>
					<h5 class="npc-sheet-name"><?php echo $e( $npc['name'] ); ?></h5>
					<p class="npc-sheet-kind"><?php echo $e( $npc['kind'] ); ?></p>
				</div>
				<div class="npc-sheet-resources">
					<?php foreach ( $resources as $r ) : ?>
						<span class="npc-sheet-resource"><strong class="resource-name resource-<?php echo $r[0]; ?>" title="<?php echo $r[1]; ?>"><?php echo $r[2]; ?></strong><span class="num"><?php echo $r[3]; ?></span></span>
					<?php endforeach; ?>
					<span class="npc-sheet-resource"><strong title="Movement">Move</strong><span class="num"><?php echo $e( $npc['move'] ); ?></span></span>
				</div>
			</div>

			<div class="npc-sheet-stats">
				<?php foreach ( array( 'physical' => 'Physical', 'social' => 'Social', 'mental' => 'Mental' ) as $group => $label ) : ?>
					<div class="c-sheet-box npc-sheet-group stat-group-<?php echo $group; ?>">
						<div class="npc-sheet-core">
							<div class="stat-badge" title="Core Stat"><?php sf_core_stat_icon( $group ); ?></div>
							<strong><?php echo $label; ?></strong><span class="num"><?php echo $npc['stats'][ $label ]; ?></span>
						</div>
						<dl class="npc-sheet-focus">
							<?php foreach ( $focus[ $group ] as $stat ) : ?>
								<div><dt><?php echo $stat; ?></dt><dd class="num"><?php echo $npc['stats'][ $stat ]; ?></dd></div>
							<?php endforeach; ?>
						</dl>
					</div>
				<?php endforeach; ?>
			</div>

			<?php if ( ! empty( $npc['attacks'] ) ) : ?>
				<div class="c-sheet-box">
					<h6 class="npc-sheet-rule">Attacks</h6>
					<!-- Each Attack is an item card (php/rpg/components/cards.php) -->
					<ul class="npc-sheet-list">
						<?php foreach ( $npc['attacks'] as $a ) : ?>
							<li><?php sf_card_item( $a ); ?></li>
						<?php endforeach; ?>
					</ul>
				</div>
			<?php endif; ?>

			<?php if ( ! empty( $npc['traits'] ) ) : ?>
				<div class="c-sheet-box">
					<h6 class="npc-sheet-rule">Traits</h6>
					<!-- Each Trait is a trait card (php/rpg/components/cards.php) -->
					<ul class="npc-sheet-list">
						<?php foreach ( $npc['traits'] as $t ) : ?>
							<li><?php sf_card_trait( $t ); ?></li>
						<?php endforeach; ?>
					</ul>
				</div>
			<?php endif; ?>
		</div>
		<?php
	}
}
