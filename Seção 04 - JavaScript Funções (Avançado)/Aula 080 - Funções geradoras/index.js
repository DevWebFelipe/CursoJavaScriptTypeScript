//É uma função que retorna algo em partes, exemplo, se eu configurar para retornar
//algo em 3 partes, a primeira chamada vai retornar a parte 1, a segunda 
//chamada dessa função, vai retornar a parte 2 e a terceira chamada vai retornar
//a terceira e última parte
//um exemplo de aplicação, seria uma consulta que retorna 100 registros, depois mais 
//100 e assim por diante

function*  geradora1() {
  //código que vai montar o valor do retorno 1...

  //YIELD - Quase a mesma coisa que o return, só que o return para funções geradoras
  //tem uma finalidade diferente
  yield 'Valor 1';

  //código que vai montar o valor do retorno 2...
  yield 'Valor 2';

  //código que vai montar o valor do retorno 3...
  yield 'Valor 3';
}

const gera1 = geradora1();
//apenas para mostrar como que vem o retor da função geradora
console.log(gera1);

console.log();

//para chamar o valor da função geradora, precisa usar o next
console.log('Prineira chamada:', gera1.next());  //o retorno será {value: 'Valor 1', done: false}
//value: Retorno contido no YIELD equivalente, se primeira chamada, então o 1
//se segunda chamada então o 2 e assim por diante
//done: indica se já retornou todos os itens da minha função geradora

//Nesse caso, eu estou no segundo next, então vai acessar o valor do segundo retorno
console.log('Segunda chamada:', gera1.next().value); //o retorno será o valor do YIELD 2 'Valor 2'
//Essa é a chamada para acessar o valor de cada retorno

console.log('Ainda tem retorno?', gera1.next().done); //o retorno será FALSE, pois o métdo retornou o último, 
//mas ainda não sabe que acabou, só será TRUE quando não retornar nada

console.log('Ainda tem retorno?', gera1.next().done); //o retorno será TRUE, porque agora sim, o método não 
//retornou nada, então ele sabe que acabou

//uma outra forma de usar essa função, é gerar um for por exemplo, e trazer todos os retornos
//em sequência (ou um while enquanto done for false)

const g2 = geradora1();
for (let valor of g2) {
  console.log(valor);
}

console.log();
console.log();

function* geradora2() {
  let i = 0;

  while(true) {
    yield i;
    i++;
  }
}

const g3 = geradora2();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);