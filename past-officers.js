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
var Officers20182019 = [
    ["Sam Yang", "Co-President"],
    ["Brandon Fu", "Co-President"],
    ["Oliver Ye", "VP of Science"],
    ["Arthur Ji", "VP of Computer Science"],
    ["Andrew Zhao", "VP of Math"],
    ["Steven Long", "Assistant VP of Computer Science"],
    ["Stefan Meier", "VP of Humanities & Social Sciences"],
    ["Andy Li", "VP of Public Speaking"],
    ["Cindy Xu", "VP of Debate"],
    ["Leo Yang", "Secretary"],
    ["Eric Yang", "Public Relations Offier"],
    ["Tony Jiang", "Webmaster"],
    ["Cindy Li", "Saratoga Facility Coordinator"],
    ["Max Zhang", "Miller Facility Coordinator"],
    ["Julia Zhao", "Gunn Facility Coordinator"],
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
var Officers20162017 = [
    ["Bryan Owens", "Co-President"],
    ["Benjamin Owens", "Co-President"],
    ["Oliver Ye", "Secretary"],
];
var Officers20152016 = [
    ["Bryan Owens", "Co-President"],
    ["Benjamin Owens", "Co-President"],
    ["Oliver Ye", "Secretary"],
];
for (var m=0; m<5; m++) {
    var container;
    var Officers;
    if(m==0) {
        Officers = Officers20192020;
        container = document.getElementById("2019-2020")
    }else if (m==1){
        Officers = Officers20182019;
        container = document.getElementById("2018-2019")
    }else if (m==2) {
        Officers = Officers20172018;
        container = document.getElementById("2017-2018")
    }else if (m==3) {
        Officers = Officers20162017;
        container = document.getElementById("2016-2017")
    }else if (m==4) {
        Officers = Officers20152016;
        container = document.getElementById("2015-2016")
    }
    for(var i =0; i<Officers.length; i++) {
        if (i%4 == 0) {
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
        column.className += " col-md-3"
        var card = document.createElement('div')
        var img = document.createElement('img')
        var div = document.createElement('div')
        var h2 = document.createElement('h2')
        var h4 = document.createElement('h4')
        card.className += " officer slideanim pastofficer "
        img.setAttribute('src', 'images/team/' + imgurl)
        div.className += " bio pastofficer "
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
