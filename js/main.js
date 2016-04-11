$(window).load(function(){
	$('.slider').fractionSlider({
		'fullWidth': 			true,
		'controls': 			true, 
		'pager': 				true,
		'responsive': 			true,
		'dimensions': 			"1900,800",
	    'increase': 			false,
		'pauseOnHover': 		false
	});

});



// Javascript for smooth anchor scrolling
$(document).ready(function(){
    $('a').click(function(){
      $('html,body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - 85
      }, 1500);
      return false;
    });
});