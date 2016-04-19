<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Smart Realtor – агентство элитной недвижимости</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<link rel="shortcut icon" href="<?php echo get_template_directory_uri();?>/img/favicon/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri();?>/img/favicon/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri();?>/img/favicon/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri();?>/img/favicon/apple-touch-icon-114x114.png">
	<meta http-equiv="refresh" content="2;http://smartrealtor.kz/">
</head>	
<body>
<?php 
  // Если поле выбора вложения не пустое - закачиваем его на сервер 
  if (!empty($_FILES['resume']['tmp_name'])) { 
    // Закачиваем файл 
    $picture = $_FILES['resume']['name']; 
    if (copy($_FILES['resume']['tmp_name'], $path)) $picture = $picture; 
  } 
  
  $thm = 'Резюме';
	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта</h2>\r\n";
	$msg .= "<p><strong>От кого:</strong> ".$_POST['name']."</p>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$_POST['phone']."</p>\r\n";
  $mail_to = "main@smartrealtor.kz";
  
  // Отправляем почтовое сообщение 
  if(empty($picture)) mail($mail_to, $thm, $msg); 
  else send_mail($mail_to, $thm, $msg, $picture); 
  
  
  // Вспомогательная функция для отправки почтового сообщения с вложением (Trianon)
  function send_mail($mail_to, $thema, $html, $path) { 
	  if ($path) {  
      $fp = fopen($path,"rb");   
	    if (!$fp) { 
		    print "Cannot open file";   
	      exit();   
	    }
       
      $file = fread($fp, filesize($path));   
      fclose($fp);   
    }  
    $name = $_FILES['resume']['name']; // в этой переменной надо сформировать имя файла (без всякого пути)  
    $EOL = "\r\n"; // ограничитель строк, некоторые почтовые сервера требуют \n - подобрать опытным путём
    $boundary     = "--".md5(uniqid(time()));  // любая строка, которой не будет ниже в потоке данных.  
    $headers    = "MIME-Version: 1.0;$EOL";   
    $headers   .= "Content-Type: multipart/mixed; boundary=\"$boundary\"$EOL";  
    $headers   .= "From: ". $mail_to;  
      
    $multipart  = "--$boundary$EOL";   
    $multipart .= "Content-Type: text/html; charset=UTF-8$EOL";   
    $multipart .= "Content-Transfer-Encoding: base64$EOL";   
    $multipart .= $EOL; // раздел между заголовками и телом html-части 
    $multipart .= chunk_split(base64_encode($html));   

    $multipart .=  "$EOL--$boundary$EOL";   
    $multipart .= "Content-Type: application/octet-stream; name=\"$name\"$EOL";   
    $multipart .= "Content-Transfer-Encoding: base64$EOL";   
    $multipart .= "Content-Disposition: attachment; filename=\"$name\"$EOL";   
    $multipart .= $EOL; // раздел между заголовками и телом прикрепленного файла 
    $multipart .= chunk_split(base64_encode($file));   

    $multipart .= "$EOL--$boundary--$EOL";   
      
    if(!mail($mail_to, $theme, $multipart, $headers)) {
	    echo "nope";           //если не письмо не отправлено
    } else { 
	    // если письмо отправлено
      echo "yeap";  
    }  
  exit;  
  }
?>
</body>	
</html>	