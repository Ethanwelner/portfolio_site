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
			var left = window.matchMedia( "(max-width: 1199px)" ).matches
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

			// A short last section never reaches the activation line, so light up the
			// last link once the page is scrolled to the bottom.
			var scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
			if ( scrolledToBottom ) {
				var lastId = ( $links.last().attr( "href" ) || "" ).replace( /^#/, "" );
				var lastSection = lastId ? document.getElementById( lastId ) : null;
				if ( lastSection && lastSection.getBoundingClientRect().top < window.innerHeight ) {
					currentId = lastId;
				}
			}

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
			return [ "frontiers", "strange-frontiers", "strangefrontiers", "thesetting", "setting", "adventure", "rpg-adventure", "mechanics", "rpg-mechanics", "rpg-setting", "changelog", "change-log", "rpg-changelog", "stats", "traits", "skills", "items", "character", "thesciences", "technologies", "hierarchy", "timeline", "introduction", "thestars", "spacecraft", "parabiology", "locations", "dreft-map", "building-a-dreftian", "tetra-exploration" ].indexOf( hash ) !== -1 || hash.indexOf( "lore-" ) === 0;
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
					nextHash = "strangefrontiers";
				} else if ( tabId === "tab-adventure" ) {
					nextHash = "adventure";
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
			if ( hash === "adventure" || hash === "rpg-adventure" || hash === "dreft-map" || hash === "building-a-dreftian" || hash === "tetra-exploration" ) {
				return $( "#tab-adventure" );
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
			// The pane is set, so the page-slide head start can go (php/rpg/page-slide.php).
			document.documentElement.classList.remove( "sf-start-frontiers" );
			window.requestAnimationFrame( function() {
				$( ".personal-shell" ).addClass( "transitions-on" );
			} );
			$( window ).on( "resize load", syncPersonalShellHeight );
			// toggle doesn't bubble, so listen in the capture phase.
			document.addEventListener( "toggle", function( event ) {
				if ( event.target.tagName === "DETAILS" ) {
					syncPersonalShellHeight();
				}
			}, true );
			// Lazy panel images load after window load, so resize the shell when they arrive.
			document.addEventListener( "load", function( event ) {
				if ( event.target.tagName === "IMG" ) {
					syncPersonalShellHeight();
				}
			}, true );
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

		function showLoreModal(titleHtml, bodyHtml, trigger) {
			if ( ! $loreModal.hasClass( "is-open" ) ) {
				loreModalReturnFocus = trigger;
			}
			$loreModalTitle.html( titleHtml );
			$loreModalBody.html( bodyHtml );
			$loreModalPanel.scrollTop( 0 );
			$loreModal.addClass( "is-open" );
			$( "html" ).addClass( "lore-modal-open" );
			$loreModalClose.trigger( "focus" );
		}

		function openLoreModal(slug, trigger) {
			var $entry = $( "#lore-" + slug );
			if ( ! $entry.length && rpgSearchSource ) {
				$entry = $( rpgSearchSource ).find( "#lore-" + slug );
			}
			if ( ! $entry.length ) {
				return false;
			}
			showLoreModal( $entry.find( ".lore-title" ).first().html(), $entry.find( ".lore-body" ).first().html(), trigger );
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

		var $rpgSearch = $( ".rpg-search" );
		var $rpgSearchInput = $rpgSearch.find( ".rpg-search-input" );
		var $rpgSearchResults = $rpgSearch.find( ".rpg-search-results" );
		var rpgSearchIndex = null;
		var rpgSearchActive = -1;
		// personal.php, fetched on pages that don't have its Strange Frontiers pane (creator.php)
		var rpgSearchSource = null;

		function escapeSearchHtml(text) {
			return text.replace( /[&<>"]/g, function( c ) {
				return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[ c ];
			});
		}

		function collapseSearchText(text) {
			return text.replace( /\s+/g, " " ).trim();
		}

		// Must keep the same length as the input so match positions line up for highlighting.
		function foldSearchText(text) {
			return text.replace( /[^\x00-\x7f]/g, function( c ) {
				if ( c === "\u2018" || c === "\u2019" ) {
					return "'";
				}
				if ( c === "\u201c" || c === "\u201d" ) {
					return "\"";
				}
				var folded = c.normalize( "NFD" ).replace( /[\u0300-\u036f]/g, "" );
				return folded.length === 1 ? folded : c;
			}).toLowerCase();
		}

		function addRpgSearchEntry(entries, title, context, text, open) {
			title = collapseSearchText( title );
			text = collapseSearchText( text );
			if ( ! title ) {
				return;
			}
			entries.push({
				title: title,
				context: context.filter( Boolean ).join( " \u203a " ),
				text: text,
				foldedTitle: foldSearchText( title ),
				foldedText: foldSearchText( text ),
				open: open
			});
		}

		function mechanicsSearchLevel(el) {
			if ( el.tagName === "H3" ) {
				return 1;
			}
			if ( el.tagName === "H4" ) {
				return 2;
			}
			return el.classList.contains( "line-container" ) ? 3 : 0;
		}

		function openMechanicsSection(title, nodes) {
			var $body = $( "<div>" ).append( $( nodes ).clone() );
			$body.find( "[id]" ).removeAttr( "id" );
			$body.find( "img[data-src]" ).each(function() {
				this.src = this.getAttribute( "data-src" );
				this.removeAttribute( "data-src" );
			});
			showLoreModal( escapeSearchHtml( title ), $body.html(), $rpgSearchInput[0] );
		}

		// $root is this page, or personal.php fetched (rpgSearchSource).
		function buildRpgSearchIndex($root) {
			var entries = [];
			var loreContext = {};
			var subTitle = "";

			$root.find( ".pane-frontiers" ).find( "h3.sub-title, .lore-entry" ).each(function() {
				if ( this.tagName === "H3" ) {
					subTitle = collapseSearchText( $( this ).text() );
				} else {
					var $panel = $( this ).closest( ".tech-field-panel" );
					var panelTab = $panel.length ? collapseSearchText( $root.find( "#" + $panel.attr( "aria-labelledby" ) ).text() ) : "";
					loreContext[ this.id ] = [ subTitle, panelTab ];
				}
			});

			$root.find( ".lore-entry[id^='lore-']" ).each(function() {
				var $entry = $( this );
				var slug = this.id.slice( 5 );
				addRpgSearchEntry( entries, $entry.find( ".lore-title" ).first().text(), loreContext[ this.id ] || [ "Lore" ], $entry.find( ".lore-body" ).first().text(), function() {
					openLoreModal( slug, $rpgSearchInput[0] );
				});
			});

			var h3 = "";
			var h4 = "";
			var line = "";
			subTitle = "";
			$root.find( "#rpg-mechanics" ).find( "h3, h4, .line-container, .trait-box" ).each(function() {
				var $el = $( this );
				var title = collapseSearchText( $el.text() );

				if ( $el.hasClass( "sub-title" ) ) {
					subTitle = title;
					h3 = h4 = line = "";
					return;
				}

				if ( $el.hasClass( "trait-box" ) ) {
					var traitName = collapseSearchText( $el.find( ".trait-name" ).text() );
					var box = this;
					addRpgSearchEntry( entries, traitName, [ subTitle, h3, line ], title.replace( traitName, "" ), function() {
						openMechanicsSection( traitName, [ box ] );
					});
					return;
				}

				var level = mechanicsSearchLevel( this );
				var context;
				if ( level === 1 ) {
					h3 = title;
					h4 = line = "";
					context = [ subTitle ];
				} else if ( level === 2 ) {
					h4 = title;
					line = "";
					context = [ subTitle, h3 ];
				} else {
					line = title;
					context = [ subTitle, h3, h4 ];
				}

				var nodes = [];
				for ( var node = this.nextElementSibling; node; node = node.nextElementSibling ) {
					var nodeLevel = mechanicsSearchLevel( node );
					if ( nodeLevel && nodeLevel <= level ) {
						break;
					}
					if ( ! node.classList.contains( "bumper" ) ) {
						nodes.push( node );
					}
				}
				if ( ! nodes.length ) {
					return;
				}

				addRpgSearchEntry( entries, title, context, $( nodes ).text(), function() {
					openMechanicsSection( title, nodes );
				});
			});

			return entries;
		}

		function highlightSearchText(text, terms) {
			var folded = foldSearchText( text );
			if ( folded.length !== text.length ) {
				return escapeSearchHtml( text );
			}
			var ranges = [];
			terms.forEach(function( term ) {
				for ( var i = folded.indexOf( term ); i !== -1; i = folded.indexOf( term, i + term.length ) ) {
					ranges.push( [ i, i + term.length ] );
				}
			});
			ranges.sort(function( a, b ) {
				return a[0] - b[0];
			});
			var html = "";
			var cursor = 0;
			ranges.forEach(function( range ) {
				if ( range[1] <= cursor ) {
					return;
				}
				var start = Math.max( range[0], cursor );
				html += escapeSearchHtml( text.slice( cursor, start ) ) + "<mark>" + escapeSearchHtml( text.slice( start, range[1] ) ) + "</mark>";
				cursor = range[1];
			});
			return html + escapeSearchHtml( text.slice( cursor ) );
		}

		function searchSnippet(entry, query, terms) {
			var at = entry.foldedText.indexOf( query );
			if ( at === -1 ) {
				for ( var i = 0; i < terms.length && at === -1; i++ ) {
					at = entry.foldedText.indexOf( terms[ i ] );
				}
			}
			var start = at > 50 ? at - 50 : 0;
			var end = Math.min( entry.text.length, start + 160 );
			return ( start > 0 ? "\u2026" : "" ) + highlightSearchText( entry.text.slice( start, end ), terms ) + ( end < entry.text.length ? "\u2026" : "" );
		}

		function setRpgSearchActive(index) {
			var $items = $rpgSearchResults.children( ".rpg-search-result" );
			$items.removeClass( "is-active" ).attr( "aria-selected", "false" );
			rpgSearchActive = index;
			if ( index < 0 || index >= $items.length ) {
				rpgSearchActive = -1;
				$rpgSearchInput.removeAttr( "aria-activedescendant" );
				return;
			}
			var item = $items.eq( index ).addClass( "is-active" ).attr( "aria-selected", "true" )[0];
			$rpgSearchInput.attr( "aria-activedescendant", item.id );
			item.scrollIntoView( { block: "nearest" } );
		}

		function closeRpgSearchResults() {
			$rpgSearchResults.prop( "hidden", true ).empty();
			$rpgSearchInput.attr( "aria-expanded", "false" ).removeAttr( "aria-activedescendant" );
			rpgSearchActive = -1;
		}

		function showRpgSearchMessage(text) {
			$rpgSearchResults.empty().append( $( "<li>", { "class": "rpg-search-empty", role: "presentation", text: text } ) );
			$rpgSearchResults.prop( "hidden", false );
			$rpgSearchInput.attr( "aria-expanded", "true" );
		}

		// Pages without the Strange Frontiers pane search personal.php's, fetched the
		// first time someone searches.
		function loadRpgSearchSource() {
			if ( loadRpgSearchSource.started ) {
				return;
			}
			loadRpgSearchSource.started = true;
			fetch( "personal.php" ).then(function( response ) {
				return response.ok ? response.text() : Promise.reject();
			}).then(function( html ) {
				rpgSearchSource = new DOMParser().parseFromString( html, "text/html" );
				rpgSearchIndex = buildRpgSearchIndex( $( rpgSearchSource ) );
				runRpgSearch();
			}).catch(function() {
				loadRpgSearchSource.started = false;
				showRpgSearchMessage( "Search isn’t available right now." );
			});
		}

		function runRpgSearch() {
			var query = collapseSearchText( foldSearchText( $rpgSearchInput.val() ) );
			if ( ! query ) {
				closeRpgSearchResults();
				return;
			}
			if ( ! rpgSearchIndex ) {
				if ( ! $( ".pane-frontiers" ).length ) {
					loadRpgSearchSource();
					showRpgSearchMessage( "Loading…" );
					return;
				}
				rpgSearchIndex = buildRpgSearchIndex( $( document ) );
			}

			var terms = query.split( " " );
			var matches = [];
			rpgSearchIndex.forEach(function( entry, order ) {
				var score = 0;
				var found = terms.every(function( term ) {
					if ( entry.foldedTitle.indexOf( term ) !== -1 ) {
						score += 10;
						return true;
					}
					return entry.foldedText.indexOf( term ) !== -1;
				});
				if ( ! found ) {
					return;
				}
				if ( entry.foldedTitle === query ) {
					score += 100;
				} else if ( entry.foldedTitle.indexOf( query ) === 0 ) {
					score += 60;
				} else if ( entry.foldedTitle.indexOf( query ) !== -1 ) {
					score += 40;
				} else if ( entry.foldedText.indexOf( query ) !== -1 ) {
					score += 5;
				}
				matches.push( { entry: entry, score: score, order: order } );
			});
			matches.sort(function( a, b ) {
				return b.score - a.score || a.order - b.order;
			});

			$rpgSearchResults.empty();
			if ( ! matches.length ) {
				$rpgSearchResults.append( $( "<li>", { "class": "rpg-search-empty", role: "presentation", text: "No results" } ) );
			}
			matches.slice( 0, 12 ).forEach(function( match, i ) {
				var entry = match.entry;
				var $item = $( "<li>", { "class": "rpg-search-result", id: "rpg-search-result-" + i, role: "option", "aria-selected": "false" } );
				$item.append( $( "<span>", { "class": "rpg-search-result-title" } ).html( highlightSearchText( entry.title, terms ) ) );
				if ( entry.context ) {
					$item.append( $( "<span>", { "class": "rpg-search-result-context", text: entry.context } ) );
				}
				if ( entry.text ) {
					$item.append( $( "<span>", { "class": "rpg-search-result-snippet" } ).html( searchSnippet( entry, query, terms ) ) );
				}
				$item.data( "entry", entry );
				$rpgSearchResults.append( $item );
			});
			$rpgSearchResults.prop( "hidden", false ).scrollTop( 0 );
			$rpgSearchInput.attr( "aria-expanded", "true" );
			setRpgSearchActive( -1 );
		}

		function openRpgSearchResult($item) {
			var entry = $item.data( "entry" );
			if ( ! entry ) {
				return;
			}
			closeRpgSearchResults();
			entry.open();
		}

		$rpgSearchInput.on( "input focus", runRpgSearch );

		$rpgSearchInput.on( "keydown", function( event ) {
			var count = $rpgSearchResults.children( ".rpg-search-result" ).length;
			if ( event.key === "ArrowDown" || event.key === "ArrowUp" ) {
				if ( ! count ) {
					return;
				}
				event.preventDefault();
				var step = event.key === "ArrowDown" ? 1 : -1;
				setRpgSearchActive( ( rpgSearchActive + step + count + ( rpgSearchActive === -1 && step < 0 ? 1 : 0 ) ) % count );
			} else if ( event.key === "Enter" ) {
				if ( count ) {
					event.preventDefault();
					openRpgSearchResult( $rpgSearchResults.children( ".rpg-search-result" ).eq( Math.max( rpgSearchActive, 0 ) ) );
				}
			} else if ( event.key === "Escape" ) {
				if ( ! $rpgSearchResults.prop( "hidden" ) ) {
					event.preventDefault();
					closeRpgSearchResults();
				}
			}
		});

		$rpgSearchResults.on( "mousedown", ".rpg-search-result", function( event ) {
			event.preventDefault();
		});

		$rpgSearchResults.on( "click", ".rpg-search-result", function() {
			openRpgSearchResult( $( this ) );
		});

		$( document ).on( "mousedown", function( event ) {
			if ( ! $( event.target ).closest( ".rpg-search" ).length ) {
				closeRpgSearchResults();
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
				'kind', 'kinds', 'Kind', 'Kinds',
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