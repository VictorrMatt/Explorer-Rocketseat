let biscuitBox = document.getElementById("biscuit");
let biscuitImg = biscuitBox.querySelector("img");
let openBiscuitBox = document.getElementById("open-biscuit");
let openBiscuitBtn = openBiscuitBox.querySelector("form input");
let openBiscuitMsg = openBiscuitBox.querySelector("div");

biscuitImg.addEventListener("click", () => {
  toggleScreen();
  openBiscuitMsg.classList.add("animation");
});

document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    if (biscuitBox.classList.contains("hide")) {
      toggleScreen();
    }
  }
});

function toggleScreen() {
  biscuitBox.classList.toggle("hide");
  openBiscuitBox.classList.toggle("hide");
}
