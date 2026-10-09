<?php require_once __DIR__ . '/lore.php'; ?>
<div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<h3 class="sub-title mb-3" id="thesetting">Introduction</h3>
		<div class="copy stinger black mb-3">The Worlds Of Strange Frontiers</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
<div class="d-flex flex-fill flex-wrap flex-xs-nowrap">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<div class="single-column-content">
			<div class="blog-post intro-vignette mb-4">
				<p class="copy">
					The sky above you is a radiant white. And the sky below you. All around you, really. And it’s hot. The bathysphere is reading north of 3,200 bar and 230 degrees. A few moments outside its thick parametal alloy skin and you’d resemble a very well-cooked marble of hot carbon. Typical weather in 65/T/137 “<?php echo sf_lore_link('saturdays-furnace', 'Saturday’s Furnace'); ?>.”
				</p>
				<p class="copy mb-0">
					One of the harvesters is reporting an infestation of “Sunflowers.” The shift crew calls it “Light work,” for the pun as much as they do for the accuracy of the name. A few hours of scraping luminous higher-dimensional “vines” off of the ship-sized packaging and compression machine and you’ll be back at the Switch Point with time to spare.
				</p>
			</div>
			<p class="copy">
				It is the year 2230, and the dawn of the 23rd century comes amid tumultuous changes for humanity. The last two centuries have seen us navigate a slow-moving environmental collapse on our home world and an AI apocalypse that almost was, but they’ve also seen us reach for the stars... and places even further beyond.
			</p>
			<p class="copy">
				Strange Frontiers is a pen-and-paper role-playing game system and setting with a near-future hard science-fiction aesthetic mixed with the exotic and the arcane.
			</p>
			<p class="copy mb-0">
				In this document I’ll be outlining the world of Strange Frontiers and building out the systems that allow someone to play a game in this setting. This is a work in progress, so expect unfinished and under-construction content to be the norm.
			</p>
		</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
<div class="separator"></div>
<div class="d-flex flex-wrap flex-xs-nowrap">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<div class="tech-fields tech-fields-light" id="timeline">
			<div class="tech-field-tab-list" role="tablist" aria-label="Timeline">
				<button type="button" class="tech-field-tab is-active" role="tab" id="tab-timeline-events" aria-controls="timeline-events" aria-selected="true">Setting</button>
				<button type="button" class="tech-field-tab" role="tab" id="tab-timeline-history" aria-controls="timeline-history" aria-selected="false">Timeline</button>
				<button type="button" class="tech-field-tab" role="tab" id="tab-timeline-locations" aria-controls="timeline-locations" aria-selected="false">Locations</button>
				<button type="button" class="tech-field-tab" role="tab" id="tab-timeline-nations" aria-controls="timeline-nations" aria-selected="false">Nations</button>
				<button type="button" class="tech-field-tab" role="tab" id="tab-timeline-corporations" aria-controls="timeline-corporations" aria-selected="false">Corporations</button>
			</div>

			<div class="tech-field-panel is-active" id="timeline-events" role="tabpanel" aria-labelledby="tab-timeline-events">
				<div class="d-flex flex-wrap flex-xs-nowrap">
		<div class="flex-6">
			<div class="line-container">
				<h5><strong>Strange Frontiers</strong></h5>
				<div class="line"></div>
			</div>
			<p class="copy">
				Mankind has colonized the stars, it’s created life, it’s mapped the fundamental building blocks of nature, but in the year 2230 it’s still just humanity. Inequality persists, war remains, and we’re still striving to uncover the next horizon. The nations of Earth have established colonies in distant stars and even more distant planes of reality, corporations use parascience to develop new technologies, and humanity grapples with how to treat the truly alien.
			</p>
			<p class="copy">
				Life in 2230 is hard, but it has its upsides. Genetic science and advanced cybernetics are pushing the boundaries of what a human is capable of. Sentient AI citizens and paranatural alien life have quashed the old prejudices that divided humanity. And if you don’t like it? Hop a <?php echo sf_lore_link('freighters', 'freighter'); ?> out to the frontier and kickstart your own society. Better yet, hop in a <?php echo sf_lore_link('switch-gates', 'switch gate'); ?> and try your luck in a whole other plane of reality. It wasn’t always this good, though.
			</p>
			<p class="copy">
				In humanity’s darkest hour, 120 years ago, it was dying. The Earth had suffered a near-total ecological collapse, brought on by over-industrialization and risky geo-engineering. A near miss with an AI apocalypse had only deepened divisions and mistrust. The march of science had slowed to a trickle, every new endeavor too expensive or too useless to make an impact. The rich and well-connected were fleeing for space, but that only left them in little bubbles of metal and air, alone and orbiting a dying world.
			</p>
			<p class="copy">
				Then, a mysterious benefactor placed a temple of bizarre make and proportion on the dark side of the Moon. On it, in alien glyphs, was written song, poetry, philosophy, and the secrets of parascience. In the century since, mankind has used this gift to harvest impossible materials from other planes of existence and develop strange new technologies to expand far beyond its birth world.
			</p>
			<p class="copy">
				Life in Earth’s megacities is still hard, and for over a century the great migration away from Earth, coined the <?php echo sf_lore_link('exodus', 'Exodus'); ?>, has created new nations on the Moon, Mars, and locales much farther still. Competition is fierce, corporations and nations alike strive for any edge. Brave pilots ply the stars aboard ramshackle starships, hardened gangs vie for power in the dark depths between arcologies, and elite mercenaries explore other planes of existence hoping to find exotic materials.
			</p>
			<p class="copy mb-0">
				In the end, it’s still humanity, and it’s a big strange universe out there.
			</p>
		</div>
		<div class="d-inline-flex align-items-center flex-1"></div>
					<div class="flex-6">
						<div class="line-container">
							<h5><strong>2230, The Systems, and Beyond</strong></h5>
							<div class="line"></div>
						</div>
						<p class="copy mb-0">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</div>

			<div class="tech-field-panel" id="timeline-history" role="tabpanel" aria-labelledby="tab-timeline-history">
				<div class="sf-timeline">
					<div>
						<div class="line-container">
							<h6><strong>1970 – 2230</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>Significant anthropogenic climate change.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2026</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>The current year in reality. The setting mimics real-world history up until this point.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2029</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>The AI market crash plunges the world into the second great depression.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2030 – 2060</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>A collapse in the undersea currents of hot and cold water marks the beginning of a megadrought that historians have labeled “The 0.2 Kiloyear Event.” The arid regions of Earth expand and desertification runs rampant, resulting in a three-decade-long refugee crisis.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2033</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>The successor to the CCP’s General Secretary breaks the party’s fragile line of succession, proclaiming himself the second Great Chairman.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2034</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>First permanently inhabited lunar colony established.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2038</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li><?php echo sf_lore_link('first-ai-panic', 'The first AI panic'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2044</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>The UN formally founds “The Committee for the Coordination of Geo Engineering Projects” to act as an intermediary intended to enable transnational efforts to reverse climate change.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2046</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>Martial law is declared in the United States, and federal elections are suspended.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2048</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>The United States of America begins its invasion of Mexico, initiating a series of global conflicts that would come to be called <?php echo sf_lore_link('drone-wars', 'the Drone Wars'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2049</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>China initiates a large-scale invasion of the nations to its southeast, beginning its New Imperial Era.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2050</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>Minor Indo-Pakistani nuclear exchange. AI is partially blamed.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2051</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>The US partitions Mexico into three new states: Nueva Mexico, Mexica, and Yucatán.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2052</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>Kashgar station finishes construction and begins operation, acting as a logistical waystation and signal booster for colonization efforts.</li>
							<li>By executive decree, multiple US states are reorganized, forming New York, the Commonwealth, and Greater Maine.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2053</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>India moves to expand its Himalayan borderline and either invades or forcefully absorbs bordering nations.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2054</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>Texas, New Mexico, Kansas, and Oklahoma secede from the United States, seizing substantial military hardware and beginning a two-decade nuclear and economic standoff.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2055 – Present day</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li><?php echo sf_lore_link('nuclear-disarmament', 'Significant nuclear disarmament'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2060 – 2118</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>Partial technological singularity leading to the “<?php echo sf_lore_link('end-of-science', 'End of Science'); ?>.”</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2061</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>First permanently inhabited Martian colony established.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2070 – 2080</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>Plum Technologies quietly acquires a majority marketshare in the cybernetics and prosthetics industries.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2070</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>A palace coup overthrows the Great Chairman. A voting committee of oligarchs, secretly headed by an AI, takes control of the rechristened <?php echo sf_lore_link('chinese-empire', 'Chinese Empire'); ?>, with Emperor Liu of the Shenzhen Dynasty installed as its figurehead.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2072 – 2074</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>The secession of Florida breaks the stalemate, and 22 additional states secede from <?php echo sf_lore_link('american-empire', 'the American Empire'); ?> to form <?php echo sf_lore_link('free-american-states', 'the Non-Aligned Free American States'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2073 – Present day</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>Colonization of the solar system begins in earnest and is ongoing, though the process is slow-going.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2080</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>The second AI panic.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2081</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>Emperor Liu is revealed to have been a figurehead for an AI. He remains on the throne, and the Shenzhen Dynasty is rechristened the Wuhan Dynasty.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2082</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>AI Personhood Act enacted.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2085</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li><?php echo sf_lore_link('lunar-industrial-syndicate', 'The First Lunar Industrial Syndicate'); ?> forms as Port Luna buys out much of Luna’s economic and civilian infrastructure.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2100 – Present day</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li><?php echo sf_lore_link('interplanetary-colonization', 'Interplanetary colonization'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2100</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>Having annexed seven bordering states, Texas consolidates its alliance into <?php echo sf_lore_link('union-of-texas', 'the Union of Texas'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2110</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>“<?php echo sf_lore_link('the-gift', 'The Gift'); ?>” is matter-swapped by an unknown intraplanar civilization onto the surface of the moon.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2110 – 2118</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>“The Gift” is deciphered, translated, and its instructions are followed in secret by the Lunar colonial government.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2114</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>1/a/384 - “<?php echo sf_lore_link('paraloka', 'Paraloka'); ?>” is discovered by <?php echo sf_lore_link('lunar-industrial-syndicate', 'the Third Lunar Industrial Syndicate'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2116</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>First tests of a “<?php echo sf_lore_link('switch-gates', 'switch gate'); ?>” are made targeting 1/a/384 - “<?php echo sf_lore_link('paraloka', 'Paraloka'); ?>,” the plane described by “The Gift.” This first gate is constructed using exotic materials contained in “The Gift.”</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2117</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>First exotic materials are harvested from 1/a/384 - “Paraloka,” leading to the creation of more “switch gates.”</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2118</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>The existence of “The Gift” is leaked, and all known information contained is made public.</li>
							<li>The weeks and months of negotiation that follow, with every nation on Earth pointing its guns at Luna, become known as the Lunar Hostage Crisis.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2118 – Present day</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li><?php echo sf_lore_link('rebirth-of-science', 'The rebirth of science'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2120</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li><?php echo sf_lore_link('lunar-industrial-syndicate', 'The Third Lunar Industrial Syndicate'); ?> purchases the former territory of Bolivia and is formally admitted into the UN.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2122</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>The fifth fundamental force is measured and quantified through research into higher planar paraphysical interactions.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2122 – 2130</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>Brazil and Paraguay, both in significant economic decline, blackmail <?php echo sf_lore_link('lunar-industrial-syndicate', 'the Lunar Syndicate'); ?> into favorable purchase agreements, becoming Earth territories of the Lunar state.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2123</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>The first <?php echo sf_lore_link('aether-sails', 'aether sails'); ?> are commercialized.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2123 – Present day</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li><?php echo sf_lore_link('exodus', 'Exodus'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2129</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>65/T/137 - “<?php echo sf_lore_link('saturdays-furnace', 'Saturday’s Furnace'); ?>” is discovered by New York University.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2132</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li><?php echo sf_lore_link('lunar-industrial-syndicate', 'The Lunar Syndicate'); ?> adopts a constitution outlining basic governing principles and defining the nature of its “Citizens” and their rights.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2135</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>76/f/55 - “<?php echo sf_lore_link('gastown', 'Gastown'); ?>” is discovered by <?php echo sf_lore_link('kingdom-of-india', 'the Kingdom of India'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2146</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>First tests of <?php echo sf_lore_link('lorentz-field-generator', 'Lorentz Field Generators'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2154</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>380/c/12 - “<?php echo sf_lore_link('the-lost-world', 'The Lost World'); ?>” is discovered by <?php echo sf_lore_link('holy-oak-discovery-services', 'Holy Oak Discovery Services, LLC'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2160</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>419/f/05 - “<?php echo sf_lore_link('flatland', 'Flatland'); ?>” is discovered by the <?php echo sf_lore_link('huanghe-yanjiuyuan', 'Huánghé Yánjiūyuàn (Yellow River Research Institute)'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2163</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>First colonization of an interstellar system with New Canaan, a research station orbiting Alpha Centauri.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2170 – Present day</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li><?php echo sf_lore_link('first-interstellar-expansion', 'First interstellar expansion'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2175</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li><?php echo sf_lore_link('first-switch-gate-catastrophe', 'The first switch-gate catastrophe'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2184</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>513/y/11 - “<?php echo sf_lore_link('leviathan', 'Leviathan'); ?>” is discovered by <?php echo sf_lore_link('holy-oak-discovery-services', 'Holy Oak Discovery Services, LLC'); ?>.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2185</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>516/a/198 - “<?php echo sf_lore_link('isekai', 'Isekai'); ?>” is discovered by <?php echo sf_lore_link('tetra-frontiers-co', 'Tetra Frontiers Co.'); ?></li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2190 – Present day</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>Interdimensional colonization begins.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2196</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>All exploratory switch gates are required to be off-world. All exploratory switch gates on Earth are rapidly shut down.</li>
						</ul>
					</div>
					<div>
						<div class="line-container">
							<h6><strong>2230</strong></h6>
							<div class="line"></div>
						</div>
						<ul class="copy">
							<li>Present day.</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="tech-field-panel" id="timeline-locations" role="tabpanel" aria-labelledby="tab-timeline-locations">
				<p class="copy mb-0">
					Content coming soon
				</p>
			</div>

			<div class="tech-field-panel" id="timeline-nations" role="tabpanel" aria-labelledby="tab-timeline-nations">
				<div class="content-stack">
					<?php foreach (['american-empire', 'union-of-texas', 'free-american-states', 'chinese-empire', 'stellar-democratic-union', 'kingdom-of-india', 'ural-federation', 'centafrica', 'kashgar', 'xanthus', 'lunar-industrial-syndicate', 'dreft'] as $slug) { sf_lore_entry($slug, 'h4', 'mb-3'); } ?>
				</div>
			</div>

			<div class="tech-field-panel" id="timeline-corporations" role="tabpanel" aria-labelledby="tab-timeline-corporations">
				<div class="d-flex flex-wrap flex-xs-nowrap">
					<div class="flex-7 content-stack">
						<?php foreach (['ten-twenty-holding-corporation', 'general-robotics', 'holy-oak-discovery-services', 'huanghe-yanjiuyuan', 'kashgar-mindworks', 'lagos-core-defense', 'luna-hi', 'luxoptica', 'mars-creative-autonomy'] as $slug) { sf_lore_entry($slug, 'line'); } ?>
					</div>
					<div class="d-inline-flex align-items-center flex-1"></div>
					<div class="flex-6 content-stack">
						<?php foreach (['meishou-jituan', 'plum-technologies', 'saltwater-energetics', 'shine', 'sistemas-de-controle-amazonia', 'stellar-metals', 'stellar-omnium', 'tetra-frontiers-co'] as $slug) { sf_lore_entry($slug, 'line'); } ?>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
