<?php
	
	$server = "localhost";
	$user = "root";
	$password = "";
	$database = "productsandorders";
	
	// Create connection
	$link = mysqli_connect ($server, $user, $password, $database)
	or die("Error ". mysqli_error($link));

	echo "Connected to $database <br />";

?>