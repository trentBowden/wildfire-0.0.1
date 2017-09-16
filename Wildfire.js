

/**Mobile Menu**/
  /*up*/
    $(document).ready(function(){
      $("#menu-trigger").click(function(){
        $("#menu").animate({top:'40px'})
        $('#menu').css({display:'block'});
      });
    });
  /*down*/
    $(document).ready(function(){
      $("#menu-close").click(function(){
          $("#menu").animate({top:'-150vh'},
            function(){
              $("#menu").css({display:'none'});
          });
        });
      });
/**NEXT**/
