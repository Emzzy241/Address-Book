$(document).ready( function(){
    $("#contactValue").submit( function(event){
        event.preventDefault();
        $(".storing").show();
        $(".storing1").click( function(){
            $("#contact").show();
        });
    });
});