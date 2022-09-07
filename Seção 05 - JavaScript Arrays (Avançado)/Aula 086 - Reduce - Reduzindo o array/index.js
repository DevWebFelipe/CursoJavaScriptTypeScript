// Se precisar altera valores de um array, usar MAP
// Se precisar filtrar valores de um array, usar FILTER
// Se precisar reduzir um array, usar REDUCE

//O REDUCE consegue fazer as 3 ações acima, mas sempre tentar usar aquela
//que já tem uma finalidade intuitiva para o que precisar fazer

//1 - Some todos os números (reduce)
//2 - retorne um array com os pares (filter)
//3 - retorne um array com o dobro dos valores
const arrayNumeros = [1, 5, 15, 3, 6, 50, 10, 35, 1000, 4, 90, 60, 30, 2];
console.log('Array original (Base para os exercícios)- ', arrayNumeros);

const exemplo1 = arrayNumeros.reduce((acumulador, valor, indice, array) => {
  console.log(indice, valor, acumulador); //colocado apenas para ver como funciona
  return acumulador += valor; //vai sempre ter que retornar o acumulador, mais
  //o valor da posição do array, nesse caso, vai mostrar o total de todas as 
  //posições do array acumuladas  
}, 0); //valor inicial do acumulador, nesse caso, vai começar com 0, é opcional, 
//não precisa mandar nada
console.log('Total', exemplo1);

//usando como exemplo o exercício 2
const exemplo2 = arrayNumeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor); //resto da divisão funciona assim
  //se eu quero os múltiplos de 5, então VALOR % 5 === 0, ou seja, os valores que
  //dividindo até o máximo possível retornarem 0, são múltimplos de 5
  return acumulador;
}, []);
console.log('Pares', exemplo2);

const exemplo3 = arrayNumeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log('Dobro', exemplo3);

//somando somente os pares
const exemplo4 = arrayNumeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador += valor;
  return acumulador;
}, 0); //tentar sempre passar um valor incial, para evitar de pegar algum valor do índice 0 e dar
//algum problema
console.log('Total dos pares', exemplo4);