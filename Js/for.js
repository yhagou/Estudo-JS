const prompt = require("readline-sync");

let maiorNúmero = 0;
let numeroInformado;

for (let i = 1; i <= 5; i++) {
  numeroInformado = Number(prompt.question("Informe seus números: "));
  if (numeroInformado > maiorNúmero) {
    maiorNúmero = numeroInformado;
  }
}
console.log(maiorNúmero);
