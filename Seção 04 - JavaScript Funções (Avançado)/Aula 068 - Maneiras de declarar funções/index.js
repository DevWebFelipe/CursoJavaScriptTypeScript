
// Declaração de função (Function hoisting)

/*
  HOISTING - siginifca que a função vai para o topo do arquivo
  de modo que posso usar ela em qualquer lugar, não importa se estou chamando
  ela antes ou depois de declarar
*/
falaOi();

function falaOi() {
  console.log('Oi');
}

// First-class objects (Objetos de primeira classe)

const nome = function () {
  console.log('é uma função de dados')
};

nome();

function executarDado(funcao) {
  console.log('vou executar a função abaixo')
  funcao()
}

executarDado(nome);

// Arrow function

const arrowFunction = () => {
  console.log('Sou uma arrow function')
}

arrowFunction()

// funções em objetos
const objeto = {
  falar: function() {
    console.log('estou falando')
  },
  falar2() {
    console.log('estou falando (direto)')
  }  
}

objeto.falar();
objeto.falar2();