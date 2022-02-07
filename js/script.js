$(document).ready(function(){
   

    // 슬릭슬라이더 (쌍용새소식)
    $(".news > .slider").slick({
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
        prevArrow: $(".news_left_btn"),
        nextArrow: $(".news_right_btn"), 
        initialSlide:0,
    });
    // 슬라이드가 넘어가면 번호가 바뀌는 이벤트(클릭 동일)
    setInterval(function(){
        var newsNum = $(".news > .slider").slick('slickCurrentSlide');  
        $(".nav_text > .now").text(newsNum+1);
    },2000);
    // eco-round 슬릭슬라이드
    $(".eco_round > .eco_slider").slick({
        autoplay: false,
        arrows: true , 
        dots: false ,
        centerrMode: true,
        pauseOnHover: true ,
        slidesToScroll: 1, 
        slidesToShow: 1,
        infinite:true,
        swipe:  false ,
        speed: 1000 ,
        prevArrow: $(".left_btn"),
        nextArrow: $(".right_btn"), 
    });
    // eco_round 바튼클릭 시 숫자가 바뀌는 이벤트
    $(".nav_btn > .right_btn").click(function(){
        var ecoNum = $(".eco_round > .eco_slider").slick('slickCurrentSlide');  
        $(".nav_btn > .now").text(ecoNum+1);
        $(".eco_content").addClass("active");
        var indexNum = $(this).index();
        $(".eco_content").eq(ecoNum+1).addClass("active");
        $(".eco_content").eq(ecoNum+1).siblings().removeClass("active");
    });
    $(".nav_btn > .left_btn").click(function(){
        var ecoNum = $(".eco_round > .eco_slider").slick('slickCurrentSlide');  
        $(".nav_btn > .now").text(ecoNum+1);
        $(".eco_content").addClass("active");
        var indexNum = $(this).index();
        $(".eco_content").eq(ecoNum+1).addClass("active");
        $(".eco_content").eq(ecoNum+1).siblings().removeClass("active");
    });
});