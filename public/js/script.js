$(document).ready(function(){
    var i,j,k;
    var ls=301,lc=4,le=304;
    var ms=201,mc=19,me=219;
    var ws=101,wc=8,we=108;
   
   $('a[data-toggle="formtab"]').click(function(){
        var targetId = $(this).attr('href');
        $('.content').removeClass('active')
        $('a[data-toggle="formtab"]').removeClass('active');
        $(targetId).addClass('active');
      $('a[href="'+targetId+'"]').addClass('active')
    }); 

   $("img").click(function(){
      $(".popup").show(); 
        i = this.src;
        j = this.id;
      $('#popup_5').attr('src',i);           
   });  

   $(".next").click(function(){      
     if(j==le)   
     j=le-lc;
     else if(j==me)
     j=me-mc;
     else if(j==we)
     j=we-wc;
      k = document.getElementById(++j).getAttribute("src")
      $('#popup_5').attr('src',k);          
    });  

    $(".prev").click(function(){ 
        if(j==ls)   
        j=ls+lc;
        else if(j==ms)
        j=ms+mc;
        else if(j==ws)
        j=ws+wc;
        k = document.getElementById(--j).getAttribute("src")
        $('#popup_5').attr('src',k);
     });     
 
   $(".fade").click(function(){
      $(".popup").hide();
   });  
 
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
});
     
  

  