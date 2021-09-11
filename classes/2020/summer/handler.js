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
    var data = raw_data[0]
    $("#extramessage").text(data["extramessage"])
    $("#title").text(data["classname"]);
    $("#class-name").text(data["classname"]);
    $("#class-description").text(data["classdescription"]);
    $("#prerequisites").html("Prerequisites: " + data["prerequisites"]);
    $("#dates").html("<strong>Dates: </strong>"+data["dates"]);
    $("#time").html("<strong>Time: </strong>"+data["time"]);
	$("#location").html("<strong>Location: </strong>"+data["location"]);
	$("#grades").html("<strong>Grades: </strong>" + data["graderange"]);
    $("#teacher1").text(data["teacher1"]);
    $("#teacher1email").text(data['teacher1email'])
    $("#bio1").text(data["t1bio"]);
    $("#img1").attr("src", "../../../images/Summer2020Headshots/"+data["teacher1img"]+".jpg")
    if(data["isfull"] == 'yes') {
        $("#classFullText").css('display', 'block')
    }else {
        $("#signupText").css('display', 'block')
        $("#signupLink").attr("href", "/payment.html?id=" + getParam("id"))
    }
    if(data["teacher2"] != '') {
        $("#teacher2label").text(data["teacher2position"]);
        $("#teacher2").text(data["teacher2"]);	
        $("#teacher2email").text(data['teacher2email'])
        $("#img2").css("image-orientation", "from-image")
        $("#bio2").text(data["t2bio"]);
        $("#img2").attr("src", "../../../images/Summer2020Headshots/"+data["teacher2img"]+".jpg")
    }
    if(data["teacher3"] != '') {
        $("#teacher3label").text(data["teacher3position"]);
        $("#teacher3").text(data["teacher3"]);
        $("#teacher3email").text(data['teacher3email'])	
        $("#img3").css("image-orientation", "from-image")
        $("#bio3").text(data["t3bio"]);
        $("#img3").attr("src", "../../../images/Summer2020Headshots/"+data["teacher3img"]+".jpg")
    }
    getExif()
}
$(document).ready(function() {
    var id = getParam("id");
    console.log(id)
    $.ajax({
        type: "GET",
        contentType: 'application/json',
        // url : "http://localhost:3000/class2020summer?id="+id,
        url : "https://siliconvalleyyouth.herokuapp.com/class2020summer?id="+id,
        dataType: "json",
        success: function(res) {
            console.log("success")
            renderSite(res)
        }
    })
})

