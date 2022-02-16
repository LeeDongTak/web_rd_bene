

$(document).ready(function(){
   $(window).scroll(function () {
    if ($(this).scrollTop() > 10) { 
        $('.header').stop().css({
            'background':'#f2f2f2',
            'box-shadow':'1px 1px 7px #aaa'
        });
        $(".sub_nenu_wrap").mouseleave(function(){
            $('.header').stop().stop().css({'background':'#f2f2f2'});	
        });
        $('.top_btn').addClass("active");
     } else {
		$('.header').stop().stop().css({
            'background':'none',
            'box-shadow':'none'
        });	
        $(".header > .nav_conteniar > .nav_box > ul > li").mouseenter(function(){
            $('.header').stop().stop().css({'background':'#f2f2f2'});	
        });
        $(".sub_nenu_wrap").mouseleave(function(){
            $('.header').stop().stop().css({'background':'none'});	
        });
        $('.top_btn').removeClass("active");
    }
   });
   $(".header > .nav_conteniar > .nav_box > ul > li").mouseenter(function(){
    var fa_1 = $(".header").hasClass("active");
    console.log(fa_1);
   });

   
   $('.top_btn').click(function () {
    $('body,html').animate({
         scrollTop: 0
    }, 600);
         return false;
   });

});

$(document).ready(function(){
   $(window).scroll(function () {
    if ($(this).scrollBottom() > 10) { 
        $('.top_btn').fadeIn(600);	 
    } else {
        $('.top_btn').fadeOut(600);
    }
   });


   $('.top_btn').click(function () {
    $('body,html').animate({
         scrollTop: 0
    }, 600);
         return false;
   });

});


