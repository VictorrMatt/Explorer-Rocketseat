let number = Math.ceil(Math.random() * 10);
let guess = document.getElementById("guess");
let tryBtn = document.getElementById("try");
let againBtn = document.getElementById("again");
let gameScreen = document.getElementById("game-screen");
let tip = document.getElementById("feedback");
let endScreen = document.getElementById("end-screen");
let attemps = 0;

againBtn.addEventListener("click", toggleScreen);
document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    if (gameScreen.classList.contains("hide")) toggleScreen();
  }
});

function makeAGuess(event) {
  event.preventDefault();
  attemps++;
  if (guess.value == number) {
    document.getElementById("times").innerText = attemps;
    toggleScreen();
    number = Math.ceil(Math.random() * 10);
    tip.innerText = "Jogo da Adivinhação";
    attemps = 0;
  } else {
    tip.innerText =
      guess.value > number ? "Um valor menor..." : "Um valor maior...";
  }
  guess.value = "";
}

function toggleScreen() {
  gameScreen.classList.toggle("hide");
  endScreen.classList.toggle("hide");
}