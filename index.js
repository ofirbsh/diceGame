//int number range 1-6
var randomNumberForPlayerOne = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img1").setAttribute("src","images/dice" + randomNumberForPlayerOne + ".png"); //OR - document.querySelectorAll("img")[0]

var randomNumberForPlayerTwo = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img2").setAttribute("src","images/dice" + randomNumberForPlayerTwo + ".png"); //OR - document.querySelectorAll("img")[1]


//set match result
if (randomNumberForPlayerOne > randomNumberForPlayerTwo){
  document.querySelector("h1").innerHTML = "🏆 Player 1 Won "
}
else if (randomNumberForPlayerOne < randomNumberForPlayerTwo){
  document.querySelector("h1").innerText = "Player 2 Won 🏆"
}
else {
  document.querySelector("h1").innerText = "It's A Draw"
}
