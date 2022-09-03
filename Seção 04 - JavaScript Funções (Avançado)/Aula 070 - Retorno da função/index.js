function soma(a, b) {
  return a + b
}

function soma2(a, b) {
  console.log(a + b)
}

console.log(soma(5, 2));

soma2(6, 9)

function criaPessoa(nome, sobrenoe) {
  return {nome, sobrenoe};
}

const pessoaUm = criaPessoa('Felipe', 'Texeira');
const pessoaDois = {
  nome: 'Felipe',
  sobrenoe: 'Sobrenome'
}

console.log(pessoaUm);
console.log(typeof pessoaUm);
console.log(pessoaDois);
console.log(typeof pessoaDois);