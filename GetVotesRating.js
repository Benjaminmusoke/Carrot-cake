/**
 * Created by Benjamin on 2016-7-3.
 */


function loadVotes(){
    $("#messageDiv").html("<p><img src=loader3.gif></p>");
    $.ajax({
        method:"GET",

        url:"https://edu.oscarb.se/sjk15/api/recipe/?api_key=843d12f45a85a3aa&recipe=carrot_cake",

        success: function (data) {
            $("#rating1").text(data.rating);
            $("#vote").text(data.votes);
            $("#recipe").text(data.recipe);
            $("#messageDiv").empty();

        }

    } );


    $(".rating").click(function(){

        var getValue=$(this).text();
        console.log("rating");

        var url="https://edu.oscarb.se/sjk15/api/recipe/?api_key=843d12f45a85a3aa&recipe=carrot_cake&rating=5";
        var params="";

        $("#messageDiv").html("<p><img src=loader3.gif></p>");

        $.ajax({

            method: "GET",
            data:{score_rating:getValue},
            url:url+params,
            success:function(){
                getVotes();
                $("#messageDiv").empty();
            }


        })


    });

}

/* call the function innerHtml*/
$(document).ready(function(){
    getVotes();

});