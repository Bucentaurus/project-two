<?php

header('Content-Type: application/json');

$name = $_POST['name'];
$message = "Вам написал пользователь $name";

$result = mail('bananoyed@yandex.ru', "Message", $message);

echo json_encode(
    array(
        'status' => $result
    )
);
