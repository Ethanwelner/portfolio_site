<?php require_once __DIR__ . '/lore.php'; ?>
<div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<h3 class="sub-title mb-3" id="character">Sample Character Sheet</h3>
		<div class="copy stinger black mb-3">placeholder subtitle</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
<div class="d-flex flex-wrap flex-xs-nowrap">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="game-mechanics flex-7">
		<h3 class="mb-3">Musings on the process for creating a character</h3>
		<ul class="copy">
			<li>Character Level is tracked separately from Outer Ring stats.</li>
			<li>Inner Ring stats are listed as a single number docked to their Outer Ring lines.</li>
			<li>The Outer Ring lines start unfilled, and are filled in as the player adds points to them, looking at the circle or squares to know what type of Trait they gain.</li>
			<li>Characters select a Kind, origin, profession, and past.</li>
			<li>The character's Kind determines their starting stats, max stats, grants any unique ability the Kind may possess, and grants access to various Trait categories.</li>
			<li>The character's origin grants access to a starting set of origin Traits, typically a mix of regular and knowledge Traits. It also grants access to selectable Traits related to the origin as well as other RP specific things (wealth, identification, etc).</li>
			<li>The character's profession grants access to a starting set of profession Traits, typically a mix of regular and knowledge Traits. It also grants access to selectable Traits related to the profession as well as other RP specific things (equipment, licenses, etc).</li>
			<li>Every character has 9 Outer Ring stat points at level 0, spread out by their Kind. A human has 1 point in each Outer Ring stat.</li>
			<li>Characters always start at level 1 at least, so every new character also gets their level 1 points: 1 Inner Ring point and 3 Outer Ring points to spend in that category.</li>
			<li>Since every Outer Ring point grants a Trait, characters will typically start with a set of player-selectable Traits. A human's 9 level 0 points give them 9 universal Traits, plus the Traits from their level 1 points, in addition to the Traits automatically granted to them by their Kind, origin, profession, and past. Since they only have a point or two in each stat, their selection will be relatively limited to less powerful and more common Traits.
			</li>
			<li>It may be preferable to start a campaign with characters at level 2 or 3, so that they can pick out the low level but still specialized Traits their character would possess and to help them differentiate from each other.</li>
			<li>This character has selected to use two of its universal Traits gained at creation to increase its knowledge in contraband and security; it can do this due to being a freshly created character. Future stat gains cannot be used to gain knowledge Traits, though this is at the GM's discretion.
			</li>
		</ul>
	</div>
	<div class="d-inline-flex align-items-center flex-1"></div>
	<div class="game-mechanics flex-6">
		<h3 class="mb-3">Backgrounds being used in the sample character sheet</h3>
		<div class="copy">
			<div class="line-container">
				<h5><strong>Kind: Human</strong></h5>
				<div class="line"></div>
			</div>
			<h6>Generalists</h6>
			<p class="copy">Humans start with 1 point in every Outer Ring stat.</p>
			<h6>Unexceptional</h6>
			<p class="copy">Humans cannot exceed 15 in any Outer Ring stat unless otherwise modified.</p>
			<h6>Versatile</h6>
			<p class="copy">Humans can take cybernetics Traits.</p>
			<h6>Biological</h6>
			<p class="copy">Humans can take genetic engineering Traits.</p>

			<div class="line-container">
				<h5><strong>Origin: The American Empire</strong></h5>
				<div class="line"></div>
			</div>
			<h6>
				Public Education<br>
				Imperial citizens start with the following knowledge Traits
			</h6>
			<p class="copy">
				English (language)<br>
				American History (1)<br>
				American Geography (1)<br>
				Imperial Law (1)
			</p>

			<div class="line-container">
				<h5><strong>Profession: Smuggler</strong></h5>
				<div class="line"></div>
			</div>
			<h6>Skill Traits</h6>
			<p class="copy">Smooth Talker<br>
			Concealment<br>
			1 additional Contact</p>
			<h6>Knowledge Traits</h6>
			<p class="copy">Contraband<br>
			Security<br>
			1 additional Language</p>

			<div class="line-container">
				<h5><strong>Past: Raised By The Streets</strong></h5>
				<div class="line"></div>
			</div>
			<h6>Skill Traits</h6>
			<p class="copy">Schemer<br>
			Sleight of Hand<br>
			1 additional contact</p>
			<h6>Knowledge Traits</h6>
			<p class="copy">Streetwise<br>
			Criminal Activity<br>
			1 additional Language</p>
		</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
<div class="separator"></div>





<!-- ------------ CHARACTER SHEET ------------ -->

<div class="d-flex flex-wrap flex-xs-nowrap">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
<div class="d-flex flex-column c-sheet flex-gap-24 flex-fill">
	<div class="position-absolute">
		<div class="level-badge">2</div>
	</div>
	<div class="d-flex flex-18 flex-gap-48 row-gap-12 flex-fill c-sheet-box flex-wrap flex-md-nowrap">
		<div class="flex-grow-1 d-flex flex-row flex-gap-24 flex-fill">
			<div>
				<h2>Edwin Humble</h2>
				<div class="d-flex flex-row flex-gap-12">
					<div><span class="tiny-text"><strong>Age</strong></span>&nbsp;30</div>
					<div><span class="tiny-text"><strong>Height</strong></span>&nbsp;6 feet</div>
					<div><span class="tiny-text"><strong>Weight</strong></span>&nbsp;190lbs </div>
				</div>
			</div>
		</div>
		<div class="flex-grow-1 d-flex justify-content-start justify-content-md-center c-variables">
			<h5 class="d-inline-block"><i>13</i>&nbsp;<strong>HP</strong></h5>|
			<h5 class="d-inline-block"><i>2</i>&nbsp;<strong>VP</strong></h5>|		
			<h5 class="d-inline-block"><i>1</i>&nbsp;<strong>SP</strong></h5>
		</div>
		<div class="flex-grow-1 d-flex justify-content-start justify-content-md-end c-variables">
			<h5 class="d-inline-block"><i>1</i> <strong>Blunt</strong></h5>|
			<h5 class="d-inline-block"><i>0</i> <strong>Piercing</strong></h5>|
			<h5 class="d-inline-block"><i>1</i> <strong>Slashing</strong></h5>|
			<h5 class="d-inline-block"><i>0</i> <strong>Heat</strong></h5>
		</div>
	</div>
	<div class="d-flex flex-column c-sheet-box">
		<div class="d-inline-flex flex-12">
			<div class="line-container d-flex flex-fill">
				<h4 class="">Description &amp; Backstory</h4>
				<div class="line"></div>
			</div>
		</div>
		<div class="d-inline-flex flex-12 flex-gap-48 flex-wrap flex-md-nowrap">
			<div class="d-inline-flex flex-4">
				<ul class="empty-list call-response mb-0 copy">
					<li>Kind</li>
					<li>Human</li>
					<li>Origin</li>
					<li>The American Empire</li>
					<li>Profession</li>
					<li>Smuggler</li>
					<li>Past</li>
					<li>Raised By The Streets</li>
					<li>Cash</li>
					<li>2,000 ID</li>
					<li>Wealth</li>
					<li>15,000 ID</li>
					<li>Languages</li>
					<li>English, Spanish, Orcoid</li>
				</ul>
			</div>
			<div class="d-inline-flex flex-4">
				<p class="copy">Edwin Humble is a Void-Truck driver and part-time smuggler in Earth orbit, working the American Empire’s Sol territories. Raised rough at a young age, Edwin was cared for by his mother in the teeming streets of Chicago before stowing away on his father's cargo <?php echo sf_lore_link('shuttles', 'shuttle'); ?> during one of the man's rare visits. The boy quickly learned the trade of private cargo running, both the legal and less-than-legal sides of it. After a delivery went south and his father was killed, Edwin took over the ‘family business’ and runs a small-time cargo transportation operation out of his own name, though his real income comes from what’s stored in the secret compartment at the back of the shuttle. Edwin's two goals in life are to get rich and to find out who was responsible for his father's murder.</p>
			</div>
			<div class="d-inline-flex flex-4">
				<div>
					<img loading="lazy" data-src="img/char_portrait_1.webp" alt="Edwin Humble" class="c-sheet-image">
				</div>
			</div>
		</div>
	</div>
	<div class="d-flex c-sheet-box flex-fill flex-gap-48 flex-wrap flex-md-nowrap">
		<div class="flex-5">
			<!-- stat grid -->
			<div class="d-flex flex-gap-24 flex-column flex-fill">
				<!-- physical stats -->
				<div class="d-flex flex-column flex-gap-12">
					<div class="d-flex flex-row flex-gap-12 align-items-center">
						<div class="stat-badge">1</div>
						<div class="line-container d-flex flex-fill">
							<h5>Physical</h5>
							<div class="line"></div>
						</div>
					</div>
					<div class="tiny-text">
						<strong>Endurance - 1</strong>
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
						<strong>Power - 1</strong>
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
						<strong>Grace - 1</strong>
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
				</div>
				<!-- social stats -->
				<div class="d-flex flex-column flex-gap-12">
					<div class="d-flex flex-row flex-gap-12 align-items-center">
						<div class="stat-badge">2</div>
						<div class="line-container d-flex flex-fill">
							<h5>Social</h5>
							<div class="line"></div>
						</div>
					</div>
					<div class="tiny-text">
						<strong>Empathy - 1</strong>
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
						<strong>Persuasion - 2</strong>
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
						<strong>Demeanor - 3</strong>
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
				<!-- mental stats -->
				<div class="d-flex flex-column flex-gap-12">
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
						<strong>Memory - 2</strong>
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
				</div>
			</div>
		</div>
		<div class="d-flex flex-3 flex-column flex-gap-24">
			<ul class="empty-list mb-0 copy">
				<div class="line-container d-flex flex-fill">
					<h5>Knowledges</h5>
					<div class="line"></div>
				</div>
				<li><span class="tiny-text">Knowledge:</span> American History (1)</li>
				<li><span class="tiny-text">Knowledge:</span> American Geography (1)</li>
				<li><span class="tiny-text">Knowledge:</span> Imperial Law (1)</li>
				<li><span class="tiny-text">Knowledge:</span> Contraband (2)</li>
				<li><span class="tiny-text">Knowledge:</span> Security (2)</li>
				<li><span class="tiny-text">Knowledge:</span> Streetwise (1)</li>
				<li><span class="tiny-text">Knowledge:</span> Criminality (1)</li>
				<li><span class="tiny-text">Knowledge:</span> English</li>
				<li><span class="tiny-text">Knowledge:</span> Spanish</li>
				<li><span class="tiny-text">Knowledge:</span> Orcoid</li>
			</ul>
			<ul class="empty-list mb-0 copy">
				<div class="line-container d-flex flex-fill">
					<h5>Skills</h5>
					<div class="line"></div>
				</div>
				<li>Smooth Talker (1)</li>
				<li>Concealment (1)</li>
				<li>Schemer</li>
				<li>Sleight of Hand (1)</li>
				<li>Act Natural (2)</li>
				<li>Wheelman (1)</li>
				<li>Pilot (basic automotive) (1)</li>
				<li>Pilot (basic voidcraft) (1)</li>
				<li>Backroads Traveler</li>
				<li>Rapid Appraisal</li>
				<li>Scrounger (1)</li>
			</ul>
			<ul class="empty-list mb-0 copy">
				<div class="line-container d-flex flex-fill">
					<h5>Other Traits and Abilities</h5>
					<div class="line"></div>
				</div>
				<li>Inheritance (Rickety Cargo Shuttle)</li>
				<li>More Lucky Than Good</li>
				<li>Forgettable Face</li>
				<li>Contacts (1)</li>
			</ul>
		</div>
		<div class="flex-4 flex-gap-24">
			<div class="line-container d-flex flex-fill">
				<h5>Items and Equipment</h5>
				<div class="line"></div>
			</div>
			<ul class="empty-list copy">
				<li>Sturdy Leather Jacket (1 blunt, 1 slashing, torso)</li>
			</ul>
		</div>
	</div>
</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>