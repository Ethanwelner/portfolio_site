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
                        <h1 class="title hero-title white-text ">Starrage</h1>
						<h2 class="title section-title">A Custom RPG System</h2>
					    <h3 class="sub-title non-title">For PnP Role Playing Games</h3>
                    </div>
                </div>
                <div class="rpg-links white">
                    <a href="#stats"><badge class="badge">Stats</badge></a>
                    <a href="#traits"><badge class="badge">Traits</badge></a>
                    <a href="#skills"><badge class="badge">Skills</badge></a>
                    <a href="#items"><badge class="badge">Items</badge></a>
                    <a href="#character"><badge class="badge">Character</badge></a>
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

            <div class="rpg-links black">
                <a href="#stats"><badge class="badge">Stats</badge></a>
                <a href="#traits"><badge class="badge">Traits</badge></a>
                <a href="#skills"><badge class="badge">Skills</badge></a>
                <a href="#items"><badge class="badge">Items</badge></a>
                <a href="#character"><badge class="badge">Character</badge></a>
            </div>


            <div class="container d-flex z-2 flex-wrap mt-5 mt-lg-0 justify-content-center">


                <!------------  STATS ------------->
                <?php include 'php/rpg/rpg-stats.php'; ?>
                <div class="separator"></div>



                <!------------ TRAITS ------------->
                <?php include 'php/rpg/rpg-traits.php'; ?>
                <div class="separator"></div>


                <!--------------- SKILL  CHECKS ------------->
                <?php include 'php/rpg/rpg-skills.php'; ?>
                <div class="separator"></div>



                <!------------ ITEMS, ARMOR, AND EFFECTS ------------->
                <?php include 'php/rpg/rpg-items.php'; ?>
                <div class="separator"></div>


                <!------------  SAMPLE CHARACTER SHEET ------------->
                <?php include 'php/rpg/rpg-character.php'; ?>

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