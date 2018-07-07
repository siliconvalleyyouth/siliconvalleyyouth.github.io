var serverAddress = "https://siliconvalleyyouth.herokuapp.com/email";
$(document).ready(function() {
	$("#submit-email").click(function() {
		console.log("button clicked");
		var email = $("#email-input").val();
		var data = {
			email:email
		}
		console.log(email);
		// $.ajax({
		// 	url: "http://localhost:3000/email",
		// 	method: "POST",
		// 	contentType: "application/x-www-form-urlencoded",
		// 	data: "email=tonyjiang02@gmail.com",
		// 	success: function( data, status, jqxhr ){
		// 		console.log( "Request received:", data );
		// 	},
		// 	error: function( jqxhr, status, error ){
		// 		console.log(error);
		// 	}
		// });
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:3000/email", true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.withCredentials=true;
		xhr.send("email=tonyjiang02@gmail.com");
	})
})