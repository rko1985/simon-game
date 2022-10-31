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
 


$("div.btn").click(function(event){  
  color = event.target.id
  userClickedPattern.push(color);
  playSound(color);
  animatePress(color);
  console.log(userClickedPattern);
})

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  },200);
}

$("body").keypress(function(){
  gameHasStarted = true;
  nextSequence();
});