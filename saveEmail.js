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
			type:"POST",
			url:serverAddress,
			contentType:"application/json",
			data:JSON.stringify(data),
			error:function(xhr,status,error) {
				console.log(xhr);
			}
		})
		// $.ajax({
		// 	type:"POST",
		// 	url:"http://localhost:3000/email",
		// 	crossDomain:true
		// 	// contentType:"application/json",
		// 	// data:JSON.stringify(data),
		// 	// error:function(xhr,status,error) {
		// 	// 	console.log(xhr);
		// 	// }
		// })
		// $.post(serverAddress, JSON.stringify(data), function(d, status,xhr) {
		// 	console.log(xhr);
		// })
	})
})