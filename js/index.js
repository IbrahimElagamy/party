$(function () {
    //loadoing
    $("#loadoing").fadeOut(2000, function () {
        $("body").css("overflow", "auto");
        $("#loadoing").remove();
      });

  //Slide Nav
  let sideWidth = $(".achors").innerWidth();
  $(".sideNav").animate({ left: -sideWidth });
  $(".close").click(function () {
    let sideWidth = $(".achors").innerWidth();
    if ($(".sideNav").css("left") == "0px") {
      $(".sideNav").animate({ left: -sideWidth }, 1000);
    }
  });
  $(".open").click(function () {
    let sideWidth = $(".achors").innerWidth();
    if ($(".sideNav").css("left") != "0px") {
      $(".sideNav").animate({ left: "0px" }, 1000);
    }
  });

  //Duration
  $("#duration h3").click(function (e) {
    $(e.target).next().slideToggle();
    let b = $(e.target).parent().siblings().children("p");
    b.slideUp(1000);
  });

  //Details of remaining time

  setInterval(() => {
    let countDown = new Date("june 20 2024 09:51:19").getTime();
    let dateNow = new Date().getTime();
    let residual = countDown - dateNow;

    let days = Math.floor(residual / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (residual % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((residual % (1000 * 60 * 60)) / (1000 * 60));
    let seconde = Math.floor((residual % (1000 * 60)) / 1000);

    $(".days").text(`${days} D`);
    $(".hours").text(`${hours} h`);
    $(".minutes").text(`${minutes} m`);
    $(".seconde").text(`${seconde} s`);
  });

  //textarea

  let num = 100 ;
  $('#number').text(num);
  $('textarea').on('input', (e)=> {
    let inputValue = $(e.target).val().length;
    let countNumber = num - inputValue ;
    $('#number').text(countNumber);
    $('#number').text(`${countNumber < 1 ? 'your available character finished': countNumber}`);
  })

  //Scroll 

  $('a[href ^="#"]').click(function(e){
    let linkHref = $(e.target).attr('href');
    let sectionTop = $(linkHref).offset().top ;
    $('body , html ').animate({scrollTop: sectionTop},1000);
  })
});

