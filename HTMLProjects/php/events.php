<!doctype html>
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

	<script src="https://maps.googleapis.com/maps/api/js?key=&callback=myMap"></script>
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
						<a class="nav-link dropdown-toggle" href="register.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						  Membership
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						  <a class="dropdown-item" href="../html/register.html">Sign up</a>
						  <a class="dropdown-item" href="../html/login.html">Log in</a>
						</div>
					</li>
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="#">Events</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="../html/pictures.html">Pictures</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="../html/socialMedia.html">Social Media</a>
					</li>
  
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li class="nav-item"><a class ="nav-link" href="../html/register.html" class="trigger-btn" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg> Sign Up</a></li>
					<li class ="nav-item"><a class = "nav-link" href="../html/login.html" class="trigger-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/><path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/></svg> Login</a></li>
				</ul>
			</div>
		</div>
	</nav>
	
	
	
	<div class ="container"><br />
		<h1 class="text-center">Events</h1><br />
		<div ng-app="myApp" ng-controller="myCtrl">
		<div class="row">
			<div class="col-md-12">
				<form method="post">
				<div class="input-group">
					<select  class="form-control" name="theVenue" style="" ng-model="test">
						<option value="{{undefined}}">All venues</option>
				<?php

				 $link = mysqli_connect("localhost", "root", "", "fanclubdb");
				 $query = "SELECT * FROM events";
				 $result = mysqli_query($link, $query);
				 
				 while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
				 {
					 $venue_name = $row['venue_name'];
					 echo "<option value='$venue_name'>$venue_name</option>";
				 }
				 mysqli_close($link);
				?>
				</select>
				</div>
				</form>
				
			</div>
			
			
		</div>
		
		
		<hr />
		

			<div class="container" style="background-color: #db1e32; border-radius: 5px;">
			<br />
				<div ng-repeat="x in books | filter:test" >
					<div class="card" >
						<div class="card-body">
							<h5 class="card-title"><a href="#map">{{x.Name}}</a></h5>
							<h6 class="card-subtitle mb-2 text-muted">{{x.Venue}} <br />{{x.Date}}</h6>
							<p class="card-text">{{x.Description}}</p>
						</div>
					</div><br />
				</div>
				<br /><hr /><br />
				<h4 class="text-center" style="color:white;"><strong>Click the markers on the map to see event locations</strong></h4>
				<div id="map" style="width:100%;height:400px;"></div><br />
			</div>
		</div>
		
		<br /><br />

		<script>
		 var locations = [
				['United Center, Chicago', 41.881832, -87.623177, 6],
				['Toyota Center, Houston', 29.7505, -95.3573, 5],
				['Bankers Life Fieldhouse, Indianapolis', 39.7583, -86.1533, 4],
				['American Airlines Arena, Miami', 25.7755,  -80.1862, 3],
				['Wells Fargo Center, Philadelphia', 39.9007, -75.1698, 2],
				['Pennsylvania', 41.2033, -77.1945, 1],
			];


			var map = new google.maps.Map(document.getElementById('map'), {
			  zoom: 4,
			  center: new google.maps.LatLng(37.839333, -84.270020),
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			});

			var infowindow = new google.maps.InfoWindow();

			var marker, i;

			for (i = 0; i < locations.length; i++) {  
			  marker = new google.maps.Marker({
				position: new google.maps.LatLng(locations[i][1], locations[i][2]),
				map: map
			  });

			  google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
				  infowindow.setContent(locations[i][0]);
				  infowindow.open(map, marker);
				}
			  })(marker, i));
			}
				
			//https://stackoverflow.com/questions/3059044/google-maps-js-api-v3-simple-multiple-marker-example method used from 

		</script>
	</div>
	
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
							<a href="#" class="text-light">Events</a>
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
	
	<script>
	var app = angular.module("myApp", [])
	app.controller("myCtrl", function($scope, $http) {
		$http.get("showEvents.php")
		.then(function (response) {$scope.books = response.data.records;});
		});
</script>
	
  </body>
</html>