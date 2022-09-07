//new Array() = []
//new indica que vai usar um construtor
//[] indica que é um array chamado de forma literal

const pessoa1 = new Object();
pessoa1.nome = 'Felipe';
pessoa1.sobrenome = 'Texeira';
pessoa1.idade = 28;
pessoa1.falarNome = function() {
  return `${this.nome} está falando seu nome`;
} //quando uso uma função dentro de um objeto, tenho uma vantagem
//que é poder usar o THIS para acessar qualquer propriedade desse
//objeto
pessoa1.getDataNascimento = function() {
  const dataAtual = new Date(); //criar um objeto DATE para que uma variável
  //receba esse objeto, dará a variável acesso a todos os recursos do objeto DATE
  return dataAtual.getFullYear() - this.idade; //Nesse caso, estou pegando apenas o ano da 
  //data atual criada e diminuindo o valor da idade, que resultará no ano do nascimento
}

console.log('Construtor:', pessoa1);
console.log('Construtor:', pessoa1.nome);
console.log('Construtor:', pessoa1.sobrenome);
console.log('Construtor:', pessoa1.falarNome());
console.log('Construtor:', 'Ano de nascimento', pessoa1.getDataNascimento());

console.log();
console.log();

const pessoa2 = {
  nome: 'Felipe',
  sobrenome: 'Texeira',
  idade: 28,
  falarNome: function() {
    return `${this.nome} está falando seu nome`;
  },
  getDataNascimento: function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
  }
}  

console.log('Literal:', pessoa2);
console.log('Literal:', pessoa2.nome);
console.log('Literal:', pessoa2.sobrenome);
console.log('Literal:', pessoa2.falarNome());
console.log('Literal:', 'Ano de nascimento', pessoa2.getDataNascimento());