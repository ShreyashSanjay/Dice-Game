var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]; //Put all imgs in array

var die = document.querySelectorAll("img");

function roll() {
    die.forEach(function(dice) {
        dice.classList.add("shake");
    });
    setTimeout(function() {
        die.forEach(function(dice){
            dice.classList.remove("shake");
        });
        var randomNumber1 = Math.floor(Math.random()*6);
        var randomNumber2 = Math.floor(Math.random()*6);
        document.querySelector(".img1").setAttribute("src", images[randomNumber1]);
        document.querySelector(".img2").setAttribute("src", images[randomNumber2]);
        if (randomNumber1 > randomNumber2){
            document.getElementById("heading").textContent = "Player 1 Wins!";
        } else if (randomNumber2 > randomNumber1) {
            document.getElementById("heading").textContent = "Player 2 Wins!";
        } else {
            document.getElementById("heading").textContent = "Draw!";
        }
    }, 1000);
}
