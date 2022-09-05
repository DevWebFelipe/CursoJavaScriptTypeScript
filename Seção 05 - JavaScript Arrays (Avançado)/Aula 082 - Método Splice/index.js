//              -7        -6        -5      -4       -3        -2        -1
//               0         1         2       3        4         5         6
const nomes = ['Felipe', 'Giulia', 'Isis', 'Amora', 'Amelia', 'Amadeu', 'Matilda'];
const nomesCopia1 = [...nomes] //Feito cópia para poder fazer diversas alterações sem
//mexer no array original
console.log('Array original: ', nomes);
console.log();
//remover o último índice do array
let removidos = nomesCopia1.splice(6, 1); //primeiro digo a posição/índice, depois quantos serão removidos
//nesse caso, pego a posição 6 e digo que quero deletar 1 elemento
//o splice vai retornar um array dos removidos

console.log('Removido último elmento: ', nomesCopia1);
console.log('Elementos removidos: ', removidos);

const nomesCopia2 = [...nomes];
console.log();
console.log('Removendo com números negatigos');
removidos = nomesCopia2.splice(-4, 2); //começando da posição -4(conta 4 posições de traz pra frente) vai remover dois índices
console.log('Removido elmentos 3 e 4: ', nomesCopia2);
console.log('Elementos removidos: ', removidos);

const nomesCopia3 = [...nomes];
console.log();
console.log('Removendo de uma posição até o máximo dela');
removidos = nomesCopia3.splice(-4, Number.MAX_VALUE); //começando da posição -4(conta 4 posições de traz pra frente) vai remover todo o resto
//Number.MAX_VALUE retorna a maior número possível no JS 1.7976931348623157e+308, então vai deletar
//da posição -4 até o maior número possível
console.log('Maior posição possível: ', Number.MAX_VALUE);
console.log('Removido último elmento: ', nomesCopia3);
console.log('Elementos removidos: ', removidos);