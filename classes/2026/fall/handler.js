var teachers;
var svyConfig = window.SVY_CONFIG || {};
var activeSemester = svyConfig.activeSemester || {
    year: "2026",
    term: "fall",
    headshotPath: "images/2026Headshots/fall"
};
var backendBaseUrl = svyConfig.backendBaseUrl || "https://siliconvalleyyouth.herokuapp.com";
var publicSiteBaseUrl = svyConfig.publicSiteBaseUrl || "https://www.siliconvalleyyouth.com";
var inPersonLocation = svyConfig.inPersonLocation || "10268 Bandley Dr. #105, Cupertino, CA";
var headshotBasePath = "../../../" + activeSemester.headshotPath.replace(/^\/+/, "");
function getParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
}
function isOnlineLocation(location) {
    var value = String(location || "").trim().toLowerCase();
    return !value || value.indexOf("online") >= 0;
}
function formatLocationDisplay(location) {
    if (isOnlineLocation(location)) {
        return "Online";
    }
    var value = String(location || "").trim();
    if (/^in[-\s]?person$/i.test(value)) {
        return inPersonLocation;
    }
    return value;
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
    var locationDisplay = formatLocationDisplay(data["location"]);
    $("#location").html("<strong>Location: </strong>"+ locationDisplay);
    if(!isOnlineLocation(data["location"])) {
        $("#inperson-detail").css('display', 'inline-block');
    } else {
        $("#inperson-detail").css('display', 'none');
    }
	$("#grades").html("<strong>Grades: </strong>" + data["graderange"]);
    $("#teacher1").text(data["teacher1"]);
    linkProfileElement("#teacher1", data["teacher1"], { email: data["teacher1email"], image: data["teacher1img"] });
    $("#teacher1email").text(data['teacher1email'])
    $("#bio1").html(data["t1bio"]);
    $("#img1").attr("src", headshotBasePath + "/" + data["teacher1img"] + ".jpg")
    linkProfileImageElement("#img1", data["teacher1"] || data["name"], { email: data["teacher1email"], image: data["teacher1img"] });
    var publishStatus = (data["publish_status"] || "").toLowerCase();
    var legacyStatus = (data["status"] || "").toLowerCase();
    if(legacyStatus == 'closed') {
        $("#registrationEnd").css('display', 'block');
    }
    else if(legacyStatus == 'full' || publishStatus == 'closed') {
        $("#classFullText").css('display', 'block');
        $("#waitlist").attr("href", waitlist);
    }else {
	$("#signupText").css('display', 'block')
        $("#signup").attr("href", buildPaymentHref(getParam("id") || data["selector"]));
    }
    if(data["teacher2"] != '') {
        $("#teacher2label").text(data["teacher2position"]);
        $("#teacher2").text(data["teacher2"]);
    linkProfileElement("#teacher2", data["teacher2"], { email: data["teacher2email"], image: data["teacher2img"] });
        $("#teacher2email").text(data['teacher2email'])
        $("#img2").css("image-orientation", "from-image")
        $("#bio2").html(data["t2bio"]);
        $("#img2").attr("src", headshotBasePath + "/" + data["teacher2img"] + ".jpg")
        linkProfileImageElement("#img2", data["teacher2"], { email: data["teacher2email"], image: data["teacher2img"] });
    }
    if(data["teacher3"] != '') {
        $("#teacher3label").text(data["teacher3position"]);
        $("#teacher3").text(data["teacher3"]);
    linkProfileElement("#teacher3", data["teacher3"], { email: data["teacher3email"], image: data["teacher3img"] });
        $("#teacher3email").text(data['teacher3email'])
        $("#img3").css("image-orientation", "from-image")
        $("#bio3").html(data["t3bio"]);
        $("#img3").attr("src", headshotBasePath + "/" + data["teacher3img"] + ".jpg")
        linkProfileImageElement("#img3", data["teacher3"], { email: data["teacher3email"], image: data["teacher3img"] });
    }
    if(data["teacher4"] != '') {
        $("#teacher4label").text(data["teacher4position"]);
        $("#teacher4").text(data["teacher4"]);
    linkProfileElement("#teacher4", data["teacher4"], { email: data["teacher4email"], image: data["teacher4img"] });
        $("#teacher4email").text(data['teacher4email'])
        $("#img4").css("image-orientation", "from-image")
        $("#bio4").html(data["t4bio"]);
        $("#img4").attr("src", headshotBasePath + "/" + data["teacher4img"] + ".jpg")
        linkProfileImageElement("#img4", data["teacher4"], { email: data["teacher4email"], image: data["teacher4img"] });
    }
}
function buildPaymentHref(classId) {
    return "/payment.html?year=" + encodeURIComponent(activeSemester.year)
        + "&term=" + encodeURIComponent(activeSemester.term)
        + "&id=" + encodeURIComponent(classId || "");
}

$(document).ready(function() {
    var id = getParam("id");
    console.log("Getting info for "+id)
    // Set signup link immediately so payment always receives year/term/id,
    // even if the class detail request is slow or the user clicks early.
    if (id) {
        $("#signup").attr("href", buildPaymentHref(id));
    }
    $.ajax({
        type: "GET",
        url : backendBaseUrl + "/api/classes/" + activeSemester.year + "/" + activeSemester.term + "/" + encodeURIComponent(id || ""),
        dataType: "json",
        success: function(res) {
            console.log("success")
            renderSite(res)
        }
    })
})
