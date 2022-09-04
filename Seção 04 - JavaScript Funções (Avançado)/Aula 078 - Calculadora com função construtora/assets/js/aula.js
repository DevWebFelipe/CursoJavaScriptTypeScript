//A partir de agora, tentar usar ArrowFunction quando possível - () => {Código}
//Se eu tiver só um parâmetro na função, posso remover os parenteses
//Se eu tiver só uma instrução na função, posso remover as chaves

//Tentar usar tudo em inglês, mas por enquanto, usar em português, só para
//ir entendendo

function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.clickBotao();
    this.calculaComEnter();
  };

  this.clickBotao = () => {
    document.addEventListener('click', (event) => {
      const element = event.target;

      if (element.classList.contains('btn-num')) this.btnParaDisplay(element);
      if (element.classList.contains('btn-limpar')) this.limparDisplay();
      if (element.classList.contains('btn-deletar')) this.apagarUltimoDigito();
      if (element.classList.contains('btn-igual')) this.calcular();
    });
  };

  //Se eu tiver só um parâmetro na função, posso remover os parenteses
  //Se eu tiver só uma instrução na função, posso remover as chaves
  //Não foi falado nada sobre o parênteses, mas fica mais claro para entender a instrução
  this.btnParaDisplay = elemento => {
    this.display.value += elemento.innerText;
    this.display.focus(); //foi preciso fazer isso, porque o comportamento do enter
    //é clicar no ultimo elemento focado, então se eu estou clicando nos numeros 
    //e clico pressiono o enter ele não efetua o calculo, ao invés disso
    //ele clica no ultimo elmento focado
  };

  this.limparDisplay = () => (this.display.value = '');
  this.apagarUltimoDigito = () =>  (this.display.value = this.display.value.slice(0, -1));

  this.calcular = () => {
    try {
      const calculo = eval(this.display.value);

      if (!calculo) {
        alert('Calculo inválida');
        return;
      }

      this.display.value = String(calculo);
    } catch (e) {
      alert('Calculo inválida');
      return
    }
  };

  this.calculaComEnter = () => {
    this.display.addEventListener('keypress', e => {
      if (e.keyCode !== 13) return;

      this.calcular();
    });
  }
};

const calculadora = new Calculadora();
calculadora.inicia();