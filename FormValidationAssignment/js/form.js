/* JOSHUA HARTNETT, JavaScript for Forms. 

The function getData() retrieves the users input every 3 seconds and saves it to the local storage...
This is done incase the users browser unexpectedly crashes. 
However, this only works if the form has autocomplete on. 

Feedback -

Hi Josh,
Great work with the commenting. Nice and detailed. You have my approval to use that for your final submission.
Well done.
Heath


*/ 
var myInterval = setInterval(savedata, 3000); //The code to save the users input every 3000 miliseconds.


function setData(){
    var username = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
	var email = document.getElementById("email").value;
	var firstLastName = document.getElementById("firstLastName").value;
	var phone = document.getElementById("phone").value;
	var website = document.getElementById("website").value;
	var age = document.getElementById("age").value;
	var suburb = document.getElementById("suburb").value;
	var city = document.getElementById("city").value;
	var country = document.getElementById("country").value;
	var state = document.getElementById("state").value;
	var postcode = document.getElementById("postcode").value;
		
	
	localStorage.setItem("username", username);
    localStorage.setItem("pass", pass);
	localStorage.setItem("email", email);
	localStorage.setItem("firstLastName", firstLastName);
	localStorage.setItem("phone", phone);
	localStorage.setItem("website", website);
	localStorage.setItem("age", age);
	localStorage.setItem("suburb", suburb);
	localStorage.setItem("city", city);
	localStorage.setItem("country", country);
	localStorage.setItem("state", state);
	localStorage.setItem("postcode", postcode);

	
}

function getData() { //declare the function to retrieve user data. This is called when the body is loaded. 'body onload="getData()'.
	var username = localStorage.getItem("username");
	var pass = localStorage.getItem("pass");
	var email = localStorage.getItem("email");
	var firstLastName = localStorage.getItem("firstLastName");
	var phone = localStorage.getItem("phone");
	var website = localStorage.getItem("website");
	var age = localStorage.getItem("age");
	var suburb = localStorage.getItem("suburb");
	var city = localStorage.getItem("city");
	var country = localStorage.getItem("country");
	var state = localStorage.getItem("state");
	var postcode = localStorage.getItem("postcode");
	
	
	document.getElementById("username").value = username;
	document.getElementById("pass").value = pass;
	document.getElementById("email").value = email;
	document.getElementById("firstLastName").value = firstLastName;
	document.getElementById("phone").value = phone;
	document.getElementById("website").value = website;
	document.getElementById("age").value = age;
	document.getElementById("suburb").value = suburb;
	document.getElementById("city").value = city;
	document.getElementById("country").value = country;
	document.getElementById("state").value = state;
	document.getElementById("postcode").value = postcode;
} //End function getData()


function validateErrors()	{//Declare function to validate errors.
	
	/*START username variables.*/
	username = document.getElementById('username'); //Retrieve username variable from html document.
	usernameError = document.getElementById('usernameError'); //Retrieve usernameError from html document.
	var usernamePattern= new RegExp(""+username.pattern+""); //Retreieve username pattern. This is done to test the users input against the pattern.
	/*END username variables.*/


	/*BEGIN USERNAME VALIDATION*/
	if(!usernamePattern.test(username.value)) { //If the users input is not equal to the username pattern, do the following:
	username.style.background ='#FF9999'; //Turn background red.
	usernameError.style.display = "block";
	usernameError.innerHTML= "Username must be between 8-12 <u>letters</u>. E.G: JoshuaHA"; //Display this text beneath the username input.
	username.focus(); //Focus on the username input
	return false;
	} else { //If the user input matches the pattern, do:
	username.style.background ='#CCFFCC'; //Turn username background green.
	usernameError.innerHTML= ""; //Remove error text.
	usernameError.style.display = "none";
	}
	/*END USERNAME VALIDATION*/
	
	
	/*START pass variables.*/
	pass = document.getElementById('pass');
	passError = document.getElementById('passError');
	var passPattern = new RegExp(""+pass.pattern+"");
	/*FINISH pass variables.*/

	/*BEGIN PASS VALIDATION*/
	if (!passPattern.test(pass.value))	{
	pass.style.background ='#FF9999';
	passError.style.display = "block";
	passError.innerHTML= "Password must contain a uppercase and lowercase letter, as well as a number and symbol. While also being 6 characters, E.G: Jo$5ua";
	pass.focus();
	return false;
	} else {
	pass.style.background ='#CCFFCC';
	passError.innerHTML= "";
	passError.style.display = "none";
	}
	/*END PASS VALIDATION*/
	
	
	/*START email variables.*/
	email = document.getElementById('email');
	emailError = document.getElementById('emailError');
	var emailPattern = new RegExp(""+email.pattern+"");
	/*END email variables.*/
	
	/*BEGIN EMAIL VALIDATION*/
	if (!emailPattern.test(email.value))	{
	email.style.background ='#FF9999';
	emailError.style.display = "block";
	emailError.innerHTML= "Email must include an @ symbol and full stop. E.G: joshywashy@gmail.com";
	email.focus();
	return false;
	} else {
	email.style.background ='#CCFFCC';
	emailError.innerHTML= "";
	emailError.style.display = "none";
	}
	/*END EMAIL VALIDATION*/
	
	/*START firstLastName variables.*/
	firstLastName = document.getElementById('firstLastName');
	firstLastNameError = document.getElementById('firstLastNameError');
	var firstLastNamePattern = new RegExp(""+firstLastName.pattern+"");
	/*END firstLastName variables.*/
	
	/*BEGIN NAME VALIDATION*/
	if (!firstLastNamePattern.test(firstLastName.value))	{
	firstLastName.style.background ='#FF9999';
	firstLastNameError.style.display = "block";
	firstLastNameError.innerHTML= "First name and last name must start with a capital letter. E.G: Barack Obama";
	firstLastName.focus();
	return false;
	} else {
	firstLastName.style.background ='#CCFFCC';
	firstLastNameError.innerHTML= "";
	firstLastNameError.style.display = "none";
	}
	/*END NAME VALIDATION*/
	
	
	/*START phone variables.*/
	phone = document.getElementById('phone');
	phoneError = document.getElementById('phoneError');
	var phonePattern = new RegExp(""+phone.pattern+"");
	/*END phone variables.*/
	
	/*BEGIN PHONE VALIDATION*/
	if (!phonePattern.test(phone.value))	{
	phone.style.background ='#FF9999';
	phoneError.style.display = "block";
	phoneError.innerHTML= "Phone number must be valid, please include dashes. E.G: 00-0000-0000";
	phone.focus();
	return false;
	} else {
	phone.style.background ='#CCFFCC';
	phoneError.innerHTML= "";
	phoneError.style.display = "none";
	}
	/*END PHONE VALIDATION*/
	
	
	/*START website variables.*/
	website = document.getElementById('website');
	websiteError = document.getElementById('websiteError');
	var websitePattern = new RegExp(""+website.pattern+"");
	/*END website variables.*/
	
	/*BEGIN WEBSITE VALIDATION*/
	if (!websitePattern.test(website.value))	{
	website.style.background ='#FF9999';
	websiteError.style.display = "block";
	websiteError.innerHTML= "Website must follow example. E.G: http://www.insertyourwebsitehere.com";
	website.focus();
	return false;
	} else {
	website.style.background ='#CCFFCC';
	websiteError.innerHTML= "";
	websiteError.style.display = "none";
	}
	/*END WEBSITE VALIDATION*/
	
	
	/*START age variables.*/
	age = document.getElementById('age');
	ageError = document.getElementById('ageError');
	var agePattern = new RegExp(""+age.pattern+"");
	/*END age variables.*/
	
	/*BEGIN AGE VALIDATION*/
	if (!agePattern.test(age.value))	{
	age.style.background ='#FF9999';
	ageError.style.display = "block";
	ageError.innerHTML= "Must input valid age";
	age.focus();
	return false;
	} else {
	age.style.background ='#CCFFCC';
	ageError.innerHTML= "";
	ageError.style.display = "none";
	}
	/*END AGE VALIDATION*/
	
	
	/*START address variables.*/
	address = document.getElementById('address');
	addressError = document.getElementById('addressError');
	var addressPattern = new RegExp(""+address.pattern+"");
	/*END address variables.*/
	
	/*BEGIN ADDRESS VALIDATION*/
	if (!addressPattern.test(address.value))	{
	address.style.background ='#FF9999';
	addressError.style.display = "block";
	addressError.innerHTML= "Must input correct address";
	address.focus();
	return false;
	} else {
	address.style.background ='#CCFFCC';
	addressError.innerHTML= "";
	addressError.style.display = "none";
	}
	/*END ADDRESS VALIDATION*/
	
	
	/*START suburb variables.*/
	suburb = document.getElementById('suburb');
	suburbError = document.getElementById('suburbError');
	var suburbPattern = new RegExp(""+suburb.pattern+"");
	/*END suburb variables.*/
	
	/*BEGIN SUBURB VALIDATION*/
	if (!suburbPattern.test(suburb.value))	{
	suburb.style.background ='#FF9999';
	suburbError.style.display = "block";
	suburbError.innerHTML= "Suburb must begin with capital letter(s). E.G: Henley";
	suburb.focus();
	return false;
	} else {
	suburb.style.background ='#CCFFCC';
	suburbError.innerHTML= "";
	suburbError.style.display = "none";
	}
	/*END SUBURB VALIDATION*/
	
	
	/*START city variables.*/
	city = document.getElementById('city');
	cityError = document.getElementById('cityError');
	var cityPattern = new RegExp(""+city.pattern+"");
	/*END city variables.*/
	
	/*BEGIN CITY VALIDATION*/
	if (!cityPattern.test(city.value))	{
	city.style.background ='#FF9999';
	cityError.style.display = "block";
	cityError.innerHTML= "City must begin with a capital letter.";
	city.focus();
	return false;
	} else {
	city.style.background ='#CCFFCC';
	cityError.innerHTML= "";
	cityError.style.display = "none";
	}
	/*END CITY VALIDATION*/
}



function changeState() {
var country = document.getElementById('country').value;
var state = document.getElementById('state');

	if(country === 'AU') {
		state.innerHTML = '';
		state.options[state.options.length] = new Option('-- select state --','0');
		state.options[state.options.length] = new Option('South Australia', 'SA');
		state.options[state.options.length] = new Option('New South Wales', 'NSW');
		state.options[state.options.length] = new Option('Victoria', 'VIC');
		state.options[state.options.length] = new Option('Queensland', 'QLD');
		state.options[state.options.length] = new Option('Tasmania', 'TAS');
		state.options[state.options.length] = new Option('Western Australia','WA');
		state.options[state.options.length] = new Option('Australian Capital Territory', 'ACT');
		state.options[state.options.length] = new Option('Northern Territory','NT');
	} else if(country === 'NZ') {
		state.innerHTML = '';
		state.options[state.options.length] = new Option('-- select region --','0');
		state.options[state.options.length] = new Option('Auckland', 'AU');
		state.options[state.options.length] = new Option('Nothland', 'NO');
		state.options[state.options.length] = new Option('Southland', 'SO');
	} else {
		state.innerHTML = '';
		state.options[state.options.length] = new Option('-- select country first --', '');
	}

	if (document.getElementById("country").value == '0')
	{
		document.getElementById("country").style.background ='#FF9999';
	}
	else
	{
		document.getElementById("country").style.background ='#CCFFCC';
	}
}


function stateColours() {
	if (document.getElementById("state").value == '0')
	{
		document.getElementById("state").style.background ='#FF9999';
	} else	{
		document.getElementById("state").style.background ='#CCFFCC';
	}
}


function validatePostcode() { //Declare the function. This is called when a user inputs data into the postcode. 
	var state = (document.getElementById("state").value);  //Retrieve the users selected state. This is necessary to this function working.
	switch (state) //the switch statement is used to perform a action depending on the condition.
	{
		case "SA": //This states that if the user has selected South Australia. 
		var postcodeRegEx=/^5[0-9]{3}$/; //The postcode pattern must start with a 5 and be followed by 3 more digits.
		break; //End code statements
		
		case "NSW": //This states that if the user has selected New South Wales. 
		var postcodeRegEx=/^2[0-9]{3}$/; //The postcode pattern must start with a 2 and be followed by 3 more digits.
		break; 
		
		case "ACT": //This states that if the user has selected Australian Capital Territory. 
		var postcodeRegEx=/^2[0-9]{3}$/; //The postcode pattern must start with a 2 and be followed by 3 more digits.
		break; 
		
		case "VIC": //This states that if the user has selected Victoria. 
		var postcodeRegEx=/^3[0-9]{3}$/; //The postcode pattern must start with a 3 and be followed by 3 more digits.
		break; 
		
		case "QLD": //This states that if the user has selected Queensland. 
		var postcodeRegEx=/^4[0-9]{3}$/; //The postcode pattern must start with a 4 and be followed by 3 more digits.
		break; 
		
		case "WA": //This states that if the user has selected Western Australia. 
		var postcodeRegEx=/^6[0-9]{3}$/; //The postcode pattern must start with a 6 and be followed by 3 more digits.
		break; 
		
		case "TAS": //This states that if the user has selected Tasmania. 
		var postcodeRegEx=/^7[0-9]{3}$/; //The postcode pattern must start with a 7 and be followed by 3 more digits.
		break; 
		
		case "NT": //This states that if the user has selected North Territory. 
		var postcodeRegEx=/^0[0-9]{3}$/; //The postcode pattern must start with a 0 and be followed by 3 more digits.
		break; 
	} 
	postcodeError = document.getElementById('postcodeError'); //Retrieve the postcodeError id from html page. This is done to write to postcodeError on the website.
	if(!postcodeRegEx.test(document.getElementById("postcode").value)) //If the users input is not equal to the pattern set, do:
	{
	document.getElementById("postcode").style.background ='#FF9999'; //Change postcode background to red
	postcodeError.style.display = "block";
	postcodeError.innerHTML= "Postcode must match state selected, if South Australia was selected, E.G: 5000"; //Write this text beneath the postcode input area. 
	postcode.focus(); //Focus on the postcode input.
	return false;
	} else	{ //If the users postcode input matches the pattern, do:
	document.getElementById("postcode").style.background ='#CCFFCC'; //Change postcode background to green.
	postcodeError.innerHTML= ""; //Remove text.
	postcodeError.style.display = "none";
}
}//End postcode function.

function validate()	{
	var elements = document.getElementById("userForm").elements
	for (var i = 0, element; element = elements[i++];)	{
 //Checks if the element in the form is either <input> or <select> - ignores other
//elements such as <fieldset>
 //also checks if backgroundcolor is not green (<input> or <select> && not green)
//NOTE: RGB value used here
	if ((element =='[object HTMLInputElement]' || element == '[object HTMLSelectElement]') && (element.style.backgroundColor !='rgb(204, 255, 204)'))	{
 //if input is not a color picker
		if (element.type!='color' && element.type!='submit')
		{
			alert("Please enter data for any fields that are not green");
			return false;
		}
	}
	}	if (document.getElementById("colorPicker").value!='#ff0000')	{
		alert("Please select a colour from the colour picker");
		document.getElementById("colorPicker").focus();
		return false;
	}
	else {
		alert("Thanks for submitting");
		window.open("http://studentserver.com.au/joshhart/html/form2.html");
		localStorage.clear()
		return true;
	}
}