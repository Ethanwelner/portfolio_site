<?php require_once __DIR__ . '/lore.php'; ?>
<div class="w-100">
	<div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4">
		<div class="flex-2 d-none d-xl-inline-flex"></div>
		<div class="flex-14">
			<h3 class="sub-title mb-3" id="hierarchy">The Planes</h3>
			<div class="copy stinger black mb-3">Paraastral Physics</div>
		</div>
		<div class="flex-2 d-none d-xl-inline-flex"></div>
	</div>
	<div class="d-flex flex-fill flex-wrap flex-xs-nowrap">
		<div class="flex-2 d-none d-xl-inline-flex"></div>
		<div class="flex-14">
			<div class="single-column-content">
				<ul class="copy mb-0">
					<li>Planes are separate self-contained universes, accessible through a <?php echo sf_lore_link('switch-gates', 'switch gate'); ?>.</li>
					<li>Planes exist in an infinite stack-order from high to low.</li>
					<li>Matter or energy transported downward in the planes maintains its physical properties and can enforce its physical laws upon nearby reality. These are called “exotic” materials, and are often used to create technologies that would otherwise be impossible with mundane physical laws.</li>
					<li>Exotic matter is the underlying reason why the setting can have FTL and interdimensional travel. Exotic matter is extremely rare and difficult to acquire owing to the extreme danger of accessing higher planes.</li>
					<li>Matter or energy transported upward along the planes has the physical laws of the planes it is transported to immediately applied to it.</li>
					<li>The further a reality is up or down from the one with the gate the harder it is to discover, lock on to, and the more power required to perform a swap.</li>
				</ul>
			</div>
			<div class="bumper"></div>
			<div class="tech-fields tech-fields-light">
				<div class="tech-field-tab-list" role="tablist" aria-label="Planar hierarchy">
					<button type="button" class="tech-field-tab is-active" role="tab" id="tab-plane-paraastral" aria-controls="plane-paraastral" aria-selected="true">Planar Properties</button>
					<button type="button" class="tech-field-tab" role="tab" id="tab-plane-known" aria-controls="plane-known" aria-selected="false">Known Planes</button>
					<button type="button" class="tech-field-tab" role="tab" id="tab-plane-exploration" aria-controls="plane-exploration" aria-selected="false">Planar Exploration</button>
					<button type="button" class="tech-field-tab" role="tab" id="tab-plane-exotic" aria-controls="plane-exotic" aria-selected="false">Exotic Materials</button>
				</div>

				<div class="tech-field-panel is-active" id="plane-paraastral" role="tabpanel" aria-labelledby="tab-plane-paraastral">
					<div class="line-container">
						<h5><strong>Planar Depth</strong></h5>
						<div class="line"></div>
					</div>
					<details class="lore-details">
						<summary class="line-container">
							<h5><strong>Details</strong></h5>
							<div class="line"></div>
						</summary>
						<div class="d-flex flex-wrap flex-xs-nowrap">
							<div class="flex-7 content-stack">
								<div>
									<h5 class="mb-3"><strong>Higher Plane</strong></h5>
									<ul class="copy">
										<li>The “higher” a plane is, the more new and novel laws of reality are added and the further existing ones are altered. Higher planes contain “additional physics”: additional fundamental forces, extra quantum fields, extra spatial dimensions, additional or different axiomatic qualities, and similar expansions of the rules that govern matter and energy.</li>
										<li>Physical laws can be indistinguishable from the norm with the exception of previously impossible forms of light, novel interactions with gravity, or significantly different or additional universal constants. Higher planes represent a gradient starting from virtually identical parallel planes with extremely minor additions to the laws of reality all the way to manifold realities with billions of spatial dimensions populated by entities composed of crystallized emotion.</li>
										<li>The higher a plane from parallel, the less likely it is to contain life. Higher planes are extremely variable, with significantly higher planes functionally never being similar to one another due to the increased space of possibility granted by their additional laws of reality. The higher a plane, the more dangerous it is to travel to, due to some new physical property being incompatible with the electro-chemical composition of humans and their devices.</li>
										<li>Material or energy from higher planes maintain their exotic properties for a period of time or even indefinitely, depending on the height of the plane and how foreign the property is. Significantly higher planes tend to be extremely dangerous to matter-swap with. Higher level matter can often radiate deadly forms of physics, such as novel and highly destructive new wavelengths of light (radiation) or other inconceivable dangers.</li>
									</ul>
								</div>
								<div>
									<h5 class="mb-3"><strong>Parallel Plane</strong></h5>
									<ul class="copy mb-0">
										<li>Earth is here. The “Goldilocks zone” of physical laws for supporting life. The “closest” planar category, it requires the least effort to lock onto and is the least likely to be dangerous.</li>
										<li>Physical laws are almost indistinguishable from the norm. A parallel plane contains all or nearly all typical laws of physics, and physical constants and axioms are near enough to the norm that they do not intrude on the functioning of transported matter. They could have different spatial curvatures.</li>
										<li>Material composition is highly variable since it is not baseline reality, but the state of the plane has to be physically supported by mundane physics. A universe made entirely of water, for example, needs some rationale for why it didn't all become black holes. Matter transportation between planes results in few conflicts. Compatible parallel planes are prized for colonization, mining, or research.</li>
									</ul>
								</div>
							</div>
							<div class="d-inline-flex align-items-center flex-1"></div>
							<div class="flex-6">
								<h5 class="mb-3"><strong>Lower Plane</strong></h5>
								<ul class="copy mb-0">
									<li>The “lower” a plane is, the fewer laws of reality are applied and the more universal constants are aligned to “baseline” values. Lower planes contain “fewer” physics: weaker or nonexistent gravity, fewer possible elemental interactions, fewer or different quantum interactions, and similar reductions of the rules that govern matter and energy.</li>
									<li>The lower a plane, the more likely it is to resemble other lower planes. There is no discovered “lowest” plane, but it is theorized that there is a baseline set of physical axioms that are the starting point that all planes are derived from. Lower planes do not contain significant variety and tend to be very homogenous, such as a plane formed entirely of perfectly distributed hydrogen gas.</li>
									<li>Lower planes are almost universally deadly to travel to. There are many physical laws which, if removed or simplified, result in a reality that cannot support matter as we know it. While transported matter sent to a lower plane will maintain its own physical laws, that doesn't help you if the universe you have traveled to is composed entirely of degenerate neutron matter or doesn't contain a concept of time.</li>
									<li>The lower a plane, the less it is capable of supporting life. Safe lower planes are prized for raw materials extraction.</li>
								</ul>
							</div>
						</div>
					</details>
					<div class="bumper"></div>
					<div class="content-stack">
						<div>
							<div class="line-container">
								<h5><strong>Planar Divergence</strong></h5>
								<div class="line"></div>
							</div>
							<details class="lore-details">
								<summary class="line-container">
									<h5><strong>Details</strong></h5>
									<div class="line"></div>
								</summary>
								<ul class="copy mb-0">
									<li>The “Divergence” of a plane represents the scale of its difference from other planes at the same depth. This concept is only relevant to planes that are highly parallel to one another, and is mostly a way of measuring how much planes directly parallel to Earth's baseline differ from one another.</li>
									<li>Planes that are higher or lower tend to have other causal factors that result in them being highly dissimilar from one another, and thus are naturally quite divergent.</li>
									<li>The minimum possible planar divergence would result in a plane with an identical Earth at an identical point in its timeline: practically a mirror universe where the only difference could be an event that has only occurred recently, and could be as small as a quantum fluctuation.</li>
									<li>Most discovered parallel planes are highly divergent, and there appears to be an exponential decrease in a gate's ability to establish a connection as a plane's divergence decreases. This is an active area of planar physics research.</li>
								</ul>
							</details>
						</div>
						<div>
							<div class="line-container">
								<h5><strong>Distance</strong></h5>
								<div class="line"></div>
							</div>
							<details class="lore-details">
								<summary class="line-container">
									<h5><strong>Details</strong></h5>
									<div class="line"></div>
								</summary>
								<ul class="copy mb-0">
									<li>Content coming soon</li>
								</ul>
							</details>
						</div>
						<div>
							<div class="line-container">
								<h5><strong>Compatibility</strong></h5>
								<div class="line"></div>
							</div>
							<details class="lore-details">
								<summary class="line-container">
									<h5><strong>Details</strong></h5>
									<div class="line"></div>
								</summary>
								<ul class="copy mb-0">
									<li>Content coming soon</li>
								</ul>
							</details>
						</div>
						<div>
							<div class="line-container">
								<h5><strong>Aperture</strong></h5>
								<div class="line"></div>
							</div>
							<details class="lore-details">
								<summary class="line-container">
									<h5><strong>Details</strong></h5>
									<div class="line"></div>
								</summary>
								<ul class="copy mb-0">
									<li>Content coming soon</li>
								</ul>
							</details>
						</div>
					</div>
				</div>

				<div class="tech-field-panel" id="plane-known" role="tabpanel" aria-labelledby="tab-plane-known">
					<div class="content-stack">
						<?php foreach (['paraloka', 'saturdays-furnace', 'gastown', 'the-lost-world', 'flatland', 'leviathan', 'isekai'] as $slug) { sf_lore_entry($slug, 'h4', 'mb-3'); } ?>
					</div>
				</div>

				<div class="tech-field-panel" id="plane-exploration" role="tabpanel" aria-labelledby="tab-plane-exploration">
					<?php sf_lore_entry('switch-gates', 'h4', 'mb-3'); ?>
				</div>

				<div class="tech-field-panel" id="plane-exotic" role="tabpanel" aria-labelledby="tab-plane-exotic">
					<div class="d-flex flex-wrap flex-xs-nowrap">
						<div class="flex-7">
							<?php sf_lore_entry('st-245-e6', 'line'); ?>
						</div>
						<div class="d-inline-flex align-items-center flex-1"></div>
						<div class="flex-6 content-stack">
							<?php foreach (['st-1-e1', 'co-h2o-e2'] as $slug) { sf_lore_entry($slug, 'line'); } ?>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex-2 d-none d-xl-inline-flex"></div>
	</div>
</div>
