$(document).ready(function() {
  $(".navcontainer").empty()
  $(".navcontainer").load("/navbar.html", addDropdown)
  slideAnim()
  $("#abt").on('click', function(){
        $("#dropdown").slideToggle(250)
    })
  $(".back2top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 1500)
        return false
    })
})

addDropdown = () => {
  $("#abt").on('click', function(){
    $("#dropdown").slideToggle(250)
});
}
rotate = x => {
    x.classList.toggle("change");
    $(".navcontainer").toggleClass("in")
}

$(window).scroll(function() {
	$("#myCarousel1").css({
    'margin-top': ($(this).scrollTop())/5
    });

     $("#circle1").css({
    'top' : 2 + ($(this).scrollTop())/500 + "%"
    });

    $("#circle2").css({
    'top' : 30 - ($(this).scrollTop())/300 + "%"
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

var sam = ["Sam Yang", "Co-President", "Sam Yang is a freshman at UC Berkeley studying Cognitive Science and Computer Science.  He previously taught World History and Website Design at Silicon Valley Youth, and served as co-president from May 2017 to May 2019.  He is an avid web developer and programmer, with experience in React, Javascript, HTML/CSS, Bootstrap/jQuery, Node.js, Firebase, Java, Python, Matlab, MongoDB/Express, and React Native.  His web development work includes InstaTutors, Silicon Valley Youth, DeltaHacks Institute, InstaTutors, StudentCount, Mi Escuelita Cupertino, OmniHacks, MVHacks, MatadorHacks, HSHacks, and Silicon Valley Forensics.  Outside of his work, he enjoys playing the guitar, singing and playing basketball."]
var ben = ["Benjamin Owens", "Co-Founder & Board Member", "Benjamin Owens is currently an undergraduate student studying Computer science, Statistics and Economics at Harvard University. He founded Silicon Valley Youth with his twin brother Bryan while attending Henry M. Gunn High School in 2015 as a way to give back to his surrounding community. He has taught Java, Website Design, and Grammar for SVY, and together with Bryan established SVY's relationship with the Ravenswood City School District. He enjoys programming, browsing reddit, and learning new things."]
var brandon = ["Brandon Fu", "Co-President", "Brandon Fu is a freshman at Northwestern University. He has previously taught Web Design, Public Speaking, and Business at Silicon Valley Youth, and has served as co-president from May 2017 to May 2019. He has strong interests in business, competing in the Future Business Leaders of America club for over three years on both a state and national level. Besides that, Brandon is an avid graphic designer and loves video production. His work has been featured multiple times and he is experienced in both Adobe’s photography suite and video editing softwares. Outside of his work, he enjoys playing various sports including tennis, water polo, and basketball."]
var oliver = ["Oliver Ye", "President", "As the President of Silicon Valley Youth, Oliver Ye oversees internal and external operations of the organization. Over the past five years, Oliver has helped expand SVY from 3 to over 60 teachers, also collaborating with superintendents from the Ravenswood and Franklin McKinley districts to plan projects. At SVY, he has been teaching for 10 semesters now, focusing mainly on science bowl. Oliver's favorite part of SVY is seeing both students and teachers grow, learning lessons and stepping up to become leaders in their own community."]
var arthur = ["Arthur Ji", "Vice President of Computer Science", "Arthur Ji is currently a junior who attends Monta Vista High School, and is serving as the Vice President of Computer Science as well as a teacher for the Gunn High School location Introduction to Java Course here at SIlicon Valley Youth. He has worked with Silicon Valley Youth ever since the Fall 2016 semester, serving then as a Teacher Assistant and then a teacher in the following semesters, and has much experience both in teaching and in Java itself. Arthur has also experience in other languages, such as React, React Native, Javascript, Swift, and HTML, some of which were self-taught. Beside courses and study, Arthur also has worked with technology and software development in the workplace, having served as an intern at a startup and helped develop the mobile interface for the software. As an officer for SVY’s Computer Science department, Arthur hopes that he can help spread knowledge on software development, a critical skill in the 21st century, to the next generation and support the less-fortunate community. Besides computer science, Arthur also has profound interest in the fields of law, politics, business, and economics."];
var leo = ["Leo Yang", "President", ""];


openBio = name => {
    $("#bio").fadeIn();
    $("#cover").fadeIn();
    $("#bio h2").html(name[0]);
    $("#bio h3").html(name[1]);
    $("#bio p").html(name[2]);
}

cancel = () => {
    $("#bio").fadeOut();
    $("#cover").fadeOut();
}


$(document).ready(() => {
                $("#titleright").click(function(){
                	$(".titleslide").removeClass("toright");
                    $(".carousel-caption").removeClass("block");
                    $(".carousel-indicators").removeClass("block");
                });
            });

$(document).ready(() => {
                $("#titleleft").click(function(){
                	$(".titleslide").addClass("toright");
                    $(".carousel-caption").addClass("block");
                    $(".carousel-indicators").addClass("block");
                });
            });

slideAnim = () => {
    const scrollTop = $(window).height()*0.9
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + scrollTop) {
          $(this).addClass("slide2");
        }
    })
    $(".slideanim3").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + scrollTop) {
          $(this).addClass("slide6");
        }
    })

    $(".slideanim4").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos <= winTop + scrollTop) {
          $(this).addClass("sizer");
        }
    })
    $(".slideanim2").each(function(){
      var pos = $(this).offset().top;

      var circle = $("#circle").offset().top;
        if (pos < circle - 100) {
          $(this).addClass("slide2");
          $(this).css("opacity", "1");
        } else {
            $(this).css("opacity", "0");
        } 
    })
    $(".eventcircle").each(function(){
      var pos = $(this).offset().top;

      var circle = $("#circle").offset().top;
        if (pos > circle - 20) {
          $(this).css("transform", "scale(0)");
        } else {
           $(this).css("transform", "scale(1)");
        }
    })
}

$(window).scroll(() => {
    slideAnim()

    var winTop2 = $(window).scrollTop() + $(window).height();
    var footTop = $(document).height();
    var width = $(window).width();

    $("#prog").css({
    'width' : 0.86 * width * winTop2 / footTop
    });
});


$(document).ready(() => {
    $(".showmore").each(function(){
        var num = $(this).attr('id').split("showmore")[1];
        $(this).click(function(){
            $("#hid" + num).slideToggle("fast");
            $("#showmore" + num + " i").toggleClass("flip");
        })
    })
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



