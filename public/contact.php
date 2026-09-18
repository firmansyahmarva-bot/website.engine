<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Metode request tidak diizinkan']);
    exit;
}

// Read JSON input or fallback to $_POST
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

// 1. HONEYPOT CHECK
// If honeypot field 'website_hp' is filled, silent drop (pretend success to fool spambots)
if (!empty($data['website_hp'])) {
    echo json_encode(['success' => true, 'message' => 'Terima kasih, formulir terkirim.']);
    exit;
}

// 2. TIMING CHECK (Minimum 3 seconds from form render)
$renderTs = isset($data['render_ts']) ? floatval($data['render_ts']) : 0;
if ($renderTs > 0) {
    $currentTimeMs = microtime(true) * 1000;
    $elapsedSec = ($currentTimeMs - $renderTs) / 1000;
    if ($elapsedSec < 3.0) {
        // Submitted suspiciously fast (< 3 seconds)
        echo json_encode(['success' => true, 'message' => 'Terima kasih, formulir terkirim.']);
        exit;
    }
}

// 3. RATE LIMITING BY IP (Max 5 submissions per hour)
$clientIp = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';
if (strpos($clientIp, ',') !== false) {
    $ips = explode(',', $clientIp);
    $clientIp = trim($ips[0]);
}

$rateLimitFile = __DIR__ . '/.rate_limit.json';
$rateLimits = [];
if (file_exists($rateLimitFile)) {
    $content = @file_get_contents($rateLimitFile);
    if ($content) {
        $rateLimits = json_decode($content, true) ?: [];
    }
}

$now = time();
$ipSubmissions = isset($rateLimits[$clientIp]) && is_array($rateLimits[$clientIp]) ? $rateLimits[$clientIp] : [];

// Filter entries within last 3600 seconds
$ipSubmissions = array_filter($ipSubmissions, function($t) use ($now) {
    return ($now - $t) < 3600;
});

if (count($ipSubmissions) >= 5) {
    http_response_code(429);
    echo json_encode([
        'success' => false,
        'message' => 'Batas pengiriman tercapai (maks 5 per jam). Silakan hubungi kami langsung via WhatsApp.'
    ]);
    exit;
}

// Append current submission
$ipSubmissions[] = $now;
$rateLimits[$clientIp] = $ipSubmissions;

// Clean up ancient IPs from rateLimit array to prevent unbounded file growth
foreach ($rateLimits as $ip => $timestamps) {
    $filtered = array_filter($timestamps, function($t) use ($now) {
        return ($now - $t) < 3600;
    });
    if (empty($filtered)) {
        unset($rateLimits[$ip]);
    } else {
        $rateLimits[$ip] = array_values($filtered);
    }
}
@file_put_contents($rateLimitFile, json_encode($rateLimits), LOCK_EX);

// 4. FIELD SANITIZATION
$fullName = isset($data['fullName']) ? htmlspecialchars(trim(substr($data['fullName'], 0, 150)), ENT_QUOTES, 'UTF-8') : '';
$whatsapp = isset($data['whatsapp']) ? htmlspecialchars(trim(substr($data['whatsapp'], 0, 30)), ENT_QUOTES, 'UTF-8') : '';
$companyName = isset($data['companyName']) ? htmlspecialchars(trim(substr($data['companyName'], 0, 150)), ENT_QUOTES, 'UTF-8') : '';
$websiteUrl = isset($data['websiteUrl']) ? htmlspecialchars(trim(substr($data['websiteUrl'], 0, 200)), ENT_QUOTES, 'UTF-8') : '';
$industry = isset($data['industry']) ? htmlspecialchars(trim(substr($data['industry'], 0, 100)), ENT_QUOTES, 'UTF-8') : '';
$packageChoice = isset($data['packageChoice']) ? htmlspecialchars(trim(substr($data['packageChoice'], 0, 100)), ENT_QUOTES, 'UTF-8') : '';
$city = isset($data['city']) ? htmlspecialchars(trim(substr($data['city'], 0, 100)), ENT_QUOTES, 'UTF-8') : '';
$notes = isset($data['notes']) ? htmlspecialchars(trim(substr($data['notes'], 0, 1000)), ENT_QUOTES, 'UTF-8') : '';
$sourcePage = isset($data['sourcePage']) ? htmlspecialchars(trim(substr($data['sourcePage'], 0, 200)), ENT_QUOTES, 'UTF-8') : '';

if (empty($fullName) || empty($whatsapp)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Nama dan nomor WhatsApp wajib diisi']);
    exit;
}

// 5. WRITE TO CSV
$timestamp = date('Y-m-d H:i:s');
$logFile = __DIR__ . '/leads.csv';

$isNew = !file_exists($logFile);
$fileHandle = @fopen($logFile, 'a');

if ($fileHandle) {
    if ($isNew) {
        fputcsv($fileHandle, ['Timestamp', 'Full Name', 'WhatsApp', 'Company', 'Website URL', 'City', 'Industry', 'Package', 'Notes', 'Source Page', 'IP']);
    }
    fputcsv($fileHandle, [$timestamp, $fullName, $whatsapp, $companyName, $websiteUrl, $city, $industry, $packageChoice, $notes, $sourcePage, $clientIp]);
    fclose($fileHandle);
}

// 6. SUCCESS RESPONSE
echo json_encode([
    'success' => true,
    'message' => 'Terima kasih, data konsultasi Anda telah berhasil kami terima.',
    'lead' => [
        'name' => $fullName,
        'whatsapp' => $whatsapp
    ]
]);
