// Definição de uma função:
function saudacao(nomeDoEstudante, curso) {
  return `Saudação! Caro ${nomeDoEstudante}!!! Bem-vindo ao ${curso}!!`;
}

const mensagemDeSaudacao = saudacao("Yhago", "React"); //chamada da função!
console.log(mensagemDeSaudacao);
console.clear();

//? Função soma:
function soma(numero1, numero2) {
  return numero1 + numero2;
}
const somar = soma(8, 6);
console.log(somar);
console.clear();

//todo Função Anônima:

const dobroDoNumero = function (numero) {
  return numero * 2;
};
const dobro = dobroDoNumero(2);
console.log(dobro);
console.clear();

//todo Arrow Function

const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
};
const sub = subtrair(8, 6);
console.log(sub);
console.clear();

const multiplicacao = (numero1, numero2) => numero1 * numero2;
const multi = multiplicacao(5, 4);
console.log(multi);
