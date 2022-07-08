/*Joshua Hartnett 
31/08/2020. 
5JSI - Flower Arrays assignment.*/
document.body.onload=setupCanvas();
function setupCanvas(){
	var canvas = document.getElementById('assignment');

	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		//create array variables
		var xPositions = [];
		var yPositions = [];
		var colors = [];
		var speed = [];
		var size = [];
		
		//initialise arrays with 20 objects with random x and y, color, speed and size
		for (var i = 0; i < 20; i++) { //While the i variable is less then  20, the number of objects we want execute the following code: 
			xPositions.push(Math.random() * 900);
			yPositions.push(Math.random() * 600);
			colors.push(randomColor());
			speed.push(randomSpeed());
			size.push(randomSize());
		/*The push() function allows us to pass a value in the parenthesis that we wish to add to an array. The push() function will 
		add the value to the end of the array it's applied to.
		
		array.push(value);
		
		Above we use the .push function multiple times to assign values to our arrays. For example, we use .push on the xPositions variable to assign it 
		a value of the result of Math.random * 900. We also use the push function to call functions, for example: We use speed.push(randomSpeed()); so 
		the speed array can have the randomSpeed() result inputted into it.*/
	
		}
		// add code here to create the flowers on the canvas
		
		
		//start drawing the flowers
		window.setInterval(draw, 50);
		function draw() {
			//redraw background 
			ctx.fillStyle='rgb(210,200,255)';
			ctx.rect(0,0,500,500);
			ctx.fill();
			//cycle through arrays and use values to draw flowers
			for (var i = 0; i < xPositions.length; i++) {
				//fills with color values from colours array
				ctx.fillStyle = colors[i];
				//draws petals
				ctx.beginPath();
				ctx.arc(xPositions[i]-size[i], yPositions[i]-size[i], size[i]*1.35, 0, Math.PI * 2, false);
				ctx.fill();
				ctx.beginPath();
				ctx.arc(xPositions[i]-size[i], yPositions[i]+size[i], size[i]*1.35, 0, Math.PI * 2, false);
				ctx.fill();
				ctx.beginPath();
				ctx.arc(xPositions[i]+size[i], yPositions[i]-size[i], size[i]*1.35, 0, Math.PI * 2, false);
				ctx.fill();
				ctx.beginPath();
				ctx.arc(xPositions[i]+size[i], yPositions[i]+size[i], size[i]*1.35, 0, Math.PI * 2, false);
				ctx.fill();
				ctx.beginPath();
				ctx.arc(xPositions[i], yPositions[i], size[i], 0, Math.PI * 2, false);
				ctx.fill();
				//draws centre of flower
				ctx.beginPath();
				//uses a second color
				ctx.fillStyle = colors[i+1];
				ctx.arc(xPositions[i], yPositions[i], size[i], 0, Math.PI * 2, false);
				ctx.fill();
				//increases the y position of the flowers every loop
				//yPositions[i] += speed[i];
				
				//if the flower is off the stage
				if(yPositions[i]>600){
					//offsets the y position to a random negative number
					//instead of just resetting to zero
					var randomY=Math.random()*-350;
					yPositions[i]=randomY;
					}else{
					//if the flower is still on the canvas
					//increase the y position by the flower speed
					yPositions[i] += speed[i];
				}
			}	
		};
		
		//generate random color function
		function randomColor(){
			var r = Math.floor(Math.random() * 256);
			var g = Math.floor(Math.random() * 256);
			var b = Math.floor(Math.random() * 256);
			return "rgb(" + r + "," + g + "," + b + ")"; 
		/*The code above will randomly generate 3 whole numbers between 1 and 255. We need a number between 1 and 255, so we use 
		Math.random() * 256, as the Math.random() function is exclusive, meaning it will never generate 256 in this case. 
		
		After it generates the 3 numbers, we then use the return function to give us a final colour in the value of a string using 
		the values we generated earlier. */
		};
		
		//generate random number between 5 and 40
		function randomSize(){
			return Math.floor(Math.random() * 36 + 5);
		/*This will generate a random whole number between 5 and 40.
		
		The Math.random() function will generate a random decimal number, so we then use Math.floor to round down to the nearest
		whole number. */
		}
		
		//generate the random speed
		function randomSpeed(){
			return Math.floor(Math.random() * 8 + 1);
		/*Same as above except this time we are generating a random number between 1 and 8.*/
		}
				
		//event listener to run function removeFlower on click of the canvas
		document.getElementById('changer').addEventListener("click", removeFlower); 
		//This finds the id 'changer' (in this case a button), and executes the removeFlower function when it has been clicked on by the user. 
		function removeFlower(){
			//removes a flower from the arrays on click of button
			xPositions.splice(0, 1);
			yPositions.splice(0, 1);
			colors.splice(0, 1);
			speed.splice(0, 1);
			size.splice(0, 1);
		/*Above we use the splice function to remove values from our arrays. This allows us to supply values within the parenthesis, which takes two values.
		Both of these values need to be numbers. The first number is the position in the array, and the second number is how many items will
		be removed. 
		
		array.splice(0, 1);
		
		We are stating in the code above to remove the first item in the array and nothing else. 
		*/
		}
		console.log(size);
	}	
}
/*Troubleshooting: 
My main method for troubleshooting JavaScript code is going into the browser and goign onto the web
console. From here I check to see if there are any immediate errors. Another useful method to check what is
actually in the arrays, is by using console.log. This is as simple as console.log(colors);*/