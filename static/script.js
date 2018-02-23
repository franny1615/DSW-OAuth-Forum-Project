document.ready(function(){
  function underLineChar() {
    var specialChar = '@';
    if $("#textbox").val() == specialChar {
        $("#textbox").val().css('text-decoration','underline');
        else {
          $("#textbox").val().css('text-decoration','none');
        }
    
    }
  }

});

