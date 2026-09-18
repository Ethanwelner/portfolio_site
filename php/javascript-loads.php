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

		function moveRpgLinksDot($nav, $active) {
			var $dot = $nav.children( ".rpg-links-dot" );
			if ( ! $dot.length || ! $active.length ) {
				return;
			}

			var link = $active[0];
			var top = link.offsetTop + ( link.offsetHeight / 2 ) - ( $dot.outerHeight() / 2 );
			var left = link.offsetLeft + link.offsetWidth + 8;
			$dot.css( { top: top + "px", left: left + "px" } );
			$dot.addClass( "is-ready" );
		}

		function updateRpgLinkHighlight() {
			var $panel = $( ".pane-frontiers .rpg-panel.is-active" );
			if ( ! $panel.length ) {
				return;
			}

			var $nav = $panel.find( ".rpg-links" );
			var $links = $nav.find( "a[href^='#']" );
			if ( ! $links.length ) {
				return;
			}

			var activationLine = 160;
			var currentId = ( $links.first().attr( "href" ) || "" ).replace( /^#/, "" );

			$links.each(function() {
				var id = ( this.hash || "" ).replace( /^#/, "" );
				var section = id ? document.getElementById( id ) : null;
				if ( ! section ) {
					return;
				}
				if ( section.getBoundingClientRect().top <= activationLine ) {
					currentId = id;
				}
			});

			$links.removeClass( "is-active" );
			var $active = $links.filter( "[href='#" + currentId + "']" ).addClass( "is-active" );
			moveRpgLinksDot( $nav, $active );
		}

		function personalHash() {
			return ( window.location.hash || "" ).replace( /^#/, "" ).toLowerCase();
		}

		function isFrontiersHash(hash) {
			return [ "frontiers", "strange-frontiers", "setting", "mechanics", "rpg-mechanics", "rpg-setting", "stats", "traits", "skills", "items", "character", "technologies", "hierarchy", "timeline" ].indexOf( hash ) !== -1;
		}

		function isPhotosHash(hash) {
			return [ "photos", "models", "photography", "model-photos" ].indexOf( hash ) !== -1;
		}

		function syncPersonalShellHeight() {
			var shell = document.querySelector( ".personal-shell" );
			var pane = document.querySelector( ".personal-pane.is-visible" );
			if ( ! shell || ! pane ) {
				return;
			}
			shell.style.height = pane.scrollHeight + "px";
		}

		function updateFixedPageNav(page) {
			var $nav = $( ".personal-page-nav-fixed" );
			if ( ! $nav.length ) {
				return;
			}

			$nav.find( ".js-personal-page" ).each(function() {
				var linkPage = $( this ).attr( "data-page" );
				var label = linkPage === "frontiers" ? "STRANGE FRONTIERS" : "Projects & Blog";
				var bulletClass = linkPage === "frontiers" ? "frontiers-accent" : "black-text";
				if ( linkPage === page ) {
					$( this ).html( '<span class="' + bulletClass + ' nav-bullet">&#8226;</span> ' + label );
				} else {
					$( this ).text( label );
				}
			});
		}

		function showPersonalPage(page, animate) {
			var $shell = $( ".personal-shell" );
			if ( ! $shell.length ) {
				return;
			}

			var already = $shell.hasClass( "is-" + page );
			$( ".personal-pane" ).removeClass( "is-visible" );
			$( ".pane-" + page ).addClass( "is-visible" );
			updateFixedPageNav( page );

			if ( already ) {
				syncPersonalShellHeight();
				return;
			}

			window.scrollTo( { top: 0 } );
			$shell.addClass( "is-sliding" );
			$shell.removeClass( "is-personal is-frontiers" ).addClass( "is-" + page );

			function finishSlide() {
				if ( finishSlide.done ) {
					return;
				}
				finishSlide.done = true;
				$shell.removeClass( "is-sliding" );
				syncPersonalShellHeight();
				if ( page === "frontiers" ) {
					updateRpgLinkHighlight();
				}
			}
			finishSlide.done = false;

			if ( $shell.hasClass( "transitions-on" ) && animate !== false ) {
				$shell.find( ".personal-track" ).off( "transitionend.personalSlide" ).on( "transitionend.personalSlide", function( event ) {
					if ( event.target !== this || ( event.originalEvent && event.originalEvent.propertyName && event.originalEvent.propertyName !== "left" ) ) {
						return;
					}
					$( this ).off( "transitionend.personalSlide" );
					finishSlide();
				} );
				window.setTimeout( finishSlide, 850 );
			} else {
				finishSlide();
			}
		}

		function activatePaneTab($tab, updateHash) {
			if ( ! $tab.length ) {
				return;
			}

			var $list = $tab.closest( "[role='tablist']" );
			$list.find( ".rpg-tab" ).removeClass( "is-active" ).attr( "aria-selected", "false" );
			$tab.addClass( "is-active" ).attr( "aria-selected", "true" );

			var $pane = $tab.closest( ".personal-pane" );
			var $panels = $pane.length ? $pane.find( ".rpg-panel" ) : $( ".rpg-panel" );
			$panels.removeClass( "is-active" );
			$( "#" + $tab.attr( "aria-controls" ) ).addClass( "is-active" );

			if ( updateHash ) {
				var tabId = $tab.attr( "id" );
				var nextHash = "blog";
				if ( tabId === "tab-photos" ) {
					nextHash = "photos";
				} else if ( tabId === "tab-setting" ) {
					nextHash = "setting";
				} else if ( tabId === "tab-mechanics" ) {
					nextHash = "mechanics";
				}
				if ( window.location.hash.replace( /^#/, "" ) !== nextHash ) {
					history.replaceState( null, "", "#" + nextHash );
				}
			}

			syncPersonalShellHeight();
			window.requestAnimationFrame( updateRpgLinkHighlight );
		}

		function rpgTabFromHash() {
			var hash = personalHash();
			if ( hash === "mechanics" || hash === "rpg-mechanics" || hash === "stats" || hash === "traits" || hash === "skills" || hash === "items" || hash === "character" ) {
				return $( "#tab-mechanics" );
			}
			return $( "#tab-setting" );
		}

		function applyPersonalHash(animate) {
			var hash = personalHash();
			if ( isFrontiersHash( hash ) ) {
				showPersonalPage( "frontiers", animate );
				activatePaneTab( rpgTabFromHash(), false );
				return;
			}

			showPersonalPage( "personal", animate );
			activatePaneTab( isPhotosHash( hash ) ? $( "#tab-photos" ) : $( "#tab-blog" ), false );
		}

		if ( $( ".personal-shell" ).length ) {
			applyPersonalHash( false );
			window.requestAnimationFrame( function() {
				$( ".personal-shell" ).addClass( "transitions-on" );
			} );
			$( window ).on( "resize load", syncPersonalShellHeight );
		} else if ( $( ".rpg-tab" ).length ) {
			activatePaneTab( rpgTabFromHash(), false );
		}

		$( ".rpg-tab" ).click(function() {
			var $tab = $( this );
			if ( $tab.hasClass( "is-active" ) ) {
				return;
			}

			activatePaneTab( $tab, true );

			var tabs = $tab.closest( ".rpg-tabs" )[0];
			if ( tabs ) {
				var tabsRect = tabs.getBoundingClientRect();
				if ( tabsRect.top < 0 || tabsRect.bottom > window.innerHeight ) {
					window.scrollTo( { top: Math.max( 0, window.scrollY + tabsRect.top ) } );
				}
			}
		});

		$( ".js-personal-page" ).click(function( event ) {
			event.preventDefault();
			var page = $( this ).attr( "data-page" );
			if ( page === "frontiers" ) {
				var frontiersTab = $( ".pane-frontiers .rpg-tab.is-active" );
				if ( ! frontiersTab.length ) {
					frontiersTab = $( "#tab-setting" );
				}
				showPersonalPage( "frontiers", true );
				activatePaneTab( frontiersTab, true );
			} else {
				var personalTab = $( ".pane-personal .rpg-tab.is-active" );
				if ( ! personalTab.length ) {
					personalTab = $( "#tab-blog" );
				}
				showPersonalPage( "personal", true );
				activatePaneTab( personalTab, true );
			}
		});

		$( window ).on( "hashchange", function() {
			if ( $( ".personal-shell" ).length ) {
				applyPersonalHash( true );
			} else if ( $( ".rpg-tab" ).length ) {
				activatePaneTab( rpgTabFromHash(), false );
			}
		});

		if ( $( ".rpg-links" ).length ) {
			var rpgSpyFrame = 0;
			$( window ).on( "scroll resize", function() {
				if ( rpgSpyFrame ) {
					return;
				}
				rpgSpyFrame = window.requestAnimationFrame(function() {
					rpgSpyFrame = 0;
					if ( $( ".personal-shell.is-frontiers" ).length || ! $( ".personal-shell" ).length ) {
						updateRpgLinkHighlight();
					}
				});
			});
			updateRpgLinkHighlight();
		}

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