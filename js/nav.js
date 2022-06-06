 //네비게이션 슬라이드
 $(function(){
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
     document.getElementById("scroll_nav").style.top = "0";
   } else {
     document.getElementById("scroll_nav").style.top = "-70px";
   }
 }

 
function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(window).resize(function(){
if(window.innerWidth<=768){
    $('#b').show();
}
});
});
 //네비게이션 슬라이드
 