const arrayNumeros = [1, 5, 15, 3, 6, 50, 10, 35, 1000, 4, 90, 60, 30, 2];

console.log();
console.log();
console.log('Exercícios');
//1
const somaValores = arrayNumeros.reduce((acumulador, valor) => acumulador += valor);
console.log('Exercício 1 (Retornando total somado de todas as posições)- ', somaValores);

//2
const paresValores = arrayNumeros.filter(valor => ((valor % 2) === 0));
console.log('Exercício 2 (Retornando somente os pares)- ', paresValores);

//3
const dobroValores = arrayNumeros.map(valor => (valor * 2));
console.log('Exercício 3 (Retornando o dobro do valor)- ', dobroValores);