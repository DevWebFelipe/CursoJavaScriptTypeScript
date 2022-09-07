//é uma forma diferente de interar sobre os arrays
//somente disponível em arrays

const numeros = [1, 5, 15, 3, 6, 50, 10, 35, 1000, 4, 90, 60, 30, 2];

for (let valor  of numeros) {
  console.log(valor);
}; //vai mostrar o valor de cada posição do array

numeros.forEach((valor, indice, array) => {
  console.log(indice, valor);
}); //é parecido com o for of
//nesse caso, vai mostrar o índice e o valor de cada elemento do array

let total = 0;
numeros.forEach(valor => (total += valor));
console.log(total);