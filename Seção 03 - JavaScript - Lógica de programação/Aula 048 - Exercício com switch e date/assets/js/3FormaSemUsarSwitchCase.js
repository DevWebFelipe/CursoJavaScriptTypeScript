function setZeroEsquerda (numero) {
  return numero <= 9 ? `0${numero}` : numero
}

function getNomeDiaSemana (indice) {
  const diasSemana = ['Domingo', 'Segunda Feira', 'Terça Feira',
    'Quarta Feira', 'Quinta Feira', 'Sexta Feira', 'Sábado'];
  
  return diasSemana[indice]
}

function getNomeMesAno (indice) {
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 
    'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 
    'Dezembro'];

  return meses[indice];
}

function getDataHoraFormatada (data) {
  const dataMes = data.getDate();
  const mes = data.getMonth();
  const ano = data.getFullYear();
  const horas = data.getHours();
  const minutos = data.getMinutes();
  const indiceDiaSemana = data.getDay();  
  
  const nomeDiaSemana = getNomeDiaSemana(indiceDiaSemana);
  const nomeMesAno = getNomeMesAno(mes);

  return (
    `${nomeDiaSemana}, ${dataMes} de ${nomeMesAno} de ${ano}, 
    ${setZeroEsquerda(horas)}:${setZeroEsquerda(minutos)}`
  );
}

const dataHoraAtuais = new Date();
const dataHoraFormatada = getDataHoraFormatada(dataHoraAtuais);

  const resultado = document.querySelector('.data');
  resultado.innerHTML = '';
  resultado.innerHTML = dataHoraFormatada;