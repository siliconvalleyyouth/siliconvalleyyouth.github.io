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
	
	
	
	
var Officers20242025 = [
    ["Edward Feng", "EVP of Marketing", ""],
    ["Skyler Mao","EVP of Operations",""],
    ["Isabella Shen", "co-EVP of Academics", ""],
    ["Thomas Wu", "co-EVP of Academics", ""],
    ["Aarav Garai","VP of Math",""],
    ["Samuel Ma","VP of Public Speaking and Debate",""],
    ["Florence Wei","VP of Events & Site Director",""],
    ["Raymond Feng","VP of Learning and Development"],
    ["Alan Yue","VP of Humanities",""],
    ["Yash Ranjith","VP of STEM",""],
    ["Seabert Mao","VP of Technology",""],
    ["Thomas Wu","VP of Science",""],
    ["Jason Kuo","Interim VP of Finance",""],
    ["Lucas Lum","Associate VP of Math",""]
];

var container;
var Officers;
Officers = Officers20242025;
container = document.getElementById("2024-2025")
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
