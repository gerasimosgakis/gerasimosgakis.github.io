var chosenTime; //Time user chooses for work session
var breakTime; //Time user chooses for break
var on = false; //Specifies if the timer is on
var currentTime; //The time that is actually running at the time


$(document).ready(function() {

  chosenTime = parseInt($("#session").text())*60*1000; // We store in the var the time we have chosen under the session and convert it to integer as well as convert it to ms
  currentTime = chosenTime; //Stores chosen time into currentTime in order to start
  breakTime = parseInt($("#break").text())*60*1000; // We do the same as above for the break chosen time
  $("#session_reduce").click(function(){ // When the user clicks on the '-' symbol we reduce the number until it reaches 0
    if(parseInt($("#session").text())>1){
      $("#session").html(parseInt($("#session").text())-1);
    }
    else{
      $("#session").html(parseInt($("#session").text()));
    }
    chosenTime=parseInt($("#session").text())*60*1000;
    currentTime = chosenTime;
  });

  $("#session_increase").click(function(){ //accordingly we increase when the '+' symbol is clicked
    $("#session").html(parseInt($("#session").text())+1);
    chosenTime=parseInt($("#session").text())*60*1000;
    currentTime = chosenTime;
  });

  $("#break_reduce").click(function(){
    if(parseInt($("#break").text())>1){
      $("#break").html(parseInt($("#break").text())-1);
    }
    else{
      $("#break").html(parseInt($("#break").text()));
    }
    breakTime=parseInt($("#break").text())*60*1000;
    currentTime = chosenTime;
  });

  $("#break_increase").click(function(){
    $("#break").html(parseInt($("#break").text())+1);
    breakTime=parseInt($("#break").text())*60*1000;
    currentTime = chosenTime;
  });

  function setInt() {
    currentTime = currentTime - 1000; //reducing the time by 1sec
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(currentTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((currentTime % (1000 * 60)) / 1000);
    $("#timer_div").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s "); // Shows the time on screen

    $("#stop_btn").click(function(){ // Once the stop button is clicked the timer stops
        on = false;
        clearInterval(x);
    });

    $("#reset_btn").click(function() { // Once the reset button is clicked we reset the currentTime to the initially chosen one
      currentTime = chosenTime;
      $("#timer_div").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    });

    if (currentTime === 0 && on === true) { //Checks if the timer has reached 0

      $("#timer_div").html("Break");
      $("#break_sign").css("display", "inline"); // We make the 'break' div (currently hidden), appear
      currentTime = breakTime; // We make the currentTime equal to the breakTime so the counter for our break starts
      on = false; // We set on to false
      document.getElementById('sound').play(); //Play the sound indicating it is time for a break
    }
    if (currentTime === 0 && on === false) { // Checks if the timer of the break has reached 0
      $('#break_sign').css("display", "none"); //We are hiding the break sign again
      currentTime = chosenTime; // We make the currentTime equal to the chosenTime again for the next session
      on = true; //Setting on to true again
      document.getElementById('sound').play(); //Play the sound indicating that break is over. Time to work!
    }
  };

  var x; //The var where we will store the setInterval function
  $("#start_btn").click(function() { // When we click the start button
    if (on === false) { //checks if the on is set to false (so we can actually use the start button)

      on = true; //set on to true
      x = setInterval(setInt, 1000); //Using setInterval we call the setInt funtion every second
    }
  });


});
