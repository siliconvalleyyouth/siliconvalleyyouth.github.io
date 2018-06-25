function rotate(x) {
    x.classList.toggle("change");
    $(".navcontainer").toggleClass("in");
}

$(window).resize(function() {
    $("#indexbody").css({
    'margin-top' : $("#myCarousel1").height()
        });
    $("#mainmask").css({
    'height' : $("#myCarousel1").height()
        });
    $("#mainslide").css({
    'padding-top' : $("#myCarousel1").height() * 0.17
        });
    });


$(document).ready(function(){
                $("#abt").click(function(){
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

    $("#line").css({
    'height': 70 + ($(this).scrollTop())
    });
});

$(document).ready(function() {
     $(".back2top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
      });
    });


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
                $("#showmore1").click(function(){
                    $("#hid1").slideToggle("fast");
                    $("#showmore1 i").toggleClass("flip");
                });
            });
$(document).ready(function(){
                $("#showmore2").click(function(){
                    $("#hid2").slideToggle("fast");
                    $("#showmore2 i").toggleClass("flip");
                });
            });
$(document).ready(function(){
                $("#showmore3").click(function(){
                    $("#hid3").slideToggle("fast");
                    $("#showmore3 i").toggleClass("flip");
                });
            });
$(document).ready(function(){
                $("#showmore4").click(function(){
                    $("#hid4").slideToggle("fast");
                    $("#showmore4 i").toggleClass("flip");
                });
            });

$(document).ready(function(){
                $("#showmore5").click(function(){
                    $("#hid5").slideToggle("fast");
                    $("#showmore5 i").toggleClass("flip");
                });
            });

$(document).ready(function(){
                $("#showmore6").click(function(){
                    $("#hid6").slideToggle("fast");
                    $("#showmore6 i").toggleClass("flip");
                });
            });

$(document).ready(function(){
                $("#showmore7").click(function(){
                    $("#hid7").slideToggle("fast");
                    $("#showmore7 i").toggleClass("flip");
                });
            });

$(document).ready(function(){
                $("#showmore8").click(function(){
                    $("#hid8").slideToggle("fast");
                    $("#showmore8 i").toggleClass("flip");
                });
            });

$(document).ready(function(){
                $("#showmore9").click(function(){
                    $("#hid9").slideToggle("fast");
                    $("#showmore9 i").toggleClass("flip");
                });
            });

$(document).ready(function(){
                $("#showmore10").click(function(){
                    $("#hid10").slideToggle("fast");
                    $("#showmore10 i").toggleClass("flip");
                });
            });

$(document).ready(function(){
                $("#showmore11").click(function(){
                    $("#hid11").slideToggle("fast");
                    $("#showmore11 i").toggleClass("flip");
                });
            });

$(document).ready(function(){
                $("#showmore12").click(function(){
                    $("#hid12").slideToggle("fast");
                    $("#showmore12 i").toggleClass("flip");
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


//getting rid of contact link

$("#footerlinks").html("<a href=\"team.html\">Our Team</a> <a href=\"donate.html\">Donate</a> <a href=\"mission.html\">Mission</a>");


