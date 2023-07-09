import { returnString } from "./utils.js";
import Sounds from "./sounds.js";

let sounds = Sounds();

export default function Timer({ minutesDisplay, secondsDisplay }) {
  let running;
  let seconds = 0;
  let minutes = 0;

  function countDown() {
    if (running) {
      seconds = Number(secondsDisplay.textContent);
      minutes = Number(minutesDisplay.textContent);

      if (minutes === 0 && seconds === 0) {
        sounds.kitchenTimer.play();
        running = false;
        return 0;
      }

      if (seconds === 0) {
        seconds = 60;
        minutes--;
      }

      seconds--;
      updateDisplay(returnString(minutes), returnString(seconds));

      setTimeout(() => {
        countDown();
      }, 1000);
    }
  }

  function play() {
    running = true;
  }

  function pause() {
    running = false;
  }

  function updateDisplay(minutes, seconds = false) {
    minutesDisplay.textContent = minutes;

    if (seconds) {
      secondsDisplay.textContent = seconds;
    }
  }

  return {
    countDown,
    updateDisplay,
    play,
    pause,
  };
}
