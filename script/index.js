$(document).ready(function(){

// Adds "colored" class to icons when hovered
  $( "i" ).hover(
    function() {
      $( this ).addClass("colored");
    }, function() {
      $( this ).removeClass( "colored" )
    }
  );

  // $("i").addClass("colored")


})