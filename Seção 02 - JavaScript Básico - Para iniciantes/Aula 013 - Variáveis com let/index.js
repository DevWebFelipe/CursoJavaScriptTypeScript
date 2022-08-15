let mNomeEsposo = 'Felipe';
var mNomeEsposa = 'Giulia'; //é mais antigo, não vai ser usado no curso
let mNomeFilho;

mNomeFilho = 'Isis';

console.log(mNomeEsposo, 'nasceu em 1994');
console.log('Em 2020', mNomeEsposo, 'conheceu', mNomeEsposa);
console.log(mNomeEsposo, 'casou-se com', mNomeEsposa, 'em 2022');
console.log(mNomeEsposa, 'teve 1 filha com', mNomeEsposo, 'em 2022');
console.log('A filha de', mNomeEsposo, 'se chama', mNomeFilho);

//Não se pode criar variáveis com palavras reservadas
//Variáveis precisam de nomes claros, significativos
//Não se pode começar o nome de uma variável com número
//Não se pode ter espaços ou traços no nome da variávei
//Não podemos redeclarar com mesmo nome usando let
//Não utilize var, utilize sempre let

//Variáveis são case-sensitive, ouseja, letra maiúscula e minúscula faz diferença
let nomeCliente = 'Felipe';
let nomecliente = 'Teixeira';
console.log(nomeCliente, nomecliente);

//Para variáveis com nome composto, usar camelCase
let nomeCompletoCliente = 'Felipe Teixeira';
console.log(nomeCompletoCliente);