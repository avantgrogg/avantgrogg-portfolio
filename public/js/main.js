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
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        window.location = 'mailto:doug@avantgrogg.com';
    }
    $(".show-button").html("doug@avantgrogg.com");
    $(".show-button").addClass("normal-cursor");
});

$("#jumbo .blue").click(function(event){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        window.location = 'mailto:doug@avantgrogg.com';
    }
   $("#jumbo .blue").html("doug@avantgrogg.com");
    $("#jumbo .blue").addClass("normal-cursor");
});