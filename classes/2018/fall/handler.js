function disableArchivedRegistration() {
    $("#forms-link").removeAttr("href").off("click.archived").on("click.archived", function(event) {
        event.preventDefault();
    });
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

function renderTeacher(index, name, image, bio, label) {
    if (!name) {
        $("#teacher" + index + "label").text("");
        return;
    }
    $("#teacher" + index).text(name);
    $("#img" + index).attr("src", image || "");
    $("#bio" + index).text(bio || "");
    if (index > 1) {
        $("#teacher" + index + "label").text(label || "Teacher");
    }
}

function renderSite(res) {
    var data = JSON.parse(res["data"]);
    $("#title").text(data.classname || "");
    $("#class-name").text(data.classname || "");
    $("#class-description").text(data.classdescription || data.description || "");
    $("#dates").html("<strong>Dates:</strong> " + (data.dates || data.datesstr || ""));
    $("#time").html("<strong>Time: </strong>" + (data.time || data.timestr || ""));
    $("#location").html("<strong>Location: </strong>" + (data.location || data.locationstr || ""));
    $("#grades").html("<strong>Grades: </strong>" + (data.graderange || data.gradestr || ""));
    renderTeacher(1, data.teacher1, data.teacher1img, data.t1bio);
    renderTeacher(2, data.teacher2, data.teacher2img, data.t2bio, data.has_ta_archived ? "Teacher's Assistant" : "Teacher");
    renderTeacher(3, data.teacher3, data.teacher3img, data.t3bio, data.has_ta_archived ? "Teacher's Assistant" : "Teacher");
    disableArchivedRegistration();
}

$(document).ready(function() {
    var id = getParam("id") || getParam("query");
    $.ajax({
        type: "GET",
        contentType: "application/json",
        url : "https://siliconvalleyyouth.herokuapp.com/api/classes/2018/fall/" + id,
        dataType: "json",
        success: function(res) {
            renderSite(res);
        }
    });
});
