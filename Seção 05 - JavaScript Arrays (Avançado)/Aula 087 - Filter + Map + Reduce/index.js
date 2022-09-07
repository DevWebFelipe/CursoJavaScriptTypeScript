const pessoas = [
  {nome: 'Felipe', idade: 28},
  {nome: 'Giulia', idade: 25},
  {nome: 'Isis', idade: 0},
  {nome: 'Amora', idade: 2},
  {nome: 'Amelia', idade: 1},
];

const numeros = [1, 5, 15, 3, 6, 50, 10, 35, 1000, 4, 90, 60, 30, 2];

// FILTER -> Dobrando os valores pares -> Total
const numerosPares = numeros.filter(valor => ((valor % 2) === 0));
console.log('Somente pares', numerosPares);

const numerosPares1 = numeros.filter(valor => ((valor % 2) === 0)).map(valor => (valor * 2));
console.log('Dobro dos pares', numerosPares1);

const numerosPares2 = numeros.filter(valor => ((valor % 2) === 0)).map(valor => (valor * 2)).reduce((acumulador, valor) => {
  return (acumulador += valor)
}); // dava de fazer em uma linha só, mas ficou muito grande
console.log('Total dos pares', numerosPares2);

const numerosImpares = numeros.filter(valor => ((valor % 2) !== 0));
console.log('Somente ímpares', numerosImpares);

const numerosImpares1 = numeros.filter(valor => ((valor % 2) !== 0)).reduce((acumulador, valor) => (acumulador += valor));
console.log('Total dos ímpares', numerosImpares1);