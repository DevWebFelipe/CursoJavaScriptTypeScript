function mostrarData (data) {
  console.log(data.toString());
}

function getDiaSemana (indice) {
  const diasSemana = ['Domingo', 'Segunda', 'Terça',
  'Quarta', 'Quinta', 'Sexta', 'Sábado']
  return diasSemana[indice];
}

//3 formas de mandar a data

/* Calculando por milisegundos

Dessa forma a data inicial é 01/01/1970, que é a data incial unix
a partir dessa data, então pode-se calcular outras datas com base nos milisegundos

*/
const tresHoras = 60 * 60 * 3 * 1000;
const dataCalcular = new Date(tresHoras);
mostrarData(dataCalcular);

/* Passando a data

1º Ano
2º Mês - (-1, se quer mês 10, tem que passar o mês como 9)
3º Dia  - (Do dia pra trás, eu posso omitir, aí preenche tudo com zero, omitindo o dia, pega o primeiro dia do mes)
4º Hora - (Hora tem 60 minutos, mas só conta até 59, então se eu passar 60 ou mais, vai pular o dia)
5º Minuto - (Assim como a hora, os demais funcionam da mesma maneira, se eu passar 60 minutos, pula a hora)
6º Segundo
7º Milésimo de segundo (Até 999, se passar, vai mudar o segundo)

OBS: Precisa de no mínimo dois parâmetros, que seriam o mes e ano, caso passe somente o ano
vai ser considerado como milisegundos, e aí calcula como no primeiro exemplo

*/
const dataMontar = new Date(1994, 9, 23, 11, 03, 60, 1500);
mostrarData(dataMontar);

/* Com string

Nesse caso vou passar da seguinte maneira '1994-10-23 11:03:00' ou '1994-10-23T11:03:00'
ou ainda com milisegundos '1994-10-23T11:03:00.999'

*/

const dataString = new Date('1994-10-23 11:03:00');
mostrarData(dataString);

/* Extraindo informações da data */
console.log();
console.log();
const dataExtrairDados = new Date('2022-07-07 10:15:03.586');
getDadosData(dataExtrairDados);

function getDadosData(dataExtrairDados) {
  console.log('Dia:', dataExtrairDados.getDate()); 
  console.log('Mês:', dataExtrairDados.getMonth() + 1); //Mês é índiece, então se quer o mês real, mês + 1
  console.log('Ano:', dataExtrairDados.getFullYear());
  console.log('Hora:', dataExtrairDados.getHours()); 
  console.log('Minuto:', dataExtrairDados.getMinutes());
  console.log('Segundos:', dataExtrairDados.getSeconds());
  console.log('Milésimo de segundos:', dataExtrairDados.getMilliseconds()); 
  console.log('Dia semana(índice):', dataExtrairDados.getDay());
  console.log('Dia semana(nome):', getDiaSemana(Number(dataExtrairDados.getDay())));
}

//Apenas um exemplo, vou capturar os milésimos de seungdos a partir da data unix, 
//depois executar as mesmas linhas acima, só que agora passando os mílésimos de segundos
console.log();
console.log();
console.log(Date.now()); //Quando rodei, resultou isso '1661724178565', como continua contando, nunca mais vai retornar o mesmo valor
const dataMilesimosSegundos = new Date(1661724435348);
getDadosData(dataMilesimosSegundos);