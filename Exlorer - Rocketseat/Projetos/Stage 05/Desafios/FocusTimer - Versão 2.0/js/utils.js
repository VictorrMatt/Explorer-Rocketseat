function getElement(query) {
  return document.querySelector(query);
}

function clickListener(element, func) {
  element.addEventListener("click", func);
}

function updateDisplay(minutes, seconds = false) {
  getElement(".minutes").textContent = toComplete(minutes);
  if (seconds) {
    getElement(".seconds").textContent = toComplete(seconds);
  }
}

function toComplete(num) {
  if (String(num).length == 1) {
    return `0${num}`;
  }
  return num;
}

export { getElement, clickListener, updateDisplay };
