<?php
// Teklif formu e-postaları Resend ile gönderilir.
// Ayarlar ortam değişkenlerinden ya da bu klasördeki config.php dosyasından okunur
// (örnek: config.example.php): RESEND_API_KEY, isteğe bağlı CONTACT_TO_EMAIL ve CONTACT_FROM_EMAIL.

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

function setting(string $name, array $config): string
{
    $value = getenv($name);
    if ($value === false || $value === '') {
        $value = $config[$name] ?? '';
    }
    return (string) $value;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['error' => 'method_not_allowed']);
}

$config = is_file(__DIR__ . '/config.php') ? (array) require __DIR__ . '/config.php' : [];

$body = json_decode(file_get_contents('php://input'), true);
if (!is_array($body)) {
    respond(400, ['error' => 'invalid_body']);
}

// Bot tuzağı doluysa sessizce başarılı dön.
if (is_string($body['website'] ?? null) && trim($body['website']) !== '') {
    respond(200, ['ok' => true]);
}

$labels = [
    'name' => 'Ad Soyad',
    'company' => 'Şirket',
    'email' => 'E-posta',
    'phone' => 'Telefon',
    'service' => 'Hizmet',
    'budget' => 'Bütçe',
    'message' => 'Mesaj',
];

$data = [];
foreach ($labels as $field => $label) {
    $value = $body[$field] ?? '';
    $data[$field] = is_scalar($value) ? mb_substr(trim((string) $value), 0, 4000) : '';
}

if (
    $data['name'] === '' ||
    $data['message'] === '' ||
    !preg_match('/^[^\s@]+@[^\s@]+\.[^\s@]+$/', $data['email']) ||
    ($body['consent'] ?? null) !== 'on'
) {
    respond(422, ['error' => 'invalid_fields']);
}

$apiKey = setting('RESEND_API_KEY', $config);
if ($apiKey === '') {
    respond(503, ['error' => 'not_configured']);
}

$rows = '';
foreach ($labels as $field => $label) {
    if ($data[$field] === '') {
        continue;
    }
    $rows .= '<tr><th align="left" style="padding:6px 16px 6px 0;vertical-align:top">' . $label
        . '</th><td style="padding:6px 0;white-space:pre-wrap">'
        . htmlspecialchars($data[$field], ENT_QUOTES, 'UTF-8') . '</td></tr>';
}

$from = setting('CONTACT_FROM_EMAIL', $config) ?: 'someplus.work <noreply@someplus.work>';
$to = setting('CONTACT_TO_EMAIL', $config) ?: 'info@someplus.work';
$subject = 'Yeni teklif talebi: ' . $data['name'] . ($data['company'] !== '' ? ' (' . $data['company'] . ')' : '');

$curl = curl_init('https://api.resend.com/emails');
curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => json_encode([
        'from' => $from,
        'to' => [$to],
        'reply_to' => $data['email'],
        'subject' => $subject,
        'html' => '<table>' . $rows . '</table>',
    ]),
]);
curl_exec($curl);
$status = curl_getinfo($curl, CURLINFO_HTTP_CODE);

if ($status < 200 || $status >= 300) {
    respond(502, ['error' => 'send_failed']);
}

respond(200, ['ok' => true]);
