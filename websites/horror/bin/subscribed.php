<?php
	$file = "tmp/subscriptions.txt";
	$email = $_POST['email'].PHP_EOL;
	file_put_contents($file, $email, FILE_APPEND | LOCK_EX);
?>