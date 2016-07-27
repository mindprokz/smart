
<?php
$sendtoArr = array("inna@smartrealtor.kz", "office@smartrealtor.kz");
//$sendto = "inna@smartrealtor.kz, office@smartrealtor.kz"; // почта, на которую будет приходить письмо
if ($_POST['emailTo']) {
	$sendtoArr[2] = $_POST['emailTo'];
}
foreach($sendtoArr as $sendto) {
	$send = true;
	$username = $_POST['name'];   // сохраняем в переменную данные полученные из поля c именем
	$usertel = $_POST['phone']; // сохраняем в переменную данные полученные из поля c телефонным номером
	$usermail = $_POST['email']; // сохраняем в переменную данные полученные из поля c адресом электронной почты

	// Формирование заголовка письма
	$subject  = $_POST['header'];
	$headers  = "From: " . strip_tags($sendto) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

	// Формирование тела письма
	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта</h2>\r\n";
	$msg .= "<p><strong>От кого:</strong> ".$username."</p>\r\n";
	$msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
	if ($_POST['message']) {
		$msg .= "<p><strong>Сообщение:</strong> ".$_POST['message']."</p>\r\n";
	}
	$msg .= "</body></html>";

	//foreach($sendto as $val) {
		if(@mail($sendto, $subject, $msg, $headers)) {
			$send = true;
		} else {
			$send = false;
		}

	// отправка сообщения
	if ($send) {
		if ($_POST['theme'] == 'tech') {
			echo '<div class="message">
					<img src="http://smartrealtor.kz/wp-content/uploads/2016/04/sergey.jpg" style="width: 100px; height: 100px;">
					<div class="message_text">
						<p>-Спасибо что воспользовались электронной службой технической поддержки компании Smart Realtor. Технический менеджер свяжется с вами в ближайшее время! </p>
					</div>
				</div>';
		} else {
			echo '<div class="message">
					<img src="http://smartrealtor.kz/wp-content/themes/smart/img/ok.png" style="width: 100px; height: 100px;">
					<div class="message_text">
						<p>-Спасибо что воспользовались электронной службой поддержки компании Smart Realtor. Менеджер свяжется с вами в ближайшее время! </p> 
					</div>
				</div>';
		}
	} else {
		echo '<div class="message">
				<img src="http://smartrealtor.kz/wp-content/themes/smart/img/ok.png" alt="">
				<div class="message_text">
					<h3>Ошибка отправления</h3>
					<p>-Спасибо что воспользовались электронной службой технической поддержки компании Smart Realtor. Технический менеджер свяжется с вами в ближайшее время!</p>
				</div>
			</div>';
	}
}
?>
