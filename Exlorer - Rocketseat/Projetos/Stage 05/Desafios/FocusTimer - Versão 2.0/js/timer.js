import { updateDisplay } from "./utils.js";

export default function Timer({ minutesDisplay, secondsDisplay }) {
  let minutes = Number(minutesDisplay.textContent);
  let seconds = Number(secondsDisplay.textContent);

  function countDown() {
    updateDisplay(minutes, seconds);

    if (seconds == 0 && minutes == 0) {
      updateDisplay(minutes, "00");
      return false;
    }

    if (seconds == 0) {
      seconds = 3;
      minutes--;
      updateDisplay(minutes, seconds);
    }

    seconds--;
    setTimeout(countDown, 1000);
  }

  function stop() {
    updateDisplay(minutes, "00");
    return false;
  }

  function add() {
    minutes++;
    updateDisplay(minutes);
  }

  function decrease() {
    minutes--;
    updateDisplay(minutes);
  }

  return { countDown, stop, add, decrease };
}
