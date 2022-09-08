
//é uma maneira de progeter a integridade da propriedade
//GETTER -> Pega o valor da propriedade
//SETTER -> Atribui um valor a propriedade

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostrar a chave ESTOQUE
//Posso remover o VALUE e o WEITABLE
//VALUE -> posso remover porque vou usar o GETTER e o SETTER para 
//pegar o valor e atribuir valor a essa propriedade, então não 
//faz sentido usar VALUE
//WRITABLE -> se vou usar o GETTER e o SETTER então eu vou alterar o
//valor dessa propriedade em algum momento, logo, não faz sentido usar
//WRITABLE    
//    value: estoque, //valor da chave ESTOQUE
//    writable: true, //permite alterar a chave ESTOQUE
    configurable: true, //permite reconfigurar ou apagar a chave ESTOQUE
    get: function() {
      return estoquePrivado;
    },
    set: function(valor) { //o VALOR no caso, é o que for ser atribuido a
      //essa propriedade, ele automaticamente vai ser passado no parmetro
      //dessa função, aí basta eu validar da forma que eu quiser, e se
      //estiver tudo certo, então eu atribuo ele a minha propriedade
      if (typeof valor !== 'number') { //se o tipo for diferente de numero
        throw new TypeError('Valor incorreto'); //vai gerar essa mensagem de erro
      }

      estoquePrivado = valor;
    }
  })
}

const p1 = new Produto('Camiseta', 50, 5);
console.log(p1);
console.log(p1.estoque);
p1.estoque = 'valor que eu quero';
p1.estoque = 15;
console.log(p1.estoque);