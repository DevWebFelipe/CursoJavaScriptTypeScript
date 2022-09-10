function Produto(nome, cor, preco) {
  this.nome = nome;
  this.cor = cor;
  this.preco = preco;  
}
Produto.prototype.acrescimoValor = function(valor) {
  this.preco += valor
};
Produto.prototype.descontoValor = function(valor) {
  this.preco -= valor
};

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