<?php
/**
 * Hostinger Static Site Engine Bridge
 * Automatically routes all incoming requests to pre-rendered out/ static export
 */

$requestPath = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
$requestPath = rawurldecode($requestPath);
$baseDir = __DIR__ . '/out';

// 0. 301 Permanent Redirects
if ($requestPath === '/panduan/cannibalization-keyword' || $requestPath === '/panduan/cannibalization-keyword/') {
    header('Location: /panduan/kanibalisasi-keyword', true, 301);
    exit;
}

// 1. Root Homepage
if ($requestPath === '/' || $requestPath === '') {
    $indexPath = $baseDir . '/index.html';
    if (file_exists($indexPath)) {
        header('Content-Type: text/html; charset=UTF-8');
        readfile($indexPath);
        exit;
    }
}

// 1.5 PHP Scripts (e.g. /contact.php lead logger)
if (substr($requestPath, -4) === '.php' && is_file($baseDir . $requestPath)) {
    require $baseDir . $requestPath;
    exit;
}

// 2. Direct Static Asset in out/ (CSS, JS, Images, Sitemap XML, Robots TXT)
$directFile = $baseDir . $requestPath;
if (is_file($directFile)) {
    $ext = strtolower(pathinfo($directFile, PATHINFO_EXTENSION));
    $mimeTypes = [
        'html' => 'text/html; charset=UTF-8',
        'css'  => 'text/css; charset=UTF-8',
        'js'   => 'application/javascript; charset=UTF-8',
        'json' => 'application/json; charset=UTF-8',
        'xml'  => 'application/xml; charset=UTF-8',
        'txt'  => 'text/plain; charset=UTF-8',
        'svg'  => 'image/svg+xml',
        'png'  => 'image/png',
        'jpg'  => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'webp' => 'image/webp',
        'ico'  => 'image/x-icon',
        'woff' => 'font/woff',
        'woff2'=> 'font/woff2',
        'ttf'  => 'font/ttf',
    ];

    if (isset($mimeTypes[$ext])) {
        header('Content-Type: ' . $mimeTypes[$ext]);
    } else {
        $mime = mime_content_type($directFile);
        if ($mime) header('Content-Type: ' . $mime);
    }

    if ($ext === 'txt' && !in_array(basename($directFile), ['llms.txt', 'llms-full.txt'], true)) {
        header('X-Robots-Tag: noindex, nofollow');
    }
    readfile($directFile);
    exit;
}

// 3. Clean HTML Route without extension (e.g. /website-packages -> /out/website-packages.html)
$trimmed = rtrim($directFile, '/');
if (is_file($trimmed . '.html')) {
    header('Content-Type: text/html; charset=UTF-8');
    readfile($trimmed . '.html');
    exit;
}

// 4. Directory with index.html (e.g. /demos/modern-corporate/ -> /out/demos/modern-corporate/index.html)
if (is_file($trimmed . '/index.html')) {
    header('Content-Type: text/html; charset=UTF-8');
    readfile($trimmed . '/index.html');
    exit;
}

// 5. 404 Fallback
http_response_code(404);
$notFoundPath = file_exists($baseDir . '/_not-found.html') 
    ? $baseDir . '/_not-found.html' 
    : (file_exists($baseDir . '/404.html') ? $baseDir . '/404.html' : null);

if ($notFoundPath) {
    header('Content-Type: text/html; charset=UTF-8');
    readfile($notFoundPath);
} else {
    echo "404 Not Found";
}
exit;
