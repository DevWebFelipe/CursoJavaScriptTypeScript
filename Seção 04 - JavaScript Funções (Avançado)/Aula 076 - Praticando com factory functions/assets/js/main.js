//Exercício para treinar Factory function

//Lembrando que cada métodp de um objeto, cada function, cada variável, enfim
//tudo é chamado de chave, e cada chave, para ser chamada dentro do próprio objeto
//precisa ser chamada através do THIS (que assume a instância de quem o chamar)
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
      this.display.value += valor; // += vai concatenar o texto que já tiver com o valor que veio na chamada 
      //desse método
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
        calculo = eval(calculo); //foi usado porque o foco era entender uma função de fábrica
        //mas o ideal, é sempre evitar o eval, porque ele pode gerar uma série de problemas
        //ele transforma o que recebe em um script(mais ou menos isso) e executa
        //para usar, teria que ter uma série de validações para evitar a execução de códigos
        //maliciosos

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
      this.display.addEventListener('keyup', (e) => { //captura um evento do display que é acionado quando 
        //solta uma tecla pressionada
        if (e.keyCode === 13) { //se a tecla solta após pressionada for o enter, então executa o cálculo
          this.calcular();
        }
      });
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();


/*
  //Copiei pra cá, só pra ter outro exemplo alé do BIND, e também pra ficar mais limpo, estava muito poluído
  //com comentários

  //Acima vai ficar um exemplo com Arrow Function

    //no clickBotao, vou capturar todo evento de click do documento
    clickBotao() {
      document.addEventListener('click', function(e) {
        //como vou capturar todo evento de click, preciso verificar o que está sendo
        //clicado, para isso, uso o e.target ('e' da variável do evento passada acima)
        //com isso, consigo verificar o que stá sendo clicado no documento
        const el = e.target;

        //sabendo o que está sendo clicado, posso verificar se é um elemento que vai ter algum
        //efeito ao ser clicado ou não, nesse caso, vou verificar pela lista de classes associadas
        //a esse elemento, de modo que se o botão tiver a classe 'btn-num' por exemplo, vou executar alguma ação
        //caso contrário, nada ocorrerá
        if (el.classList.contains('btn-num')) {
          //nesse caso em específico, o THIS passou pelo seguinte processo, no calculadora.inicia() ele
          //assumiu a instância do criaCalculadora, só que quando entrou no clicBotao, o documento.addEventListener
          //acionou um outro evento, criando outro método, onde agora o THIS passou a assumir uma instância do 
          //document, ou seja, o This, sempre irá assumir a instância de quem chamou o método onde ele está sendo 
          //usado
          this.btnParaDisplay(el.innerText); //el.innerText = Valor contido no texto do elemento clicado
        } 
      }.bind(this)); //Para que o document use a função THIS com a instância do criaCalculadora, é 
      //necessário usar um método que existe em todas as funções chamado BIND, nele eu simplesmente passo o THIS
      //agora, dentro do document.addEventListener, o THIS passará a ser o mesmo THIS que chamou a função clickBotao
      //ou seja, o BIND, passou a instância que o THIS já tinha para ser usada dentro do método que acionou o BIND
    },

*/