<?php

include("../env/_config.php"); // + $table1

$mysqli = new mysqli('localhost', $user, $user_pass, $db_name); // 127.0.0.1

if ($mysqli->connect_errno) {
    echo "Lo sentimos, este sitio web está experimentando problemas.";
    echo "Error: Fallo al conectarse a MySQL debido a: \n";
    echo "Errno: " . $mysqli->connect_errno . "\n";
    echo "Error: " . $mysqli->connect_error . "\n";
    exit;
}

$mysqli->set_charset("utf8"); 

?>
