<?php require_once __DIR__ . '/components/cards.php'; ?>
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
        <div class="intro-with-image">
          <div class="single-column-content content-stack">
            <div class="content-stack content-stack-sm">
              <h3>Traits</h3>
              <p class="copy">
                Traits, alongside a character’s Stats and Equipment, are the defining characteristics that make a character who and what they are. The Trait system is flexible and works as a catchall for things a character knows, things they can do, groups they belong to, and relationships they have with others. Each Trait is a named, self-contained characteristic that lists its requirements and effects in one place.
                <br><br>
                Traits are almost always additive, giving a character some additional capability or capacity, though a rare few convey negative attributes or restrictions. Their effects range from bonuses to certain Skill Checks to combat buffs to new abilities. They can also describe a character’s place in society, such as membership in an exclusive organization or a wanted status for a criminal on the run. Because Traits are so varied, they are typically organized on a character’s sheet by their theme or by how they are used.
              </p>
              <p class="copy">Every Trait has a category and may also have a type:</p>
              <ul class="copy">
                <li>A Trait’s category, like Knowledge or Condition, determines how the Trait is used in the game.</li>
                <li>A Trait’s type, like (Supernatural), (Injury), or (Cybernetic), has no effect on its own. Types let other effects target specific kinds of Traits, such as a doctor healing Injury Traits.</li>
              </ul>
              <p class="copy">Characters start with Traits from their Background packages. A character’s Kind, Origin, Profession, and Past each grant a starting set of Traits that helps inform who and what the character is. After that, characters gain Traits as they Level Up and through in-game circumstances. Permanent Traits are gained in three ways:</p>
              <ul class="copy">
                <li>They are granted by a Background package when the character is created.</li>
                <li>They are granted for every focus Stat point a character gains. Odd-numbered points (circles) grant a Universal Trait, and even-numbered points (squares) grant a Background Trait.</li>
                <li>They are gained through in-game actions or occurrences, outside of Leveling Up.</li>
              </ul>
              <p class="copy">
                If a character doesn’t want a new Trait when they gain a focus Stat point, they can “bank” that Trait until an in-game RP circumstance gives them the opportunity to gain one they want. This is a good way for a player to gain Conveyed Traits without it feeling forced.
                <br><br>
                Traits can also be temporary, and they can be lost. Temporary Traits can be granted through Equipment or by short-lived circumstances, such as an injury sustained or short-term fame gained from a notorious act. A temporary Trait’s description should state the time or circumstance that ends it.
              </p>
              <p class="copy">Many Traits have requirements a character must meet before gaining them. Traits granted by a character’s Background packages are exempt from all of these requirements:</p>
              <ul class="copy">
                <li><strong>Stats:</strong> A character must meet a Trait’s minimum core, focus, or Special Stats to gain it. A Trait that requires Magic, for example, can only be taken by a character who has access to Magic.</li>
                <li><strong>Prerequisite Traits:</strong> Some Traits require a character to already have another Trait, such as a Pilot Trait for the Expert Pilot Trait.</li>
                <li><strong>Training:</strong> Traits that would require training can only be gained if the character has received relevant training or has been performing a related action for long enough. This is at the GM’s discretion.</li>
                <li><strong>Role-playing:</strong> Some Traits have specific, listed role-playing requirements.</li>
              </ul>
              <p class="copy">Unless a Trait is Ranked, its effect does not stack. Multiple instances of the same Trait only have the effect of a single instance. Ranked Traits are explained under Trait Ranks.</p>
            </div>
          </div>
          <div class="image-placeholder" aria-hidden="true">Image</div>
        </div>
        <div class="bumper"></div>
        <div class="tech-fields">
          <div class="tech-field-tab-list" role="tablist" aria-label="Traits">
            <button type="button" class="tech-field-tab is-active" role="tab" id="tab-traits-rules" aria-controls="traits-rules" aria-selected="true">Trait Rules</button>
            <button type="button" class="tech-field-tab" role="tab" id="tab-traits-categories" aria-controls="traits-categories" aria-selected="false">Trait Categories</button>
            <button type="button" class="tech-field-tab" role="tab" id="tab-traits-examples" aria-controls="traits-examples" aria-selected="false">Example Traits</button>
          </div>

          <div class="tech-field-panel is-active" id="traits-rules" role="tabpanel" aria-labelledby="tab-traits-rules">
            <div class="tab-panel-cols">
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Trait Ranks</strong></h5>
                  <div class="line"></div>
                </div>
                <p class="copy">
                  Some Traits, such as all Knowledges, can be Ranked Up. These are different from Traits with successive requirements, such as Marksman being a requisite for Master Marksman. Ranked Traits do not change when Ranked Up, but multiply their bonuses by their Rank. As an example, Pilot: Small Boat (3) is at Rank 3 and provides a +30 Roll Modifier to piloting Skill Checks, representing the Trait's bonus of 10 multiplied by its Rank.
                  <br><br>
                  A Trait can only be Ranked Up beyond Rank 1 if the character has each required Stat for that Trait greater than or equal to 3 times the new Rank. As an example, a character wishing to Rank Pilot: Small Boat to Rank 3 would need Grace and Memory Stats of at least 9.
                </p>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Universal and Background Traits</strong></h5>
                  <div class="line"></div>
                </div>
                <p class="copy">
                  When a character is selecting Traits while Leveling Up, they will pick either Universal or Background Traits depending on whether each focus point they gain is an odd-numbered (Universal) or even-numbered (Background) point in that Stat. Unless a Trait is specified as Background, it is assumed to be Universal. Background Traits are typically Skills, areas of knowledge, or Abilities that are related to a character’s past or identity. A character selects Background Traits from a list generated by their Background packages' keywords. Some Background Traits will have RP requirements; these will be listed in that Trait's requirements. As an example, a Human can't just grow longer teeth, but an aged Orc's fangs can continue to grow as their power or prestige advances, conferring social benefits to them. This would be represented by the Long Toothed Trait, whose description lists bonuses to social situations between Orcs.
                  <br><br>
                  Each Origin, Profession and Past has a handful of Background Keywords saying what it's about, like Close Combat, Law, Seafaring or Dreft, and every Trait has keywords saying what it covers. A Background pick can be spent on any Trait that shares at least one keyword with one of the character's Background packages. As an example, Local Police has Hand-to-Hand, Modern Ranged, Security, Police, Investigation, Crime, Law, Social and Medicine, so a police officer can spend a Background pick on Access Control (Security) or Wielder: Shotgun (Modern Ranged), but not on Wielder: Longsword (Close Combat) or Pilot: Truck (Piloting and Travel).
                  <br><br>
                  Fighting is split four ways, so a background that knows one kind of weapon doesn't open up every Wielder Skill: Hand-to-Hand (boxing, wrestling and martial arts), Close Combat (melee weapons), Archaic Ranged (bows, crossbows, slings, muskets and siege engines) and Modern Ranged (guns, grenades and launchers).
                  <br><br>
                  Many Traits in the list generated by a character's Background packages are Universal Traits that are thematically related to them. These give a character an opportunity to take or advance these Traits rapidly, especially if they are Ranked Traits. A character with the Truck Pilot Profession, whose keywords include Piloting, will be able to take or Rank Up pilot-related Traits at double the speed of a character that does not have those Traits in their Background list.
                </p>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Starter-only Traits</strong></h5>
                  <div class="line"></div>
                </div>
                <p class="copy">
                  These are Background Traits that can only be taken during character creation, representing some unique skill, nest egg, or heirloom the character possesses that they gained at some point during their life. Many Starter Traits will have specific requirements, such as the Pirate Scion Profession being required for the Starter Trait Inherited Pirate Vessel.
                </p>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Conveyed Traits</strong></h5>
                  <div class="line"></div>
                </div>
                <p class="copy">
                  These are Traits that cannot be taken when a character Levels Up unless the GM allows it. These will often represent tangible improvements to a character that would be difficult to justify without a relevant role-playing rationale. As an example, the Eagle Eye Trait implies a tangible and significant improvement to a character's long-distance vision. This could come about as a result of mystical training, mutation, a latent ability of a Kind or Origin, or some other rationale. Conveyed Traits will often not have a minimum Stat requirement.
                </p>
              </div>
            </div>
          </div>

          <div class="tech-field-panel" id="traits-categories" role="tabpanel" aria-labelledby="tab-traits-categories">
            <div class="content-stack content-stack-sm">
              <p class="copy">Because Traits can take so many different forms, they are subdivided into seven categories. The categories listed below represent the fundamental categories of a Trait. A Trait's category determines how it interacts with characters and the game's systems.</p>
              <div class="tab-panel-cols">
                <div class="content-stack content-stack-xs">
                  <div class="line-container">
                    <h5><strong>Knowledges</strong></h5>
                    <div class="line"></div>
                  </div>
                  <p class="copy">Knowledges are Traits that are usually either gained through in-game RP effort or conferred by Background packages. Background packages automatically grant their Knowledges, along with every other Trait they confer, even if the character doesn’t meet the Stats they’d need to choose those Traits otherwise. Multiple Backgrounds can confer the same Knowledge Trait, but unless otherwise specified, this does not increase the Knowledge's Rank. A Knowledge can be Ranked Up multiple times, but each Rank increase involves a commensurate level of increased time, difficulty, or financial investment. Knowledges and additional Knowledge Ranks can also be conferred by Items, magic, or cybernetics or can be gained temporarily via research, but there are limitations to how these forms of knowledge can be utilized.<br><br>
                    When creating a new character, a player can spend the Universal or Background Traits they would gain from their Level on Knowledge Traits instead. This is to represent additional areas of knowledge the character would have accrued up to that point in their life but that may not be specifically written out in the character's Background packages (such as the character getting a bachelor's in history, allowing them to gain American History (2) as a starting character from the American Empire). It is up to the GM to decide how high a Knowledge Rank can be gained in this way.<br><br>
                    Outside of character creation, Knowledges can only be gained through in-game means, such as a character spending a semester learning history or a character having the layout of a forest magically conveyed to them. It is at the GM's discretion to determine how easy or difficult Knowledges are to attain and where their limitations are.</p>
                  <?php sf_card_trait( array(
                  	'kind' => 'knowledge',
                  	'name' => 'Local History',
                  	'rank' => 1,
                  	'effect' => 'This character has knowledge of the history of a specific local region and can be assumed to be familiar with local facts like names, locations, and occurrences.',
                  	'needs' => 'Memory 3',
                  ) ); ?>
                </div>
                <div class="content-stack content-stack-xs">
                  <div class="line-container">
                    <h5><strong>Languages</strong></h5>
                    <div class="line"></div>
                  </div>
                  <p class="copy">Languages confer the ability for the learner to speak or read/write in that language. Most Languages will be granted by a character's Background package, but Languages can also be temporarily granted by devices like universal translators or magic amulets. Languages can also be learned in the same fashion as Knowledge Traits. Languages function as both Knowledge and an Ability in that they describe a character's ability to understand and use a language. A Language Trait will typically describe how the character can use that language, such as English (Spoken).</p>
                  <?php sf_card_trait( array(
                  	'kind' => 'language',
                  	'name' => 'English (Spoken)',
                  	'effect' => 'This character can speak and understand English conversationally.',
                  	'needs' => 'Memory 2, Intuition 2',
                  ) ); ?>
                </div>
                <div class="content-stack content-stack-xs">
                  <div class="line-container">
                    <h5><strong>Skills</strong></h5>
                    <div class="line"></div>
                  </div>
                  <p class="copy">Skill Traits represent things a character is good at: the ability to perform a specific task or engage in a specific activity without fumbling or failing to even understand the basics, and the modifiers they get for it. A Skill is like Knowledge in that it is a learned Trait, but unlike Knowledge, Skill Traits can be gained over time through training and effort, even without outside aid. Many Skills are Ranked Traits and represent the additive bonuses conveyed through practice and mastery in a given task. Other Skill Traits represent additional improvements or aspects of mastery that go beyond a simple bonus to a die roll during a Skill Check. Mastery Skill Traits will typically list prerequisite Traits that a character must already possess before they can take the more advanced Trait. Skill Traits can be selected when a character is choosing Level-Up Traits, but it is recommended that the GM only allow them to select Skill Traits they had been learning or utilizing.</p>
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Pilot: Helicopter',
                  	'rank' => 1,
                  	'effect' => 'This character is capable of piloting helicopters in simple scenarios without a Skill Check and is capable of describing the basic functions and controls of a helicopter.
Rank *10 added to Skill Check rolls involving helicopter piloting.',
                  	'needs' => 'Memory 5, Intuition 3, Grace 3',
                  ) ); ?>
                </div>
                <div class="content-stack content-stack-xs">
                  <div class="line-container">
                    <h5><strong>Abilities</strong></h5>
                    <div class="line"></div>
                  </div>
                  <p class="copy">Abilities are Traits that confer some sort of ability to a character. This can come in a wide variety of forms, from Natural Flight granting a character the power to fly to Hide in Plain Sight letting them sneak and go undetected even while being observed. Abilities are the most common type of Trait to be conferred by Items or Equipment, as they represent some sort of specific physical or mental feat that a character can perform. Not all Abilities are physical, but every Ability is something a character actively decides to use, usually through an Action it grants; a Trait that only adds modifiers to rolls is a Skill. Abilities are often innate to a Kind or culture and are automatically conferred by Kind or Origin packages. An Ability Trait will always describe what it does and when it can be used, though it will be at the GM's discretion to determine the boundaries of when an ability can be applicable to a situation.</p>
                  <?php sf_card_trait( array(
                  	'kind' => 'ability',
                  	'name' => 'Rally',
                  	'effect' => 'This character gains the Rally Action.',
                  	'action' => 'Rally: As a Full RP Action, this character ends the Frightened Condition on every ally within 10 m who can hear them.',
                  	'needs' => 'Demeanor 5, Persuasion 4',
                  ) ); ?>
                </div>
                <div class="content-stack content-stack-xs">
                  <div class="line-container">
                    <h5><strong>Circumstance</strong></h5>
                    <div class="line"></div>
                  </div>
                  <p class="copy">Circumstance Traits describe a character's relationship with the world around them and will typically list noteworthy or exceptional characteristics. While virtually any description of a character's place in society could be listed as a Trait, Circumstance Traits should be reserved for important or unique aspects of a character. As an example, membership in a thieves’ guild would be listed as a Circumstance Trait, but a Luna-HI frequent shipper account would not.</p>
                  <?php sf_card_trait( array(
                  	'kind' => 'circumstance',
                  	'name' => 'Thieves’ Guild Membership',
                  	'flags' => array( 'Conveyed' ),
                  	'effect' => 'This character is an official member of a local thieves’ guild.',
                  ) ); ?>
                </div>
                <div class="content-stack content-stack-xs">
                  <div class="line-container">
                    <h5><strong>Conditions</strong></h5>
                    <div class="line"></div>
                  </div>
                  <p class="copy">Condition Traits are Traits that represent some sort of ongoing status. These typically describe an effect a character is experiencing, whether physical or mental. Condition Traits can vary widely in what they represent and will almost always have their effects described in the Trait. These can range from a character having cybernetic arms, granting them a significantly improved Power Stat, to a character being a conduit for the spirits and thus able to see ghosts. Injuries will often be represented as temporary Condition Traits and will describe some sort of negative attribute or incapacity forced onto the character.</p>
                  <?php sf_card_trait( array(
                  	'kind' => 'condition',
                  	'name' => 'Stone Skin',
                  	'flags' => array( 'Conveyed' ),
                  	'types' => array( 'Enchantment' ),
                  	'temporary' => 'Every hour after a character is affected by Stone Skin, it loses one Rank of Stone Skin.',
                  	'effect' => 'This character gains Rank *3 Resistance to all Physical Damage Types.',
                  ) ); ?>
                </div>
                <div class="content-stack content-stack-xs">
                  <div class="line-container">
                    <h5><strong>Other</strong></h5>
                    <div class="line"></div>
                  </div>
                  <p class="copy">Other is a catchall category and represents special Traits that go beyond the norm. Most Other Traits are, in reality, multiple Traits listed at the same time for the sake of convenience. As an example, a character being possessed by a daemon may have that possession listed as an Other Trait, and that Trait's description may detail significant alterations to how that character would otherwise function.</p>
                  <?php sf_card_trait( array(
                  	'kind' => 'other',
                  	'name' => 'Possessed by a Spirit',
                  	'flags' => array( 'Conveyed' ),
                  	'temporary' => 'lost when the character is no longer possessed',
                  	'effect' => 'This character has lost control over their body to a supernatural entity. If this is a player character, then how that player or the GM continue to operate the character is at the GM\'s discretion, as is the nature of the entity that has possessed them.
This character no longer accrues experience.
While under the control of this entity the character\'s Mental and Social Stats are considered Mental 8, Logic 8, Intuition 10, Memory 9, Social 7, Empathy 3, Persuasion 9, Demeanor 12 for most purposes. Condition Traits that modify these Stats are still in effect unless otherwise stated.
If the character had Traits with minimum Stat values or had Ranks in Traits they no longer qualify for, then those Traits are to be ignored.
The entity possessing this character can be assumed to have full knowledge and understanding of all Knowledge, Skill, and Ability Traits of the character they are possessing and can use them without issue as long as they possess the minimum Stats required for them.
This character gains the following Temporary Traits and will lose them if they cease to be possessed:',
                  	'grants' => array( 'Supernatural', 'Spirit Touched', 'Telekinesis (1)', 'Inured to Pain', 'Fearless', 'Ghost Sight', 'Knowledge: The Supernatural (1)' ),
                  ) ); ?>
                </div>
              </div>
            </div>
          </div>

          <div class="tech-field-panel" id="traits-examples" role="tabpanel" aria-labelledby="tab-traits-examples">
            <div class="content-stack">
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Knowledges</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="trait-card-grid">
                  <?php sf_card_trait( array(
                  	'kind' => 'knowledge',
                  	'name' => 'Local History',
                  	'rank' => 1,
                  	'effect' => 'This character has knowledge of the history of a specific local region and can be assumed to be familiar with local facts like names, locations, and occurrences.',
                  	'needs' => 'Memory 3',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'knowledge',
                  	'name' => 'Imperial Law',
                  	'rank' => 1,
                  	'effect' => 'This character has knowledge of the American Empire’s legal code and can be assumed to be familiar with the laws and courts of its territories.',
                  	'needs' => 'Memory 3',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'knowledge',
                  	'name' => 'Orc Society',
                  	'rank' => 1,
                  	'effect' => 'This character has knowledge of Orc customs and can be assumed to be familiar with the institutions and traditions of Orc societies.',
                  	'needs' => 'Memory 3',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'knowledge',
                  	'name' => 'Mathematics',
                  	'rank' => 1,
                  	'effect' => 'This character has knowledge of mathematics and of mathematical fields of study.',
                  	'needs' => 'Memory 3, Logic 3',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'knowledge',
                  	'name' => 'Elemental Magics',
                  	'rank' => 1,
                  	'effect' => 'This character has knowledge of Elemental Magics, including the theoretical underpinnings of that magic as well as its history.',
                  	'needs' => 'Memory 3, Intuition 5',
                  ) ); ?>
                </div>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Languages</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="trait-card-grid">
                  <?php sf_card_trait( array(
                  	'kind' => 'language',
                  	'name' => 'English (Spoken)',
                  	'effect' => 'This character can speak and understand English conversationally.',
                  	'needs' => 'Memory 2, Intuition 2',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'language',
                  	'name' => 'Mandarin (Spoken) (Written)',
                  	'effect' => 'This character can speak and understand Mandarin conversationally and can read and write it.',
                  	'needs' => 'Memory 2, Intuition 2',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'language',
                  	'name' => 'Dwarvish Runes (Written)',
                  	'effect' => 'This character can read and write Dwarvish Runes.',
                  	'needs' => 'Memory 3, Intuition 5',
                  ) ); ?>
                </div>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Skills</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="trait-card-grid">
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Pilot: Helicopter',
                  	'rank' => 1,
                  	'effect' => 'This character is capable of piloting helicopters in simple scenarios without a Skill Check and is capable of describing the basic functions and controls of a helicopter.
Rank *10 added to Skill Check rolls involving helicopter piloting.',
                  	'needs' => 'Memory 5, Intuition 3, Grace 3',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Expert Pilot',
                  	'flags' => array( 'Mastery' ),
                  	'effect' => 'This character can request Advantage on piloting any craft they have training in and may request Competence in piloting any craft similar to one they have training in.',
                  	'needs' => 'Memory 5, Intuition 10, Grace 5, Any Pilot Trait',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Rider: Basic Animals',
                  	'rank' => 1,
                  	'effect' => 'This character is capable of riding a basic animal as a mount in simple scenarios without a Skill Check.
Rank *5 added to Skill Check rolls involving riding a basic animal.',
                  	'needs' => 'Grace 4, Empathy 4, Persuasion 3',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Wielder: Longsword',
                  	'rank' => 1,
                  	'effect' => 'This character is capable of performing the basic tasks of using and maintaining a Longsword without a Skill Check.
Rank *5 added to Skill Check rolls involving a Longsword.
+3 to Attack Rolls made with a Longsword.',
                  	'needs' => 'Grace 4, Power 4, Endurance 4',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Wielder: Musket',
                  	'rank' => 1,
                  	'effect' => 'This character is capable of performing the basic tasks of using and maintaining a Musket without a Skill Check.
Rank *5 added to Skill Check rolls involving a Musket.
+3 to Attack Rolls made with a Musket.',
                  	'needs' => 'Grace 3, Power 2, Intuition 3',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Trail Runner',
                  	'effect' => 'This character takes twice as long to get winded by activities that involve running, hiking, or climbing.',
                  	'needs' => 'Power 3, Endurance 2, Grace 2',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Capable Student',
                  	'effect' => 'This character can learn a new Knowledge Trait in half the specified time.',
                  	'needs' => 'Memory 3, Logic 3',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Knowledge Sponge',
                  	'flags' => array( 'Mastery' ),
                  	'effect' => 'This character can learn a new Knowledge Trait in a quarter of the specified time.',
                  	'needs' => 'Memory 5, Logic 5, Intuition 5, Capable Student',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Con Man',
                  	'effect' => '+5 Roll Modifier to any Skill Check rolls that involve lying in either written or spoken form.',
                  	'needs' => 'Persuasion 8, Demeanor 4, Intuition 4, Memory 4',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Mental Fortitude',
                  	'effect' => 'This character can request Advantage in any scenario where their mental faculties are being severely taxed, be it resisting the mesmerizing effects of a vampire or pushing through a long march without becoming exhausted.',
                  	'needs' => 'Endurance 8, Logic 5, Demeanor 5',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Sculpted',
                  	'effect' => 'This character can request Advantage in situations where the appearance of athleticism can affect the outcome of a roll or situation (useful for models, athletes with endorsements, or barbarians trying to intimidate).',
                  	'needs' => 'Power 5, Endurance 5, Demeanor 3',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Eagle Eye',
                  	'flags' => array( 'Conveyed' ),
                  	'effect' => 'This character can request Advantage in situations that involve seeing at distance.',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Gladiator',
                  	'effect' => 'When in combat, this character can use any close combat weapon as if they had the Wielder Trait at Rank 1 for that weapon.',
                  	'needs' => 'Physical 5, Grace 5, Demeanor 5',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'skill',
                  	'name' => 'Brawler',
                  	'rank' => 1,
                  	'effect' => 'Rank *1 added to the Blunt damage of this character\'s natural weapons.',
                  	'needs' => 'Power 3, Endurance 3',
                  ) ); ?>
                </div>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Abilities</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="trait-card-grid">
                  <?php sf_card_trait( array(
                  	'kind' => 'ability',
                  	'name' => 'Rally',
                  	'effect' => 'This character gains the Rally Action.',
                  	'action' => 'Rally: As a Full RP Action, this character ends the Frightened Condition on every ally within 10 m who can hear them.',
                  	'needs' => 'Demeanor 5, Persuasion 4',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'ability',
                  	'name' => 'Grappler',
                  	'rank' => 1,
                  	'effect' => 'This character gains the Grapple Action.
Rank *5 added to Skill Check rolls involving grappling or escaping a hold.',
                  	'action' => 'Grapple: This character may make an Attack Roll with Power against a character within 1 m. On a hit, the target gains the Rooted Condition at a Rank equal to this character\'s Grappler Rank for as long as this character keeps hold, and this character can\'t move while holding them.',
                  	'needs' => 'Power 4, Endurance 3, Grace 2, Brawler',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'ability',
                  	'name' => 'Takedown',
                  	'effect' => 'This character gains the Takedown Action.',
                  	'action' => 'Takedown: This character may make an Attack Roll with Power or Grace against a character within 1 m. On a Solid Hit or better, the target gains the Prone Condition.',
                  	'needs' => 'Power 4, Grace 4, Grappler',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'ability',
                  	'name' => 'Disarm',
                  	'effect' => 'This character gains the Disarm Action.',
                  	'action' => 'Disarm: This character may make an Attack Roll with Grace against a character within 1 m who is holding a weapon. On a Solid Hit or better, the target drops the weapon at their feet.',
                  	'needs' => 'Grace 5, Intuition 3, Brawler',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'ability',
                  	'name' => 'Weak Point',
                  	'effect' => 'After spending a Full RP Action studying a creature during an Incident, this character gains +2 to Attack Rolls against creatures of that kind for the rest of the Incident.',
                  	'needs' => 'Intuition 5, Logic 3',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'ability',
                  	'name' => 'Expert Boxer',
                  	'flags' => array( 'Mastery' ),
                  	'effect' => 'This character can Attack with the Superman Punch natural weapon.
This character can request Advantage on Attack Rolls made with punches: Fists, Haymaker, Uppercut and Superman Punch.',
                  	'needs' => 'Power 8, Grace 6, Endurance 6, Intuition 4, Boxing',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'ability',
                  	'name' => 'Martial Arts Master',
                  	'flags' => array( 'Mastery' ),
                  	'effect' => 'This character can Attack with the Bicycle Kick and Five Fingered Palm of Death natural weapons.
This character can request Advantage on Attack Rolls made with natural weapons.',
                  	'needs' => 'Grace 8, Power 6, Endurance 6, Intuition 5, Martial Artist',
                  ) ); ?>
                </div>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Circumstances</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="trait-card-grid">
                  <?php sf_card_trait( array(
                  	'kind' => 'circumstance',
                  	'name' => 'Thieves’ Guild Membership',
                  	'flags' => array( 'Conveyed' ),
                  	'effect' => 'This character is an official member of a local thieves’ guild.',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'circumstance',
                  	'name' => 'Tugboat Captain',
                  	'flags' => array( 'Conveyed' ),
                  	'effect' => 'This character has the legal training and licenses required to command a tug.',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'circumstance',
                  	'name' => 'Wanted in Sol',
                  	'flags' => array( 'Conveyed' ),
                  	'temporary' => 'Lost when the character\'s innocence is proclaimed or they are caught',
                  	'effect' => 'This character is wanted by the nations of the Sol System for past crimes.
This character\'s wanted status is severe, and law enforcement and bounty hunting entities are actively searching for them.',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'circumstance',
                  	'name' => 'Short-Term Fame',
                  	'flags' => array( 'Conveyed' ),
                  	'temporary' => '30 days',
                  	'effect' => 'Due to recent events, this character is famous and can request Advantage in social situations where the character\'s fame may aid them.',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'circumstance',
                  	'name' => 'Significant Inheritance',
                  	'flags' => array( 'Conveyed' ),
                  	'temporary' => 'Lost when the money is all spent',
                  	'effect' => 'This character has access to an inheritance of 2 million Earth Reserve Credits (ERC) currently safely contained in a bank.',
                  ) ); ?>
                </div>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Conditions</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="trait-card-grid">
                  <?php sf_card_trait( array(
                  	'kind' => 'condition',
                  	'name' => 'Stone Skin',
                  	'flags' => array( 'Conveyed' ),
                  	'types' => array( 'Enchantment' ),
                  	'temporary' => 'Every hour after a character is affected by Stone Skin, it loses one Rank of Stone Skin.',
                  	'effect' => 'This character gains Rank *3 Resistance to all Physical Damage Types.',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'condition',
                  	'name' => 'Severe Bleeding',
                  	'flags' => array( 'Conveyed' ),
                  	'types' => array( 'Injury' ),
                  	'temporary' => 'This Trait is lost when this Condition is treated',
                  	'effect' => 'This character loses 1 HP every combat Round while in combat.
This character loses 1 HP every minute while outside of combat.',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'condition',
                  	'name' => 'Dead',
                  	'flags' => array( 'Conveyed' ),
                  	'temporary' => 'A character gains this Trait if they are at 0 or less HP',
                  	'effect' => 'This character is dead and cannot perform voluntary actions.
This character cannot be healed by any means unless otherwise stated.',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'condition',
                  	'name' => 'Stimm Rush',
                  	'flags' => array( 'Conveyed' ),
                  	'temporary' => 'This Trait lasts a number of minutes stated by the Stimm being used, or 1 minute if there is no stated duration',
                  	'effect' => 'This character gains 5 to all Physical focus Stats.',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'condition',
                  	'name' => 'Ghost Sight',
                  	'flags' => array( 'Conveyed' ),
                  	'temporary' => 'Lost when the effect that granted this Trait ends',
                  	'effect' => 'This character perceives beyond the veil.
This character can see and hear the supernatural.',
                  ) ); ?>
                </div>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Other</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="trait-card-grid">
                  <?php sf_card_trait( array(
                  	'kind' => 'other',
                  	'name' => 'Possessed by a Spirit',
                  	'flags' => array( 'Conveyed' ),
                  	'temporary' => 'lost when the character is no longer possessed',
                  	'effect' => 'This character has lost control over their body to a supernatural entity. If this is a player character, then how that player or the GM continue to operate the character is at the GM\'s discretion, as is the nature of the entity that has possessed them.
This character no longer accrues experience.
While under the control of this entity the character\'s Mental and Social Stats are considered Mental 8, Logic 8, Intuition 10, Memory 9, Social 7, Empathy 3, Persuasion 9, Demeanor 12 for most purposes. Condition Traits that modify these Stats are still in effect unless otherwise stated.
If the character had Traits with minimum Stat values or had Ranks in Traits they no longer qualify for, then those Traits are to be ignored.
The entity possessing this character can be assumed to have full knowledge and understanding of all Knowledge, Skill, and Ability Traits of the character they are possessing and can use them without issue as long as they possess the minimum Stats required for them.
This character gains the following Temporary Traits and will lose them if they cease to be possessed:',
                  	'grants' => array( 'Supernatural', 'Spirit Touched', 'Telekinesis (1)', 'Inured to Pain', 'Fearless', 'Ghost Sight', 'Knowledge: The Supernatural (1)' ),
                  ) ); ?>
                </div>
              </div>
              <div class="content-stack content-stack-xs">
                <div class="line-container">
                  <h5><strong>Background-Only</strong></h5>
                  <div class="line"></div>
                </div>
                <div class="trait-card-grid">
                  <?php sf_card_trait( array(
                  	'kind' => 'other',
                  	'name' => 'Long in the Tooth',
                  	'flags' => array( 'Background' ),
                  	'effect' => 'This character has kept their teeth through a long life and has the Long Toothed Condition.',
                  	'action' => 'Long Toothed (Condition): An Orc\'s teeth grow continuously as they age, acting as both a sign of wisdom and prestige. An Orc that has managed to maintain their teeth throughout their life is seen as a highly capable individual or one of noble birth. A long-toothed Orc can request Advantage in dealings with other Orcs, or with any other party that may hold this belief about Orcs.',
                  	'needs' => 'Power 10, Endurance 5, Demeanor 5, Middle Aged or Older',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'ability',
                  	'name' => 'Natural Breath Weapon',
                  	'rank' => 1,
                  	'flags' => array( 'Background' ),
                  	'effect' => 'This character can Attack with the Breath Weapon natural weapon.
Rank *2 added to the Breath Weapon\'s damage.',
                  	'needs' => 'Endurance 3',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'condition',
                  	'name' => 'Hard Shell',
                  	'rank' => 1,
                  	'flags' => array( 'Background' ),
                  	'effect' => 'This character possesses a hard natural shell that protects them from harm.
Rank *3 added to this character\'s Blunt, Slashing, and Piercing Resistances for Attacks that hit their torso.',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'condition',
                  	'name' => 'Cybernetic Intelligence',
                  	'flags' => array( 'Background' ),
                  	'effect' => 'This character is capable of extremely rapid feats of mathematical comprehension and has a +20 Roll Modifier for Skill Checks related to mathematics.
This character is capable of performing significant numbers of mathematical calculations simultaneously; it is at the GM\'s discretion when and how this ability is limited.',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'condition',
                  	'name' => 'Supernatural',
                  	'flags' => array( 'Background' ),
                  	'effect' => 'This character has gone beyond the realm of the real and can take supernatural-related Traits and may spend Stat points on the Supernatural core Stat.',
                  ) ); ?>
                  <?php sf_card_trait( array(
                  	'kind' => 'condition',
                  	'name' => 'Mechanical',
                  	'flags' => array( 'Background' ),
                  	'effect' => 'This character or object is a machine.
It can be harmed by EMP damage and is typically immune to Death damage.',
                  ) ); ?>
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