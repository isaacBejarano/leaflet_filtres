<?php

// Trataremos los datos deacuerdo con la especificación 

include("_db.php");

$sql = "SELECT * FROM $table1"; 

$result = $mysqli->query($sql);

// si queremos guardar el número de filas del resultado
// $numrows = $result->num_rows;

echo json_encode($result->fetch_all(MYSQLI_ASSOC));

?>
		