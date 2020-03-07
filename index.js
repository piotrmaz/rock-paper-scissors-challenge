var rock = $("#rock");
var scissors = $("#scissors");
var paper = $("#paper");
var gameButton = [rock, scissors, paper];
var pcChoseButton = "";
var userClickButton = "";
var pcButton = "";

var score = 0;


// user choose button


$(".game").click(function(event) {

  var choosenButton = $(this).attr("id");
  userClickButton = choosenButton;

  console.log(userClickButton);
  choisePC();
  console.log(choisePC());

  checkAnswer();

  // 2nd scene

  $("#startGame").addClass("invisible");

  var secondStepUser = $(this).attr("class");

  $(".secondScene").removeClass("invisible");
  $("#buttonSecondScene").addClass(secondStepUser).removeClass("button-hover"); //add user choosen button to 2nd scene

  setTimeout(function() {
    $("#buttonSecondScenePc").addClass(pcChoseButton).addClass("round").removeClass("button-hover"); //add PC choosen button to 2nd scene
  }, 1200);

  setTimeout(function() {
    $("#center-score-square").removeClass("invisible");
  }, 1800);

  setTimeout(function() {
    $("#buttonSecondScenePc").removeClass("spinner");
  }, 1200);

  $(".restartGame").click(function() {
    resetGame();

  });

})

function resetGame() {

  $("#buttonSecondScene").removeClass();
  $("#buttonSecondScenePc").removeClass().addClass("spinner");
  $(".secondScene").addClass("invisible");
  $("#startGame").removeClass("invisible");
  $("#center-score-square").addClass("invisible");

}


function choisePC() {
  pcChoseButton = gameButton[Math.floor(Math.random() * Math.floor(gameButton.length))];
  pcChoseButton = pcChoseButton.attr("id");
  return pcChoseButton;
}



function checkAnswer() {
  if (userClickButton == pcChoseButton) {
    console.log("REMIS");
    $("#center-score-text").html("DRAW").css("color", "#4d88ff");
  } else if ((userClickButton == "paper" && pcChoseButton == "rock") || (userClickButton == "rock" && pcChoseButton == "scissors") || (userClickButton == "scissors" && pcChoseButton == "paper")) {
    console.log("Player win");
    score++;
    $("#score").html(score);
    $("#center-score-text").html("YOU WIN").css("color", "green");
  } else {
    console.log("YOU LOST");
    $("#center-score-text").html("YOU LOST").css("color", "red");
  }
}
