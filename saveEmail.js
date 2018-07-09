var serverAddress = "https://siliconvalleyyouth.herokuapp.com/email";
function run() {
	var xhr = new XMLHttpRequest();
	var email = $("#email-input").val();
	$("#email-input").val("Thank you for signing up for our email list!");
	xhr.open("POST", serverAddress,true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("email="+email);
}
