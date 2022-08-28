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
	
	
	
	
var Officers20222023 = [
    ["Aiden Ye", "EVP of Marketing", ""],
    ["Anping Zhu", "EVP of Academics", ""],
    ["Cayden Gu","EVP of Operations",""],
    ["Timothy Leung", "VP of Media", ""],
    ["Minh Do", "VP of Media", ""],
    ["Alison Yang", "VP of Teacher Development", ""],
    ["Kevin Shi","VP of Technology",""],
    ["Tony Zhou","VP of Technology",""],
    ["Charles Li","VP of Finance & Site Director",""],
    ["Jasmine Yuan","VP of Humanities",""],
    ["Derek Li","VP of Humanities (Assistant)",""],
    ["Grace Li","VP of Science",""],
    ["Eric Wang","VP of Math",""],
    ["Bryan Liu","VP of Debate & Speech",""],
    ["Austin Liu","VP of CS",""],
    ["Kyleen Liao","VP of CS (Assistant)",""],
];

var container;
var Officers;
Officers = Officers20222023;
container = document.getElementById("2022-2023")
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
    img.setAttribute('src', 'images/teamphoto/' + imgurl)
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
