<?php
/**
 * PHP built-in server router.
 * Serves static assets with CORS headers so fonts and images load in Chrome
 * (including Cursor-tunneled / private-network previews).
 */

$cors_headers = [
    'Access-Control-Allow-Origin: *',
    'Access-Control-Allow-Methods: GET, HEAD, OPTIONS',
    'Access-Control-Allow-Headers: *',
    'Access-Control-Allow-Private-Network: true',
    'Cross-Origin-Resource-Policy: cross-origin',
];

foreach ($cors_headers as $header) {
    header($header);
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    return true;
}

$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
if ($uri === false || $uri === '') {
    $uri = '/';
}

$root = realpath(__DIR__);
$requested = $root . $uri;

if (is_dir($requested)) {
    $index = $requested . DIRECTORY_SEPARATOR . 'index.php';
    if (is_file($index)) {
        require $index;
        return true;
    }
}

if (is_file($requested)) {
    $real = realpath($requested);
    if ($real === false || strpos($real, $root) !== 0) {
        http_response_code(403);
        echo 'Forbidden';
        return true;
    }

    $ext = strtolower(pathinfo($real, PATHINFO_EXTENSION));

    if ($ext === 'php') {
        require $real;
        return true;
    }

    $mimes = [
        'css'   => 'text/css; charset=UTF-8',
        'js'    => 'application/javascript; charset=UTF-8',
        'woff2' => 'font/woff2',
        'woff'  => 'font/woff',
        'ttf'   => 'font/ttf',
        'otf'   => 'font/otf',
        'png'   => 'image/png',
        'jpg'   => 'image/jpeg',
        'jpeg'  => 'image/jpeg',
        'gif'   => 'image/gif',
        'svg'   => 'image/svg+xml',
        'ico'   => 'image/x-icon',
        'webp'  => 'image/webp',
        'webmanifest' => 'application/manifest+json',
        'html'  => 'text/html; charset=UTF-8',
        'json'  => 'application/json; charset=UTF-8',
        'map'   => 'application/json; charset=UTF-8',
    ];

    if (isset($mimes[$ext])) {
        header('Content-Type: ' . $mimes[$ext]);
    }

    header('Content-Length: ' . filesize($real));
    header('Cache-Control: public, max-age=86400');
    readfile($real);
    return true;
}

http_response_code(404);
echo 'Not Found';
return true;
