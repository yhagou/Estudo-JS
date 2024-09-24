// so funciona em arrays

//? Array.forEach()

const numeros = [40, 34, 67, 89, 23, 10];

numeros.forEach((item, index, array) => {
  console.log(item, index, array);
});
console.clear();

//? Array.find()
const encontrado = numeros.find((numero) => {
  return numero < 30 && numero > 10;
});
console.log(encontrado);
console.clear();

const pessoa = [
  {
    nome: "pessoa 1",
    idade: 23,
    altura: 1.77,
  },
  {
    nome: "pessoa 2",
    idade: 26,
    altura: 1.89,
  },
  {
    nome: "pessoa 3",
    idade: 47,
    altura: 1.67,
  },
];
const acharPessoa = pessoa.find((pessoa) => {
  return pessoa.idade > 20 && pessoa.idade < 40;
});
console.log(acharPessoa);
console.clear();

//? Array.findIndex()
const indiceDaPessoaEncontrada = pessoa.findIndex(
  (pessoa) => pessoa.idade > 25
);
console.log(indiceDaPessoaEncontrada);
