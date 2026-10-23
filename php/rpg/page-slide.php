<!-- Slides between personal.php and the Character Creator (css/page-slide.css) -->
<link rel="stylesheet" type="text/css" href="<?php echo asset_url('css/page-slide.css'); ?>"/>
<script>
	(function () {
		var root = document.documentElement;
		var isCreator = function (url) {
			return /\/creator\.php$/.test(new URL(url, location.href).pathname);
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

		// Arriving: slide only between the Character Creator and the rest, in its direction.
		window.addEventListener("pagereveal", function (event) {
			var transition = event.viewTransition;
			if (! transition) {
				return;
			}
			var activation = window.navigation && navigation.activation;
			var from = (activation && activation.from && activation.from.url) || document.referrer;
			if (! from || isCreator(from) === isCreator(location.href)) {
				transition.skipTransition();
				return;
			}
			transition.types.add(isCreator(location.href) ? "slide-left" : "slide-right");
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
