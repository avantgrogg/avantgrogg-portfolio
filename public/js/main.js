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

$(".show-button").click(function(event){
    $(".show-button").html("doug@avantgrogg.com");   
});

$("#jumbo .blue").click(function(event){
   $("#jumbo .blue").html("doug@avantgrogg.com"); 
});