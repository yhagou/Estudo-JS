//? REDUCE

const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
  return elemento / arrayCompleto.length + acumulador;
}, 0);
console.log(soma);
