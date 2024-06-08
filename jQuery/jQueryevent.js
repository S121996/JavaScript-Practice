// function fun()
// {
//    document.getElementById("img1").style.width="500px"
// }

// $("button").click(func1);
// function func1(){
//     $("#img1").css('width','500px')
// }

//anonymous function
$("document").ready(function () {
    // $("button").click(function(){
    // $("button").dblclick(function(){
    // $("button").mouseenter(function () {
    //     $("#img1").css('width', '500px')
    // });

    // $("button").mouseleave(function () {

    //     $("#img1").css('width', '250px');

    // });

    $("#img1").hover(func1,func2)
    function func1(){
        $("#img1").css('width', '500px') 
    }

    function func2(){
        $("#img1").css('width', '250px') 
    }

})