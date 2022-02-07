

$(document).ready(function(){
   $(window).scroll(function () {
    if ($(this).scrollTop() > 10) { 
        $('#header').stop().css("display","none");
		$('#nav_box').fadeIn(600);
    } else {


		$('#header').stop().delay(300).fadeIn(300);
        $('#nav_box').fadeOut(600);		
    }
   });

   $('#back-top').click(function () {
    $('body,html').animate({
         scrollTop: 0
    }, 600);
         return false;
   });

});

$(document).ready(function(){
   $(window).scroll(function () {
    if ($(this).scrollBottom() > 10) { 
        $('#back-top').fadeIn(600);
		$('#nav_box').fadeIn(600);		 
    } else {
        $('#back-top').fadeOut(600);
        $('#nav_box').fadeOut(600);		
    }
   });


   $('#back-top').click(function () {
    $('body,html').animate({
         scrollTop: 0
    }, 600);
         return false;
   });

});


