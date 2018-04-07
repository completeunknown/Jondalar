<?php
	$json = $_REQUEST['bands'];
	$array = json_decode(stripslashes($json), true);
	var_dump($array);
?>
