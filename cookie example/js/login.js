

$(function(){

    $("#login").on("click", function(){
        $.cookie("userName", $("#userName").val());
        location.href = "shopping.html";
    })

})

