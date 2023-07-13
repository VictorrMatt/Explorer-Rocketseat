import { clickListener } from "./utils.js";
import Controls from "./controls.js";

export default function setListeners({
  playButton,
  stopButton,
  sumButton,
  subButton,
  minutesDisplay,
  secondsDisplay,
  forestCard,
  rainCard,
  coffeCard,
  fireplaceCard,
}) {
  let controls = Controls({
    minutesDisplay,
    secondsDisplay,
  });

  clickListener(playButton, controls.play);
  clickListener(stopButton, controls.stop);
  clickListener(sumButton, controls.add);
  clickListener(subButton, controls.decrease);
  clickListener(forestCard, controls.forestToggle);
  clickListener(rainCard, controls.rainToggle);
  clickListener(fireplaceCard, controls.fireplaceToggle);
  clickListener(coffeCard, controls.coffeToggle);
}
