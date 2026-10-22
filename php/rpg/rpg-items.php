<div class="breakout shadow-diffuse black-bg white-text">
<?php $rpgLinksTone = 'white'; include 'php/rpg/rpg-links.php'; ?>
<div class="separator"></div>
<div class="container">
	<div class="d-flex flex-fill flex-wrap flex-xs-nowrap mb-4">
		<div class="flex-2 d-none d-xl-inline-flex"></div>
		<div class="flex-14">
			<h3 class="sub-title mb-3" id="items">Items, Armor, and Effects</h3>
			<div class="copy stinger white mb-3">placeholder subtitle</div>
		</div>
		<div class="flex-2 d-none d-xl-inline-flex"></div>
	</div>

	<div class="d-flex flex-wrap flex-xs-nowrap">
		<div class="flex-2 d-none d-xl-inline-flex"></div>
		<div class="flex-14">
			<div class="d-flex flex-wrap flex-xs-nowrap split-cols">
				<div class="flex-7 content-stack">
					<div class="content-stack content-stack-sm">
						<h3>Armor and Effects</h3>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Resisting Damage Types</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">Resistances are used to reduce incoming damage by a specified amount. Resistances begin at zero. Incoming damage will always have a type, and some forms of attacks will do multiple types of damage at once. A fiery explosion will do both blunt damage through the explosion itself, as well as heat damage through the heat of the fireball. Resistances are predominantly conveyed through equipment, but some Traits may provide additional resistances. A character's resistances are cumulative; if a character has both leather armor and scaly skin, their resistance to slashing will be higher than if they had either alone.<br><br>
								Some resistances will have coverage areas specified, such as a helmet providing significant protection, but only on the head. How and where a character is hit is covered in the section on combat. Resistances can, in rare cases, be a negative value. In these cases they add to the damage inflicted a value equal to that negative number.</p>
						</div>
					</div>
					<div class="content-stack content-stack-sm">
						<h3>Damage Types</h3>
						<div class="content-stack content-stack-sm">
							<div class="line-container">
								<h5><strong>Physical</strong></h5>
								<div class="line"></div>
							</div>
							<div class="content-stack content-stack-xxs">
								<h6 class="damage-type"><svg class="damage-icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M215.97 27.813c-2.218.04-4.35.177-6.407.375l-.532.062c-2.774.266-5.796 1.01-9.124 1.844-4.418 1.11-8.096 2.607-11.125 4.406l77.782 59.313 7.375 5.656-5.593 7.405-13.72 18.156 67.595 51.626 14.217-18.812 9.47-12.53 6.5 14.342 19.656 43.47 60.593-80.095-47.187-7.124-15.533-2.312 9.47-12.563 14.28-18.843-67.593-51.624L310.78 50.78l-5.03 6.657-7.188-4.25c-28.635-16.917-58.02-25.157-80.343-25.374a76.706 76.706 0 0 0-2.25 0zM453 127.124l-71.47 94.438 34.564 26.187c44.24-20.22 64.01-52.594 71.312-94.625l-34.406-26zm-193.688 25.03c-27.17 33.09-55.308 64.706-82.812 96.22l47.406 39.875c23.11-35.343 46.336-71.61 71.938-108.22l-36.53-27.874zM164.25 262.47c-11.355 13.115-22.564 26.254-33.5 39.5l48.375 52.717c11.707-16.6 23.107-33.515 34.438-50.687l-49.313-41.53zm-45.438 54.124a1111.646 1111.646 0 0 0-23.093 29.72l33.468 73.842c13.586-16.22 26.434-32.893 38.843-49.937l-49.218-53.626zm-35.75 47.03c-12.108 16.978-23.57 34.335-34.124 52.282L98.53 454.47a688.442 688.442 0 0 0 17.22-18.72l-32.688-72.125zm-43.437 68.688a546.43 546.43 0 0 0-14.75 29l37.375 28.313a611.184 611.184 0 0 0 23.125-21.72l-45.75-35.592z"/></svg><strong>Blunt</strong></h6>
								<p class="copy">Blunt attacks are those that impact evenly across a wide area, such as a strike from a club or the wide blast front of an explosion. Any sudden change in pressure, such as being thrown out an airlock, would also be tracked as blunt damage. Blunt attacks can often cause the Concussed Temporary Condition Trait.</p>
							</div>
							<div class="content-stack content-stack-xxs">
								<h6 class="damage-type"><svg class="damage-icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M275.03 20c35.223 49.563 53.59 113.64 55.69 173.47C315.154 143 289.092 88.423 250.81 48.75c40.294 79.527 51.15 172.312 37.938 256.094-12.287-75.777-40.564-159.524-92.375-227.156 29.6 70.937 36.64 149.785 24.813 221.843-8.745-51.804-25.41-107.4-52.594-158.81 13.023 54.315 12.854 107.64 3.437 159.28l21.657 6.813 15 4.718-11.28 10.908c-10.68 10.332-19.868 21.905-27.345 34.343 93.614 35.486 232.952 64.53 298.032 41.376-41.02 56.466-210.332 13.822-309.313-18.687-1.514 3.775-2.918 7.594-4.124 11.467a152.536 152.536 0 0 0-6.062 29.657l176.47 66.375c98.5 31.095 150.5-24.62 158.655-81.72C505.253 254.472 485.016 105.66 426.06 20h-22.187c40.092 65.52 66.67 154.216 60.47 255.344-8.154-79.833-42.8-157.214-98.44-219.5 38.676 85.094 56.566 185.746 34.376 288.625.057-118.816-33.1-225.865-105.092-324.47H275.03zm-110.186 1.594c41.255 29.176 74.328 74.093 97.5 120.656-7.702-46.15-21.3-86.79-44-120.656h-53.5zm176.375 0c28.882 15.143 52.096 36.614 71.28 66.78-7.14-27.79-17.217-49.85-31.438-66.78H341.22zM123.686 304.406a179.344 179.344 0 0 1-4.062 64L18.812 336.344V366l91.938 29.094a178.602 178.602 0 0 1-30.313 48.28l50.094 15.75c-3.038-24.898-1.136-49.885 6.282-73.718 7.446-23.92 20.223-46.108 37.032-65.22l-50.156-15.78z"/></svg><strong>Slashing</strong></h6>
								<p class="copy">Slashing attacks are those that cut across a wide area, such as a swing from a sword or a slash from animal claws. Slashing attacks can often cause the Severe Bleeding Temporary Condition Trait.</p>
							</div>
							<div class="content-stack content-stack-xxs">
								<h6 class="damage-type"><svg class="damage-icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M242.5 21.5c-25.192 3.245-47.28 32.016-47.28 68.78 0 20.28 7.038 38.25 17.5 50.75l10.25 12.25-15.69 2.94c-6.058 1.128-11.42 3.163-16.25 6.093l50.907 29.343.22.125c10.092 5.547 17.387 12.847 21.687 20.72 4.332 7.932 5.865 16.78 2.562 24.75-3.302 7.97-12.133 13.29-21.687 13.344-9.457.054-20.02-3.703-32.345-11.5-.13-.082-.245-.136-.375-.22l-52.313-30.06a192.847 192.847 0 0 0-4.156 14.56c-8.238 33.626-9.925 74.615-10.155 110.407H189.5l.625 8.626 11.28 149.78 96.69.002 9.935-149.69.564-8.72h42c-.013-36.18-.378-77.737-7.844-111.624-4.05-18.384-10.197-34.295-18.813-45.75-8.615-11.454-19.257-18.706-34.593-21.062l-16-2.438L283.5 140.25c10.008-12.437 16.72-30.183 16.72-49.97-.002-39.2-24.78-68.718-52.5-68.718-2.913 0-4.762-.12-5.22-.062zM20.812 85.78v21.626l200.875 115.5.188.094.188.125c10.573 6.74 18.416 8.805 22.53 8.78 4.115-.022 4.113-.724 4.563-1.81.45-1.09.63-4.324-1.72-8.626-2.348-4.304-7.01-9.363-14.436-13.407l-.094-.032-.094-.06-212-122.19zm396.97 187.626-15.626 28.22-33.656-19.063c.355 8.144.576 16.234.688 24.187l22.906 13.03-15.47 27.94 114.97 15.124-73.813-89.438z"/></svg><strong>Piercing</strong></h6>
								<p class="copy">Piercing attacks are those that impact sharply in a small area and pierce deep, such as a thrust from a spear or the impact of a bullet. Piercing attacks can often cause the Severe Bleeding Temporary Condition Trait.</p>
							</div>
						</div>
						<div class="content-stack content-stack-sm">
							<div class="line-container">
								<h5><strong>Elemental</strong></h5>
								<div class="line"></div>
							</div>
							<div class="content-stack content-stack-xxs">
								<h6 class="damage-type"><svg class="damage-icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M162.22 21.312c-183.876 106.68 51.994 227.35-10.19 332.47C116.95 413.083 38.11 325.45 43.75 227-6.035 353.376 30.21 443.745 95.22 492.75c1.386.34 17.577.498 41.186.562-28.478-16.9-32.06-75.355 32.813-103.25l15.78-7L182.062 400c-1.356 8.34-.318 13.95 1.188 16.937 1.507 2.987 3.106 3.544 5.844 4.094 5.475 1.1 16.963-2.395 26.28-14.624 18.636-24.457 29.117-80.228-26.874-167l-4.094-6.437-13.906-19.25 23.25 9.905 5.25 1.75c80.85 25.498 135.3 58.46 174.625 112.72 21.544-22.906 38.7-56.835 43.812-91.69l3.5-27.468 13.438 23.97c25.525 45.802 30.267 104.912 11.094 156.5-14.23 38.28-42.036 72.34-84 93.5 13.623-.01 24.05.032 25.25.124 154.76-34.77 139.345-244.952-14.19-394.093.012.726 0 1.46 0 2.188 78.964 185.87-136.465 189.104-119.25 11.47-41.686 100.463-132.86-2.147-91.06-91.283zM269.093 332.25c13.51 15.806 22.35 33.086 22.78 50.812.587 24.03-9.293 47.12-24.53 66.563-14.832 18.926-34.837 34.62-56.625 43.656 33.127-.065 64.926-.16 95.217-.25l-.062-.186c30.95-18.584 47.31-38.83 53.75-57.813 6.44-18.982 3.25-37.246-5.844-53.718-15.44-27.97-49.705-47.71-84.686-49.062z"/></svg><strong>Heat</strong></h6>
								<p class="copy">Heat represents the damage caused by very high thermal energy/temps being applied to an area, be it from fire, a laser, or any other source. Fire is a common form of elemental damage that can be encountered easily both in and out of combat. Heat damage can often cause the Burning Temporary Condition Trait.</p>
							</div>
							<div class="content-stack content-stack-xxs">
								<h6 class="damage-type"><svg class="damage-icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M238.406 26.844c-9.653.12-18.926 2.69-30.437 7.062l-157.282 57c-20.984 7.65-21.587 11.834-22.344 33.28L20.937 358.22c-1.207 27.514-.654 33.187 23.25 43.56l185.783 81.41c19.34 8.29 31.906 7.655 45.186 3.218l181.938-56.53c21.95-7.295 25.04-9.627 25.875-36.845l7.686-250.155c.662-17.37-5.667-24.695-18.78-29.625L271.062 34.375c-12.977-5.344-23.003-7.653-32.657-7.53zm.813 24.875c23.637-.053 45.564 8.434 87.874 24.874 95.545 37.123 131.71 53.8 69.687 77.937-74.002 28.802-128.175 45.115-172.28 25.814L113.47 131.75c-34.57-15.127-44.69-27.46 17.843-50.094 55.64-20.14 82.742-29.882 107.906-29.937zm44.718 43.75c-38.284.402-55.285 21.205-56.813 38.936-.873 10.132 2.95 19.6 12.406 26.25 9.456 6.65 25.355 10.56 48.97 5.938 35.817-7.01 61.536-15.056 77.5-22.844 7.982-3.894 13.464-7.737 16.5-10.844 3.036-3.107 3.453-4.942 3.438-6-.016-1.057-.44-2.675-3.313-5.406-2.873-2.73-8.03-6.04-15.22-9.156-14.378-6.233-36.757-11.877-65.717-15.72-6.355-.842-12.28-1.213-17.75-1.155zM59.25 134c10.372-.29 29.217 7.2 63.906 22.656 140.925 62.786 140.52 65.876 130.97 200.656-7.783 109.81-8.797 109.85-128.47 59.282-73.15-30.91-86.806-40.853-85.187-88.97l5.468-162.937c.674-20.034 1.557-30.358 13.312-30.687zm381.938 30.906c29.172-.384 29.1 28.075 26.75 105.25-4.118 135.132-9.05 140.184-120.375 173.72-70.42 21.21-81.49 25.614-78.97-12.032l11-164.156c3.217-48.034 7.588-51.508 94.813-83.907 31.323-11.633 52.534-18.686 66.78-18.874zm-20.438 40.688c-.332-.002-.674.015-1 .03-5.22.263-10.226 2.77-14.188 8.407-3.96 5.638-6.81 14.71-5.687 27.907 1.448 17.033-4.507 38.11-15.156 56.938-10.65 18.827-26.502 35.91-47.814 38.813-29.127 3.968-42.41 23.58-43.5 42.062-.545 9.24 2.108 18.03 7.688 24.594s14.088 11.335 27.187 12.03c41.146 2.185 71.336-10.766 91.595-39.155 20.26-28.39 30.396-73.76 25.875-136.595-1.876-26.076-14.708-34.977-25-35.03zm-246.25 8.844c-.644 0-1.218.063-1.72.187-2.003.494-3.685 1.53-5.655 4.813-1.913 3.186-3.688 8.618-4.406 16.343l-.064.657c-1.388 16.732-8.098 28.602-17.844 35.063-9.745 6.46-20.794 7.808-31.125 9.094-10.33 1.286-20.177 2.39-28.156 5.75-7.977 3.36-14.36 8.38-19.468 19.78-7.2 16.076-7.143 28.027-3.124 38.563 4.018 10.537 12.688 20.106 24.687 28.75 23.998 17.29 60.27 29.956 88.906 41.844 11.386 4.727 20.496 6.484 27.282 6.126 6.787-.358 11.278-2.423 15.375-6.562 8.195-8.28 14.057-27.692 15-57.344 2.024-63.623-18.84-110.284-38.656-130.875-8.668-9.008-16.52-12.193-21.03-12.188zm184.22 6.812c-.95-.003-1.927.035-2.97.094-35.464 1.99-48.477 12.867-52.5 24.062-4.023 11.196.826 27.07 10.844 39.78 11.488 14.58 20.59 15.736 30.437 12.283 9.848-3.455 20.542-14.108 27.376-26.908s9.512-27.397 7.188-36.28c-1.163-4.443-3.144-7.422-6.47-9.626-2.908-1.928-7.274-3.388-13.905-3.406z"/></svg><strong>Cold</strong></h6>
								<p class="copy">Cold represents the damage caused by thermal energy being removed from an object or character, be it from contact with ice, exposure to the elements, or any other source. Cold damage will most commonly be a result of exposure to extremely cold climates, and the ways this damage manifests itself will often be outside of combat. Cold damage can sometimes cause the Frozen Temporary Condition Trait.</p>
							</div>
							<div class="content-stack content-stack-xxs">
								<h6 class="damage-type"><svg class="damage-icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M376 211H256V16L136 301h120v195z"/></svg><strong>Electrical</strong></h6>
								<p class="copy">Electrical represents the application of electricity to a system that isn't built to handle it, be it from lightning, a downed power line, or an electric eel. The threat of electric shock is far more common in a modern electrically powered society, but it's a classic element of magic. Electrical attacks can often cause the Concussed Temporary Condition Trait.</p>
							</div>
							<div class="content-stack content-stack-xxs">
								<h6 class="damage-type"><svg class="damage-icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M133.844 19.97c-28.18.03-55.19 11.19-77.875 33.624-26.88 26.58-37.526 56.483-36.095 85.875 1.43 29.39 15.237 58.516 39 82.28 9.592 9.593 44.044 33.04 74.78 52.563 1.14.723 2.104 1.293 3.22 2l44.344-44.344c-22.65-18.013-45.176-36.208-53.72-44.75h-.03c-24.88-24.882-22.98-56.233-5.626-73.032 17.354-16.8 48.748-18.29 73.25 5.937 8.61 8.51 26.702 30.837 44.656 53.313l38.438-38.407c-.71-1.12-1.305-2.073-2.032-3.218-19.468-30.66-42.827-64.955-52.47-74.656C195.738 33.16 165.59 20.706 136.564 20c-.91-.022-1.81-.032-2.718-.03zm190.312 77.25-34.72 20.624c.836 1.31 1.673 2.633 2.502 3.937 19.683 31 36.406 59.032 36.406 59.032l3.75 6.25-5.156 5.157-46.313 46.31-7.47 7.47-6.5-8.344s-12.84-16.436-28.5-36.187l-28.843 28.843a9056.369 9056.369 0 0 0 36.22 28.437l8.374 6.47-7.5 7.5-52.344 52.374-5.156 5.156-6.25-3.75s-24.577-14.675-53.125-32.688l-19.78 48.22 36.375-14.344 15.156 81.718 28.126-55.28 60.406 63.25-15.718-86.126 51.875 6.28 2.624 1.345 4.03 47.344 77.595 11.092-12.095 52.375L403.47 492h86.624v-81.594l-50.375-29.22 10.092-41.31-96.718-3.032 14.094-44.313-42.157-29.967 2.345-21.094 52.344 17.06-31.126-69.75 42.72-22.53-65.44-20.063-1.718-48.968zm-35.78 54.03-36.907 36.906c11.742 14.79 19.468 24.643 23.405 29.688l33.656-33.656a2417.118 2417.118 0 0 0-20.155-32.938zm-92.407 92.406-42.876 42.875a2446.831 2446.831 0 0 0 32.937 20.158l39.72-39.75c-5.06-3.934-14.962-11.59-29.78-23.282z"/></svg><strong>EMP</strong></h6>
								<p class="copy">EMP or Electromagnetic Pulse is a catchall term for electromagnetic damage that is specifically harmful to machines or computer systems that rely on electricity or magnetic attributes to function. EMP damage's most common interaction will be to disable or destroy mechanical or electronic systems, either intentionally or accidentally. EMPs can be caused by natural or manmade phenomena, from solar flares to nuclear explosions. EMP damage can only harm characters or objects with the Mechanical Trait.</p>
							</div>
						</div>
						<div class="content-stack content-stack-sm">
							<div class="line-container">
								<h5><strong>Supernatural</strong></h5>
								<div class="line"></div>
							</div>
							<div class="content-stack content-stack-xxs">
								<h6 class="damage-type"><svg class="damage-icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M486 203.652H310.111L256 37.113l-54.111 166.539H26l142.22 103.623-54.462 167.612L256 371.24l142.242 103.646-54.473-167.612zm-85.995 28.008-65.335 47.596-15.46-47.596h80.795zM256 127.708l24.658 75.91H231.33zM111.995 231.66h80.795l-15.45 47.596zm55.097 169.713 24.932-76.743 40.194 29.29zm34.041-104.762 21.1-64.951h67.524l21.099 64.95-54.867 39.977zm143.731 104.762-65.082-47.454 40.194-29.29zm-37.983-264.359-10.424-32.092a183.269 183.269 0 0 1 114.322 81.21H376.43a155.293 155.293 0 0 0-69.55-49.118zM129 371.328l-10.413 32.049a182.425 182.425 0 0 1-43.918-142.581l26.684 19.435v2.847A153.804 153.804 0 0 0 129 371.284zm177.104 58.108 26.64 19.413a182.447 182.447 0 0 1-153.51 0l26.64-19.413a154.79 154.79 0 0 0 100.23 0zM135.569 186.133h-34.348a183.269 183.269 0 0 1 114.322-81.21l-10.424 32.091a155.293 155.293 0 0 0-69.55 49.119zm303.12 96.955a181.922 181.922 0 0 1-45.276 120.245L383 371.285a153.804 153.804 0 0 0 27.68-88.197v-2.846l26.683-19.446a183.685 183.685 0 0 1 1.325 22.292z"/></svg><strong>Metaphysical</strong></h6>
								<p class="copy">Metaphysical damage represents the damage inflicted by any higher plane source and does not interact with normal matter in a scientifically understood manner. Metaphysical attacks or effects will contain a description for if and when they do extra damage or possess other effects. Metaphysical effects will often be associated with other traits or keywords that further define their interactions in the game.</p>
								<p class="copy">Ex. A paladin's sword that bypasses the armor of the Demonic or an enchantment that only harms the Undead.</p>
							</div>
							<div class="content-stack content-stack-xxs">
								<h6 class="damage-type"><svg class="damage-icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M296.625 25.406c-63.794.388-135.81 14.683-206.03 32.844-3.472 34.08 2.226 68.906 14.03 104.25C181.175 75.936 393.65 44.825 486.72 128 456.02 50.466 384.046 24.874 296.624 25.406zM65.655 61.438 27.906 71c5.643 78.022 28.546 132.393 60.44 174.47-16.54 10.348-40.693 19.673-68.782 26.843 5.664 6.597 14.25 16.18 30.53 18.53 24.846-4.33 39.912-14.982 53.75-26.593 76.24 85.145 190.22 118.955 253.126 224.22l49.436-.126C290.996 275.316 81.01 364.804 65.656 61.438z"/></svg><strong>Death</strong></h6>
								<p class="copy">Death damage represents a loss of vitality or the sudden rotting of flesh that would be otherwise considered scientifically impossible. Attacks or effects with the death attribute will often describe debilitating secondary effects they inflict beyond the HP damage they cause; successful (Physical) checks can often resist these effects. Death damage or attacks cannot typically harm those with the Mechanical Trait.</p>
							</div>
							<div class="content-stack content-stack-xxs">
								<h6 class="damage-type"><svg class="damage-icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M65.125 18.344C47.11 49.844 36.72 86.262 36.72 125.124c0 80.293 43.973 150.497 109.124 187.75.403-6.904.92-13.833 1.625-20.75-55.33-34.965-92.064-96.676-92.064-167 0-39.426 11.63-75.964 31.563-106.78H65.124zm69.03 0c-25.61 28.273-41.374 65.635-41.374 106.78 0 51.08 24.052 96.656 61.44 125.97l.06-.25c1.612-6.61 3.473-13.008 5.69-19.125-29.73-25.896-48.5-64.026-48.5-106.595 0-42.848 19.254-80.837 49.436-106.78h-26.75zm210.532 0c30.125 25.95 49.438 64.003 49.438 106.78 0 41.152-17.546 78.157-45.563 103.97 2.26 6.282 4.116 12.876 5.657 19.687 35.748-29.366 58.592-73.883 58.592-123.655 0-41.123-15.81-78.5-41.406-106.78h-26.72zm73.407 0c20.06 30.867 32.094 67.387 32.094 106.78 0 69.457-35.82 130.505-90 165.69.545 7.037.933 14.107 1.187 21.123 64.267-37.483 107.53-107.18 107.53-186.812 0-38.925-10.745-75.328-28.874-106.78h-21.936zm-165.313 2.28c-57.625 0-104.53 46.906-104.53 104.532 0 28.606 11.56 54.573 30.25 73.47 4.13-4.712 8.84-8.817 14.094-12.19-15.844-15.56-25.656-37.237-25.656-61.28 0-47.527 38.316-85.844 85.843-85.844 47.528 0 85.845 38.317 85.845 85.844 0 23.16-9.108 44.114-23.938 59.53 5.488 3.14 10.394 7.033 14.688 11.533 17.327-18.666 27.938-43.657 27.938-71.064 0-57.626-46.905-104.53-104.532-104.53zm-4.186 55.564c-21.622 2.8-40.97 27.91-40.97 60.28 0 17.846 6.173 33.653 15.282 44.595l10.188 12.218-15.656 2.94c-11.884 2.226-20.62 8.512-28.032 18.655-7.41 10.143-13.023 24.216-16.97 40.406-7.188 29.5-8.736 65.498-8.967 97.126h38.999l.655 8.656 9.906 132.5h83.69l8.75-132.437.592-8.72h37.125c-.02-32-.39-68.49-6.906-98.217-3.57-16.297-8.992-30.34-16.5-40.375-7.505-10.035-16.654-16.288-29.967-18.344L273.875 193l10.094-12.625c8.713-10.89 14.592-26.495 14.592-43.906 0-34.515-21.658-60.22-45.468-60.22-2.672 0-4.275-.092-4.5-.063z"/></svg><strong>Psychic</strong></h6>
								<p class="copy">Psychic damage represents harm inflicted directly upon one's brain, ego, consciousness, or other mental capacity. Psychic attacks or damage will typically bypass all defenses and will inflict various Condition Traits, with Concussed being the most common. Successful (Mental) or (Social) checks can often resist the effects of Psychic attacks/damage.</p>
							</div>
						</div>
						<div class="content-stack content-stack-sm">
							<div class="line-container">
								<h5><strong>Other Common Elemental Effects</strong></h5>
								<div class="line"></div>
							</div>
							<div class="content-stack content-stack-xxs">
								<h6 class="damage-type"><svg class="damage-icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M253.78 17.188c-130.728 0-236.905 106.177-236.905 236.906C16.875 384.824 123.052 491 253.78 491c130.73 0 236.907-106.18 236.907-236.906 0-130.73-106.177-236.906-236.906-236.906zm0 18.687c120.63 0 218.22 97.59 218.22 218.22 0 120.626-97.59 218.218-218.22 218.218-120.628 0-218.218-97.59-218.218-218.22s97.59-218.218 218.22-218.218zm101.19 46.313-76.41 132.875c15.916 9.635 25.177 26.33 26.125 43.78h148.407c1.644-70.01-33.49-138.867-98.125-176.656zm-205.126 2.468c-27.1 16.725-50.68 40.147-67.72 69.656-19.01 32.928-26.926 69.12-26 104.532H196a54.04 54.04 0 0 1 7.188-24.438c5.21-9.024 12.64-16 21.218-20.625L149.844 84.657zm100.594 141.156a36.723 36.723 0 0 0-2.594.094c-11.446.793-22.288 7.084-28.5 17.844-9.94 17.216-4.09 38.967 13.125 48.906 17.213 9.94 38.935 4.12 48.874-13.094 9.94-17.215 4.12-38.967-13.094-48.906-5.648-3.26-11.768-4.824-17.813-4.844zm28.218 82.375c-16.127 9.75-36.864 10.846-54.406 1.25l-68.03 117.22c29.454 16.785 61.044 25.177 92.75 26 34.567.898 68.72-7.786 99.124-24.032l-69.438-120.438z"/></svg><strong>Radiation</strong></h6>
								<p class="copy">Radiation is an element in nature that can cause the Irradiated(1) Condition Trait. Levels of radiation exposure can cause different and increasingly severe effects, and certain effects or resistances in the game will make a user resistant or immune to radiation. Much like in real life, radiation can spread, and a character or object with a high level of the Irradiated trait can, in turn, inflict that trait on others.</p>
							</div>
							<div class="content-stack content-stack-xxs">
								<h6 class="damage-type"><svg class="damage-icon" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M433.814 68.664c-2.74.05-5.495.423-8.242 1.152-8.47 2.25-15.3 7.512-20.44 14.49C292.905 120.865 186.494 154.58 75.276 190.4c-39.714 12.79-64.6 51.163-53.006 86.784 11.597 35.62 54.342 52.277 94.035 39.277l-.002.002c109.41-35.827 214.424-69.036 325.12-104.656.56.212 1.13.39 1.694.58-2.62 2.935-4.226 6.796-4.226 11.04 0 9.164 7.43 16.593 16.594 16.593 9.165 0 16.596-7.43 16.596-16.593 0-4.32-1.664-8.24-4.367-11.192 12.75-4.865 21.353-16.866 25.535-30.898 4.547-15.257 4.504-33.654-.584-52.48-5.088-18.828-14.327-34.77-25.94-45.712-8.712-8.206-19.263-13.79-30.175-14.43-.91-.052-1.822-.07-2.736-.054zm.497 18.68a17.2 17.2 0 0 1 1.377.035c5.567.358 11.818 3.34 18.22 9.37 8.535 8.04 16.44 21.165 20.716 36.986 3.622 13.4 4 26.397 2.012 36.852h-52.783c-3.517-6.207-6.512-13.352-8.622-21.158-4.276-15.822-4.046-31.094-.716-42.266 3.33-11.172 9.122-17.497 15.855-19.285a16.148 16.148 0 0 1 3.94-.536zm-38.414 17.043c-3.815 14.734-3.516 32.133 1.29 49.92a114.327 114.327 0 0 0 5.728 16.26h-151.22c-64.405 20.742-125.856 40.507-163.35 52.59-23.24 7.486-35.353 27.407-30.406 42.593 4.946 15.188 26.582 24.333 49.75 16.75 66.89-21.89 199.01-64.39 302.822-97.803 3.76 5.807 7.998 10.967 12.62 15.323.066.06.135.118.2.18-104.876 33.753-241.66 77.74-309.83 100.05-30.827 10.09-64.424-1.334-73.344-28.72-8.92-27.385 11.603-56.22 42.438-66.155 68.055-21.93 208.2-66.996 313.302-100.988zm59.58 180.205c-16.948 63.255-40.507 54.472-40.507 91.5 0 22.36 18.146 40.508 40.507 40.508 22.36 0 40.507-18.147 40.507-40.508 0-39.97-23.256-27.12-40.507-91.5z"/></svg><strong>Acidic/Corrosive</strong></h6>
								<p class="copy">Acidic or Corrosive effects will often cause damage to items or equipment in addition to any character wielding them. This will most commonly be represented by the Corroded(1) ranked trait to be inflicted on an object that has been affected.</p>
							</div>
						</div>
					</div>
				</div>
				<div class="flex-6 content-stack">
					<div class="content-stack content-stack-sm">
						<h3>Items</h3>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>What is an Item?</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">An item can be any physical object that a character can be in possession of. This can range from weapons to armor to currency to pets. Some items have considerable complexities of their own, such as a ship or a warhorse. Other items are as simple as a gold coin. All fall under the category of "items." Within the category of "items," there are several subcategories explained below. Items possess their own descriptions, functions, weight, and size and may confer abilities or be used by a character in a unique way. Items will typically be described somewhere external to a character's character sheet, but in cases where the item is truly unique (such as a fancy rock the character found), then the GM can describe the physical characteristics of the item in question. Items are recorded in the "items" section of the character sheet. There is no limit to the number of items a character can possess, though there are reasonable limits on what they can carry. A character may possess a house on their character sheet, but they aren't taking it around with them.</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Exclusivity</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Some items have exclusive functionalities that cannot be duplicated, whether because you can’t easily wear two pairs of shoes, only have one set of eyes to be cyberized, or a magic amulet gets… jealous. These items will typically label themselves as exclusive and will list one or more items or categories of item. If a character has an item equipped, it cannot then have another equipped that shares a type with the listed exclusion. It is at the GM's discretion whether or not an item is exclusive with another, and exceptions can sometimes occur.
								<br><br>
								Ex. (exclusive: Footwear)
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Uses</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Many items have a limited number of uses before becoming defunct or literally ceasing to exist. If an item has a limited number of uses, the number and nature of that limitation will be in its description.
								<br><br>
								Ex. (candy bar: uses 1: when consumed)
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Damage, Condition, and Destruction</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Most items can be damaged or destroyed. When an item has various stages of degradation that can occur, it may be in its description, though often it will be at the GM's discretion, and additional descriptions may be added to an item relating to its condition. Larger or more complex and important items may have their own hit points or resistances. If no such values are present, then the GM can assign such values, or an item can simply be assumed to either be pristine or broken with no in-between. A destroyed item does not vanish except when circumstances say otherwise. A destroyed glass could still exist as glass shards waiting to be stepped on. The tracking or importance of a destroyed item is up to the player or GM.
								<br><br>
								Most items should not have their condition tracked unless it is important or relevant to the game (ex. A shield needn’t have its hit points tracked unless another character is explicitly trying to chip or destroy it with a weapon capable of doing so).
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>The various types of equipment and unique attributes (if any) are described below.</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								<i>It should be noted that while these categories are used in-game to sort and describe items, these categories are not absolute and many items will have uses or effects that could place them into multiple categories.</i>
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Wearables</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								This category comprises any passively worn object or garment that is used without intention or effort. Hats, rings, and chainmail would fall under this category, as would more complex items like powered armor or even a magical force field. What separates wearables from equipment is that wearables are passive; they convey their benefits or effects without the character having to take action.
								<br><br>
								Mundane or generic wearable items like everyday clothing do not necessarily need to be recorded on a character sheet and can be assumed to be possessed unless otherwise stated.
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Equipment</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								This catchall category comprises a wide variety of concepts. But the unifying feature is that equipment is useful and will typically have some sort of effect or feature in its description, often granting some sort of ability or benefit to a character when utilized. Watches, grappling hooks, jet packs, cell phones, or magic wands could all be considered equipment. Vehicles, weapons, wearables, and other categories of item could be considered equipment, and when they have equipment-like functionalities or natures, they will often be listed as equipment in addition to their other categories.
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Weapons</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Weapons are a special form of equipment meant to cause damage or harm. Not every item capable of doing damage is a weapon, but most weapons exist specifically for that purpose. Weapons will convey abilities related to their use but often have a related trait or skill requirement to be used effectively. Anyone can pull a trigger, but hitting a target is a different matter. Weapons are often relatively complex forms of equipment and will need care, maintenance, or correct setup to be used correctly. Sometimes a weapon will need to be paired with another form of equipment, such as a bow requiring an arrow, but just as often they will not. Most weapons will be considered exclusive, though traits or GM discretion may allow for multiple weapons to be used simultaneously.
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Structures</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								"Structures" is a catchall term for any item that exists, is unmoving, and can be occupied. Structures will typically be large and solid constructs built to be occupied or to accomplish some sort of task, but just like buildings in real life, they can have innumerable forms and purposes. Structures are not equipped; instead, characters will occupy a structure. The maximum total occupancy of a structure will always be defined in its description and will often feature not just total characters but other values such as the weight or size of what it can accommodate. In situations where these numbers are unset or so large that tracking them isn’t useful, a “-” will be listed, and these values are at the GM's discretion.
								<br><br>
								Structures are large and complex items and will often have hit points, resistances, and levels of destruction. When a character is occupying a structure, they are typically considered to be inside of and protected by it (presuming the threat isn’t inside the structure with them or they aren’t exposed in some other way).
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Vehicles</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Vehicles are a special form of item that is used to move or protect characters. Like weapons, vehicles will often have a related skill requirement for their use. Unlike weapons, vehicles are not equipped; rather, characters (or other things) will occupy a vehicle like they do structures. Vehicles will always list a maximum number or nature of occupants (though in some instances that value will be listed as a “-”, similar to structures). In these instances the maximum occupancy is at the GM's discretion.
								<br><br>
								A vehicle is typically ridden/piloted/driven by one or more characters, though sometimes the vehicles will either control themselves or be at the mercy of other forces (ex. A boat adrift in the tide or a runaway train). Vehicles are a relatively wide category of item that can encompass animals or structures and will typically have a list of their properties in their description.
								<br><br>
								Vehicles often require routine maintenance and upkeep, though if that is important or tracked within a game is at the GM's discretion. Similarly, vehicles will often have hit points or conditions listed, though it is at the GM's discretion if they want to add additional complexities to the maintenance or handling of a vehicle. (Ex.: It is at the GM's discretion if a car's gas tank explodes or if the players had to fill that gas tank or even pay attention to the concept of fuel.)
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Animals, Robots, and Animal-like NPCs</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Animals are, in many ways, like characters. They can typically move, have hit points and defensive values, can equip and use items, and often can think and act independently. The most important distinction between an animal and a character is that the animal doesn’t warrant the creation of a character sheet and will typically have its traits listed in a compressed fashion. An animal will usually have its characteristics be derived from a baseline template that is then modified via traits.
								<br><br>
								Animals and animal-like NPCs have behaviors and will take actions on their own, though they are typically animalistic or robotic in nature. A trained animal or well-programmed robot will have a trait conveying that they can be interacted with and given commands. Often only specific listed characters will be able to command an animal or robot, though it is at the GM's discretion when and why this can occur.
								<br><br>
								Animals and animal-like NPCs can equip and use items, though the items they can use will typically be listed or at the GM's discretion.
								<ul>
									<li>Animals and animal-like NPCs will always have hit points and resistances.</li>
									<li>Animals and animal-like NPCs will have their characteristics defined by a template and are then modified via traits.</li>
								</ul>
							</p>
						</div>
						<div class="content-stack content-stack-xs">
							<div class="line-container">
								<h5><strong>Misc</strong></h5>
								<div class="line"></div>
							</div>
							<p class="copy">
								Misc. items are items that do not neatly fall into another category or which are unimportant or generic objects that could have a multitude of uses. A brick would be a misc item; it could be thrown as a weapon or used to build a structure, but by itself it's just a… brick. Most items in an environment can be considered miscellaneous.
							</p>
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