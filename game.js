var buttonColours = ["red", "blue", "green", "yellow"];
 
var gamePattern = [];
var userClickedPattern = [];
var gameHasStarted = false;
var level = 0;
 
function nextSequence() {
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
 
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
 
  playSound(randomChosenColour);
}

function playSound(color){
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}
 
function checkAnswer(currentLevel){
  console.log("user clicked pattern level " + userClickedPattern[currentLevel - 1]);
  console.log("game pattern pattern level " + gamePattern[currentLevel - 1]);
  console.log(userClickedPattern);
  console.log(gamePattern);
  if(userClickedPattern[currentLevel - 1] == gamePattern[currentLevel - 1]){
    console.log("success");
    userClickedPattern = [];
  } else {
    console.log("wrong");
    userClickedPattern = [];
    gamePattern = [];
    level = 0;
  }
}


$("div.btn").click(function(event){  
  if(gameHasStarted){
    color = event.target.id
  userClickedPattern.push(color);
  playSound(color);
  animatePress(color);
  
  
  if(userClickedPattern.length == gamePattern.length){
    checkAnswer(level);
  } else {
    return;
  }

  setTimeout(function(){
    nextSequence();
  },1000);
  } else {
    return;
  }
})

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },200);
}

$("body").keypress(function(){  
  if(!gameHasStarted){
    nextSequence();
  }
  gameHasStarted = true;  
});