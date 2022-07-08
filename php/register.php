<?php
	//Connect to the server and database
	$link = mysqli_connect("localhost", "root", "", "fanclubdb");
	$data = json_decode(file_get_contents("php://input"));
	if($data != null)
	{
		//$ISBN = mysqli_real_escape_string($link, $data->isbn);
		$first_name = $data->first_name;
		$last_name = $data->last_name;
		$email = $data->email;
		$username = $data->username;
		$password = $data->password;
		$address = $data->address;
		$phone = $data->phone;
		
		$query = "SELECT * FROM members WHERE (username = '$username')";
		$result = mysqli_query($link, $query);
		if(mysqli_num_rows($result) == 1) {
			$message="Username is taken";
		} 
		
		if($username == null) {
			$message = "Username should not be blank";
		} 
		else 
		{
			$query = "INSERT INTO members VALUES ('$first_name', '$last_name', '$email', '$username', '$password', '$address', '$phone')";
			if(mysqli_query($link, $query)) 
			{
				$message = "Successful registration, thanks for joining!";
			} 
			else 
			{
				$message = "Error";
			}
		}
	}
	echo $message;
	mysqli_close($link);
?>