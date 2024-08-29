var randomLeft = Math.floor(Math.random() * 6) + 1;
var randomRight = Math.floor(Math.random() * 6) + 1;

function loadleft() {
    // if(randomLeft == 1) {
    //     document.querySelector(".img1").setAttribute("src","./images/dice1.png");
    // } else if (randomLeft == 2) {
    //     document.querySelector(".img1").setAttribute("src","./images/dice2.png");
    // } else if (randomLeft == 3) {
    //     document.querySelector(".img1").setAttribute("src","./images/dice3.png");
    // } else if (randomLeft == 4) {
    //     document.querySelector(".img1").setAttribute("src","./images/dice4.png");
    // } else if (randomLeft == 5) {
    //     document.querySelector(".img1").setAttribute("src","./images/dice5.png");
    // } else {
    //     document.querySelector(".img1").setAttribute("src","./images/dice6.png");
    // }
    // console.log(randomLeft);
    var pathleft = "./images/dice"+randomLeft+".png";
    document.querySelector(".img1").setAttribute("src",pathleft);
}

function loadright() {
    // if(randomRight == 1) {
    //     document.querySelector(".img2").setAttribute("src","./images/dice1.png");
    // } else if (randomRight == 2) {
    //     document.querySelector(".img2").setAttribute("src","./images/dice2.png");
    // } else if (randomRight == 3) {
    //     document.querySelector(".img2").setAttribute("src","./images/dice3.png");
    // } else if (randomRight == 4) {
    //     document.querySelector(".img2").setAttribute("src","./images/dice4.png");
    // } else if (randomRight == 5) {
    //     document.querySelector(".img2").setAttribute("src","./images/dice5.png");
    // } else {
    //     document.querySelector(".img2").setAttribute("src","./images/dice6.png");
    // }
    // console.log(randomRight);
    var pathright = "./images/dice"+randomRight+".png";
    document.querySelector(".img2").setAttribute("src",pathright);
}

function winner() {
    if(randomLeft === randomRight) {
        document.querySelector(".container > .winner").textContent = "Draw!";
    } else if (randomLeft > randomRight) {
        document.querySelector(".container > .winner").textContent = "🚩Play 1 Wins!";
    } else {
        document.querySelector(".container > .winner").textContent = "Play 2 Wins!🚩";
    }
}

document.querySelector("body").onload = loadleft();
document.querySelector("body").onload = loadright();
document.querySelector("body").onload = winner();