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

$fullName = isset($data['fullName']) ? htmlspecialchars(trim($data['fullName']), ENT_QUOTES, 'UTF-8') : '';
$whatsapp = isset($data['whatsapp']) ? htmlspecialchars(trim($data['whatsapp']), ENT_QUOTES, 'UTF-8') : '';
$companyName = isset($data['companyName']) ? htmlspecialchars(trim($data['companyName']), ENT_QUOTES, 'UTF-8') : '';
$industry = isset($data['industry']) ? htmlspecialchars(trim($data['industry']), ENT_QUOTES, 'UTF-8') : '';
$packageChoice = isset($data['packageChoice']) ? htmlspecialchars(trim($data['packageChoice']), ENT_QUOTES, 'UTF-8') : '';
$city = isset($data['city']) ? htmlspecialchars(trim($data['city']), ENT_QUOTES, 'UTF-8') : '';
$notes = isset($data['notes']) ? htmlspecialchars(trim($data['notes']), ENT_QUOTES, 'UTF-8') : '';

if (empty($fullName) || empty($whatsapp)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Nama dan nomor WhatsApp wajib diisi']);
    exit;
}

// Prepare CSV row
$timestamp = date('Y-m-d H:i:s');
$clientIp = $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';
$logFile = __DIR__ . '/leads.csv';

$isNew = !file_exists($logFile);
$fileHandle = fopen($logFile, 'a');

if ($fileHandle) {
    if ($isNew) {
        fputcsv($fileHandle, ['Timestamp', 'Full Name', 'WhatsApp', 'Company', 'City', 'Industry', 'Package', 'Notes', 'IP']);
    }
    fputcsv($fileHandle, [$timestamp, $fullName, $whatsapp, $companyName, $city, $industry, $packageChoice, $notes, $clientIp]);
    fclose($fileHandle);
}

// Respond success
echo json_encode([
    'success' => true,
    'message' => 'Terima kasih, data konsultasi Anda telah berhasil kami terima.',
    'lead' => [
        'name' => $fullName,
        'whatsapp' => $whatsapp
    ]
]);
