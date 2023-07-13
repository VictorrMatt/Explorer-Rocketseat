import { updateDisplay } from "./utils.js";
import Sounds from "./sounds.js";

export default function Timer({ minutesDisplay, secondsDisplay }) {
  let sounds = Sounds();
  let minutes = Number(minutesDisplay.textContent);
  let seconds = Number(secondsDisplay.textContent);
  let running;

  function countDown() {
    if (running) {
      updateDisplay(minutes, seconds);

      if (seconds == 0 && minutes == 0) {
        sounds.kitchenTimer.currentTime = 0.5;
        sounds.kitchenTimer.play();
        stop();
      }

      if (!running) {
        return 0;
      }

      if (seconds == 0) {
        seconds = 59;
        minutes--;
        updateDisplay(minutes, seconds);
      }

      seconds--;
      setTimeout(countDown, 1000);
    }
  }

  function play() {
    if (!running) {
      running = true;
      countDown();
    }
  }

  function stop() {
    running = false;
    seconds = 0;
    minutes = 25;
    updateDisplay(minutes, "00");
  }

  function add() {
    minutes++;
    updateDisplay(minutes);
  }

  function decrease() {
    minutes--;
    updateDisplay(minutes);
  }

  return { countDown, stop, add, decrease, play };
}
