
// //Javascript
// //최초 로드 시 iframe 높이값 비율에 맞게 세팅
// var $videoIframe = document.getElementsByClassName('play');
// var responsiveHeight = $videoIframe.offsetWidth * 0.5625;
// $videoIframe.setAttribute('height', responsiveHeight);

// //브라우저 리사이즈 시 iframe 높이값 비율에 맞게 세팅
// window.addEventListener('resize', function(){
//     responsiveHeight = $videoIframe.offsetWidth * 0.5625;
//     $videoIframe.setAttribute('height', responsiveHeight);
// });

$(window).resize(function(){resizeYoutube();});
$(function(){resizeYoutube();});
function resizeYoutube(){ $("iframe").each(function(){
     if( /^https?:\/\/www.youtube.com\/embed\//g.test($(this).attr("src")) ){
          $(this).css("width","100%"); $(this).css("height",Math.ceil( parseInt($(this).css("width")) * 480 / 854 )
           + "px");} }); }


$(function(){

    $('.you').hide();

    var embed = $('#play'); //동영상 코드

    $('#box').on('click', function(){ //레이어 열때
        $('.you').show();
        var path = $(this).attr('href');
        $('.popup').append(embed);
        $(path).fadeIn();
    })

    $('.close_tbn02').on('click', function(){ //레이어 닫을때
        $(this).parents('#layer').fadeOut();
        $('.popup').empty();
    })
    // 외부영역 클릭 시 팝업 닫기
            $(document).mouseup(function (e){
                var LayerPopup = $(".close");
                if(LayerPopup.has(e.target).length === 0){
                    // LayerPopup.removeClass("show");
                    $(".close").fadeOut();
                    $('.popup').empty(300);
                    $("body").css("overflow", "auto");
                }
            });

});


