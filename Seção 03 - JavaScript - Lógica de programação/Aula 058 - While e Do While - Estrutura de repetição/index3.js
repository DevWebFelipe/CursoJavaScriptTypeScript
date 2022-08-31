

// WHILE DO - Executa depois verifica
// WHILE - Verifica depois executa 

function random (min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;

rand = 10;
// Não vai executar, porque verifica, depois executa, e já vai entrar como falso
console.log('While normal');
while (rand !== 10) {
  rand = random(min, max);
  console.log(`Valor de rand: ${rand}`);
}

// Vai executar, por que executa, depois verifica, então mesmo entrando como false
// vai rodar pelo menos uma vez
console.log('DO While normal');
do {
  rand = random(min, max);  //nesse caso, vai atualizar o rand, então vai executar 
  // diversas vezes até ser 10 novamente, mas sempre vai executar pelo menos uma vez
  console.log(`Valor de rand: ${rand}`);
} while (rand !== 10);