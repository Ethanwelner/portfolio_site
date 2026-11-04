<div class="breakout shadow-diffuse black-bg white-text">
<?php $rpgLinksTone = 'white'; include 'php/rpg/rpg-links.php'; ?>
<div class="separator"></div>
<div class="container">
<div class="d-flex flex-wrap flex-fill flex-xs-nowrap mb-4">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<h3 class="sub-title mb-3" id="incidents">Incidents</h3>
		<div class="copy stinger white mb-3">When Every Second Counts</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>

<div class="d-flex flex-wrap flex-xs-nowrap">
	<div class="flex-2 d-none d-xl-inline-flex"></div>
	<div class="flex-14">
		<div class="d-flex flex-wrap flex-xs-nowrap split-cols">
			<div class="flex-7 content-stack">
				<div class="content-stack content-stack-sm">
					<h3>What is an Incident?</h3>
					<p class="copy">
						At times during a game the GM may declare that an Incident is occurring. This will occur most often during combat, or particularly intense role-playing scenarios, where the order of Actions is important and the outcome is uncertain. During an Incident, the normal freewheeling flow of role-playing gameplay becomes structured into a sequence of Actions taken in Priority Order. An Action is any act performed by a character or NPC during the Incident, and outside of GM decisions all occurrences during an Incident happen in Priority Order.
						<br><br>
						The space of time a “Round” of Priority Order takes is at GM discretion, but the default duration of a Round in a combat Incident is 10 seconds. Your GM may choose to extend this duration, such as during shipboard confrontations, where the slower action of massive ships may encourage Rounds of a minute or more.
						<br><br>
						An Incident ends when the GM declares it so, at which point the flow of time returns to normal role-playing cadence and the characters’ acts no longer need to conform to Incident Action rules.
					</p>
				</div>
			</div>
			<div class="flex-6 content-stack">
				<div class="content-stack content-stack-sm">
					<h3>Actions</h3>
					<p class="copy">
						The range of Actions a player can take is wide, with Items or Traits adding additional unique Action options. A player may only select a single Action to take, though that Action may break down to several simultaneous acts, with the most common being some combination of Movement or role-playing alongside Attack or Defense.
						<br><br>
						A conscious and involved character may take an Action during a Round, though mechanics within the game may conspire to rob them of that Action, such as being struck with a Stun Gun or knocked Prone. A character may choose to “Pass” on taking an Action if they wish, in which case they are not entered into the Priority Order, but can still be targeted or affected by other Actions.
						<br><br>
						The following represent the basic Actions a player may choose:
					</p>
					<ul class="copy">
						<li>Full Movement</li>
						<li>Attack
						<ul>
							<li>Half Movement and Attack</li>
						</ul>
						</li>
						<li>Defend
						<ul>
							<li>Half Movement and Defend</li>
						</ul>
						</li>
						<li>RP Action
						<ul>
							<li>RP Action and Attack</li>
							<li>RP Action and Defend</li>
							<li>RP Action and half Movement</li>
						</ul>
						</li>
					</ul>
					<p class="copy">These will be explained in the following sections.</p>
				</div>
			</div>
		</div>
		<div class="bumper"></div>
		<div class="tech-fields">
			<div class="tech-field-tab-list" role="tablist" aria-label="Incidents">
				<button type="button" class="tech-field-tab is-active" role="tab" id="tab-incidents-rounds" aria-controls="incidents-rounds" aria-selected="true">Priority Order and Movement</button>
				<button type="button" class="tech-field-tab" role="tab" id="tab-incidents-attacking" aria-controls="incidents-attacking" aria-selected="false">Attacking and Damage</button>
				<button type="button" class="tech-field-tab" role="tab" id="tab-incidents-defense" aria-controls="incidents-defense" aria-selected="false">Defense and Cover</button>
				<button type="button" class="tech-field-tab" role="tab" id="tab-incidents-rp" aria-controls="incidents-rp" aria-selected="false">Role-Playing Actions</button>
			</div>

			<div class="tech-field-panel is-active" id="incidents-rounds" role="tabpanel" aria-labelledby="tab-incidents-rounds">
				<div class="d-flex flex-wrap flex-xs-nowrap split-cols">
					<div class="flex-7 content-stack">
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Priority Order</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								During an Incident a sequence of Actions is organized using Priority Order. During an Incident players declare their intentions as a group, and those Actions are then played out in Priority Order, from highest to lowest, with each step in the order seeing each player at that step perform their declared Action simultaneously. By default most characters will possess a Priority Order of 0, meaning most Actions by most characters are simultaneous. Through Equipment, Traits, or role-playing circumstances players or NPCs may gain bonuses or negatives to their Priority Order.
								<br><br>
								Within each Priority step, Actions are calculated in the following order, so characters cannot move away from an Attack or Attack before Defending. RP occurs first unless combined with another act, in which case it occurs simultaneously with the Action it is combined with:
							</p>
							<ol class="copy">
								<li>RP</li>
								<li>Defend</li>
								<li>Attack</li>
								<li>Movement</li>
							</ol>
							<p class="copy">
								If a character is no longer able to perform an Action, such as being unable to move because they were disabled or killed, or because a previous RP Action negates their own Action then the Action fails and does not occur.
								<br><br>
								Each set of Actions occurs in Priority Order until all involved players and NPCs have performed their Actions and Priority Order is finished. If the Incident is still ongoing then a new Round of Priority Order and Actions occurs. Repeat this process until the Game Master declares an end to the Incident, at which time the normal flow of Role-Playing gameplay resumes.
							</p>
						</div>
					</div>
					<div class="flex-6 content-stack">
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Movement</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								During an Incident a player may select to move as all or part of their Action. Unless otherwise hindered a character may move their full distance in any direction, but obstacles may require Grace Skill Checks to be overcome and barriers may prevent free Movement, forcing a character to instead go around them. The GM will determine the axis along which characters may move, and how. For example, a flying character may be able to move their distance vertically, or some combination of vertical and horizontal.
								<br><br>
								Characters and NPCs have a Movement speed as indicated on their character sheet.
							</p>
							<ul class="copy">
								<li>The default full Movement value for a humanoid character or NPC during an Incident is 10 meters.</li>
								<li>Several Actions a player can choose combine that Action with a half distance Movement, which, by default, would result in a 5 meter Movement.</li>
								<li>Movement speeds can be increased or reduced by Items, Traits, or role-playing circumstances such as environmental hazards.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="tech-field-panel" id="incidents-attacking" role="tabpanel" aria-labelledby="tab-incidents-attacking">
				<div class="d-flex flex-wrap flex-xs-nowrap split-cols">
					<div class="flex-7 content-stack">
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Attacking</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								During Incidents a character may elect to Attack as a part or all of their Action. When doing so they will select a weapon they possess and a target or targets, and make an Attack Roll. If the character hits, their target will suffer damage equivalent to their weapon’s Damage Profile modified by the Attack's Severity.
								<br><br>
								Attacks are rolled on a d20. Add any bonuses to the roll; the total must meet or exceed the target's Defense.
							</p>
							<ul class="copy">
								<li>Most conscious characters have a Defense of 10 plus their Physical core Stat points (see <a href="#tab-incidents-defense" class="lore-link" data-tab-open="tab-incidents-defense">Defenses and Defending</a>).</li>
							</ul>
							<p class="copy">Attacks must be made using a weapon. A character or NPC without access to a weapon cannot Attack.</p>
							<ul class="copy">
								<li>Many weapons will gain a benefit to their Attack Roll based on a character's Stats. Weapons that do so will list the relevant Stat.</li>
								<li>Traits may allow a character or NPC to select a Stat to benefit an Attack.</li>
								<li>In situations where multiple rules allow a character to add a Stat to their roll they do not stack, and the character only gains the Stat bonus once for the Attack.</li>
							</ul>
							<p class="copy">
								Attacks meeting or exceeding Defense are hits, and the result of the hit is measured by the hit’s Severity. Attack Severity determines effects in rules as well as the GM’s choices. Severity is based on how much the Attack exceeds the character's defensive value. Some offensive and defensive mechanics will trigger based on Attack Severity.
								<br><br>
								The following are the default Attack Severities, and their results.
							</p>
							<table class="copy sf-table">
								<thead>
									<tr><th>Roll</th><th>Severity</th><th>Result</th></tr>
								</thead>
								<tbody>
									<tr><td>+0 to +5</td><td>Glancing Blow</td><td>-1 damage to the Attack</td></tr>
									<tr><td>+6 to +10</td><td>Solid Hit</td><td>Attack damages as normal</td></tr>
									<tr><td>+11 to +15</td><td>Devastating Hit</td><td>+1 damage to the Attack</td></tr>
									<tr><td>+16 or higher</td><td>Critical Hit</td><td>+3 damage to the Attack</td></tr>
								</tbody>
							</table>
							<p class="copy">
								Attacks failing to meet or exceed the target's Defense are considered misses, and the result of the miss is measured by the miss Severity. Miss Severity determines effects in rules as well as the GM’s choices. Severity is based on the amount by which the total roll came in under the target's Defenses. Some offensive and defensive mechanics will trigger based on miss Severity.
								<br><br>
								The following are the default miss Severities, and their results.
							</p>
							<table class="copy sf-table">
								<thead>
									<tr><th>Roll</th><th>Severity</th><th>Result</th></tr>
								</thead>
								<tbody>
									<tr><td>-1 to -5</td><td>Deflected</td><td>—</td></tr>
									<tr><td>-6 to -10</td><td>Near Miss</td><td>—</td></tr>
									<tr><td>-11 to -15</td><td>Overextended</td><td>Character gains the Flat-Footed Condition the following combat Round</td></tr>
									<tr><td>-16 or lower</td><td>Critical Failure</td><td>Character gains the Flat-Footed Condition the following combat Round</td></tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="flex-6 content-stack">
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Area of Effect Attacks</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">Some Attacks will list an Area of Effect radius. These Attacks target locations and do not roll to hit. Instead their damage and effects are applied to every available target, friend or foe, within the listed radius as if the targets had been hit with a Glancing Blow.</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Thrown Weapons</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">Some weapons will be listed with the Thrown attribute. A Thrown weapon’s Maximum Range is equal to the Attacking character's Power Stat multiplied by 3. Unless otherwise stated a Thrown weapon is lost when Thrown, and comes to rest in the location the throw was targeting. Recoverable Thrown weapons, such as javelins or rocks, can be picked up by any character or NPC within its reach.</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Damage</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								When a character is hit by an Attack the character suffers damage equal to the Attack's damage value after modifiers minus the character's Resistances.
								<br><br>
								For Example
							</p>
							<ul class="copy">
								<li>An Attack with a Longsword is a Devastating Hit; the Longsword’s 4 Slashing damage would combine with the Devastating Hit for 4+1 Slashing damage compared against the target's Resistances. The target is wearing leather armor, providing them with a Resistance of 1 against Slashing. The result of the Attack is that the target suffers 4 Slashing damage (4+1 - 1).</li>
								<li>Attacks may do multiple types of damage, such as a fragmentation grenade doing 5 Blunt and 5 Piercing damage, representing both the shock of the explosion and its shrapnel. In cases where an Attack does multiple types of damage all are compared against the target's Resistances and are applied.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="tech-field-panel" id="incidents-defense" role="tabpanel" aria-labelledby="tab-incidents-defense">
				<div class="d-flex flex-wrap flex-xs-nowrap split-cols">
					<div class="flex-7 content-stack">
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Defenses and Defending</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								A conscious character's base Defense is 10, increased by 1 for every Physical core Stat point, and can be further modified by Equipment, other Stats, or Abilities. The Defenses of an unconscious or otherwise defenseless character are 0. It is at GM discretion when and where a character without the Conditions of Unconscious or Defenseless may be considered defenseless, such as when they are attacked by surprise or are performing a task which requires all their concentration.
								<br><br>
								A character that has elected to take a Defend Action gains +3 to their Defense for the Round. Items, Traits, or other mechanics may trigger when a character elects to Defend. For example, a character with a Wooden Shield would gain an additional +4 Defense while Defending.
							</p>
						</div>
					</div>
					<div class="flex-6 content-stack">
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Melee Attacks, Ranged Attacks, Line of Sight, and Cover</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								A weapon is either a Ranged or Melee weapon, and that attribute will be listed on the Item. The weapon’s range or Melee attribute determines when and how the weapon can be used to make an Attack, and what kinds of bonuses or penalties are given.
								<br><br>
								Unless otherwise stated an attacker always needs Line of Sight to their target to perform an Attack. If the attacker cannot see or otherwise somehow detect their target they cannot make an Attack against them.
								<br><br>
								A Melee weapon can only be used against a target within its listed Max Range and Line of Sight.
							</p>
							<ul class="copy">
								<li>An Attack Action attempting an Attack against a target outside of a Melee weapon's Max Range is considered a failure, and does not occur.</li>
							</ul>
							<p class="copy">A Ranged weapon can be used on any target up to its Maximum Range, but suffers penalties based on its or its target's circumstances.</p>
							<ul class="copy">
								<li>Ranged weapons suffer a -2 penalty to their Hit Roll when Attacking a target outside of half their Max Range.</li>
								<li>A Ranged weapon Attack made while within the Attack range of a hostile character or NPC’s Melee weapon suffers a -3 penalty to hit.</li>
							</ul>
							<p class="copy">If a character or NPC is partially obscured behind an object, be it a wall, rock, or vehicle, they are considered to be in Cover. Characters are assumed to use any available Cover unless they say otherwise. There are two types of Cover, Light Cover and Heavy Cover. The GM determines what kind of Cover is being conveyed, but Cover may be affected by other game mechanics.</p>
							<ul class="copy">
								<li>Light Cover is gained when at least 50% of a character is obscured
								<ul>
									<li>Ranged Attacks against targets in Light Cover suffer a -3 penalty</li>
								</ul>
								</li>
								<li>Heavy Cover is gained when at least 75% of a character is obscured
								<ul>
									<li>Ranged Attacks against targets in Heavy Cover suffer a -6 penalty</li>
								</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="tech-field-panel" id="incidents-rp" role="tabpanel" aria-labelledby="tab-incidents-rp">
				<div class="text-cols">
					<p class="copy">
						Outside of the predefined Actions of move, Attack, Defend, or special listed Actions within Equipment or Traits all other acts taken by characters in an Incident are considered RP Actions. These acts can encompass virtually any activity the character may wish to undertake that would, reasonably, fit within the allotted timespan of the Round. Because the scope of what could be considered an RP Action is so wide, GMs should take care to apply discretion in what they allow. For instance, sheathing a sword and equipping a different weapon could be considered a Partial RP Action that could be mixed with Attacking or Defending, but donning a suit of armor may be outside of what could be considered reasonable for a single Round.
						<br><br>
						RP Actions may involve the chance of failure, in which case the GM should prompt a Skill Check alongside whatever other Action the character is taking. The results of the RP Action may determine the effect or validity of Actions taken later in the Priority Order.
						<br><br>
						Full RP Actions within a combat Incident, where the character spends their entire Action on the RP act, could include the following, but are certainly not limited to them.
					</p>
					<ul class="copy">
						<li>Climbing a low tree or mantling a wall</li>
						<li>Tying a rope to an unmoving carriage without a check</li>
						<li>Reloading a heavy weapon</li>
						<li>Attempting to untangle yourself from a net</li>
					</ul>
					<p class="copy">Partial RP Actions, which occur alongside one of the other defined Actions, could include the following, but are certainly not limited to them.</p>
					<ul class="copy">
						<li>Reloading a light weapon then firing</li>
						<li>Tying a rope to a moving carriage with a Grace Skill Check</li>
						<li>Lifting a discarded Item from the ground</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="flex-2 d-none d-xl-inline-flex"></div>
</div>
</div>
<div class="separator"></div>
</div>
