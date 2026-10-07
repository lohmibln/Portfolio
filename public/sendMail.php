<?php
/**
 * Contact form endpoint (Marco / DA style).
 * Expects POST body as JSON text/plain:
 * {"name":"...","email":"...","message":"..."}
 */

header('Content-Type: text/plain; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Method not allowed';
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    echo 'Invalid JSON';
    exit;
}

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));

if ($name === '' || strlen($name) < 2) {
    http_response_code(400);
    echo 'Invalid name';
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo 'Invalid email';
    exit;
}

if (strlen($message) < 10) {
    http_response_code(400);
    echo 'Invalid message';
    exit;
}

// Recipient — change if needed
$to = 'lucas.lohmann.berlin@gmail.com';
$subject = 'Portfolio Kontakt von ' . $name;

$body = "Name: {$name}\n";
$body .= "Email: {$email}\n\n";
$body .= "Nachricht:\n{$message}\n";

$headers = [];
$headers[] = 'From: Portfolio <lucas.lohmann.berlin@gmail.com>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$ok = @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

if (!$ok) {
    http_response_code(500);
    echo 'Mail failed';
    exit;
}

http_response_code(200);
echo 'OK';
