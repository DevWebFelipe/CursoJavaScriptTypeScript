
function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
   
    inicia() {
      this.clickBotao();
      this.calculaComEnter();
    },
   
    clickBotao() {
      document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-limpar')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-deletar')) {
          this.apagarUltimoDigito();
        }

        if (el.classList.contains('btn-igual')) {
          this.calcular();
        }        
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagarUltimoDigito() {
      this.display.value = this.display.value.slice(0, -1);
    },

    calcular() {
      let calculo = this.display.value;

      try {
        calculo = eval(calculo);

        if (!calculo) {
          alert('Calculo inválida');
          return;          
        }

        this.display.value = String(calculo);
      } catch(e) {
        alert('Calculo inválida');
        return
      }
    },

    calculaComEnter() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.calcular();
        }
      });
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();