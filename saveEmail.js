var serverAddress = "https://siliconvalleyyouth.herokuapp.com/email";
$(document).ready(function() {
	$("#submit-email").click(function() {
		console.log("button clicked");
		var email = $("#email-input").val();
		var data = {
			email:email
		}
		console.log(email);
		
	})
})
function run() {
	var xhr = new XMLHttpRequest();
	var email = $("#email-input").val();
	xhr.open("POST", "https://siliconvalleyyouth.herokuapp.com/email",true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("email="+email);
}