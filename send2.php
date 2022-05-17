<?php
$to = 'admin@mihailshabelnik.ru';
$subject = 'Сообщение с сайта DekStone';

$client_name = $_POST['client_name2'];
$client_email = $_POST['client_email'];
$client_message = $_POST['client_message'];

$message = 'Имя: ' . $client_name . '. E-mail: ' . $client_email . '. Сообщение: ' . $client_message;

$headers = 'From: admin@mihailshabelnik.ru' . "\r\n" .
    'Reply-To: admin@mihailshabelnik.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
