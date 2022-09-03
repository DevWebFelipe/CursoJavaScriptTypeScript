//a primeira função FALAFRASE retorna a segunda função
//ao executar a segunda função, obten-se o resultado das duas funções.
function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }

  return falaResto;
}

//isso
const olaMundo = falaFrase('Olá');
console.log(olaMundo('Mundo'));
//é igual a isso
const fala = falaFrase('Olá');
const resto = fala('Mundo');
console.log(resto);