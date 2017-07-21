$(document).ready(function() {
    $('#gogo').click(function() {
        var submit = $(".Maluma").val();
        if (submit === "Maluma") {
            alert("You got this!");
        }
        else {
            alert("Try Again!!");
        }
    });
    $("#submitBTN").click(function(){
        var name = $("#name").val();
        var comment = $("#message").val();
        $("#comments").append("<h1>" +name +"</h1>");
        $("#comments").append("<p>" + comment +"</p>");

});
});

