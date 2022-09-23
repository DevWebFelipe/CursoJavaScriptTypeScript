//para que seja executado na ordem, independente de qualquer coisa,
//pode-se usar função de call back
/*
function waitConnection(message, time, cb) {
  setTimeout(() => {
    console.log(message);
    if(cb) cb();
  }, time);
}

waitConnection('Frase 1', rand(1, 3), function() {
  waitConnection('Frase 2', rand(1, 3), function() {
    waitConnection('Frase 3', rand(1, 3), function() {
      waitConnection('Frase 4', rand(1, 3));
    });
  });
});
*/

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitConnection(message, time) {
  //são recebidos dois parametros
  //RESOLVE -> quer dizer que o código foi executado corretamente
  //REJECT -> o código deu erro e será rejeitado
  return new Promise((resolve, reject) => {
    //if (typeof message !== 'string') reject('Não foi possível abrir o sistema');
    if (typeof message !== 'string') reject(new Error('Não foi possível abrir o sistema'));

    setTimeout(() => {
      //console.log(message);
      resolve(message); //pode receber um único parametro, que pode ser retornado na funçao
    }, time);
  });
}

//Mas o idieal, é resolver isso com promisse
//THEN -> Captura o retorno quando o função é executada completamente
//CATCH -> Catptura o erro quando a função não pode ser completamente executada
waitConnection('Conectando ao banco de dados', rand(1, 3)) //assim como na fluent interface, possi usar o ponto e ir para nova linha
  .then(result => {
    console.log(result);
    return waitConnection('Buscando tabelas do banco de dados', rand(1, 3));
  })
  .then(result => {
    console.log(result);
    return waitConnection('Varrendo registros das tabelas', rand(1, 3));
  })
  .then(result => {
    console.log(result);
    return waitConnection(99, rand(1, 3));
  })
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log('Erro:', e);
  });

console.log('Acessando IP do banco de dados')