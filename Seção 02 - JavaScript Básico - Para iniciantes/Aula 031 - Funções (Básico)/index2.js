function soma(mValorA, mValorB) {
  return mValorA + mValorB;
}

const resultado = soma(15, 65)
console.log(resultado);

function subtrai(mValorA, mValorB) {
  const resultado = mValorA - mValorB;
  console.log('Será exibido');
  return resultado;
  //nada depois do return será executado em uma função
  console.log('Não será exibido');
}

console.log(subtrai(15, 5.8));

//Criar uma função com valores default
function multiplica(mValorA = 1, mValorB = 1) {
  const resultado = mValorA * mValorB;
  return resultado;
}

console.log(multiplica(3));
console.log(multiplica(4, 2));