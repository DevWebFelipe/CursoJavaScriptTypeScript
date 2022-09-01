function retornaHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',   // Formata a hora com 2 dígitos caso menor que 10
    minute: '2-digit', // Formata o minuto com 2 dígitos caso menor que 10
    second: '2-digit', // Formata o segundo com 2 dígitos caso menor que 10
    hour12: false      // Força mostrar no formato 24h, assim não vem o AM PM 
  });
}

/*

Dessa maneira estou criando uma função, onde o único intuito é chamar outra 
função para então eu usar ela no setInterval, mas isso se torna muito trabalhoso
por isso, pode-se usar uma procedure anônima

function interval() {
  console.log(retornaHora());
}

setInterval(interval, 1000);
*/

/*

//Usando procedure anônima
setInterval(function () {
  console.log(retornaHora());
}, 1000);

*/

//também se pode jogar isso em uma variável
const timer = setInterval(function () {
  console.log(retornaHora());
}, 1000);

//em runtime vai ser umsado algo no evento clicque ou alguma coisa assim
//que vai chmar um clearInterval, passando o nome do intervalo que quero
//parar, ele não será mais executado
setTimeout(function() {
  clearInterval(timer)
}, 3000);

setTimeout(function() {
  console.log('Timer finalizado')
}, 5000);