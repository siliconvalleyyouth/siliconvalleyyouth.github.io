function getParam(name) {
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.href);
    if (results == null) {
        return null;
    }
    return decodeURIComponent(results[1]) || "";
}

function normalizeProfileNameForCompare(name) {
    return String(name || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function profileMatchesReference(ref, profile) {
    return ref === profile.id || normalizeProfileNameForCompare(ref) === normalizeProfileNameForCompare(profile.name);
}

function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function termOrder(term) {
    var order = { spring: 1, summer: 2, fall: 3, winter: 4 };
    return order[String(term || "").toLowerCase()] || 9;
}

function timelineLabel(year, term) {
    var normalizedTerm = String(term || "");
    return year + " " + normalizedTerm.charAt(0).toUpperCase() + normalizedTerm.slice(1);
}

function timelineKey(year, term) {
    return year + "-" + String(term || "").toLowerCase();
}

function getOrCreateTimelineEntry(entriesByKey, year, term) {
    var key = timelineKey(year, term);
    if (!entriesByKey[key]) {
        entriesByKey[key] = {
            year: String(year || ""),
            term: String(term || "").toLowerCase(),
            officerRoles: [],
            classRoles: []
        };
    }
    return entriesByKey[key];
}

function officerSemesters(termId) {
    var years = String(termId || "").split("-");
    if (years.length !== 2) {
        return [];
    }
    return [
        { year: years[0], term: "fall" },
        { year: years[1], term: "spring" }
    ];
}

function addOfficerRoles(entriesByKey, profile) {
    var groups = window.SVY_OFFICER_TERMS || [];
    for (var i = 0; i < groups.length; i++) {
        var semesters = officerSemesters(groups[i].id);
        for (var j = 0; j < groups[i].officers.length; j++) {
            var officer = groups[i].officers[j];
            if (!profileMatchesReference(officer.profileId, profile)) {
                continue;
            }
            for (var k = 0; k < semesters.length; k++) {
                var entry = getOrCreateTimelineEntry(entriesByKey, semesters[k].year, semesters[k].term);
                entry.officerRoles.push(escapeHtml(officer.role));
            }
        }
    }
}

function collectOfficerDescriptions(profile) {
    var groups = window.SVY_OFFICER_TERMS || [];
    var descriptions = [];
    for (var i = 0; i < groups.length; i++) {
        var semesters = officerSemesters(groups[i].id);
        for (var j = 0; j < groups[i].officers.length; j++) {
            var officer = groups[i].officers[j];
            if (!profileMatchesReference(officer.profileId, profile) || !officer.description) {
                continue;
            }
            for (var k = 0; k < semesters.length; k++) {
                descriptions.push({
                    year: String(semesters[k].year || ""),
                    term: String(semesters[k].term || "").toLowerCase(),
                    description: officer.description
                });
            }
        }
    }
    return descriptions;
}

function classActionHtml(item) {
    var role = escapeHtml(item.role || "Teacher");
    var className = escapeHtml(item.classname || "Class");
    if (item.url) {
        className = '<a href="' + escapeHtml(item.url) + '">' + className + "</a>";
    }
    return role + " of " + className;
}

function addClassRoles(entriesByKey, classes) {
    for (var i = 0; i < classes.length; i++) {
        var item = classes[i];
        if (!item.year || !item.term) {
            continue;
        }
        var entry = getOrCreateTimelineEntry(entriesByKey, item.year, item.term);
        entry.classRoles.push(classActionHtml(item));
    }
}

function dedupe(items) {
    var seen = {};
    var result = [];
    for (var i = 0; i < items.length; i++) {
        if (seen[items[i]]) {
            continue;
        }
        seen[items[i]] = true;
        result.push(items[i]);
    }
    return result;
}

function combinedTimeline(profile, classes) {
    var entriesByKey = {};
    addOfficerRoles(entriesByKey, profile);
    addClassRoles(entriesByKey, classes || []);

    return Object.keys(entriesByKey).map(function(key) {
        var entry = entriesByKey[key];
        entry.officerRoles = dedupe(entry.officerRoles);
        entry.classRoles = dedupe(entry.classRoles);
        return entry;
    }).sort(function(a, b) {
        var yearDiff = Number(a.year) - Number(b.year);
        if (yearDiff !== 0) {
            return yearDiff;
        }
        return termOrder(a.term) - termOrder(b.term);
    });
}

function renderTimeline(profile, classes) {
    var container = $("#timeline-list");
    var items = combinedTimeline(profile, classes);
    container.empty();

    if (items.length === 0) {
        container.append("<p>No SVY timeline data found yet.</p>");
        return items;
    }

    var displayItems = items.slice().reverse();
    for (var i = 0; i < displayItems.length; i++) {
        var roles = displayItems[i].officerRoles.concat(displayItems[i].classRoles);
        container.append(
            '<div class="timeline-item">' +
                "<h3>" + timelineLabel(displayItems[i].year, displayItems[i].term) + "</h3>" +
                "<p>" + roles.join(" & ") + "</p>" +
            "</div>"
        );
    }
    return items;
}

function compareTimelineTime(a, b) {
    var yearDiff = Number(a.year) - Number(b.year);
    if (yearDiff !== 0) {
        return yearDiff;
    }
    var termDiff = termOrder(a.term) - termOrder(b.term);
    if (termDiff !== 0) {
        return termDiff;
    }
    return (a.priority || 0) - (b.priority || 0);
}

function latestDescription(profile, classes) {
    var candidates = collectOfficerDescriptions(profile);
    for (var i = 0; i < classes.length; i++) {
        var bio = String(classes[i].bio || "").trim();
        if (!bio) {
            continue;
        }
        candidates.push({
            year: String(classes[i].year || ""),
            term: String(classes[i].term || "").toLowerCase(),
            priority: 1,
            description: bio
        });
    }
    candidates = candidates.map(function(item) {
        return {
            year: item.year,
            term: item.term,
            priority: item.priority,
            description: String(item.description || "").trim()
        };
    }).filter(function(item) {
        return item.description && item.year && item.term;
    }).sort(compareTimelineTime);
    if (candidates.length > 0) {
        return candidates[candidates.length - 1].description;
    }
    return String(SVYProfiles.description(profile.id || profile.name, "") || "").trim();
}

function latestPhotoPath(profile, classes) {
    var fallback = SVYProfiles.imagePath(profile.id || profile.name);
    var candidates = [];
    var officerDescriptions = collectOfficerDescriptions(profile);
    for (var i = 0; i < officerDescriptions.length; i++) {
        candidates.push({
            year: officerDescriptions[i].year,
            term: officerDescriptions[i].term,
            priority: 0,
            path: fallback
        });
    }
    for (var j = 0; j < classes.length; j++) {
        if (!classes[j].image || !classes[j].year || !classes[j].term) {
            continue;
        }
        candidates.push({
            year: String(classes[j].year || ""),
            term: String(classes[j].term || "").toLowerCase(),
            priority: 1,
            path: "images/" + classes[j].year + "Headshots/" + String(classes[j].term || "").toLowerCase() + "/" + classes[j].image + ".jpg"
        });
    }
    candidates = candidates.filter(function(item) {
        return item.path && item.year && item.term;
    }).sort(compareTimelineTime);
    if (candidates.length > 0) {
        return candidates[candidates.length - 1].path;
    }
    return fallback;
}

function journeySummary(profile, timelineItems) {
    if (timelineItems.length > 0) {
        var first = timelineItems[0];
        var latest = timelineItems[timelineItems.length - 1];
        return (
            profile.name + "'s SVY journey spans " +
            timelineLabel(first.year, first.term) + " to " +
            timelineLabel(latest.year, latest.term) + "."
        );
    }
    return "";
}

function renderSummary(profile, timelineItems, classes) {
    $("#profile-summary").text(latestDescription(profile, classes || []) || journeySummary(profile, timelineItems));
}

function renderPhoto(profile, classes) {
    var fallback = SVYProfiles.imagePath(profile.id || profile.name);
    $("#profile-photo")
        .attr("src", latestPhotoPath(profile, classes || []))
        .off("error")
        .on("error", function() {
            if ($(this).attr("src") !== fallback) {
                $(this).attr("src", fallback);
            }
        });
}

$(document).ready(function() {
    var profileRef = getParam("id") || getParam("name");
    var profile = SVYProfiles.get(profileRef);
    $("#profile-name").text(profile.name);
    renderPhoto(profile, []);

    var config = window.SVY_CONFIG || {};
    var backendBaseUrl = config.backendBaseUrl || "https://siliconvalleyyouth.herokuapp.com";
    $.ajax({
        type: "GET",
        url: backendBaseUrl + "/api/profile-timeline?name=" + encodeURIComponent(profile.name),
        dataType: "json",
        success: function(res) {
            var classes = res.teaching || [];
            var timelineItems = renderTimeline(profile, classes);
            renderPhoto(profile, classes);
            renderSummary(profile, timelineItems, classes);
        },
        error: function() {
            var timelineItems = renderTimeline(profile, []);
            renderPhoto(profile, []);
            renderSummary(profile, timelineItems, []);
        }
    });
});
