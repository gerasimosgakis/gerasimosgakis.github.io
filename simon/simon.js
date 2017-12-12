var game = { //game object
  level: 1, //current level
  turn: 0, //current turn
  difficulty: 1, //difficulty level
  score: 0, //current score
  active: false, //check whether it's player's turn
  handlers: false, //check whether the handlers are active
  button: '.button',
  createOrder: [], //array containing the order of buttons
  playerOrder: [], //array containing the player's played order

  start: function() { //starts the game
    if(this.handlers === false){ //checks if the handlers are active
      this.activateHandlers(); //if not activate them
    }

    this.resetGame(); //resets the game
  },

  activateHandlers: function() { //activates handlers
    that=this; //saves the current state of the object

    $('.pad').on('click', function(){
      if (that.active===true) {
        var clicked_pad = parseInt($(this).data('pad'),10); //saving the clicked pad's data-pad value so we can know which one we clicked
        that.glow($(this), 1, 300, clicked_pad); //making the button glow
        that.savePlayerOrder(clicked_pad);
      }
    });
    this.handlers=true;
  },

  resetGame: function() { //resets the game
    this.level=1;
    this.score=0;
    this.newLevel();
    this.showLevel();
    this.showScore();
  },

  newLevel: function(){
    this.createOrder.length=0; //empties the array
    this.playerOrder.length=0; //empties the array
    this.turn=0;
    this.active=true;

    this.pushCreateOrder(this.level); //adds values to the createOrder array
    this.showOrder(); //shows the order
  },

  glow: function(element, times, speed, pad){
    var that=this; //we save the current state of object
    if(times>0){ //we check if we have to glow
      that.playSound(pad); //play the sound of the specific button
      element.stop().animate({opacity: '1'}, { //animate the pad so it glows
        duration: 50,
        complete: function(){
          element.stop().animate({opacity: '0.6'}, 200);
        }
      });
    }

    if(times > 0){ //we re-call it using recursion until the correct times have been played
      setTimeout(function(){
        that.glow(element, times, speed, pad);
      }, speed);
      times--; //reduce the times by one after every click
    }

  },

  playSound: function(audio){
    var sound=$('.sound'+audio)[0]; //we use this notation because of javascript-jquery, DOM vs nodes etc
    sound.currentTime=0 //resets the audio to the start
    sound.play(); //play the sound
  },

  pushCreateOrder: function(level){
    for(var i=0; i<level; i++){
      this.createOrder.push(Math.floor(Math.random()*4)+1);
    }
  },

  savePlayerOrder: function(pad){
    this.playerOrder.push(pad);
    this.checkOrder(pad);
  },

  checkOrder: function(pad){ //checks if the player clicked the correct button
    that=this;
    if(pad !== this.createOrder[this.turn]){
      this.wrong(); //call the method that handles mistaken moves
    }
    else{
      this.score += 50; //if correct you get +50points
      this.showScore();
      this.turn++; //and the turn goes up by 1
    }

    if(this.turn === this.createOrder.length){ //if we completed the sequence
      this.level++ //level up, show level and reset game
      this.showLevel();
      this.active=false;
      setTimeout(function(){
        that.newLevel();
      }, 1000);
    }
  },

  showOrder: function(){ //show the order
    var that=this;

    $.each(this.createOrder, function(index, value){ //go through all the values of the array
      setTimeout(function(){
        that.glow($(that.button+value),1,300,value);
      },500*index*that.difficulty);
    });
  },

  showLevel: function(){
    $('.level h2').text('Level: '+this.level);
  },

  showScore: function(){
    $('.score h2').text('Score: '+this.score);
  },

  wrong: function(){
    var correctPad = this.createOrder[this.turn], //save the required pad in this var
    that=this;
    this.active=false;
    this.showLevel();
    this.showScore();
    setTimeout(function(){
      that.glow($(that.button+correctPad),3,300,correctPad);
    }, 500); //glow the correct pad three times

    $('.button').css('left', '0px');
  },

}//end of object


$(document).ready(function() {
  $('.button').on('click', function(){
    $(this).css('left', '25px');

    game.difficulty = $('input[name=difficulty]:checked').val();
    game.start();
  });
});
