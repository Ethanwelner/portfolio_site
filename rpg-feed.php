<?php
/**
 * Strange Frontiers change log as an RSS 2.0 feed.
 *
 * Built from php/rpg/rpg-changelog.php, so the change log stays the only
 * thing to edit. Each change log line is its own item, so lines added later
 * in the day still show up in feed readers (and Discord feed bots) as new.
 */

$sourceFile = __DIR__ . '/php/rpg/rpg-changelog.php';
$siteUrl = 'https://ethanwelner.com/';
$changelogUrl = $siteUrl . 'personal.php#changelog';
$feedUrl = $siteUrl . 'rpg-feed.php';
$maxItems = 100;

$html = (string) file_get_contents($sourceFile);
$tz = new DateTimeZone('America/New_York');

function sf_feed_text($fragment) {
	return trim(preg_replace('/\s+/u', ' ', html_entity_decode(strip_tags($fragment), ENT_QUOTES | ENT_HTML5, 'UTF-8')));
}

function sf_feed_ucfirst($text) {
	return mb_strtoupper(mb_substr($text, 0, 1, 'UTF-8'), 'UTF-8') . mb_substr($text, 1, null, 'UTF-8');
}

function sf_feed_cdata($text) {
	return '<![CDATA[' . str_replace(']]>', ']]]]><![CDATA[>', $text) . ']]>';
}

$items = [];
preg_match_all('#<article\b[^>]*>(.*?)</article>#s', $html, $articles);

foreach ($articles[1] as $article) {
	if (!preg_match('#<i>\s*(\d{1,2})/(\d{1,2})/(\d{4})\s*</i>#', $article, $d)) {
		continue;
	}
	$dateLabel = $d[1] . '/' . $d[2] . '/' . $d[3];
	$day = new DateTime(sprintf('%04d-%02d-%02d 12:00:00', $d[3], $d[1], $d[2]), $tz);

	preg_match_all('#<li\b[^>]*>(.*?)</li>#s', $article, $lines);
	foreach ($lines[1] as $i => $lineHtml) {
		$lineHtml = trim($lineHtml);
		$lineText = sf_feed_text($lineHtml);
		if ($lineText === '') {
			continue;
		}

		// Most lines start with the area they touch, like "Character Creator: ...".
		$area = 'Strange Frontiers';
		$bodyHtml = $lineHtml;
		$colon = mb_strpos($lineText, ': ', 0, 'UTF-8');
		if ($colon !== false && $colon <= 60 && mb_strpos(mb_substr($lineText, 0, $colon, 'UTF-8'), '.', 0, 'UTF-8') === false) {
			$area = mb_substr($lineText, 0, $colon, 'UTF-8');
			$htmlColon = strpos($lineHtml, ': ');
			if ($htmlColon !== false) {
				$bodyHtml = sf_feed_ucfirst(ltrim(substr($lineHtml, $htmlColon + 2)));
			}
		}

		// Newest lines sit at the top of each day, so step back a minute per line.
		$time = clone $day;
		$time->modify('-' . $i . ' minutes');

		$items[] = [
			'title' => $area . ' (' . $dateLabel . ')',
			'description' => $bodyHtml,
			'pubDate' => $time->format(DATE_RSS),
			'guid' => 'sf-changelog-' . sha1($dateLabel . '|' . $lineText),
		];
	}
}

usort($items, function ($a, $b) {
	return strtotime($b['pubDate']) <=> strtotime($a['pubDate']);
});
$items = array_slice($items, 0, $maxItems);

$lastBuild = $items ? $items[0]['pubDate'] : date(DATE_RSS, filemtime($sourceFile));

header('Content-Type: application/rss+xml; charset=UTF-8');
header('Cache-Control: public, max-age=600');

echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Strange Frontiers Change Log</title>
		<link><?php echo htmlspecialchars($changelogUrl, ENT_XML1); ?></link>
		<atom:link href="<?php echo htmlspecialchars($feedUrl, ENT_XML1); ?>" rel="self" type="application/rss+xml"/>
		<description>Content updates to Strange Frontiers, the Character Creator and Player Tools.</description>
		<language>en-us</language>
		<lastBuildDate><?php echo $lastBuild; ?></lastBuildDate>
<?php foreach ($items as $item) : ?>
		<item>
			<title><?php echo htmlspecialchars($item['title'], ENT_XML1, 'UTF-8'); ?></title>
			<link><?php echo htmlspecialchars($changelogUrl, ENT_XML1); ?></link>
			<description><?php echo sf_feed_cdata($item['description']); ?></description>
			<pubDate><?php echo $item['pubDate']; ?></pubDate>
			<guid isPermaLink="false"><?php echo $item['guid']; ?></guid>
		</item>
<?php endforeach; ?>
	</channel>
</rss>
