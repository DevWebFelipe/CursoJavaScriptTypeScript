/*
module.exports = function(x, y) {
  return x * y;
}

console.log(module.exports(5, 6));
*/

module.exports = class Cachorro {
  constructor(nome) {
    this.nome = nome;
  }

  latir() {
    console.log(`${this.nome} está latindo`)
  }
}