const nome = 'Felipe';
const obj = {nome};
const novoObj = {...obj};
console.log(novoObj);
const teste = '';
//---------------------------------------------
//---------------------------------------------
class Pessoa{
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}