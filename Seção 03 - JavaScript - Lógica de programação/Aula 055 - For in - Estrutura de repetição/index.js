const frutas = ['Pera', 'Maça', 'Uva']; // vetor/array vetor é quando não tem array dentro de array

for (let i in frutas) {
  console.log(i); // pega os índices
  console.log(frutas[i]);
}

console.log();

const pessoa = {
  nome: 'Felipe',
  sobrenome: 'Texeira',
  idade: 27
}

for (let i in pessoa) {
  console.log(i); //pega as chaves
}
console.log();
//pegando a chave, e dela própria, pegando o valor dentro
//do objeto pessoa
for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
console.log();
// Pegando os valores pela chave
/*
console.Log(pessoa.nome);
console.Log(pessoa['nome']);
*/

//nesse caso, to usado um array com as chaves do meu objeto, 
//varrendo o array, pegando os valores das chaves dentro do objeto dinamicamente
const tagPessoa = ['nome', 'sobrenome', 'idade']

for (let i in tagPessoa) {
  console.log(tagPessoa[i], pessoa[tagPessoa[i]]);
}