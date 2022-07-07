document.body.style.backgroundColor = "#feffc5"
function validateForm()
{
	var firstname = document.getElementById("firstname");
	var lastname = document.getElementById("lastname");
	var postcode = document.getElementById("postcode");
	var email = document.getElementById("email");
	var cardnumber = document.getElementById("cardnumber");
	var ccv = document.getElementById("ccv");
	var firstnameError = document.getElementById("firstnameError");
	var lastnameError = document.getElementById("lastnameError");
	var postcodeError = document.getElementById("postcodeError");
	var emailError = document.getElementById("emailError");
	var cardnumberError = document.getElementById("cardnumberError");
	var ccvError = document.getElementById("ccvError");

	if (firstname.value=="")
	{
		firstnameError.style.color="red"
		firstnameError.innerHTML = "First Name required";
		firstname.focus();
		return false;
	}
	firstnameError.innerHTML = ""; 
	if (lastname.value=="")
	{
		lastnameError.style.color="red"
		lastnameError.innerHTML = "Last Name required";
		lastname.focus();
		return false;
	}
	lastnameError.innerHTML = "";
	if (postcode.value.length < 4 || postcode.value.length > 4)
	{
		//alert("Your studentID must be at least 6 numbers");
		postcodeError.style.color="red"
		postcodeError.innerHTML = "Postcode must be 4 numbers.";
		postcode.focus();
		return false;
	}
	if (isNaN(postcode.value))
	{
		//alert("Your studentID must be numeric");
		postcodeError.style.color="red"
		postcodeError.innerHTML = "Postcode must be numeric";
		postcode.focus();
		return false;
	}
	postcodeError.innerHTML = ""; //clear innerHTML error
	if (email.value.indexOf("@")==-1)
	{
		emailError.style.color = "red"
		emailError.innerHTML = "Email must include an @ sign";
		email.focus();
		return false;
	}
	emailError.innerHTML = "";
	if (email.value.indexOf(".")==-1)
	{
		emailError.style.color = "red"
		emailError.innerHTML = "Email must include a full stop";
		email.focus();
		return false;
	}
	if (cardnumber.value.length < 16 || cardnumber.value.length > 16)
	{
		cardnumberError.style.color = "red"
		cardnumberError.innerHTML = "Card number must be a valid 16 digits";
		cardnumber.focus();
		return false;
	}
	cardnumberError.innerHTML = "";
	if (isNaN(cardnumber.value))
	{
		cardnumberError.style.color = "red"
		cardnumberError.innerHTML = "The card number must be numeric";
		cardnumber.focus();
		return false;
	}
	cardnumberError.innerHTML = "";
	if (ccv.value.length < 3 || ccv.value.length > 3)
	{
		ccvError.style.color = "red"
		ccvError.innerHTML = "The CCV must be 3 digits"
		ccv.focus();
		return false;
	}
	if (isNaN(ccv.value))
	{
		ccvError.style.color = "red"
		ccvError.innerHTML = "The CCV must be numeric";
		ccv.focus();
		return false;
	}
	alert("Thank you for your submission!");
	return true;
}
function changeBgd(textField)
{
	textField.style.background=" lightgrey";
}
function resetBgd(textField)
{
	textField.style.background="white";
}