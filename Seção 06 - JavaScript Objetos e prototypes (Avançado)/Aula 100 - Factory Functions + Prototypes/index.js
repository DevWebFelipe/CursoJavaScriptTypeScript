const falar = {
  falar() {
    console.log(`${this.nome} está falando`)
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`)
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`)
  }, 
};

//essa é uma forma desaclopada de dizer que determinados métodos 
//estarão no prototype de determinado objeto, usando SPREAD OPERATOR
const pessoaPrototype = {...falar, ...beber, ...comer};
//essa é outra maneira de fazer, aqui usa-se o assign e se passa um 
//objeto vazio para ser criado e os métodos que quero passar para o prototype
//desse novo objeto
const pessoaPrototype2 = Object.assign({}, comer, beber, falar);

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: {value: nome},
    sobrenome: {value: sobrenome},
  })
}

const pessoaUm = criaPessoa('Felipe', 'Texeira');
const pessoaDois = criaPessoa('Isis', 'Texeira');
console.log(pessoaUm);
console.log(pessoaDois);