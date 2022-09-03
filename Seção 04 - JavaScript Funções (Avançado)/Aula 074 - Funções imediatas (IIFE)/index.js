// IIFE -> Immediately invoked function expression
(function (idade, peso, altura) {
  console.log(123456);
  const nome = 'Felipe';

  console.log(nome);

  
  function criaNome(nome) {
    const sobrenome = 'Texeira';
    return `${nome} ${sobrenome}`;
  };

  function falaNome(nome) {
    console.log(criaNome(nome));
  };

  falaNome('Isis');

  console.log(idade, peso, altura);
})(28, 127, 1.8);

const nome = 'Isis';
console.log(nome);