
<?php
  $to = "inna@smartrealtor.kz"; //Кому
  $from = "inna@smartrealtor.kz"; //От кого
  $subject = "Заявка на вакансию"; //Тема
  $message = "На сайте была оставлена заявку на вакансию"; //Текст письма
  $message .= "Имя: " . $_POST['name'];
  $message .= "Телефон: " . $_POST['phone'];
  $boundary = "---"; //Разделитель
  /* Заголовки */
  $headers = "From: $from\nReply-To: $from\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"";
  $body = "--$boundary\n";
  /* Присоединяем текстовое сообщение */
  $body .= "Content-type: text/html; charset='utf-8'\n";
  $body .= "Content-Transfer-Encoding: quoted-printablenn";
  $body .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode($_FILES['resume']['name'])."?=\n\n";
  $body .= $message."\n";
  $body .= "--$boundary\n";
  $file = fopen($_FILES['resume']['tmp_name'], "r"); //Открываем файл
  $text = fread($file, filesize($_FILES['resume']['tmp_name'])); //Считываем весь файл
  fclose($file); //Закрываем файл
  /* Добавляем тип содержимого, кодируем текст файла и добавляем в тело письма */
  $body .= "Content-Type: application/octet-stream; name==?utf-8?B?".base64_encode($_FILES['resume']['name'])."?=\n";
  $body .= "Content-Transfer-Encoding: base64\n";
  $body .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode($_FILES['resume']['name'])."?=\n\n";
  $body .= chunk_split(base64_encode($text))."\n";
  $body .= "--".$boundary ."--\n";
  if (mail($to, $subject, $body, $headers)){ //Отправляем письмо
		echo '<div class="message">
				<img src="http://smartrealtor.kz/wp-content/themes/smart/img/ok.png" alt="">
				<div class="message_text">
					<h3>Спасибо, что обратились к нам, <br> '.$_POST['name'].'</h3>
					<p>менеджер обязательно свяжется с вами в ближайшее время.</p>
				</div>
			</div>';
  }	else {
		echo '<div class="message">
				<img src="http://smartrealtor.kz/wp-content/themes/smart/img/ok.png" alt="">
				<div class="message_text">
					<h3>Ошибка отправления</h3>
					<p>Сообщение не было доставлено</p>
				</div>
			</div>';
  }
?>
