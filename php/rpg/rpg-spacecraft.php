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
						<div class="d-flex flex-wrap flex-xs-nowrap">
							<div class="flex-7 content-stack">
								<div>
									<div class="line-container">
										<h5><strong>Skiff</strong></h5>
										<div class="line"></div>
									</div>
									<h6><i>Skiffs</i></h6>
									<p class="copy">
										Skiff, tender, dinghy, lighter—these small craft have many names but a single purpose: to ferry goods and people from one part of a station to another. Most common in older stations without sufficient internal transportation networks, or in particularly diffuse station environments with many smaller substations, a skiff is often the simplest way to get from one point to another without donning a voidsuit. Typically capable of accommodating only a few passengers and their pilot, a skiff will most often use small liquid rocket boosters or even robotic limbs to navigate the often cramped confines of a complex station’s voidspace.
									</p>
									<h6><i>Drone Craft</i></h6>
									<p class="copy mb-0">
										Most often used for goods transportation, simple security, or routine maintenance and inspection, drone craft are ubiquitous across the surfaces of ships and stations alike. Ranging from the size of a small ball to a few meters across, drone craft are the basic robotic infrastructure that keeps ships running. Typically formed specifically to suit their task, drone craft can be seen crawling across the surfaces of vessels, floating lazily around them, or darting quickly along wires laid for their use.
									</p>
								</div>
								<div>
									<div class="line-container">
										<h5><strong>Shuttle</strong></h5>
										<div class="line"></div>
									</div>
									<h6><i>Shuttles</i></h6>
									<p class="copy">
										Shuttles are perhaps the single most common form of space transport in the systems. Ranging from small atmospheric craft capable of holding a few passengers to ferries moving hundreds between ships, shuttles are the backbone of transportation within a fleet or planetary setting. Most feature robust life support systems and simple onboard rocket thrusters. Planetary shuttles will typically be equipped with the most basic of <?php echo sf_lore_link('aether-sails', 'aether sails'); ?> to aid them in escaping a planet’s gravity well.
									</p>
									<h6><i>Light Trucks</i></h6>
									<p class="copy mb-0">
										Similar to shuttles, light trucks are small voidcraft most often used within busy station or planetary settings, or embedded in larger vessels as a means of goods transport. A light truck is often little more than a pilot’s section and a set of thrusters bolted to an empty cargo hold. Rarely is the hold even secured against the vacuum of space, trusting that if the cargo cares about atmospheric pressure, it’ll already be contained in a sealed vessel.
									</p>
								</div>
								<div>
									<div class="line-container">
										<h5><strong>Cutter</strong></h5>
										<div class="line"></div>
									</div>
									<h6><i>Fighters</i></h6>
									<p class="copy">
										Little used in true naval warfare, the fighters of 2200 act most often as escorts or scout craft. Featuring a crew of one to three and systems for remote drone deployment, fighters provide mission utility and a relatively inexpensive presence on the solar periphery or in far-flung systems. Too small to mount <?php echo sf_lore_link('aether-sails', 'aether sails'); ?> or the <?php echo sf_lore_link('switch-gates', 'Switch Gates'); ?> used for refueling their rockets, these craft are often locked to the hull of a larger ship until needed. Indeed, many a freighter has seen off a pirate attack with the quick launch of a few fighters hidden in its berth. The ubiquity of point-defense lasers in naval warfare forces fighters to pick their engagements carefully, and the presence of a larger vessel often forces fighters to take cover.
									</p>
									<h6><i>Patrol Craft</i></h6>
									<p class="copy">
										Similar to fighters, but built for endurance, patrol craft are a common sight in the inner solar system and on particularly busy cargo lanes. Patrol craft are typically built around a set of aether sails and a single fuel Switch Gate. With a crew of two to five and built for law enforcement and private security rather than warfare, these vessels rarely carry more than a few missiles and a point-defense autocannon, but that’s more than enough to provide peacekeeping services or chase down the occasional smuggler.
									</p>
									<h6><i>Cutters</i></h6>
									<p class="copy">
										Cutters are a broad category of small, utilitarian civilian starship. Built with the minimum necessary aether sails and a fuel Switch Gate, these catchall vessels are the economic backbone of the systems, providing everything from personal transport and delivery to inspection and catering services. There is no standard shape to a cutter, with its form almost always matching its function. A cutter operated as a mobile repair vessel may feature external manipulator arms and heavy cutting equipment, while a luxury taxi service may feature overbuilt engines for speed while giving over most of its internal volume to a luxurious cabin and sleeping space.
									</p>
									<p class="copy">
										If a cutter is armed at all, it’s often little more than a weak point-defense laser or light autocannon. Enough to deal with debris or an aggressive skiff, but little more. Cutters make up, by far, the most common hull type for pirate vessels. Indeed, many pirate vessels are little more than civilian cutters with the registration removed.
									</p>
									<h6><i>Trucks</i></h6>
									<p class="copy mb-0">
										Distinct from cutters, trucks come in almost as wide a variety of forms. With their heavy engines, minimal crew space, and the heavy structure required to tow heavy loads, trucks are a common sight. Often seen in their twos or threes, teams of trucks pull hundreds of thousands of tons of material. Mining trucks may work in tandem to pull asteroids towards processing facilities, while a pair of dockyard cargo trucks may clamp themselves to the sides of a rack of cargo containers and guide them into port. Pirate cutters are often accompanied by trucks, which are more than happy to throw cable netting around a captive cutter and pull it back to whatever criminal harbor they came from.
									</p>
								</div>
								<div>
									<div class="line-container">
										<h5><strong>Corvette</strong></h5>
										<div class="line"></div>
									</div>
									<h6><i>Corvettes</i></h6>
									<p class="copy">
										Small independent starships; personal, corporate, light military.
									</p>
									<h6><i>Yachts</i></h6>
									<p class="copy mb-0">
										Small independent starships; personal, corporate, light military.
									</p>
								</div>
							</div>
							<div class="d-inline-flex align-items-center flex-1"></div>
							<div class="flex-6 content-stack">
								<div>
									<div class="line-container">
										<h5><strong>Cruiser</strong></h5>
										<div class="line"></div>
									</div>
									<h6><i>Frigates</i></h6>
									<p class="copy">
										Serious ships with substantial endurance and crew; military, governmental, corporate.
									</p>
									<h6><i>Cruisers</i></h6>
									<p class="copy">
										Serious ships with substantial endurance and crew; military, governmental, corporate.
									</p>
									<h6><i>Administration Craft</i></h6>
									<p class="copy mb-0">
										Serious ships with substantial endurance and crew; military, governmental, corporate.
									</p>
								</div>
								<div>
									<div class="line-container">
										<h5><strong>Carrier</strong></h5>
										<div class="line"></div>
									</div>
									<h6><i>Carriers</i></h6>
									<p class="copy">
										Large specialized vessels; major industrial or military operations.
									</p>
									<h6><i>Miners</i></h6>
									<p class="copy">
										Large specialized vessels; major industrial or military operations.
									</p>
									<h6><i>Foremen</i></h6>
									<p class="copy">
										Large specialized vessels; major industrial or military operations.
									</p>
									<h6><i>Freighters</i></h6>
									<p class="copy mb-0">
										Large specialized vessels; major industrial or military operations.
									</p>
								</div>
								<div>
									<div class="line-container">
										<h5><strong>Capital</strong></h5>
										<div class="line"></div>
									</div>
									<h6><i>Battlecruisers</i></h6>
									<p class="copy">
										Massive strategic vessels capable of supporting large populations or fleets.
									</p>
									<h6><i>Stellar Carriers</i></h6>
									<p class="copy">
										Massive strategic vessels capable of supporting large populations or fleets.
									</p>
									<h6><i>Colony Ships</i></h6>
									<p class="copy mb-0">
										Massive strategic vessels capable of supporting large populations or fleets.
									</p>
								</div>
								<div>
									<div class="line-container">
										<h5><strong>Arc</strong></h5>
										<div class="line"></div>
									</div>
									<h6><i>Arcs</i></h6>
									<p class="copy mb-0">
										The largest ships; essentially mobile cities/nations.
									</p>
								</div>
							</div>
						</div>
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
