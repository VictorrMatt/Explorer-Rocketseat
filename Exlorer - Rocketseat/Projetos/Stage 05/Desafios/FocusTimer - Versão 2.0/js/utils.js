function getElement(query) {
  return document.querySelector(query);
}

function clickListener(element, func) {
  element.addEventListener("click", func);
}

export { getElement, clickListener };
