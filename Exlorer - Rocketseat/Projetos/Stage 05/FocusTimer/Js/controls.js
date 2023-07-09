import {
  addClassHide,
  removeClassHide,
  toggleClassHide,
  returnString,
} from "./utils.js";

export default function Controls({
  playBtn,
  pauseBtn,
  watchBtn,
  stopBtn,
  soundOnBtn,
  soundOffBtn,
  currentMinutes,
}) {
  function playToPause() {
    pauseToPlay();
    watchToStop();
  }

  function pauseToPlay() {
    toggleClassHide(playBtn);
    toggleClassHide(pauseBtn);
  }

  function watchToStop() {
    addClassHide(watchBtn);
    removeClassHide(stopBtn);
  }

  function toggleVolumeBtn() {
    toggleClassHide(soundOnBtn);
    toggleClassHide(soundOffBtn);
  }

  function toDefault() {
    addClassHide(pauseBtn);
    addClassHide(stopBtn);
    removeClassHide(playBtn);
    removeClassHide(watchBtn);
  }

  function setMinutes() {
    let tempMinutes = Number(prompt("Duração do cronômetro (minutos)"));
    if (tempMinutes > 0 && tempMinutes < 60) {
      currentMinutes = returnString(tempMinutes);
      return currentMinutes;
    } else {
      return false;
    }
  }

  return {
    playToPause,
    pauseToPlay,
    watchToStop,
    toggleVolumeBtn,
    toDefault,
    setMinutes,
  };
}
