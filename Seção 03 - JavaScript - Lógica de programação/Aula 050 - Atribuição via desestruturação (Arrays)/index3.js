
// Arrays dentro do array
const numeros = [
  [1, 2, 3],  //0
// 0  1  2  
  [4, 5, 6],  //1
// 0  1  2  
  [7, 8, 9],  //2
// 0  1  2  
]

console.log(numeros[1][2]);
console.log();
console.log();

// por desestruturação, tem que pegar lista e índice dentro de lista e índice
const [, [, cinco] ] = numeros

console.log(cinco);
console.log();
console.log();

// é menos complexo/confuso pegar as listas por desestruturação, e o valor direto
// pelo índice da lista desestruturada

const [lista1, lista2, lista3] = numeros;
console.log(lista2[0]);