// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
console.log("Hello World!");

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let var1 = 3;
let var2 = 5;
let numeros = typeof(var1) == "number" && typeof(var2) == "number";

console.log(numeros ? `A soma entre ${var1} e ${var2} é ${var1 + var2}` : "As váriaveis não podem ser somadas pois não são números.");

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".    
console.log(typeof(var1) == "number" ? `${var1} é um número.` : `${var1} não é um número.`)

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
console.log(typeof(var1) == "string" ? `${var1} é uma string.` : `${var1} não é uma string.`)

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
console.log(typeof(var1) == "boolean" ? `${var1} é um boleano.` : `${var1} não é um boleano.`)

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
console.log(numeros ? `A subtração entre ${var1} e ${var2} é ${var1 - var2}` : "As váriaveis não podem ser subtraidas pois não são números.");

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
console.log(numeros ? `A multiplicação entre ${var1} e ${var2} é ${var1 * var2}` : "As váriaveis não podem ser multiplicadas pois não são números.");

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
console.log(numeros ? `A divisão entre ${var1} e ${var2} é ${var1 / var2}` : "As váriaveis não podem ser divididas pois não são números.");

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let par = var1 % 2 == 0;

if (numeros) {
  console.log(par ? `${var1} é um número par.` : `${var1} é um número impar.`)
}
