const numeros = [1, 5, 15, 3, 6, 50, 10, 35, 1000, 4, 90, 60, 30, 2];

//adicionado o console.log para mostrar a interação do filter com o array
//funciona como um for, é um laço que passa por cada um dos valores do array
const numerosFiltrados = numeros.filter(function (valor, indice, array) { 
  console.log(indice, valor);
  return valor > 10; 
});

//exemplo com outro array
//Retorne as pessoas que tem  o nome com 6 letras ou mais
//Retorne as pessoas com mais de 20 anos
//Retorne as pesosas cujo nome termina com a
const pessoas = [
  {nome: 'Felipe', idade: 28},
  {nome: 'Giulia', idade: 25},
  {nome: 'Isis', idade: 0},
  {nome: 'Amora', idade: 2},
  {nome: 'Amelia', idade: 1},
]

const pessoa5Letras = pessoas.filter(objeto => objeto.nome.length >= 6);
const pessoa50anos = pessoas.filter(objeto => objeto.idade > 20);
const pessoaLetraA = pessoas.filter(objeto => (objeto.nome.toUpperCase().endsWith('A')));
// .endsWith é novo, ele traz o último caractere de uma string

console.log(pessoa5Letras);
console.log(pessoa50anos);
console.log(pessoaLetraA);