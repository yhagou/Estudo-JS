const prompt = require("readline-sync");
let notaDoAluno = Number(prompt.question("Informe a nota do aluno:"));

let somaDoAluno = 0;
let numeroDeNotas = 0;
while (notaDoAluno >= 0) {
  somaDoAluno = somaDoAluno + notaDoAluno;
  numeroDeNotas = numeroDeNotas + 1;
  notaDoAluno = Number(prompt.question("Informe a nota do aluno:"));
}
console.log(somaDoAluno);
console.log(somaDoAluno / numeroDeNotas);
