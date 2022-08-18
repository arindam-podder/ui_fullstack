

$(function(){


    if($.cookie("userName") == undefined){
        this.location.href = "login.html";
    }
    else{
        $("#user").html( "("+$.cookie("userName")+")" );
    }


    $("#logout").click(()=>{
       $.removeCookie("userName");
       location.href="login.html";
    })

})