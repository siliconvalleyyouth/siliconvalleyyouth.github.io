var teachers;
function getParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
}
function renderSite(res) {
    var data = res["data"];
    var waitlist = "1FAIpQLSdHL2V-KP-2o7TBUt6UxiWoxmdWXzvoGD7WLMAX--rSK_kr_g";
    $("#extramessage").text(data["extramessage"])
    $("#title").text(data["classname"]);
    $("#class-name").text(data["classname"]);
    $("#class-description").text(data["classdescription"]);
    $("#class-syllabus").text(data["classsyllabus"]);
    $("#prerequisites").html("Prerequisites: " + data["prerequisites"]);
    $("#dates").html("<strong>Dates: </strong>"+data["dates"]);
    $("#time").html("<strong>Time: </strong>"+data["time"]);
	$("#location").html("<strong>Location: </strong>"+data["location"]);
	$("#grades").html("<strong>Grades: </strong>" + data["graderange"]);
    $("#teacher1").text(data["teacher1"]);
    $("#teacher1email").text(data['teacher1email'])
    $("#bio1").text(data["t1bio"]);
    $("#img1").attr("src", "../../../images/2021Headshots/Summer/"+data["teacher1img"]+".jpg")
    if(data["status"] == 'closed') {
        $("#registrationEnd").css('display', 'block');
    }    
    else if(data["status"] == 'full') {
        $("#classFullText").css('display', 'block');
        $("#waitlist").attr("href", "https://docs.google.com/forms/d/e/" + waitlist + "/viewform");    
    }else {
        $("#signupText").css('display', 'block')
        $("#signup").attr("href", "/payment.html?id=" + getParam("id"));
    }
    if(data["teacher2"] != '') {
        $("#teacher2label").text(data["teacher2position"]);
        $("#teacher2").text(data["teacher2"]);	
        $("#teacher2email").text(data['teacher2email'])
        $("#img2").css("image-orientation", "from-image")
        $("#bio2").text(data["t2bio"]);
        $("#img2").attr("src", "../../../images/2021Headshots/Summer/"+data["teacher2img"]+".jpg")
    }
    if(data["teacher3"] != '') {
        $("#teacher3label").text(data["teacher3position"]);
        $("#teacher3").text(data["teacher3"]);
        $("#teacher3email").text(data['teacher3email'])	
        $("#img3").css("image-orientation", "from-image")
        $("#bio3").text(data["t3bio"]);
        $("#img3").attr("src", "../../../images/2021Headshots/Summer/"+data["teacher3img"]+".jpg")
    }
    getExif()
}
$(document).ready(function() {
    var id = getParam("id");
    console.log(id)
    $.ajax({
        type: "GET",
        contentType: 'application/json',
        // url : "http://localhost:3000/class2021summer?id="+id,
        url : "https://siliconvalleyyouth.herokuapp.com/class2021summer?id="+id,
        dataType: "json",
        success: function(res) {
            console.log("success")
            renderSite(res)
        }
    })
})