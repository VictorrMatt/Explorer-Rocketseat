let number = randomizing();
let gameScreen = document.getElementById("game-screen");
let endScreen = document.getElementById("end-screen");
let gameIsCurrentScreen = true;
let attemps = 0;

endScreen.addEventListener("click", switchScreen);

function randomizing() {
  return Math.ceil(Math.random() * 10);
}

function makeAGuess() {
  let guess = document.getElementById("guess").value;

  attemps++;
  if (guess == number) {
    switchScreen(attemps);
  } else {
    giveTip(guess);
  }
}

function giveTip(guess, restart = false) {
  let screenText = document.getElementById("feedback");
  let bigger = guess > number;

  if (restart) {
    screenText.innerText = "Jogo da Adivinhação"
    return;
  }
  screenText.innerText = bigger ? "Um valor menor..." : "Um valor maior...";
}

function switchScreen(attemps) {
  if (gameIsCurrentScreen) {
    showAttemps(attemps);
    gameScreen.style.display = "none";
    endScreen.style.display = "flex";
    gameIsCurrentScreen = false;
  } else {
    restart();
    gameScreen.style.display = "flex";
    endScreen.style.display = "none";
    gameIsCurrentScreen = true;
  }
}

function showAttemps(attemps) {
  let screenText = document.getElementById("times");

  screenText.innerText = attemps;
}

function restart() {
  number = randomizing();
  attemps = 0;
  giveTip(null, true);
  guess.value = null;
}
