<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "admin@mihailshabelnik.ru"; // e-mail администратора


// Отправка письма администратору сайта

$tema = "заявка с сайта DekSton";
$message_to_myemail = "
Имя: $name<br>
E-mail: $email<br>
Телефон: $tel<br><br>
Источник (ссылка): $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: Sitename <admin@mihailshabelnik.ru> \r\n Reply-To: DekSton \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );

?>