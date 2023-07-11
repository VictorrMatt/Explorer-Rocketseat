import { clickListener } from "./utils.js";
import Controls from "./controls.js";

export default function setListeners({
  playButton,
  stopButton,
  sumButton,
  subButton,
  minutesDisplay,
  secondsDisplay,
}) {
  let controls = Controls({
    playButton,
    stopButton,
    sumButton,
    subButton,
    minutesDisplay,
    secondsDisplay,
  });

  clickListener(playButton, controls.play);
  clickListener(stopButton, controls.stop);
  clickListener(sumButton, controls.add);
  clickListener(subButton, controls.decrease);
}
