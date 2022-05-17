<?php
$to = 'misha.shabelnik@gmail.com';
$subject = 'Запрос звонка с сайта DekStone';

$client_name = $_POST['client_name'];
$client_phone = $_POST['client_phone'];

$message = 'Имя: ' . $client_name . '. Телефон: ' . $client_phone;

$headers = 'From: admin@mihailshabelnik.ru' . "\r\n" .
    'Reply-To: admin@mihailshabelnik.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
