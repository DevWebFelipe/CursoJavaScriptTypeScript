
// Mudar o comportamento das propriedades, uma ou várias de uma
// vez, comportamentos como edição de valores, atribuição de valores, 
// enfim, posso determinar o que vai poder ser feito com a propriedade

function Produto1(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;
}

function Produto(nome, preco, estoque) {
  /*
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;
  */
  
  //tornar privada  
  //this.estoque = estoque; removido daqui, continua criado, pois está no
  //Object.defineProperty

  //1º vou determinar em qual objeto quero mexer, no caso, quero mexer nesse 
  //objeto mesmo, então, uso o THIS, que já está referenciand a instância 
  //desse objeto
  //2º a propriedade que quero manipular
  //3º (property descriptor) um objeto com o comportamento que quero implementar
  //na minha propriedade
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //siginifica que vai aparecer em for in por exemplo ou quando
    //der um print no objeto, ou quando chamar as chaves do objeto
    value: () => estoque, //para definir o valor dessa propriedade vou precisar 
    //atribuir o valor recebido ao VALUE dela
    writable: true, //esse valor pode ser alterado? se sim, é TRUE, se não é FALSE,
    //ou seja, essa propriedade vai receber o valor na criação do objeto, mas depois
    //só poderá ser alterada se for TRUE
    configurable: true, //se essa chave pode ser apagada, ou reconfigurada?
  });

  //1º vou determinar em qual objeto quero mexer, no caso, assim como no exemplo
  //acima, eu passo o THIS, porque é o próprio objeto onde já estou
  //2º vai ser um objeto que vai conter todas as minhas propriedades
  //3º cada propriedade vai receber um objeto para configurála, da mesma 
  //maneira que no exemplo acima
  Object.defineProperties(this, {
    nome: {
      enumerable: true, 
      value: () => nome,
      writable: true,
      configurable: true,
    },
    preco: {
      enumerable: true, 
      value: () => preco,
      writable: true,
      configurable: true,
    }
  });
}

const p1 = new Produto('Camiseta', 20, 3);
const p2 = new Produto1('Camiseta', 20, 3);
console.log(p1);
console.log(p2);
console.log(p1.estoque());
console.log(p2.estoque);
console.log(Object.keys(p1)); //Mostra todas as chaves de um determinado objeto
console.log(Object.keys(p2)); //Mostra todas as chaves de um determinado objeto

for(let chave in p1) {
  console.log(chave);
}
for(let chave in p2) {
  console.log(chave);
}