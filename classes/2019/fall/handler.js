var teachers;

function disableArchivedRegistration() {
    $("#signupText,#signupTextFree,#signupTextFree2").css('display', 'none');
    $("#signup,#signuppaid,#signupfree,#signupLink").removeAttr("href").off("click.archived").on("click.archived", function(event) {
        event.preventDefault();
    });
    if ($("#registrationEnd").length) {
        $("#registrationEnd").css('display', 'block');
    }
}
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
    var data = JSON.parse(raw_data);
    var photoId = data["photoid"] || "";
    if(photoId) {
        $("#img1").attr("src","../../../images/2019fall/"+photoId.substring(0,5)+".jpg");
    }
    $("#title").text(data["classname"]);
    $("#class-name").text(data["classname"]);
    $("#class-description").text(data["description"]);
    $("#dates").html("<strong>Dates: </strong>"+data["datestr"]);
    $("#time").html("<strong>Time: </strong>"+data["time"]);
	$("#location").html("<strong>Location: </strong>"+data["location"]);
	$("#grades").html("<strong>Grades: </strong>" + data["grades"]);
    $("#teacher1").text(data["name"]);
    $("#bio1").text(data["bio"]);
}
$(document).ready(function() {
    var id = getParam("id");
    console.log(id)
    $.ajax({
        type: "GET",
        contentType: 'application/json',
        url : "https://siliconvalleyyouth.herokuapp.com/api/classes/2019/fall/"+id,
        dataType: "json",
        success: function(res) {
            console.log("success")
            renderSite(res);
            disableArchivedRegistration()
        }
    })
})
