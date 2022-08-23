let alunos = ['Luiz', 'Maria', 'João']

//acessar um índice que não existe, é possível
//irá retornar o valor undefined
console.log(alunos[50]);

alunos.unshift('Felipe');
alunos.push('Otávio');
console.log(alunos[4]);

//pegar intervalos de valores de um array
console.log(alunos.slice(1, 4));

//pegar do índice 0 até o maior índice menos o número que eu passar
console.log(alunos.slice(0, -2));

console.log(typeof alunos); //O tipo de Array será retornado como objeto
console.log(alunos instanceof Array); //Alunos é uma instância de Array? True ou False
alunos = 123; //Em JS é possível trocar o tipo de uma variável em tempo de execução
//então o alunos que era um Array, agora pode receber um valor inteiro
console.log(alunos instanceof Array); //Alunos é uma instância de Array? True ou False
console.log(typeof alunos); //O tipo agora retornará Number