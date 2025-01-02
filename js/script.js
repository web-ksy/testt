$(document).ready(function(){
    //menu
    $('.menu>li').mouseover(function(){
        $(this).find('.sub').stop().slideDown();
    });
    $('.menu>li').mouseout(function(){
        $(this).find('.sub').stop().slideUp();
    });

    //slide
    setInterval(function(){
        $('.imgbox').delay(2000);
        $('.imgbox').animate({marginLeft:-800});
        $('.imgbox').delay(2000);
        $('.imgbox').animate({marginLeft:-1600});
        $('.imgbox').delay(2000);
        $('.imgbox').animate({marginLeft:0});
    });

    //pop
    $('.notice li:first').click(function(){
        $('#modal').addClass('active');
    });
    $('button').click(function(){
        $('#modal').removeClass('active');
    });
});