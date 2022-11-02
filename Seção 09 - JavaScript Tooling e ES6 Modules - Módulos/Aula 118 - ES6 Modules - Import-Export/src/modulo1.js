const nome = 'Felipe';
const sobrenome = 'Texeira';
const idade = 28;

function soma(x, y) {
  return x + y;
}

export function subtrai(x, y) {
  return x - y;
}

export default class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

export function multiplica(x, y) {
  return x * y;
}

export { nome, sobrenome, idade, soma as somaImportado };
//export { nome as defaut, sobrenome, idade, soma as somaImportado };

//só será exportado, o que for seguido de EXPORT