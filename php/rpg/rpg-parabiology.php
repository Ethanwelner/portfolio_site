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
					<p class="copy mb-0">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
					<?php sf_lore_entry('murk-legs', 'h4', 'mb-3'); ?>
				</div>

				<div class="tech-field-panel" id="para-parasapients" role="tabpanel" aria-labelledby="tab-para-parasapients">
					<p class="copy mb-0">
						Content coming soon
					</p>
				</div>

				<div class="tech-field-panel" id="para-paraflora" role="tabpanel" aria-labelledby="tab-para-paraflora">
					<p class="copy mb-0">
						Content coming soon
					</p>
				</div>
			</div>
		</div>
		<div class="flex-2 d-none d-xl-inline-flex"></div>
	</div>
</div>
