<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $title = htmlspecialchars($_POST['title']);
    $message = htmlspecialchars($_POST['message']);

    $to = "paul0912600284@gmail.com";
    $subject = "聯繫表單提交: $title";
    $body = "姓名: $name\n電子郵件: $email\n\n訊息:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "訊息已成功發送！";
    } else {
        echo "發送失敗，請稍後重試。";
    }
}
?>
