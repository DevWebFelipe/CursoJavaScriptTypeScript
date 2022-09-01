function criaHoraEmSegundos(segundos) {
  const data = new Date(segundos * 1000); //transformar em milésimos de segundos
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraEmSegundos(segundos);
  }, 1000);
}

iniciar.addEventListener('click', function(event) {
  relogio.classList.remove('pausado');
  clearInterval(timer);
  iniciaRelogio();
})

pausar.addEventListener('click', function(event) {
  clearInterval(timer);
  relogio.classList.add('pausado');
})

zerar.addEventListener('click', function(event) {
  clearInterval(timer);
  relogio.classList.remove('pausado');
  relogio.innerHTML = '00:00:00';
  segundos = 0;
})