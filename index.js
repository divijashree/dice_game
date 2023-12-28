var randomInt1 =Math.floor((Math.random()*6)+1);
var image="dice"+ randomInt1 +".png";
var imgSrc="images/"+image;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imgSrc);

//for dice2
var randomInt2 =Math.floor((Math.random()*6)+1);
var image2="dice"+ randomInt2 +".png";
var imgSrc2="images/"+image2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",imgSrc2);
if (randomInt1 > randomInt2) {
    var head = document.querySelectorAll("h1")[0];
    head.textContent = "Player1 Won"; // Use textContent to set text
} else if (randomInt1 < randomInt2) {
    var head = document.querySelectorAll("h1")[0];
    head.textContent = "Player2 Won";
} else {
    var head = document.querySelectorAll("h1")[0];
    head.textContent = "It's a Draw";
}