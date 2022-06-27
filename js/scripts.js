// userInterface logic

$(document).ready( function(){
    $("#contactValue").submit( function(event){
        event.preventDefault();

        let firstname = $(".val").val();
        let secondname = $(".val1").val();
        let lastname = $(".val2").val();
        let phone = $(".val3").val();
        let skinColor = $(".val4").val();
        let age = $(".val5").val();
        let place = $(".val6").val();
        let date = $(".val7").val();
        let state = $(".val8").val();

        // Now let us append each of our values gotten from the user to show in the contact box

        $(".val").text(firstname);
        $(".val1").text(secondname);
        $(".val2").text(lastname);
        $(".val3").text(phone);
        $(".val4").text(skinColor);
        $(".val5").text(age);
        $(".val6").text(place);
        $(".val7").text(date);
        $(".val8").text(state);



        // there is an error here, when we click on the view more than once, the hide span dissapears
        $(".storing").show();
        $(".storing1").click( function(){
            $("#contact").show();
            $(".storing").toggle();
            $(".successs").toggle();
        });
        $(".success1").click( function(){
            $("#contact").hide();
            
            
            $(".storing").show();
        });
    });
});