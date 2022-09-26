function rand(min, max) {
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

//Promise.all 
//Promise.race
//Promise.resolve
//promise.reject

const promises = [
  //'Primeiro valor',
  waitConnection('Promise 1', 3000),
  waitConnection('Promise 2', 500),
  waitConnection('Promise 3', 1000),
  //'Outro valor'
];

//Resolve todas as promises e retorna tudo no final na ordem que foi passado no array
//Se uma das promessas for rejeitada, todas serão, independente de quantas sejam ou qual deu erro
Promise.all(promises)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });

//A primeira Promise que resolver, será retornada, sendo ela rejeitada ou não e independente de quantas tenha 
//Mas isso não significa que as demais não serão executadas, a execução continua normalmente
Promise.race(promises)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });


//exemplo carregando página
function downloadPage() {
  const emCache = true;

  if(emCache) {
    return Promise.reject('Página em cache');    
  } else {
    return waitConnection('Baixar a página', 3000)
  }
}

downloadPage ()
  .then(dataPage => {
    console.log(dataPage);
  })
  .catch(e => console.log(`ERRO: ${e}`));