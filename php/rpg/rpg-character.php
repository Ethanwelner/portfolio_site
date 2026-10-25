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
	<div class="flex-14">
		<div class="d-flex flex-wrap flex-xs-nowrap split-cols">
			<div class="flex-7 content-stack">
				<div class="content-stack content-stack-sm">
					<h3>Musings on the process for creating a character</h3>
					<ul class="copy">
						<li>Character Level is tracked separately from focus stats.</li>
						<li>Core stats are listed as a single number docked to their focus stat lines.</li>
						<li>The focus stat lines start unfilled, and are filled in as the player adds points to them, looking at the circle or squares to know what type of Trait they gain.</li>
						<li>Characters select a Kind, origin, profession, and past.</li>
						<li>The character's Kind adds a bonus to their stats, sets their max stats, grants any unique ability the Kind may possess, and grants access to various Trait categories.</li>
						<li>The character's origin grants access to a starting set of origin Traits, typically a mix of regular and knowledge Traits. It also grants access to selectable Traits related to the origin as well as other RP specific things (wealth, identification, etc). Some origins also give a bonus point to place in one category's focus stats, like the American Empire's +1 Physical.</li>
						<li>The character's profession grants access to a starting set of profession Traits, typically a mix of regular and knowledge Traits. It also grants access to selectable Traits related to the profession as well as other RP specific things (equipment, licenses, etc).</li>
						<li>Every character's stats start at 0, and their Kind adds 9 bonus points to their focus stats, spread out to fit the Kind. A human gets +1 in each focus stat.</li>
						<li>Characters always start at level 1 at least, so every new character also gets their level 1 points: 1 core point and 3 focus points to spend in that category.</li>
						<li>Since every focus point grants a Trait, characters will typically start with a set of player-selectable Traits. A human's 9 bonus points give them 9 universal Traits, plus the Traits from their level 1 points, in addition to the Traits automatically granted to them by their Kind, origin, profession, and past. Since they only have a point or two in each stat, their selection will be relatively limited to less powerful and more common Traits.
						</li>
						<li>It may be preferable to start a campaign with characters at level 2 or 3, so that they can pick out the low level but still specialized Traits their character would possess and to help them differentiate from each other.</li>
						<li>This sample character is level 5: 9 bonus points from its Kind, 1 from its Origin, and 15 from five levels, so 25 focus points and 25 Traits from them. It has used five of those Traits to raise its Contraband, Security, Streetwise, Criminal Activity, and American Geography knowledges to Rank 2, which it can do because it’s a freshly created character with the Memory 6 that Rank 2 requires, and it has banked nine more for in-game opportunities. Future stat gains cannot be used to gain knowledge Traits, though this is at the GM's discretion.
						</li>
					</ul>
				</div>
			</div>
			<div class="flex-6 content-stack">
				<div class="content-stack content-stack-sm">
					<h3>Backgrounds being used in the sample character sheet</h3>
					<div class="content-stack content-stack-sm">
						<div class="line-container">
							<h5><strong>Kind: Human</strong></h5>
							<div class="line"></div>
						</div>
						<div class="content-stack content-stack-xxs">
							<h6>Generalists</h6>
							<p class="copy">Humans get a +1 bonus to every focus stat.</p>
						</div>
						<div class="content-stack content-stack-xxs">
							<h6>Unexceptional</h6>
							<p class="copy">Humans cannot exceed 15 in any focus stat unless otherwise modified.</p>
						</div>
						<div class="content-stack content-stack-xxs">
							<h6>Versatile</h6>
							<p class="copy">Humans can take cybernetics Traits.</p>
						</div>
						<div class="content-stack content-stack-xxs">
							<h6>Biological</h6>
							<p class="copy">Humans can take genetic engineering Traits.</p>
						</div>
					</div>
					<div class="content-stack content-stack-sm">
						<div class="line-container">
							<h5><strong>Origin: The American Empire</strong></h5>
							<div class="line"></div>
						</div>
						<div class="content-stack content-stack-xxs">
							<h6>Bonus</h6>
							<p class="copy">+1 Physical point, placed in Grace</p>
						</div>
						<div class="content-stack content-stack-xxs">
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
						</div>
					</div>
					<div class="content-stack content-stack-sm">
						<div class="line-container">
							<h5><strong>Profession: Smuggler</strong></h5>
							<div class="line"></div>
						</div>
						<div class="content-stack content-stack-xxs">
							<h6>Skill Traits</h6>
							<p class="copy">Smooth Talker<br>
								Concealment<br>
								1 additional Contact</p>
						</div>
						<div class="content-stack content-stack-xxs">
							<h6>Knowledge Traits</h6>
							<p class="copy">Contraband<br>
								Security<br>
								1 additional Language</p>
						</div>
					</div>
					<div class="content-stack content-stack-sm">
						<div class="line-container">
							<h5><strong>Past: Raised By The Streets</strong></h5>
							<div class="line"></div>
						</div>
						<div class="content-stack content-stack-xxs">
							<h6>Skill Traits</h6>
							<p class="copy">Schemer<br>
								Sleight of Hand<br>
								1 additional contact</p>
						</div>
						<div class="content-stack content-stack-xxs">
							<h6>Knowledge Traits</h6>
							<p class="copy">Streetwise<br>
								Criminal Activity<br>
								1 additional Language</p>
						</div>
					</div>
				</div>
			</div>
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
		<div class="level-badge">5</div>
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
			<h5 class="d-inline-block"><i>17</i>&nbsp;<strong>HP</strong></h5>|
			<h5 class="d-inline-block"><i>9</i>&nbsp;<strong>VP</strong></h5>|		
			<h5 class="d-inline-block"><i>9</i>&nbsp;<strong>SP</strong></h5>
		</div>
		<div class="flex-grow-1 d-flex justify-content-start justify-content-md-end c-variables">
			<h5 class="d-inline-block"><i>1</i> <svg class="damage-icon" viewBox="0 0 512 512" role="img" aria-label="Blunt resistance" focusable="false"><title>Blunt</title><path d="M215.97 27.813c-2.218.04-4.35.177-6.407.375l-.532.062c-2.774.266-5.796 1.01-9.124 1.844-4.418 1.11-8.096 2.607-11.125 4.406l77.782 59.313 7.375 5.656-5.593 7.405-13.72 18.156 67.595 51.626 14.217-18.812 9.47-12.53 6.5 14.342 19.656 43.47 60.593-80.095-47.187-7.124-15.533-2.312 9.47-12.563 14.28-18.843-67.593-51.624L310.78 50.78l-5.03 6.657-7.188-4.25c-28.635-16.917-58.02-25.157-80.343-25.374a76.706 76.706 0 0 0-2.25 0zM453 127.124l-71.47 94.438 34.564 26.187c44.24-20.22 64.01-52.594 71.312-94.625l-34.406-26zm-193.688 25.03c-27.17 33.09-55.308 64.706-82.812 96.22l47.406 39.875c23.11-35.343 46.336-71.61 71.938-108.22l-36.53-27.874zM164.25 262.47c-11.355 13.115-22.564 26.254-33.5 39.5l48.375 52.717c11.707-16.6 23.107-33.515 34.438-50.687l-49.313-41.53zm-45.438 54.124a1111.646 1111.646 0 0 0-23.093 29.72l33.468 73.842c13.586-16.22 26.434-32.893 38.843-49.937l-49.218-53.626zm-35.75 47.03c-12.108 16.978-23.57 34.335-34.124 52.282L98.53 454.47a688.442 688.442 0 0 0 17.22-18.72l-32.688-72.125zm-43.437 68.688a546.43 546.43 0 0 0-14.75 29l37.375 28.313a611.184 611.184 0 0 0 23.125-21.72l-45.75-35.592z"/></svg></h5>
			<h5 class="d-inline-block"><i>1</i> <svg class="damage-icon" viewBox="0 0 512 512" role="img" aria-label="Slashing resistance" focusable="false"><title>Slashing</title><path d="M275.03 20c35.223 49.563 53.59 113.64 55.69 173.47C315.154 143 289.092 88.423 250.81 48.75c40.294 79.527 51.15 172.312 37.938 256.094-12.287-75.777-40.564-159.524-92.375-227.156 29.6 70.937 36.64 149.785 24.813 221.843-8.745-51.804-25.41-107.4-52.594-158.81 13.023 54.315 12.854 107.64 3.437 159.28l21.657 6.813 15 4.718-11.28 10.908c-10.68 10.332-19.868 21.905-27.345 34.343 93.614 35.486 232.952 64.53 298.032 41.376-41.02 56.466-210.332 13.822-309.313-18.687-1.514 3.775-2.918 7.594-4.124 11.467a152.536 152.536 0 0 0-6.062 29.657l176.47 66.375c98.5 31.095 150.5-24.62 158.655-81.72C505.253 254.472 485.016 105.66 426.06 20h-22.187c40.092 65.52 66.67 154.216 60.47 255.344-8.154-79.833-42.8-157.214-98.44-219.5 38.676 85.094 56.566 185.746 34.376 288.625.057-118.816-33.1-225.865-105.092-324.47H275.03zm-110.186 1.594c41.255 29.176 74.328 74.093 97.5 120.656-7.702-46.15-21.3-86.79-44-120.656h-53.5zm176.375 0c28.882 15.143 52.096 36.614 71.28 66.78-7.14-27.79-17.217-49.85-31.438-66.78H341.22zM123.686 304.406a179.344 179.344 0 0 1-4.062 64L18.812 336.344V366l91.938 29.094a178.602 178.602 0 0 1-30.313 48.28l50.094 15.75c-3.038-24.898-1.136-49.885 6.282-73.718 7.446-23.92 20.223-46.108 37.032-65.22l-50.156-15.78z"/></svg></h5>
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
					<li>2,000 ERC</li>
					<li>Wealth</li>
					<li>15,000 ERC</li>
					<li>Languages</li>
					<li>English, Spanish, Mandarin</li>
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
						<strong>Endurance - 2</strong>
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
						<strong>Power - 2</strong>
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
						<strong>Grace - 3</strong>
					</div>
					<div class="stat-line">
						<div class="stat dot default"></div>
						<div class="stat square default"></div>
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
						<div class="stat-badge">2</div>
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
						<strong>Memory - 6</strong>
					</div>
					<div class="stat-line">
						<div class="stat dot default"></div>
						<div class="stat square filled"></div>
						<div class="stat dot filled"></div>
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
				<li><span class="tiny-text">Knowledge:</span> American Geography (2)</li>
				<li><span class="tiny-text">Knowledge:</span> Imperial Law (1)</li>
				<li><span class="tiny-text">Knowledge:</span> Contraband (2)</li>
				<li><span class="tiny-text">Knowledge:</span> Security (2)</li>
				<li><span class="tiny-text">Knowledge:</span> Streetwise (2)</li>
				<li><span class="tiny-text">Knowledge:</span> Criminal Activity (2)</li>
				<li><span class="tiny-text">Language:</span> English</li>
				<li><span class="tiny-text">Language:</span> Spanish</li>
				<li><span class="tiny-text">Language:</span> Mandarin</li>
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
				<li>Pilot: Basic Automotive (1)</li>
				<li>Pilot: Basic Voidcraft (1)</li>
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
				<li>Contacts (2)</li>
				<li>Banked Traits (9)</li>
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