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
    teachers = data.teachers;
    var mainteacher = [];
    var ta = [];
    for (var i =0; i<teachers.length; i++) {
        if (teachers[i]['position'] == "Teacher" || teachers[i]['position'] == "Co-Teacher") {
            mainteacher.push(teachers[i])
        }else{
            ta.push(teachers[i])
        }
    }
    
    $("#img1").attr("src","../../../images/2019fall/"+mainteacher[0]["photoid"].substring(0,5)+".jpg");
    if(mainteacher[1]) {
        $("#img2").attr("src","../../../images/2019fall/"+mainteacher[1]["photoid"].substring(0,5)+".jpg");
    }
    if(ta[0]) {
        $("#img3").attr("src", "../../../images/2019fall/"+ta[0]["photoid"].substring(0,5)+".jpg");
    }
    $("#signupLink").attr("href", "/payment.html?id=" + getParam("id"))
    $("#title").text(mainteacher[0]["classname"]);
    $("#class-name").text(mainteacher[0]["classname"]);
    $("#class-description").text(mainteacher[0]["description"]);
    $("#dates").html("<strong>Dates: </strong>"+mainteacher[0]["datestr"]);
    $("#time").html("<strong>Time: </strong>"+mainteacher[0]["time"]);
	$("#location").html("<strong>Location: </strong>"+mainteacher[0]["location"]);
	$("#grades").html("<strong>Grades: </strong>" + mainteacher[0]["grades"]);
    $("#teacher1").text(mainteacher[0]["name"]);
    $("#bio1").text(mainteacher[0]["bio"]);
    if(mainteacher[1]) {
        $("#teacher2label").text("Teacher");
        $("#teacher2").text(mainteacher[1]["name"]);	
        $("#img2").css("image-orientation", "from-image")
        $("#bio2").text(mainteacher[1]["bio"]);
    }
	if(ta[0]) {
        $("#teacher3label").text("Teacher's Assistant");
        $("#teacher3").text(ta[0]["name"]);
        $("#img3").css("image-orientation", "from-image")
        $("#bio3").text(ta[0]["bio"])
    }
    getExif()
}
$(document).ready(function() {
    var id = getParam("id");
    console.log(id)
    $.ajax({
        type: "GET",
        contentType: 'application/json',
        url : "https://siliconvalleyyouth.herokuapp.com/class2019?id="+id,
        dataType: "json",
        success: function(res) {
            console.log("success")
            renderSite(res)
        }
    })
})

