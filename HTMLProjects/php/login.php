<?php

	session_start();
	//Connect to the server and database
	$link = mysqli_connect("localhost", "root", "", "fanclubdb");
	$data = json_decode(file_get_contents("php://input"));
	$outp = "";
	
	if($data != null)
	{
		$username = $data->username;
		$password = $data->password;
		
		//Create query and issue it
		$query = "SELECT * FROM members WHERE (username = '$username') AND (password = '$password')";
		$result = mysqli_query($link, $query);
		
		if(mysqli_num_rows($result) == 1)
		{
			//if authorised, get the values
			$row = $result->fetch_array();
			
			$first_name = $row['first_name'];
			$last_name = $row['last_name'];
			$email = $row['email'];
			$username = $row['username'];
			$password = $row['password'];
			$address = $row['address'];
			$phone = $row['phone'];
			mysqli_close($link);
			
			//save the values in session variables
			$_SESSION['first_name'] = $first_name;
			$_SESSION['last_name'] = $last_name;
			$_SESSION['username'] = $username;
			$_SESSION['email'] = $email;
			$_SESSION['address'] = $address;
			$_SESSION['phone'] = $phone;
			
			$login = true;
			$outp .= '{"login":"'.$login.'",';
			$outp .= '"first_name":"'.$first_name.'",';
			$outp .= '"last_name":"'.$last_name.'",';
			$outp .= '"username":"'.$username.'",';
			$outp .= '"email":"'.$email.'",';
			$outp .= '"address":"'.$address.'",';
			$outp .= '"phone":"'.$phone.'"}';
			
		} else 
		{
			$login = false;
			$outp = '{"login":"'.$login.'")';
		}
		echo($outp);
	}
	
?>