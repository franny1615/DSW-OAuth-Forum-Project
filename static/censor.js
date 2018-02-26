$(document).ready(function(){
    var profanity = ["f-word","lorax","c-word"]; 
    for(var i = 0; i < 3; i++){
        if(profanity[i] == $("#postedmessage").val()){
            $("#postedmessage").val() = "Not a friendly enough message, go back to school.";
        }
    }
});
