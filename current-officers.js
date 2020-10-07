var Officers20202021 = [
    ["Cynthia Jia", "EVP of Human Resources"],
    ["Leo Yang", "EVP of Operations"],
    ["Michael Ma", "EVP of Marketing"],
    ["Sean Yang", "VP of Science and CS"],
    ["Cayden Gu", "Co-VP of Technology <br> Los Altos Site Co-Director"],
    ["Justin Gu", "Co-VP of Technology <br> Los Altos Site Co-Director"],
    ["Royce Ren", "VP of Debate"],
    ["Andy Xu", "VP of Public Speaking"],
    ["Samika Swamy","Assistant VP of Science and CS"],
    ["Kevin Wang", "VP of Math"],
    ["Max Zhang", "VP of Humanities <br> Miller Site Director"],
    ["Michael Song", "Bandley Center Site Director"],
    ["Charles Li", "Saratoga Site Director"],
];

var container;
var Officers;
Officers = Officers20202021;
container = document.getElementById("2020-2021")
for (var i = 0; i < Officers.length; i++) {
    if (i % 3 == 0) {
        var row = document.createElement('div')
        row.className += " row"
        container.appendChild(row)
    }
    var name = Officers[i][0];
    var position = Officers[i][1];
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
    var h4 = document.createElement('h4')
    card.className += " officer slideanim"
    img.setAttribute('src', 'images/team/' + imgurl)
    div.className += " bio"
    h2.innerHTML = name
    h4.innerHTML = position
    div.appendChild(h2)
    div.appendChild(h4)
    card.appendChild(img)
    card.appendChild(div)
    column.appendChild(card)
    container.lastChild.appendChild(column)
}
