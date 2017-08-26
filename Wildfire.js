

/**Mobile Menu**/
  /*up*/
    $(document).ready(function(){
      $("#mobile-menu-trigger").click(function(){
        $("#mobile-menu").animate({top:'0vh'})
        $('#mobile-menu').css({display:'block'});
      });
    });
  /*down*/
    $(document).ready(function(){
      $("#mobile-menu-close").click(function(){
          $("#mobile-menu").animate({top:'-110vh'},function(){
            $("#mobile-menu").css({display:'none'});
          });
        });
      });
/**NEXT**/
