const pessoa = {
  nome: "yhago",
  idade: 23,
  altura: 1.77,
  ehProgamador: true,
  hobbies: ["Jogar Fifa", "Jogar Volei"],
};
console.log(pessoa);
console.log(pessoa.nome); // acessando um determinado atributo
pessoa.profissao = "Desenvolvedor"; // adicionando um atributo
delete pessoa.altura; // deletar atributo
console.log(pessoa);
