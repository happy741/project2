$(function(){
    $("#ser_menu1").click(function(){
        $('.slide2').fadeIn();
        $('.slide3').hide();
        $('.slide4').hide();
        $('.slide5').hide();
        $('#prev2').fadeIn();
        $('#next2').fadeIn();

    });

    $("#ser_menu2").click(function(){
        $('.slide3').fadeIn();
        $('.slide2').hide();
        $('.slide4').hide();
        $('.slide5').hide();
        $('#prev2').hide();
        $('#next2').hide();
    });

    $("#ser_menu3").click(function(){
        $('.slide4').fadeIn();
        $('.slide3').hide();
        $('.slide2').hide();
        $('.slide5').hide();
        $('#prev2').hide();
        $('#next2').hide();
    });

    $("#ser_menu4").click(function(){
        $('.slide5').fadeIn();
        $('.slide3').hide();
        $('.slide4').hide();
        $('.slide2').hide();
        $('#prev2').hide();
        $('#next2').hide();
    });
});