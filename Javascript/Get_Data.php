<?php
$DB_connection = new PDO("mysql:host=localhost;dbname=essai_ajax", "root", "");

$query = "SELECT `value` FROM `contents`";

$result = $DB_connection->query($query);

$tlbresult = $result ->fetchAll();



 foreach($tlbresult as $row)
 {
    echo "<p>".nl2br($row["value"])."</p>";
 }





?>