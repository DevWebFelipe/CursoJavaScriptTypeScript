const  nomes = ['Felipe', 'Isis', 'Giulia'];

//Pegar a quantidade de itens de um array
console.log(`Array nomes possui ${nomes.length} registros`);
console.log();
console.log('Removido primeiro índice do array, os demais, irão mover uma casa para a esquerda')
nomes.shift(); //remove primeiro índice do array
console.log(nomes);
console.log();
console.log('Adicionado nome Felipe novamente no final do array');
nomes.push('Felipe'); //Insere um novo índice e um valor a esse índice
console.log(nomes);
console.log('Adicionado nome Felipe no início do array e removido do final');
nomes.unshift('Felipe'); //Adiciona um novo índice no início do array e insere um valor a ele
//ATENÇÃO - UNSHIFT adiciona no início, ou seja, vai deslocar todo o restante do array para a 
//direita, então dependendo do tamanho do array, pode afetar a performance, e como vai alterar
//o índice de todos os itens do array, é necessário cuidado com onde o array é utilizado

nomes.pop(); //Remove o último índice de um Array
console.log(nomes);