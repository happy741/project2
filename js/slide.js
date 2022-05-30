$(function () {
    $('#prev').click(function () {
        $('.slide li:last').prependTo('.slide');
        $('.slide').css('margin-left', -800);
        $('.slide').stop().animate({ marginLeft: 0 }, 800)
    });

    $('#next').click(function () {

        $('.slide').stop().animate({ marginLeft: -870 }, 800, function () {
            $('.slide li:first').appendTo('.slide');
            $('.slide').css({ marginLeft: 0 })
        });
    });


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