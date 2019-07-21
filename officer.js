var teachers = [
    {"name": "Bryan Owens", "imgurl": "bryan.jpg"},
    {"name": "Benjamin Owens", "imgurl": "ben.jpg"},
    {"name": "Alex Lee", "imgurl": "alexlee.jpg"},
    {"name": "Alex Niu", "imgurl":"alexniu.jpg"},
    {"name": "Alex Wang", "imgurl": "alexwang.jpg"},
    {"name": "Alex Xu", "imgurl":"alexxu.jpg"},
    {"name": "Alex Zhang", "imgurl":"alexzhang.jpg"},
    {"name": "Alex Zheng", "imgurl":"alexzheng.png"},
    {"name": "Alvin Tian", "imgurl":"alvin.jpg"},
    {"name": "Andrew Zhao", "imgurl":"andrew.jpg"},
    {"name": "Andrew Zhou", "imgurl":"andrewzhou.jpg"},
    {"name": "Andy Li", "imgurl":"andy.jpg"},
    {"name": "Andy Xu", "imgurl":"andyxu.jpg"},
    {"name": "Angelica Wang", "imgurl":"angelica.jpg"},
    {"name": "Anouk Yeh", "imgurl":"anouk.jpg"},
    {"name": "Ansh Chaurasia", "imgurl":"ansh.jpg"},
    {"name": "Arthur Ji", "imgurl":"arthur.jpg"},
    {"name": "Arthur Zhou", "imgurl":"arthurzhou.jpg"},
    {"name": "Ashok Sheridan", "imgurl":"ashok.jpg"},
    {"name": "Brandon Fu", "imgurl":"brandon.jpg"},
    {"name": "Carter Bian", "imgurl":"carter.jpg"},
    {"name": "Chris Lee", "imgurl":"chris.jpg"},
    {"name": "Cindy Li", "imgurl":"cindyli.jpg"},
    {"name": "Cindy Xu", "imgurl":"cindyxu.jpg"},
    {"name": "Claire Cheng", "imgurl":"claire.jpg"},
    {"name": "Cynthia Jia", "imgurl":"cynthia.jpg"},
    {"name": "Darren Zhan", "imgurl":"darren.jpg"},
    {"name": "Derrick Cai", "imgurl":"derrick.jpg"},
    {"name": "Emma Lu", "imgurl":"emma.jpg"},
    {"name": "Eric Yang", "imgurl":"eric.jpg"},
    {"name": "Eric Ren", "imgurl":"ericren.jpg"},
    {"name": "Ethan Chen", "imgurl":"ethan.jpg"},
    {"name": "Henry Huang", "imgurl":"henry.jpg"},
    {"name": "Henry Ying", "imgurl":"henryying.jpg"},
    {"name": "Isaac Li", "imgurl":"isaac.jpg"},
    {"name": "Jason Yang", "imgurl":"jason.jpg"},
    {"name": "Jeffrey Tian", "imgurl":"jeffrey.jpg"},
    {"name": "Jerry Ying", "imgurl":"jerry.jpg"},
    {"name": "Joey He", "imgurl":"joey.jpg"},
    {"name": "Joshua Si", "imgurl":"joshua.jpg"},
    {"name": "Joshua Zhu", "imgurl":"joshuazhu.jpg"},
    {"name": "Julia Zhao", "imgurl":"julia.jpg"},
    {"name": "Leo Yang", "imgurl":"leo.jpg"},
    {"name": "Mallika Parulekar", "imgurl":"mallika.jpg"},
    {"name": "Martin Cooper", "imgurl":"martin.jpg"},
    {"name": "Matthew Wu", "imgurl":"matthew.jpg"},
    {"name": "Max Zhang", "imgurl":"max.jpg"},
    {"name": "Michael Hu", "imgurl":"michaelhu.jpg"},
    {"name": "Michael Ma", "imgurl":"michaelma.jpg"},
    {"name": "Michael Song", "imgurl":"michaelsong.jpg"},
    {"name": "Michael Zheng", "imgurl":"michaelzheng.jpg"},
    {"name": "Neil Weaver", "imgurl":"neil.jpg"},
    {"name": "Oliver Ye", "imgurl":"oliver.jpg"},
    {"name": "Oliver Zhang", "imgurl":"oliverzhang.jpg"},
    {"name": "Paul Zhao", "imgurl":"paul.jpg"},
    {"name": "Ray Zhou", "imgurl":"ray.jpg"},
    {"name": "Raymond Feng", "imgurl":"raymond.jpg"},
    {"name": "Royce Ren", "imgurl":"royce.jpg"},
    {"name": "Sam Yang", "imgurl":"sam.jpg"},
    {"name": "Samuel Yang", "imgurl":"samuel.jpg"},
    {"name": "Sean Yang", "imgurl":"sean.jpg"},
    {"name": "Shawn Huang", "imgurl":"shawn.jpg"},
    {"name": "Shreya Kashyap", "imgurl":"shreya.jpg"},
    {"name": "Stefan Meier", "imgurl":"stefan.jpg"},
    {"name": "Stephanie Lee", "imgurl":"stephanie.jpg"},
    {"name": "Steven Long", "imgurl":"steven.jpg"},
    {"name": "Taimin Lio", "imgurl":"taimin.jpg"},
    {"name": "Tim Jing", "imgurl":"tim.jpg"},
    {"name": "Tony Jiang", "imgurl":"tony.jpg"},
    {"name": "Trinity Gao", "imgurl":"trinity.jpg"},
    {"name": "Tristan Cooper", "imgurl":"tristan.jpg"},
    {"name": "Victor Shen", "imgurl":"victor.jpg"},
    {"name": "Viola Zhao", "imgurl":"viola.jpg"},
    {"name": "Zachary Wang", "imgurl":"zachary.jpg"}
]
var Officers20192020 = [
    ["Eric Yang", "Co-President"],
    ["Oliver Ye", "Co-President"],
    ["Cindy Xu", "Executive Vice-President"],
    ["Arthur Ji", "Executive Vice-President"],
    ["Tony Jiang", "VP of Technology and Web Development"],
    ["Zachary Wang", "VP of Communications"],
    ["Ansh Chaurasia", "Secretary"],
    ["Andy Li", "VP of Public Speaking"],
    ["Anouk Yeh", "Assistant VP of Public Speaking"],
    ["Royce Ren", "VP of Debate"],
    ["Yixin Jia", "VP of Science"],
    ["Alex Wang", "VP of Math"],
    ["Stefan Meier", "VP of Humanities and Social Sciences"],
    ["Steven Long", "VP of Computer Science"],
    ["Sean Yang", "Assistant VP of Computer Science"],
    ["Leo Yang", "Omei Facility Coordinator"],
    ["Max Zhang", "Miller Facility Coordinator"],
    ["Cindy Li", "Saratoga Facility Coordinator"],
];
var container = document.getElementById("2019-2020")
for(var i =0; i<Officers20192020.length; i++) {
    if (i%3 == 0) {
        var row = document.createElement('div')
        row.className += " row"
        container.appendChild(row)
    }
    var name = Officers20192020[i][0];
    var position = Officers20192020[i][1];
    console.log(name)
    console.log(position)
    var imgurl = ""
    for (var k = 0; k<teachers.length; k++){
        if(teachers[k].name === name) {
            imgurl = teachers[k].imgurl;
        }
    }
    var column = document.createElement('div')
    column.className += " col-sm-4"
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
