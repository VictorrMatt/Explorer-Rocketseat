import { returnString, clickListener } from "./utils.js";
import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";
import {
  playBtn,
  pauseBtn,
  watchBtn,
  stopBtn,
  soundOnBtn,
  soundOffBtn,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

let sounds = Sounds();

let currentMinutes = 11;
let timer = Timer({ minutesDisplay, secondsDisplay });
let updateDisplay = timer.updateDisplay;

let controls = Controls({
  playBtn,
  pauseBtn,
  watchBtn,
  stopBtn,
  soundOnBtn,
  soundOffBtn,
  currentMinutes,
  updateDisplay,
});

clickListener(watchBtn, () => {
  let minutes = controls.setMinutes();
  if (minutes) {
    currentMinutes = minutes;
    timer.updateDisplay(minutes);
  }
  sounds.buttonPressAudio.play();
});
clickListener(playBtn, () => {
  controls.playToPause();
  timer.play();
  timer.countDown();
  sounds.buttonPressAudio.play();
});
clickListener(pauseBtn, () => {
  controls.pauseToPlay();
  timer.pause();
  sounds.buttonPressAudio.play();
});
clickListener(stopBtn, () => {
  controls.toDefault();
  timer.pause();
  timer.updateDisplay(returnString(currentMinutes), "00");
  sounds.buttonPressAudio.play();
});
clickListener(soundOnBtn, () => {
  controls.toggleVolumeBtn();
  sounds.bgAudio.pause();
});
clickListener(soundOffBtn, () => {
  controls.toggleVolumeBtn();
  sounds.bgAudio.play();
});
