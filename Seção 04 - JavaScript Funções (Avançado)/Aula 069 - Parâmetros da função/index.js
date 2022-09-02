function funcao() {
  console.log('sem parametro');
}
funcao();

function funcao1(par1) {
  console.log(par1);
}
funcao1('Passando parametro');

function funcao2() {
  console.log('passando parametro sem declara, usando arguments para pegar os valores recebidos');
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  console.log(arguments[3]);
  console.log(arguments[4]);
  console.log(arguments[5]);
}
funcao2('teste', 32, 65, 80, 1, 30, 6, 5);

function funcao3 () {
  console.log('Arguments recebe tudo que for passado');
  console.log('Nesse caso, estou fazendo um laço e somando todos os valores passados');

  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}
funcao3(1, 5, 6, 50, 90, 10);

function funcao4(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
funcao4(1, 2, 3);

function funcao5(a = 2, b, c = 5, d = 1) { //se não vier nada para a, vai ser 2
  b = b || 3; //se não tiver nada, vai setar 0
  console.log(a + b + c + d);
}
funcao5(4, 4);
funcao5(2, undefined, undefined, 20); //mandando valor de A e D pulando o B e C