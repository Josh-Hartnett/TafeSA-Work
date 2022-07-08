<?php 
		//Set connection: host, username, password, database
		$conn = new mysqli('localhost','root','','tranquil_services');
		
		//Check the connection, if it fails, show the error message.
		if ($conn->connect_error) {
			die("Connection failed: ". $conn->connect_error);
		}
		
		//Select from the staff list table
		$sql = "SELECT * FROM contact";
		
		//Run query, saves variable called results
		$result = $conn->query($sql);
		
		//If we submit our form:
		if(isset($_POST['submit'])) {
			$fullName = mysqli_real_escape_string($conn, $_REQUEST['fullName']);
			$email = mysqli_real_escape_string($conn, $_REQUEST['email']);
			$phone = mysqli_real_escape_string($conn, $_REQUEST['phone']);
			$message = mysqli_real_escape_string($conn, $_REQUEST['message']);
			
			$sql = "INSERT INTO contact(fullName, phoneNum, email, message, employeeResponded) VALUES ('$fullName', '$phone', '$email', '$message', '0')";
			
			if(mysqli_query($conn, $sql)) {
				echo "";
			} else {
				echo "<p>ERROR: Was not able to execute $sql. ";
				echo mysqli_error($conn) . "</p>";
			}
		}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>Tranquil Services</title>
	<meta charset="utf-8" />
	<link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Arapey' rel='stylesheet'>
	<link href='https://fonts.googleapis.com/css?family=Hanuman' rel='stylesheet'>
	<link rel="stylesheet" type="text/css" href="../css/style.css" />
</head>
<body>
	<div id="container">
	<header>
	</header>
	<!--Navigation for website. Includes logo which animates when on home page.-->
	<nav>
	<img class = "logo" src="../images/logo.png" alt="Tramquil Services logo" />
		<ul>
			<li><a href="../index.html">Home</a></li>
			<li><a href="../php/about.php">About</a></li>
			<li><a class="imActive" href="../html/news.html">Contact</a></li>
			<li><a href="../html/news.html">News</a></li>
		</ul>
	</nav>
	<section>
		<h1 id="firstHeading" class="blueTxt">Your message was sent!</h1>
		<br />
		<p>Thank you for your message. Our team will be in contact soon.</p>
	</section>
	<footer>
	<p>
		<i>&#169; ITWorks - by Joshua Hartnett.</i>
	</p>
	</footer>
	
	</div>
	<script src="../js/javascript.js"></script>
</body>
</html>