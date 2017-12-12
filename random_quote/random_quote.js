function randomQuote(){
     $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(data){
      $("#quote").html('"'+data.quote+'"');
      $("#author").html(data.author);
       currentQuote = data.quote + " By - " + data.author;
    });
}

var currentQuote="";

$(document).ready(function(){

       randomQuote();



  $("#btnQuote").on("click", function(){
     $('#btnTweet').removeClass("disabled");
     $('#btnTweet').html("Wanna tweet?");
     $('#btnTweet').removeClass("btn-danger");
     randomQuote();

  });

  $('#btnTweet').on('click', function(){
    if(currentQuote.length>140){
      currentQuote="";
      $(this).addClass("disabled");
      $(this).addClass("btn-danger");
      $(this).html("Sorry, more than 140 characters")
    }
    else{
      $('#btnTweet').attr('href', 'https://twitter.com/intent/tweet?text='+currentQuote).attr('target', '_blank');
    }

  });



});
