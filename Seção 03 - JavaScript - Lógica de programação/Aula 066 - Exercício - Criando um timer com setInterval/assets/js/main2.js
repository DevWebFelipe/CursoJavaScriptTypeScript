relogio ();

function relogio () {
  function criaHoraEmSegundos(segundos) {
    const data = new Date(segundos * 1000); //transformar em milésimos de segundos
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraEmSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const elementoClicado = e.target;

    if (elementoClicado.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }
    
    if (elementoClicado.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    } 
    
    if (elementoClicado.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.classList.remove('pausado');
      relogio.innerHTML = '00:00:00';
      segundos = 0;
    }
  });
}