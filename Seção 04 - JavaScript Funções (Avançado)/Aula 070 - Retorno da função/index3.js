function duplica(n) {
  return n * 2
}

function triplica(n) {
  return n * 3
}

function quadriplica(n) {
  return n * 4
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

//as 3 funções acima podem ser resumidas nessa função abaixo

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
};

const mduplica = criaMultiplicador(2);
const mtriplica = criaMultiplicador(3);
const mquadriplica = criaMultiplicador(4);

console.log(mduplica(2));
console.log(mtriplica(2));
console.log(mquadriplica(2));