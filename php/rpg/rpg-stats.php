<div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<h3 class="sub-title mb-3" id="stats">Explaining Stats</h3>
		<div class="copy stinger black mb-3">Core and Focus</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
<div class="d-flex flex-wrap flex-xs-nowrap">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<div class="d-flex flex-wrap flex-xs-nowrap split-cols">
			<div class="flex-7 content-stack">
				<div class="content-stack content-stack-sm">
					<h3>Stats</h3>
					<!-- OVERVIEW -->
					<p class="copy">
						A character’s Stats represent their physical, social, and mental limits and track how they grow over time. Stats come in two linked types. The three core Stats, Physical, Social, and Mental, record where each Level was invested. Each core Stat has three focus Stats, which determine Skill Checks, access to Traits, and resources like Hit Points, Vibe Points, and Savvy Points. Every character’s Stats start at 0. A character’s Kind adds a bonus to each Stat and sets maximums their Stats cannot exceed.
					</p>
					<ul class="copy">
						<li>When a character gains a Level, they get 1 point to spend in any core Stat.</li>
						<li>Each point added to Physical, Social, or Mental gives 3 points to spend in the focus Stats of that category.</li>
						<li>No more than 20 points can be spent on any core, focus, or Special Stat, and some Kinds set lower maximums. Traits, Equipment, or other effects can still raise a Stat’s total above 20.</li>
					</ul>
					<p class="copy">Beyond Physical, Social, and Mental, some Traits open additional core Stats, called Special Stats. All Special Stats work the same way:</p>
					<ul class="copy">
						<li>Only a character with a Trait that grants access, like Magic Access, can put points into a Special Stat.</li>
						<li>Special Stats have no focus Stats. Each point instead adds 3 points to a resource unique to that Stat, such as Mana Points for Magic.</li>
						<li>Special Stats are the only Stats whose resources don’t come from focus Stats.</li>
					</ul>
					<p class="copy">How a character spreads their points shapes what they can do, and most concepts need points in more than one place:</p>
					<ul class="copy">
						<li>An Ogre can be all physicality but may only be smart enough to use a club.</li>
						<li>A soldier needs to be smart enough to load a musket and graceful enough to aim it.</li>
						<li>A spy may be incredibly persuasive and have the Demeanor to fit in anywhere, but probably needs Memory to retain what they see.</li>
					</ul>
				</div>
			</div>
			<div class="d-inline-flex flex-6 justify-content-end align-items-center">
				<svg class="column-image stat-ring" viewBox="-8 -4 484 388" role="img" aria-labelledby="stat-ring-title" xmlns="http://www.w3.org/2000/svg">
					<title id="stat-ring-title">Stat diagram: character Level at the center, branching to the three core Stats, which each branch to their three focus Stats</title>
					<g fill="#979797" font-size="12" font-weight="700" text-anchor="middle">
						<!-- Branches: Level to each core Stat (thick), each core Stat to its focus Stats (thin) -->
						<g class="stat-ring-links" stroke="#979797" stroke-linecap="round">
							<line class="stat-ring-link" data-from="level" data-to="physical" x1="223.7" y1="203.708" x2="223.7" y2="95.2798" stroke-width="4"/>
							<line class="stat-ring-link" data-from="level" data-to="social" x1="223.7" y1="203.708" x2="317.979" y2="255.972" stroke-width="4"/>
							<line class="stat-ring-link" data-from="level" data-to="mental" x1="223.7" y1="203.708" x2="129.421" y2="255.972" stroke-width="4"/>
							<line class="stat-ring-link" data-from="physical" data-to="endurance" x1="223.7" y1="95.2798" x2="163.572" y2="44.8658" stroke-width="2"/>
							<line class="stat-ring-link" data-from="physical" data-to="power" x1="223.7" y1="95.2798" x2="223.7" y2="34" stroke-width="2"/>
							<line class="stat-ring-link" data-from="physical" data-to="grace" x1="223.7" y1="95.2798" x2="283.828" y2="44" stroke-width="2"/>
							<line class="stat-ring-link" data-from="social" data-to="empathy" x1="317.979" y1="255.972" x2="396.833" y2="237.474" stroke-width="2"/>
							<line class="stat-ring-link" data-from="social" data-to="persuasion" x1="317.979" y1="255.972" x2="376.186" y2="293.902" stroke-width="2"/>
							<line class="stat-ring-link" data-from="social" data-to="demeanor" x1="317.979" y1="255.972" x2="336.704" y2="339.958" stroke-width="2"/>
							<line class="stat-ring-link" data-from="mental" data-to="logic" x1="129.421" y1="255.972" x2="50.5672" y2="237.474" stroke-width="2"/>
							<line class="stat-ring-link" data-from="mental" data-to="intuition" x1="129.421" y1="255.972" x2="71.2138" y2="293.902" stroke-width="2"/>
							<line class="stat-ring-link" data-from="mental" data-to="memory" x1="129.421" y1="255.972" x2="110.696" y2="339.958" stroke-width="2"/>
						</g>
						<!-- Physical -->
						<g class="stat-ring-group" data-group="physical">
							<g class="stat-ring-core" data-stat="physical">
								<ellipse cx="223.7" cy="95.2798" rx="27" ry="27"/>
								<svg class="stat-ring-icon" x="206.700" y="78.280" width="34" height="34" viewBox="0 0 512 512" fill="#ffffff" color="#ffffff" aria-hidden="true"><path d="M165.906 18.688C15.593 59.28-42.187 198.55 92.72 245.375h-1.095c.635.086 1.274.186 1.906.28 8.985 3.077 18.83 5.733 29.532 7.94C173.36 273.35 209.74 321.22 212.69 368c-33.514 23.096-59.47 62.844-59.47 62.844l26.28 38.686L138.28 493h81.97c-40.425-40.435-11.76-85.906 36.125-85.906 48.54 0 73.945 48.112 36.156 85.906h81.126l-40.375-23.47 26.283-38.686s-26.376-40.4-60.282-63.406c3.204-46.602 39.5-94.167 89.595-113.844 10.706-2.207 20.546-4.86 29.53-7.938.633-.095 1.273-.195 1.908-.28h-1.125c134.927-46.82 77.163-186.094-73.157-226.69-40.722 39.37 6.54 101.683 43.626 56.877 36.9 69.08 8.603 127.587-72.28 83.406-11.88 24.492-34.213 41.374-60.688 41.374-26.703 0-49.168-17.167-60.97-42-81.774 45.38-110.512-13.372-73.437-82.78 37.09 44.805 84.35-17.508 43.626-56.876zm90.79 35.92c-27.388 0-51.33 27.556-51.33 63.61 0 36.056 23.942 62.995 51.33 62.995 27.387 0 51.327-26.94 51.327-62.994 0-36.058-23.94-63.61-51.328-63.61z"/></svg>
								<text fill="#212121" class="stat-ring-label" x="258" y="99.28" text-anchor="start">Physical</text>
							</g>
							<g class="stat-ring-focus" data-stat="endurance">
								<ellipse cx="163.572" cy="44.8658" rx="10.1621" ry="10"/>
								<text fill="#212121" class="stat-ring-label" x="163.80" y="21.87">Endurance</text>
							</g>
							<g class="stat-ring-focus" data-stat="power">
								<ellipse cx="223.7" cy="34" rx="10.1621" ry="10"/>
								<text fill="#212121" class="stat-ring-label" x="224.00" y="11.47">Power</text>
							</g>
							<g class="stat-ring-focus" data-stat="grace">
								<ellipse cx="283.828" cy="44" rx="10.1621" ry="10"/>
								<text fill="#212121" class="stat-ring-label" x="283.95" y="21.35">Grace</text>
							</g>
						</g>
						<!-- Social -->
						<g class="stat-ring-group" data-group="social">
							<g class="stat-ring-core" data-stat="social">
								<ellipse cx="317.979" cy="255.972" rx="27" ry="27"/>
								<svg class="stat-ring-icon" x="300.979" y="238.972" width="34" height="34" viewBox="230 70 1090 1090" fill="#ffffff" color="#ffffff" aria-hidden="true"><path fill-rule="evenodd" d="M372 1107H750Q778 1107 781 1079L796 967L912 980Q982 986 1001 888Q1003 870 985 864Q935 850 910 808Q906 795 922 796L985 796Q1005 794 1004 774L999 706H1045Q1097 701 1094 650Q1092 638 1086 627L1018 495Q1004 465 999 430Q970 255 860 175Q760 106 620 112Q440 116 330 220Q235 315 238 480Q240 640 340 750Q378 794 372 852L343 1070Q341 1104 372 1107ZM868 431A52 52 0 1 0 868 535A52 52 0 1 0 868 431Z"/><path fill="none" stroke="currentColor" stroke-width="56" stroke-linecap="round" d="M1146 721A110 110 0 0 1 1146 897M1215 655A205 205 0 0 1 1215 966"/></svg>
								<text fill="#212121" class="stat-ring-label" x="317.98" y="220">Social</text>
							</g>
							<g class="stat-ring-focus" data-stat="empathy">
								<ellipse cx="396.833" cy="237.474" rx="10.1621" ry="10"/>
								<text fill="#212121" class="stat-ring-label" x="418.73" y="241.47" text-anchor="start">Empathy</text>
							</g>
							<g class="stat-ring-focus" data-stat="persuasion">
								<ellipse cx="376.186" cy="293.902" rx="10.1621" ry="10"/>
								<text fill="#212121" class="stat-ring-label" x="397.93" y="298.06" text-anchor="start">Persuasion</text>
							</g>
							<g class="stat-ring-focus" data-stat="demeanor">
								<ellipse cx="336.704" cy="339.958" rx="10.1621" ry="10"/>
								<text fill="#212121" class="stat-ring-label" x="358.51" y="344.43" text-anchor="start">Demeanor</text>
							</g>
						</g>
						<!-- Mental -->
						<g class="stat-ring-group" data-group="mental">
							<g class="stat-ring-core" data-stat="mental">
								<ellipse cx="129.421" cy="255.972" rx="27" ry="27"/>
								<svg class="stat-ring-icon" x="112.421" y="238.972" width="34" height="34" viewBox="64 64 512 512" fill="#ffffff" color="#ffffff" aria-hidden="true"><path d="M184 120C184 89.1 209.1 64 240 64L264 64C281.7 64 296 78.3 296 96L296 544C296 561.7 281.7 576 264 576L232 576C202.2 576 177.1 555.6 170 528C169.3 528 168.7 528 168 528C123.8 528 88 492.2 88 448C88 430 94 413.4 104 400C84.6 385.4 72 362.2 72 336C72 305.1 89.6 278.2 115.2 264.9C108.1 252.9 104 238.9 104 224C104 179.8 139.8 144 184 144L184 120zM456 120L456 144C500.2 144 536 179.8 536 224C536 239 531.9 253 524.8 264.9C550.5 278.2 568 305 568 336C568 362.2 555.4 385.4 536 400C546 413.4 552 430 552 448C552 492.2 516.2 528 472 528C471.3 528 470.7 528 470 528C462.9 555.6 437.8 576 408 576L376 576C358.3 576 344 561.7 344 544L344 96C344 78.3 358.3 64 376 64L400 64C430.9 64 456 89.1 456 120z"/></svg>
								<text fill="#212121" class="stat-ring-label" x="129.42" y="220">Mental</text>
							</g>
							<g class="stat-ring-focus" data-stat="logic">
								<ellipse cx="50.5672" cy="237.474" rx="10.1621" ry="10"/>
								<text fill="#212121" class="stat-ring-label" x="29.45" y="241.63" text-anchor="end">Logic</text>
							</g>
							<g class="stat-ring-focus" data-stat="intuition">
								<ellipse cx="71.2138" cy="293.902" rx="10.1621" ry="10"/>
								<text fill="#212121" class="stat-ring-label" x="49.88" y="298.06" text-anchor="end">Intuition</text>
							</g>
							<g class="stat-ring-focus" data-stat="memory">
								<ellipse cx="110.696" cy="339.958" rx="10.1621" ry="10"/>
								<text fill="#212121" class="stat-ring-label" x="89.85" y="344.43" text-anchor="end">Memory</text>
							</g>
						</g>
						<!-- Character level at the center -->
						<g class="stat-ring-level" data-stat="level">
							<ellipse cx="223.7" cy="203.708" rx="46" ry="46"/>
							<text class="stat-ring-label" x="223.89" y="200.71" fill="#ffffff">Character<tspan x="223.89" y="214.83">Level</tspan></text>
						</g>
					</g>
				</svg>
			</div>
		</div>
		<div class="bumper"></div>
		<div class="tech-fields tech-fields-light">
			<div class="tech-field-tab-list" role="tablist" aria-label="Stats">
				<button type="button" class="tech-field-tab is-active" role="tab" id="tab-stats-example" aria-controls="stats-example" aria-selected="true">Example Stats</button>
				<button type="button" class="tech-field-tab" role="tab" id="tab-stats-types" aria-controls="stats-types" aria-selected="false">Stat Types</button>
				<button type="button" class="tech-field-tab" role="tab" id="tab-stats-resources" aria-controls="stats-resources" aria-selected="false">Stat-Based Resources</button>
			</div>

			<div class="tech-field-panel is-active" id="stats-example" role="tabpanel" aria-labelledby="tab-stats-example">
				<div class="d-flex flex-wrap flex-xs-nowrap split-cols">
					<div class="flex-7 content-stack content-stack-sm">
						<p class="copy">The example below is a Human, the average baseline in this system. Two Traits from the Kind section of their Background shape their Stats:</p>
						<ul class="copy">
							<li>Generalist gives them 1 point in each focus Stat to start.</li>
							<li>Unexceptional means none of their focus Stats can exceed 15.</li>
						</ul>
						<p class="copy">This character has put 9 core points in Physical, 2 in Social, and 1 in Mental, giving them 27, 6, and 3 focus points to spend. They’ve built a strong but brainless and crude character with a lot of Power and Endurance, which opens some doors and closes others:</p>
						<ul class="copy">
							<li>They could swing a Great Club (Endurance 4) (Power 8) like a barbarian or wear a set of Plate Armor (Endurance 8) (Power 4).</li>
							<li>They lack the Grace or Intuition to use a Fencing Sword (Grace 8) (Intuition 4) with any effectiveness, even if they got their hands on one.</li>
							<li>They’re definitely not becoming an Expert Pilot (Memory 5) (Intuition 10) (Grace 5) (any Pilot Trait) anytime soon.</li>
							<li>With so little in Social and Mental, their access to Traits beyond simple feats of brute strength will be very limited.</li>
						</ul>
						<p class="copy">Each point also gives a Trait. Odd-numbered points, shown as circles, give a Universal Trait, which any character can take. Even-numbered points, shown as squares, give a Background Trait, which has requirements based on Kind, Origin, Profession, or Past.</p>
					</div>
					<div class="d-inline-flex flex-6 flex-column">
						<div class="d-flex flex-gap-48 flex-column stat-panel">
						<!-- physical stats -->
						<div class="d-flex flex-column flex-gap-12 stat-group-physical">
							<div class="d-flex flex-row flex-gap-12 align-items-center">
								<div class="stat-badge">9</div>
								<div class="line-container d-flex flex-fill">
									<h5>Physical</h5>
									<div class="line"></div>
								</div>
							</div>
							<div class="tiny-text">
								<strong>Endurance - 11</strong>
							</div>
							<div class="stat-line">
								<div class="stat dot default"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
							</div>
							<div class="tiny-text">
								<strong>Power - 15</strong>
							</div>
							<div class="stat-line">
								<div class="stat dot default"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
							</div>
							<div class="tiny-text">
								<strong>Grace - 4</strong>
							</div>
							<div class="stat-line">
								<div class="stat dot default"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square filled"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
							</div>
						</div>
						<!-- social stats -->
						<div class="d-flex flex-column flex-gap-12 stat-group-social">
							<div class="d-flex flex-row flex-gap-12 align-items-center">
								<div class="stat-badge">2</div>
								<div class="line-container d-flex flex-fill">
									<h5>Social</h5>
									<div class="line"></div>
								</div>
							</div>
							<div class="tiny-text">
								<strong>Empathy - 2</strong>
							</div>
							<div class="stat-line">
								<div class="stat dot default"></div>
								<div class="stat square filled"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
							</div>
							<div class="tiny-text">
								<strong>Persuasion - 3</strong>
							</div>
							<div class="stat-line">
								<div class="stat dot default"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
							</div>
							<div class="tiny-text">
								<strong>Demeanor - 4</strong>
							</div>
							<div class="stat-line">
								<div class="stat dot default"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square filled"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
							</div>
						</div>
						<!-- mental stats -->
						<div class="d-flex flex-column flex-gap-12 stat-group-mental">
							<div class="d-flex flex-row flex-gap-12 align-items-center">
								<div class="stat-badge">1</div>
								<div class="line-container d-flex flex-fill">
									<h5>Mental</h5>
									<div class="line"></div>
								</div>
							</div>
							<div class="tiny-text">
								<strong>Logic - 1</strong>
							</div>
							<div class="stat-line">
								<div class="stat dot default"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
							</div>
							<div class="tiny-text">
								<strong>Intuition - 2</strong>
							</div>
							<div class="stat-line">
								<div class="stat dot default"></div>
								<div class="stat square filled"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
							</div>
							<div class="tiny-text">
								<strong>Memory - 3</strong>
							</div>
							<div class="stat-line">
								<div class="stat dot default"></div>
								<div class="stat square filled"></div>
								<div class="stat dot filled"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square empty"></div>
								<div class="stat dot empty"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
								<div class="stat dot unavailable"></div>
								<div class="stat square unavailable"></div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>

			<div class="tech-field-panel" id="stats-types" role="tabpanel" aria-labelledby="tab-stats-types">
				<div class="stat-types-grid">
					<div class="content-stack content-stack-sm">
						<h4>Physical</h4>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Endurance</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Endurance represents the body's ability to resist and persist. A high Endurance means a character is hardy and resilient to the elements, Attacks, and deprivation. Such a character can go longer without eating, march for longer without tiring, and ward off diseases or poisons more easily. A durable character isn't inherently strong, but they are consistent.
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Power</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Power represents the body's ability to generate force, be it lifting heavy objects or jumping great distances. A high Power means a character can lift more, push harder, and run faster. Such a character has an easier time climbing, has a higher jump distance, and swings harder with an axe. A powerful character isn't inherently resilient, but they can perform impressive feats for short periods of time.
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Grace</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Grace represents the body's ability to act with accuracy and control. A high Grace means a character can throw accurately, dance elegantly, and perform dexterous and delicate actions. A graceful character isn't inherently fast or powerful, but every action they take is made more effective by their agility and efficiency of movement.
							</p>
						</div>
					</div>
					<div class="content-stack content-stack-sm">
						<h4>Social</h4>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Empathy</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Empathy represents the character's ability to interpret others, be it understanding their emotional state, picking up on subtle tics and cues in their body language, or grasping the intent behind orders. A high Empathy means the character can read others like a book, understand their thoughts and desires, and quickly ascertain if someone is acting suspiciously. An empathetic character can't inherently convince others to see their point of view, but they can quickly understand what makes someone tick.
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Persuasion</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Persuasion represents the character's ability to convince others, be it through a well-structured argument, stirring rhetoric, or simple force of personality. A high Persuasion means the character can get the better of negotiations, convince others of a lie, or command loyalty in their troops. Persuasion doesn't make someone likable or respected, but they can get their way despite that.
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Demeanor</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Demeanor represents the character's control of their own vibe, be it keeping cool under fire, commanding a room, or fading into a crowd. A high Demeanor means that a character can seem trustworthy at a glance, can look poised for the camera, and can inspire confidence in their troops. A high Demeanor doesn't mean a character inherently understands or can control others, but looking the part and not cracking under pressure can go a long way.
							</p>
						</div>
					</div>
					<div class="content-stack content-stack-sm">
						<h4>Mental</h4>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Logic</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Logic represents the character's ability to work through problems in a systematic and rational manner, be it solving a complex math equation, understanding what a few footprints and broken branches mean, or counting their bullets in a firefight. A high Logic means a character can think abstractly and systematically to figure out complex problems, even in difficult situations. A logical character isn't inherently quick-witted, but given time they can reason their way through almost anything.
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Intuition</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Intuition represents the character's ability to read a situation without all the facts. A high Intuition means a character can make the leaps in logic needed to get through a challenge quickly and naturally, be it estimating how long the rations will last, reading their opponent's movements for a perfect parry, or figuring out the missing ingredient in a potion. A high Intuition doesn't mean a character knows or understands the situation, but it can give them an edge regardless.
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Memory</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Memory represents the character's ability to store and recall information. A high Memory means a character can remember an obscure fact they learned in school, recall a suspicious face that walked by them at lunch, or recite a prayer without error. Memory doesn't help someone put together the facts in their head but is the starting point for many mental tasks.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="tech-field-panel" id="stats-resources" role="tabpanel" aria-labelledby="tab-stats-resources">
				<div class="d-flex flex-wrap flex-xs-nowrap split-cols">
					<div class="flex-7 content-stack">
						<div class="content-stack content-stack-sm">
							<h4>Health and Hit Points (HP)</h4>
							<p class="copy">
								Hit Points (abbreviated as HP) are used to calculate the amount of physical harm a character or object can receive. Hit Points are intended as an abstract measurement of the hardiness, size, and capacity to absorb punishment that an object or character possesses. Lost HP do not directly correspond to specific forms of damage but are instead intended as an at-a-glance measure of the health of a character or object.
							</p>
							<p class="copy">
								HP are calculated as 10 plus one for each point a character has in their Physical focus Stats. A max-Level Human who has spent every core point on Physical will have 55 HP before Equipment or Traits are accounted for. HP are lost as a character is harmed and regained slowly over time or quickly through the use of Equipment, abilities, or RP occurrences. Unless Hit Points have been lost, a character always defaults to possessing their maximum number of HP.
							</p>
							<p class="copy">
								As HP are lost, a character or object will gain or lose Temporary Condition Traits such as Injured or Incapacitated. The HP-related Traits are listed following this section. Several of these Traits have no inherent effect but interact with other game systems. Additionally, a character may gain Temporary Condition Traits that describe specific injuries they've incurred. These are not directly tied to the character's Hit Point total, though Condition Traits such as Severe Bleeding may cause a character to keep losing HP at a steady rate until their injury is treated. Typically such conditions are conveyed through RP reasons or through Effects or Abilities attached to the thing that harmed them.
							</p>
							<p class="copy">
								At their most resilient, a maxed-out Human character can sustain roughly 4 times the damage of a starting character before being incapacitated. While that may sound like a lot, it's actually rather low. Comparable systems like D&D sit at around a 20x multiplier. This system, however, does not have the same steeply increasing numeric values as more combat-oriented systems and contains numerous ways to increase HP outside of simple Leveling.
							</p>
							<ul class="copy">
								<li><strong>Healthy - Conveyed - Condition</strong><br>
								Temporary (A character or object gains this Trait while they are at their maximum HP total)<br>
								This Trait has no effect on its own.</li>
								<li><strong>Injured - Conveyed - Condition</strong><br>
								Temporary (A character gains this Trait while they are below their maximum HP total)<br>
								This Trait has no effect on its own.</li>
								<li><strong>Severely Injured - Conveyed - Condition</strong><br>
								Temporary (A character gains this Trait while they are below half their maximum HP total)<br>
								This Trait has no effect on its own.</li>
								<li><strong>Incapacitated - Conveyed - Condition</strong><br>
								Temporary (A character gains this Trait while they are below a quarter of their maximum HP total)<br>
								This character has been incapacitated by their injuries and can no longer perform voluntary actions or perceive the world around them.</li>
								<li><strong>Dead - Conveyed - Condition</strong><br>
								Temporary (A character gains this Trait if they are at 0 or less HP)<br>
								This character is dead and cannot perform voluntary actions.<br>
								This character cannot be healed by any means unless otherwise stated.</li>
								<li><strong>Damaged - Conveyed - Condition</strong><br>
								Temporary (An object gains this Trait if it is below its maximum HP total)<br>
								This Trait has no effect on its own.</li>
								<li><strong>Destroyed - Conveyed - Condition</strong><br>
								Temporary (An object gains this Trait if it is at 0 or less HP)<br>
								This object has been destroyed and no longer functions in any intended capacity.<br>
								This object cannot be repaired by any means unless otherwise stated.</li>
							</ul>
						</div>
					</div>
					<div class="flex-6 content-stack">
						<div class="content-stack content-stack-sm">
							<h4>Vibe Points (VP)</h4>
							<p class="copy">
								VP are a spendable resource that can be used to improve a character's Skill Checks in socially oriented RP scenarios or can be spent on abilities that incur a VP cost. A character has a maximum number of VP equal to the total of their Social focus Stats. Certain Traits and Equipment can increase the number or recovery rate of Vibe Points. VP are regained slowly, over time, and are an important resource to store up and manage when delicate negotiations are expected or when a character really needs to intimidate a guard or get them to look the other way.
							</p>
							<p class="copy">VP can be spent on:</p>
							<ul class="copy">
								<li>Rerolling a single die in a socially related Skill Check (such as to try again when lying to a guard about your motives)</li>
								<li>Asking the GM to improve the results of a socially related Skill Check (such as getting a better price in a negotiation over a new car).</li>
								<li>Using an Ability with a listed VP cost such as using the Forgettable Face Trait to make a passerby forget your character's face once per point spent.</li>
							</ul>
						</div>
						<div class="content-stack content-stack-sm">
							<h4>Savvy Points (SP)</h4>
							<p class="copy">
								SP are a spendable resource that can be used to boost a character's Skill Checks in mentally oriented RP scenarios or to gain access to intuitions or abilities such as those granted by Traits. SP are regained slowly, over time, and are an important resource to store up and manage when being tossed into new situations or when a character is out of their depth. A character has a maximum number of SP equal to the total of their Mental focus Stats. Certain Traits and Equipment can increase the number or recovery rate of SP. SP can be spent on:
							</p>
							<ul class="copy">
								<li>Rerolling a single die in a mentally related Skill Check (such as to try again when attempting to decipher or remember an obscure piece of history)</li>
								<li>Requesting Competence or Advantage depending on which is applicable to the situation at hand (indicating that the character is using their intuition or savvy to navigate their way through a situation they may not be experienced with)</li>
								<li>Using an Ability with a listed SP cost such as using the Born Navigator Trait to automatically succeed in discerning a ship's direction when all that's available is the wind and waves to judge by.</li>
							</ul>
						</div>
						<div class="content-stack content-stack-sm">
							<h4>Mana Points (MP)</h4>
							<p class="copy">
								MP are a spendable resource like VP and SP, but they come from the Magic core Stat instead of focus Stats. A character has a maximum number of MP equal to 3 for each point of Magic, plus any MP their Kind or Traits give. A Goblinoid Tatot, for example, starts with 6 MP before putting a point into Magic. Only characters who can put points into Magic, like most Kinds of Dreft, have MP to begin with.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
