<?php
    $value = $_REQUEST['num'];
    for($i = 0; $i < 13; $i++)
    {
        print($value . " * " . $i . " = " . ($i*$value));
        print("<br/>");
    }
?>