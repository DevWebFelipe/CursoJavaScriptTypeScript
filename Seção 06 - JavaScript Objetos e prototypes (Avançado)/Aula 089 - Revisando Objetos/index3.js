const pessoa1 = new Object();
pessoa1.nome = 'Felipe';
pessoa1.sobrenome = 'Texeira';
pessoa1.idade = 28;
pessoa1.falarNome = function() {
  return `${this.nome} está falando seu nome`;
}
pessoa1.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}

const pessoa2 = {
  nome: 'Felipe',
  sobrenome: 'Texeira',
  idade: 28,
  falarNome: function() {
    return `${this.nome} está falando seu nome`;
  },
  getDataNascimento: function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
  }
}  

//visualizar todas as chaves de um objeto
console.log('********** Construtor **********');
for (let chave in pessoa2) {
  //Agora que peguei cada chave, posso usar ela como notação de colchetes
  //para trazer o valor contigo em cada
  console.log(`${chave}: ${pessoa1[chave]}`);
}

console.log();
console.log();

console.log('*********** Literal ************');
for (let chave in pessoa2) {
  console.log(`${chave}: ${pessoa2[chave]}`);
}