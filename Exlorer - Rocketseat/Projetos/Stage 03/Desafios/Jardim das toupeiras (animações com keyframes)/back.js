/* RANDOMIZANDO LINHA E COLUNA */
function getPosition() {
  let row_rand = Math.floor(Math.random() * 3);
  let col_rand = Math.floor(Math.random() * 4);

  return [row_rand, col_rand];
}