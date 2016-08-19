<?php
$name       = @trim(stripslashes($_POST['name'])); 
$from       = @trim(stripslashes($_POST['email'])); 
$subject    = @trim(stripslashes($_POST['subject'])); 
$message    = @trim(stripslashes($_POST['message'])); 
$to   		= 'cyberorg@cyberorg.info';//replace with your email
$messagex .= 'Email: ' . @trim(stripslashes($_POST['email'])) . "\r\n\r\n";
$messagex .= 'Subject' . @trim(stripslashes($_POST['subject'])) . "\r\n\r\n";
$messagex .= 'Comments:' . @trim(stripslashes($_POST['message'])) . "\r\n\r\n";

$headers   = array();
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/plain; charset=iso-8859-1";
$headers[] = "From: {$name} <{$from}>";
$headers[] = "Reply-To: <{$from}>";
$headers[] = "Subject: {$subject}";
$headers[] = "X-Mailer: PHP/".phpversion();


mail($to, $subject, $messagex);
die;
