import Timer from "./timer.js";
import Sounds from "./sounds.js";
import { toggleTheme } from "./utils.js";

export default function Controls({
  minutesDisplay,
  secondsDisplay,
  sunBtn,
  moonBtn,
}) {
  let timer = Timer({ minutesDisplay, secondsDisplay });
  let sounds = Sounds();
  sounds.rain.play();
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
/*     
    TRABALHAR NISSO

  let element = event.target.parentElement;
    
    if (element.tagName.toLowerCase() === 'svg') {
      element = element.parentElement;
    }

    element.add */

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

  function changeVolume() {
    let environment = event.target.dataset.environment;
    let currentVolume = Number(event.target.value) / 100;

    sounds[environment].volume = currentVolume;
  }

  function toggleButton() {
    if (moonBtn.classList.contains("hide")) {
      toggleTheme(false);
    } else {
      toggleTheme();
    }
    moonBtn.classList.toggle("hide");
    sunBtn.classList.toggle("hide");
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
    changeVolume,
    toggleButton,
  };
}
