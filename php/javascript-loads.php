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
			$( ".about-modal img[data-src]" ).each(function() {
				this.src = this.getAttribute( "data-src" );
				this.removeAttribute( "data-src" );
			});
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


		function applyDeferredBackground(el) {
			el.style.backgroundImage = "url('" + el.getAttribute( "data-bg" ) + "')";
			el.removeAttribute( "data-bg" );
		}

		var deferredBackgrounds = document.querySelectorAll( "[data-bg]" );
		if ( deferredBackgrounds.length && window.IntersectionObserver ) {
			var backgroundObserver = new IntersectionObserver(function( entries ) {
				entries.forEach(function( entry ) {
					if ( entry.isIntersecting ) {
						applyDeferredBackground( entry.target );
						backgroundObserver.unobserve( entry.target );
					}
				});
			}, { rootMargin: "600px 0px" });
			deferredBackgrounds.forEach(function( el ) {
				backgroundObserver.observe( el );
			});
		} else {
			Array.prototype.forEach.call( deferredBackgrounds, applyDeferredBackground );
		}

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
			var left = window.matchMedia( "(max-width: 767px)" ).matches
				? link.offsetLeft - $dot.outerWidth() - 6
				: link.offsetLeft + link.offsetWidth + 8;
			$dot.css( { top: top + "px", left: left + "px" } );
			$dot.addClass( "is-ready" );
		}

		function updateRpgLinkHighlight() {
			var $panel = $( ".pane-frontiers .rpg-panel.is-active" );
			if ( ! $panel.length ) {
				return;
			}

			var $navs = $panel.find( ".rpg-links" );
			if ( ! $navs.length ) {
				return;
			}

			var $links = $navs.first().find( "a[href^='#']" );
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

			$navs.each(function() {
				var $nav = $( this );
				var $navLinks = $nav.find( "a[href^='#']" );
				$navLinks.removeClass( "is-active" );
				var $active = $navLinks.filter( "[href='#" + currentId + "']" ).addClass( "is-active" );
				moveRpgLinksDot( $nav, $active );
			});
		}

		function personalHash() {
			return ( window.location.hash || "" ).replace( /^#/, "" ).toLowerCase();
		}

		function isFrontiersHash(hash) {
			return [ "frontiers", "strange-frontiers", "setting", "mechanics", "rpg-mechanics", "rpg-setting", "changelog", "change-log", "rpg-changelog", "stats", "traits", "skills", "items", "character", "thesciences", "technologies", "hierarchy", "timeline", "introduction", "thestars", "spacecraft", "parabiology", "locations" ].indexOf( hash ) !== -1 || hash.indexOf( "lore-" ) === 0;
		}

		function isPhotosHash(hash) {
			return [ "photos", "models", "photography", "model-photos" ].indexOf( hash ) !== -1;
		}

		function isProjectsHash(hash) {
			return hash === "projects";
		}

		function loadOpenPanelImages() {
			$( ".personal-pane.is-visible .rpg-panel.is-active img[data-src]" ).each(function() {
				this.src = this.getAttribute( "data-src" );
				this.removeAttribute( "data-src" );
			});
		}

		function syncPersonalShellHeight() {
			var shell = document.querySelector( ".personal-shell" );
			var pane = document.querySelector( ".personal-pane.is-visible" );
			if ( ! shell || ! pane ) {
				return;
			}
			shell.style.height = pane.scrollHeight + "px";
		}

		function showPersonalPage(page, animate) {
			var $shell = $( ".personal-shell" );
			if ( ! $shell.length ) {
				return;
			}

			var already = $shell.hasClass( "is-" + page );
			$( ".personal-pane" ).removeClass( "is-visible" );
			$( ".pane-" + page ).addClass( "is-visible" );

			if ( already ) {
				syncPersonalShellHeight();
				return;
			}

			window.scrollTo( { top: 0 } );

			var shell = $shell[0];
			var track = $shell.find( ".personal-track" )[0];
			var fromFrontiers = $shell.hasClass( "is-frontiers" );
			var useMotion = $shell.hasClass( "transitions-on" ) && animate !== false && track;

			if ( showPersonalPage.revealTimer ) {
				window.clearTimeout( showPersonalPage.revealTimer );
				showPersonalPage.revealTimer = 0;
			}
			$shell.removeClass( "is-revealing is-revealed" );

			function finishSlide() {
				if ( finishSlide.done ) {
					return;
				}
				finishSlide.done = true;
				if ( track ) {
					track.style.transition = "none";
					track.style.transform = "";
					track.style.willChange = "";
					track.style.left = page === "frontiers" ? "-100vw" : "0px";
				}
				if ( useMotion ) {
					$shell.addClass( "is-revealing" );
				}
				$shell.removeClass( "is-sliding" );
				if ( track ) {
					track.offsetWidth;
					track.style.left = "";
					track.style.transition = "";
				}
				syncPersonalShellHeight();
				if ( useMotion ) {
					window.requestAnimationFrame( function() {
						$shell.addClass( "is-revealed" );
					} );
					showPersonalPage.revealTimer = window.setTimeout( function() {
						$shell.removeClass( "is-revealing is-revealed" );
						showPersonalPage.revealTimer = 0;
					}, 450 );
				}
				if ( page === "frontiers" ) {
					updateRpgLinkHighlight();
				}
			}
			finishSlide.done = false;

			if ( useMotion ) {
				track.style.left = fromFrontiers ? "-100vw" : "0px";
				track.style.transform = "translate3d(0,0,0)";
				track.style.willChange = "transform";
				$shell.addClass( "is-sliding" );
				shell.style.height = window.innerHeight + "px";
				shell.offsetWidth;
				$shell.removeClass( "is-personal is-frontiers" ).addClass( "is-" + page );
				track.style.transform = fromFrontiers
					? "translate3d(100vw,0,0)"
					: "translate3d(-100vw,0,0)";

				$( track ).off( "transitionend.personalSlide" ).on( "transitionend.personalSlide", function( event ) {
					if ( event.target !== this || ( event.originalEvent && event.originalEvent.propertyName && event.originalEvent.propertyName !== "transform" ) ) {
						return;
					}
					$( this ).off( "transitionend.personalSlide" );
					finishSlide();
				} );
				window.setTimeout( finishSlide, 850 );
			} else {
				$shell.removeClass( "is-personal is-frontiers" ).addClass( "is-" + page );
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
			loadOpenPanelImages();

			if ( updateHash ) {
				var tabId = $tab.attr( "id" );
				var nextHash = "blog";
				if ( tabId === "tab-photos" ) {
					nextHash = "photos";
				} else if ( tabId === "tab-projects" ) {
					nextHash = "projects";
				} else if ( tabId === "tab-setting" ) {
					nextHash = "introduction";
				} else if ( tabId === "tab-mechanics" ) {
					nextHash = "mechanics";
				} else if ( tabId === "tab-changelog" ) {
					nextHash = "changelog";
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
			if ( hash === "changelog" || hash === "change-log" || hash === "rpg-changelog" ) {
				return $( "#tab-changelog" );
			}
			return $( "#tab-setting" );
		}

		function applyPersonalHash(animate) {
			if ( personalHash() === "technologies" ) {
				history.replaceState( null, "", "#thesciences" );
			}

			var hash = personalHash();
			if ( isFrontiersHash( hash ) ) {
				showPersonalPage( "frontiers", animate );
				activatePaneTab( rpgTabFromHash(), false );
				return;
			}

			showPersonalPage( "personal", animate );
			if ( isPhotosHash( hash ) ) {
				activatePaneTab( $( "#tab-photos" ), false );
			} else if ( isProjectsHash( hash ) ) {
				activatePaneTab( $( "#tab-projects" ), false );
			} else {
				activatePaneTab( $( "#tab-blog" ), false );
			}
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

		$( ".rpg-tabs .rpg-tab" ).click(function() {
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

		function activateTechFieldTab($tab) {
			var $fields = $tab.closest( ".tech-fields" );
			var $list = $tab.closest( "[role='tablist']" );
			$list.find( ".tech-field-tab" ).removeClass( "is-active" ).attr( "aria-selected", "false" );
			$tab.addClass( "is-active" ).attr( "aria-selected", "true" );
			$fields.children( ".tech-field-panel" ).removeClass( "is-active" );
			$( "#" + $tab.attr( "aria-controls" ) ).addClass( "is-active" );
			syncPersonalShellHeight();
			window.requestAnimationFrame( updateRpgLinkHighlight );
		}

		function updateSkyHoles(panel) {
			var box = panel.getBoundingClientRect();
			if ( ! box.width || ! box.height ) {
				return;
			}
			var path = "M0 0H" + box.width + "V" + box.height + "H0Z";
			$( panel ).find( ".breakout" ).each(function() {
				var rect = this.getBoundingClientRect();
				var left = Math.floor( rect.left - box.left );
				var top = Math.floor( rect.top - box.top );
				var right = Math.ceil( rect.right - box.left );
				var bottom = Math.ceil( rect.bottom - box.top );
				path += "M" + left + " " + top + "H" + right + "V" + bottom + "H" + left + "Z";
			});
			panel.style.setProperty( "--rpg-sky-holes", "path(evenodd, '" + path + "')" );
			panel.classList.add( "has-sky-holes" );
		}

		var skyPanels = $( ".pane-frontiers .rpg-panel" ).filter(function() {
			return $( this ).find( ".breakout" ).length > 0;
		}).get();

		if ( skyPanels.length && window.ResizeObserver && window.CSS && CSS.supports( "clip-path", "path(evenodd, 'M0 0H1V1H0Z')" ) ) {
			var skyHoleObserver = new ResizeObserver(function( entries ) {
				entries.forEach(function( entry ) {
					updateSkyHoles( entry.target );
				});
			});
			skyPanels.forEach(function( panel ) {
				skyHoleObserver.observe( panel );
			});
		}

		var $imageModal = $( ".image-modal" );
		var $imageModalImg = $imageModal.find( ".image-modal-img" );
		var $imageModalClose = $imageModal.find( ".image-modal-close" );
		var $zoomableImages = $( "img[src], img[data-src]" )
			.not( ".image-modal-img, [aria-hidden='true'], a img" )
			.not( ".splash-proto img, .surface-proto img, .browser-mock, .forecaster-scroller" )
			.filter(function() {
				return ! /\.(svg|gif)(\?|$)/i.test( $( this ).attr( "src" ) || $( this ).attr( "data-src" ) );
			})
			.addClass( "is-zoomable" );
		var imageModalReturnFocus = null;

		function openImageModal($img) {
			imageModalReturnFocus = $img[0];
			$imageModalImg.attr({
				src: $img.attr( "data-full" ) || $img.attr( "src" ),
				alt: $img.attr( "alt" ) || ""
			});
			$imageModal.addClass( "is-open" );
			$( "html" ).addClass( "image-modal-open" );
			$imageModalClose.trigger( "focus" );
		}

		function closeImageModal() {
			if ( ! $imageModal.hasClass( "is-open" ) ) {
				return;
			}
			$imageModal.removeClass( "is-open" );
			$( "html" ).removeClass( "image-modal-open" );
			if ( imageModalReturnFocus ) {
				imageModalReturnFocus.focus();
			}
		}

		$zoomableImages.each(function() {
			var alt = $( this ).attr( "alt" );
			$( this ).attr({
				tabindex: "0",
				role: "button",
				"aria-label": alt ? "View larger: " + alt : "View larger image"
			});
		});

		$zoomableImages.on( "click", function() {
			openImageModal( $( this ) );
		});

		$zoomableImages.on( "keydown", function( event ) {
			if ( event.key === "Enter" || event.key === " " ) {
				event.preventDefault();
				openImageModal( $( this ) );
			}
		});

		$imageModalClose.on( "click", closeImageModal );

		$imageModal.on( "click", function( event ) {
			if ( event.target === this ) {
				closeImageModal();
			}
		});

		$( document ).on( "keydown", function( event ) {
			if ( ! $imageModal.hasClass( "is-open" ) ) {
				return;
			}
			if ( event.key === "Escape" ) {
				closeImageModal();
			} else if ( event.key === "Tab" ) {
				event.preventDefault();
				$imageModalClose.trigger( "focus" );
			}
		});

		var $loreModal = $( ".lore-modal" );
		var $loreModalPanel = $loreModal.find( ".lore-modal-panel" );
		var $loreModalTitle = $loreModal.find( ".lore-modal-title" );
		var $loreModalBody = $loreModal.find( ".lore-modal-body" );
		var $loreModalClose = $loreModal.find( ".lore-modal-close" );
		var loreModalReturnFocus = null;

		function openLoreModal(slug, trigger) {
			var $entry = $( "#lore-" + slug );
			if ( ! $entry.length ) {
				return false;
			}
			if ( ! $loreModal.hasClass( "is-open" ) ) {
				loreModalReturnFocus = trigger;
			}
			$loreModalTitle.html( $entry.find( ".lore-title" ).first().html() );
			$loreModalBody.html( $entry.children( ".lore-body" ).html() );
			$loreModalPanel.scrollTop( 0 );
			$loreModal.addClass( "is-open" );
			$( "html" ).addClass( "lore-modal-open" );
			$loreModalClose.trigger( "focus" );
			return true;
		}

		function closeLoreModal() {
			if ( ! $loreModal.hasClass( "is-open" ) ) {
				return;
			}
			$loreModal.removeClass( "is-open" );
			$( "html" ).removeClass( "lore-modal-open" );
			if ( loreModalReturnFocus ) {
				loreModalReturnFocus.focus();
			}
		}

		$( document ).on( "click", "[data-lore-open]", function( event ) {
			if ( openLoreModal( $( this ).attr( "data-lore-open" ), this ) ) {
				event.preventDefault();
			}
		});

		$loreModalClose.on( "click", closeLoreModal );

		$loreModal.on( "click", function( event ) {
			if ( event.target === this ) {
				closeLoreModal();
			}
		});

		$( document ).on( "keydown", function( event ) {
			if ( ! $loreModal.hasClass( "is-open" ) ) {
				return;
			}
			if ( event.key === "Escape" ) {
				closeLoreModal();
			} else if ( event.key === "Tab" ) {
				var $focusable = $loreModal.find( "a[href], button" ).filter( ":visible" );
				var first = $focusable.first()[0];
				var last = $focusable.last()[0];
				if ( event.shiftKey && document.activeElement === first ) {
					event.preventDefault();
					last.focus();
				} else if ( ! event.shiftKey && document.activeElement === last ) {
					event.preventDefault();
					first.focus();
				}
			}
		});

		$( ".tech-field-tab" ).click(function() {
			var $tab = $( this );
			if ( $tab.hasClass( "is-active" ) ) {
				return;
			}
			activateTechFieldTab( $tab );
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