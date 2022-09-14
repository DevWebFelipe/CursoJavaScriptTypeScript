//Pegar o ID e o resto do objeto, sendo o ID como uma chave primaria
//Manter a mesma ordem de cadastro do array pessoas
//Manter o ID como number
const pessoas = [
  {id: 3, nome: 'Felipe'},
  {id: 2, nome: 'Isis'},
  {id: 1, nome: 'Giulia'}
]


const novasPessoas = {};
for (const pessoa of pessoas) {
  const {id} = pessoa;
  novasPessoas[id] = {...pessoa};
}
console.log('Assim vai pegar o ID como string e o resto do objeto e também vai reordenar');
console.log(novasPessoas);

console.log();
console.log('Assim vai pegar os campos do objeto');
for (const {id, nome} of pessoas) {
  console.log(id, nome)
}

const novasPessoasUm = new Map();
for (const pessoa of pessoas) {
  const {id} = pessoa;
  novasPessoasUm.set(id, {...pessoa});
}

console.log();
console.log('Assim vai pegar o ID como number, manter a ordem que tiver no Array e trazer o resto do objeto');
console.log(novasPessoasUm);
console.log();
console.log('Pegar uma pessoa específica pelo ID');
console.log(novasPessoasUm.get(2));

console.log();
console.log('Interando sobre o MAP');

for (const pessoa of novasPessoasUm) {
  console.log(pessoa);
}

console.log();
console.log('Interando sobre o MAP e pegando campos específicos');

for (const [identifier, {id, nome}] of novasPessoasUm) {
  console.log(identifier, id, nome);
}


console.log();
console.log('Interando sobre o MAP e pegando as chaves');

for (const pessoa of novasPessoasUm.keys()) {
  console.log(pessoa);
}

console.log();
console.log('Interando sobre o MAP e pegando os valores');

for (const pessoa of novasPessoasUm.values()) {
  console.log(pessoa);
}

console.log();
console.log('Deletando pessoas por chave');
novasPessoasUm.delete(2);
console.log(novasPessoasUm);
