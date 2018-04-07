<!DOCTYPE html>
<html>
<body>
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" /> 
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />

<?php

$x = array("a" => "red", "b" => "green");
$y = array("c" => "blue", "d" => "yellow");
echo '<br/>print_r without 2nd argument:<br/>';
print_r($x + $y); // union of $x and $y
echo '<br/>print_r with 2nd argument true:<br/>';
print_r($x + $y, true); // union of $x and $y
echo '<br/>print_r with 2nd argument false:<br/>';
print_r($x + $y, false); // union of $x and $y
echo '<br/>print_r with 2nd argument true stored in $output:<br/>';
$output = print_r($x + $y, true); // union of $x and $y
echo $output;
echo '<br/>print_r without 2nd argument stored in $output:<br/>';
$output = print_r($x + $y); // union of $x and $y
echo $output."<br>";
?>

 <?php
$d = date("d");
$m = date("m");
$y = date("y");
echo $d."-".$m."-".$y
?>


</body>
</html>
