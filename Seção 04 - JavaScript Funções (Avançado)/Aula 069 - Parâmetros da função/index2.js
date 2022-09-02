function funcao1({nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade);
}
funcao1({nome: 'Felipe', sobrenome: 'Teixeira', idade: 27});
let pessoa1 = {nome: 'Felipe', sobrenome: 'Teixeira', idade: 27};
funcao1(pessoa1);

function funcao2([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
funcao2(['Felipe', 'Teixeira', 27]);

function conta(operador, acumulador, numeros) {
  console.log(operador, acumulador, numeros);
}
conta('+', 0, [20, 30, 40, 50]);

function conta(operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros);
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
    console.log(acumulador);
  }
  console.log('Total:', acumulador);
}
conta('+', 1, 20, 30, 40, 50);
conta('-', 1, 20, 30, 40, 50);
conta('/', 1, 20, 30, 40, 50);
conta('*', 1, 20, 30, 40, 50);