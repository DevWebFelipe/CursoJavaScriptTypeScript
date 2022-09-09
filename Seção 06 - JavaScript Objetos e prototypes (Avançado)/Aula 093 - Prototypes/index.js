/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

//construtora -> molde (classe)
//Hierarquia = Pessoa <- Pessoa.proptotype <- Object.prototype
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  //this.nomeCompleto = () => 'Original ' + this.nome + ' ' + this.sobrenome;
}

//PROTOTYPE é um objeto que automaticamente já vem vinculado a um objeto 
//criado por uma função criadora, em suma, ele cria uma vez para todos os 
//objetos, então se eu criar uma método dentro dele por exemplo
//cada vez que eu crio um objeto, esse objeto já vai ter acesso a esse
//método automaticamente, sem que seja preciso fazer mais nada, declarar 
//o método dentro do criador do objeto por exemplo
Pessoa.prototype.funcaoPrototype = 'Linkado somente no ___proto___ mas acessível em todos os objetos criados';
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
}

//Cadeia hierárquica
// Data <- Date.proptotype <- Object.prototype

//instância
const pessoa1 = new Pessoa('Felipe', 'Texeira');
const pessoa2 = new Pessoa('Isis', 'Gabrielle'); // Pessoa = Função construtora
const data = new Date(); // Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);