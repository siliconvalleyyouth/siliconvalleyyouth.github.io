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

var Officers20202021 = [
    ["Cynthia Jia", "EVP of Human Resources", "As the Executive Vice President of Human Resources, Cynthia Jia oversees the teacher interview process, establishes teacher training, and integrates class evaluation plans to ensure course quality. She has been teaching Biology for five sessions. Cynthia is passionate about working with young learners and inspiring students with scientific knowledge, creating a positive and fun environment for them to thrive."],
    ["Leo Yang", "EVP of Operations", "As the Executive Vice President of Operations, Leo Yang supervises all of the internal functionalities of SVY from classes to financials. He has taught classes such as US History and Basketball and is currently teaching Introduction to Java. Leo loves sharing interesting as well as fun experiences with students and enjoys his time teaching at Silicon Valley Youth. He hopes to help inspire students, as well as introduce them to new and useful ideas."],
    ["Michael Ma", "EVP of Marketing", "As the Executive Vice President of Marketing, Michael Ma oversees advertising for classes at the beginning of semesters as well as handles general public relations. He has been teaching various Public Speaking classes at SVY for seven sessions. Michael enjoys being able to share his public speaking passion with younger students as well as having the opportunity to teach and work in a classroom environment."],
    ["Sean Yang", "VP of Science and CS", "As the Vice President of Science & CS, Sean Yang manages the Science & CS department and helps review class materials for new teachers. He has been teaching Math and Physics for 7 semesters. Sean's favorite part of SVY is sharing his passion for STEM with young students and monitoring their progress throughout a class period."],
    ["Justin Gu", "Co-VP of Technology <br> Los Altos Site Co-Director", "As one of the Vice Presidents of Technology, Justin Gu manages the website. Every semester, he works with the other VP of Technology to update class lists, organize class registration, and maintain the SVY website. Justin has taught World History for two semesters and loves the opportunity to give back to the community."],
    ["Cayden Gu", "Co-VP of Technology <br> Los Altos Site Co-Director", "As one of the Vice Presidents of Technology, Cayden Gu manages the website. Every semester, he works with the other VP of Technology to update class lists, organize class registration, and maintain the SVY website. He has been teaching World History for two semesters and enjoys sharing his passion for history with his students."],
    ["Royce Ren", "VP of Debate", "As the Vice President of Debate, Royce Ren oversees and manages the operations and classes of the debate department. He has taught various Public Speaking and Debate classes for six sessions. Royce enjoys interacting with younger students and sharing his knowledge with them, seeing them grow as leaders and utilize their newfound skills to succeed."],
    ["Andy Xu", "VP of Public Speaking", "As the Vice President of Public Speaking, Andy Xu oversees the public speaking sector of classes at SVY. He has been teaching at SVY for seven sessions. Andy enjoys sharing his experience with younger students in a fun and engaging manner."],
    ["Samika Swamy","Assistant VP of Science and CS", "As the Assistant Vice President of Science & CS, Samika Swamy oversees the Science & CS department, assisting in the onboarding of new classes and teachers. She also helps teachers resolve any challenges they may face throughout the semester on an ongoing basis. During her time at SVY, she has taught Neuroscience for 4 semesters. Samika greatly cherishes the opportunity to impart her passion and knowledge to others as well as to take part in the overall growth of the organization."],
    ["Kevin Wang", "VP of Math", "As the Vice President of Math, Kevin Wang oversees the marketing and course management of the math department. Over the course of a year, Kevin has expanded the math department from two classes to five classes, ranging from Geometry to AMC 8 to Mathcounts. At SVY, he has taught AMC 8 and USACO Bronze for two years. Kevin’s favorite part of SVY is watching young math and CS competitors flourish under his guidance."],
    ["Max Zhang", "VP of Humanities <br> Miller Site Director", "As the Vice President of Humanities, Max Zhang handles the course management of the Humanities department. He has taught US History for 7 semesters now, as well as Basketball and Grammar/Vocab in the past, for a total of 4 and a half years. Max enjoys passing on his knowledge to younger students and watching them learn and grow throughout the course of each semester."],
    ["Michael Song", "Bandley Center Site Director", ""],
    ["Charles Li", "Saratoga Site Director", ""],
];

var container;
var Officers;
Officers = Officers20202021;
container = document.getElementById("2020-2021")
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