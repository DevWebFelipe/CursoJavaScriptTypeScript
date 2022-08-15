//Constante precisa ser criada e já ter um valor atribuído a ela
const mNomeEsposo = 'Felipe';
const mNomeEsposa = 'Giulia';
const mNomeFilho = 'Isis';

console.log(mNomeEsposo, 'nasceu em 1994');
console.log('Em 2020', mNomeEsposo, 'conheceu', mNomeEsposa);
console.log(mNomeEsposo, 'casou-se com', mNomeEsposa, 'em 2022');
console.log(mNomeEsposa, 'teve 1 filha com', mNomeEsposo, 'em 2022');
console.log('A filha de', mNomeEsposo, 'se chama', mNomeFilho);

//Não se pode criar constantes com palavras reservadas
//constantes precisam de nomes claros, significativos
//Não se pode começar o nome de uma constante com número
//Não se pode ter espaços ou traços no nome da constante
//Não podemos modificar o valor de uma constante
//Constantes são case-sensitive, ouseja, letra maiúscula e minúscula faz diferença
//Para Constantes com nome composto, usar camelCase
//Não utilize var, utilize sempre const

const primeiroNumero = 5;
const segundoNumero = 10;
const resultadoFinal = primeiroNumero * segundoNumero;
const resultadoFinalDuplicado = resultadoFinal * 2;
let resultadoFinalTriplicado = resultadoFinal + resultadoFinalDuplicado;

console.log('Resultado das contantes:', resultadoFinal);
console.log('Resultado das contantes duplicado:', resultadoFinalDuplicado);
console.log('Resultado das contatens triplicado:', resultadoFinalTriplicado);

resultadoFinalTriplicado = resultadoFinalTriplicado / 2;

console.log('Resultado das contatnes triplicado divido por 2:', resultadoFinalTriplicado);

//Descobrir o tipo de dados de uma variável ou constante
//escrevi de duas maneiras, apenas para ver que funciona de qualquer uma das formas
console.log( typeof(primeiroNumero) );
console.log(typeof mNomeEsposa);

//testando constante booleana
const teste = false;
console.log(typeof teste);

//+ concatena strings e soma numbers
const numero1 = 1;
const string1 = '1';
console.log(numero1 + numero1 + string1);

//abaixo apenas para entender o uso dos parenteses
//primeiro, pegou só o primeiro, o segundo concatenou
//segundou pegou toda a expressão
console.log(typeof numero1 + string1);
console.log(typeof(numero1 + string1));