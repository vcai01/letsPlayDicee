var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var leftImg =  "dice" + randomNumber1 + ".png"
var randomImgSrc1 = "images/" + leftImg;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var rightImg =  "dice" + randomNumber2 + ".png";
var randomImgSrc2 = "images/" + rightImg;

document.querySelector(".img1").setAttribute("src", randomImgSrc1);
document.querySelector(".img2").setAttribute("src", randomImgSrc2);

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else {
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}

