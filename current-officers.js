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
	
	
	
	
var Officers20232024 = [
    ["Alison Yang", "EVP of Marketing", ""],
    ["Timothy Leung", "EVP of Academics", ""],
    ["Kevin Shi","EVP of Operations",""],
    ["Minh Do", "VP of Media", ""],
    ["Skyler Mao","VP of Technology",""],
    ["Seabert Mao","VP of Technology",""],
    ["Derek Li","VP of Finance & Site Director",""],
    ["Isabella Watson","VP of Humanities",""],
    ["Angeline Hu","VP of Events"],
    ["Eric Wang","VP of Learning and Development"],
    ["Thomas Wu","VP of Science",""],
    ["Aarav Garai","VP of Math",""],
    ["Bryan Liu","VP of Public Speaking and Debate",""],
    ["Kyleen Liao","VP of CS",""],
    ["Yash Ranjith","VP of CS (Assistant)",""],
];

var container;
var Officers;
Officers = Officers20232024;
container = document.getElementById("2023-2024")
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
