<?php // Strange Frontiers search, wired up in php/javascript-loads.php. Used by personal.php and creator.php. ?>
<div class="rpg-search" role="search">
	<svg class="rpg-search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
		<circle cx="8.5" cy="8.5" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
		<path d="M13 13l5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
	</svg>
	<input type="search" class="rpg-search-input" placeholder="Search" aria-label="Search Strange Frontiers" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="rpg-search-results">
	<ul class="rpg-search-results" id="rpg-search-results" role="listbox" aria-label="Search results" hidden></ul>
</div>
