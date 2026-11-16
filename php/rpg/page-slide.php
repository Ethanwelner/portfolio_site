<!-- Slides between personal.php, the Character Creator, Player Tools and the Game Master Tools (css/page-slide.css) -->
<link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/page-slide.css'); ?>"/>
<script>
	(function () {
		var root = document.documentElement;
		// Strange Frontiers pages drop the smooth scroll (css/portfolio-nested.css):
		// the Creator, Player Tools and the Game Master Tools, and personal.php when
		// it opens on its Strange Frontiers pane (the same hashes as
		// php/javascript-loads.php's isFrontiersHash)
		var hash = (location.hash || "").replace(/^#/, "").toLowerCase();
		var frontiersHash = ["frontiers", "strange-frontiers", "strangefrontiers", "thesetting", "setting", "adventure", "rpg-adventure", "mechanics", "rpg-mechanics", "rpg-setting", "changelog", "change-log", "rpg-changelog", "stats", "traits", "skills", "incidents", "items", "character", "thesciences", "technologies", "hierarchy", "timeline", "introduction", "thestars", "spacecraft", "parabiology", "locations", "dreft-map", "building-a-dreftian", "tetra-exploration"].indexOf(hash) !== -1 || hash.indexOf("lore-") === 0;
		if (/\/(creator|game-tools|game-master)\.php$/.test(location.pathname) || frontiersHash) {
			root.classList.add("sf-page");
		}
		// The pages in nav order: personal.php, then the Character Creator, Player Tools and the Game Master Tools.
		var place = function (url) {
			var path = new URL(url, location.href).pathname;
			return /\/creator\.php$/.test(path) ? 1 : /\/game-tools\.php$/.test(path) ? 2 : /\/game-master\.php$/.test(path) ? 3 : 0;
		};

		// Leaving: hide personal.php's second set of chrome before the page is captured.
		window.addEventListener("pageswap", function (event) {
			if (event.viewTransition) {
				root.classList.add("sf-page-sliding");
			}
		});
		// Back from the next page through the back/forward cache
		window.addEventListener("pageshow", function (event) {
			if (event.persisted) {
				root.classList.remove("sf-page-sliding");
			}
		});

		// Arriving: slide only between those pages, toward the later one in the nav.
		window.addEventListener("pagereveal", function (event) {
			var transition = event.viewTransition;
			if (! transition) {
				return;
			}
			var activation = window.navigation && navigation.activation;
			var from = (activation && activation.from && activation.from.url) || document.referrer;
			if (! from || place(from) === place(location.href)) {
				transition.skipTransition();
				return;
			}
			transition.types.add(place(location.href) > place(from) ? "slide-left" : "slide-right");
			root.classList.add("sf-page-sliding");
			transition.finished.finally(function () {
				root.classList.remove("sf-page-sliding");
			});
		});

		if (location.hash === "#strangefrontiers") {
			root.classList.add("sf-start-frontiers");
		}
	})();
</script>
