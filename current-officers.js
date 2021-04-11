function openBioAction(name, position, description) {
    $("#bio").fadeIn();
    $("#cover").fadeIn();
    $("#bio h2").html(name);
    $("#bio h3").html(position);
    $("#bio p").html(description);
}

function makeOpenBioCallback(name, position, description) {
    return function() {
        openBioAction(name, position, description);
    }
}

var Officers20212022 = [
    ["Annli Zhu", "EVP of Human Resources"],
    ["Justin Gu", "EVP of Operations"],
    ["Michael Ma", "EVP of Marketing"],
    ["Cayden Gu", "VP of Technology"],
    ["Tony Zhou", "Webmaster"],
    ["Kevin Shi", "Webmaster"],
    ["Anping Zhu", "VP of Learning and Development"],
    ["Aiden Ye", "VP of Finance"],
    ["Kevin Wang", "VP of Math"],
    ["Kaitlyn Wang", "Assisstant VP of Math"],
    ["Samika Swamy", "VP of Science"],
    ["Shreyas Rana", "VP of CS"],
    ["Max Zhang", "VP of Humanities"],
    ["Andy Xu", "VP of Public Speaking and Debate"],
    ["Michael Song", "Facilities Director"],
    ["Chloe Lee", "Facilities Manager"],
    ["Rachel Chan", "Facilities Manager"],
    ["Sudithi Manthati", "Facilities Manager"],
];

var container;
var Officers;
Officers = Officers20212022;
container = document.getElementById("2021-2022")
for (var i = 0; i < Officers.length; i++) {
    if (i % 3 == 0) {
        var row = document.createElement('div')
        row.className += " row"
        container.appendChild(row)
    }
    var officer_name = Officers[i][0];
    var officer_position = Officers[i][1];
    var officer_description = Officers[i][2];
    var imgurl = ""
    for (var k = 0; k < teachers.length; k++) {
        if (teachers[k].name === officer_name) {
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
    h2.innerHTML = officer_name
    h4.innerHTML = officer_position
    div.appendChild(h2)
    div.appendChild(h4)
    card.onclick = makeOpenBioCallback(officer_name, officer_position, officer_description);
    card.appendChild(img)
    card.appendChild(div)
    column.appendChild(card)
    container.lastChild.appendChild(column)
}
