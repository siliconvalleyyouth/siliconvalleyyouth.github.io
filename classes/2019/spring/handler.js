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

console.log(selector);
curr = classes.get(selector);
$(document).ready(function() {
	$("#title").text(curr.classname);
	$("#class-name").text(curr.classname);
	$("#class-description").text(curr.description);
	$("#dates").html("<strong>Dates: </strong>"+curr.datesstr);
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
	if(curr.isFull) {
		$("#isFull").html("This class is currently FULL.  Please consider the other classes SVY offers, or contact svyouth1@gmail.com to setup a waitlist spot.")
	}
})
