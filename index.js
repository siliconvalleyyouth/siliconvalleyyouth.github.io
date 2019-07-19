$(document).ready(function() {
  $(".navcontainer").empty()
  $(".navcontainer").load("/navbar.html", addDropdown)
})

function addDropdown(){
  $("#abt").on('click', function(){
    $("#dropdown").slideToggle(250);
});
}
function rotate(x) {
    x.classList.toggle("change");
    $(".navcontainer").toggleClass("in");
}

$(window).resize(function() {
    $("#indexbody").css({
    'margin-top' : $("#myCarousel1").height()
        });
    $("#mainslide").css({
    'padding-top' : $("#myCarousel1").height() * 0.17
        });
    });

$(document).ready(function(){
    $("#abt").on('click', function(){
        $("#dropdown").slideToggle(250);
    });
});

$(window).scroll(function() {
	$("#carcontain").css({
    'margin-top': ($(this).scrollTop())/2
    });

     $("#circle1").css({
    'top' : 2 + ($(this).scrollTop())/300 + "%"
    });

    $("#circle2").css({
    'top' : 35 - ($(this).scrollTop())/170 + "%"
    });

    $("#indexcol2").css({
    'margin-top':  50 - ($(this).scrollTop())/15
    });

    $("#indexcol3").css({
    'margin-top':  ($(this).scrollTop())/15 - 100
    });

    $("#line").css({
    'height': 70 + ($(this).scrollTop())
    });

    $("#teamliner1").css({
    'top': ($(this).scrollTop())/3 - 330
    });
});

$(document).ready(function() {
     $(".back2top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
      });
    });

var sam = ["Sam Yang", "Co-President", "Sam Yang is a senior at Monta Vista High School.  He has previously taught World History and Website Design at Silicon Valley Youth, and has served as co-president since May 2017.  He is an avid web developer and programmer, with experience in HTML, CSS, Javascript, jQuery, Bootstrap, Node.js, Firebase, Java and Python.  His web design work includes Silicon Valley Youth, DeltaHacks Institute, InstaTutors, EngAcademy, Silicon Valley Forensics, and Senior Tech Assistance Initiative.  Outside of his work, he enjoys playing the guitar, singing and playing baseball."]
var ben = ["Benjamin Owens", "Co-Founder & Board Member", "Benjamin Owens is currently an undergraduate student studying computer science at Harvard University. He founded Silicon Valley Youth with his twin brother Bryan while attending Henry M. Gunn High School in 2015 as a way to give back to his surrounding community. He has taught Java, Website Design, and Grammar for SVY, and together with Bryan established SVY's relationship with the Ravenswood City School District. He enjoys programming, browsing reddit, and learning new things."]
var brandon = ["Brandon Fu", "Co-President", "Brandon Fu is a senior at Homestead High School in Cupertino, California. He has previously taught Web Design, Public Speaking, and Business at Silicon Valley Youth, and has served as co-president since May 2017. He has strong interests in business, competing in the Future Business Leaders of America club for over three years on both a state and national level. Besides that, Brandon is an avid graphic designer and loves video production. His work has been featured multiple times and he is experienced in both Adobe’s photography suite and video editing softwares. Outside of his work, he enjoys playing various sports including tennis, water polo, and basketball."]
var oliver = ["Oliver Ye", "Vice President of Science", "Oliver Ye is a Sophomore at Saratoga High School. He has previously taught US History and Science Bowl at Silicon Valley Youth, and has served as the Vice President of Science since May 2017. He has strong interests in biotechnology, competing in RISE at a regional and national level. In addition, he has lab experience running real time PCR, Flow Cytometry, and Western Blot experiments. Outside of his work, he enjoys drawing, cooking, and playing volleyball."]
var arthur = ["Arthur Ji", "Vice President of Computer Science", "Arthur Ji is currently a junior who attends Monta Vista High School, and is serving as the Vice President of Computer Science as well as a teacher for the Gunn High School location Introduction to Java Course here at SIlicon Valley Youth. He has worked with Silicon Valley Youth ever since the Fall 2016 semester, serving then as a Teacher Assistant and then a teacher in the following semesters, and has much experience both in teaching and in Java itself. Arthur has also experience in other languages, such as React, React Native, Javascript, Swift, and HTML, some of which were self-taught. Beside courses and study, Arthur also has worked with technology and software development in the workplace, having served as an intern at a startup and helped develop the mobile interface for the software. As an officer for SVY’s Computer Science department, Arthur hopes that he can help spread knowledge on software development, a critical skill in the 21st century, to the next generation and support the less-fortunate community. Besides computer science, Arthur also has profound interest in the fields of law, politics, business, and economics."];


function openBio(name) {
    $("#bio").fadeIn();
    $("#cover").fadeIn();
    $("#bio h2").html(name[0]);
    $("#bio h3").html(name[1]);
    $("#bio p").html(name[2]);
}

function cancel() {
    $("#bio").fadeOut();
    $("#cover").fadeOut();
}


$(document).ready(function(){
                $("#titleright").click(function(){
                	$(".titleslide").removeClass("toright");
                    $(".carousel-caption").removeClass("block");
                    $(".carousel-indicators").removeClass("block");
                });
            });

$(document).ready(function(){
                $("#titleleft").click(function(){
                	$(".titleslide").addClass("toright");
                    $(".carousel-caption").addClass("block");
                    $(".carousel-indicators").addClass("block");
                });
            });

$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + 600) {
          $(this).addClass("slide2");
        }
    });
  });

$(window).scroll(function() {
    $(".slideanim3").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + 600) {
          $(this).addClass("slide6");
        }
    });
  });

$(window).scroll(function() {
    $(".slideanim4").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + 600) {
          $(this).addClass("sizer");
        }
    });
  });

$(window).scroll(function() {
    var winTop2 = $(window).scrollTop() + $(window).height();
    var footTop = $(document).height();
    var width = $(window).width();

    $("#prog").css({
    'width' : 0.86 * width * winTop2 / footTop
    });
});



$(window).scroll(function() {
    $(".slideanim2").each(function(){
      var pos = $(this).offset().top;

      var circle = $("#circle").offset().top;
        if (pos < circle - 100) {
          $(this).addClass("slide2");
          $(this).css("opacity", "1");
        } else {
            $(this).css("opacity", "0");
        } 
    });
  });


$(window).scroll(function() {
    $(".eventcircle").each(function(){
      var pos = $(this).offset().top;

      var circle = $("#circle").offset().top;
        if (pos > circle - 20) {
          $(this).css("transform", "scale(0)");
        } else {
           $(this).css("transform", "scale(1)");
        }
    });
  });

$(document).ready(function(){
    $(".showmore").each(function(){
        var num = $(this).attr('id').split("showmore")[1];
        $(this).click(function(){
            $("#hid" + num).slideToggle("fast");
            $("#showmore" + num + " i").toggleClass("flip");
        });
    });
});

$(document).ready(function(){
                $("#foreignlanguageplus").click(function(){
                    $("#foreignlanguagebody").slideToggle(500);
                    $("#foreignlanguageplus").toggleClass("rotateplus");
                });
            });

$(document).ready(function(){
                $("#lbwplus").click(function(){
                    $("#lbwbody").slideToggle(500);
                    $("#lbwplus").toggleClass("rotateplus");
                });
            });

$(document).ready(function(){
                $("#frenchplus").click(function(){
                    $("#frenchbody").slideToggle(500);
                    $("#frenchplus").toggleClass("rotateplus");
                });
            });

$(document).ready(function(){
                $("#permitplus").click(function(){
                    $("#permitbody").slideToggle(500);
                    $("#permitplus").toggleClass("rotateplus");
                });
            });


$(document).ready(function(){
                $("#summerplus").click(function(){
                    $("#summerbody").slideToggle(500);
                    $("#summerplus").toggleClass("rotateplus");
                });
            });

$(document).ready(function(){
                $("#olympiadsplus").click(function(){
                    $("#olympiadsbody").slideToggle(500);
                    $("#olympiadsplus").toggleClass("rotateplus");
                });
            });


//adding email button

$("#social").html("<a href=\"https://www.facebook.com/SiliconValleyYouth/\" class=\"fab fa-facebook\"></a><a href=\"https://www.instagram.com/siliconvyouth/\" class=\"fab fa-instagram\"></a><a href=\"mailto:svyouth1@gmail.com\" class=\"fas fa-envelope\"></a>");

//navigation
$("#mainnav").html("<li class=\"navig\"><a href=\"https://www.siliconvalleyyouth.com/classes\">CLASSES</a></li> <div id=\"abt\"> <li class=\"navig\"><a>ABOUT US &#9662;</a></li> <ul id=\"dropdown\"><li><a href=\"https://www.siliconvalleyyouth.com/team\">Our Team</a></li> <li><a href=\"https://www.siliconvalleyyouth.com/mission\">Our Mission</a></li> <li><a href=\"https://www.siliconvalleyyouth.com/testimonials\">Testimonials</a></li> <li><a href=\"https://www.siliconvalleyyouth.com/commendation\">Commendations</a></li> </ul> </div> <li class=\"navig\"><a href=\"https://www.siliconvalleyyouth.com/service\">SERVICE</a></li> <li class=\"navig\"><a href=\"https://www.siliconvalleyyouth.com/resources\">RESOURCES</a></li> <li class=\"navig\"><a href=\"https://www.siliconvalleyyouth.com/donate\">DONATE</a></li> <li class=\"navig\"><a href=\"https://www.siliconvalleyyouth.com/events\">NEWS/EVENTS</a></li>");

//getting rid of contact link

$("#footerlinks").html("<a href=\"team.html\">Our Team</a> <a href=\"donate.html\">Donate</a> <a href=\"mission.html\">Mission</a>");



