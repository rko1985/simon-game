var buttonColours = ["red", "blue", "green", "yellow"];
 
var gamePattern = [];
var userClickedPattern = [];
 
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
 
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
 
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.muted = true;
  audio.play();
  }
 
nextSequence();

$("div.btn").click(function(event){  
  userClickedPattern.push(event.target.id);
  console.log(userClickedPattern);
})