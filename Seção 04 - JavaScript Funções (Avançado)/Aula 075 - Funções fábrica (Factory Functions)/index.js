//Essa é uma Factory function (Função fábrica)

function criaPessoa(nome, sobrenome, a, p) { //Não é uma boa prática passar o parametro com nome assim P e A, 
  //mas quero deixar um exemplo, apenas para ver que não precisa o parâmetro ser do mesmo nome do campo 
  //do meu objeto, basta eu setar no campo, o valor do parametro correspondente
  return {
    //O THIS será sempre o chamador, é parefido com SELF do DELPHI
    nome, 
    sobrenome,
    filha: 'Isis',
    altura: a,
    peso: p,

    fala: function (assunto) { //a variável nome e sobrenome, posso chamar direto, pois já vem nos parametros
      //mas a variável FILHA, tenho que chamar o THIS primeiro, para identificar que quero pegar
      //dos campos DESTE objeto
      return `${nome} ${sobrenome} pai da ${this.filha} está falando sobre ${assunto}.`;
    },

    apresenta() { //funciona da mesma maneira que a função acima, porém, é mais curta
      return `Olá eu sou ${nome} ${sobrenome} pai da ${this.filha}.`;
    },

    calculaIMC() {
      const imc = this.peso / (this.altura ** 2);
      return imc.toFixed(2); //Lembrando, toFixed é para arredondar para uma quantidade de casas decimais,
      //assim como o Round ou o Trunc
    },

    //Getter - Faz com que a notação de uma função, se comporte como um atributo
    get calcImc() { //a diferença desse para o de cima, é que o GET, vai fazer com que o calcImc possa ser
      //chamado direto, porque ele vai passar a se comportar como um atributo/campo, não uma função
      //parecido com o que é feito nas porperties dos campos dos objetos no Delphi
      const imc = this.peso / (this.altura ** 2);
      return imc.toFixed(2); //Lembrando, toFixed é para arredondar para uma quantidade de casas decimais,
      //assim como o Round ou o Trunc
    },

    //Getter - Pega o nome e sobrenome e concatena
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`; //Como o Setter vai setar os campos do objeto, o Getter tem
      //que pegar os campos do objeto, então precisa usar o This
    },

    //Setter - Recebe um valor e atribui a determinados campos do meu objeto
    set nomeCompleto(valor) {
      valor = valor.split(' '); //vai dividir a string a cada espaço, bem parecido com o SplitString do delphi
      console.log(valor);
      this.nome = valor.shift(); //SHIFT faz 2 coisas retorna o valor da primeira posição de um array e remove ele
      this.sobrenome = valor.join(' '); //Esse JOIN vai juntar as strings do meu array, e vai colocar o que eu passar como divisor, no caso, vai colocar um espaço a cada string
      console.log(valor);
    }
  };
}

const p1 = criaPessoa('Felipe', 'Texeira', 1.8, 127);
console.log(p1);
console.log(p1.apresenta());
console.log(p1.fala('JavaScript'));
console.log(`IMC: ${p1.calculaIMC()}`);
console.log(`IMC por GET: ${p1.calcImc}`);
console.log('Nome completo: ', p1.nomeCompleto);
p1.nomeCompleto = 'Isis Gabrielle Texeira';
console.log('Novo nome completo: ', p1.nomeCompleto);
console.log('Novo nome: ', p1.nome);
console.log('Novo sobrenome: ', p1.sobrenome);

console.log();
console.log();

const p2 = criaPessoa('Giulia', 'Gabrielle Breis Texeira', 1.49, 50);
console.log(p2);
console.log(p2.apresenta());
console.log(p2.fala('a creche'));
console.log(`IMC: ${p2.calculaIMC()}`);
console.log(`IMC por GET: ${p2.calcImc}`);
console.log('Nome completo: ', p2.nomeCompleto);
p2.nomeCompleto = 'Felipe Texeira';
console.log('Novo nome completo: ', p2.nomeCompleto);
console.log('Novo nome: ', p2.nome);
console.log('Novo sobrenome: ', p2.sobrenome);