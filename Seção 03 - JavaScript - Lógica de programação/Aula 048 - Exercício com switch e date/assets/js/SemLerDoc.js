function setZeroEsquerda (numero) {
  return numero <= 9 ? `0${numero}` : numero
}

function getNomeDiaSemana (indice) {
  switch (indice) {
    case 0: return 'Domingo';
    case 0: return 'Segunda Feira';
    case 0: return 'Terça Feira';
    case 0: return 'Quarta Feira';
    case 0: return 'Quinta Feira';
    case 0: return 'Sexta Feira';
    case 0: return 'Sábado';
  }
}

function getNomeMesAno (indice) {
  switch (indice) {
    case 0: return 'Janeiro';
    case 1: return 'Fevereiro';
    case 2: return 'Março';
    case 3: return 'Abril';
    case 4: return 'Maio';
    case 5: return 'Junho';
    case 6: return 'Julho';
    case 7: return 'Agosto';
    case 8: return 'Setembro';
    case 9: return 'Outubro';
    case 10: return 'Novembro';
    case 11: return 'Dezembro';
  }
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