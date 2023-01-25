(function(){
  "user strict";

  $(window).on("load", function() {
      //preloader
      $("#preloader").delay(300).animate({
        "opacity" : "0"
        }, 500, function() {
        $("#preloader").css("display","none");
    });
    // add class on banner image div  for making animation effect after certain time
    setInterval(function(){ 
      $('.banner-image').addClass("active")
    }, 300);

     // run test on initial page load
     checkSize();
     // run test on resize of the window
     $(window).resize(checkSize);
  });

  $(document).on('ready',function() {
    background();
  });

  function background() {
    var img=$('.has_bg_image');
    img.css('background-image', function () {
    var bg = ('url(' + $(this).data('background') + ')');
    return bg;
    });
  }
//js code for mobile menu 
$(".menu-toggle").on("click", function() {
  $(this).toggleClass("is-active");
});
   //Function to the css rule
   function checkSize(){
    if (window.matchMedia('(max-width: 991px)').matches) {
        // js code for responsive drop-down-menu-item with swing effect
        $(".navbar-collapse>ul>li>a, .navbar-collapse ul.sub-menu>li>a").on("click", function() {
          var element = $(this).parent("li");
          if (element.hasClass("open")) {
            element.removeClass("open");
            element.find("li").removeClass("open");
            element.find("ul").slideUp(500,"linear");
          }
          else {
            element.addClass("open");
            element.children("ul").slideDown();
            element.siblings("li").children("ul").slideUp();
            element.siblings("li").removeClass("open");
            element.siblings("li").find("li").removeClass("open");
            element.siblings("li").find("ul").slideUp();
          }
        });
      }
    }

  $(".number-list li").on('click', function(){
    $(this).toggleClass("active");
  });

  // countdown plungin init
  $('#clock').countdown('2019/7/29', function(event) {
    $(this).html(event.strftime(''
    +'<div><span>%D</span><p>day</p></div>'
    +'<div><span>%H</span><p>hrs</p></div>'
    +'<div><span>%M</span><p>mins</p></div>'
    +'<div><span>%S</span><p>sec</p></div>'));
  });

  // loade more button animation effect
  $('.load-more').on('click',function(){
    $(this).addClass('load-more--loading');
    setTimeout(function(){
        $('.load-more').removeClass('load-more--loading')
    }, 1000);
  });

  // load more js
  $(function() {
    var rows2display=5;
    var rem=0;
    var forCntr;
    var MaxCntr=0;
     for (var i = $('#lotteryTable tr').length; i > rows2display; i--) {
      rem=rem+1
      $('tr:nth-child('+ i +')').hide(800);
    }
    forCntr=$('#lotteryTable tr').length-rem;
    forStarter=forCntr+1;
    $('#show').on('click', function() {
      MaxCntr=forStarter+rows2display;
      if (forStarter<=$('#lotteryTable tr').length)
          {
          for (var i = forStarter; i < MaxCntr; i++)
          { 
            $('tr:nth-child('+ i +')').show(800);
          }
          forStarter=forStarter+rows2display
          }
      else
      {
      $('#show').prop('disabled', true);
      }
    });
  });

   // testimonial-slider
   $('.testimonial-slider').owlCarousel({
      loop:true,
      margin:0,
      dots: true,
      smartSpeed: 800,
      slideBy: 1,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          768:{
              items:2,
              nav:false
          },
          1000:{
              items:3,
              nav:false,
              loop:false
          }
      }
  })
  // testimonial-slider
  $('.payment-system-slider').owlCarousel({
    loop:true,
    margin:30,
    dots: true,
    autoplay: true,
    smartSpeed: 800,
    slideBy: 1,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
    }
  });

  $( function() {
    $( "#datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "assets/fonts/custom-fonts/calendar.svg",
      buttonImageOnly: true,
      buttonText: "Select date",
      changeMonth: true,
        changeYear: true
    });
  } );

  // Animate the scroll to top
  $(".scroll-to-top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, 800);
  });

  // all functions
  $(window).on("scroll", bottomToTop);
  $(window).on("scroll", elementEffectRight);
  $(window).on("scroll", elementEffectLeft);
  $(window).on("scroll", dimondElement);

  function bottomToTop() {
    var toggleBtn = $(".scroll-to-top");
    if ($(this).scrollTop() > 200) {
      toggleBtn.fadeIn(200);
    } else {
      toggleBtn.fadeOut(200);
    }
  }

  function elementEffectRight() {
    var element = $(".element-right");
    if ($(this).scrollTop() > 700) {
      element.addClass("active");
    } else {
      element.removeClass("active");
    }
  }

  function elementEffectLeft() {
    var element = $(".element-left");
    if ($(this).scrollTop() > 600) {
      element.addClass("active");
    } else {
      element.removeClass("active");
    }
  }

  function dimondElement() {
    var elementWrapper = $('.elements-wrapper');
    var hieghtThreshold = $(".top-jackpot-winner-section").offset().top;
    var hieghtThreshold_end  = $(".top-jackpot-winner-section").offset().top +$(".testimonial-section").outerHeight(true) ;
    var scroll = $(window).scrollTop();
    if (scroll >= hieghtThreshold && scroll <=  hieghtThreshold_end ) {
      elementWrapper.addClass('active');
    } else {
      elementWrapper.removeClass('active');
    }
  }
  
})(jQuery);

