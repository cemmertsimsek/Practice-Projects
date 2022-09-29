// DICE 1 -------------------

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1-6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage1; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

// DICE 2 --------------------

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// WINNER TITLE -------------

if (randomNumber1 > randomNumber2) {
  // if player 1 wins
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  // if player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  // if its draw
  document.querySelector("h1").innerHTML = "Draw!";
}
