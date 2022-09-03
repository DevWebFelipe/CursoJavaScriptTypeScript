/*
Funções construtoras e fábrica, são uma espécie de molde, para que todos
os objetos sejam criados da mesma forma, tenham os mesmos atributos, 
os mesmos métodos (é uma padronização do objeto)
*/

// Função Constrturora -> Retorna objetos
/*
  Sempre iniciada com letra maiúscula -> CriaObjetos {}
  Elimina-se a parte do Cria, chamando dreto o objeto -> Pessoa {}
  Incia-se com a palavra new na chamada da função -> new Pessoa
  Não se utiliza vírgula, usa-se ;
*/

function Pessoa(nome, sobrenome) {
  //Tudo que for ser criado sem THIS, é privado, só vai ser visto
  //dentro do Objeto pessoa, seus chamadores, não terão acesso
  const ID = 1;
  const metodoPrivado = function() {

  };

  //Usa-se a letra maiúscula para que o JS entenda que essa é uma função
  //construtora, sendo assim, já posso chamar o This direto no atributo
  //também não vou precisar das chaves, porque ele entende que retornará
  //um objeto
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(`Método do objeto Pessoa: ${this.nome} ${this.sobrenome}.` )
  };
}
  // NEW -> Cria um Objeto vazio
  //        Faz o THIS apontar para o objeto criado
  //        Retorna o objeto para quem o chamou
const p1 = new Pessoa('Felipe', 'Texeira');
const p2 = new Pessoa('Isis', 'Gabrielle Texeira');

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();
p2.metodo();
console.log(p1.ID); //Vai retornar UNDEFINED pois é privado, e não está disponível
//fora do objeto, nem mesmo para o chamador do objeto
console.log(p2.metodoPrivado()); //vai dar erro dizendo que não é uma função




// Função Fábrica -> Retorna objetos
/*
  Sempre iniciada com letra minúscula -> criaObjetos {}
  Utiliza-se {} para os campos
  Quebra-se os campos com vírgula
*/