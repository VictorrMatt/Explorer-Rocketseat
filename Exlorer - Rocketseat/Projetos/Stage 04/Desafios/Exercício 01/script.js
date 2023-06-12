alert("Hello Bro!");
alert("Let me know two numbers that you most like.")

let n1 = Number(prompt("First number?"));
let n2 = Number(prompt("And the second?"));
let isOdd = (n1 + n2) % 2;

console.log(isOdd);
alert(n1 == n2 ? "Well, both are the same!" : "Hum, they are so different from each other...")
alert("Let me show the results.")

alert(`The sum from both ${n1 + n2}.
the subtraction ${n1 - n2}.
multiplication ${n1 * n2}.
division ${n1 / n2}.
rest of the division ${n1 % n2}.
`);

let phrase = "Fun fact, the sum from both numbers is";
alert(`${phrase} ${isOdd == 1 ? "odd" : "pair"}.`);