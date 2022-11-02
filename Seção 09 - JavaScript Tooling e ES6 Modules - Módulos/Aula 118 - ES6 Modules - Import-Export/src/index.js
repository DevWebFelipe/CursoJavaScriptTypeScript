
//import qualquerNome, {nome, sobrenome, idade, soma} from './modulo1';

import Pessoa, {nome as nomeTeste, sobrenome as sobrenomeTeste} from './modulo1';

const p2 = new Pessoa(nome, sobrenome);
console.log(p2);
//vai importar o que tiver como default

import * as MeuModulo from './modulo1';
//vai importar tudo

import { nome as nomeImportado, sobrenome as sobrenomeImportado, idade as idadeImportado, somaImportado, subtrai } from './modulo1';
//se usar o as no export, tem que ser importado aqui com o exano nome utilizado lá

const nome = 'Isis';
const sobrenome = 'Gabrielle Texeira';
const idade = 0.3;

function soma(x, y) {
  return x + y;
}

console.log();
console.log(`Nome: ${nome}`);
console.log(`Sobrenome: ${sobrenome}`);
console.log(`Idade: ${idade}`);
console.log(`Resultado: ${soma(7, 9)}`);
console.log();
console.log(`Nome importado: ${nomeImportado}`);
console.log(`Sobrenome importado: ${sobrenomeImportado}`);
console.log(`Idade importado: ${idadeImportado}`);
console.log(`Resultado importado: ${somaImportado(5, 5)}`);
console.log();


const p1 = new Pessoa('Giulia', 'Gabrielle Breis Texeira');
console.log(p1);

console.log(`Resultado: ${subtrai(9, 3)}`);

console.log();
console.log(MeuModulo);
console.log();
console.log(qualquerNome);