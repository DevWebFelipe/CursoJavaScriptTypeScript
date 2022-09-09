function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

//Métodos, tentar sempre colocar fora da função construtora, no 
//prototype, de modo que sempre esteja acessível para todos os 
//objetos de sua classe, porém, criando uma única vez
Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.acrescimo = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('camiseta', 50);
console.log(p1);
p1.acrescimo(100);
console.log(p1);
p1.desconto(100);
console.log(p1);

const p2 = {
  nome: 'caneca',
  preco: 75
}
//reaproveintando o prototype do Produto para o p2
Object.setPrototypeOf(p2, Produto.prototype);

console.log(p2);
p2.acrescimo(100);
console.log(p2);
p2.desconto(100);
console.log(p2);

//criando um novo objeto literal e passando o prototype
//de produto já na criação do objeto
const p3 = Object.create(Produto.prototype); 
p3.preco = 3.99
console.log(p3);
p3.acrescimo(100);
console.log(p3);
p3.desconto(100);
console.log(p3);

//já configurar um objeto na chamada do método
const p4 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 68
  }
}); 
console.log(p4);
p4.acrescimo(100);
console.log(p4);
p4.desconto(100);
console.log(p4);