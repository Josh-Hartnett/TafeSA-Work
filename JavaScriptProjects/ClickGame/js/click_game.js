/*Joshua Hartnett 
31/08/2020. 
5JSI - Click Game assignment.*/
function setupCanvas(){
	var canvas = document.getElementById('session7');
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		//initialising variables
		var timer;
		var clicker;
		var score = 0;
		var highScore = [];
		
		//drawing the background
		ctx.fillStyle = 'rgb(200,100,255)';
		ctx.rect(100, 100, 100, 100);
		ctx.fill();
		
		document.getElementById('changer').addEventListener("click", startGame);
		document.getElementById('restart').addEventListener("click", resetGame);
		//We need two event listeners, one for starting the game and one for resetting the game. These both call different functions.
		
		/*START GAME*/
		function startGame(){
		canvas.addEventListener("click", mousePos); 
		/*We have added an event listener to check if the user is clicking within the purple box or not. This calls the
		mousePos function when the user clicks inside the canvas to check the coordinates of the mouse.*/
		
		
		window.setTimeout(stopGame, 10000);
		//This timer runs for 5 seconds (5000 milliseconds), and calls the stopGame function once the 5 seconds has passed. 
		}
		
		/*STOP GAME*/
		function stopGame(){
			var userName = document.getElementById("name").value; //Get the username inputted into the "name" textbox
			var user = []; //Create the user array within the stop game function so we don't have duplicating arrays. 
			
			clicker = canvas.removeEventListener("click", mousePos);
			//use removeEventListener to stop the mousePos function from being called on click of the canvas
			
			user.push(score);
			user.push(userName);
			
			highScore.push(user);
			/*Here we push the users score and username into the user array. This creates 'details' for the current
			user. Next, we push the user array into the highScore array, so then we can create a list of the users
			and their scores. This creates a 2D array. 
			
			We can't use the user array, as it is being reset each time the stop game function is called. If we didn't 
			do it like this, each time the user array is pushed into the highScore array, we would be inputting the same 
			information over and over, and have duplicates. */
			
			highScore.sort(function(a,b){
				return b[0] - a[0];	
			});
			/*Above we use the sort() function to organise the scores by highest to lowest.
			We compare the values of the scores e.g: b[0] - a[0] to organise them by the highest to lowest. Since 
			we organise the scores here, we can then figure out the high score, as it will always be the first value 
			in the array.*/
			 
			
			var output = document.getElementById("output");
			output.innerHTML = "The high score is: "+ highScore[0][0] +". Your score is: "+score;
			/*Here we get an element from the HTML document, to then write text to it. We use the first value in the highScore
			array e.g: highScore[0][0], as this is the highest score. We know this because of the sort() we used earlier. Then,
			we simply tell the user their score.*/
			
			
			console.log(highScore);
			/*The user cannot see what this does, unless they use the web developer tools. This is simply to check if the 
			arrays are populating as they are supposed to.*/
			
			
			outputScores();
			ctx.clearRect(50, 250, 500, 500); 
			score = 0;
			/*Here we call the outputScores() function, to create a table of the scores. Then, we use 
			clearRect, to remove the fillText that was drawn onto the canvas. If we didn't do this, then the next
			play to play would have their score overlapping the last user, making the scores unreadable.
			
			We then finally reset the score to 0, so the next player doesn't start at the last users score.*/
			
		}
		
		/*RESET GAME */
		function resetGame() {
			var gameTable = document.getElementById("tableList");
			var output = document.getElementById("output");
			//Get the two outputs we use to show the user results, so we can clear them.
			
			output.innerHTML = "";
			gameTable.innerHTML = "";
			//Clear the text. 
			
			highScore = [];
			//Empty highScore array
			
			score = 0;
		}
		
		/*MOUSE POSITION CHECK*/
		function mousePos(e){
			if (e.offsetX>100 && e.offsetX<200 && e.offsetY>100 && e.offsetY<200){
				//Above an if statment is used to check if the user clicked within the purple box, if they did the code beneath will be executed.
				
				score++;
				//Increment score
				
				ctx.clearRect(50, 250, 500, 500); 
				//We reset the specific area to remove the fillText from before. If this isn't done the fillText will overlap.
				
				ctx.fillText("Your score is: "+score,100,300);
				//Displays the users current score.
			}
		}
		
		/*CREATE GAME TABLE*/
		function outputScores() {
			var gameTable = document.getElementById("tableList");
			var content = "<table><tr><th>High Scores </th><th>Usernames</th></tr>";
			//We get the element from the HTML code to add code to it. Then we create a content variable to create a table later.
		
		for(var i = 0; i < highScore.length; i++){ 
			content += "<tr><td>" + highScore[i][0] + "</td>";
			content += "<td>" + highScore[i][1] + "</td></tr>";
		}
		//This will continually loop as long as i is less than the length of highScore to populate the table with users information. 
		
		content += "</table>";
		//Also add end table so code doesn't break
		
		gameTable.innerHTML = content;
	}
	}
}
/*Troubleshooting: 
My main method for troubleshooting with this JavaScript code was to use the console.log(highScore). Since we are working with arrays,
I constantly needed to check what the arrays were actually being populated with, and I found it wasn't always what I expected.
This helped massively in fixing the code, as otherwise it would be hard to check.*/