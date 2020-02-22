var rock = $("#rock");
var scissors = $("#scissors");
var paper = $("#paper");
var gameButton = ["rock", "scissors", "paper"];
var pcChoseButton = "";
var userClickButton = "";

var score = 0;



function choisePC() {
  pcChoseButton = gameButton[Math.floor(Math.random() * Math.floor(gameButton.length))];
return pcChoseButton;

}


// user choosen button


$(".game").click(function(event) {

  var choosenButton = $(this).attr("id");
  userClickButton = choosenButton;

  console.log(userClickButton);
  choisePC();
  console.log(choisePC());

checkAnswer();

})


function checkAnswer(){
  if(userClickButton == pcChoseButton)
  {
    console.log("REMIS");
  }
  else if ((userClickButton=="paper" && pcChoseButton=="rock") || (userClickButton=="rock" && pcChoseButton=="scissors") || (userClickButton=="scissors" && pcChoseButton=="paper")) {
        console.log("Player win");
        score++;
        $("#score").html(score);
  }

  else
  {
    console.log("YOU LOST");
  }
}
