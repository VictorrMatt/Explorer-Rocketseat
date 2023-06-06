/* CONTAINERS QUE ESTÃO TODOS OS BURACOS */
let container = document.querySelectorAll(".container")[0];

/* REPRODUZINDO ANIMAÇÃO NA DIV */
async function inTheHole(pos) {
  let loc = container.querySelector(`.row-${pos[0]} .col-${pos[1]}`);
  loc.classList.add("active");
}

/* RETIRANDO ANIMAÇÃO DA DIV */
async function removeClass(pos) {
  setTimeout(() => {
    let loc = container.querySelector(`.row-${pos[0]} .col-${pos[1]}`);
    loc.classList.remove("active");
  }, 1000);
}

/* RUN */
async function executeFunctions() {
  let pos = getPosition();

  await inTheHole(pos);
  await removeClass(pos);
}

/* EXECUTANDO A FUNÇÃO COM INTERVALOS */
setInterval(() => {
  executeFunctions();
}, 1000);
