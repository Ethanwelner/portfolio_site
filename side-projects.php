<!doctype html>
<html lang="en">

    <head>
        <!-- this loads the head code -->
        <?php include 'php/head-loads.php'; ?>
        <title>Ethan Welner Portfolio</title>
    </head>

    <body>

        <!-- Main Content -->
        <!------------ side projects black section ------------>
        <div class="section short-section black-bg d-flex black-section z-4">
            <div class="section-clip d-flex align-items-center justify-content-center ">
                <!-- This loads the header -->
                <?php include 'php/header.php'; ?>
                <div class="title section-title d-inline-flex z-2">
                    <div class="hero-statement pre-slide-in">
                        <h1 class="title hero-title white-text ">Digitally Assisted PNP RPG</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="section unlimited white-bg d-flex">
            <a href="index.php" class="section-logo-bug black-bg repaint z-3">EW</a>
            <div class="section-about-social-container z-3">
                <!-- social links -->
                <a target="_blank" href="https://www.linkedin.com/in/ethan-welner-555b4055/">
                    <div class="social-link black-bg repaint">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448.1 512">
                            <path d="M100.3 448H7.4V148.9h92.9V448zM53.8 108.1C24.1 108.1 0 83.5 0 53.8S24.1 0 53.8 0s53.8 24.1 53.8 53.8-24.1 54.3-53.8 54.3zM448 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448h-.1z"/>
                        </svg>
                    </div>
                </a>
                <a target="_blank" href="https://www.instagram.com/shumagram/">
                    <div class="social-link black-bg repaint">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg>
                    </div>
                </a>
                <!-- about me link -->
                <div class="section-about-me black-text repaint about-me-link">About Me</div>
            </div>


            <div class="container d-flex z-2 flex-wrap mt-5 mt-lg-0 justify-content-center">


                <!------------  STATS ------------->
                <div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4 column-container">
                    <div class="flex-12 mb-4">
                        <h3 class="sub-title mb-3">Explaining Stats</h3>
                        <div class="copy stinger black mb-3">placeholder subtitle</div>
                    </div>
                    <div class="d-inline-flex flex-12 flex-gap-48 align-items-center">
                        <div class="game-mechanics flex-6">
                            <h3 class="mb-3">Stats</h3>
                            
                            <!-- OVERVIEW -->
                            <p class="copy my-3">
                                A character's stats are intended to be a representation of that character's physical, mental, and spiritual limitations. Stats are used to track a character's growth or to show a character's level of capability. There are two kinds of stats a character invests in, and they are directly linked. A character's Inner Ring stats determine baseline statistics like Hit Points, Vibe Points, or Savvy Points. A character's Outer Ring stats determine Skill Checks and access to feats. A Character's Species will govern a character's Level 0 stats and will contain maximum values a character's stats cannot exceed.
                            </p>
                            <ul>
                                <li>When your character gains a Level you get a point to spend in any Inner Ring stat.</li>
                                <li>Adding a point to an Inner Ring stat gives you 3 to spend in the Outer Ring of that category.</li>
                                <li>The maximum that can be spent on any inner or Outer Ring stat is 20.</li>
                                <li>Traits, Equipment, or other effects can cause these stat totals to rise above 20.</li>
                                <li>Hit Points & other resource mechanics are dependent on scores from Inner Ring.</li>
                                <li>Skill Check bonuses and access to certain feats are dependent on scores from the Outer Ring.</li>
                                <li>Each point put into a stat is tracked in the dot bar; both of these visualizations are meant to be illustrative of a character's stats at a glance. Neither is strictly required, as the stats they describe can be more compactly described in other ways.</li>
                                <li>An ogre can be all physicality but may only be smart enough to use a club.</li>
                                <li>A soldier needs to be smart enough to know how to load a musket and Graceful enough to aim it</li>
                                <li>A spy may be incredibly persuasive and have the Demeanor to fit in anywhere but probably needs Memory to remember what he sees</li>
                            </ul>
                        </div>
                        <div class="d-inline-flex flex-6 flex-gap-48">
                            <img src="img/stat_ring.png" alt="Stat ring" class="column-image">
                        </div>
                    </div>
                    <hr class="my-5 gray-hr">
                </div>



                <div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4 column-container">
                    <div class="d-inline-flex flex-12 flex-gap-48 align-items-center">
                        <div class="game-mechanics flex-6">
                            <!-- example stats -->
                            <h3 class="mb-3">Example stats</h3>
                            <ul>
                                <li>Some Species will have lowered maximums; the below example is a human and cannot exceed 15 in any inner or Outer Ring stat due to the Unexceptional Trait in the Species section of its Background.</li>
                                <li>The below character started with 1 in each stat due to humans generalist Trait in the Species section of its Background.</li>
                                <li>Humans are intended to be the average baseline in this system.</li>
                                <li>This example character has 9 points spent in Physical so 27 to spend in the Outer Ring stats.</li>
                                <li>This character has spent only 2 points in Social and 1 in Mental, so its access to Traits that go beyond simple feats of brute strength will be very limited.</li>
                                <li>Each point gives a Trait that is Universal (circle/odd number) or based on the characters Background (square/even number).</li>
                                <li>Universal Traits are available to any character, Background feats have requirements based on Species, Origin, or Profession.</li>
                                <li>This character has oriented their stats to be a strong, but brainless and crude character with a lot of Power and Endurance. Maybe they swing a Great Club (Endurance 4) (Power 8) like a barbarian or have a set of Plate Armor (Endurance 8) (Power 4).</li>
                                <li>This character lacks the Grace or Intuition to be able to use a Fencing Sword (8 Grace) (4 Intuition) with any effectiveness, even if they got their hands on one.</li>
                                <li>They're definitely not becoming a Master Pilot (Memory 5) (Intuition 10) (Grace 5) (any Pilot skill) anytime soon.</li>
                            </ul>
                        </div>
                        <div class="d-inline-flex flex-6 flex-gap-48">   
                            <img src="img/stat_grid.png" alt="Stat grid" class="column-image">
                        </div>
                    </div>
                    <hr class="my-5 gray-hr">
                </div>


                <div class="d-flex flex-wrap flex-xs-nowrap column-container">
                    <div class="d-inline-flex flex-12 flex-gap-48">
                        <div class="game-mechanics">

                            <h3>Stat Types</h3>
                            <!-- stat types -->
                            <h4 class="mt-4">Physical</h4>
                            <h5>Endurance</h5>
                            <p class="copy">
                                Endurance represents the body's ability to resist and persist. A high Endurance means a character is hardy and resilient to the elements, attacks, and deprivation. Such a character can go longer without eating, march for longer without tiring, and ward of diseases or poisons more easily. A durable character isn't inherently strong, but they are consistent.
                            </p>
                            <h5>Power</h5>
                            <p class="copy">
                                Power represents the body's ability to generate force, be it lifting heavy objects or jumping high distances. A high Power means a character can lift more, push harder, run faster. Such a character has an easier time climbing, has a higher jump distance, and swings harder with an axe. A powerful character isn't inherently resilient, but they can perform impressive feats for short periods of time.
                            </p>
                            <h5>Grace</h5>
                            <p class="copy">
                                Grace represents the body's ability to act with accuracy and control. A high Grace means a character can throw accurately, dance gracefully, and perform dextrous and delicate actions. A graceful character isn't inherently fast or powerful, but every action they take is made more effective by their agility and efficiency of movement.
                            </p>

                            <h4 class="mt-4">Social</h4>
                            <h5>Empathy</h5>
                            <p class="copy">
                                Empathy represents the character's ability to interpret others, be it understanding their emotional state, picking up on subtle ticks and cues in their body language, or quickly interpreting orders. A high Empathy means the character can read others like a book, understand their thoughts and desires, and quickly ascertain if someone is acting suspicious. An empathetic character can't inherently convince others to see their point of view, but they can quickly understand what makes someone tick.
                            </p>
                            <h5>Persuasion</h5>
                            <p class="copy">
                                Persuasion represents the character's ability to convince others, be it through a well structured argument, persuasive rhetoric, or simple force of personality. A high Persuasion means the character can get the better in negotiations, convince others of a lie, or command loyalty in their troops. Persuasion doesn't make someone likable or respected, but they can get their way despite that.
                            </p>
                            <h5>Demeanor</h5>
                            <p class="copy">
                                Demeanor represents the character's control of their own vibe, be it acting cool under fire, the ability to command a room, or the ability to fade into a crowd. A high Demeanor means that a character can seem trustworthy at a glance, can look poised for the camera, and can command loyalty from their troops. A high Demeanor doesn't mean a character inherently understands or can control others, but looking the part and not cracking under pressure can go a long way.
                            </p>

                            <h4 class="mt-4">Mental</h4>
                            <h5>Logic</h5>
                            <p class="copy">
                                Logic represents the character's ability to work through problems in a systemic and rational manner, be it solving a complex math equation, understanding what a few footprints and broken branches mean, or counting their bullets in a firefight. A high Logic means a character can think abstractly and systematically to figure out complex problems or during difficult situations.
                            </p>
                            <h5>Intuition</h5>
                            <p class="copy">
                                Intuition represents the character's ability to read a situation without all the facts. A high intuition means a character can make the leaps in Logic needed to get through a challenge quickly and naturally, be it estimating how long the rations will last, reading their opponent's movements for a perfect parry, or figuring out the missing ingredient in a potion. A high intuition doesn't mean a character knows or understands the situation, but it can give them an edge regardless.
                            </p>
                            <h5>Memory</h5>
                            <p class="copy">
                                Memory represents the character's ability to store and recall information. A high Memory will allow a character to remember an obscure fact they learned in school, recall a suspicious face that walked by them at lunch, or recite a prayer without error. Memory doesn't help someone put together the facts in their head but is the starting point for many mental tasks.
                            </p>

                        </div>
                    </div>

                    <hr class="my-5 gray-hr">

                    <div class="d-inline-flex flex-12 flex-gap-48">
                        <div class="game-mechanics">

                            <h3>Stat-Based Resources</h3>
                            <h4 class="mt-4">Health and Hit Points (HP)</h4>
                            <p class="copy my-3">
                                Hit Points (abbreviated as HP) are used to calculate the amount of physical harm a character or object can receive. Hit points are intended as an abstract measurement of the hardiness, size, and capacity to absorb punishment that an object or character possesses. Lost HP does not directly correspond to specific forms of damage but is instead intended as an at-a-glance measure of the health of a character or object.
                            </p>
                            <p class="copy my-3">
                                HP's are calculated with a starting basis of 10 + each point a character possesses in a Physical outer ring stat. A max-level Human who has spent every level increasing his Physical stats will have 55 HP before Equipment or Traits are accounted for. HP's are lost as a character is harmed and regained slowly over time or quickly through the use of equipment, abilities, or RP occurrences. Unless hit points have been lost, a character always defaults to possessing their maximum number of HP.
                            </p>
                            <p class="copy my-3">
                                As HP's are lost a character or object will gain or lose Temporary Condition Traits such as Injured or Incapacitated. The HP-related traits are listed following this section. Several of these traits have no inherent effect but interact with other game systems. Additionally, a character may gain Temporary Condition Traits that describe specific injuries they've incurred, but these are not directly tied to the character's hit point total, though Condition Traits such as Severe Bleeding may result in a character continuing to lose HP at a steady rate until their injury is treated. Typically such conditions are conveyed through RP reasons or through Effects or Abilities attached to the thing that harmed them.
                            </p>
                            <p class="copy my-3">
                                At their most resilient, a maxed-out human character can sustain roughly 5 times the damage of a starting character before being incapacitated. While that may sound like a lot, it's actually rather low. Comparative systems like D&D sit at around a 30x multiplier. This system, however, does not have the same levels of exponentially increasing numeric values as more combat-oriented systems and contains numerous ways to increase HP outside of simple leveling.
                            </p>
                            <ul>
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
                                This character can not be healed by any means unless otherwise stated.</li>
                                <li><strong>Damaged - Conveyed - Condition</strong><br>
                                Temporary (An object gains this trait if it is below their maximum HP total)<br>
                                This Trait has no effect on its own.</li>
                                <li><strong>Destroyed - Conveyed - Condition</strong><br>
                                Temporary (An object gains this trait if it is at 0 or less HP)<br>
                                This object has been destroyed and no longer functions in any intended capacity.<br>
                                This object can not be repaired by any means unless otherwise stated.</li>
                            </ul>

                            <h4 class="mt-4">Vibe Points (VP)</h4>
                            <p class="copy my-3">
                                VP are a spendable resource that can be used to improve a character's skill checks in socially oriented RP scenarios or can be spent on abilities that incur a VP cost. A character has a maximum number of VP's equal to the total number of their Social inner ring stat. Certain Traits and equipment can increase the number or recovery rate of Vibe Points. VP's are regained slowly, over time, and are an important resource to store up and manage when delicate negotiations are expected or when a character really needs to intimidate a guard or get them to look another way.
                            </p>
                            <p class="copy my-3">VP's can be spent on:</p>
                            <ul>
                                <li>Rerolling a single die in a socially related skill check (such as to try again when lying to a guard about your motives)</li>
                                <li>Asking the DM to improve the results of a socially related skill check (such as improving the result of a negotiation over the price of a new car).</li>
                                <li>Using an Ability with a listed VP cost such as using the Forgettable Face Trait to make a passer-by forget your characters face once per point spent).</li>
                            </ul>

                            <h4 class="mt-4">Savvy Points (SP)</h4>
                            <p class="copy my-3">
                                SP are a spendable resource that can be used to boost a characters skill checks in Mentally oriented RP scenarios or to gain access to intuitions or abilities such as those granted by feats or background checks. SP are regained slowly, over time, and are an important resource to store up and manage when being tossed into new situations or when a character is outside of their depth. A character has a maximum SP's equal to the total number of their Mental inner ring stat. Certain Traits and equipment can increase the recovery rate of VP's. SP's can be spent on:
                            </p>
                            <ul>
                                <li>Rerolling a single die in a mentally related skill check (such as to try again when attempting to decipher or remember an obscure piece of history)</li>
                                <li>Requesting competence or advantage depending on which is applicable to the situation at hand (indicating that the character is using their intuition or savvy to navigate their way through a situation they may not be experienced with)</li>
                                <li>Using an Ability with a listed VP cost such as using the Born Navigator Trait to automatically succeed in discerning a ships direction when all that's available is the wind and waves to judge by.</li>
                            </ul>

                        </div>

                    </div>
                </div>

                <div class="separator"></div>



                <!------------ TRAITS ------------->
                <div class="breakout shadow-diffuse gray-bg white-text">
                    <div class="separator"></div>
                    <div class="container">
                    <div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4">
                    <div class="flex-3 d-none d-xl-inline-flex"></div>
                    <div class="flex-12">
                        <h3 class="sub-title mb-3">Explaining Traits</h3>
                        <div class="copy stinger white mb-3">placeholder subtitle</div>
                    </div>
                    <div class="flex-3 d-none d-xl-inline-flex"></div>
                </div>

                <div class="d-flex flex-wrap flex-xs-nowrap">
                    <div class="flex-3 d-none d-xl-inline-flex"></div>
                    <div class="d-inline-flex flex-12 flex-gap-48">
                        <div class="game-mechanics flex-6">
                            <h3>Traits</h3>
                            <p class="copy my-3">
                                Traits, alongside a character’s Stats and Equipment are the defining characteristic that makes a character who and what they are. The Trait system is flexible and functions as a catchall category of things a character knows, things a character can do, things a character belongs to, and relationships the character may have with others. Traits are named and self-contained characteristics categorized by what the Trait is and how it interacts with characters and the game’s systems. A Trait will typically either be part of a structured category that defines how the Trait is used, or it will contain a description that describes how the Trait manifests itself.
                                <br><br>
                                Traits are almost always additive, conveying some additional capability or capacity that a character has, though a rare few can convey negative attributes or restrictions. Trait effects are wide-ranging, from bonuses to certain skill checks to combat buffs to new abilities. They can describe a character's relationships to a society, such as memberships in exclusive organizations or even a wanted status for a criminal on the run. Traits can be temporary conditions, such as describing the ramifications of a character's broken leg. Because Traits are so varied, they will typically be organized on a character’s sheet by their theme or by how they are used.
                                <br><br>
                                Characters start with a series of Traits based on their background packages. A character’s Species, Origin, Profession, and Past all grant a starting package of Traits that will help to inform who and what a character is. From there a character gains additional feats through accruing experience and leveling up or through in-game circumstances.
                                <br><br>
                                There are three primary ways permanent Traits are gained:
                            </p>
                            <ul>
                                <li>
                                    They are granted by a background package when the character is created.
                                </li>
                                <li>
                                    They are granted automatically every time a character levels up.
                                </li>
                                <li>
                                    They are gained through in-game actions or occurrences.
                                </li>
                            </ul>
                            <p class="my-3">Temporary Traits can be granted through equipment or can be based on temporary circumstances, such as an injury sustained or short-term fame gained from a notorious act. Temporary Traits should have the time or circumstance of their ending in their description.</p>
                            <ul>
                                <li>Traits are self-contained pieces of information assigned to a character or object with specific requirements and effects.</li>
                                <li>Traits will typically list their name, category, type, and effect in a single place of reference. Traits can be listed by their name on character sheets and in descriptions, with the Traits effects referenced only when needed.</li>
                                <li>Universal Traits or background Traits are given at every level, alternating between Universal (odd-numbered levels) or background (even-numbered levels).</li>
                                <li>If, when a character levels, they do not wish to gain a new Trait they can "bank" that Trait, until an in-game RP circumstance presents them with the opportunity to gain a Trait that they want. This is a good way for a player to gain Conveyed Traits without it feeling forced.</li>
                                <li>Backgrounds can give additional Traits, and typically provide several when adopted that provide a baseline of Traits that inform a character's background and circumstances.</li>
                                <li>Traits can have an outer ring skill level requirement.</li>
                                <li>Traits can be gained outside of leveling and can be lost.</li>
                                <li>Traits can be temporary.</li>
                                <li>Traits always have a category, like Knowledge or Condition, that determines how the Trait is used in the game.</li>
                                <li>Traits can have a type like (Supernatural), (Injury), or (Cybernetic). These will typically be used in concert with in-game effects that target specific types of Traits, such as a doctor healing Injury Traits. These types have no effect on their own.</li>
                                <li>Traits that would require training can only be gained if the character has received training relevant to that Trait or has been performing a related action for long enough. This is at DM discretion.</li>
                                <li>Some Traits will require a character to already possess a prerequisite Trait in order to be gained (Such as a Pilot Trait being a prerequisite for the Expert Pilot Trait).</li>
                                <li>Some Traits have specific, listed, role playing requirements.</li>
                                <li>Unless it is a Ranked Trait then a Traits effect does not stack. Multiple instances of the same Trait will only have the effect of a single instance of that Trait.</li>
                            </ul>

                            <hr class="my-5">

                            <h3>Trait Ranks</h3>
                            <p class="my-3">
                                Some Traits, such as all Knowledges, can be Ranked up. These are different from Traits with successive requirements, such as Marksman being a requisite for Master Marksman. Ranked Traits do not change when Ranked Up, but provide a multiple to their bonuses equal to their rank level. As an example, Pilot: Small Boat(3) has been ranked up 3 times and provides a Roll Modifier to a piloting skill check of +30, representing the Traits bonus of 10 multiplied by the three times it has been ranked up.
                                <br><br>
                                A Trait can only be Ranked up beyond Rank (1) if the character has each required Stat for that Trait greater than or equal to 3 times the new Rank level. As an example, a character wishing to Rank Pilot: Small Boat to Rank 3 would need at least a Grace and Memory stats of 9.
                            </p>

                            <hr class="my-5">

                            <h3>Universal And background Traits</h3>
                            <p class="mb-3">
                                When a character is selecting Traits while leveling up they will pick either Universal or background Traits depending on their level. Unless a Trait is specified as background, then it is assumed to be Universal. background Traits are typically skills, areas of knowledge, or abilities that are related to a character’s Past or identity. A character selects background Traits from a list generated by their background package. Some background Traits will have RP requirements; these will be listed in that Traits requirements. As an example, a human can't just grow longer teeth, but an aged Orcs fangs can continue to grow as their power or prestige advances, conferring social benefits to them. This would be represented by the Longfanged Trait, and in its description it will describe bonuses to social situations between Orcs.
                                <br><br>
                                Many Traits in the list generated by a character's background package are Universal Traits that are thematically related to that background package. These give a character an opportunity to take or advance these Traits rapidly, especially if they are Ranked Traits. A character with a Profession of pilot will be able to take or Rank up pilot-related Traits at double the speed of a character that does not have those Traits in their background list.
                            </p>
                            <h3>Starter-only Traits</h3>
                            <p class="mb-3">
                                These are background Traits that can only be taken during character creation, representing some unique skill, nest egg, or heirloom the character possesses that they gained at some point during their lives. Many starter Traits will have specific requirements, such as the Pirate Scion Profession being required for the Starter Trait Inherited ship.
                            </p>
                            <h3>Conveyed Traits</h3>
                            <p class="mb-3">
                                These are Traits that can not be taken when a character levels up unless the DM allows it. These will often represent tangible improvements to a character that would be difficult to justify without a relevant roleplaying rationale. As an example, the Eagle Eye Trait implies a tangible and significant improvement to a character's long-distance vision. This could come about as a result of mystical training, mutation, a latent ability of a Species or Origin, or some other rationale. Conveyed Traits will often not have a minimum stat requirement.
                            </p>

                            <hr class="my-5">
                            <h3 class="mb-3">Trait Categories</h3>
                            <p class="copy">
                                Because Traits can take so many different forms, they are subdivided into seven categories. The categories listed below represent the fundamental basic categories of a Trait. The Traits category determines how it interacts with characters and the game's systems.
                                <h5 class="mt-4">Knowledges</h4>
                                <p>Knowledges are Traits that are gained exclusively either by in-game RP effort or are conferred by background packages. Multiple backgrounds can confer the same knowledge Trait, but unless otherwise specified, this does not increase the knowledge's rank. Knowledge can be learned multiple times, but each rank increase involves a commensurate level of increased time, difficulty, or financial investment. Knowledges and additional knowledge ranks can also be conferred by items, magic, or cybernetics or can be gained temporarily via research, but there are limitations to how these forms of knowledge can be utilized.<br><br>
                                When creating a new character, a player can choose to use universal or background traits that they would gain due to their level to gain knowledge Traits instead. This is to represent additional areas of knowledge the character would have accrued up to that point in their lives but that may not be specifically written out in the character's background packages (such as the character getting a bachelor's in history, allowing them to gain History (2) as a starting character from the Terran Demarchy). It is up to the DM to decide how high a knowledge rank can be gained in this way.<br><br>
                                Outside of character creation, knowledge can only be gained via in-game RP occurrences, such as a character spending a semester learning fencing or a character having the layout of a forest magically conveyed to them. It is DM discretion to determine how easy or difficult knowledges are to attain and where their limitations are.</p>
                                <h5 class="mt-4">Languages</h4>
                                Languages confer the ability for the learner to speak or read/write in that language. Language traits represent a character's ability to communicate using that language. Most languages will be granted by a character's background package, but languages can also be temporarily granted by ex machina devices like universal translators or magic amulets. Languages can also be learned in the same fashion as knowledge Traits. Languages function as both knowledge and an ability in that they describe a character's ability to understand and use a language. A language Trait will typically describe how the character can use that language, such as English (Spoken).</p>
                                <h5 class="mt-4">Skills</h4>
                                <p>Skill traits represent a character's ability to perform a specific task or engage in a specific activity without fumbling or failing to even understand the basics. A skill is like knowledge in that it is a learned Trait, but unlike knowledge, skill Traits can be gained over time through training and effort, even without outside aid. Many skills are ranked Traits and represent the additive bonuses conveyed through practice and mastery in a given task. Other skill Traits represent additional improvements or aspects of mastery that go beyond a simple bonus to a die roll during a skill check. Mastery skill Traits will typically list prerequisite traits that a character must already possess before they can take the more advanced Trait. Skill Traits can be selected when a character is choosing level-up skills, but it is recommended that the DM only allow them to select skill Traits they had been learning or utilizing.</p>
                                <h5 class="mt-4">Abilities</h4>
                                <p>Abilities are Traits that confer some sort of ability to a character. This can come in a wide variety of forms, from a character's ability to fly being granted by Natural Flight to a character's ability to Hide in Plain Sight conferring their ability to sneak and go undetected even while being observed. Abilities are the most common kind of trait to be conferred by items or equipment, as they represent some sort of specific physical or mental feat that a character can perform. Not all abilities are physical, but most manifest as something other than modifying a skill check. Often abilities are Innate to a Species or culture and will be automatically conferred to them by their Species or Origin packages. An ability Trait will always describe what it does and when it can be used, though it will be at DM discretion to determine the boundaries of when an ability can be applicable to a situation.</p>
                                <h5 class="mt-4">Circumstance</h4>
                                <p>Circumstance Traits describe a character's relationship with the world around them and will typically list noteworthy or exceptional characteristics. While virtually any description of a character's place in society could be listed as a Trait this should be reserved for important or unique aspects of a character. As an example, membership in a thieves guild would be listed as a Circumstance Trait, but membership at Costco would not. Circumstance Traits are almost exclusively Conveyed Traits given by a character's background or are granted by RP occurrences and can rarely be taken as level-up Traits. Just as Circumstance Traits can be gained in RP scenarios, they can also be lost in the same way, with the aforementioned thief being ejected from the Guild after double-crossing another member. Circumstance Traits will typically not have a minimum stat requirement.</p>
                                <h5 class="mt-4">Conditions</h4>
                                <p>Condition Traits are Traits that represent some sort of ongoing status. These will typically describe some sort of ongoing effect a character is experiencing, whether physical or mental. Condition Traits can vary widely in what they represent and will almost always have their effects described in the Trait. These can range from a character having cybernetic arms, granting them significantly improved power stats to a character being a conduit for the spirits and thus able to see ghosts. Injuries will often be represented as temporary Condition Traits and will describe some sort of negative attribute or incapacity forced onto the character.
                                <h5 class="mt-4">Other</h4>
                                <p>Other is a catchall category and represents special Traits that go beyond the norm. Most Other Traits are, in reality, multiple Traits listed at the same time for the sake of convenience. As an example, a character being possessed by a daemon may have that possession listed as an Other Trait, and that Traits description may describe significant alterations to how that character would otherwise function.</p>
                            </p>
                        </div>

                        <div class="game-mechanics flex-6">
                            <h3 class="mb-3">Example Traits</h3>

                            <h5>Knowledges</h5>

                            <div class="d-flex flex-wrap flex-gap-12 mb-4">
                                <div class="trait-box">
                                    <div class="trait-name">Knowledge: Local History - Ranked - Knowledge</div>
                                    <div class="badge bg-dark white-text d-inline-flex">(Memory 3)</div>
                                    <div class="">- This character has knowledge of the history of a specific local region and can be assumed to be familiar with local facts like names, locations, and occurrences.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Knowledge: Terran law - Ranked - Knowledge</div>
                                    <div class="badge bg-dark white-text d-inline-flex">(Memory 3)</div>
                                    <div class="">- This character has knowledge of the Terran legal code and can be assumed to be familiar with the laws and legal codes of Terran societies.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Knowledge: Orc Society - Ranked - Knowledge</div>
                                    <div class="badge bg-dark white-text d-inline-flex">(Memory 3)</div>
                                    <div class="">- This character has knowledge orc customs and can be assumed to be familiar with the institutions and traditions of Orc societies.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Knowledge: Mathematics - Ranked - Knowledge</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Memory 3)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Logic 3)</div>
                                    </div>
                                    <div class="">- This character has a knowledge of mathematics and of mathematical fields of study.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Knowledge: Elemental Magics - Ranked - Knowledge</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Memory 3)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Intuition 5)</div>
                                    </div>
                                    <div class="">- This character has a knowledge of Elemental Magics, including the theoretical underpinnings of that magic as well as its history.</div>
                                </div>
                                
                            </div>

                            <h5>Languages</h5>

                            <div class="d-flex flex-wrap flex-gap-12 mb-4">
                                <div class="trait-box">
                                    <div class="trait-name">English (Spoken) - Language</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Memory 2)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Intuition 2)</div>
                                    </div>
                                    <div class="">- This character is conversational with the English language and can converse in it.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Homeworld Interlag (Spoken) (Written) - Language</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Memory 2)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Intuition 2)</div>
                                    </div>
                                    <div class="">- This character is conversational with the Homeworld Interlag language and can converse in it.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Dwarvish Runes (Written) - Language</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Memory 3)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Intuition 5)</div>
                                    </div>
                                    <div class="">- This character can read and write Dwarvish Runes.</div>
                                </div>
                            </div>

                            <h5>Skills</h5>

                            <div class="d-flex flex-wrap flex-gap-12 mb-4">


                                <div class="trait-box">
                                    <div class="trait-name">Pilot: Helicopter - Ranked - Skill</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Memory 5)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Intuition 3)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Grace 3)</div>
                                    </div>
                                    <div class="">- This character is capable of piloting helicopters in simple scenarios without a skill check and is capable of describing the basic functions and controls of a helicopter.</div>
                                    <div class="">- Rank *10 added to skill check rolls involving helicopter piloting.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Expert Pilot - Mastery - Skill</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Memory 5)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Intuition 10)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Grace 5)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Any Pilot skill)</div>
                                    </div>
                                    <div class="">- This character can request advantage on piloting any craft they have training in and may request competence in piloting any craft similar to one they have training in.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Rider: Basic Animals - Ranked - Skill</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Grace 4)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Empathy 4)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Persuasion 3)</div>
                                    </div>
                                    <div class="">- This character is capable of riding a basic animal as a mount in simple scenarios without a skill check.</div>
                                    <div class="">- Rank *10 added to skill check rolls involving riding a simple animal.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Wielder: Longsword - Ranked - Skill</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Grace 4)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Power 4)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Endurance 4)</div>
                                    </div>
                                    <div class="">- This character is capable of performing the basic tasks of maintaining a Long Sword without a skill check.</div>
                                    <div class="">- Rank *5 added to skill check rolls involving a Longsword.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Wielder: Musket - Ranked - Skill</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Grace 3)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Power 2)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Intuition 3)</div>
                                    </div>
                                    <div class="">- This character is capable of performing the basic tasks of maintaining a Musket without a skill check.</div>
                                    <div class="">- Rank *5 added to skill check rolls involving a Musket.</div>
                                </div>

                            </div>

                            <h5>Abilities</h5>

                            <div class="d-flex flex-wrap flex-gap-12 mb-4">

                                <div class="trait-box">
                                    <div class="trait-name">Trail Runner - Ability</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Power 3)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Endurance 2)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Grace 2)</div>
                                    </div>
                                    <div class="">- This character takes twice as long to get winded by activities that involve running, hiking, or climbing</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Capable Student - Ability</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Memory 3)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Logic 3)</div>
                                    </div>
                                    <div class="">- This character can learn a new (knowledge) feat in half the specified time</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Knowledge Sponge - Mastery - Ability</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Memory 5)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Logic 5)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Intuition 5)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Capable Student)</div>
                                    </div>
                                    <div class="">- This character can learn a new (knowledge) feat in a quarter the specified time</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Con Man - Ability</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Persuasion 8)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Demeanor 4)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Intuition 4)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Memory 4)</div>
                                    </div>
                                    <div class="">- Add 5 to any skill check rolls that involve lying in either written or spoken form.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Mental Fortitude - Ability</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Endurance 8)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Logic 5)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Demeanor 5)</div>
                                    </div>
                                    <div class="">- This character can request advantage in any scenario where their mental facilities are being severely taxed, be it resisting the mesmerizing effects of a vampire or pushing through a long march without becoming exhausted.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Sculpted - Ability</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Power 5)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Endurance 5)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Demeanor 3)</div>
                                    </div>
                                    <div class="">- This character can request advantage in situations where the appearance of athleticism can effect the outcome of a roll or situation (useful for models, athletes with endorsements, or barbarians trying to intimidate)</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Eagle Eye - Conveyed - Ability</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(None)</div>
                                    </div>
                                    <div class="">- This character can request advantage in situations that involve seeing at distance.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Gladiator - Ability</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Physical 5)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Grace 5)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Demeanor 5)</div>
                                    </div>
                                    <div class="">- When in combat this character can use any close combat weapon as if they had the wielder trait with a single rank for that weapon.</div>
                                </div>
                            </div>

                            
                            
                            <h5>Circumstances</h5>

                            <div class="d-flex flex-wrap flex-gap-12 mb-4">


                                <div class="trait-box">
                                    <div class="trait-name">Thieves Guild Membership - Conveyed - Circumstance</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(None)</div>
                                    </div>
                                    <div class="">- This character is an official member of a Local Thieves Guild.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Tugboat Captain - Conveyed - Circumstance</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(None)</div>
                                    </div>
                                    <div class="">- This character has all required legal training and licenses required to command a Tugboat.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Wanted on Terra - Conveyed - Circumstance</div>
                                    <div>Temporary (Lost when the characters innocence is proclaimed or they are caught)</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(None)</div>
                                    </div>
                                    <div class="">- This Character is wanted on all Terran planets for Past crimes.</div>
                                    <div class="">- This Characters wanted status is severe and law enforcement and bounty hunting entities are actively searching for them.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Short Term Fame - Conveyed - Circumstance</div>
                                    <div>Temporary (30 days)</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(None)</div>
                                    </div>
                                    <div class="">- Due to recent events this Character is famous and can Request Advantage in Social situations where the Characters fame may aid them.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Significant Inheritance - Conveyed - Circumstance</div>
                                    <div>Temporary (Lost when the money is all spent)</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(None)</div>
                                    </div>
                                    <div class="">- This character has access to an Inheritance of 2 million Terran Credits currently safely contained in a bank.</div>
                                </div>

                            </div>

                            <h5>Conditions</h5>

                            <div class="d-flex flex-wrap flex-gap-12 mb-4">


                                <div class="trait-box">
                                    <div class="trait-name">Stone Skin - Conveyed - Condition - Enchantment</div>
                                    <div>Temporary (This trait lasts a number of minutes equal to the casters Rank in this ability)</div>
                                    <div class="">- This character gains Rank *3 armor against all physical damage.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Severely Bleeding - Conveyed - Condition - Injury</div>
                                    <div>Temporary (This trait is lost when this Condition is Treated)</div>
                                    <div class="">- This character loses 1 HP every combat round while in combat.</div>
                                    <div class="">- This character loses 1 HP every minute while outside of combat.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Dead - Conveyed - Condition - Injury</div>
                                    <div>Temporary (A character gains this trait if they are at 0 or less HP)</div>
                                    <div class="">- This character is dead and can not perform voluntary actions.</div>
                                    <div class="">- This character can not be healed by any means unless otherwise stated.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Stimm Rush - Conveyed - Condition</div>
                                    <div>Temporary (This Trait lasts a number of minutes stated by the Stimm being used, or 1 minute if there is no stated duration)</div>
                                    <div class="">- This character gains 5 to all physical outer ring stats</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Ghost Sight - Conveyed - Condition - Injury</div>
                                    <div>Temporary (A character gains this trait if they are at 0 or less HP)</div>
                                    <div class="">- This character is dead and can not perform voluntary actions.</div>
                                    <div class="">- This character can not be healed by any means unless otherwise stated.</div>
                                </div>


                            </div>

                            <h5>Other</h5>

                            <div class="d-flex flex-wrap flex-gap-12 mb-4">
                                <div class="trait-box">
                                    <div class="trait-name">Possessed By A Spirit - Conveyed - Other</div>
                                    <div>Temporary (lost when the character is no longer possessed)</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">None</div>
                                    </div>
                                    <div class="">- This character has lost control over their body to supernatural entity. If this is a player character then how that player or the DM continue to operate the character is at DM discretion, as is the nature of the entity that has possessed them.</div>
                                    <div class="">- This character no longer accrues experience.</div>
                                    <div class="">- While under the control of this entity the characters Mental Stats are considered <span class="badge bg-dark white-text d-inline-flex">(Mental 8)</span> <span class="badge bg-dark white-text d-inline-flex">(Empathy 3)</span> <span class="badge bg-dark white-text d-inline-flex">(Persuasion 9)</span> <span class="badge bg-dark white-text d-inline-flex">(Demeanor 12)</span> for most purposes. Condition Traits that modify these stats are still in effect unless otherwise stated.</div>
                                    <div class="">- If the Character had Traits with minimum stat values or had Ranks in Traits they no longer qualify for then those Traits are to be ignored.</div>
                                    <div class="">- The entity possessing this character can be assumed to have full knowledge and understanding of all Knowledge, Skill, and Ability Traits of the character they are possessing and can use them without issue as long as they possess the minimum stats required for them.</div>
                                    <div class="">- This character gains the following Temporary Traits and will lose them if they cease to be possessed:
                                        <div class="d-inline-flex flex-gap-4 flex-wrap">
                                            <div class="badge bg-dark white-text d-inline-flex">Supernatural</div>
                                            <div class="badge bg-dark white-text d-inline-flex">Spirit Touched</div>
                                            <div class="badge bg-dark white-text d-inline-flex">Telekinesis(1)</div>
                                            <div class="badge bg-dark white-text d-inline-flex">Inured to pain</div>
                                            <div class="badge bg-dark white-text d-inline-flex">Fearless</div>
                                            <div class="badge bg-dark white-text d-inline-flex">Ghost Sight</div>
                                            <div class="badge bg-dark white-text d-inline-flex">Knowledge: The Supernatural (1)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h5>Background-Only</h5>

                            <div class="d-flex flex-wrap flex-gap-12 mb-4">
                                <div class="trait-box">
                                    <div class="trait-name">Long Toothed - Background - Condition</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Power 10)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Endurance 5)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Demeanor 5)</div>
                                        <div class="badge bg-dark white-text d-inline-flex">(Middle Aged or Older)</div>
                                    </div>
                                    <div class="">- An Orks teeth grow continuously as they age, acting as both a sign of wisdom and prestige. An ork that has managed to maintain their teeth throughout their life is seen as a highly capable individual or one of noble birth. A long toothed ork can request advantage in dealings with other orks, or with any other party that may hold this belief about orks.</div>
                                </div>
                            </div>

                            <div class="d-flex flex-wrap flex-gap-12 mb-4">
                                <div class="trait-box">
                                    <div class="trait-name">Sorcererous - Background - Condition</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(None)</div>
                                    </div>
                                    <div class="">- This character may take Magic related traits and may spend stat points on the magic inner ring stat.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Natural Breath Weapon - Background - Ability - Ranked</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Endurance 3)</div>
                                    </div>
                                    <div class="">- This characters biology allows them to use their breath as a tool or weapon.</div>
                                    <div class="">- For each rank of this ability add another d4 to the damage the breath weapon deals.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Hard Shell - Background - Condition - Ranked</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(Endurance 5)</div>
                                    </div>
                                    <div class="">- This character possesses a hard natural shell that protects them from harm.</div>
                                    <div class="">- Rank *3 added to this characters armor stat for attacks that hit its torso.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Cybernetic Intelligence - Background - Condition</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(None)</div>
                                    </div>
                                    <div class="">- This character is capable of extremely rapid feats of mathematical comprehension and has a +20 roll modifier for skill checks related to mathematics.</div>
                                    <div class="">- This character is capable of performing significant numbers of mathematical calculations simultaneously, it is DM discretion when and how this ability is limited.</div>
                                </div>

                                <div class="trait-box">
                                    <div class="trait-name">Supernatural - Background</div>
                                    <div class="d-inline-flex flex-gap-4">
                                        <div class="badge bg-dark white-text d-inline-flex">(None)</div>
                                    </div>
                                    <div class="">- This character has gone beyond the realm of the real and can take supernatural related traits and may spend stat points on the supernatural inner ring stat.</div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="flex-3 d-none d-xl-inline-flex"></div>
                </div>
                    </div>
                    <div class="separator"></div>
                </div>

                <div class="separator"></div>


                <!--------------- SKILL  CHECKS ------------->
                <div class="d-flex flex-wrap flex-fill flex-xs-nowrap mb-4">
                    <div class="flex-3 d-none d-xl-inline-flex"></div>
                    <div class="flex-12">
                        <h3 class="sub-title mb-3">Skill Checks</h3>
                        <div class="copy stinger black mb-3">placeholder subtitle</div>
                    </div>
                    <div class="flex-3 d-none d-xl-inline-flex"></div>
                </div>

                <div class="d-flex flex-wrap flex-xs-nowrap">
                    <div class="flex-3 d-none d-xl-inline-flex"></div>
                    <div class="d-inline-flex flex-12 flex-gap-48">
                        <div class="d-inline-flex flex-6">
                            <div class="game-mechanics">
                                <h3 class="my-4">What is a Skill Check?</h3>
                                <p class="copy">
                                    Skill checks are a process by which an action a character undertakes or a situation they are presented with requires measuring the character's attributes or abilities in some way. Skill checks take a variety of forms, from measuring a character's raw strength or mental fortitude to testing a character's ability to ride a horse or solve a complex equation. Skill checks, as a game mechanic, are expressed through a die roll on a d20, and the result of that roll is compared against a target value. Meeting or exceeding the required value is a success; falling below is a failure. The die roll will typically be modified by a character's stat values, equipment they may be utilizing, or any number of other factors.
                                    <br><br>
                                    Skill checks will typically have one or more associated outer ring stat values. Add the associated stat total to the roll for the check. Some effects will require established stats outlined by the rules associated with whatever is requiring the check, but in most situations the DM will determine what stats are being measured. When a skill check asks for an inner ring stat, the character can decide which of the outer ring stats in that category they wish to use.
                                    <br><br>
                                    Skill checks are a way for a DM to measure a character against some form of adversity or to grade their performance. A skill check may have a target value that is known to the player or one that is known only to the DM. Some skill checks may not have a target value at all and are instead looking to see how "good" the roll is and rationalizing how that character's effort meets their need (such as establishing the quality of a character's work of art). How skills are truly utilized is typically a style of DMing more than a hard and fast set of rules.
                                    <br><br>
                                    Ex. A character may have to take a lifting (Power) skill check in order to lift a very heavy object.
                                    <br>
                                    Ex. A character may have to take a fear (demeanor) skill check to avoid cowering at the sight of a dragon.
                                    <br><br>
                                </p>
                                <ul>
                                    <li>Skill check results are rolled on a d20. The result of this roll is then modified by all roll modifiers and compared against a target value. If the skill check meets or exceeds the value, it "succeeds." If the roll falls below the value, it "fails."</li>
                                    <li>Most skill checks will reference an outer ring stat. When a skill check references a stat, you add the character's stat value to the total.</li>
                                    <li>If a skill check references an inner ring stat, the character can choose one relevant outer ring stat to add to the die roll.</li>
                                    <li>Some complex skill checks will reference more than one outer ring skill. For these checks the player needs to roll for each skill separately. The result is a combination of those successes and failures, and that result is up to the DM. Ex. A spy driving a car in a foreign land could have a skill check against both their grace and memory. The first for the act of driving itself, the second to demonstrate that they remember the road laws of the country they are infiltrating.</li>
                                    <li>Skill success is a gradient; succeeding by a small amount may technically succeed but may incur some unforeseen event. Meanwhile, failing or succeeding hugely may result in significant benefits or consequences. The extent to which a character succeeds or fails is up to the DM.
                                        <ul>
                                            <li>Ex. You were not detected while sneaking but stepped on a twig. The guards are now more alert.</li>
                                            <li>Ex. You failed the jump but can still catch the ledge with your arms to avoid falling down the pit.</li>
                                            <li>EX. You brewed a potion perfectly, slightly amplifying its abilities.</li>
                                            <li>Ex. You fumbled the lock and broke the mechanism; you can't try again.</li>
                                        </ul>
                                    </li>
                                    <li>Some skill checks can be repeatedly attempted until the character succeeds or stops trying. It is up to the DM to decide what checks can be repeated and how long they take.</li>
                                    <li>If a character's modifiers to the roll would mean that roll automatically meets or exceeds the check's target value, the player can forgo rolling at all if they wish, though the DM may still ask for them to roll in order to know how far they exceed the requirement.</li>
                                </ul>
                                <br>
                                <h3 mb-3">Requesting Advantage</h3>
                                <ul>
                                    <li>A character can request advantage in a situation where they believe they are uniquely advantaged in the effort of performing some sort of task or skill or in a role-playing scenario.</li>
                                    <li>Some feats will specify a situation where a character can request advantage that is tied to a specific skill set or physical attribute</li>
                                    <li>Requesting advantage is an expression of both the stats written on a character sheet and the character's backstory and role-playing attributes.</li>
                                    <li>Some races, backgrounds, or professions will infer the right to request advantage in a broad set of circumstances, such as a character with a small stature being able to request advantage when hiding or a professional soldier's ability to request advantage when learning to wield a new weapon.</li>
                                    <li>The dm can allow or deny requested advantage and will determine the appropriate expression of the advantage</li>
                                    <li>ex. A character with a background as a fisherman may be able to request advantage in a situation where they need to maintain balance while the airship they are on is suffering severe turbulence due to the character's past with the rocky seas. The DM could choose to give them a +5 to their grace roll to stay standing.</li>
                                    <li>ex. A character is a pilot and is piloting the ship they built by hand and know by heart. The DM could choose to give them a bonus to a skill check or even waive the need for the skill check if the act could be considered routine.</li>
                                </ul>
                                <br>
                                <h3 mb-3">Requesting Competence</h3>
                                <ul>
                                    <li>A character can Request competence in any situation where they believe other related factors give them enough of a baseline level of capability that they shouldn't be penalized as harshly or at all for lacking a specific skill.</li>
                                    <li>A Character with expertise in wielding a sword can request competence when wielding a dagger, even if they don't have a feat giving them that skill.</li>
                                    <li>Requested competence can result in a wide range of results, from the user being wholly proficient in the task at hand to even being granted a relevant feat that gives them that skill permanently.</li>
                                    <li>A bard skilled with a guitar and a bass can likely request competence with a lute, but the DM may consider the violin to be a step too far.</li>
                                    <li>Many feats that grant expertise in a skill also grant inferred competence in related skills.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-inline-flex flex-6">
                            <div class="game-mechanics">
                                <h3 class="my-4">Skill Check Difficulty Ranges</h3>
                                <p class="copy">
                                    Skill check requirements range from -10 to 80, with an explanation of what those values represent below. Higher checks required higher relevant rolls and modifiers to succeed. A check that notes a stat can have that stat added to its total. A Complex check that notes multiple stats must roll separately for each stat. In general, as actions grow more complex or multi-staged, the relevant skill checks will require more stats to be rolled against at once.
                                    <br><br>
                                    Checks at 0 or below are automatically accomplishable even with no skill and often even with difficulty modifiers to the check. These would only be checked if there was a realistic chance of failure.
                                </p>

                                <div class="d-flex nowrap my-4 align-items-center">
                                    <div class="d-flex flex-2 nowrap">
                                        <span class="copy-title"><strong>-10</strong></span>
                                    </div>
                                    <div class="d-flex flex-16 flex-column flex-gap-4">
                                        <div>
                                            Breathing (endurance)
                                        </div>
                                        <div>
                                            Being at the top of a tall mountain may give you a -20 difficulty modifier to breathing, giving a character with a poor endurance stat a 50/50 chance of passing out.
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex nowrap my-4 align-items-center">
                                    <div class="d-flex flex-2 nowrap">
                                        <span class="copy-title"><strong>0</strong></span>
                                    </div>
                                    <div class="d-flex flex-16 flex-column flex-gap-4">
                                        <div>
                                            Reading (intuition)
                                        </div>
                                        <div>
                                            If the script is in poor handwriting, it might give the action a -10 difficulty modifier, which gives a character with a poor intuition stat a 50/50 chance of not understanding the text.
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Checks between 1 and 20 are accomplishable by any character as long as there are no difficulty modifiers. There is a 20x gap between a check of a 1 and 20 though, and while having relevant stats, equipment, or feats may make these checks easy or even automatic, a character not fit for the task may find them almost impossible.
                                </p>

                                <div class="d-flex nowrap my-4 align-items-center">
                                    <div class="d-flex flex-2 nowrap">
                                        <span class="copy-title"><strong>10</strong></span>
                                    </div>
                                    <div class="d-flex flex-16 flex-column flex-gap-4">
                                        <div>
                                            Jumping a 6-foot gap (Power)
                                        </div>
                                        <div>
                                            A character may have an injured leg, giving them a -10 difficulty modifier to the jump.
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex nowrap my-4 align-items-center">
                                    <div class="d-flex flex-2 nowrap">
                                        <span class="copy-title"><strong>20</strong></span>
                                    </div>
                                    <div class="d-flex flex-16 flex-column flex-gap-4">
                                        <div>
                                            Making a fire (Mental)
                                        </div>
                                        <div>
                                            A lighter could give +15 to making a fire.
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    The difference between a requirement of 20 and 40 is often the difference between requiring novice or expert training, or requiring simple or advanced equipment. Accomplishable by characters with high stats, relevant feats, or equipment. Many professions have their day to day actions in this range. Skill checks in this range are often still heavily impacted by raw stat values.
                                </p>

                                <div class="d-flex nowrap my-4 align-items-center">
                                    <div class="d-flex flex-2 nowrap">
                                        <span class="copy-title"><strong>30</strong></span>
                                    </div>
                                    <div class="d-flex flex-16 flex-column flex-gap-4">
                                        <div>
                                            Brewing a simple potion (Memory)(Grace)
                                        </div>
                                        <div>
                                            A potion-brewing feat could give a +20 Roll modifier to this Skill, turning the impossible into the easy.
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex nowrap my-4 align-items-center">
                                    <div class="d-flex flex-2 nowrap">
                                        <span class="copy-title"><strong>40</strong></span>
                                    </div>
                                    <div class="d-flex flex-16 flex-column flex-gap-4">
                                        <div>
                                            Writing a complex computer program (Logic)(Intuition)
                                        </div>
                                        <div>
                                            A computer use feat and a computer programming feat could combine to give +20 to this action. Repeated attempts could also allow the character to gain advantage by slowly fixing the flaws in their program.
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    The difference between a requirement of 40 and 60 is often the difference between the daily acts of a master in a profession and something that requires days or weeks of prep time, perfectly attuned equipment, and external forces acting to make the check succeed. Accomplishable by characters with advanced feats and high-end equipment. Often both. While stats may have an impact on the roll, skill checks at this level rely more on training and preparation than on talent. Most extreme skills are in this range.
                                </p>

                                <div class="d-flex nowrap my-4 align-items-center">
                                    <div class="d-flex flex-2 nowrap">
                                        <span class="copy-title"><strong>50</strong></span>
                                    </div>
                                    <div class="d-flex flex-16 flex-column flex-gap-4">
                                        <div>
                                            Disarming a bomb while underwater. (memory)(Grace)(demeanor)
                                        </div>
                                        <div>
                                            Being in communication with someone reading the defusal manual for the bomb could give significant advantage to this kind of check.
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex nowrap my-4 align-items-center">
                                    <div class="d-flex flex-2 nowrap">
                                        <span class="copy-title"><strong>60</strong></span>
                                    </div>
                                    <div class="d-flex flex-16 flex-column flex-gap-4">
                                        <div>
                                            Deciphering an alien language (Logic)(Empathy)(Intuition)
                                        </div>
                                        <div>
                                            Having a team of research assistants could give significant Advantage when attempting this kind of check, and getting the most out of them may even require several Empathy or Persuasion checks of their own.
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    Checks between 61 and 80 are absurdly difficult or are considered impossible by normal means. If a complex task looks like it's in this range, it may be better to break it down into multiple smaller tasks.
                                </p>

                                <div class="d-flex nowrap my-4 align-items-center">
                                    <div class="d-flex flex-2 nowrap">
                                        <span class="copy-title"><strong>70</strong></span>
                                    </div>
                                    <div class="d-flex flex-16 flex-column flex-gap-4">
                                        <div>
                                            Building a functioning spaceship out of local appliances. (Intuition)(Logic)(Memory)(Grace)
                                        </div>
                                        <div>
                                            A check of this nature is almost asking to measure how extreme the Character's failure is. A check of this difficulty may actually be accomplishable if the nature of the action allows the Character to slowly accrue larger and larger Advantage through many repeated and well-supported attempts.
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex nowrap my-4 align-items-center">
                                    <div class="d-flex flex-2 nowrap">
                                        <span class="copy-title"><strong>80</strong></span>
                                    </div>
                                    <div class="d-flex flex-16 flex-column flex-gap-4">
                                        <div>
                                            Flying by flapping your arms (Power)
                                        </div>
                                        <div>
                                            This is a hyperbolic example, but an 80 should in general be a functionally impossible task. This is the ceiling of what reality can allow.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="flex-3 d-none d-xl-inline-flex"></div>
                </div>



                <div class="separator"></div>



                <!------------ TRAITS ------------->
                <div class="breakout shadow-diffuse gray-bg white-text">
                    <div class="separator"></div>
                    <div class="container">
                    <div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4">
                    <div class="flex-3 d-none d-xl-inline-flex"></div>
                    <div class="flex-12">
                        <h3 class="sub-title mb-3">Items, Armor, and Effects</h3>
                        <div class="copy stinger white mb-3">placeholder subtitle</div>
                    </div>
                    <div class="flex-3 d-none d-xl-inline-flex"></div>
                </div>

                <div class="d-flex flex-wrap flex-xs-nowrap">
                    <div class="flex-3 d-none d-xl-inline-flex"></div>
                    <div class="d-inline-flex flex-12 flex-gap-48">
                        <div class="game-mechanics flex-6">
                            <h3 class="mb-3">Armor and Effects</h3>
                            
                            <h4 class="mb-3">Resisting Damage Types</h4>
                            <p class="copy my-3">Resistances are used to reduce incoming damage by a specified amount. Resistances begin at zero. Incoming damage will always have a type, and some forms of attacks will do multiple types of damage at once. A fiery explosion will do both blunt damage through the explosion itself, as well as heat damage through the heat of the fireball. Resistances are predominantly conveyed through equipment, but some Traits may provide additional resistances. A character's resistances are cumulative; if a character has both leather armor and scaly skin, their resistance to slashing will be higher than if they had either alone.<br><br>
                            Some resistances will have coverage areas specified, such as a helmet providing significant protection, but only on the head. How and where a character is hit is covered in the section on combat. Resistances can, in rare cases, be a negative value. In these cases they add to the damage inflicted a value equal to that negative number.</p>

                            <hr class="my-5 gray-hr">
                            
                            <h3 class="mb-3">Damage Types</h3>
                            
                            <h4 class="mt-4 mb-2">Physical</h4>
                            
                            <h6 class=""><strong>Blunt</strong></h6>
                            <p class="copy mb-3">Blunt attacks are those that impact evenly across a wide area, such as a strike from a club or the wide blast front of an explosion. Any sudden change in pressure, such as being thrown out an airlock, would also be tracked as blunt damage. Blunt attacks can often cause the Concussed Temporary Condition Trait.</p>
                            
                            <h6 class=""><strong>Slashing</strong></h6>
                            <p class="copy mb-3">Slashing attacks are those that cut across a wide area, such as a swing from a sword or a slash from animal claws. Slashing attacks can often cause the Bleeding Temporary Condition Trait.</p>
                            
                            <h6 class=""><strong>Piercing</strong></h6>
                            <p class="copy mb-3">Piercing attacks are those that impact sharply in a small area and pierce deep, such as a thrust from a spear or the impact of a bullet. Piercing attacks can often cause the Bleeding Temporary Condition Trait.</p>
                            
                            <h4 class="mt-4 mb-2">Elemental</h4>
                            
                            <h6 class=""><strong>Heat</strong></h6>
                            <p class="copy mb-3">Heat represents the damage caused by very high thermal energy/temps being applied to an area, be it from fire, a laser, or any other source. Fire is a common form of elemental damage that can be encountered easily both in and out of combat. Heat damage can often cause the Burning Temporary Condition Trait.</p>
                            
                            <h6 class=""><strong>Cold</strong></h6>
                            <p class="copy mb-3">Cold represents the damage caused by thermal energy being removed from an object or character, be it from contact with ice, exposure to the elements, or any other source. Cold damage will most commonly be a result of exposure to extremely cold climates, and the ways this damage manifests itself will often be outside of combat. Cold damage can sometimes cause the Frozen Temporary Condition Trait.</p>
                            
                            <h6 class=""><strong>Electrical</strong></h6>
                            <p class="copy mb-3">Electrical represents the application of electricity to a system that isn't built to handle it, be it from lightning, a downed power line, or an electric eel. The threat of electric shock is far more common in a modern electrically powered society, but its a classic element of magic. Electrical attacks can often cause the Concussed Temporary Condition Trait.</p>
                            
                            <h6 class=""><strong>EMP</strong></h6>
                            <p class="copy mb-3">EMP or Electromagnetic Pulse is a catchall term for electromagnetic damage that is specifically harmful to machines or computer systems that rely on electricity or magnetic attributes to function. EMP damage's most common interaction will be to disable or destroy mechanical or electronic systems, either intentionally or accidentally. EMPs can be caused by natural or manmade phenomena, from solar flares to nuclear explosions. EMP damage can only harm characters or objects with the Mechanical Trait.</p>
                            
                            <h4 class="mt-4 mb-2">Supernatural</h4>
                            
                            <h6 class=""><strong>Metaphysical</strong></h6>
                            <p class="copy mb-3">Metaphysical damage represents the damage inflicted by any higher plane source and does not interact with normal matter in a scientifically understood manner. Metaphysical attacks or effects will contain a description for if and when they do extra damage or possess other effects. Metaphysical effects will often be associated with other traits or keywords that further define their interactions in the game.</p>
                            <p class="copy mb-3">Ex. A Paladins sword that bypasses the armor of the Demonic or an enchantment that only harms the Undead.</p>
                            
                            <h6 class=""><strong>Death</strong></h6>
                            <p class="copy mb-3">Death damage represents a loss of vitality or the sudden rotting of flesh that would be otherwise considered scientifically impossible. Attacks or effects with the death attribute will often describe debilitating secondary effects they inflict beyond the HP damage they cause; successful (Physical) checks can often resist these effects. Death damage or attacks can not typically harm those with the Mechanical trait.</p>
                            
                            <h6 class=""><strong>Psychic</strong></h6>
                            <p class="copy mb-3">Psychic damage represents harm inflicted directly upon one's brain, ego, consciousness, or other mental capacity. Psychic attacks or damage will typically bypass all defenses and will inflict various Condition Traits with concussed being the most common. Successful (mental) or (social) checks can often resist the effects of Psychic attacks/damage.</p>
                            
                            <h4 class="mt-4 mb-2">Other Common Elemental Effects</h4>
                            
                            <h6 class=""><strong>Radiation</strong></h6>
                            <p class="copy mb-3">Radiation is an element in nature that can cause the Irradiated(1) Condition Trait. Levels of radiation exposure can cause different and increasingly severe effects, and certain effects or resistances in the game will make a user resistant or immune to radiation. Much like in real life, radiation can spread, and a character or object with a high level of the Irradiated trait can, in turn, inflict that trait on others.</p>
                            
                            <h6 class=""><strong>Acidic/Corrosive</strong></h6>
                            <p class="copy mb-3">Acidic or Corrosive effects will often cause damage to items or equipment in addition to any character wielding them. This will most commonly be represented by the Corroded(1) ranked trait to be inflicted on an object that has been affected.</p>
                        </div>

                        <div class="game-mechanics flex-6">

                            
                        <h3 class="mb-3">Items</h3>
                            
                            <h4 class=""><strong>What is an Item?</strong></h4>
                            <p class="copy my-3">An item can be any physical object that a character can be in possession of. This can range from weapons to armor to currency to pets. Some items have considerable complexities of their own, such as a ship or a warhorse. Other items are as simple as a gold coin. All fall under the category of "items." Within the category of "items," there are several subcategories explained below. Items possess their own descriptions, functions, weight, and size and may confer abilities or be used by a character in a unique way. Items will typically be described somewhere external to a character's character sheet, but in cases where the item is truly unique (such as a fancy rock the character found), then the DM can describe the physical characteristics of the item in question. Items are recorded in the "items" section of the character sheet. There is no limit to the number of items a character can possess, though there are reasonable limits on what they can carry. A character may possess a house on their character sheet, but they aren't taking it around with them.</p>
                            
                            <p class="copy">The various types of equipment and unique attributes (if any) are described below.</p>
                            
                            <h4 class="mt-4"><strong>Equipment</strong></h4>
                            <p class="copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            
                            <h4 class="mt-4"><strong>Weapons</strong></h4>
                            <p class="copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            
                            <h4 class="mt-4"><strong>Clothing</strong></h4>
                            <p class="copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            
                            <h4 class="mt-4"><strong>Vehicles</strong></h4>
                            <p class="copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            
                            <h4 class="mt-4"><strong>Pets & Animals</strong></h4>
                            <p class="copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            
                            <h4 class="mt-4"><strong>Misc</strong></h4>
                            <p class="copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        
                        </div>

                    </div>
                    <div class="flex-3 d-none d-xl-inline-flex"></div>
                </div>
                    </div>
                    <div class="separator"></div>
                </div>


            </div>
        </div>

		<!-- this loads the page footer for both mobile and desktop -->
		<?php include 'php/footer.php'; ?>

		<!-- this loads the page footer for both mobile and desktop -->
		<?php include 'php/about.php'; ?>

		<!-- this loads the javascript plugins for each page -->
		<?php include 'php/javascript-loads.php'; ?>
        
    </body>
</html> 