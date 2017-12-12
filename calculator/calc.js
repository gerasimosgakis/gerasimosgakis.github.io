$(document).ready(function(){

  $("#zero").click(function(){
    $("#screen_text").append("0");
  });
  $("#one").click(function(){
    $("#screen_text").append("1");
  });
  $("#two").click(function(){
    $("#screen_text").append("2");
  });
  $("#three").click(function(){
    $("#screen_text").append("3");
  });
  $("#four").click(function(){
    $("#screen_text").append("4");
  });
  $("#five").click(function(){
    $("#screen_text").append("5");
  });
  $("#six").click(function(){
    $("#screen_text").append("6");
  });
  $("#seven").click(function(){
    $("#screen_text").append("7");
  });
  $("#eight").click(function(){
    $("#screen_text").append("8");
  });
  $("#nine").click(function(){
    $("#screen_text").append("9");
  });
  $("#dot").click(function(){
    if (/[\-\+\/\*\.]$/.test($("#screen_text").text()) || $("#screen_text").text()=="" ){
      $("#screen_text").append("");
    }
    else{
      $("#screen_text").append(".");
    }
  });
  $("#plus").click(function(){
    if (/[\s\-\+\/\*\.]$/.test($("#screen_text").text())){
      $("#screen_text").append("");
    }
    else{
      $("#screen_text").append("+");
    }
  });
  $("#sub").click(function(){
    if (/[\-\+\/\*\.]$/.test($("#screen_text").text())){
      $("#screen_text").append("");
    }
    else{
      $("#screen_text").append("-");
    }
  });
  $("#div").click(function(){
    if (/[\-\+\/\*\.]$/.test($("#screen_text").text())){
      $("#screen_text").append("");
    }
    else{
      $("#screen_text").append("/");
    }
  });
  $("#mul").click(function(){
    if (/[\-\+\/\*\.]$/.test($("#screen_text").text())){
      $("#screen_text").append("");
    }
    else{
      $("#screen_text").append("*");
    }
  });
  $("#ac").click(function(){
    $("#screen_text").html("");
  });
  $("#ce").click(function(){
    $("#screen_text").html($("#screen_text").text().slice(0,-1));
  });
  $("#equals").click(function(){
    $("#screen_text").html(eval($("#screen_text").text()));
  });


});
