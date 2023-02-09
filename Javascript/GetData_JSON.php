<?php
$DB_connection = new PDO("mysql:host=localhost;dbname=essai_ajax", "root", "");

$query = "SELECT * FROM `contents`";

$result = $DB_connection->query($query);

$tlbresult = $result ->fetchAll();

echo json_encode($tlbresult);







?>