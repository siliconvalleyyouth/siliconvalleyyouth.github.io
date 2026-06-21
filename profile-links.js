function profileSlugFromName(name) {
    return String(name || "").replace(/\s+/g, " ").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function profileUrlForName(name) {
    if (window.SVYProfiles) {
        try {
            return SVYProfiles.profileUrl(name);
        } catch (error) {
            console.warn(error);
        }
    }
    return "/profile.html?id=" + encodeURIComponent(profileSlugFromName(name));
}

function linkProfileElement(selector, name) {
    var cleanName = String(name || "").trim();
    if (!cleanName || !$(selector).length) {
        return;
    }
    var link = $("<a></a>").attr("href", profileUrlForName(cleanName)).text(cleanName);
    $(selector).empty().append(link);
}
