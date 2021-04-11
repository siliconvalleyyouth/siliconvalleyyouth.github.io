var Officers20212022 = [
    ["Leo Yang", "President"],
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
var Officers20202021 = [
    ["Oliver Ye", "President"],
    ["Cynthia Jia", "EVP of Human Resources"],
    ["Leo Yang", "EVP of Operations"],
    ["Michael Ma", "EVP of Marketing"],
    ["Cayden Gu", "Co-VP of Technology <br> Los Altos Site Co-Director"],
    ["Justin Gu", "Co-VP of Technology <br> Los Altos Site Co-Director"],
    ["Sean Yang", "VP of Science and CS"],
    ["Royce Ren", "VP of Debate"],
    ["Andy Xu", "VP of Public Speaking"],
    ["Samika Swamy","Assistant VP of Science and CS"],
    ["Kevin Wang", "VP of Math"],
    ["Max Zhang", "VP of Humanities <br> Miller Site Director"],
    ["Michael Song", "Bandley Center Site Director"],
    ["Charles Li", "Saratoga Site Director"],
];
var Officers20192020 = [
    ["Eric Yang", "Co-President"],
    ["Oliver Ye", "Co-President"],
    ["Cindy Xu", "Executive Vice-President"],
    ["Arthur Ji", "Executive Vice-President"],
    ["Tony Jiang", "VP of Technology and Web Development"],
    ["Zachary Wang", "VP of Communications"],
    ["Andy Li", "VP of Public Speaking"],
    ["Anouk Yeh", "Assistant VP of Public Speaking"],
    ["Royce Ren", "VP of Debate"],
    ["Cynthia Jia", "VP of Science"],
    ["Alex Wang", "VP of Math"],
    ["Stefan Meier", "VP of Humanities and Social Sciences"],
    ["Steven Long", "VP of Computer Science"],
    ["Sean Yang", "Assistant VP of Computer Science"],
    ["Ansh Chaurasia", "Secretary"],
    ["Leo Yang", "Omei Business Operations Manager"],
    ["Max Zhang", "Miller Business Operations Manager"],
    ["Cindy Li", "Saratoga Business Operations Manager"],
];
var Officers20172018 = [
    ["Brandon Fu", "Co-President"],
    ["Sam Yang", "Co-President"],
    ["Oliver Ye", "VP of Science"],
    ["Andrew Zhao", "VP of Math, VP of Computer Science"],
    ["Arthur Ji", "Assistant VP of Computer Science"],
    ["Ansh Chaurasia", "Secretary"],
    ["Winnie Zhao", "Gunn Facility Coordinator"],
    ["Leo Yang", "Miller Facility Coordinator"],
];
for (var m =0; m<3; m++) {
    var container;
    var Officers;
    if(m==0) {
        Officers = Officers20202021;
        container = document.getElementById("2020-2021")
    }else if (m==1){
        Officers = Officers20192020;
        container = document.getElementById("2019-2020")
    }else if (m==2) {
        Officers = Officers20172018;
        container = document.getElementById("2017-2018")
    }
    for(var i =0; i<Officers.length; i++) {
        if (i%3 == 0) {
            var row = document.createElement('div')
            row.className += " row"
            container.appendChild(row)
        }
        var name = Officers[i][0];
        var position = Officers[i][1];
        var imgurl = ""
        for (var k = 0; k<teachers.length; k++){
            if(teachers[k].name === name) {
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
}
