
   
    $(window).load(function(){

      // FlexSlider Section   

      $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 2500,
        animationSpeed: 1000,

        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    


// textillate



    $('.section-heading').textillate({
        in: { effect: 'rollIn', delay:200},
        out: { effect: 'rollOut', delay:200,
        reverse: true,

    },
        loop: true
    
    });



    $('.home-logo').textillate({
        in: { effect: 'fadeInLeftBig', 
        delay:150,
        autoStart: true,
},
        out: { effect: 'fadeOutRightBig', 
        delay:150,
    reverse: true,
},
        loop: true
    
    });

// wow animation for scrolling

new WOW().init();

});


//Loader 
$(window).load(function () {
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");
        });

$(document).ready(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 600) {
                    $('#scroll_top').fadeIn();
                } else {
                    $('#scroll_top').fadeOut();
                }
            });
            $("a.scrollup").click(function () {
                $("html, body").animate({scrollTop: 0}, "slow");
                return false;
            });

        });

// animsition/Home Page rotation

  // $(document).ready(function() {
  //   $('.animsition').animsition({
  //       inClass: 'rotate-in-lg',
  //       inDuration: 1000,

  //   });
  // });
