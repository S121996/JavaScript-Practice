$(document).ready(function(){
    $("#btn").click(function(){
        // $("#img1").slideUp(2000,function(){
        //     $("img1").slideDown(2000); 
        // })
       $("#img1").slideUp(2000).css('opacity','1').slideDown(3000).fadeOut(2000).fadeIn(3000)})
    })