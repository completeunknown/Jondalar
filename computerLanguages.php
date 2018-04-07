<?php
    header("content-type: text/xml");
    $output = "<?xml version='1.0'?>";
    $output .= "<computerLanguages>";
    $output .= "<language>";
    $output .= "<name>Basic</name>";
    $output .= "<platform>Commodore</platform>";
    $output .= "<platform>IBM PC</platform>";
    $output .= "</language>";
    $output .= "<language>";
    $output .= "<name>Objective C</name>";
    $output .= "<platform>Macintosh</platform>";
    $output .= "<platform>NeXT</platform>";
    $output .= "</language>";
    $output .= "<language>";
    $output .= "<name>Visual Basic</name>";
    $output .= "<platform>IBM PC</platform>";
    $output .= "</language>";
    $output .= "</computerLanguages>";
    print($output);
?>