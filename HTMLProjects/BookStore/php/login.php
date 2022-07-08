<?php
//start the new session
session_start();
//Read the email and the password
$email = $_POST['email'];
$password=$_POST['password'];

	//connect to server and select database
	require_once('conn_db.php');
	$password = md5($password);
   
	//Create a select query to select user details using the email and the password
	$query = "SELECT * FROM customer WHERE email = '$email' AND password = '$password'";
	$result = mysqli_query($link, $query) or die( "Invalid Customer ID or Password");

	//get the number of rows in the result set; should be 1 if a match
	if (mysqli_num_rows($result) == 1) {
   		//if authorized, get the values of firstname lastname, phone and email
    	$row = $result->fetch_array();
		$customerFirstName = $row['customerFirstName'];
		$customerLastName = $row['customerLastName'];
		$phone = $row['phone'];
		$email = $row['email'];
		
		//save the values in session variables
		$_SESSION['customerFirstName'] = $customerFirstName;
		$_SESSION['customerLastName'] = $customerLastName;
		$_SESSION['phone'] = $phone;
		$_SESSION['email'] = $email;
		
		header("Location:../html/successfulLogin.html");
		
	}
	else
		{
			header("Location:../html/login.html");
	exit();
		}
mysqli_close($link);
?>
