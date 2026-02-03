var acchu = Math.floor(Math.random() * 6) + 1;
var bantu = Math.floor(Math.random() * 6) + 1;

// // Preffered Solution /*
// var acchuDiceImage = "dice" + acchu + ".png";
// var bantuDiceImage = "dice" + bantu + ".png";

// var acchuImageSrc = "images/" + acchuDiceImage;
// var bantuImageSrc = "images/" + bantuDiceImage;

// document.querySelector(".img1").setAttribute("src",acchuImageSrc);
// document.querySelector(".img2").setAttribute("src",bantuImageSrc);
 
// *//

// My Solution - Begins

if ( acchu === 1 ) {
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
} else if ( acchu === 2 ) {
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
} else if ( acchu === 3 ) {
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
} else if ( acchu === 4 ) {
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
} else if ( acchu === 5 ) {
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
} else if ( acchu === 6 ) {
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
} 

if ( bantu === 1 ) {
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
} else if ( bantu === 2 ) {
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
} else if ( bantu === 3 ) {
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
} else if ( bantu === 4 ) {
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
} else if ( bantu === 5 ) {
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
} else if ( bantu === 6 ) {
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
} 

// My Solution - Ends

if ( acchu === bantu ){
    document.querySelector("h1").innerHTML="Draw";
} else if ( acchu > bantu ){
    document.querySelector("h1").innerHTML="Acchu Wins";
} else if ( acchu < bantu ){
    document.querySelector("h1").innerHTML="Bantu Wins";
} 