<?php 
	//Set connection: host, username, password, database
	$conn = new mysqli('localhost','root','','tranquil_services');
	
	//Check the connection, if it fails, show the error message.
	if ($conn->connect_error) {
		die("Connection failed: ". $conn->connect_error);
	}
	
	//Select from the staff list table
	$sql = "SELECT * FROM employees";
	
	//Run query, saves variable called results
	$result = $conn->query($sql);
	
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
			<li><a class="imActive" href="#">About</a></li>
			<li><a href="contact.php">Contact</a></li>
			<li><a href="../html/news.html">News</a></li>
		</ul>
	</nav>
	<section>
		<h1 id="firstHeading" class="blueTxt">About us</h1>
		<p>Tranquil Services is a people focused support service, aimed at providing help to those who need it in all aspects of our lives, be it physical, mental, social and financial. Our trained, discreet and caring staff are ready to help and together have years of professional experience in helping others manage the difficulties that one can encountered in life.
		</p><br />
		<br /><hr /><br /><br />
		
		<h2 id="secondHeading" class="blueTxt">Meet our employees</h2>
		<div id = "staff">
			<?php 
				//If there is something in the table..
				if($result->num_rows > 0) {
					//A while loop will cycle through each employee
					while($employee = $result->fetch_assoc()) {
						//Create a new div to display the information
						echo "<div class = 'profileStyle'>";
						/*Insert the picture by grabbing the 'photo' field from our data 
						table using the 'fullname' field as our alt text*/
						echo "<img src='data:image/jpeg;base64, ";
						echo base64_encode( $employee['photo'] );
						echo "'alt = '".$employee['firstName']."'/>";
						
						//Grab the first and last names and display them
						echo "<p><b>".$employee['firstName']." ";
						echo $employee['surname']." - ";
						echo $employee['age']."</b><br />";
						
						//Display the qualifications and close the profile div
					echo $employee['qualifications']."</p></div>";
					}
				} else {
					echo "0 results returned";
				}	
			?>
			
		</div>
	</section>
	<footer>
	<p>
		<i>&#169; ITWorks - by Joshua Hartnett.</i>
	</p>
	</footer>
	
	</div>
	<script src="../js/employeejs.js"></script>
</body>
</html>