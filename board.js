var Board = [
    ["bryan-owens"],
    ["benjamin-owens"],
    ["brandon-fu"],
    ["sam-yang"],
    ["eric-yang"],
    ["oliver-ye"],
    ["leo-yang"]
];

var container;
container = document.getElementById("board-names")

if (container) for (var i = 0; i < Board.length; i++) {
    if (i % 3 == 0) {
        var row = document.createElement('div')
        row.className += " row"
        container.appendChild(row)
    }
    var profileRef = Board[i][0];
    var profile = SVYProfiles.get(profileRef);
    var name = profile.name;
    var column = document.createElement('div')
    column.className += " col-md-4"
    var card = document.createElement('div')
    var img = document.createElement('img')
    var div = document.createElement('div')
    var h2 = document.createElement('h2')
    card.className += " officer slideanim"
    img.setAttribute('src', SVYProfiles.imagePath(profileRef))
    div.className += " bio"
    h2.innerHTML = '<a class="profile-link" href="' + SVYProfiles.profileUrl(profileRef) + '">' + name + '</a>'
    div.appendChild(h2)
    card.appendChild(img)
    card.appendChild(div)
    column.appendChild(card)
    container.lastChild.appendChild(column)
}
