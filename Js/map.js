//? MAP
const numeros = [40, 34, 67, 89, 23, 10];
const novoArray = numeros.map((elemento) => elemento * 2);
console.log(novoArray);
console.clear();

//* exemplos

const carrinho = [
  { produto: "feijao", preco: 7.98, quantidade: 3 },
  { produto: "arroz", preco: 4.98, quantidade: 5 },
  { produto: "leite", preco: 6.99, quantidade: 2 },
];

const mercado = carrinho.map((item) => {
  return {
    ...item,
    total: item.preco * item.quantidade,
  };
});
console.log(mercado);
