<?php
	session_start();
?>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="../css/bootstrap/bootstrap.min.css" >
	<link rel="stylesheet" href="../css/scrolling-nav.css" >
	<link rel="stylesheet" href="../css/animation.css" >
	<link rel="stylesheet" href="../css/font-awesome/css/font-awesome.css" >
	<link rel="stylesheet" href="../css/mystyles.css" >

    <title>001065013 - Joshua Hartnett</title>
	</head>
	<body id="page-top" data-spy="scroll">
	<nav class="navbar navbar-expand-lg navbar-light py-2">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">
				<img src="../images/76ersLogo.jpg" width="60" height="50" alt="">
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarScroll">
				<ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
					<li class="nav-item">
						<a class="nav-link" href="../index.html">Home</a>
					</li>
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="../html/register.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						  Membership
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						  <a class="dropdown-item" href="../html/register.html">Sign up</a>
						  <a class="dropdown-item" href="../html/login.html">Log in</a>
						</div>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="../html/events.html">Events</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="../html/pictures.html">Pictures</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="../html/socialMedia.html">Social Media</a>
					</li>
  
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li class="nav-item"><a class ="nav-link" href="../html/register.html" class="trigger-btn"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg> Sign Up</a></li>
					<li class ="nav-item"><a class = "nav-link active" href="../html/logout.php" class="trigger-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/><path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/></svg> Logout</a></li>
				</ul>
			</div>
		</div>
	</nav>

	<section id="contact" class="contact-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2><strong>Member Page</strong></h2>
			<?php
			$link = mysqli_connect("localhost","root","","fanclubdb");
			
			if(isset($_SESSION['username'])) {
				
				//Read values from session
				$first_name = $_SESSION['first_name'];
				$last_name = $_SESSION['last_name'];
				$username = $_SESSION['username'];
				$email = $_SESSION['email'];
				$address = $_SESSION['address'];
				$phone = $_SESSION['phone'];
				
				echo"<p><h5>Welcome back $first_name $last_name! <br />Your current details: </h5></p>";
				echo"<p><strong>First name:</strong> $first_name</p>";
				echo"<p><strong>First name:</strong> $last_name</p>";
				echo"<p><strong>Username: </strong> $username</p>";
				echo"<p><strong>Email: </strong> $email</p>";
				echo"<p><strong>Home Address: </strong> $address</p>";
				echo"<p><strong>Phone Number: </strong> $phone</p>";
				$query = "SELECT password FROM members WHERE username='$username'";
				
				$result = mysqli_query($link,$query) or die(mysqli_error($link));
				if (mysqli_num_rows($result)== 1) {
					$row = $result->fetch_array();
						//Get password
						$password = $row['password'];
					//Build a HTML form
					echo"<br /><hr /><br /><h4><strong>Update Profile</strong></h4>";
					echo"<div ng-app='myApp' ng-controller='myCtrl'>";
					echo"<form name='myForm' method=post action=update_member.php>";
					echo"<div class='form-group row'><div class='form-group col-md-6'>
							<label for='first_name'>First name</label>
							<input type='text' class='form-control' id='first_name' name='first_name' ng-model='first_name' placeholder='John'><br />
						</div>";
					echo"<div class='form-group col-md-6'>
							<label for='last_name'>Last name</label>
							<input type='text' class='form-control' id='last_name' name='last_name' ng-model='last_name' placeholder='Doe'><br />
						</div></div>";
						
					echo"<div class='form-group row'><div class='form-group col-md-6'>
							<label for='email'>Email Address</label>
							<input type='email' class='form-control' id='email' name='email' ng-model='email' placeholder='JohnDoe42@gmail.com'><br />
						</div>";
					echo"<div class='form-group col-md-6'>
							<label for='username'>Username</label>
							<input type='text' class='form-control' id='username' name='username' ng-model='username' placeholder='JohnRockz'><br />
						</div></div>";

					echo"<div class='form-group row'><div class='form-group col-md-6'>
							<label for='address'>Address</label>
							<input type='text' class='form-control' id='address' name='address' ng-model='address' placeholder='120 Currie Street, Adelaide'><br />
						</div>";
					echo"<div class='form-group col-md-6'>
							<label for='phone'>Phone Number</label>
							<input type='text' class='form-control' id='phone' name='phone' ng-model='phone' placeholder='0000000000'><br />
						</div></div>";
					
					echo"<div class='form-group row'><div class='form-group col-md-12'>
							<label for='password'>Password</label>
							<input type='password' class='form-control' id='password' name='password' ng-model='password' placeholder='*******'><br />
						</div></div><br />";
					echo"<input type =submit name=Update value =Update class='btn btn-primary'/><br /><br />";
					echo"</form>";
					echo"<hr />";
					
					echo"<h3><strong><a href=logout.php>Logout</a></strong></h3>";
				}
			} 
			else {
				header("Location:login.html");
				exit;
			}
			?>
			<script>
			</script>
			</div>
        </div>
      </div>
    </section>
		
	<footer class="text-center text-lg-start" style="background-color: #db1e32;font-weight: normal;">
		<div class="container p-4">
			<div class="row">
				<div class="col-lg-6 col-md-12 mb-4 mb-md-0">
					<h5 class="text-uppercase"><strong>Our team</strong></h5>
					<p>
						  The Philadelphia 76ers are an American professional basketball team based in the Philadelphia 
						  metropolitan area. The 76ers compete in the National Basketball Association as a member of the 
						  league's Eastern Conference Atlantic Division and play at the Wells Fargo Center.
					</p>
				</div>
				<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
					<h5 class="text-uppercase"><strong>Navigation</strong></h5>
					<ul class="list-unstyled mb-0">
						<li>
							<a href="../index.html" class="text-light">Home</a>
						</li>
						<li>
							<a href="../html/register.html" class="text-light">Membership</a>
						</li>
						<li>
							<a href="../html/events.html" class="text-light">Events</a>
						</li>
						<li>
							<a href="../html/pictures.html" class="text-light">Pictures</a>
						</li>
						<li>
							<a href="../html/socialMedia.html" class="text-light">Social Media</a>
						</li>
					</ul>
				</div>

				<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
					<h5 class="text-uppercase mb-0"><strong>Social Media</strong></h5>

					<ul class="list-unstyled">
						<li>
							<a href="https://www.facebook.com/" target="_blank" class="fa fa-facebook text-light"></a>
							<a href="https://twitter.com/" target="_blank" class="fa fa-twitter text-light"></a>
						</li>
						<li>
							<a href="https://www.reddit.com/" target="_blank" class="fa fa-reddit text-light"></a>
							<a href="https://www.youtube.com/" target="_blank" class="fa fa-youtube text-light"></a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
  <!-- Copyright -->
	<div class="text-center p-3" style="background-color: #e5e5e5;">
		© 2021: ITWorks, Joshua Hartnett
	</div>
	
    <script src="../js/jquery/jquery-3.5.1.min.js"></script>
	<script src="../js/jquery/jquery.easing.1.3.js"></script>
    <script src="../js/bootstrap/bootstrap.bundle.min.js"></script>
	<script src="../js/scrolling-nav.js"></script>
	<script src="../js/picturefill.js"></script>
	<script src="../js/formValidation.js"></script>
	
  </body>
</html>