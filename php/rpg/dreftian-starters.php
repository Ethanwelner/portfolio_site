<p class="copy mb-5">
	Starter packages for characters from Dreft. These are placeholders: Trait lists are still being worked out, and names will change. Stats are listed as Kind bonus / maximum. For comparison, a Human gets +1 to every focus Stat and can’t raise any above 15. Each Kind here gives the same 9 bonus points and the same total of maximums, spread to fit the Kind. Every Kind here but the Orcoid Tatot is born with Magical Heritage, which gives them Magic Access: they can put Levels into the Magic core Stat and take Magic Traits.
</p>
<?php
// The Kinds and Backgrounds of Dreft as the creator's cards, from its
// content (php/rpg/dreftian-backgrounds.json, built by scripts/dreftian-backgrounds.cjs from the creator's
// content/kinds/dreft and the dreft Origins, Professions and Pasts)
include_once __DIR__ . '/background-card.php';
$sf_dreft = json_decode( file_get_contents( __DIR__ . '/dreftian-backgrounds.json' ), true );
$sf_dreft_cols = array(
	array( 'Kinds' => 'kinds', 'Origins' => 'origins' ),
	array( 'Professions' => 'professions', 'Pasts' => 'pasts' ),
);
foreach ( $sf_dreft_cols as $i => $pair ) :
	?>
<div class="d-flex flex-wrap flex-xs-nowrap split-cols<?php echo $i ? ' mt-5' : ''; ?>">
	<?php foreach ( $pair as $title => $key ) : ?>
	<div class="<?php echo 'kinds' === $key || 'professions' === $key ? 'flex-7' : 'flex-6'; ?> content-stack content-stack-xs">
		<div class="line-container">
			<h5><strong><?php echo $title; ?></strong></h5>
			<div class="line"></div>
		</div>
		<?php foreach ( $sf_dreft[ $key ] as $b ) { sf_background_card( $b ); } ?>
	</div>
	<?php endforeach; ?>
</div>
<?php endforeach; ?>
