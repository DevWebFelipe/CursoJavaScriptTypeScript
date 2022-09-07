/*

LITERAIS

String   = '' ou "" ou `` - Quando usa os marcadores de string
Number   = 3221 - Quando joga direto o número
Array    = [] - Quando usa os colchetes para delimitar o array
Objeto   = {} - Quando usa as chaves para delimitar o objeto
funcções = function () .... - Quando escreve a sintaxe completa da função

Todos eles tem construtores

*/

//Objeto literal

const pessoa = {
//CHAVE - VALOR -> Chamado de par
  nome: 'Felipe',
  sobrenome: 'Texeira',
  idade: 28
}; //corpo

console.log(pessoa.nome); //usando notação de ponto para acessar o valor da chave
console.log(pessoa['sobrenome']); //usando notação de colchetes para acessar o valor da chave
//OBS: Para usar notação de colchetes, tem que passar a chave entre aspas

//Vai ser usado quando a chave for dinamica.
function getKey(nome = true) {
  return nome ? 'nome' : 'sobrenome';
}
console.log(pessoa[getKey()]);
console.log(pessoa[getKey(false)]);
