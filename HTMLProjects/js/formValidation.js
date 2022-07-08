function validateForm()
{
	var email = document.getElementById("email");
	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var userpassword = document.getElementById("password");
	var repassword = document.getElementById("repassword");
	var address = document.getElementById("address");
	var phone = document.getElementById("phone");
	
	var emailError = document.getElementById("emailError");
	var firstnameError = document.getElementById("firstnameError");
	var lastnameError = document.getElementById("lastnameError");
	var passwordError = document.getElementById("passwordError");
	var addressError = document.getElementById("addressError");
	var phoneError = document.getElementById("phoneError");


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
	emailError.innerHTML = "";
	
	
	if (firstName.value=="")
	{
		firstnameError.style.color="red"
		firstnameError.innerHTML = "First name is required";
		firstName.focus();
		return false;
	}
	firstnameError.innerHTML = ""; 
	
	if (lastName.value=="")
	{
		lastnameError.style.color="red"
		lastnameError.innerHTML = "Last Name is required";
		lastName.focus();
		return false;
	}
	lastnameError.innerHTML = "";
	
	if (userpassword.value != repassword.value)
	{
		//alert("Your studentID must be at least 6 numbers");
		passwordError.style.color="red"
		passwordError.innerHTML = "Passwords must match";
		userpassword.focus();
		return false;
	}
	passwordError.innerHTML = "";
	
	
	if (phone.value=="")
	{
		phoneError.style.color="red"
		phoneError.innerHTML = "Phone number is required";
		phone.focus();
		return false;
	}
	phoneError.innerHTML = ""; 
	
	if (phone.value.length < 10 || phone.value.length > 10)
	{
		phoneError.style.color = "red"
		phoneError.innerHTML = "Phone number must be 10 digits";
		phone.focus();
		return false;
	}
	phoneError.innerHTML = "";
	
	if (isNaN(phone.value))
	{
		phoneError.style.color = "red"
		phoneError.innerHTML = "Your phone number must be numeric";
		phone.focus();
		return false;
	}
	phoneError.innerHTML = "";

	return true;
}
