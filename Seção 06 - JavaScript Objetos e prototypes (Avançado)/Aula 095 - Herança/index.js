// Um programa que venda Camiseta, caneca e calça
// Começaria entendendo o que são essas 3 coisas para o e-commerce
// no caso seriam produtos, então começaria a abstração, criando
// um obeto produto

//O que cada um tem?
//Produto vai ser meu objeto pai, que emglobará as funções e os
//campos comuns
//Produto = acréscimo, desconto, nome, cor, preco
//Camiseta = tamanho, marca
//Caneca = material
//Calça = tamanho, marca

function Produto(nome, cor, preco) {
  this.nome = nome;
  this.cor = cor;
  this.preco = preco;  
}

//Lembrando que métodos não serão declarados no objeto produto em si
//mas sim no prototype do produto
Produto.prototype.acrescimo = function(valor) {
  this.preco += valor
};
/*Produto.prototype.acrescimoPercentual = function(valor) {
  this.preco += (this.preco * (valor / 100))
};*/ //Removido para criar direto na Camiseta, sobrescrevendo o valor
Produto.prototype.desconto = function(valor) {
  this.preco -= valor
};
/*Produto.prototype.descontoPercentual = function(valor) {
  this.preco -= (this.preco * (valor / 100))
};*/

function Camiseta(nome, cor, preco, tamanho, marca) {
  //Produto.call está chamando uma instância do Produto, tudo que tem
  //dentro de Produto agora pode ser usado em Camiseta
  //a chamada da instância vem pelo método CALL, para ele é preciso
  //passar o THIS, que é a instância do objeto chamado, e também, passo
  //os parametros que são usados na função Produto
  Produto.call(this, nome, cor, preco);
  
  this.tamanho = tamanho;
  this.marca = marca;
}

//Para que o prototype funciona da mesma maneira, preciso instanciar um objeto de Produto
//vazio chamando o prototype e atribuindo esse prototype ao proto da Camiseta
Camiseta.prototype = Object.create(Produto.prototype);
//Porém, quando eu executo a linha acima, eu não tenho mais o Camiseta como sendo
//minha função construtora, e sim o Produto, para corrigir isso é preciso redeclarar
//a função construtora no prototype da função que realmente está criando o objeto que
//estou utilizando, sempre preciso declarar isso a baixo da chamada construtora do objeto
Camiseta.prototype.constructor = Camiseta;

//os métodos abaixo irão sobrescrever os métodos que existem no produto.prototype
//que está associado a esse objeto

//  **********   OBS: Tem que estar depois de corrigir o constructor   **********
Camiseta.prototype.acrescimo = function(valor) {
  this.preco += (this.preco * (valor / 100))
};
Camiseta.prototype.desconto = function(valor) {
  this.preco -= (this.preco * (valor / 100))
};

const verificaConstrutorCamiseta = new Camiseta('teste', 'teste', 10, 'teste', 'teste');
const verificaConstrutorProduto = new Produto('teste', 'teste', 10);
const caneca2 = new Caneca('Cafe', 'Branca', 15, 'Vidro', 10);
console.log();
console.log(verificaConstrutorCamiseta);
console.log(verificaConstrutorProduto);
console.log(caneca2);
console.log();

console.log('Antes de corrigir o construtor');
console.log(verificaConstrutorCamiseta);
console.log(verificaConstrutorProduto);

const camiseta = new Camiseta('Camisa de manga', 'Branca', 35, 'GG', 'Lacoste');
console.log(camiseta);
console.log();

camiseta.preco = 35;
camiseta.acrescimo(10);
console.log('Acréscimo de 10% -> ', camiseta.preco);

camiseta.preco = 35;
camiseta.desconto(10);
console.log('Desconto de 10% -> ', camiseta.preco);

/*camiseta.preco = 35;
camiseta.acrescimoPercentual(10);
console.log('Acréscimo de 10% -> ', camiseta.preco);

camiseta.preco = 35;
camiseta.acrescimoValor(10);
console.log('Acréscimo de 10 reais -> ', camiseta.preco);

camiseta.preco = 35;
camiseta.descontoPercentual(10);
console.log('Desconto de 10% -> ', camiseta.preco);

camiseta.preco = 35;
camiseta.descontoValor(10);
console.log('Desconto de 10 reais -> ', camiseta.preco);*/

function Caneca(nome, cor, preco, material, estoque) {
  Produto.call(this, nome, cor, preco);
  
  this.material = material;
  
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //vai aparecer quandoe eu chamar as chaves
    configurable: false, //não pode ser sobrescrita nem apagada
    get: function() {
      return estoque;
    }, //Vai pegar o valor que tem na propriedade estoque e retornar
    set: function(valor) {
      if (typeof valor !== 'number') return; //se o valor recebido for 
      //diferente de number, não deixa setar a propriedade estoque
      estoque = valor;
    } //vai setar o valor recebido na propriedade estoque
  })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.acrescimo = function(valor) {
  this.preco += (this.preco * (valor / 100))
};
Caneca.prototype.desconto = function(valor) {
  this.preco -= (this.preco * (valor / 100))
};

const caneca = new Caneca('Café', 'Branca', 35, 'Porcelana', 5);
console.log(caneca);
console.log();

caneca.preco = 35;
caneca.acrescimo(10);
console.log('Acréscimo de 10% -> ', caneca.preco);

caneca.preco = 35;
caneca.desconto(10);
console.log('Desconto de 10% -> ', caneca.preco);

caneca.estoque = 100;
console.log(caneca.estoque);