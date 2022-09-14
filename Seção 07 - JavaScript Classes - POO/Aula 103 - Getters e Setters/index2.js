class Pessoa {
  constructor(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  }  

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' '); //divide a string em um array, tipo o SplitString do Delphi, mesma coisa
    this.nome = valor.shift(); //nome vai receber a primeira posição do array
    this.sobrenome = valor.join(' '); //sobre nome vai juntar todas as posições seguintes separando por espaço
  }
}

const pessoaUm = new Pessoa('Felipe', 'Texeira');
console.log(`Nome: ${pessoaUm.nome}`);
console.log(`Sobrenome: ${pessoaUm.sobrenome}`);
console.log(`Nome completo: ${pessoaUm.nomeCompleto}`);

pessoaUm.nomeCompleto = 'Giulia Gabrielle Breis Texeira';
console.log();
console.log(`Nome: ${pessoaUm.nome}`);
console.log(`Sobrenome: ${pessoaUm.sobrenome}`);
console.log(`Nome completo: ${pessoaUm.nomeCompleto}`);