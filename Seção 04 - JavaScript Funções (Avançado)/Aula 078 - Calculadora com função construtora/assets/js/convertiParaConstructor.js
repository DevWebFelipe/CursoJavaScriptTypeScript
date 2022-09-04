
function Calculadora() {
  const display = document.querySelector('.display');

  this.inicia = function () {
    clickBotao();
    calculaComEnter();
  };

  clickBotao = function () {
    document.addEventListener('click', (e) => {
      const el = e.target;

      if (el.classList.contains('btn-num')) {
        btnParaDisplay(el.innerText);
      }

      if (el.classList.contains('btn-limpar')) {
        clearDisplay();
      }

      if (el.classList.contains('btn-deletar')) {
        apagarUltimoDigito();
      }

      if (el.classList.contains('btn-igual')) {
        calcular();
      }
    });
  };

  btnParaDisplay = function (valor) {
    display.value += valor;
  };

  clearDisplay = function () {
    display.value = '';
  };

  apagarUltimoDigito = function () {
    display.value = display.value.slice(0, -1);
  };

  calcular = function () {
    let calculo = display.value;

    try {
      calculo = eval(calculo);

      if (!calculo) {
        alert('Calculo inválida');
        return;
      }

      display.value = String(calculo);
    } catch (e) {
      alert('Calculo inválida');
      return
    }
  };

  calculaComEnter = function () {
    display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        calcular();
      }
    });
  }
};

const calculadora = new Calculadora();
calculadora.inicia();