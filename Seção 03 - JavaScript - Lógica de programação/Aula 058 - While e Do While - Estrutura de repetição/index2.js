
// essa função, vai retornar um número aleatório dentro do intervalo máximo
// e mínimo que receber
function random (min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;

// Pega o valor aleatório do intervalo defindo e exibe
let rand = random(min, max);
console.log(rand);

// Vai buscar um número aletório dentro do intervalo definido até que 
// esse retorno aleatório seja 10
while (rand !== 10) {
  rand = random(min, max);
  console.log(`Valor de rand: ${rand}`);
}

console.log('Finalizou')