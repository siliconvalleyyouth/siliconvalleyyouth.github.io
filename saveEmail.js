var serverAddress = "https://siliconvalleyyouth.herokuapp.com/email";
$(document).ready(function() {
	$("#submit-email").click(function() {
		console.log("button clicked");
		var email = $("#email-input").val();
		var data = {
			email:email
		}
		console.log(email);
		$.ajax({
			url: "http://siliconvalleyyouth.herokuapp.com/email",
			method: "POST",
			dataType: "json",
			data: data,
			success: function( data, status, jqxhr ){
				console.log( "Request received:", data );
			},
			error: function( jqxhr, status, error ){
				console.log( "Something went wrong!" );
			}
		});
	})
})