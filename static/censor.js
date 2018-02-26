$(document).ready(function(){
    var profanity = ["f-word","lorax","c-word"];
    var post = $('#postedmessage').val();
    for(var i = 0; i < 3; i++){
        if(str.indexOf(post) > -1){
            if(post == profanity[i]){
                $("#postedmessage").val() = "Not a friendly enough message, go back to school.";
            }
        }
    }
});
