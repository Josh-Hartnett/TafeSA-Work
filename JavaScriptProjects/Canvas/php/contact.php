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
			<li><a class="imActive" href="#">Contact</a></li>
			<li><a href="../html/news.html">News</a></li>
		</ul>
	</nav>
	<section>
		<h1 id="firstHeading" class="blueTxt">Contact us</h1>
		<br /><br />
		<div class = "contactForm">
		<form method="post" action ="getdata.php" onsubmit=" return formValidation()">
		<fieldset>			
				<label for="fullName">Full Name:  </label><input class="text" type="text" name="fullName" id="fullName" onfocus="changeBackground(this)" onblur="resetBackground(this)"/>
				<span id="fullnameError"></span><br />
				<label for="email">Email Address: </label><input class="text" type="text" name="email" id="email"  onfocus="changeBackground(this)" onblur="resetBackground(this)"/>
				<span id="emailError"></span><br />
				<label for="phone">Phone Number: </label><input class="text" type="text" name="phone" id="phone"  onfocus="changeBackground(this)" onblur="resetBackground(this)"/>
				<span id="phoneError"></span><br />
				<label for="message">Message: </label><textarea id="message" maxlength="114" name="message"   onfocus="changeBackground(this)" onblur="resetBackground(this)"></textarea>
				<span id="messageError"></span><br /><br />
				<input type="submit" id="submit" name="submit" value="Submit">
				</fieldset>
		</form>
		<br />
		</div>
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