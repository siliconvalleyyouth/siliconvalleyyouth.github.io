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
    {"name": "Frances Zhuang", "imgurl": "frances.JPG"},
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
    {"name": "Winnie Zhao", "imgurl":"winnie.JPG"},
    {"name": "Zachary Wang", "imgurl":"zachary.jpg"}
]
//images under base path ./images/team
var container = document.getElementById("teacher-container")

for (var i = 0; i<teachers.length; i++) {
    if(i%6 == 0) {
        var row = document.createElement('div')
        row.className += " row"
        row.setAttribute("data-aos", "fade-up")
        container.appendChild(row)
    }
    var column = document.createElement('div')
    column.className += " col-lg-2 teacher-div"
    column.innerHTML = teachers[i].name
    var imgContainer = document.createElement('div')
    imgContainer.className += ' img-container'
    var link = "./images/ResizedTeamPhotos/" + teachers[i].imgurl
    imgContainer.style.backgroundImage = 'url(' + link  + ')'
    column.appendChild(imgContainer)
    // var img = document.createElement('img')
    // img.className += ' teacher-img'
    // img.setAttribute('src', "./images/team/" + teachers[i].imgurl)
    // column.appendChild(img)
    container.lastChild.appendChild(column)

}

