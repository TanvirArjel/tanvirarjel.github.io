
   
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


            

// animsition/Home Page rotation

  // $(document).ready(function() {
  //   $('.animsition').animsition({
  //       inClass: 'rotate-in-lg',
  //       inDuration: 1000,

  //   });
  // });
