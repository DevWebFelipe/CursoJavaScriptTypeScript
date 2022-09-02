const conta = function (operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros);
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
    console.log(acumulador);
  }
  console.log('Total:', acumulador);
};

conta('+', 1, 20, 30, 40, 50);

const conta2 = function (operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros);
  console.log(arguments)
}  
conta2('+', 1, 20, 30, 40, 50);

//Não tem arguments para arrow function
const conta3 = (operador, acumulador, ...numeros) => {
  console.log(operador, acumulador, numeros);
}  
conta3('+', 1, 20, 30, 40, 50);

const conta4 = function (...args) {
  console.log(args);
}  
conta4('+', 1, 20, 30, 40, 50);