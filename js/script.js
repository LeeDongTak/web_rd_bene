$(document).ready(function(){
//    서브매뉴 이벤트
    $(".header > .nav_conteniar > .nav_box > ul > li").mouseenter(function(){
        $(".sub_nenu_wrap").addClass("active");
        $(".header").addClass("active");
    });
    $(".sub_nenu_wrap").mouseleave(function(){
        $(".sub_nenu_wrap").removeClass("active");
        $(".header").removeClass("active");
    });

    // 슬릭슬라이더 (배너 슬라이드)
    $(".benner_wrap").slick({
        autoplay: true,
        autoplaySpeed: 3000 ,
        arrows: true , 
        dots: true ,
        centerrMode: true,
        pauseOnHover: true ,
        slidesToScroll: 1, 
        slidesToShow: 1,
        infinite:true,
        swipe:  true ,
        speed: 1000 ,
        prevArrow: $(".ben_prev_btn"),
        nextArrow: $(".ben_next_btn"), 
        initialSlide:0,
    });
    // 슬릭슬라이더 (메뉴 슬라이드)
    $(".menu_wrap > .content_box").slick({
        autoplay: true,
        autoplaySpeed: 3000 ,
        arrows: true , 
        dots: false ,
        centerrMode: true,
        pauseOnHover: true ,
        slidesToScroll: 1, 
        slidesToShow: 4,
        infinite:true,
        swipe:  true ,
        speed: 1000 ,
        prevArrow: $(".prev_btn"),
        nextArrow: $(".next_btn"), 
        initialSlide:0,
    });

    // 고정버튼 클릭 이벤트
    $(".sns_wrap > .close_btn").click(function(){
        // $(".sns_wrap > .fb_btn").animate({right:"300px"},600);
        //$(".sns_wrap").css({'height':'210px'});
        $(".sns_wrap").toggleClass("active");
    });
    // hello-again 마우스 이벤트
    $(".hello_again_wrap > .hello_again_box > .ha_wrap").mouseenter(function(){
        $(this).addClass("active");
    });
    $(".hello_again_wrap > .hello_again_box > .ha_wrap").mouseleave(function(){
        $(this).removeClass("active");
    });
    $(".hello_again_wrap > .hello_again_box > .ha_wrap_2").mouseenter(function(){
        $(this).addClass("active");
    });
    $(".hello_again_wrap > .hello_again_box > .ha_wrap_2").mouseleave(function(){
        $(this).removeClass("active");
    });
    $(".hello_again_wrap > .hello_again_box > .ha_10_wrap").mouseenter(function(){
        $(this).addClass("active");
    });
    $(".hello_again_wrap > .hello_again_box > .ha_10_wrap").mouseleave(function(){
        $(this).removeClass("active");
    });

    //햄버거 버튼 이벤트
    $(".nobile_wrap > .hamburg_wrap").click(function(){
        $(".nobile_wrap").toggleClass("active");
        $(".nobile_wrap > .hamburg_wrap").toggleClass("active");
    });  
    // 반응형 매뉴 이벤트
    $(".menu_box > li").click(function(){
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
    });  
    // 슬릭슬라이더 (반응형 hello_again)
    $(".hello_again_wrap > .m_hello_again > .content_box").slick({
        autoplay: true,
        autoplaySpeed: 3000 ,
        arrows: true , 
        dots: false ,
        centerrMode: true,
        pauseOnHover: true ,
        slidesToScroll: 1, 
        slidesToShow: 1,
        infinite:true,
        swipe:  true ,
        speed: 1000 ,
        prevArrow: $(".mo_prev_btn"),
        nextArrow: $(".mo_next_btn"), 
        initialSlide:0,
    });
    AOS.init();
}); 