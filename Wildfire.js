/**Menu Movement**/
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

/**Notifications Movement**/
  /*up*/
  $(document).ready(function(){
    $("#notifications-trigger").click(function(){
      $("#notifications").animate({top:'40px'})
      $('#notifications').css({display:'block'});
    });
  });
  /*down*/
  $(document).ready(function(){
    $("#notifications-close").click(function(){
        $("#notifications").animate({top:'-150vh'},
          function(){
            $("#notifications").css({display:'none'});
        });
      });
    });

/**Splash Page**/
$(document).ready(function(){
  $("#signup").click(function(){
      $("#b-signup").css({display:'block'}),
      $("#b-login").css({display:'none'});
    });
  });

  $(document).ready(function(){
    $("#login").click(function(){
        $("#b-login").css({display:'block'}),
        $("#b-signup").css({display:'none'});
      });
    });

/**Buttons**/
    $(document).ready(function(){
      $('#overview').click(function(){ showHideDiv("b-overview", true);
        // $("#b-overview").css({display:'grid'});
      });
      $('#maps').click(function(){ showHideDiv("b-maps", true);
      });
      $('#feeds').click(function(){ showHideDiv("b-feeds", true);
      });
      $('#you').click(function(){ showHideDiv("b-you", true);
      });
    });

function removeAllButSelected(selectedDiv) {
  //Buttons need to change class
  var btns_remove_class = ["overview", "maps", "feeds", "you"];
  //Div ids need to change style
  var btns_remove_id = ["b-overview", "b-maps", "b-feeds", "b-you"];

  //what this (below) means is, we will look at everything that isn't what we have currently selected
  for (i = 0; i<btns_remove_id.length; i++) {
    if (btns_remove_id[i] != selectedDiv) {
      console.log("We are comparing " + btns_remove_class[i] + " with " + selectedDiv + " and it's not working!");
      //This is the current element we are looking at, that will be changed with show/hide
      const div_change = document.querySelector('#'+btns_remove_id[i]);
      div_change.style = "display: none";
      //If the current div Class is not selected, we change class to BU
      const button_change = document.getElementById(btns_remove_class[i]);
      // button_change.className.replace("bu-selected","bu");
      if ($(button_change).hasClass('bu-selected')) {
          $(button_change).removeClass('bu-selected')
      }
    } else {
      const div_change = document.querySelector('#'+btns_remove_id[i]);
      div_change.style = "display: grid";
      var button_change_good = document.getElementById(btns_remove_class[i]);
      if (button_change_good) {
        $(button_change_good).addClass('bu-selected');
      }
    }
  }
}

function showHideDiv(divId, show) {
  removeAllButSelected(divId);
  const div = document.querySelector('#'+divId);
  if (show) {
    div.style = "display: grid";
  } else {
    div.style = "display: none";
  }
}
