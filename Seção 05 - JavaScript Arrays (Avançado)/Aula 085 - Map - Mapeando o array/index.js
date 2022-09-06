// functiona da mesma maneira que o filter, porém o retorno é diferente,
// map usa o array original para criar um novo array, e é esse array que é retornado
// mas recebe a mesma função, com os mesmos parâmetros

// Dobre os valalores de cada índice
const numeros = [1, 5, 15, 3, 6, 50, 10, 35, 1000, 4, 90, 60, 30, 2];

const visualizar = numeros.map(function(valor, indice, array) {
  //console.log(valor, indice, array)
}); // Criado apenas para ver o retorno

const numerosDobrados = numeros.map(valor => valor * 2); // vai ser retornado o índice com 
//o novo valor, o valor contido no índice
// do array original, será usado apenas como base
console.log(numerosDobrados);

const indiceValores = numeros.map(function(valor, indice) {
  return `Índice -> ${indice} Valor do indice -> ${valor}`
}); // vai ser retornado o índice com o novo valor, o valor contido no índice
// do array original, será usado apenas como base
console.log(indiceValores);

const enumerosDobrados = numeros.map(function(valor) {
  return valor * 2;
});