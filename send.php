<?php
// Получаем данные из формы
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);

// Кому отправлять
$to = "ayvazyanserj3@gmail.com";

// Тема письма
$subject = "Заявка с сайта Психология Риска";

// Тело письма
$body = "
Имя: $name\n
Email: $email\n
Сообщение:\n$message
";

// Заголовки
$headers = "From: no-reply@psychrisk.ru\r\n";
$headers .= "Reply-To: $email\r\n";

// Отправка
if (mail($to, $subject, $body, $headers)) {
    // Редирект на страницу "Спасибо"
    header("Location: thanks.html");
    exit();
} else {
    echo "Ошибка отправки. Попробуйте позже.";
}
?>