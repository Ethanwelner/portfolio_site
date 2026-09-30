<?php
$query = $_SERVER['QUERY_STRING'] ?? '';
header('Location: personal.php' . ($query !== '' ? '?' . $query : ''), true, 301);
exit;
