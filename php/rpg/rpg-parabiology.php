<?php require_once __DIR__ . '/lore.php'; ?>
<div class="w-100">
	<div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4">
		<div class="flex-2 d-none d-xl-inline-flex"></div>
		<div class="flex-14">
			<h3 class="sub-title mb-3" id="parabiology">Parabiology</h3>
			<div class="copy stinger black mb-3">placeholder subtitle</div>
		</div>
		<div class="flex-2 d-none d-xl-inline-flex"></div>
	</div>
	<div class="d-flex flex-fill flex-wrap flex-xs-nowrap">
		<div class="flex-2 d-none d-xl-inline-flex"></div>
		<div class="flex-14">
			<div class="intro-with-image">
				<div class="single-column-content">
					<p class="copy">
						Life is rare. Even in our own universe, practically purpose-built to host complex multicellular life, it’s only been discovered a handful of times: on Earth, of course, but also in thin wisps of radiation-consuming bacterial slime surrounding the undersea vents of Europa, and in the mysterious monocultural algal blooms that float atop the surface of HD 219414 C’s ammonia seas in the Cygnus-Vanguard system. It came as perhaps a bit of a surprise to paraphysicists, then, when so many planes held life of their own.
					</p>
					<p class="copy">
						While weakly divergent planes, with physics and geography that bear a striking resemblance to Earth baseline, are home to the bulk of discovered extraplanar life, they hold far from a monopoly. Higher planes feature an abundance of bizarre life, often in surreal forms seemingly pulled from myths, dreams, and nightmares. The paraphysical effects of higher planes conspire to create situations where life can thrive, even in otherwise abjectly desolate or hostile environments. Lower planes, by contrast, rarely feature the multifaceted complexities needed for life, but even they aren’t always empty.
					</p>
					<p class="copy">
						Parabiology, the study of extraplanar life in all its forms, is a thriving field. Paraevolutionary scientists study the history of flora floating in a sea of light, paraphysiologists research the strange forms and biologies of creatures made of ice, and paraecologists catalogue entirely new kingdoms of life wholly reliant on exotic physics for their continued existence. Flush with investment and the promise of adventure, these researchers are a common sight in the <?php echo sf_lore_link('explorers-lodge', 'Explorers’ Lodges'); ?> and research labs of the systems.
					</p>
					<p class="copy">
						Alongside life in all its bewildering and exciting forms came the monumental discovery of something even more important: parasapience, the existence of sapient, autonomous life forms in other planes. The revelation of intelligent life beyond Earth rocked the philosophical and religious underpinnings of humanity in ways that are still being felt today. In its wake, industries of paraethnology and paraarcheology arose alongside the complexities of interplanar diplomacy and the need for law specializing in the treatment and rights of those from beyond the stars.
					</p>
					<p class="copy mb-0">
						Increasingly, life from other planes has been imported into the systems, with parazoological specimens inhabiting labs, zoos, and even pet shops. Parasapients immigrating from planes far afield test the legal status of a “person” in many a nation, while businesses arise catering to their specific needs. Diplomatic and even business ties link nations separated by entire realities.
					</p>
				</div>
				<div class="image-placeholder" aria-hidden="true">Image</div>
			</div>
			<div class="bumper"></div>
			<div class="tech-fields tech-fields-light">
				<div class="tech-field-tab-list" role="tablist" aria-label="Parabiology">
					<button type="button" class="tech-field-tab is-active" role="tab" id="tab-para-parazoology" aria-controls="para-parazoology" aria-selected="true">Parazoology</button>
					<button type="button" class="tech-field-tab" role="tab" id="tab-para-parasapients" aria-controls="para-parasapients" aria-selected="false">Parasapients</button>
					<button type="button" class="tech-field-tab" role="tab" id="tab-para-paraflora" aria-controls="para-paraflora" aria-selected="false">Paraflora</button>
				</div>

				<div class="tech-field-panel is-active" id="para-parazoology" role="tabpanel" aria-labelledby="tab-para-parazoology">
					<div class="content-stack">
						<?php foreach (['murk-legs', 'dandelion-eaters', 'golems', 'elementals'] as $slug) { sf_lore_entry($slug, 'h4', 'mb-3'); } ?>
					</div>
				</div>

				<div class="tech-field-panel" id="para-parasapients" role="tabpanel" aria-labelledby="tab-para-parasapients">
					<div class="content-stack">
						<?php foreach (['isek', 'tatot', 'guwain', 'avians', 'lizardfolk', 'trolls'] as $slug) { sf_lore_entry($slug, 'h4', 'mb-3'); } ?>
					</div>
				</div>

				<div class="tech-field-panel" id="para-paraflora" role="tabpanel" aria-labelledby="tab-para-paraflora">
					<div class="content-stack">
						<?php foreach (['sunflowers'] as $slug) { sf_lore_entry($slug, 'h4', 'mb-3'); } ?>
					</div>
				</div>
			</div>
		</div>
		<div class="flex-2 d-none d-xl-inline-flex"></div>
	</div>
</div>
