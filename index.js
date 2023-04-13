//First Dice
var randomNumber1 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);

//Second Dice
var randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

//Winning Statement
if (randomNumber1 > randomNumber2){
    document.getElementById("heading").textContent = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.getElementById("heading").textContent = "Player 2 Wins!🚩";
} else {
    document.getElementById("heading").textContent = "Draw!";
}