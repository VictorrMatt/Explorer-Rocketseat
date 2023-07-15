import Timer from "./timer.js";
import Sounds from "./sounds.js";

export default function Controls({ minutesDisplay, secondsDisplay }) {
  let timer = Timer({ minutesDisplay, secondsDisplay });
  let sounds = Sounds();
  /* sounds.rain.play(); */
  let activeSound = sounds.rain;

  function play() {
    timer.play();
    buttonPress();
  }

  function stop() {
    timer.stop();
    buttonPress();
  }

  function add() {
    timer.add();
    buttonPress();
  }

  function decrease() {
    timer.decrease();
    buttonPress();
  }

  function toggleSound(sound) {
    if (sound === activeSound) {
      sound.pause();
      activeSound = null;
    } else {
      activeSound && activeSound.pause();
      activeSound = sound;
      activeSound.play();
    }
    buttonPress();
  }

  function buttonPress() {
    sounds.buttonPress.currentTime = 0.2;
    sounds.buttonPress.play();
  }

  return {
    play,
    stop,
    add,
    decrease,
    rainToggle: () => toggleSound(sounds.rain),
    forestToggle: () => toggleSound(sounds.forest),
    coffeToggle: () => toggleSound(sounds.coffe),
    fireplaceToggle: () => toggleSound(sounds.fireplace),
  };
}
