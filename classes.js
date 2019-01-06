var loc = "all";
var sub = "all";

/*Data for class select function*/
var classes = [
    ["Saratoga", "sports", $("#tennis-spring-2019")],
    ["Dilworth", "sports", $("#bball-spring-2019")],
    ["Miller", "Humanities", $("#psce-spring-2019")],
    ["Miller", "Humanities", $("#psdeb2-spring-2019")],
    ["Miller", "sports", $("#bridge-spring-2019")],
    ["Miller", "Humanities", $("#grammar-spring-2019")],
    ["Gunn", "stem", $("#python-spring-2019")],
    ["Gunn", "stem", $("#amc8adv-spring-2019")],
    ["SFS", "Humanities", $("#worldhist-spring-2019")], 
    ["SFS", "Humanities", $("#compspeech-spring-2019")],  
    ["SFS", "Humanities", $("#ps1-spring-2019")],  
    ["SFS", "stem", $("#advweb-spring-2019")],
    ["SFS", "stem", $("#science-spring-2019")],
    ["SFS", "stem", $("#mathcounts-spring-2019")],
    ["Omei", "stem", $("#java2-spring-2019")],
    ["Omei", "stem", $("#ml-spring-2019")],
    ["Omei", "stem", $("#usaco-spring-2019")],
    ["Omei", "Humanities", $("#psdeb1-spring-2019")],
    ["Omei", "stem", $("#interjava-spring-2019")],
    ["Omei", "stem", $("#bio-spring-2019")],
    ["Omei", "stem", $("#java1-spring-2019")],
    ["Omei", "stem", $("#introweb-spring-2019")],
    ["Omei", "stem", $("#physics-spring-2019")],
    ["Omei", "stem", $("#amc8_1-spring-2019")],
    ["Omei", "Humanities", $("#psce1-fall-2018")],
    ["Omei", "stem", $("#bio-fall-2018")],
    ["Omei", "stem", $("#python-fall-2018")],
    ["Omei", "stem", $("#satmath-fall-2018")],
    ["Omei", "stem", $("#interjava-fall-2018")],
    ["Omei", "stem", $("#amc8_1-fall-2018")],
    ["Omei", "stem", $("#java1-fall-2018")],
    ["SFS", "stem", $("#advweb-fall-2018")],
    ["SFS", "stem", $("#introweb-fall-2018")],
    ["SFS", "Humanities", $("#psce2-fall-2018")],
    ["SFS", "Humanities", $("#psdeb-fall-2018")],
    ["SFS", "Humanities", $("#psce2-fall-2018")],
    ["SFS", "Humanities", $("#worldhist-fall-2018")],
    ["SFS", "sports", $("#chess-fall-2018")],
    ["Miller", "sports", $("#bridge-fall-2018")],
    ["SFS", "stem", $("#amc8_2-fall-2018")],
    ["SFS", "stem", $("#science-fall-2018")],
    ["SFS", "stem", $("#phys-fall-2018")],
    ["SFS", "stem", $("#java2-fall-2018")],
    ["Miller", "stem", $("#threed-fall-2018")],
    ["Miller", "Humanities", $("#psdeb2-fall-2018")],
    ["Miller", "Humanities", $("#ushist-fall-2018")],
    ["Gunn", "stem", $("#java3-fall-2018")],
    ["Gunn", "stem", $("#amc8_3-fall-2018")],
    ["Gunn", "stem", $("#ios-fall-2018")],
    ["Omei", "Humanities", $("#ps-spr-2018")],
    ["Omei", "stem", $("#webd2-spr-2018")],
    ["Omei", "stem", $("#java2-spr-2018")],
    ["Omei", "stem", $("#mathc-spr-2018")],
    ["SFS", "stem", $("#psce-spr-2018")],
    ["SFS", "Humanities", $("#world-spr-2018")],
    ["SFS", "sports", $("#chess-spr-2018")],
    ["SFS", "sports", $("#bridge-spr-2018")],
    ["SFS", "stem", $("#advweb-spr-2018")],
    ["SFS", "stem", $("#science-spr-2018")],
    ["SFS", "stem", $("#usaco-spr-2018")],
    ["SFS", "stem", $("#phys2-spr-2018")],
    ["Miller", "stem", $("#threed-spr-2018")],
    ["Miller", "Humanities", $("#psdeb-spr-2018")],
    ["Miller", "stem", $("#java3-spr-2018")],
    ["Gunn", "Humanities", $("#deb-spr-2018")],
    ["Gunn", "stem", $("#advmath-spr-2018")],
    ["Gunn", "stem", $("#webd-spr-2018")],
    ["Gunn", "stem", $("#java-spr-2018")],
    ["Gunn", "stem", $("#ios-spr-2018")],
    ["Dilworth", "sports", $("#bball-spr-2018")],
    ["SFS", "stem", $("#usaco-spr-2018")],
    ["Gunn", "Humanities", $("#bus-fall-2017")],
    ["Gunn", "Humanities", $("#speech-fall-2017")],
    ["Gunn", "stem", $("#mathc-fall-2017")],
    ["Gunn", "stem", $("#amc8-fall-2017")],
    ["Gunn", "stem", $("#game-fall-2017")],
    ["Gunn", "stem", $("#ios-fall-2017")],
    ["SFS", "stem", $("#psce-fall-2017")],
    ["SFS", "Humanities", $("#world-fall-2017")],
    ["SFS", "stem", $("#java-fall-2017")],
    ["SFS", "stem", $("#webd-fall-2017")],
    ["SFS", "stem", $("#phys-fall-2017")],
    ["SFS", "Humanities", $("#ushist2-fall-2017")],
    ["SFS", "stem", $("#science-fall-2017")],
    ["Miller", "stem", $("#psdeb-fall-2017")],
    ["Miller", "stem", $("#psdeb-fall-2017")],
    ["Miller", "Humanities", $("#ushist1-fall-2017")],
    ["Miller", "stem", $("#amc10-fall-2017")],
    ["Miller", "stem", $("#java2-fall-2017")],
    ["Palo Alto", "Humanities", $("#bus-spr-2017")], 
    ["Gunn", "Humanities", $("#deb-spr-2017")],
    ["SFS", "Humanities", $("#ce-spr-2017")],
    ["Palo Alto", "Humanities", $("#gram-spr-2017")],
    ["Miller", "Humanities", $("#ushist-spr-2017")],
    ["Miller", "Humanities", $("#ushist2-spr-2017")], 
    ["Omei", "Humanities", $("#world-spr-2017")],
    ["Gunn", "stem", $("#advmath-spr-2017")],
    ["Gunn", "stem", $("#java-spr-2017")],
    ["Omei", "stem", $("#webd1-spr-2017")],
    ["Miller", "stem", $("#science-spr-2017")],
    ["Omei", "stem", $("#webd2-spr-2017")],
    ["Dilworth", "sports", $("#bball-spr-2017")],
    ["Gunn", "sports", $("#taichi-spr-2017")],
    ["Palo Alto", "Humanities", $("#econ-fall-2016")],
    ["Palo Alto", "stem", $("#java-fall-2016")],
    ["Gunn", "stem", $("#math-fall-2016")],
    ["Gunn", "Humanities", $("#ushist-fall-2016")],
    ["Gunn", "stem", $("#webd-fall-2016")],
    ["Palo Alto", "Humanities", $("#ushist-spr-2016")],
    ["Palo Alto", "stem", $("#webd-spr-2016")],
    ["Palo Alto", "Humanities", $("#ce-fall-2015")],
];

$("#bball-spr-2017").hide();


function selectClass(location, subject) {
    for(var i=0; i<classes.length; i++) {
        if(location == "all" && subject == "all") {
            classes[i][2].show();
        } else if(location == "all" && subject != "all") {
            if(classes[i][1] == subject) {
                classes[i][2].show();
            } else {
                classes[i][2].hide();
            }
        } else if(location != "all" && subject == "all") {
            if(classes[i][0] == location) {
                classes[i][2].show();
            } else {
                classes[i][2].hide();
            }
        } else if(location != "all" && subject != "all") {
            if(classes[i][0] == location && classes[i][1] == subject) {
                classes[i][2].show();
            } else {
                classes[i][2].hide();
            }
        }
    }

} 

function all() {
    $("#byLocation").html("All <i class=\"fas fa-caret-down\"></i>");
    loc = "all";
    selectClass("all", sub);
}

function ghs() {
    $("#byLocation").html("Gunn High School <i class=\"fas fa-caret-down\"></i>");
    loc = "Gunn";
    selectClass("Gunn", sub);
}

function sfs() {
    $("#byLocation").html("Saratoga Fire Station <i class=\"fas fa-caret-down\"></i>");
    loc = "SFS";
    selectClass("SFS", sub);
}

function mms() {
    $("#byLocation").html("Miller Middle School <i class=\"fas fa-caret-down\"></i>");
    loc = "Miller";
    selectClass("Miller", sub);
}

function omei() {
    $("#byLocation").html("Omei Academy <i class=\"fas fa-caret-down\"></i>");
    loc = "Omei";
    selectClass("Omei", sub);
}

function dilworth() {
    $("#byLocation").html("Dilworth <i class=\"fas fa-caret-down\"></i>");
    loc = "Dilworth";
    selectClass("Dilworth", sub);
}

function palo() {
    $("#byLocation").html("Palo Alto <i class=\"fas fa-caret-down\"></i>");
    loc = "Palo Alto";
    selectClass("Palo Alto", sub);
}

function sara() {
    $("#byLocation").html("Saratoga <i class=\"fas fa-caret-down\"></i>");
    loc = "Saratoga";
    selectClass("Saratoga", sub);
}

function all2() {
    $("#bySubject").html("All <i class=\"fas fa-caret-down\"></i>");
    sub = "all";
    selectClass(loc, "all");
}

function humanities() {
    $("#bySubject").html("Humanites & Social Sciences <i class=\"fas fa-caret-down\"></i>");
    sub = "Humanities";
    selectClass(loc, "Humanities");
}

function stem() {
    $("#bySubject").html("STEM <i class=\"fas fa-caret-down\"></i>");
    sub = "stem";
    selectClass(loc, "stem");
}

function sports() {
    $("#bySubject").html("Sports <i class=\"fas fa-caret-down\"></i>");
    sub = "sports";
    selectClass(loc, "sports");
}


document.getElementById("all").onclick = all;
document.getElementById("ghs").onclick = ghs;
document.getElementById("sfs").onclick = sfs;
document.getElementById("mms").onclick = mms;
document.getElementById("omei").onclick = omei;
document.getElementById("dilw").onclick = dilworth;
document.getElementById("palo").onclick = palo;
document.getElementById("sara").onclick = sara;
document.getElementById("all2").onclick = all2;
document.getElementById("humanities").onclick = humanities;
document.getElementById("stem").onclick = stem;
document.getElementById("sports").onclick = sports;





/*var notgunn = [$("#bus-spr-2017"), $("#ce-spr-2017"), $("#gram-spr-2017"), $("#ushist-spr-2017"), $("#ushist2-spr-2017"), $("#world-spr-2017"), $("#webd1-spr-2017"), $("#science-spr-2017"), $("#taichi-spr-2017"), $("#bball-spr-2017")];
var notsfs = [$("#bus-spr-2017"), $("#deb-spr-2017"), $("#ce-spr-2017"), $("#gram-spr-2017"), $("#ushist-spr-2017"), $("#ushist2-spr-2017"), $("#world-spr-2017"), $("#taichi-spr-2017"), $("#bball-spr-2017"), $("#advmath-spr-2017"), $("#java-spr-2017"), $("#webd1-spr-2017"), $("#science-spr-2017"), $("#webd2-spr-2017")];


var notstem = [$("#bus-spr-2017"), $("#deb-spr-2017"), $("#ce-spr-2017"), $("#gram-spr-2017"), $("#ushist-spr-2017"), $("#ushist2-spr-2017"), $("#world-spr-2017"), $("#taichi-spr-2017"), $("#bball-spr-2017")];
var nothuman = [$("#advmath-spr-2017"), $("#java-spr-2017"), $("#webd1-spr-2017"), $("#science-spr-2017"), $("#webd2-spr-2017"), $("#taichi-spr-2017"), $("#bball-spr-2017")];
var notsports = [$("#bus-spr-2017"), $("#deb-spr-2017"), $("#ce-spr-2017"), $("#gram-spr-2017"), $("#ushist-spr-2017"), $("#ushist2-spr-2017"), $("#world-spr-2017"), $("#advmath-spr-2017"), $("#java-spr-2017"), $("#webd1-spr-2017"), $("#science-spr-2017"), $("#webd2-spr-2017")];

function sort() {
    if(loc == "all") {
        for(var i=0; i<classes.length; i++) {

            }
        sortByCat();
    } else if(loc == "gunn") {
        for(var i=0; i<notgunn.length; i++) {
                notgunn[i].hide();
            }
        sortByCat();
    } else if(loc == "saratoga") {
        for(var i=0; i<notsfs.length; i++) {
                notsfs[i].hide();
            }
        sortByCat();
    }
}

function sortByCat() {
        if(sub == "all") {
            for(var i=0; i<classes.length; i++) {

            }
        } else if(sub == "humanities") {
            for(var i=0; i<nothuman.length; i++) {
                nothuman[i].hide();
            }
        } else if(sub == "stem") {
            for(var i=0; i<notstem.length; i++) {
                notstem[i].hide();
            }
        } else if(sub == "sports") {
            for(var i=0; i<notsports.length; i++) {
                notsports[i].hide();
            }  
        }
}*/