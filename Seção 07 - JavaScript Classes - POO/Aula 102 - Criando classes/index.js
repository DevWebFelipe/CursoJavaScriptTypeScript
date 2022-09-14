class Pessoa {
  constructor(nome, sobrenome) {//os parametros da minha classe, serão passados no método constructor
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  //em classes, os métodos automaticamente já vão para o prototype, sendo assim
  //não precisa ficar criando prototype e vinculando métodos a ele
  falar() {
    console.log(`${this.nome} está falando.`);
  }

  comer() {
    console.log(`${this.nome} está comendo.`);
  }

  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
}

/*
********     A mesma coisa, só que com uma função construtora ficaria     ********
*/
function PessoaDois(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

PessoaDois.prototype.falar = function() {
  console.log(`${this.nome} está falando.`);
}

PessoaDois.prototype.comer = function() {
  console.log(`${this.nome} está comendo.`);
}

PessoaDois.prototype.beber = function() {
  console.log(`${this.nome} está bebendo.`);
}
/*
********     Fim     ********
*/

const pessoaUm = new Pessoa('Felipe', 'Teixeira');
const pessoaDois = new Pessoa('Giulia', 'Gabrielle Breis Teixeira');
const pessoaTres = new Pessoa('Isis', 'Gabrielle Teixeira');
console.log();
console.log('Com CLASSE');
console.log();
console.log(pessoaUm);
pessoaUm.falar();
pessoaUm.comer();
pessoaUm.beber();
console.log();
console.log(pessoaDois);
pessoaDois.falar();
pessoaDois.comer();
pessoaDois.beber();
console.log();
console.log(pessoaTres);
pessoaTres.falar();
pessoaTres.comer();
pessoaTres.beber();
console.log();

const pessoaCUm = new PessoaDois('Felipe', 'Teixeira');
const pessoaCDois = new PessoaDois('Giulia', 'Gabrielle Breis Teixeira');
const pessoaCTres = new PessoaDois('Isis', 'Gabrielle Teixeira');
console.log();
console.log('Com FUNÇÃO CONSTRUTORA');
console.log();
console.log(pessoaCUm);
pessoaCUm.falar();
pessoaCUm.comer();
pessoaCUm.beber();
console.log();
console.log(pessoaCDois);
pessoaCDois.falar();
pessoaCDois.comer();
pessoaCDois.beber();
console.log();
console.log(pessoaCTres);
pessoaCTres.falar();
pessoaCTres.comer();
pessoaCTres.beber();