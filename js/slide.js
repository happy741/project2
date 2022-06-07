$(function () {


    var mql = window.matchMedia("screen and (max-width: 600px)");

    if (mql.matches) {
        $("#next").click(function () {
            $('.slide li:first').prependTo('.slide');
            $('.slide').stop().animate({ marginLeft: -880 }, 800, function () {


            });
            $(this).css("background-color", "#fbc22c");
            $("#prev").css("background-color", "white");
            $('article').animate({ height: '1665px' }, 500);
        });

        $("#prev").click(function () {
            $('.slide li:first').prependTo('.slide');

            $('.slide').stop().animate({ marginLeft: 10 }, 800)


            $(this).css("background-color", "#fbc22c");
            $("#next").css("background-color", "white");
            $('article').animate({ height: '750px' }, 500);
        });

    } else {

        $('#prev').click(function () {
            $('.slide li:first').prependTo('.slide');

            $('.slide').stop().animate({ marginLeft: 10 }, 800)


            $(this).css("background-color", "#fbc22c");
            $("#next").css("background-color", "white");

        });

        $('#next').click(function () {
            $('.slide li:first').prependTo('.slide');
            $('.slide').stop().animate({ marginLeft: -880 }, 800, function () {


            });
            $(this).css("background-color", "#fbc22c");
            $("#prev").css("background-color", "white");

        });

    }



    $('#prev2').click(function () {
        $('#ser_ul li:last').prependTo('#ser_ul');
        $('#ser_ul').css('margin-left', -1000);
        $('#ser_ul').stop().animate({ marginLeft: 0 }, 800)
    });




    $('#next2').click(function () {

        $('#ser_ul').stop().animate({ marginLeft: -1000 }, 800, function () {
            $('#ser_ul li:first').appendTo('#ser_ul');
            $('#ser_ul').css({ marginLeft: 0 })
        });
    });





});


