//Essa é uma maneira ainda mais curta que a mostrada no index3.js
//aqui, vou detalhar, e fazer em um arquivo só

/*

const numerosFiltrados2 = numeros.filter(function (valor) {
  return valor <= 10;
});

*/
// 1º - remover o function e usar Arrow function =>
// 2º - só estou usando um parâmetro, então posso remover os parênteses do parâmetro
// 3º - Só tenho uma instrução na minha função, então posso remover as chaves e o return
// 4º - Se não uso chaves, então posso colocar toda a instrução em uma única linha
const numeros = [1, 5, 15, 3, 6, 50, 10, 35, 1000, 4, 90, 60, 30, 2];

const numerosFiltrados = numeros.filter(valor => valor > 10);
const numerosFiltrados2 = numeros.filter(valor => valor <= 10); 

console.log(numerosFiltrados);
console.log(numerosFiltrados2);