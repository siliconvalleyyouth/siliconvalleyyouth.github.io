var serverAddress = "https://siliconvalleyyouth.herokuapp.com/email";
function run() {
	alert("Thank you for signing up for our email list");
	var xhr = new XMLHttpRequest();
	var email = $("#email-input").val();
	xhr.open("POST", serverAddress,true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("email="+email);
}
