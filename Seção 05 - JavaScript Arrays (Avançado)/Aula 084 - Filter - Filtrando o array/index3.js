// Retorne os números maiores que 10
// Retorne os menores iguais a 10
const numeros = [1, 5, 15, 3, 6, 50, 10, 35, 1000, 4, 90, 60, 30, 2];

const numerosFiltrados = numeros.filter(function (valor) { 
  return valor > 10; 
});

const numerosFiltrados2 = numeros.filter(function (valor) {
  return valor <= 10;
}); //Essa é uma maneira ainda mais curta que a mostrada no index2.js

console.log(numerosFiltrados);
console.log(numerosFiltrados2);