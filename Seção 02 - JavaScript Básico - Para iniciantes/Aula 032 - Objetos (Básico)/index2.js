const pessoa = {
  nome: 'Felipe',
  sobrenome: 'Texeira',
  idade: 25,

  fala() {
    console.log('Olá mundo');
  }
}

pessoa.fala();

//This, nesse caso, dentro dessa função, está referenciando o próprio objeto
const pessoaThis = {
  nome: 'Felipe',
  sobrenome: 'Texeira',
  idade: 28,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos de idade`);
  },

  incrementaIdade() {
    this.idade++; //++ operador de incremento, é o valor + 1
  }

}

pessoaThis.fala();
pessoaThis.incrementaIdade();
pessoaThis.fala();
pessoaThis.incrementaIdade();
pessoaThis.fala();
pessoaThis.incrementaIdade();
pessoaThis.fala();