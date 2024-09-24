const pessoa = [
  {
    nome: "pessoa 1",
    idade: 23,
  },
  {
    nome: "pessoa 2",
    idade: 26,
  },
  {
    nome: "pessoa 3",
    idade: 47,
  },
];
const acharPessoa = pessoa.find((pessoa) => {
  return pessoa.idade > 20 && pessoa < 40;
});
console.log(acharPessoa);