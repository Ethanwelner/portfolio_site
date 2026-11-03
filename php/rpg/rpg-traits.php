<div class="breakout shadow-diffuse black-bg white-text">
  <?php $rpgLinksTone = 'white'; include 'php/rpg/rpg-links.php'; ?>
  <div class="separator"></div>
  <div class="container">
    <div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4">
      <div class="flex-2 d-none d-xl-inline-flex"></div>
      <div class="flex-14">
        <h3 class="sub-title mb-3" id="traits">Explaining Traits</h3>
        <div class="copy stinger white mb-3">Who and What a Character Is</div>
      </div>
      <div class="flex-2 d-none d-xl-inline-flex"></div>
    </div>

    <div class="d-flex flex-wrap flex-xs-nowrap">
      <div class="flex-2 d-none d-xl-inline-flex"></div>
      <div class="flex-14">
        <div class="d-flex flex-wrap flex-xs-nowrap split-cols">
          <div class="flex-7 content-stack">
            <div class="content-stack content-stack-sm">
              <h3>Traits</h3>
              <p class="copy">
                Traits, alongside a character’s Stats and Equipment, are the defining characteristics that make a character who and what they are. The Trait system is flexible and functions as a catchall category of things a character knows, things a character can do, things a character belongs to, and relationships the character may have with others. Traits are named and self-contained characteristics categorized by what the Trait is and how it interacts with characters and the game’s systems. A Trait will typically either be part of a structured category that defines how the Trait is used, or it will describe how the Trait manifests itself.
                <br><br>
                Traits are almost always additive, conveying some additional capability or capacity that a character has, though a rare few can convey negative attributes or restrictions. Trait effects are wide-ranging, from bonuses to certain Skill Checks to combat buffs to new abilities. They can describe a character's relationships to a society, such as memberships in exclusive organizations or even a wanted status for a criminal on the run. Traits can be temporary conditions, such as describing the ramifications of a character's broken leg. Because Traits are so varied, they will typically be organized on a character’s sheet by their theme or by how they are used.
                <br><br>
                Characters start with a series of Traits based on their background packages. A character’s Kind, Origin, Profession, and Past all grant a starting package of Traits that will help to inform who and what a character is. From there, a character gains additional Traits through accruing experience and Leveling Up or through in-game circumstances.
                <br><br>
                There are three primary ways permanent Traits are gained:
              </p>
              <ul class="copy">
                <li>
                They are granted by a background package when the character is created.
                </li>
                <li>
                They are granted automatically for every focus Stat point a character gains.
                </li>
                <li>
                They are gained through in-game actions or occurrences.
                </li>
              </ul>
              <p>Temporary Traits can be granted through Equipment or can be based on temporary circumstances, such as an injury sustained or short-term fame gained from a notorious act. Temporary Traits should have the time or circumstance of their ending in their description.</p>
              <ul class="copy">
                <li>Traits are self-contained pieces of information assigned to a character or object with specific requirements and effects.</li>
                <li>Traits will typically list their name, category, type, and effect in a single place of reference. Traits can be listed by their name on character sheets and in descriptions, with the Trait's effects referenced only when needed.</li>
                <li>Every focus Stat point grants a Trait, alternating along that Stat’s dot bar: odd-numbered points (circles) grant a Universal Trait and even-numbered points (squares) grant a Background Trait.</li>
                <li>If, when a character gains a focus Stat point, they do not wish to gain a new Trait, they can "bank" that Trait, until an in-game RP circumstance presents them with the opportunity to gain a Trait that they want. This is a good way for a player to gain Conveyed Traits without it feeling forced.</li>
                <li>Backgrounds typically provide several Traits when adopted, giving a baseline that informs a character's background and circumstances.</li>
                <li>Traits can have core or focus Stat requirements. A character must meet a Trait’s minimum Stats to gain it, except for Traits granted by their background packages (Kind, Origin, Profession, and Past), which they always receive.</li>
                <li>Some Traits are on a list that only certain characters can take from. Magic Traits like Incantation are on the Magic list, which Magic Access opens; most Kinds of Dreft get Magic Access through their Magical Heritage. A character without a Trait that opens a list can’t take its Traits, though a background package can still grant them.</li>
                <li>Traits can be gained outside of Leveling and can be lost.</li>
                <li>Traits can be temporary.</li>
                <li>Traits always have a category, like Knowledge or Condition, that determines how the Trait is used in the game.</li>
                <li>Traits can have a type like (Supernatural), (Injury), or (Cybernetic). These will typically be used in concert with in-game effects that target specific types of Traits, such as a doctor healing Injury Traits. These types have no effect on their own.</li>
                <li>Traits that would require training can only be gained if the character has received training relevant to that Trait or has been performing a related action for long enough. This is at the GM's discretion.</li>
                <li>Some Traits will require a character to already possess a prerequisite Trait in order to be gained (such as a Pilot Trait being a prerequisite for the Expert Pilot Trait).</li>
                <li>Some Traits have specific, listed role-playing requirements.</li>
                <li>Unless it is a Ranked Trait, a Trait's effect does not stack. Multiple instances of the same Trait will only have the effect of a single instance of that Trait.</li>
              </ul>
            </div>
            <div class="content-stack content-stack-sm">
              <h3>Trait Ranks</h3>
              <p class="copy">
                Some Traits, such as all Knowledges, can be Ranked Up. These are different from Traits with successive requirements, such as Marksman being a requisite for Master Marksman. Ranked Traits do not change when Ranked Up, but multiply their bonuses by their Rank. As an example, Pilot: Small Boat (3) is at Rank 3 and provides a +30 Roll Modifier to piloting Skill Checks, representing the Trait's bonus of 10 multiplied by its Rank.
                <br><br>
                A Trait can only be Ranked Up beyond Rank 1 if the character has each required Stat for that Trait greater than or equal to 3 times the new Rank. As an example, a character wishing to Rank Pilot: Small Boat to Rank 3 would need Grace and Memory Stats of at least 9.
              </p>
            </div>
            <div class="content-stack content-stack-sm">
              <h3>Universal and Background Traits</h3>
              <p class="copy">
                When a character is selecting Traits while Leveling Up, they will pick either Universal or Background Traits depending on whether each focus point they gain is an odd-numbered (Universal) or even-numbered (Background) point in that Stat. Unless a Trait is specified as Background, it is assumed to be Universal. Background Traits are typically skills, areas of knowledge, or abilities that are related to a character’s past or identity. A character selects Background Traits from a list generated by their background package. Some Background Traits will have RP requirements; these will be listed in that Trait's requirements. As an example, a Human can't just grow longer teeth, but an aged Orc's fangs can continue to grow as their power or prestige advances, conferring social benefits to them. This would be represented by the Long Toothed Trait, whose description lists bonuses to social situations between Orcs.
                <br><br>
                Many Traits in the list generated by a character's background package are Universal Traits that are thematically related to that background package. These give a character an opportunity to take or advance these Traits rapidly, especially if they are Ranked Traits. A character with the Pilot Profession will be able to take or Rank Up pilot-related Traits at double the speed of a character that does not have those Traits in their background list.
              </p>
            </div>
            <div class="content-stack content-stack-sm">
              <h3>Starter-only Traits</h3>
              <p class="copy">
                These are Background Traits that can only be taken during character creation, representing some unique skill, nest egg, or heirloom the character possesses that they gained at some point during their life. Many Starter Traits will have specific requirements, such as the Pirate Scion Profession being required for the Starter Trait Inherited Pirate Vessel.
              </p>
            </div>
            <div class="content-stack content-stack-sm">
              <h3>Conveyed Traits</h3>
              <p class="copy">
                These are Traits that cannot be taken when a character Levels Up unless the GM allows it. These will often represent tangible improvements to a character that would be difficult to justify without a relevant role-playing rationale. As an example, the Eagle Eye Trait implies a tangible and significant improvement to a character's long-distance vision. This could come about as a result of mystical training, mutation, a latent ability of a Kind or Origin, or some other rationale. Conveyed Traits will often not have a minimum Stat requirement.
              </p>
            </div>
            <div class="content-stack content-stack-sm">
              <h3>Trait Categories</h3>
              <p class="copy">Because Traits can take so many different forms, they are subdivided into seven categories. The categories listed below represent the fundamental categories of a Trait. A Trait's category determines how it interacts with characters and the game's systems.</p>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Knowledges</strong></h5>
                  <div class="line"></div>
                </div>
                <p class="copy">Knowledges are Traits that are usually either gained through in-game RP effort or conferred by background packages. Background packages automatically grant their Knowledges, along with every other Trait they confer, even if the character doesn’t meet the Stats they’d need to choose those Traits otherwise. Multiple backgrounds can confer the same Knowledge Trait, but unless otherwise specified, this does not increase the Knowledge's Rank. A Knowledge can be Ranked Up multiple times, but each Rank increase involves a commensurate level of increased time, difficulty, or financial investment. Knowledges and additional Knowledge Ranks can also be conferred by Items, magic, or cybernetics or can be gained temporarily via research, but there are limitations to how these forms of knowledge can be utilized.<br><br>
                  When creating a new character, a player can spend the Universal or Background Traits they would gain from their Level on Knowledge Traits instead. This is to represent additional areas of knowledge the character would have accrued up to that point in their life but that may not be specifically written out in the character's background packages (such as the character getting a bachelor's in history, allowing them to gain American History (2) as a starting character from the American Empire). It is up to the GM to decide how high a Knowledge Rank can be gained in this way.<br><br>
                  Outside of character creation, Knowledges can only be gained through in-game means, such as a character spending a semester learning history or a character having the layout of a forest magically conveyed to them. It is at the GM's discretion to determine how easy or difficult knowledges are to attain and where their limitations are.</p>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Languages</strong></h5>
                  <div class="line"></div>
                </div>
                <p class="copy">Languages confer the ability for the learner to speak or read/write in that language. Most languages will be granted by a character's background package, but languages can also be temporarily granted by devices like universal translators or magic amulets. Languages can also be learned in the same fashion as Knowledge Traits. Languages function as both knowledge and an ability in that they describe a character's ability to understand and use a language. A Language Trait will typically describe how the character can use that language, such as English (Spoken).</p>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Skills</strong></h5>
                  <div class="line"></div>
                </div>
                <p class="copy">Skill Traits represent a character's ability to perform a specific task or engage in a specific activity without fumbling or failing to even understand the basics. A skill is like knowledge in that it is a learned Trait, but unlike knowledge, Skill Traits can be gained over time through training and effort, even without outside aid. Many skills are Ranked Traits and represent the additive bonuses conveyed through practice and mastery in a given task. Other Skill Traits represent additional improvements or aspects of mastery that go beyond a simple bonus to a die roll during a Skill Check. Mastery Skill Traits will typically list prerequisite Traits that a character must already possess before they can take the more advanced Trait. Skill Traits can be selected when a character is choosing Level-Up Traits, but it is recommended that the GM only allow them to select Skill Traits they had been learning or utilizing.</p>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Abilities</strong></h5>
                  <div class="line"></div>
                </div>
                <p class="copy">Abilities are Traits that confer some sort of ability to a character. This can come in a wide variety of forms, from Natural Flight granting a character the power to fly to Hide in Plain Sight letting them sneak and go undetected even while being observed. Abilities are the most common type of Trait to be conferred by Items or Equipment, as they represent some sort of specific physical or mental feat that a character can perform. Not all abilities are physical, but most manifest as something other than modifying a Skill Check. Abilities are often innate to a Kind or culture and are automatically conferred by Kind or Origin packages. An Ability Trait will always describe what it does and when it can be used, though it will be at the GM's discretion to determine the boundaries of when an ability can be applicable to a situation.</p>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Circumstance</strong></h5>
                  <div class="line"></div>
                </div>
                <p class="copy">Circumstance Traits describe a character's relationship with the world around them and will typically list noteworthy or exceptional characteristics. While virtually any description of a character's place in society could be listed as a Trait, Circumstance Traits should be reserved for important or unique aspects of a character. As an example, membership in a thieves’ guild would be listed as a Circumstance Trait, but a Luna-HI frequent shipper account would not.</p>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Conditions</strong></h5>
                  <div class="line"></div>
                </div>
                <p class="copy">Condition Traits are Traits that represent some sort of ongoing status. These typically describe an effect a character is experiencing, whether physical or mental. Condition Traits can vary widely in what they represent and will almost always have their effects described in the Trait. These can range from a character having cybernetic arms, granting them a significantly improved Power Stat, to a character being a conduit for the spirits and thus able to see ghosts. Injuries will often be represented as temporary Condition Traits and will describe some sort of negative attribute or incapacity forced onto the character.</p>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Other</strong></h5>
                  <div class="line"></div>
                </div>
                <p class="copy">Other is a catchall category and represents special Traits that go beyond the norm. Most Other Traits are, in reality, multiple Traits listed at the same time for the sake of convenience. As an example, a character being possessed by a daemon may have that possession listed as an Other Trait, and that Trait's description may detail significant alterations to how that character would otherwise function.</p>
              </div>
            </div>
          </div>
          <div class="flex-6 content-stack">
            <div class="content-stack content-stack-sm">
              <h3>Example Traits</h3>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Knowledges</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="d-flex flex-wrap flex-gap-12">
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>American History (1)</span>
                      <span class="trait-name-chips"><span class="chip">Knowledge</span></span>
                    </div>
                    <p class="copy effect">This character has knowledge of the history of a specific local region and can be assumed to be familiar with local facts like names, locations, and occurrences.</p>
                    <p class="copy muted small">Needs Memory 3</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Imperial Law (1)</span>
                      <span class="trait-name-chips"><span class="chip">Knowledge</span></span>
                    </div>
                    <p class="copy effect">This character has knowledge of the American Empire’s legal code and can be assumed to be familiar with the laws and courts of its territories.</p>
                    <p class="copy muted small">Needs Memory 3</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Orc Society (1)</span>
                      <span class="trait-name-chips"><span class="chip">Knowledge</span></span>
                    </div>
                    <p class="copy effect">This character has knowledge of Orc customs and can be assumed to be familiar with the institutions and traditions of Orc societies.</p>
                    <p class="copy muted small">Needs Memory 3</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Mathematics (1)</span>
                      <span class="trait-name-chips"><span class="chip">Knowledge</span></span>
                    </div>
                    <p class="copy effect">This character has knowledge of mathematics and of mathematical fields of study.</p>
                    <p class="copy muted small">Needs Memory 3, Logic 3</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Elemental Magics (1)</span>
                      <span class="trait-name-chips"><span class="chip">Knowledge</span></span>
                    </div>
                    <p class="copy effect">This character has knowledge of Elemental Magics, including the theoretical underpinnings of that magic as well as its history.</p>
                    <p class="copy muted small">Needs Memory 3, Intuition 5</p>
                  </div>
                </div>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Languages</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="d-flex flex-wrap flex-gap-12">
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>English (Spoken) - Language</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Language</span><span class="chip">Knowledge</span></span>
                    </div>
                    <p class="copy effect">This character can speak and understand English conversationally.</p>
                    <p class="copy muted small">Needs Memory 2, Intuition 2</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Mandarin (Spoken) (Written) - Language</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Language</span><span class="chip">Knowledge</span></span>
                    </div>
                    <p class="copy effect">This character can speak and understand Mandarin conversationally and can read and write it.</p>
                    <p class="copy muted small">Needs Memory 2, Intuition 2</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Dwarvish Runes (Written) - Language</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Language</span><span class="chip">Knowledge</span></span>
                    </div>
                    <p class="copy effect">This character can read and write Dwarvish Runes.</p>
                    <p class="copy muted small">Needs Memory 3, Intuition 5</p>
                  </div>
                </div>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Skills</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="d-flex flex-wrap flex-gap-12">
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Pilot: Helicopter (1)</span>
                      <span class="trait-name-chips"><span class="chip">Skill</span></span>
                    </div>
                    <p class="copy effect">This character is capable of piloting helicopters in simple scenarios without a Skill Check and is capable of describing the basic functions and controls of a helicopter.</p>
                    <p class="copy effect">Rank *10 added to Skill Check rolls involving helicopter piloting.</p>
                    <p class="copy muted small">Needs Memory 5, Intuition 3, Grace 3</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Expert Pilot</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Mastery</span><span class="chip">Skill</span></span>
                    </div>
                    <p class="copy effect">This character can request Advantage on piloting any craft they have training in and may request Competence in piloting any craft similar to one they have training in.</p>
                    <p class="copy muted small">Needs Memory 5, Intuition 10, Grace 5, Any Pilot Trait</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Rider: Basic Animals (1)</span>
                      <span class="trait-name-chips"><span class="chip">Skill</span></span>
                    </div>
                    <p class="copy effect">This character is capable of riding a basic animal as a mount in simple scenarios without a Skill Check.</p>
                    <p class="copy effect">Rank *10 added to Skill Check rolls involving riding a basic animal.</p>
                    <p class="copy muted small">Needs Grace 4, Empathy 4, Persuasion 3</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Wielder: Longsword (1)</span>
                      <span class="trait-name-chips"><span class="chip">Skill</span></span>
                    </div>
                    <p class="copy effect">This character is capable of performing the basic tasks of using and maintaining a Longsword without a Skill Check.</p>
                    <p class="copy effect">Rank *5 added to Skill Check rolls involving a Longsword.</p>
                    <p class="copy muted small">Needs Grace 4, Power 4, Endurance 4</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Wielder: Musket (1)</span>
                      <span class="trait-name-chips"><span class="chip">Skill</span></span>
                    </div>
                    <p class="copy effect">This character is capable of performing the basic tasks of using and maintaining a Musket without a Skill Check.</p>
                    <p class="copy effect">Rank *5 added to Skill Check rolls involving a Musket.</p>
                    <p class="copy muted small">Needs Grace 3, Power 2, Intuition 3</p>
                  </div>
                </div>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Abilities</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="d-flex flex-wrap flex-gap-12">
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Trail Runner - Ability</span>
                      <span class="trait-name-chips"><span class="chip">Ability</span></span>
                    </div>
                    <p class="copy effect">This character takes twice as long to get winded by activities that involve running, hiking, or climbing.</p>
                    <p class="copy muted small">Needs Power 3, Endurance 2, Grace 2</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>(Capable Student)</span>
                      <span class="trait-name-chips"><span class="chip">Ability</span></span>
                    </div>
                    <p class="copy effect">This character can learn a new Knowledge Trait in half the specified time.</p>
                    <p class="copy muted small">Needs Memory 3, Logic 3</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Knowledge Sponge</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Mastery</span><span class="chip">Ability</span></span>
                    </div>
                    <p class="copy effect">This character can learn a new Knowledge Trait in a quarter of the specified time.</p>
                    <p class="copy muted small">Needs Memory 5, Logic 5, Intuition 5, Capable Student</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Con Man</span>
                      <span class="trait-name-chips"><span class="chip">Ability</span></span>
                    </div>
                    <p class="copy effect">+5 Roll Modifier to any Skill Check rolls that involve lying in either written or spoken form.</p>
                    <p class="copy muted small">Needs Persuasion 8, Demeanor 4, Intuition 4, Memory 4</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Mental Fortitude - Ability</span>
                      <span class="trait-name-chips"><span class="chip">Ability</span></span>
                    </div>
                    <p class="copy effect">This character can request Advantage in any scenario where their mental faculties are being severely taxed, be it resisting the mesmerizing effects of a vampire or pushing through a long march without becoming exhausted.</p>
                    <p class="copy muted small">Needs Endurance 8, Logic 5, Demeanor 5</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Sculpted</span>
                      <span class="trait-name-chips"><span class="chip">Ability</span></span>
                    </div>
                    <p class="copy effect">This character can request Advantage in situations where the appearance of athleticism can affect the outcome of a roll or situation (useful for models, athletes with endorsements, or barbarians trying to intimidate).</p>
                    <p class="copy muted small">Needs Power 5, Endurance 5, Demeanor 3</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Eagle Eye</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Conveyed</span><span class="chip">Ability</span></span>
                    </div>
                    <p class="copy effect">This character can request Advantage in situations that involve seeing at distance.</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Gladiator</span>
                      <span class="trait-name-chips"><span class="chip">Ability</span></span>
                    </div>
                    <p class="copy effect">When in combat, this character can use any close combat weapon as if they had the Wielder Trait at Rank 1 for that weapon.</p>
                    <p class="copy muted small">Needs Physical 5, Grace 5, Demeanor 5</p>
                  </div>
                </div>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Circumstances</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="d-flex flex-wrap flex-gap-12">
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Thieves’ Guild Membership</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Conveyed</span><span class="chip">Circumstance</span></span>
                    </div>
                    <p class="copy effect">This character is an official member of a local thieves’ guild.</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Tugboat Captain</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Conveyed</span><span class="chip">Circumstance</span></span>
                    </div>
                    <p class="copy effect">This character has the legal training and licenses required to command a tug.</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Wanted in Sol</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Conveyed</span><span class="chip">Circumstance</span></span>
                    </div>
                    <p class="copy effect">Temporary (Lost when the character's innocence is proclaimed or they are caught)</p>
                    <p class="copy effect">This character is wanted by the nations of the Sol System for past crimes.</p>
                    <p class="copy effect">This character's wanted status is severe, and law enforcement and bounty hunting entities are actively searching for them.</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Short-Term Fame</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Conveyed</span><span class="chip">Circumstance</span></span>
                    </div>
                    <p class="copy effect">Temporary (30 days)</p>
                    <p class="copy effect">Due to recent events, this character is famous and can request Advantage in social situations where the character's fame may aid them.</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Significant Inheritance</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Conveyed</span><span class="chip">Circumstance</span></span>
                    </div>
                    <p class="copy effect">Temporary (Lost when the money is all spent)</p>
                    <p class="copy effect">This character has access to an inheritance of 2 million Earth Reserve Credits (ERC) currently safely contained in a bank.</p>
                  </div>
                </div>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Conditions</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="d-flex flex-wrap flex-gap-12">
                  <div class="trait-box condition-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Stone Skin</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Conveyed</span><span class="chip chip-muted">(Enchantment)</span><span class="chip">Condition</span></span>
                    </div>
                    <p class="copy muted small">Temporary (This Trait lasts a number of minutes equal to the caster's Rank in this Ability)</p>
                    <p class="copy effect">This character gains Rank *3 resistance to all Physical damage types.</p>
                  </div>
                  <div class="trait-box condition-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Severe Bleeding</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Conveyed</span><span class="chip chip-muted">(Injury)</span><span class="chip">Condition</span></span>
                    </div>
                    <p class="copy muted small">Temporary (This Trait is lost when this Condition is treated)</p>
                    <p class="copy effect">This character loses 1 HP every combat round while in combat.</p>
                    <p class="copy effect">This character loses 1 HP every minute while outside of combat.</p>
                  </div>
                  <div class="trait-box condition-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Dead</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Conveyed</span><span class="chip">Condition</span></span>
                    </div>
                    <p class="copy muted small">Temporary (A character gains this Trait if they are at 0 or less HP)</p>
                    <p class="copy effect">This character is dead and cannot perform voluntary actions.</p>
                    <p class="copy effect">This character cannot be healed by any means unless otherwise stated.</p>
                  </div>
                  <div class="trait-box condition-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Stimm Rush</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Conveyed</span><span class="chip">Condition</span></span>
                    </div>
                    <p class="copy muted small">Temporary (This Trait lasts a number of minutes stated by the Stimm being used, or 1 minute if there is no stated duration)</p>
                    <p class="copy effect">This character gains 5 to all Physical focus Stats.</p>
                  </div>
                  <div class="trait-box condition-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Ghost Sight</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Conveyed</span><span class="chip">Condition</span></span>
                    </div>
                    <p class="copy muted small">Temporary (Lost when the effect that granted this Trait ends)</p>
                    <p class="copy effect">This character perceives beyond the veil.</p>
                    <p class="copy effect">This character can see and hear the supernatural.</p>
                  </div>
                </div>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Other</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="d-flex flex-wrap flex-gap-12">
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Possessed by a Spirit</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Conveyed</span><span class="chip">Other</span></span>
                    </div>
                    <p class="copy effect">Temporary (lost when the character is no longer possessed)</p>
                    <p class="copy effect">This character has lost control over their body to a supernatural entity. If this is a player character, then how that player or the GM continue to operate the character is at the GM's discretion, as is the nature of the entity that has possessed them.</p>
                    <p class="copy effect">This character no longer accrues experience.</p>
                    <p class="copy effect">While under the control of this entity the character's Mental and Social Stats are considered <span class="chip">Mental 8</span> <span class="chip">Logic 8</span> <span class="chip">Intuition 10</span> <span class="chip">Memory 9</span> <span class="chip">Social 7</span> <span class="chip">Empathy 3</span> <span class="chip">Persuasion 9</span> <span class="chip">Demeanor 12</span> for most purposes. Condition Traits that modify these Stats are still in effect unless otherwise stated.</p>
                    <p class="copy effect">If the character had Traits with minimum Stat values or had Ranks in Traits they no longer qualify for, then those Traits are to be ignored.</p>
                    <p class="copy effect">The entity possessing this character can be assumed to have full knowledge and understanding of all Knowledge, Skill, and Ability Traits of the character they are possessing and can use them without issue as long as they possess the minimum Stats required for them.</p>
                    <p class="copy effect">This character gains the following Temporary Traits and will lose them if they cease to be possessed:</p>
                    <div class="trait-name-chips justify-content-start"><span class="chip chip-muted">Supernatural</span><span class="chip chip-muted">Spirit Touched</span><span class="chip chip-muted">Telekinesis (1)</span><span class="chip chip-muted">Inured to Pain</span><span class="chip chip-muted">Fearless</span><span class="chip chip-muted">Ghost Sight</span><span class="chip chip-muted">Knowledge: The Supernatural (1)</span></div>
                  </div>
                </div>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Background-Only</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="d-flex flex-wrap flex-gap-12">
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Long Toothed</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Background</span><span class="chip">Condition</span></span>
                    </div>
                    <p class="copy effect">An Orc's teeth grow continuously as they age, acting as both a sign of wisdom and prestige. An Orc that has managed to maintain their teeth throughout their life is seen as a highly capable individual or one of noble birth. A long-toothed Orc can request Advantage in dealings with other Orcs, or with any other party that may hold this belief about Orcs.</p>
                    <p class="copy muted small">Needs Power 10, Endurance 5, Demeanor 5, Middle Aged or Older</p>
                  </div>
                </div>
                <div class="d-flex flex-wrap flex-gap-12">
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Sorcerous</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Background</span><span class="chip">Condition</span></span>
                    </div>
                    <p class="copy effect">This character may take magic-related Traits and may spend Stat points on the Magic core Stat.</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Natural Breath Weapon (1)</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Background</span><span class="chip">Ability</span></span>
                    </div>
                    <p class="copy effect">This character's biology allows them to use their breath as a tool or weapon.</p>
                    <p class="copy effect">For each Rank of this Ability, add another d4 to the damage the breath weapon deals.</p>
                    <p class="copy muted small">(Endurance 3)</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Hard Shell (1)</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Background</span><span class="chip">Condition</span></span>
                    </div>
                    <p class="copy effect">This character possesses a hard natural shell that protects them from harm.</p>
                    <p class="copy effect">Rank *3 added to this character's Blunt, Slashing, and Piercing resistances for attacks that hit their torso.</p>
                    <p class="copy muted small">(Endurance 5)</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Cybernetic Intelligence</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Background</span><span class="chip">Condition</span></span>
                    </div>
                    <p class="copy effect">This character is capable of extremely rapid feats of mathematical comprehension and has a +20 Roll Modifier for Skill Checks related to mathematics.</p>
                    <p class="copy effect">This character is capable of performing significant numbers of mathematical calculations simultaneously; it is at the GM's discretion when and how this ability is limited.</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Supernatural</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Background</span><span class="chip">Condition</span></span>
                    </div>
                    <p class="copy effect">This character has gone beyond the realm of the real and can take supernatural-related Traits and may spend Stat points on the Supernatural core Stat.</p>
                  </div>
                  <div class="trait-box">
                    <div class="trait-name trait-name-with-chip">
                      <span>Mechanical</span>
                      <span class="trait-name-chips"><span class="chip chip-muted">Background</span><span class="chip">Condition</span></span>
                    </div>
                    <p class="copy effect">This character or object is a machine.</p>
                    <p class="copy effect">It can be harmed by EMP damage and is typically immune to Death damage.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-2 d-none d-xl-inline-flex"></div>
    </div>
  </div>
  <div class="separator"></div>
</div>