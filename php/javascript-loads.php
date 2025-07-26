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

	})


</script>