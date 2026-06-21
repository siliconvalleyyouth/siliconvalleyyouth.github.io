var Officers20202021 = [
    ["oliver-ye", "President"],
    ["cynthia-jia", "EVP of Human Resources"],
    ["leo-yang", "EVP of Operations"],
    ["michael-ma", "EVP of Marketing"],
    ["cayden-gu", "Co-VP of Technology <br> Los Altos Site Co-Director"],
    ["justin-gu", "Co-VP of Technology <br> Los Altos Site Co-Director"],
    ["sean-yang", "VP of Science and CS"],
    ["royce-ren", "VP of Debate"],
    ["andy-xu", "VP of Public Speaking"],
    ["samika-swamy","Assistant VP of Science and CS"],
    ["kevin-wang", "VP of Math"],
    ["max-zhang", "VP of Humanities <br> Miller Site Director"],
    ["michael-song", "Bandley Center Site Director"],
    ["charles-li", "Saratoga Site Director"],
];
var Officers20192020 = [
    ["eric-yang", "Co-President"],
    ["oliver-ye", "Co-President"],
    ["cindy-xu", "Executive Vice-President"],
    ["arthur-ji", "Executive Vice-President"],
    ["tony-jiang", "VP of Technology and Web Development"],
    ["zachary-wang", "VP of Communications"],
    ["andy-li", "VP of Public Speaking"],
    ["anouk-yeh", "Assistant VP of Public Speaking"],
    ["royce-ren", "VP of Debate"],
    ["cynthia-jia", "VP of Science"],
    ["alex-wang", "VP of Math"],
    ["stefan-meier", "VP of Humanities and Social Sciences"],
    ["steven-long", "VP of Computer Science"],
    ["sean-yang", "Assistant VP of Computer Science"],
    ["ansh-chaurasia", "Secretary"],
    ["leo-yang", "Omei Business Operations Manager"],
    ["max-zhang", "Miller Business Operations Manager"],
    ["cindy-li", "Saratoga Business Operations Manager"],
];
var Officers20172018 = [
    ["brandon-fu", "Co-President"],
    ["sam-yang", "Co-President"],
    ["oliver-ye", "VP of Science"],
    ["andrew-zhao", "VP of Math, VP of Computer Science"],
    ["arthur-ji", "Assistant VP of Computer Science"],
    ["ansh-chaurasia", "Secretary"],
    ["winnie-zhao", "Gunn Facility Coordinator"],
    ["leo-yang", "Miller Facility Coordinator"],
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
        var column = document.createElement('div')
        column.className += " col-md-4"
        var card = document.createElement('div')
        var img = document.createElement('img')
        var div = document.createElement('div')
        var h2 = document.createElement('h2')
        var h4 = document.createElement('h4')
        card.className += " officer slideanim"
        img.setAttribute('src', SVYProfiles.imagePath(name))
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
