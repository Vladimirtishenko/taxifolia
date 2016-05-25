"test"

<?php

if(empty($_POST)){
	echo json_decode(array("status" => 404));
	exit();
}

$name = @$_POST['name'];
$email = @$_POST['email'];
$phone = @$_POST['phone'];
$adress = @$_POST['adress'];
$count = @$_POST['count'];
$radio = @$_POST['radio'];


$to = "vladimirtishenko1@gmail.com"; 
$subject = "Новое письмо с сайта Taxifolia"; 

$message = ' 
<html> 
    <head> 
        <title>Новое письмо с сайта Taxifolia</title> 
    </head> 
    <body> 
        <h2>Новый заказ с сайта от '.$name.'</h2> 
        <p>Email заказчика '.$email.'</p> 
        <p>Телефон заказчика '.$phone.'</p> 
        <p>Адрес доставки '.$adress.'</p> 
        <p>Заказ Дигидрокварцетин '.$radio.' мг - колличество '.$count.' шт.</p> 
    </body> 
</html>'; 

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: vladimirtishenko1@gmail.com\r\n"; 

if(mail($to, $subject, $message, $headers) == true){
	echo json_encode(array("status" => 200));
} else {
	echo json_encode(array("status" => 404));
}