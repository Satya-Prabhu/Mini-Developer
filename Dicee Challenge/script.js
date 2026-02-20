var randomNumber1, randomNumber2, p1, p2;
p1 = "Player 1";
p2 = "Player 2";

// //Enable if there is a need to add players name
// p1 = prompt("Enter Player 1 name");
// p2 = prompt("Enter Player 2 name");
// document.querySelector(".dice > .player1").innerText = p1;
// document.querySelector(".dice > .player2").innerText = p2;

randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".dice > .img1").setAttribute("src","./assets/images/dice" + randomNumber1 + ".png");

randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".dice > .img2").setAttribute("src","./assets/images/dice" + randomNumber2 + ".png");

if ( randomNumber1 > randomNumber2) {
    document.querySelector(".container > h1").innerText = p1 + " Wins! 🚩";
} else if ( randomNumber1 === randomNumber2 ) {
    document.querySelector(".container > h1").innerText = "Draw!";
} else {
    document.querySelector(".container > h1").innerText = p2 + " Wins! 🚩";
}