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

    //process
    $(".s1").click(function(){
        $(".t0").fadeIn();
        $(".t1").hide();
        $(".t2").hide();
        $(".t3").hide();
        $(".t4").hide();
        $(".t5").hide();
    });

    $(".s2").click(function(){
        $(".t1").fadeIn();
        $(".t0").hide();
        $(".t2").hide();
        $(".t3").hide();
        $(".t4").hide();
        $(".t5").hide();
    });

    $(".s3").click(function(){
        $(".t2").fadeIn();
        $(".t1").hide();
        $(".t0").hide();
        $(".t3").hide();
        $(".t4").hide();
        $(".t5").hide();
    });

    $(".s4").click(function(){
        $(".t3").fadeIn();
        $(".t1").hide();
        $(".t2").hide();
        $(".t0").hide();
        $(".t4").hide();
        $(".t5").hide();
    });

    $(".s5").click(function(){
        $(".t4").fadeIn();
        $(".t1").hide();
        $(".t2").hide();
        $(".t0").hide();
        $(".t3").hide();
        $(".t5").hide();
    });

    $(".s6").click(function(){
        $(".t5").fadeIn();
        $(".t1").hide();
        $(".t2").hide();
        $(".t0").hide();
        $(".t4").hide();
        $(".t3").hide();
    });
});