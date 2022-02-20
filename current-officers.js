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
    ["Justin Gu", "EVP of Operations", ""],
    ["Michael Ma", "EVP of Marketing", "As the Executive Vice President of Marketing, Michael Ma oversees advertising for classes at the beginning of semesters as well as handles general public relations. He has been teaching various Public Speaking classes at SVY for nine sessions. Michael enjoys being able to share his public speaking passion with younger students as well as having the opportunity to teach and work in a classroom environment."],
    ["Annli Zhu", "EVP of Human Resources", ""],
    ["Anping Zhu", "VP of Learning and Development", "As the VP of Learning and Development, Anping Zhu carries out teacher training sessions to improve teaching quality and assists in developing curriculum with new teachers. In the past, he has taught World History and Model United Nations, for a combined three semesters. SVY has been a valuable experience for him, improving his leadership and organizational skills."],
    ["Cayden Gu", "VP of Technology", ""],
    ["Tony Zhou", "Webmaster", "As one of the two webmasters, Tony Zhou works to maintain the website by uploading teacher bios, class descriptions, teacher headshots, and class signup lists. He has been teaching various classes ranging from public speaking to web design at SVY for 6 sessions. Tony enjoys teaching and having fun with his students at SVY, and loves seeing his younger students grow and develop as they progress through his classes."],
    ["Kevin Shi", "Webmaster", ""],
    ["Aiden Ye", "VP of Finance", "As the VP of finance, Aiden manages the funds of the organization, and handles reimbursement requests as well as refunds. Aiden has been teaching mathematics and sciencebowl over the past two years, and enjoys sharing his experience as well as helping students perform better. He enjoys teaching at because it is a great way for him to help motivate new students and hopes to help his community more with SVY."],
    ["Tim Jing", "VP of Events", ""],
    ["Samika Swamy", "VP of Science", ""],
    ["Shreyas Rana", "VP of CS", "As the Vice President of Computer Science, Shreyas Rana oversees the CS department classes and assists new teachers. He has been teaching Intermediate Java for 3 semesters so far. Shreyas enjoys being a part of Silicon Valley Youth because he is able to share his experiences in Computer Science with other students in his community."],
    ["Max Zhang", "VP of Humanities", "As the Vice President of Humanities, Max Zhang handles the course management of the Humanities department. He has taught US History for 8 semesters now, as well as Basketball and Grammar/Vocab in the past, for a total of 5 years now. Max enjoys passing on his knowledge to younger students and watching them learn and grow throughout the course in each semester."],
    ["Andy Xu", "VP of Public Speaking and Debate", ""],
    ["Eric Wang", "VP of Math", ""],
    ["Kaitlyn Wang", "Assisstant VP of Math", ""],
    ["Michael Song", "Facilities Director", ""],
    ["Charles Li", "Facilities Director", ""],
    ["Chloe Lee", "Facilities Manager", ""],
    ["Rachel Chan", "Facilities Manager", "As a site director, Rachel Chan oversees the logistics of the organization’s facilities secures designated time slots for each class. Rachel has been Intermediate Java for the past three semesters and enjoys sharing her love for programming with others. Not only does she appreciate having the opportunity to expand the capabilities of youth through this organization, but she’s also very excited to see the impacts SVY will make in the upcoming future."],
    ["Sudithi Manthati", "Facilities Manager", ""],
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
