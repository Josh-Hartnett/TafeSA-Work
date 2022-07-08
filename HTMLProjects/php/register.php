<?php
	//Capture the user inputs from the form
	$email=$_POST['email'];
    $firstName=$_POST['firstName'];
    $lastName=$_POST['lastName'];
	$password=$_POST['password'];
	$repassword=$_POST['repassword'];
	$address=$_POST['address'];
	$phone=$_POST['phone'];
	
	
    //Connect to the server and add a new record 
	require_once('conn_db.php');
	$password = md5($password);
	
	//Define the insert query
    $query = "INSERT INTO customer(customerFirstName, customerLastName, email, password, shippingAddress, phone)
	VALUES ('$firstName', '$lastName', '$email', '$password', '$address', '$phone')";
	
	//Run the query
    mysqli_query($link, $query) or die( "Unable to insert the record");
    mysqli_close($link);
    header("Location:../html/successfulRegistration.html");
	exit;
?>
