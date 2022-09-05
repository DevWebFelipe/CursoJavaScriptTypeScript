const nomes = ['Felipe', 'Giulia', 'Isis', 'Amora', 'Amelia', 'Amadeu', 'Matilda'];
const nomesCopia = [...nomes];

console.log(nomes);
console.log();

//o Slice pode ser usado para deletar ou inserir, quando quiser inserir, tem que passar a 
//quantidade a deletar como 0
//No exemplo abaixo, temos o seguinte, na posição 4, deletando 0 registros, adicione o
//valor 'Manu'
nomesCopia.splice(4, 0, 'Manu');
console.log('Adicionado o valor "Manu"');
console.log(nomesCopia);

//caso eu queira trocar algum valor do meu array

console.log();
const nomesCopia1 = [...nomes];
//na posição 5, remova o valor que tiver, adicione no valor 5 o valor 'Donatelo', jogue o 
//retante para a direita, e inclua o 'Leonardo' na posição 6
nomesCopia1.splice(5, 1, 'Donatelo', 'Leonardo');
console.log('Removido Amadeu e adicionado Donatelo e Leonardo');
console.log(nomesCopia1);

console.log();
const nomesCopia2 = [...nomes];
console.log('Array original');
console.log(nomesCopia2);
nomesCopia2.splice(nomesCopia2.length, 0, 'Teste', 'teste2');
console.log('Adicionado algo na última posição');
console.log(nomesCopia2);

console.log();
const nomesCopia3 = [...nomes];
console.log('Array original');
console.log(nomesCopia3);
nomesCopia3.splice(0, 0, 'Teste', 'teste2');
console.log('Adicionado algo na primeira posição');
console.log(nomesCopia3);