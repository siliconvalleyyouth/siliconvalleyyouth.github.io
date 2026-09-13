function profileSlugFromName(name) {
    return String(name || "").replace(/\s+/g, " ").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function profileUrlForTeacher(name, options) {
    var cleanName = String(name || "").trim();
    var opts = options || {};
    if (window.SVYProfiles) {
        try {
            if (SVYProfiles.profileUrlForTeacher) {
                return SVYProfiles.profileUrlForTeacher(cleanName, opts);
            }
            return SVYProfiles.profileUrl(cleanName);
        } catch (error) {
            console.warn(error);
        }
    }
    return "/profile.html?id=" + encodeURIComponent(profileSlugFromName(cleanName));
}

function profileUrlForName(name) {
    return profileUrlForTeacher(name);
}

function linkProfileElement(selector, name, options) {
    var cleanName = String(name || "").trim();
    if (!cleanName || !$(selector).length) {
        return;
    }
    var link = $("<a></a>").attr("href", profileUrlForTeacher(cleanName, options)).text(cleanName);
    $(selector).empty().append(link);
}

function linkProfileImageElement(selector, name, options) {
    var cleanName = String(name || "").trim();
    if (!cleanName || !$(selector).length) {
        return;
    }
    $(selector)
        .css("cursor", "pointer")
        .attr("title", "View " + cleanName + "'s profile")
        .off("click.profile")
        .on("click.profile", function(event) {
            event.preventDefault();
            event.stopPropagation();
            window.location.href = profileUrlForTeacher(cleanName, options);
        });
}
