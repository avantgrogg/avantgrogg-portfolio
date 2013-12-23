var stickyTop = $(".thirty").offset().top*.5;
  $(window).scroll(function(){ // scroll event  
 
    var windowTop = $(window).scrollTop(); // returns number
 
    if (stickyTop < windowTop) {
      $('.show-text').fadeIn('slow');
    }
    else {
      $('.show-text').fadeOut('slow');
    }
});