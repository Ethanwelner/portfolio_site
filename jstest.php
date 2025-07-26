<!DOCTYPE html>
<html lang="en">


	<head>
		<!-- this loads the head code -->
		<?php include 'php/head-loads.php'; ?>
		<title>Ethan Welner Portfolio</title>

	</head>


	<body>





		<!-- JS BODY STUFF STARTS HERE ----------------- -->
		<div class="container mt-5">
			<div><span>target EThan</span></div>

			<div class="jstarget">
				the target parent
				<div class="child">the target child inside the target parent</div>
				<div class="">other child inside the target parent</div>
			</div>

			<div><span>target Mason</span></div>

			<button class="content-btn green-btn red-bg mt-4">
	    		<span class="title sub-title white-text">See My Work</span>
	    	</button>

			<button class="content-btn blue-btn yellow-bg mt-4 getter">
	    		<span class="title sub-title white-text">Get Width</span>
	    	</button>
	    	<span class="title sub-title play-area">test</span>

		</div>

		<!-- JS BODY STUFF STOPS HERE ----------------- -->





		<!-- This loads the header -->
		<?php include 'php/header.php'; ?>
		<!-- this loads the page footer for both mobile and desktop -->
		<?php include 'php/footer.php'; ?>
		<!-- this loads the javascript plugins for each page -->
		<?php include 'php/javascript-loads.php'; ?>





		<!-- JS SCRIPT STUFF STARTS HERE ----------------- -->

		<script type="text/javascript">
			console.log('this works');


			// document.ready waits for the document to load before running
			$(document).ready(function () {
				console.log('jquery loaded');

				// once document is loaded swaps out all contents of any span inside a div with bob
				// $('div span').html('bob');

				// $('') is an html selector that can target elements by their type class or ID
				// it can be followed by .html, .color, or many other modifiers
				// the selector creates an array out of the selected items
				$('#nav-ui').css('color', '#F20544');

				// $('p') = jquery('p')
				// dollar sign is a shorthand for jquery
				// $('p, div, span') will add p div and span tags to the array, with this i can target multiple classes or IDs
				// $('p:first') selectors can be further modified like with :first to select the first instance
				// $('p:odd') $('p:even') selects odd or even
				// $('p:gt(3)') selects the p tags after the first 4
				// $('p:contains("targeted html")') selects p tag that contain written html


				// .children targets within the array
				$('.jstarget').children('.child').css('color', 'purple');
				// .sibings targets same dom level to the target
				$('.jstarget').children('.child').siblings().css('color', 'orange');
				// .parents targets every parent element all the way up to the HTML tag
				$('.child').parents().css('color', 'green');
				// .not tells it to avoid the specified thing
				// $('.child').not('.unwantedthing')

				$('.green-btn').click(function (event) {
					// event.preventDefault prevents the default behavior of the element from occuringm so button form submissions and so on
					event.preventDefault();
					$('#nav-ui').css('color', 'green');
				});

				$('.blue-btn').click(function () {
					$('#nav-ui').css('color', 'blue');
				});

				// this will be useful for keyboard up/down commands for scrolljack
				// gets the keyCode pressed and checks it against a variable, if it passes it performs a function
				$('body').keydown(function (event) {
					console.log(event);
					if (event.keyCode == 38) {
						console.log('up 38');
					} else if (event.keyCode == 40) {
						console.log('down 40');
					} else if (event.keyCode == 37) {
						console.log('left 37');
					} else if (event.keyCode == 39) {
						console.log('right 39');
					}
				});


				// width and height are getters, they get the value listed. Assigning them to a variable makes them manipulable.
				$('button').click(function (event) {
					// this refers to the selector target
					$(this)
					if ($(this).hasClass('getter')) {
						var width = $('.getter').width();
						var height = $('.getter').height();
						$('.play-area').html(width + ', ' + height);
					}

					// classes can be added and removed with addclass and removeclass
					$(this).removeClass("active").addClass("inactive");
					// if else statements are good to swap between active classes
					$(this).removeClass("inactive").addClass("active");
				})

				// IS can check the boolean value and act on it
				$( "ul" ).click(function( event ) {
				  var target = $( event.target );
				  if ( target.is( "li" ) ) {
				    target.css( "background-color", "red" );
				  }
				});

				// toggleClass is a better way to swap between classes based on an event
				$( ".toggle-target" ).click(function() {
				  $( this ).toggleClass( "highlight" );
				});






			});
		</script>

		<!-- JS SCRIPT STUFF STOPS HERE ----------------- -->




	</body>


</html>