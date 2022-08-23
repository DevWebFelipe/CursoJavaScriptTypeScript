//Exemplo de uma necessidade de se criar um objeto
const nome01 = 'Felipe';
const sobrenome01 = 'Texeira';
const idade01 = 28;

const nome02 = 'Giulia';
const sobrenome02 = 'Gabrielle Breis Texeira';
const idade02 = 25;

//Criando objeto
const pessoa1 = {
  nome: 'Felipe' ,
  sobrenome: 'Texeira',
  idade: 28
}  

//Acessado atributos desse objeto
console.log(pessoa1.nome); 
console.log(pessoa1.sobrenome); 
console.log(pessoa1.idade); 

const pessoa2 = {
  nome: 'Giulia' ,
  sobrenome: 'Gabrielle Breis Texeira',
  idade: 25
}  

console.log(pessoa2.nome); 
console.log(pessoa2.sobrenome); 
console.log(pessoa2.idade); 

//Criar uma função que seja capaz de criar dinamicamente
//esses objetos, para que eu não precise mais criar eles na mão
console.log();
console.log('Por função');
console.log();

function criarPessoa(nome, sobrenome, idade) {
  return{
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  }
}

//Quando for ser usado parametro igual ao nome do atributo da classe
//não precisa cetar nome: nome, basta cetar direto como nome
function criarPessoaSimplificado(nome, sobrenome, idade) {
  return{nome, sobrenome, idade}
}

var pessoa = criarPessoa('Felipe', 'Texeira', 28);
console.log(pessoa.nome); 
console.log(pessoa.sobrenome); 
console.log(pessoa.idade); 
var pessoa = criarPessoaSimplificado('Giulia', 'Gabrielle Breis Texeira', 25);
console.log(pessoa.nome); 
console.log(pessoa.sobrenome); 
console.log(pessoa.idade); 