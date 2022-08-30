/*
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
*/

// 1º Criar uma variável de controle
// 2º Condição para parar o FOR
// 3º Incrementar ou Decrementar a variável de controle
for (let mI = 0; mI <= 20; mI++) {
  let texto = 'Linha';
  
  if (mI < 10) {
    texto = `${texto} 0${mI}`
  } else {
    texto = `${texto} ${mI}`;
  }

  console.log(texto);
}
console.log();

// se eu quiser pular de 10 em 10 por exemplo, ou qualquer outro intervalo
// que eu queira, 5 em 5, 3 em 3
for (let mI = 0; mI <= 20; mI += 10) {
  let texto = 'Linha';
  
  if (mI < 10) {
    texto = `${texto} 0${mI}`
  } else {
    texto = `${texto} ${mI}`;
  }

  console.log(texto);
}
console.log();

// posso fazer começar de um número negativo
for (let mI = -100; mI <= 20; mI += 10) {
  let texto = 'Linha';
  
  if (mI < 10 && mI >= -9) {
    texto = `${texto} 0${mI}`
  } else {
    texto = `${texto} ${mI}`;
  }

  console.log(texto);
}
console.log();

// posso fazer começar de um número mais alto e decrementar
for (let mI = 100; mI >= 10; mI -= 10) {
  let texto = 'Linha';
  
  if (mI < 10) {
    texto = `${texto} 0${mI}`
  } else {
    texto = `${texto} ${mI}`;
  }

  console.log(texto);
}
console.log();

// pegar os números pares
for (let mI = 0; mI <= 10; mI++) {
  //const par = mI % 2 === 0;  // mI %(módulo, ou seja, o resto da divisão) ===(é igual) 0
  const par = mI % 2 === 0 ? 'par' : 'ímpar'; //usando operador ternário, ? (se condição verdadeira) 'par' (se não) 'ímpar'
  
  let texto = 'Linha';
  
  if (mI < 10) {
    texto = `${texto} 0${mI}`
  } else {
    texto = `${texto} ${mI}`;
  }

  console.log(texto, par);
}
console.log();

// percorrer um Array
const array = ['Maça', 'Pera', 'Laranja', 'Melância', 'Melão'];

for (let mI = 0; mI < array.length; mI++) {
  let texto = 'Índice';
  
  if (mI < 10) {
    texto = `${texto} 0${mI}`
  } else {
    texto = `${texto} ${mI}`;
  }

  texto = `${texto} = ${array[mI]}`;

  console.log(texto);
}
console.log();