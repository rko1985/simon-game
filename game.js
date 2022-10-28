var buttonColours = ["red", "blue", "green", "yellow"];
 
var gamePattern = [];
var userClickedPattern = [];
 
function nextSequence() {
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
 
nextSequence();

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