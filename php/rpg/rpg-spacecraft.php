<?php require_once __DIR__ . '/lore.php'; ?>
<div class="breakout shadow-diffuse black-bg white-text">
	<?php $rpgLinksKind = 'setting'; $rpgLinksTone = 'white'; include 'php/rpg/rpg-links.php'; ?>
	<div class="separator"></div>
	<div class="container">
		<div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4">
			<div class="flex-2 d-none d-xl-inline-flex"></div>
			<div class="flex-14">
				<h3 class="sub-title mb-3" id="thestars">The Stars</h3>
				<div class="copy stinger white mb-3">placeholder subtitle</div>
			</div>
			<div class="flex-2 d-none d-xl-inline-flex"></div>
		</div>
		<div class="d-flex flex-fill flex-wrap flex-xs-nowrap">
			<div class="flex-2 d-none d-xl-inline-flex"></div>
			<div class="flex-14">
				<div class="single-column-content">
					<p class="copy">
						Once the stuff of lofty dreams and science fiction, space travel in 2200 is an everyday affair. Over-built and heavily armored bulk freighters manned by skeleton crews lazily ply the aetheric sea, their vast cargo holds carrying the basic goods required to keep civilization running. Sleek personal corvettes rocket between stations, delivering the elite in style. Vast Arcs transport ships and passengers between the stars, acting as much as drifting nations as they do ships in their own right. Between them, small shuttles move millions from ship to shore.
					</p>
					<p class="copy">
						Of course, the stars aren’t always safe. The vast distances involved mean that a ship’s crew is often on its own. Militaries, police, and private security forces try to maintain a semblance of order, but an SoS is often more an invitation to examine a weeks-old crime scene than it is a realistic call for aid. Pirates and criminal syndicates have proven impossible to fully eradicate, and especially in the solar periphery or in far-flung colonies, they’re a very real menace.
					</p>
					<p class="copy">
						Within the Sol system, thousands of habitat stations, research facilities, mining concerns, and weather satellites float, acting as buoys and ports of call for starships. Each is a world in its own right, with some sporting over a century of continuous habitation. These places grow with time, changing hands and industries, each new module bolted to the last. Many a station houses a population far, far in excess of its original design constraints, with habitation modules, power systems, and even derelict ships repurposed and tethered to a growing web of homes and businesses.
					</p>
					<p class="copy">
						Such safe ports are needed. Space travel may be commonplace, but it’s far from the mundane, mathematically exact rocket science of the 21st century. The aetheric tides ships use to move between worlds are unpredictable. Experience can count for more than any computer model, and every crew worth its salt has a pilot capable of reading these invisible seas. A change in the winds can force unexpected course corrections, while an unexpected aether storm can leave fleets of ships adrift for weeks with dwindling supplies.
					</p>
					<p class="copy mb-0">
						That’s to say nothing of the dangers of interstellar travel. <?php echo sf_lore_link('lorentz-field-generator', 'Lorentz Field Generators'); ?> are temperamental devices on the best of days, prone to failure and on-the-spot recalibration. A total loss of propulsion or an irreparable failure in an LFG means a slow and certain death as supplies dwindle to nothing. In the vast gulfs between stars, an SoS is utterly meaningless. A signal could take centuries or millennia to reach a friendly ear, and by then it’s probably far too late to help. Only the largest and most over-built of starships can safely traverse these great distances, with the rest opting to pay for passage in the immense ship holds of an Arc. That’s not to say particularly daring or unscrupulous captains aren’t willing to risk it; there’s a tidy profit to be made smuggling goods or people between systems.
					</p>
				</div>
				<div class="bumper"></div>
				<div class="tech-fields">
					<div class="tech-field-tab-list" role="tablist" aria-label="Spacecraft">
						<button type="button" class="tech-field-tab is-active" role="tab" id="tab-craft-starships" aria-controls="craft-starships" aria-selected="true">Starships</button>
						<button type="button" class="tech-field-tab" role="tab" id="tab-craft-arks" aria-controls="craft-arks" aria-selected="false">Arks</button>
						<button type="button" class="tech-field-tab" role="tab" id="tab-craft-stations" aria-controls="craft-stations" aria-selected="false">Stations</button>
						<button type="button" class="tech-field-tab" role="tab" id="tab-craft-technology" aria-controls="craft-technology" aria-selected="false">Technology</button>
					</div>

					<div class="tech-field-panel is-active" id="craft-starships" role="tabpanel" aria-labelledby="tab-craft-starships">
						<p class="copy mb-0">
							Content coming soon
						</p>
					</div>

					<div class="tech-field-panel" id="craft-arks" role="tabpanel" aria-labelledby="tab-craft-arks">
						<p class="copy mb-0">
							Content coming soon
						</p>
					</div>

					<div class="tech-field-panel" id="craft-stations" role="tabpanel" aria-labelledby="tab-craft-stations">
						<p class="copy mb-0">
							Content coming soon
						</p>
					</div>

					<div class="tech-field-panel" id="craft-technology" role="tabpanel" aria-labelledby="tab-craft-technology">
						<div class="content-stack">
							<?php sf_lore_entry('lorentz-field-generator', 'h4', 'mb-3'); ?>
							<?php sf_lore_entry('aether-sails', 'h4', 'mb-3'); ?>
						</div>
					</div>
				</div>
			</div>
			<div class="flex-2 d-none d-xl-inline-flex"></div>
		</div>
	</div>
	<div class="separator"></div>
</div>
