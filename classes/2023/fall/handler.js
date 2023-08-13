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
    var raw_data = res["data"];
    console.log("renderSite: rawdata="+JSON.stringify(raw_data));
    // var data = raw_data[0]
    var data = JSON.parse(raw_data);
    var waitlist = data["waitlistform"];

    $("#extramessage").attr("href", data["extramessage"]);
    if(data["extramessage"] != '') {
        $("#demovideo").css('display', 'block');
        console.log("demovideo not empty")
    }
    $("#title").html(data["classname"]);
    $("#class-name").html(data["classname"]);
    $("#class-description").html(data["classdescription"]);
    $("#class-syllabus").html(data["classsyllabus"]);
    $("#prerequisites").html("Prerequisites: " + data["prerequisites"]);
    $("#dates").html("<strong>Dates: </strong>"+data["dates"]);
    $("#time").html("<strong>Time: </strong>"+data["time"]);
	$("#location").html("<strong>Location: </strong>"+data["location"]);
	$("#grades").html("<strong>Grades: </strong>" + data["graderange"]);
    $("#teacher1").text(data["teacher1"]);
    $("#teacher1email").text(data['teacher1email'])
    $("#bio1").html(data["t1bio"]);
    $("#img1").attr("src", "../../../images/2023Headshots/Fall/"+data["teacher1img"]+".jpg")
    if(data["status"] == 'closed') {
        $("#registrationEnd").css('display', 'block');
    }    
    else if(data["status"] == 'full') {
        $("#classFullText").css('display', 'block');
        $("#waitlist").attr("href", waitlist);    
    }else {
        $("#signupText").css('display', 'block')
        $("#signup").attr("href", "https://www.siliconvalleyyouth.com/payment.html?id=" + getParam("id"));
    }
    if(data["teacher2"] != '') {
        $("#teacher2label").text(data["teacher2position"]);
        $("#teacher2").text(data["teacher2"]);	
        $("#teacher2email").text(data['teacher2email'])
        $("#img2").css("image-orientation", "from-image")
        $("#bio2").html(data["t2bio"]);
        $("#img2").attr("src", "../../../images/2023Headshots/Fall/"+data["teacher2img"]+".jpg")
    }
    if(data["teacher3"] != '') {
        $("#teacher3label").text(data["teacher3position"]);
        $("#teacher3").text(data["teacher3"]);
        $("#teacher3email").text(data['teacher3email'])	
        $("#img3").css("image-orientation", "from-image")
        $("#bio3").html(data["t3bio"]);
        $("#img3").attr("src", "../../../images/2023Headshots/Fall/"+data["teacher3img"]+".jpg")
    }
    if(data["teacher4"] != '') {
        $("#teacher4label").text(data["teacher4position"]);
        $("#teacher4").text(data["teacher4"]);
        $("#teacher4email").text(data['teacher4email'])	
        $("#img4").css("image-orientation", "from-image")
        $("#bio4").html(data["t4bio"]);
        $("#img4").attr("src", "../../../images/2023Headshots/Fall/"+data["teacher4img"]+".jpg")
    }
    getExif()
}
$(document).ready(function() {
    var id = getParam("id");
    console.log("Getting info for "+id)
    $.ajax({
        type: "GET",
        contentType: 'application/json',
        //url : "http://localhost:3000/class2022spring?id="+id,
        url : "https://siliconvalleyyouth-current.herokuapp.com/class2023fall?id="+id,
        dataType: "json",
        success: function(res) {
            console.log("success")
            renderSite(res)
        }
    })
})
