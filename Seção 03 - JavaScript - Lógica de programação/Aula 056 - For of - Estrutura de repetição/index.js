const pessoa = {
  nome: 'Felipe',
  sobrenome: 'Texeira'
}

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}