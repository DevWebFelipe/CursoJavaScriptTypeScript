// Constructor function (Função construtora)

function criaPessoa(nome, sobrenome, a, p) { 
  return {
    nome, 
    sobrenome,
    filha: 'Isis',
    altura: a,
    peso: p,

    fala: function (assunto) {
      return `${nome} ${sobrenome} pai da ${this.filha} está falando sobre ${assunto}.`;
    },

    apresenta() { 
      return `Olá eu sou ${nome} ${sobrenome} pai da ${this.filha}.`;
    },

    calculaIMC() {
      const imc = this.peso / (this.altura ** 2);
      return imc.toFixed(2); 
    },

    get calcImc() {
      const imc = this.peso / (this.altura ** 2);
      return imc.toFixed(2);
    },

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    set nomeCompleto(valor) {
      valor = valor.split(' ');
      console.log(valor);
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      console.log(valor);
    }
  };
};

const p1 = criaPessoa('Felipe', 'Texeira', 1.8, 127);
const p2 = criaPessoa('Giulia', 'Gabrielle Breis Texeira', 1.49, 50);
const p3 = criaPessoa('Isis', 'Gabrielle Texeira', 0.56, 5);

console.log(`${p1.nomeCompleto}. IMC = ${p1.calcImc}`);
console.log(`${p2.nomeCompleto}. IMC = ${p2.calcImc}`);
console.log(`${p3.nomeCompleto}. IMC = ${p3.calcImc}`);