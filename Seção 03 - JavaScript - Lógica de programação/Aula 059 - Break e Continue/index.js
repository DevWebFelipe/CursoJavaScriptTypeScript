const numeros = [15, 21, 39, 44, 52, 60, 79, 88, 95];

console.log();
console.log('Com FOR OF');
console.log();
for (let numero of numeros) {
  if (numero < 30) {
    continue; //se um número for menor que 30, vai voltar para o próximo do laço
    //sem passar pelo resto do código do laço
  }

  console.log(numero);

  if (numero > 60) {
    break; //se um número for maior que 60, vai sair do laço, não verificando
    //o restante dos números
  }
}

console.log();
console.log('Com FOR IN');
console.log();

for (let i in numeros) {
  let numero = numeros[i];

  if (numero === 39) {
    console.log('Pulou o número 39');
    continue;
  }

  console.log(numero);

  if (numero === 60) {
    console.log('60 encontrado, saindo do laço...');
    break;
  }
}

console.log();
console.log('Com FOR Clássico');
console.log();

for (let i = 0; i < numeros.length; i++) {
  let numero = numeros[i];

  if (numero === 39) {
    console.log('Pulou o número 39');
    continue;
  }

  console.log(numero);

  if (numero === 60) {
    console.log('60 encontrado, saindo do laço...');
    break;
  }
}

console.log();
console.log('Com WHILE');
console.log();

let i = 0;
while (i < numeros.length) {
  let numero = numeros[i];

  if (numero === 39) {
    console.log('Pulou o número 39');
    i++;
    continue;
  }

  console.log(numero);

  if (numero === 60) {
    console.log('60 encontrado, saindo do laço...');
    break;
  }

  i++;
}

console.log();
console.log('Com DO WHILE');
console.log();

i = 0;
do {
  let numero = numeros[i];

  if (numero === 39) {
    console.log('Pulou o número 39');
    i++;
    continue;
  }

  console.log(numero);

  if (numero === 60) {
    console.log('60 encontrado, saindo do laço...');
    break;
  }

  i++;
} while (i < numeros.length)