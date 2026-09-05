<!-- js plugins -->

<!-- jquery -->
<script src="js/jquery-3.4.1.min.js"></script>

<!-- popper -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

<!-- bootstrap js -->
<script src="js/bootstrap.js"></script>



<script>

	$(document).ready(function () {


		// about me fade in out
		$( ".about-me-link" ).click(function() {
			$( ".about-modal" ).fadeIn( 500 );
			$( ".section" ).not('.about-clip').addClass("add-blur");
			$( ".close-x" ).removeClass("pre-slide-in").addClass("post-slide-in");
		});
		$( ".close-x" ).click(function() {
			$( ".about-modal" ).fadeOut( 500 );
			$( ".section" ).removeClass("add-blur");
			$( ".close-x" ).removeClass("post-slide-in").addClass("pre-slide-in");
		});


		// // solves for chrome onload bug for snap and fixed elements
		// setTimeout(function(){
		// 	$( ".section" ).addClass( "snap-section" );
		// },500);


		setTimeout(function(){
			$( ".hero-statement" ).fadeIn( 750,"swing"  );
			$( ".hero-statement" ).removeClass("pre-slide-in").addClass("post-slide-in");
		},300);

		function activateRpgTab($tab, updateHash) {
			if ( ! $tab.length ) {
				return;
			}

			$( ".rpg-tab" ).removeClass( "is-active" ).attr( "aria-selected", "false" );
			$tab.addClass( "is-active" ).attr( "aria-selected", "true" );

			$( ".rpg-panel" ).removeClass( "is-active" );
			$( "#" + $tab.attr( "aria-controls" ) ).addClass( "is-active" );

			if ( updateHash ) {
				var nextHash = $tab.attr( "id" ) === "tab-setting" ? "setting" : "mechanics";
				if ( window.location.hash.replace( /^#/, "" ) !== nextHash ) {
					history.replaceState( null, "", "#" + nextHash );
				}
			}
		}

		function rpgTabFromHash() {
			var hash = ( window.location.hash || "" ).replace( /^#/, "" ).toLowerCase();
			if ( hash === "setting" || hash === "rpg-setting" || hash === "timeline" || hash === "technologies" || hash === "hierarchy" ) {
				return $( "#tab-setting" );
			}
			return $( "#tab-mechanics" );
		}

		if ( $( ".rpg-tab" ).length ) {
			activateRpgTab( rpgTabFromHash(), false );
		}

		$( ".rpg-tab" ).click(function() {
			var $tab = $( this );
			if ( $tab.hasClass( "is-active" ) ) {
				return;
			}

			activateRpgTab( $tab, true );

			var tabs = document.querySelector( ".rpg-tabs" );
			if ( tabs ) {
				var tabsRect = tabs.getBoundingClientRect();
				if ( tabsRect.top < 0 || tabsRect.bottom > window.innerHeight ) {
					window.scrollTo( { top: Math.max( 0, window.scrollY + tabsRect.top ) } );
				}
			}
		});

		$( window ).on( "hashchange", function() {
			if ( $( ".rpg-tab" ).length ) {
				activateRpgTab( rpgTabFromHash(), false );
			}
		});

	})


</script>



<script>
        // Function to automatically bold specific keywords
        function autoBoldKeywords() {
            // Array of words to be bolded (you can add more words here)
            const keywordsToBold = [
                // Add your keywords here
                'background package', 'background packages', 'Background Package', 'Background Packages',
                'background trait', 'background traits', 'Background Trait', 'Background Traits',
				'universal trait', 'universal traits', 'Universal Trait', 'Universal Traits',
				'equipment package', 'equipment packages', 'Equipment Package', 'Equipment Packages',
				'temporary condition', 'temporary conditions', 'Temporary Condition', 'Temporary Conditions',
				'ranked trait', 'ranked traits', 'Ranked Trait', 'Ranked Traits',
				'request advantage', 'Request Advantage',
				'requesting advantage', 'Requesting Advantage',
				'requesting competence', 'Requesting Competence',
				'request competence', 'Request Competence',
				'inferred competence', 'Inferred Competence',
                'hit points', 'Hit Points',
                'vibe points', 'Vibe Points',
                'savvy points', 'Savvy Points',
                'hp', 'HP',
                'vp', 'VP',
                'sp', 'SP',
                'effect', 'effects', 'Effect', 'Effects',
                'character', 'characters', 'Character', 'Characters',
                'trait', 'traits', 'Trait', 'Traits',
                'advantage', 'advantages', 'Advantage', 'Advantages',
                'competence', 'competences', 'Competence', 'Competences',
                'Game Master', 'GMing', "GM's", 'GMs', 'GM',
                'skill', 'skills', 'Skill', 'Skills',
                'roll', 'rolls', 'Roll', 'Rolls',
                'ability', 'abilities', 'Ability', 'Abilities',
                'stat', 'stats', 'Stat', 'Stats',
				'species', 'species', 'Species', 'Species',
				'origin', 'origins', 'Origin', 'Origins',
				'profession', 'professions', 'Profession', 'Professions',
				'past', 'Past', 'pasts', 'Pasts',
				'equipment', 'Equipment', 'equipments', 'Equipments',
				'temporary', 'Temporary',
				'conveyed', 'conveyed', 'Conveyed', 'Conveyed',
				'knowledge', 'knowledge', 'Knowledge', 'Knowledge',
				'condition', 'conditions', 'Condition', 'Conditions',
				'knowledge', 'knowledge', 'Knowledge', 'Knowledge',
				'ranked', 'ranked', 'Ranked', 'Ranked',
                'background', 'backgrounds', 'Background', 'Backgrounds',
                'physical', 'Physical',
                'mental', 'Mental',
                'social', 'Social',
                'endurance', 'Endurance',
				'power', 'Power',
                'grace', 'Grace',
                'empathy', 'Empathy',
                'persuasion', 'Persuasion',
                'demeanor', 'Demeanor',
                'memory', 'Memory',
                'intuition', 'Intuition',
                'logic', 'Logic',
                'complex', 'Complex',
                'innate', 'Innate',
                'condition trait', 'Condition Trait',
                'Condition Traits', 'Condition Traits',
                'other traits', 'Other Traits',
                'other trait', 'Other Trait',
            ];
            
            // Find all elements with the 'game-mechanics' class
            const gameMechanicsElements = document.querySelectorAll('.game-mechanics');
            
            // Process each game-mechanics element
            gameMechanicsElements.forEach(element => {
                // Get all text content within this element
                const walker = document.createTreeWalker(
                    element,
                    NodeFilter.SHOW_TEXT,
                    null,
                    false
                );
                
                const textNodes = [];
                let node;
                while (node = walker.nextNode()) {
                    textNodes.push(node);
                }
                
                // Process each text node within this element
                textNodes.forEach(textNode => {
                    let text = textNode.textContent;
                    let hasChanges = false;
                    
                    keywordsToBold.forEach(keyword => {
                        // Create regex to match whole words only (case insensitive)
                        const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
                        if (regex.test(text)) {
                            text = text.replace(regex, `<span class="mechanic-text">${keyword}</span>`);
                            hasChanges = true;
                        }
                    });
                    
                    // If changes were made, replace the text node with HTML
                    if (hasChanges) {
                        const wrapper = document.createElement('span');
                        wrapper.innerHTML = text;
                        textNode.parentNode.replaceChild(wrapper, textNode);
                    }
                });
            });
        }
        
        // Run the function when the page loads
        document.addEventListener('DOMContentLoaded', autoBoldKeywords);
        </script>