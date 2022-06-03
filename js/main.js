
         //리뷰 이미지 전환
         $(function(){
            $('#btn1').click(function(){
                $('#review_1').fadeIn();
                $('#review_2').hide();
                $('#review_3').hide();
                $('#review_4').hide();
                $('#review_5').hide();
            });

            $('#btn2').click(function(){
                $('#review_2').fadeIn();
                $('#review_1').hide();
                $('#review_3').hide();
                $('#review_4').hide();
                $('#review_5').hide();
            });

            $('#btn3').click(function(){
                $('#review_3').fadeIn();
                $('#review_1').hide();
                $('#review_2').hide();
                $('#review_4').hide();
                $('#review_5').hide();
            });

            $('#btn4').click(function(){
                $('#review_4').fadeIn();
                $('#review_1').hide();
                $('#review_3').hide();
                $('#review_2').hide();
                $('#review_5').hide();
            });

            $('#btn5').click(function(){
                $('#review_5').fadeIn();
                $('#review_1').hide();
                $('#review_3').hide();
                $('#review_4').hide();
                $('#review_2').hide();
            });
        });
        
        //리뷰 이미지 전환


        //메뉴 이미지 전환
        $(function(){
            $('.icon1').click(function(){
                $('.section_img').css("background-image","url(img/image.jpg)");
            });
            $('.icon2').click(function(){
                $('.section_img').css("background-image","url(img/water2.jpg)");
            });
            $('.icon3').click(function(){
                $('.section_img').css("background-image","url(img/wedding4.jpg)");
            });

            $('.icon4').click(function(){
                $('.section_img').css("background-image","url(img/eco2.jpg)");
            });

            $('.icon5').click(function(){
                $('.section_img').css("background-image","url(img/food.jpg)");
            });


        });
        //메뉴 이미지 전환



      

function openNav() {
      document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }

$(window).resize(function(){
    if(window.innerWidth<=768){
        $('#b').show();
    }
});