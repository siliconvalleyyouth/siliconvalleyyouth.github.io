classes = mapClasses;
function getParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
}
var selector = getParam('query');
if(selector=="3d") {
	console.log(selector);
	curr = classes.get(selector);
	$(document).ready(function() {
		$("#class-name").text(curr.classname);
		$("#class-description").text(curr.description);
		$("#dates").html("<strong>Dates:</strong>"+curr.datesstr);
		$("#time").html("<strong>Time: </strong>"+curr.timestr);
		$("#location").html("<strong>Location: </strong>"+curr.locationstr);
		$("#grades").html("<strong>Grades: </strong>"+curr.gradestr);
		$("#teacher1").text(curr.teacher1);
		$("#img1").attr("src",curr.imgsrc1);
		$("#bio1").text(curr.bio1);
		$("#teacher2").text("Alex Lee");
		$("#img2").attr("src","../../../images/team/alexlee.jpg");
		$("#bio2").text("Hello! My name is Alex Lee, and I am a seventh grader at Miller Middle School. I will be your T.A. For the Fall 2018 class. I have been introduced to 3D design for almost a year and I think it is really cool to be able to design something and be able to print it out and actually have it as a model. Outside of 3D design I enjoy playing volleyball, basketball, and tennis. I'm looking forward to meet you in the class.");
		$("#teacher3").text("Ethan Chen");
		$("#img3").attr("src","../../../images/team/ethan.jpg");
		$("#bio3").text("I am an incoming 7th grader at Joaquin Miller Middle School. I have taken a few SVY classes before, one of them being a Tinkercad class. I got really interested in 3D design, so I also took a different class for Fusion 360. I usually get the hang of the classwork pretty fast and I always help other classmates when I’m done with my work. I have taken many other classes that have to do with computer softwares so I know lots of the material. I’m really interested in 3D design, game design, and programming, and I’m pretty good at it. I think as a teacher I can help out in the class and help people learn what I learned before.");
		$("#teacher2label").text("Teacher's Assistant");
		$("#teacher3label").text("Teacher's Assistant");
	})

}else{
	console.log(selector);
	curr = classes.get(selector);
	$(document).ready(function() {
		$("#class-name").text(curr.classname);
		$("#class-description").text(curr.description);
		$("#dates").html("<strong>Dates:</strong>"+curr.datesstr);
		$("#time").html("<strong>Time: </strong>"+curr.timestr);
		$("#location").html("<strong>Location: </strong>"+curr.locationstr);
		$("#grades").html("<strong>Grades: </strong>"+curr.gradestr);
		$("#teacher1").text(curr.teacher1);
		$("#img1").attr("src",curr.imgsrc1);
		$("#bio1").text(curr.bio1);
		$("#teacher2").text(curr.teacher2);
		$("#img2").attr("src",curr.imgsrc2);
		$("#bio2").text(curr.bio2);
		if(curr.teacher2.length ==0) {
			$("#teacher2label").text("");
		}
		else if(curr.hasTA) {
			$("#teacher2label").text("Teacher's Assistant");

		}else{
			$("#teacher2label").text("Teacher");
		}
	})
}
