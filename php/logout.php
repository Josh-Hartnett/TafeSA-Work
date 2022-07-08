<?php
	session_start();
	//Distroy the session
	if (isset($_SESSION['email'])) {
		unset($_SESSION['email']);
		session_destroy();
		//Redirect user back to the login page
		header("Location:../html/login.html");
		exit();
	} else {
		header("Location:../html/login.html");
		exit();
	}
?>
