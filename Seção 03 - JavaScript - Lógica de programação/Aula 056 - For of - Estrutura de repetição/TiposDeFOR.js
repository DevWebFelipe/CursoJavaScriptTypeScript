const nome = 'Felipe Texeira';

/* FOR padrão/clássico   //Normalmente vai ser usado para objetos
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}
*/

/* FOR IN (retorna o índice) //Normalmente vai ser usado para arrays, objetos e strings
for (let i in nome) {
  console.log(nome[i]);
}
*/

/* FOR OF (retorna o valor do índice) //só vai funcionar com interáveis(arrays e strings)
for (let valor of nome) {
  console.log(valor);
}
*/

/* forEach (recebe uma função que retorna o valor contido no índice, o índice e o prório array, nessa ordem específica, não preciso retornar todos, posso retornar só o que eu for usar)
nomes.forEach(function(valor, indice, array)) {
  console.log(valor, indice, array)
}
*/

const nomes = ['Giulia', 'Felipe', 'Isis'];

console.log();
console.log('For clássico');
console.log();
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log();
console.log('FOR IN (retorna o ídice, que depois busca o valor)');
console.log();
for (let i in nomes) {
  console.log(nomes[i]);
}

console.log();
console.log('FOR OF (retorna direto o valor contido no índice)');
console.log();
for (let valor of nomes) {
  console.log(valor);
}

console.log();
console.log('FOR EACH (Recebe uma função)');
console.log();
nomes.forEach(function(valor, indice, array) {
  console.log(valor, indice, array)
});