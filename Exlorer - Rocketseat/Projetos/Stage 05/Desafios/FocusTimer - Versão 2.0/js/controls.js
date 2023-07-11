import Timer from "./timer.js";

export default function Controls({
  playButton,
  stopButton,
  sumButton,
  subButton,
  minutesDisplay,
  secondsDisplay,
}) {
  let timer = Timer({ minutesDisplay, secondsDisplay });

  function play() {
    timer.countDown();
  }

  function stop() {
    timer.stop();
  }

  function add() {
    timer.add();
  }

  function decrease() {
    timer.decrease();
  }

  return {
    play,
    stop,
    add,
    decrease,
  };
}
