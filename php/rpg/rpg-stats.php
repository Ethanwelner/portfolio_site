<div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<h3 class="sub-title mb-3" id="stats">Explaining Stats</h3>
		<div class="copy stinger black mb-3">placeholder subtitle</div>
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
						A character's stats are intended to be a representation of that character's physical, mental, and spiritual limitations. Stats are used to track a character's growth or to show a character's level of capability. There are two types of stats a character invests in, and they are directly linked. A character's core stats record where each level was invested and set how many focus points a character has in each category. A character's focus stats determine Skill Checks, access to Traits, and resources like Hit Points, Vibe Points, and Savvy Points. A character's Kind will govern a character's Level 0 stats and will contain maximum values a character's stats cannot exceed.
					</p>
					<ul class="copy">
						<li>When your character gains a level you get a point to spend in any core stat.</li>
						<li>Adding a point to a core stat gives you 3 to spend in the focus stats of that category.</li>
						<li>The maximum that can be spent on any core or focus stat is 20.</li>
						<li>Traits, Equipment, or other effects can cause these stat totals to rise above 20.</li>
						<li>Hit Points & other resource mechanics are dependent on scores from the focus stats.</li>
						<li>Skill Check bonuses and access to certain Traits are dependent on scores from the focus stats.</li>
						<li>Each point put into a stat is tracked in the dot bar; both of these visualizations are meant to be illustrative of a character's stats at a glance. Neither is strictly required, as the stats they describe can be more compactly described in other ways.</li>
						<li>An ogre can be all physicality but may only be smart enough to use a club.</li>
						<li>A soldier needs to be smart enough to know how to load a musket and graceful enough to aim it.</li>
						<li>A spy may be incredibly persuasive and have the Demeanor to fit in anywhere but probably needs Memory to remember what he sees.</li>
					</ul>
				</div>
			</div>
			<div class="d-inline-flex flex-6 justify-content-end align-items-center">
				<svg class="column-image stat-ring" viewBox="-8 -4 484 388" role="img" aria-labelledby="stat-ring-title" xmlns="http://www.w3.org/2000/svg">
					<title id="stat-ring-title">Stat diagram: character level at the center, the three core stats around it, and their focus stats outside</title>
					<g fill="#979797" font-size="12" font-weight="700" text-anchor="middle">
						<!-- Rings: focus stats outside, core stats inside -->
						<ellipse class="stat-ring-focus-ring" cx="223.7" cy="207.268" rx="176.076" ry="173.268" fill="none" stroke="#979797" stroke-width="2"/>
						<ellipse class="stat-ring-core-ring" cx="223.7" cy="202.408" rx="108.864" ry="107.128" fill="none" stroke="#979797" stroke-width="4"/>
						<text class="stat-ring-ring-name" x="407.49" y="108.47">Focus<tspan x="407.49" y="122.12">Stats</tspan></text>
						<text class="stat-ring-ring-name" x="347.34" y="140.35">Core<tspan x="347.34" y="154.12">Stats</tspan></text>
						<!-- Physical -->
						<g class="stat-ring-group" data-group="physical">
							<g class="stat-ring-core" data-stat="physical">
								<ellipse cx="223.7" cy="95.2798" rx="20.3241" ry="20"/>
								<text fill="#212121" class="stat-ring-label" x="223.71" y="134.93">Physical</text>
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
								<ellipse cx="317.979" cy="255.972" rx="20.3241" ry="20"/>
								<text fill="#212121" class="stat-ring-label" x="271.04" y="259.97">Social</text>
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
								<ellipse cx="129.421" cy="255.972" rx="20.3241" ry="20"/>
								<text fill="#212121" class="stat-ring-label" x="176.96" y="259.97">Mental</text>
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
						<g class="stat-ring-level">
							<ellipse cx="223.7" cy="203.708" rx="37.5997" ry="37"/>
							<text class="stat-ring-label" x="223.89" y="200.71" fill="#ffffff">Character<tspan x="223.89" y="214.83">Level</tspan></text>
						</g>
					</g>
				</svg>
			</div>
		</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
<div class="separator"></div>



<div class="d-flex flex-wrap flex-xs-nowrap">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<div class="d-flex flex-wrap flex-xs-nowrap split-cols">
			<div class="flex-7 content-stack">
				<div class="content-stack content-stack-sm">
					<!-- example stats -->
					<h3>Example stats</h3>
					<ul class="copy">
						<li>Some Kinds will have lowered maximums; the below example is a human and cannot exceed 15 in any focus stat due to the Unexceptional Trait in the Kind section of its Background.</li>
						<li>The below character started with 1 in each stat due to the human Generalist Trait in the Kind section of its Background.</li>
						<li>Humans are intended to be the average baseline in this system.</li>
						<li>This example character has 9 points spent in Physical so 27 to spend in the focus stats.</li>
						<li>This character has spent only 2 points in Social and 1 in Mental, so its access to Traits that go beyond simple feats of brute strength will be very limited.</li>
						<li>Each point gives a Trait that is Universal (circle/odd number) or based on the character's Background (square/even number).</li>
						<li>Universal Traits are available to any character, Background Traits have requirements based on Kind, Origin, or Profession.</li>
						<li>This character has oriented their stats to be a strong, but brainless and crude character with a lot of Power and Endurance. Maybe they swing a Great Club (Endurance 4) (Power 8) like a barbarian or have a set of Plate Armor (Endurance 8) (Power 4).</li>
						<li>This character lacks the Grace or Intuition to be able to use a Fencing Sword (Grace 8) (Intuition 4) with any effectiveness, even if they got their hands on one.</li>
						<li>They're definitely not becoming an Expert Pilot (Memory 5) (Intuition 10) (Grace 5) (any Pilot skill) anytime soon.</li>
					</ul>
				</div>
			</div>
				<!-- stat grid -->
				<div class="d-inline-flex flex-6 flex-gap-48 flex-column">
					<!-- physical stats -->
					<div class="d-flex flex-column flex-gap-12">
						<div class="d-flex flex-row flex-gap-12 align-items-center">
							<div class="stat-badge">9</div>
							<h5>Physical</h5>
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
					<div class="d-flex flex-column flex-gap-12">
						<div class="d-flex flex-row flex-gap-12 align-items-center">
							<div class="stat-badge">2</div>
							<h5>Social</h5>
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
					<div class="d-flex flex-column flex-gap-12">
						<div class="d-flex flex-row flex-gap-12 align-items-center">
							<div class="stat-badge">1</div>
							<h5>Mental</h5>
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
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
<div class="separator"></div>


<div class="d-flex flex-wrap flex-xs-nowrap">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<div class="d-flex flex-wrap flex-xs-nowrap split-cols">
			<div class="flex-7 content-stack">
				<div class="content-stack content-stack-sm">
					<!-- stat types -->
					<h3>Stat Types</h3>
					<div class="content-stack content-stack-sm">
						<h4>Physical</h4>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Endurance</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Endurance represents the body's ability to resist and persist. A high Endurance means a character is hardy and resilient to the elements, attacks, and deprivation. Such a character can go longer without eating, march for longer without tiring, and ward off diseases or poisons more easily. A durable character isn't inherently strong, but they are consistent.
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Power</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Power represents the body's ability to generate force, be it lifting heavy objects or jumping high distances. A high Power means a character can lift more, push harder, run faster. Such a character has an easier time climbing, has a higher jump distance, and swings harder with an axe. A powerful character isn't inherently resilient, but they can perform impressive feats for short periods of time.
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Grace</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Grace represents the body's ability to act with accuracy and control. A high Grace means a character can throw accurately, dance gracefully, and perform dexterous and delicate actions. A graceful character isn't inherently fast or powerful, but every action they take is made more effective by their agility and efficiency of movement.
							</p>
						</div>
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
							Empathy represents the character's ability to interpret others, be it understanding their emotional state, picking up on subtle tics and cues in their body language, or quickly interpreting orders. A high Empathy means the character can read others like a book, understand their thoughts and desires, and quickly ascertain if someone is acting suspicious. An empathetic character can't inherently convince others to see their point of view, but they can quickly understand what makes someone tick.
						</p>
					</div>
					<div class="content-stack content-stack-xs">
						<div class="line-container">
							<h5><strong>Persuasion</strong></h5>
							<div class="line"></div>
						</div>
						<p class="copy">
							Persuasion represents the character's ability to convince others, be it through a well-structured argument, persuasive rhetoric, or simple force of personality. A high Persuasion means the character can get the better of negotiations, convince others of a lie, or command loyalty in their troops. Persuasion doesn't make someone likable or respected, but they can get their way despite that.
						</p>
					</div>
					<div class="content-stack content-stack-xs">
						<div class="line-container">
							<h5><strong>Demeanor</strong></h5>
							<div class="line"></div>
						</div>
						<p class="copy">
							Demeanor represents the character's control of their own vibe, be it acting cool under fire, the ability to command a room, or the ability to fade into a crowd. A high Demeanor means that a character can seem trustworthy at a glance, can look poised for the camera, and can command loyalty from their troops. A high Demeanor doesn't mean a character inherently understands or can control others, but looking the part and not cracking under pressure can go a long way.
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
							Logic represents the character's ability to work through problems in a systematic and rational manner, be it solving a complex math equation, understanding what a few footprints and broken branches mean, or counting their bullets in a firefight. A high Logic means a character can think abstractly and systematically to figure out complex problems or during difficult situations.
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
							Memory represents the character's ability to store and recall information. A high Memory will allow a character to remember an obscure fact they learned in school, recall a suspicious face that walked by them at lunch, or recite a prayer without error. Memory doesn't help someone put together the facts in their head but is the starting point for many mental tasks.
						</p>
					</div>
				</div>
			</div>
			<div class="flex-6 content-stack">
				<div class="content-stack content-stack-sm">
					<h3>Stat-Based Resources</h3>
					<div class="content-stack content-stack-sm">
						<h4>Health and Hit Points (HP)</h4>
						<p class="copy">
							Hit Points (abbreviated as HP) are used to calculate the amount of physical harm a character or object can receive. Hit points are intended as an abstract measurement of the hardiness, size, and capacity to absorb punishment that an object or character possesses. Lost HP do not directly correspond to specific forms of damage but are instead intended as an at-a-glance measure of the health of a character or object.
						</p>
						<p class="copy">
							HP's are calculated with a starting basis of 10 + each point a character possesses in a Physical focus stat. A max-level Human who has spent every level increasing their Physical stats will have 55 HP before Equipment or Traits are accounted for. HP's are lost as a character is harmed and regained slowly over time or quickly through the use of equipment, abilities, or RP occurrences. Unless hit points have been lost, a character always defaults to possessing their maximum number of HP.
						</p>
						<p class="copy">
							As HP's are lost a character or object will gain or lose Temporary Condition Traits such as Injured or Incapacitated. The HP-related traits are listed following this section. Several of these traits have no inherent effect but interact with other game systems. Additionally, a character may gain Temporary Condition Traits that describe specific injuries they've incurred, but these are not directly tied to the character's hit point total, though Condition Traits such as Severe Bleeding may result in a character continuing to lose HP at a steady rate until their injury is treated. Typically such conditions are conveyed through RP reasons or through Effects or Abilities attached to the thing that harmed them.
						</p>
						<p class="copy">
							At their most resilient, a maxed-out human character can sustain roughly 4 times the damage of a starting character before being incapacitated. While that may sound like a lot, it's actually rather low. Comparative systems like D&D sit at around a 30x multiplier. This system, however, does not have the same levels of exponentially increasing numeric values as more combat-oriented systems and contains numerous ways to increase HP outside of simple leveling.
						</p>
						<ul class="copy">
							<li><strong>Healthy - Conveyed - Condition</strong><br>
							Temporary (A character or object gains this trait while they are at their maximum HP total)<br>
							This Trait has no effect on its own.</li>
							<li><strong>Injured - Conveyed - Condition</strong><br>
							Temporary (A character gains this trait while they are below their maximum HP total)<br>
							This Trait has no effect on its own.</li>
							<li><strong>Severely Injured - Conveyed - Condition</strong><br>
							Temporary (A character gains this trait while they are below half their maximum HP total)<br>
							This Trait has no effect on its own.</li>
							<li><strong>Incapacitated - Conveyed - Condition</strong><br>
							Temporary (A character gains this trait while they are at less than a quarter of their HP total)<br>
							This character has been incapacitated by their injuries and can no longer perform voluntary actions or perceive the world around them.</li>
							<li><strong>Dead - Conveyed - Condition</strong><br>
							Temporary (A character gains this trait if they are at 0 or less HP)<br>
							This character is dead and cannot perform voluntary actions.<br>
							This character cannot be healed by any means unless otherwise stated.</li>
							<li><strong>Damaged - Conveyed - Condition</strong><br>
							Temporary (An object gains this trait if it is below its maximum HP total)<br>
							This Trait has no effect on its own.</li>
							<li><strong>Destroyed - Conveyed - Condition</strong><br>
							Temporary (An object gains this trait if it is at 0 or less HP)<br>
							This object has been destroyed and no longer functions in any intended capacity.<br>
							This object cannot be repaired by any means unless otherwise stated.</li>
						</ul>
					</div>
					<div class="content-stack content-stack-sm">
						<h4>Vibe Points (VP)</h4>
						<p class="copy">
							VP are a spendable resource that can be used to improve a character's skill checks in socially oriented RP scenarios or can be spent on abilities that incur a VP cost. A character has a maximum number of VP's equal to the total of their Social focus stats. Certain Traits and equipment can increase the number or recovery rate of Vibe Points. VP's are regained slowly, over time, and are an important resource to store up and manage when delicate negotiations are expected or when a character really needs to intimidate a guard or get them to look another way.
						</p>
						<p class="copy">VP's can be spent on:</p>
						<ul class="copy">
							<li>Rerolling a single die in a socially related skill check (such as to try again when lying to a guard about your motives)</li>
							<li>Asking the GM to improve the results of a socially related skill check (such as improving the result of a negotiation over the price of a new car).</li>
							<li>Using an Ability with a listed VP cost such as using the Forgettable Face Trait to make a passerby forget your character's face once per point spent.</li>
						</ul>
					</div>
					<div class="content-stack content-stack-sm">
						<h4>Savvy Points (SP)</h4>
						<p class="copy">
							SP are a spendable resource that can be used to boost a character's skill checks in mentally oriented RP scenarios or to gain access to intuitions or abilities such as those granted by Traits or background checks. SP are regained slowly, over time, and are an important resource to store up and manage when being tossed into new situations or when a character is outside of their depth. A character has a maximum number of SP's equal to the total of their Mental focus stats. Certain Traits and equipment can increase the recovery rate of SP's. SP's can be spent on:
						</p>
						<ul class="copy">
							<li>Rerolling a single die in a mentally related skill check (such as to try again when attempting to decipher or remember an obscure piece of history)</li>
							<li>Requesting competence or advantage depending on which is applicable to the situation at hand (indicating that the character is using their intuition or savvy to navigate their way through a situation they may not be experienced with)</li>
							<li>Using an Ability with a listed SP cost such as using the Born Navigator Trait to automatically succeed in discerning a ship's direction when all that's available is the wind and waves to judge by.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>