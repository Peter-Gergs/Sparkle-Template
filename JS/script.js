$(document).ready(function () {
  $("header nav .container .icon").on("click", function () {
    let customUl = document.querySelector("header nav .container ul");
    if ($(window).width() >= 768) {
      if (customUl.style.opacity == 0) {
        customUl.style.opacity = 1;
        $("header nav .container .icon span").animate(
          {
            width: "100%",
          },
          200
        );
      } else {
        customUl.style.opacity = 0;
        $("header nav .container .icon span").animate(
          {
            width: "100%",
          },
          200
        );
        $("header nav .container .icon span:nth-child(2)").animate(
          {
            width: "80%",
          },
          200
        );
        $("header nav .container .icon span:last-child").animate(
          {
            width: "60%",
          },
          200
        );
      }
    } else {
      if (customUl.style.display === "none") {
        $(customUl).slideDown();
        $("header nav .container .icon span").animate(
          {
            width: "100%",
          },
          200
        );
      } else {
        $(customUl).slideUp();
        $("header nav .container .icon span").animate(
          {
            width: "100%",
          },
          200
        );
        $("header nav .container .icon span:nth-child(2)").animate(
          {
            width: "80%",
          },
          200
        );
        $("header nav .container .icon span:last-child").animate(
          {
            width: "60%",
          },
          200
        );
      }
    }
  });
  $(window).scroll(function () {
    let servicesOffset = $("#services").offset().top;
    let windowScroll = $(this).scrollTop();
    let servicesOffset2 = $(
      ".services .container .services-container .srv .srv-quality"
    ).offset().top;
    let srvOffset2 = $(
      ".services .container .services-container .srv:nth-child(1) .srv-quality"
    ).offset().top;
    let srvOffset3 = $(
      ".services .container .services-container .srv:nth-child(2) .srv-quality"
    ).offset().top;
    let srvOffset4 = $(
      ".services .container .services-container .srv:nth-child(3) .srv-quality"
    ).offset().top;
    if ($(window).width() >= 768 && $(window).width() < 1200) {
      if (servicesOffset2 >= windowScroll && windowScroll >= servicesOffset) {
        $(".services .container .services-container .srv:nth-child(1)").css(
          "opacity",
          "1"
        );
        $(".services .container .services-container .srv:nth-child(2)").css(
          "opacity",
          "1"
        );
      } else if (windowScroll > servicesOffset2) {
        $(".services .container .services-container .srv:nth-child(3)").css(
          "opacity",
          "1"
        );
        $(".services .container .services-container .srv:nth-child(4)").css(
          "opacity",
          "1"
        );
      } else {
        $(".services .container .services-container .srv").css(
          "opacity",
          "0"
        );
      }
    } else if ($(window).width() > 1200) {
      if (windowScroll >= servicesOffset) {
        $(".services .container .services-container .srv:nth-child(1)").css(
          "opacity",
          "1"
        );
        $(".services .container .services-container .srv:nth-child(2)").css(
          "opacity",
          "1"
        );
        $(".services .container .services-container .srv:nth-child(3)").css(
          "opacity",
          "1"
        );
        $(".services .container .services-container .srv:nth-child(4)").css(
          "opacity",
          "1"
        );
      }else {
        $(".services .container .services-container .srv").css(
          "opacity",
          "0"
        );
      }
    } else if ($(window).width() < 768) {
      if (windowScroll > servicesOffset && srvOffset2 > windowScroll) {
        $(".services .container .services-container .srv:nth-child(1)").css(
          "opacity",
          "1"
        );
      } else if (srvOffset2 < windowScroll && windowScroll < srvOffset3) {
        $(".services .container .services-container .srv:nth-child(2)").css(
          "opacity",
          "1"
        );
      } else if (srvOffset3 < windowScroll && windowScroll < srvOffset4) {
        $(".services .container .services-container .srv:nth-child(3)").css(
          "opacity",
          "1"
        );
      } else if (srvOffset4 < windowScroll) {
        $(".services .container .services-container .srv:nth-child(4)").css(
          "opacity",
          "1"
        );
      } else {
        $(".services .container .services-container .srv").css(
          "opacity",
          "0"
        );
      }
    }
  });
  $(".portfolio .container .heading-container h6").on("click", function () {
    let myClass = $(this).attr("class");
    $(".portfolio .images-container .image").fadeOut(200);
    setTimeout(function () {
      $(".portfolio .images-container .image." + myClass).fadeIn();
    }, 200);
    console.log(myClass);
  });
});
