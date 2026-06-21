function openBioAction(name, position, description) {
    $("#bio").fadeIn();
    $("#cover").fadeIn();
    $("#bio h2").html(name);
    $("#bio h3").html(position);
    $("#bio p").html(description);
}

function makeOpenBioCallback(name, position, description) {
    return function() {
        var profile = SVYProfiles.get(name);
        openBioAction(profile.name, position, SVYProfiles.description(name, description));
    }
}

function hydrateStaticProfileCards() {
    $(".officer").each(function() {
        var card = $(this);
        var name = card.find(".bio h2").first().text();
        var position = card.find(".bio h4").first().html() || "";
        if (!name) {
            return;
        }
        var profile = SVYProfiles.get(name);
        card.find("img").first().attr("src", SVYProfiles.imagePath(profile.id || name));
        card.find(".bio h2").first().html('<a class="profile-link" href="' + SVYProfiles.profileUrl(profile.id || name) + '">' + profile.name + '</a>');
        card.find("a.profile-link").off("click.profile").on("click.profile", function(event) {
            event.stopPropagation();
        });
        card.off("click.profile").on("click.profile", makeOpenBioCallback(name, position, ""));
    });
}

$(document).on("click", "a.profile-link", function(event) {
    event.stopPropagation();
});
	
	
var Officers20252026 = [
    ["florence-wei", "EVP of Marketing", ""],
    ["seabert-mao","EVP of Operations",""],
    ["gabrielle-he", "co-EVP of Academics", ""],
    ["angela-li", "co-EVP of Academics", ""],
    ["kurn-sundaram","VP of Public Speaking and Debate",""],
    ["archer-jin","VP of Events",""],
    ["elliot-seo","VP of Learning and Development",""],
    ["sean-wu","VP of Humanities",""],
    ["jason-kuo","VP of Finance",""],
    ["bryan-han","Webmaster",""],
    ["anthony-zhou","Webmaster",""],
    ["minglang-du","Webmaster",""],
    ["crystal-zhu","Site Director",""],
];	

var container;
var Officers;
Officers = Officers20252026;
container = document.getElementById("2025-2026")
if (container) for (var i = 0; i < Officers.length; i++) {
    if (i % 3 == 0) {
        var row = document.createElement('div')
        row.className += " row"
        container.appendChild(row)
    }
    var officer_ref = Officers[i][0];
    var officer_profile = SVYProfiles.get(officer_ref);
    var officer_name = officer_profile.name;
    var officer_position = Officers[i][1];
    var officer_description = Officers[i][2];
    var column = document.createElement('div')
    column.className += " col-md-4"
    var card = document.createElement('div')
    var img = document.createElement('img')
    var div = document.createElement('div')
    var h2 = document.createElement('h2')
    var h4 = document.createElement('h4')
    card.className += " officer slideanim"
    img.setAttribute('src', SVYProfiles.imagePath(officer_ref))
    div.className += " bio"
    h2.innerHTML = '<a class="profile-link" href="' + SVYProfiles.profileUrl(officer_ref) + '">' + officer_name + '</a>'
    h4.innerHTML = officer_position
    div.appendChild(h2)
    div.appendChild(h4)
    card.onclick = makeOpenBioCallback(officer_ref, officer_position, officer_description);
    card.appendChild(img)
    card.appendChild(div)
    column.appendChild(card)
    container.lastChild.appendChild(column)
}

if (container) {
    hydrateStaticProfileCards();
}
