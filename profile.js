function getParam(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    return decodeURIComponent(results[1]) || "";
}

function normalizeProfileNameForCompare(name) {
    return String(name || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function matchesProfile(row, profile) {
    if (!row) {
        return false;
    }
    var ref = row[0];
    return ref === profile.id || normalizeProfileNameForCompare(ref) === normalizeProfileNameForCompare(profile.name);
}

function timelineLabel(year, term) {
    return year + " " + term.charAt(0).toUpperCase() + term.slice(1);
}

function collectOfficerTimeline(profile) {
    var groups = [
        { label: "2025-2026", rows: window.Officers20252026 || [] },
        { label: "2024-2025", rows: window.Officers20242025 || [] },
        { label: "2023-2024", rows: window.Officers20232024 || [] },
        { label: "2022-2023", rows: window.Officers20222023 || [] },
        { label: "2021-2022", rows: window.Officers20212022 || [] },
        { label: "2020-2021", rows: window.Officers20202021 || [] },
        { label: "2019-2020", rows: window.Officers20192020 || [] },
        { label: "2018-2019", rows: window.Officers20182019 || [] },
        { label: "2017-2018", rows: window.Officers20172018 || [] },
        { label: "2016-2017", rows: window.Officers20162017 || [] },
        { label: "2015-2016", rows: window.Officers20152016 || [] }
    ];
    var roles = [];
    for (var i = 0; i < groups.length; i++) {
        for (var j = 0; j < groups[i].rows.length; j++) {
            if (matchesProfile(groups[i].rows[j], profile)) {
                roles.push({ when: groups[i].label, title: groups[i].rows[j][1], type: "Officer" });
            }
        }
    }
    return roles;
}

function collectTeacherYears(profile) {
    var groups = [
        { year: "2026", rows: window.Teachers2026 || [] },
        { year: "2025", rows: window.Teachers2025 || [] },
        { year: "2024", rows: window.Teachers2024 || [] },
        { year: "2023", rows: window.Teachers2023 || [] },
        { year: "2022", rows: window.Teachers2022 || [] },
        { year: "2021", rows: window.Teachers2021 || [] },
        { year: "2020", rows: window.Teachers2020 || [] },
        { year: "2019", rows: window.Teachers2019 || [] },
        { year: "2018", rows: window.Teachers2018 || [] },
        { year: "2017", rows: window.Teachers2017 || [] },
        { year: "2016", rows: window.Teachers2016 || [] },
        { year: "2015", rows: window.Teachers2015 || [] }
    ];
    var years = [];
    for (var i = 0; i < groups.length; i++) {
        for (var j = 0; j < groups[i].rows.length; j++) {
            if (normalizeProfileNameForCompare(groups[i].rows[j].name) === normalizeProfileNameForCompare(profile.name)) {
                years.push({ when: groups[i].year, title: "Teacher", type: "Teaching Team" });
                break;
            }
        }
    }
    return years;
}

function renderTimeline(items) {
    var container = $("#timeline-list");
    container.empty();
    if (items.length === 0) {
        container.append("<p>No SVY timeline data found yet.</p>");
        return;
    }
    for (var i = 0; i < items.length; i++) {
        container.append(
            '<div class="timeline-item"><h3>' + items[i].when + " · " + items[i].title + '</h3><p>' + items[i].type + '</p></div>'
        );
    }
}

function renderClasses(classes) {
    var container = $("#class-history");
    container.empty();
    if (!classes || classes.length === 0) {
        container.append("<p>No class history found yet.</p>");
        return;
    }
    for (var i = classes.length - 1; i >= 0; i--) {
        var item = classes[i];
        container.append(
            '<div class="profile-card">' +
                "<h3>" + (item.classname || "Class") + "</h3>" +
                "<p>" + timelineLabel(item.year, item.term) + "</p>" +
                "<p>" + (item.role || "Teacher") + "</p>" +
                "<p>" + [item.dates, item.time].filter(Boolean).join(" · ") + "</p>" +
                (item.url ? '<a href="' + item.url + '">View class</a>' : "") +
            "</div>"
        );
    }
}

function renderSummary(profile, officerRoles, teacherYears, classes) {
    var latestOfficer = officerRoles[0];
    var parts = [];
    if (latestOfficer) {
        parts.push(profile.name + " is currently listed as " + latestOfficer.title + ".");
    }
    if (teacherYears.length > 0) {
        parts.push("SVY teaching history spans " + teacherYears[teacherYears.length - 1].when + " to " + teacherYears[0].when + ".");
    }
    if (classes && classes.length > 0) {
        parts.push("Class history includes " + classes.length + " class role" + (classes.length === 1 ? "" : "s") + ".");
    }
    $("#profile-summary").text(parts.join(" "));
}

$(document).ready(function() {
    var profileRef = getParam("id") || getParam("name");
    var profile = SVYProfiles.get(profileRef);
    $("#profile-name").text(profile.name);
    $("#profile-photo").attr("src", SVYProfiles.imagePath(profile.id || profile.name));

    var officerRoles = collectOfficerTimeline(profile);
    var teacherYears = collectTeacherYears(profile);
    renderTimeline(officerRoles.concat(teacherYears));

    var config = window.SVY_CONFIG || {};
    var backendBaseUrl = config.backendBaseUrl || "https://siliconvalleyyouth.herokuapp.com";
    $.ajax({
        type: "GET",
        url: backendBaseUrl + "/api/profile-timeline?name=" + encodeURIComponent(profile.name),
        dataType: "json",
        success: function(res) {
            renderClasses(res.teaching || []);
            renderSummary(profile, officerRoles, teacherYears, res.teaching || []);
        },
        error: function() {
            renderClasses([]);
            renderSummary(profile, officerRoles, teacherYears, []);
        }
    });
});
