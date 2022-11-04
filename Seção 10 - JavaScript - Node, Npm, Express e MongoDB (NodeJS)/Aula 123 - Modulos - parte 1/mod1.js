const nome = 'Felipe';
const sobrenome = 'Texeira';

const falaNome = () => nome + ' ' + sobrenome;

/*module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;*/

exports.primeiroNome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

this.qualquerCoisa = 'O que eu quiser exportar';

//console.log(module.exports);

const teste1 = 'teste 1';
const teste2 = 'teste 2';

module.exports = {
  teste1, teste2
}