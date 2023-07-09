import { getElement } from "./utils.js";

let playBtn = getElement(".play");
let pauseBtn = getElement(".pause");
let watchBtn = getElement(".stop-watch");
let stopBtn = getElement(".stop-circle");
let soundOnBtn = getElement(".volume");
let soundOffBtn = getElement(".mute");
let minutesDisplay = getElement(".minutes");
let secondsDisplay = getElement(".seconds");

export {
  playBtn,
  pauseBtn,
  watchBtn,
  stopBtn,
  soundOnBtn,
  soundOffBtn,
  minutesDisplay,
  secondsDisplay,
};
