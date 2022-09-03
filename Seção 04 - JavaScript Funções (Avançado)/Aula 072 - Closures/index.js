function retornaFuncao() {
  const nome = 'Felipe';
  return function() {
    return nome;
  }
}

const funcao = retornaFuncao();

console.log(funcao());

function retornaFuncao2(nome) {
  return function() {
    return nome;
  }
}

const funcao1 = retornaFuncao2('Giulia');
const funcao2 = retornaFuncao2('Isis');

console.log(funcao1());
console.log(funcao2());