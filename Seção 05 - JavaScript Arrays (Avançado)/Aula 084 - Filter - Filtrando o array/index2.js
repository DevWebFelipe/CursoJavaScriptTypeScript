// Retorne os números maiores que 10
// Retorne os menores iguais a 10
const numeros = [1, 5, 15, 3, 6, 50, 10, 35, 1000, 4, 90, 60, 30, 2];

const numerosFiltrados = numeros.filter(callbackFilter);
const numerosFiltrados2 = numeros.filter(callbackFilter2);

function callbackFilter(valor) {
  return valor > 10;
} //essa é uma forma menos longa que a do index.js

function callbackFilter2(valor) {
  return valor <= 10;
}

console.log(numerosFiltrados);
console.log(numerosFiltrados2);