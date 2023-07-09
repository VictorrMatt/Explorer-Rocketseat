function getElement(query) {
  return document.querySelector(query);
}

function clickListener(element, func) {
  element.addEventListener("click", func);
}

function addClassHide(element) {
  element.classList.add("hide");
}

function removeClassHide(element) {
  element.classList.remove("hide");
}

function toggleClassHide(element) {
  element.classList.toggle("hide");
}

function returnString(num) {
  if (Number(num) < 10) {
    if (String(num).length === 2) {
      return num;
    }
    return `0${num}`;
  }
  return num;
}

export {
  toggleClassHide,
  addClassHide,
  removeClassHide,
  returnString,
  getElement,
  clickListener,
};
