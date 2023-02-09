<?php

//echo "<pre>";
//var_dump($_POST);
//echo "</pre>";

$DB_connection = new PDO("mysql:host=localhost;dbname=essai_ajax", "root", "");

$value = $_POST["user_text"];

$query = "INSERT INTO `contents` (`value`) VALUES (?)";

$preparation = $DB_connection->prepare($query);

$preparation->execute( [$value] );

?>