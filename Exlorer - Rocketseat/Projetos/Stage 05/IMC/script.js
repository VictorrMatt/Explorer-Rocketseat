let getElement = (id) => document.getElementById(id);

const Modal = {
  modal: getElement("modal"),
  closeButton: getElement("close"),
  IMC: getElement("imc"),

  toggle() {
    Modal.modal.classList.toggle("hide");
  }
};

Modal.closeButton.onclick = Modal.toggle;

export function myIMC(event) {
  event.preventDefault();

  let imc = currentIMC();
  if (typeof imc == "number") {
    updateImcOnScreen(imc);
    Modal.toggle();
  }
}

function currentIMC() {
  let weightInput = getElement("weight");
  let heightInput = getElement("height");

  let weight = parseFloat(weightInput.value);
  let height = parseFloat(heightInput.value) / 100;

  (weightInput.value = ""), (heightInput.value = "");

  return weight / (height * height);
}

function updateImcOnScreen(imc) {
  Modal.IMC.innerText = imc.toFixed(2);
}