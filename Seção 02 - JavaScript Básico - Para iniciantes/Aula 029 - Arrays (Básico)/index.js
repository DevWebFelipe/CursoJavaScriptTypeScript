//Arrays recebem qualquer tipo de valor, mas só se deve usar um tipo de dados
//por array, não é uma boa prática de programação misturar
const arrayBaguncado = ['nome', 'outro nome', 5, 6.9, true, null]
console.log(arrayBaguncado)
console.log(arrayBaguncado[3])
console.log(arrayBaguncado[4] + ', ' + arrayBaguncado[1])

//Array de strings
const alunos = ['Luiz', 'Maria', 'João']
console.log(alunos[0])

const nome = 'Felipe Teixeira';

//Adicionar um elemento
alunos[3] = nome;
console.log(alunos[3]);

//Editar o valor de um elemento
alunos[0] = 'Felipe';
console.log(alunos);

//Não conhecendo o tamanho do array, posso usar a função length para 
//adicionar na última posição
console.log(alunos.length);

alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Isis';
console.log(alunos);

//Colocar um elemento sem precisar dizer que é ao final
alunos.push('Otávio');
console.log(alunos);

//Adicionar  no começo do array
alunos.unshift('No começo');
alunos.unshift('Agora esse está no começo');
console.log(alunos);

//remover itens do final do array
const removido = alunos.pop();
console.log(removido + '; ' + alunos);

//remover itens do inicio do array
const removido1 = alunos.shift();
console.log(removido + '; ' + alunos);

//remover um item pelo ídice, o indice em si, continua
//mas vai estar vazio, seu conteúdo será deletado
delete alunos[2];
console.log(alunos);
console.log(alunos[2]);