let getElement = (id) => document.getElementById(id);

let modal = getElement("modal");
let closeButton = getElement("close");
let modalIMC = getElement("imc");

closeButton.addEventListener("click", toggleModal);

function myIMC(event) {
  event.preventDefault();

  let imc = currentIMC();
  if (typeof imc == "number") {
    updateImcOnScreen(imc);
    toggleModal();
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
  modalIMC.innerText = imc.toFixed(2);
}

function toggleModal() {
  modal.classList.toggle("hide");
}
