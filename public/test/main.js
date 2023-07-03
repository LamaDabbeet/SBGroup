$(".js-preloader").preloadinator({
  minTime: 2800,
  scroll: false,
});
$(document).ready(function () {
  "use strict";

  $(".navbar-header").click(function () {
    //Sandeep burger clicked menu appeared
    console.log("clicked burger");
    $("li#project").css("opacity", "1");
    $("li#offices").css("opacity", "1");
    $("li#about").css("opacity", "1");
    $("li#serviceNav").css("opacity", "1");
    $("li#news").css("opacity", "1");
    $("li#our-news").css("opacity", "1");
    $("li#career").css("opacity", "1");
    $("li#contact").css("opacity", "1");
    $("#contact2").css("opacity", "1");
    $("#contact3").css("opacity", "1");
    $("#contact4").css("opacity", "1");
    $("#contact5").css("opacity", "1");
    $("#burgernavbar").hide();
  });

  $("#burgernavbar").click(function () {
    //Sandeep burger clicked menu appeared
    console.log("clicked burger");
    $("#project").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#offices").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#about").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#serviceNav").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#news").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#our-news").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#career").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#contact").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#contact2").removeClass("animated fadeOutUp1").css("opacity", "0");
    $("#contact3").removeClass("animated fadeOutUp1").css("opacity", "0");

    $("#contact4").removeClass("animated fadeOutUp1").css("opacity", "0");

    $("#contact5").removeClass("animated fadeOutUp1").css("opacity", "0");

    $(".topBar").css("background", "#505050");
    $("#burgernavbar").hide(1000);
    $("#burgernavbarcancel").show(1000);
    $("#home-bg-img-inner").css("opacity", "1");
    $("#home-bg-img-inner").removeClass("animated fadeIn");
    setTimeout(function () {
      $("#project").addClass("animated fadeInDown1").css("opacity", "0");
    }, 100); //200
    setTimeout(function () {
      $("#offices").addClass("animated fadeInDown1").css("opacity", "0");
    }, 200); //400
    setTimeout(function () {
      $("#about").addClass("animated fadeInDown1").css("opacity", "0");
    }, 300); //600
    setTimeout(function () {
      $("#serviceNav").addClass("animated fadeInDown1").css("opacity", "0");
    }, 400); //800
    setTimeout(function () {
      $("#news").addClass("animated fadeInDown1").css("opacity", "0");
    }, 500); //1000
    setTimeout(function () {
      $("#our-news").addClass("animated fadeInDown1").css("opacity", "0");
    }, 600); //1200
    setTimeout(function () {
      $("#career").addClass("animated fadeInDown1").css("opacity", "0");
    }, 700); //1400
    setTimeout(function () {
      $("#sisterconcerns").addClass("animated fadeInDown1").css("opacity", "0");
    }, 800); //300
    setTimeout(function () {
      $("#contact").addClass("animated fadeInDown1").css("opacity", "0");
    }, 900); //300
    setTimeout(function () {
      $("#contact2").addClass("animated fadeInDown1").css("opacity", "0");
    }, 1000); //300

    setTimeout(function () {
      $("#contact3").addClass("animated fadeInDown1").css("opacity", "0");
    }, 900); //300
    setTimeout(function () {
      $("#contact4").addClass("animated fadeInDown1").css("opacity", "0");
    }, 900); //300

    setTimeout(function () {
      $("#contact5").addClass("animated fadeInDown1").css("opacity", "0");
    }, 900); //300

    //  $('body').css('overflow-y','hidden');
  });

  $(".navCanel").on("click", function () {
    //Sandeep when menu is closed using close button
    //alert("hi");
    //$('.topMenu').css("opacity","1").removeClass("animated fadeInDown85");
    $("#project").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#offices").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#about").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#serviceNav").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#news").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#our-news").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#career").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#contact").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#contact2").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#contact3").removeClass("animated fadeInDown1").css("opacity", "1");
    $("#contact4").removeClass("animated fadeInDown1").css("opacity", "1");

    $("#contact5").removeClass("animated fadeInDown1").css("opacity", "1");
    setTimeout(function () {
      $("#project").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 900); //1400
    setTimeout(function () {
      $("#offices").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 800); //1200
    setTimeout(function () {
      $("#about").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 700); //1000
    setTimeout(function () {
      $("#serviceNav").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 600); //800
    setTimeout(function () {
      $("#news").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 500); //600
    setTimeout(function () {
      $("#our-news").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 400); //600
    setTimeout(function () {
      $("#career").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 300); //400
    setTimeout(function () {
      $("#contact").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 200); //200

    setTimeout(function () {
      $("#contact2").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 100);
    setTimeout(function () {
      $("#contact3").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 100);

    setTimeout(function () {
      $("#contact4").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 100);

    setTimeout(function () {
      $("#contact5").addClass("animated fadeOutUp1").css("opacity", "0");
    }, 100);

    $("#burgernavbar").show(900); //800
    $("#burgernavbarcancel").hide(900); //800
    $(".topBar").css("background", "transparent");
  });

  // $(".loader").css('background',"url('images/loading.gif') 50% 50% no-repeat black").fadeIn(1000);

  function initOwlCarousel(c) {
    var aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"],
      values = [0, 576, 768, 992, 1200, 1600],
      responsive = {};

    for (var j = 0; j < values.length; j++) {
      responsive[values[j]] = {};
      for (var k = j; k >= -1; k--) {
        if (
          !responsive[values[j]]["items"] &&
          c.attr("data" + aliaces[k] + "items")
        ) {
          responsive[values[j]]["items"] =
            k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
        }
        if (
          !responsive[values[j]]["stagePadding"] &&
          responsive[values[j]]["stagePadding"] !== 0 &&
          c.attr("data" + aliaces[k] + "stage-padding")
        ) {
          responsive[values[j]]["stagePadding"] =
            k < 0
              ? 0
              : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
        }
        if (
          !responsive[values[j]]["margin"] &&
          responsive[values[j]]["margin"] !== 0 &&
          c.attr("data" + aliaces[k] + "margin")
        ) {
          responsive[values[j]]["margin"] =
            k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
        }
      }
    }

    // Enable custom pagination
    if (c.attr("data-dots-custom")) {
      c.on("initialized.owl.carousel", function (event) {
        var carousel = $(event.currentTarget),
          customPag = $(carousel.attr("data-dots-custom")),
          active = 0;

        if (carousel.attr("data-active")) {
          active = parseInt(carousel.attr("data-active"), 10);
        }

        carousel.trigger("to.owl.carousel", [active, 300, true]);
        customPag.find("[data-owl-item='" + active + "']").addClass("active");

        customPag.find("[data-owl-item]").on("click", function (e) {
          e.preventDefault();
          carousel.trigger("to.owl.carousel", [
            parseInt(this.getAttribute("data-owl-item"), 10),
            300,
            true,
          ]);
        });

        carousel.on("translate.owl.carousel", function (event) {
          customPag.find(".active").removeClass("active");
          customPag
            .find("[data-owl-item='" + event.item.index + "']")
            .addClass("active");
        });
      });
    }

    c.on("initialized.owl.carousel", function () {
      initLightGalleryItem(
        c.find('[data-lightgallery="item"]'),
        "lightGallery-in-carousel"
      );
    });

    c.owlCarousel({
      autoplay: isNoviBuilder ? false : c.attr("data-autoplay") === "true",
      loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
      items: 1,
      center: c.attr("data-center") === "true",
      dotsContainer: c.attr("data-pagination-class") || false,
      navContainer: c.attr("data-navigation-class") || false,
      mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
      nav: c.attr("data-nav") === "true",
      dots: c.attr("data-dots") === "true",
      dotsEach: c.attr("data-dots-each")
        ? parseInt(c.attr("data-dots-each"), 10)
        : false,
      animateIn: c.attr("data-animation-in")
        ? c.attr("data-animation-in")
        : false,
      animateOut: c.attr("data-animation-out")
        ? c.attr("data-animation-out")
        : false,
      responsive: responsive,
      smartSpeed: c.attr("data-smart-speed") ? c.attr("data-smart-speed") : 50,
      navText: c.attr("data-nav-text")
        ? $.parseJSON(c.attr("data-nav-text"))
        : [],
      navClass: c.attr("data-nav-class")
        ? $.parseJSON(c.attr("data-nav-class"))
        : ["owl-prev", "owl-next"],
    });
  }

  /*------------------------------------------
                   Video Player
 --------------------------------------------*/

  $(".slider-multi").sappleMultiSlider();
  /*------------------------------------------
          Magnific popup
 --------------------------------------------*/

  /*------------------------------------------
           Contact map
--------------------------------------------*/

  /*-------------------------------------------------
                rating stars in reviews 
    
/*-------------------------------------------------*/

  var rateLine = $(".contact-form__rate-bx"),
    rateActual = $(".rate-actual");

  rateLine.find("i").on("hover", function () {
    var indexStar = $(this).index();
    for (var j = 0; j <= 9; j++) {
      rateLine.find("i:lt(" + indexStar + 1 + ")").addClass("active");
      rateLine.find("i:gt(" + indexStar + ")").removeClass("active");
    }
  });

  rateLine.find("i").on("click", function () {
    var indexStar = $(this).index();
    for (var j = 0; j <= 9; j++) {
      rateLine.find("i:lt(" + indexStar + 1 + ")").addClass("selected");
      rateLine.find("i:gt(" + indexStar + ")").removeClass("selected");
    }
    rateActual.text(indexStar + 1);
  });

  rateLine.on("mouseout", function () {
    rateLine.find("i").removeClass("active");
  });
});

/*------------------------------------------
     Scroll bottom navigation
--------------------------------------------*/
$(".scroll-link").on("click", function () {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        600
      );
      return false;
    }
  }
});
/*------------------------------------------
     Hamburger Menu
--------------------------------------------*/
var $window = $(window),
  $menutog = $("#menu-toggle");

// Run On Page Load
$window.on("load", function () {
  // $(".loader1").fadeOut(5000);
  //  $(".loader").fadeOut(1000);

  //Sidebar open
  $("#menu-toggle").on("click", function (event) {
    $(this).toggleClass("active");
    $("#menu-left").toggleClass("open");
    $("#menu-right").toggleClass("open");
  });
  /*------------------------------------------
               Slider
  --------------------------------------------*/
  //Hero slider
  $(".hero-slider-wrapper").owlCarousel({
    loop: true,
    nav: true,
    navText: [
      "<i class='ion-ios-arrow-thin-left'></i>",
      "<i class='ion-ios-arrow-thin-right'></i>",
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".owl-style-1").owlCarousel({
    loop: true,
    nav: true,
    navText: [
      "<i class='ion-ios-arrow-thin-left'></i>",
      "<i class='ion-ios-arrow-thin-right'></i>",
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    transitionStyle: "backSlide",
    slideSpeed: 7000,

    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Four Item Carousel
  if ($(".four-item-carousel").length) {
    $(".four-item-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      center: true,

      autoHeight: true,
      autoplay: 500,
      autoplaySpeed: 500,
      smartSpeed: 100,
      navText: [
        '<span class="flaticon-slim-left"></span>',
        '<span class="flaticon-slim-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        800: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  }

  $(".hero-slider-wrapper .owl-nav").addClass("container");

  /*----------------------------------------
        Counter Up
-----------------------------------------*/
  //Counter animation
  $(".single-counter-box").appear(function () {
    var element = $(this);
    var timeSet = setTimeout(function () {
      if (element.hasClass("single-counter-box")) {
        element.find(".counter-value").countTo();
      }
    });
  });
});

/*----------------------------------------
      Scroll to top
----------------------------------------*/

//Back To Top
function BackToTop() {
  $(".scrolltotop").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 600) {
      $(".scrolltotop").fadeIn();
    } else {
      $(".scrolltotop").fadeOut();
    }
  });
}
BackToTop();

/*------------------------------------------
             Parallax Hero  
--------------------------------------------*/
$(".parallax-nav li a").on("click", function () {
  $(".parallax-nav li").removeClass("active");
  $(this).parent().toggleClass("active");
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        500
      );
      return false;
    }
  }
});
/*------------------------------------------
            Slider 
--------------------------------------------*/
$(".single-projet-view").owlCarousel({
  items: 1,
  margin: 0,
  nav: false,
  dots: true,
  loop: true,
  autoplay: true,
  autoplaySpeed: 1500,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
//Testimonial owl carousel
$(".hero-testimonial-carousel").owlCarousel({
  items: 2,
  margin: 0,
  nav: false,
  dots: true,
  loop: true,
  autoplay: true,
  autoplaySpeed: 1500,
  autoplayTimeout: 3000,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
//product owl carousel
$(".product-carousel").owlCarousel({
  items: 4,
  margin: 30,
  nav: false,
  dots: true,
  loop: true,
  autoplay: true,
  autoplaySpeed: 1500,
  autoplayTimeout: 3000,
  responsive: {
    320: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});

//Testimonial Slider
$(".testimonial-wrapper").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='ion-ios-arrow-thin-left'></i>",
    "<i class='ion-ios-arrow-thin-right'></i>",
  ],
  dots: false,
  autoplay: true,
  autoplaySpeed: 1500,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

//Testimonial Slider

$(".partners-wrapper").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 1500,
  autoplayTimeout: 3000,
});
var swiperClients = new Swiper(".swiper-slider-clients", {
  allowTouchMove: true,
  slidesPerView: 6,
  paginationClickable: true,
  preventClicks: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  pagination: {
    el: null,
  },
  breakpoints: {
    1199: {
      slidesPerView: 6,
    },
    991: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 3,
    },
  },
  on: {
    resize: function () {
      swiperClients.update();
    },
  },
});

//Team Slider
$(".team-wrapper").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
//Project Details Slider
$(".project-details-slider-wrap").owlCarousel({
  loop: true,
  nav: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

/*-------------------------------------
        Footer Accordian
-----------------------------------*/
$(".nav h3").on("click", function () {
  $(this).parent(".nav").toggleClass("open");
});

/*-------------------------------------
        shortcode starts
-----------------------------------*/
$(".shortcode-wrapper").owlCarousel({
  items: 2,
  margin: 30,
  nav: false,
  dots: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

/*-------------------------------------------------------------------------------
  Navbar 
-------------------------------------------------------------------------------*/
var nav_offset_top = $("header").height() + 50;

function navbarFixed() {
  if ($(".menu-area-one").length) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= nav_offset_top) {
        $(".menu-area-one").addClass("navbar_fixed");
      } else {
        $(".menu-area-one").removeClass("navbar_fixed");
      }
    });
  }
}
navbarFixed();
/*-------------------------------------
             Fixed Navbar
----------------------------------------*/
function navbarFixed() {
  if ($(".ham-menu").length) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 600) {
        $(".ham-box").addClass("ham-bg-dark");
      } else {
        $(".ham-box").removeClass("ham-bg-dark");
      }
    });
  }
}
navbarFixed();

/*-------------------------------------
            Full screen Search
----------------------------------------*/

/*-------------------------------------------------------------------------------
          Portfolio carousel with filter
-------------------------------------------------------------------------------*/
$(".filter-project-carousel").owlCarousel({
  dots: false,
  nav: true,
  margin: 30,
  smartSpeed: 250,
  slideSpeed: 300,
  autoPlay: 2500,

  responsiveRefreshRate: 0,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

$(".filter-project-carousel2").owlCarousel({
  dots: false,
  nav: true,
  margin: 30,
  autoPlay: 2500,
  smartSpeed: 250,
  responsiveRefreshRate: 0,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    768: {
      items: 2,
    },
  },
});

//Filter Carousel
$(".js-filter-carousel li a").on("click", function () {
  $(".js-filter-carousel .active").removeClass("active");
  $(this).closest("li").addClass("active");
  var selector = $(this).attr("data-filter");
  $(".filter-project-carousel").fadeOut(300);
  $(".filter-project-carousel").fadeIn(300);
  setTimeout(function () {
    $(".filter-project-carousel .owl-item").hide();
    $(selector).closest(".filter-project-carousel .owl-item").show();
  }, 300);
  return false;
});

/*---------------------------------------
        Slick slider with zoom
    -----------------------------------------*/
// SLICK
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  arrows: false,
  focusOnSelect: true,
  /*nextArrow: '<i class="ion-ios-arrow-right slick-next"></i>',
    prevArrow: '<i class="ion-ios-arrow-left  slick-prev"></i>',*/
});

jQuery(document).ready(function ($) {
  /*------------------------------------------
                 Product quantity
--------------------------------------------*/

  var quantitiy = 0;
  $(".quantity-right-plus").on("click", function (e) {
    e.preventDefault();
    var quantity = parseInt($(this).parent().siblings(".qty-amt").val());
    $(this)
      .parent()
      .siblings(".qty-amt")
      .val(quantity + 1);
  });
  $(".quantity-left-minus").on("click", function (e) {
    e.preventDefault();
    var quantity = parseInt($(this).parent().siblings(".qty-amt").val());
    if (quantity > 0) {
      $(this)
        .parent()
        .siblings(".qty-amt")
        .val(quantity - 1);
    }
  });

  /*------------------------------------    
     Shopping Cart 
--------------------------------------*/

  $(".shop-cart").on("click", function () {
    $(".shopping__cart").addClass("shopping__cart__on");
    $(".body__overlay").addClass("is-visible");
  });
  $(".offsetmenu__close__btn").on("click", function () {
    $(".shopping__cart").removeClass("shopping__cart__on");
    $(".body__overlay").removeClass("is-visible");
  });

  /*------------------------
     price range slider
--------------------------*/
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });

  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );

  /*------------------------
   Category menu Activation
--------------------------*/
  $(".category-sub-menu li.has-sub > a").on("click", function () {
    $(this).removeAttr("href");
    var element = $(this).parent("li");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
      element.find("ul").slideUp();
    } else {
      element.addClass("open");
      element.children("ul").slideDown();
      element.siblings("li").children("ul").slideUp();
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
      element.siblings("li").find("ul").slideUp();
    }
  });
  /*-----------------------------
    Dropdown Select option
-------------------------------*/
  $(".filter-menu a").on("click", function () {
    $(this).parent().parent().prev().html($(this).html());
  });
});
