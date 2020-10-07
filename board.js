var Board = [
    ["Bryan Owens"],
    ["Benjamin Owens"],
    ["Brandon Fu"],
    ["Sam Yang"],
    ["Eric Yang"]
];

var container;
container = document.getElementById("board-names")

for (var i = 0; i < Board.length; i++) {
    if (i % 3 == 0) {
        var row = document.createElement('div')
        row.className += " row"
        container.appendChild(row)
    }
    var name = Board[i];
    var imgurl = ""
    for (var k = 0; k < teachers.length; k++) {
        if (teachers[k].name === name) {
            imgurl = teachers[k].imgurl;
        }
    }
    var column = document.createElement('div')
    column.className += " col-md-4"
    var card = document.createElement('div')
    var img = document.createElement('img')
    var div = document.createElement('div')
    var h2 = document.createElement('h2')
    card.className += " officer slideanim"
    img.setAttribute('src', 'images/team/' + imgurl)
    div.className += " bio"
    h2.innerHTML = name
    div.appendChild(h2)
    card.appendChild(img)
    card.appendChild(div)
    column.appendChild(card)
    container.lastChild.appendChild(column)
}

