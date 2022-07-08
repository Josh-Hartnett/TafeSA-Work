/*Joshua Hartnett - 001065013*/

/*BEGIN JavaScript for home page
The first piece of code allows the user to 'open' the button elements on the home page. I followed
the instructions found here: https://www.w3schools.com/howto/howto_js_collapsible.asp to create this. */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//When the body loads, execute the setupCanvas function.
document.body.onload=setupCanvas();

function setupCanvas(){
	var canvas = document.getElementById('canvas');
	var ctx;
	
	/*First I create the variables for the x and y positions of each circle. These will be called 
	upon later in their respective functions.*/
	var redX = 512;
	var redY = 700;
	var blueX = -155; 
	var blueY = 75;
	var greenX = 1180;
	var greenY = 75;
	
	//Create a variable for a timer.
	var drawTimer;
	
	
	if (canvas.getContext) {
		ctx = canvas.getContext("2d");
		
		//Create function to draw the red circle. 
		function drawRedCircle() {
			ctx.beginPath();
			//This creates a full circle at the previously stated x & y positions, at a size of 25 px, with a stroke of 6px.
			ctx.arc(redX, redY, 25, 0, 2 * Math.PI);
			ctx.lineWidth = 6;
			ctx.strokeStyle = "#c21a43";
			ctx.stroke(); 
		}
		
		//Create function to draw the blue circle.
		function drawBlueCircle() {
			ctx.beginPath();
			//This creates a full circle at the previously stated x & y positions, at a size of 25 px, with a stroke of 6px.
			ctx.arc(blueX, blueY, 25, 0, 2 * Math.PI);
			ctx.lineWidth = 6;
			ctx.strokeStyle = "#4774CE";
			ctx.stroke(); 
		}
		
		//Create function to draw the green circle.
		function drawGreenCircle() {
			ctx.beginPath();
			//This creates a full circle at the previously stated x & y positions, at a size of 25 px, with a stroke of 6px.
			ctx.arc(greenX, greenY, 25, 0, 2 * Math.PI);
			ctx.lineWidth = 6;
			ctx.strokeStyle = "#2c981d";
			ctx.stroke(); 
		}
		
		//Create a function to draw the Tranquil Services text onto the canvas. 
		function drawText() {
			ctx.fillStyle = 'black'; 
			ctx.font = 'italic bold 35px Arial';
			ctx.textAlign = 'left';
			ctx.fillText('Tranquil', 550, 60);
			ctx.fillText('Services', 565, 90);
		}
		
		//Create a function that draws a rectangle spanning across the canvas.
		function drawBackground() {
			ctx.fillStyle = "white";
			ctx.fillRect(135, 0, 100 * canvas.height, 300);
		}
		
		//This function is created to clear the circles from the canvas. This effectively gives us a blank canvas.
		function removeCircles() {
			ctx.fillStyle = "white";
			ctx.fillRect(0, 0, 1500, 1500);
		}
		//Set the drawTimer variable to call the function draw every 10 milliseconds
		drawTimer = window.setInterval(draw, 10);
	}
	
	
	//The drawTimer is now calling the draw() function every 10 milliseconds..
	function draw(){

		/*Call the removeCircles() function, which simply draws over the top of anything on the current canvas. 
		Since it is the same colour as the background however, it gives the effect of clearing the canvas.*/
		removeCircles();
		
		//Draw each circle 
		drawBlueCircle();
		drawRedCircle();
		drawGreenCircle();
		
		//If redY is not equal to 50 (we know it isn't)
		if(redY != 50) {
			
			redY -= 5;
			blueX += 5;
			greenX -= 5;
			
			/*This will lower the redY position, greenX position and increase the blueX position by 5 every 10 milliseconds
			until the redY is equal to 50. This code is what makes the circles move onto the page.*/
			
		} else {
			
			/*Else (or really once redY is equal to 50), call the drawBackground() function to draw a white background like the one on the logo 
			for Tranquil Services, and call the drawText() function to write 'Tranquil Services'. Having these two functions 
			execute after redY is equal to 50, means that the background and text will not appear until the circles have finished animating.*/
			drawBackground();
			drawText();
			
			/*We have to draw the circles again otherwise they will be removed with our removeCircles() function*/
			drawBlueCircle();
			drawRedCircle();
			drawGreenCircle();
		}
	}
}
/*END JavaScript for home page*/

/*BEGIN JavaScript for contact page */
function formValidation() {
	//Get input variables to later validate.
	var fullname = document.getElementById("fullName");
	var email = document.getElementById("email");
	var phone = document.getElementById("phone");
	var message = document.getElementById("message");
	
	//Get span element variables to later output error messages.
	var fullnameError = document.getElementById("fullnameError");
	var emailError = document.getElementById("emailError");
	var phoneError = document.getElementById("phoneError");
	var messageError = document.getElementById("messageError");
	
	//If the fullname has no input:
	if (fullname.value=="")
	{
		//Make the fullname error text color red, and display full name required.
		fullnameError.style.color="red"
		fullnameError.innerHTML = "Full name required";
		fullname.focus();
		return false;
	}
	//Once the change has been made, remove the error.
	fullnameError.innerHTML = "";
	
	//If the email input is empty: 
	if (email.value=="")
	{
		//Make the email error text color red, and display email address required
		emailError.style.color = "red"
		emailError.innerHTML = "Email address required";
		email.focus();
		return false;
	}
	//Once the change has been made, remove the error.
	emailError.innerHTML = "";
	
	//If the phone num input is empty:
	if (phone.value=="")
	{
		//Make the phone error text color red, and display phone number is required.
		phoneError.style.color="red"
		phoneError.innerHTML = "Phone number is required";
		phone.focus();
		return false;
	}
	phoneError.innerHTML = "";
	
	//If the message input is empty:
	if (message.value=="")
	{
		//Make the message error text color red, and display please enter a message. 
		messageError.style.color="red"
		messageError.innerHTML = "Please enter a message";
		message.focus();
		return false;
	}
	messageError.innerHTML = "";
}

//The code below will change the background colour of the input fields depending on their situation.
//This function changes the background to a gray colour when it is clicked on.
function changeBackground(textField)
{
	textField.style.background="#f2f2f2";
}
//This function effectively clears that gray and changes the input field to white when the user clicks out of that field.
function resetBackground(textField)
{
	textField.style.background="white";
}

/*END JavaScript for contact page*/