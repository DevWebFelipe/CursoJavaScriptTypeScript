function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitConnection(message, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof message !== 'string') {
        reject(new Error('Não foi possível abrir o sistema'));
        return
      }

      resolve(message.toUpperCase() + ' - Passei na promise');
    }, time);
  });
}

waitConnection('Stage 1', rand())
  .then((value) => {
    console.log(value);
    return waitConnection('Stage 2', rand());
  })
  .then(value => {
    console.log(value);
    return waitConnection('Stage 3', rand());
  })
  .then(value => {
    console.log(value);
    return value;
  })
  .then(value => { console.log(`Last stage: ${value}`) })
  .catch(e => console.log(`ERRO: ${e}`));


//Usando Async e Await para resolver
async function execute() {
  try {

    //Removido await para ver o estado da promise, nesse caso, o log vai mostrar o estado {<pending>}
    //que quer dizer pendente, ou seja, iniciou a execução, mas ainda não concluiu
    const stage1 = /*await*/ waitConnection('async Stage 1', 1000);
    console.log(stage1);

    setTimeout(function() {
      console.log('Essa promisse estava <pending> ' + stage1);
    }, 1100);

    const stage2 = await waitConnection(2, rand());
    console.log(stage2);

    const stage3 = await waitConnection('async Stage 3', rand());
    console.log(stage3);

    console.log(`async Last stage: ${stage3}`)

  } catch(e) {
    console.log(e);
  }
}

execute();

// PENDING -> pendente
// FULLFILLED -> resolvida
// REJECTED -> rejeitada

const teste2 = waitConnection('Teste', 5000);
console.log(teste2);