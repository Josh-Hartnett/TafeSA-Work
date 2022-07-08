<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");

	//Connect to the server / database
	$link = new mysqli("localhost", "root", "", "fanclubdb");
	$query = "SELECT * FROM events";
	$result = mysqli_query($link, $query) or die ("Query failed!");
	
	//Get books
	$outp = "";
	while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
		
	  if ($outp != "") {$outp .= ",";}
	  $outp .= '{"Name":"'  . $row["event_name"] . '",';
	  $outp .= '"Description":"'   . $row["description"]        . '",';
	  $outp .= '"Venue":"'   . $row["venue_name"]        . '",';
	  $outp .= '"Date":"'. $row["date"]     . '"}';
	}
	$outp ='{"records":['.$outp.']}';
	echo($outp);
	mysqli_close($link);

?>