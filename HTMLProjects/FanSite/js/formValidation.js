function validateForm()
{
	var email = document.getElementById("email");
	var username = document.getElementById("username");
	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var address = document.getElementById("address");
	var phone = document.getElementById("phone");
	var userpassword = document.getElementById("password");
	var repassword = document.getElementById("repassword");

	
	var emailError = document.getElementById("emailError");
	var usernameError = document.getElementById("usernameError");
	var firstnameError = document.getElementById("firstnameError");
	var lastnameError = document.getElementById("lastnameError");
	var addressError = document.getElementById("addressError");
	var phoneError = document.getElementById("phoneError");
	var passwordError = document.getElementById("passwordError");

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
	
	if (username.value=="")
	{
		usernameError.style.color="red"
		usernameError.innerHTML = "Username is required";
		username.focus();
		return false;
	}
	usernameError.innerHTML = ""; 
	
	if (phone.value!="" && isNaN(phone.value))
	{
		phoneError.style.color="red"
		phoneError.innerHTML = "Phone number must be numeric";
		phone.focus();
		return false;
	}
	phoneError.innerHTML = "";
	
	if (phone.value!="" && phone.value.length < 10 || phone.value.length > 10)
	{
		phoneError.style.color="red"
		phoneError.innerHTML = "Phone number must be 10 digits";
		phone.focus();
		return false;
	}
	phoneError.innerHTML = "";
	
	if (userpassword.value != repassword.value)
	{
		//alert("Your studentID must be at least 6 numbers");
		passwordError.style.color="red"
		passwordError.innerHTML = "Passwords must match";
		userpassword.focus();
		return false;
	}
	passwordError.innerHTML = "";
	
	return true;
}
