$(document).ready(function(){
    var i,j,k,i1,i2;
    var ls=301, ms=201, ws=101;
    var lc = $('#logo .inner_div').length;
    var mc = $('#mobile .inner_div').length;
    var wc = $('#web .inner_div').length;
    var le = ls + lc - 1;
    var we = ws + wc - 1;
    var me = ms + mc - 1;
    
   
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
      $(".main").css("overflow","hidden");
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
 
   $(".fade,.frame_outter,.cross").click(function(){
      $(".popup").hide();
      $(".popups").hide();
      $(".main").css("overflow","auto");
   });  

    $(".heading").click(function(){
      $(".popup").hide();
      $(".popups").show();  
        i1 = $(this).siblings().attr('href');
        i2 = $(this).siblings().children().attr('id');
      $('#popups_5').attr('src',i1); 
      $(".main").css("overflow","hidden");          
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
     
  

  