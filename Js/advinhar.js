const prompt = require("readline-sync");

const numeroAleatorio = parseInt(Math.random() * 10);

let numeroDigitado = Number(prompt.question("Informe um numero de 0 a 10: "));

console.log(numeroAleatorio);

while (numeroAleatorio !== numeroDigitado) {
  numeroDigitado = Number(prompt.question("Informe um numero de 0 a 10: "));
}
console.log("Parabens, voce acertou o numero:", numeroAleatorio);
