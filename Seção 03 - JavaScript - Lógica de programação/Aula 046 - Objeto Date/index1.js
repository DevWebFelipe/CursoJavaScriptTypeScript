function zeroEsquerda (numero) {
  return numero >= 10 ? numero : `0${numero}`
}

function formataData(data) {
  const dia = zeroEsquerda(data.getDate());
  const mes = zeroEsquerda(data.getMonth() + 1);
  const ano = zeroEsquerda(data.getFullYear());
  const horas = zeroEsquerda(data.getHours());
  const minutos = zeroEsquerda(data.getMinutes());
  const segundos = zeroEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
}

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);