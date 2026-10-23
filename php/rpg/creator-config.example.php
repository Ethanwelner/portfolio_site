<?php
// Settings for creator-api.php, the Character Creator's Claude proxy.
//
// Copy this file to sf-creator-config.php in the folder ABOVE the site (the
// one that holds the site's folder, outside the web root), then fill in the
// key. Never commit the real file or put it inside the site folder.
//
// On DreamHost: if the site lives in ~/example.com, the file goes in
// ~/sf-creator-config.php. Make it readable only by you: chmod 600.

return array(
	// An Anthropic API key, from console.anthropic.com.
	'api_key' => '',

	// Limits. A build is one character; a turn is one request to Claude (a
	// build usually takes 2 to 4).
	'builds_per_visitor_per_hour' => 5,
	'turns_per_visitor_per_hour' => 60,
	'builds_per_day' => 100,

	// Where the limits are tracked. Also outside the web root.
	// 'data_dir' => '/home/you/sf-creator-data',
);
