
function validarIntervaloNumero (menorIntervalo, maiorIntervalo, numero) {
  if (Number.isInteger(numero)) {
    console.log(`O número '${numero}' é um valor inteiro`);
  } else {
    console.log(`O número '${numero}' não é um valor inteiro`);
  }

  if (numero > menorIntervalo && numero < maiorIntervalo) {
    return `O número '${numero}' está entre o intervalo de '${menorIntervalo}' e '${maiorIntervalo}'`;
  } else if (numero > maiorIntervalo) {
    return `O número '${numero}' é maior que o máximo intervalo estipulado '${maiorIntervalo}'`;
  } else if (numero < menorIntervalo) {
    return `O número '${numero}' é menor que o mínimo intervalo estipulado '${menorIntervalo}'`;
  } else if (numero === maiorIntervalo) {
    return `O número '${numero}' é igual ao máximo intervalo estipulado '${maiorIntervalo}'`;
  } else if (numero === menorIntervalo) {
    return `O número '${numero}' é igual ao mínimo intervalo estipulado '${menorIntervalo}'`;
  } else {
    return `O valor "${numero}" informado não é um número`;
  }
}

console.log(validarIntervaloNumero(5, 15, 8));
console.log(validarIntervaloNumero(5, 15, 5));
console.log(validarIntervaloNumero(5, 15, 15));
console.log(validarIntervaloNumero(5, 15, 1));
console.log(validarIntervaloNumero(5, 15, 20));
console.log(validarIntervaloNumero(5, 15, 18.5));
console.log(validarIntervaloNumero(5, 15, 3.5));
console.log(validarIntervaloNumero(5, 15, 'teste1'));