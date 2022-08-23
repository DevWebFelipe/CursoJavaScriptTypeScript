const a = {
  nome: 'Felipe',
  sobrenome: 'Texeira'
}

//esses 3 pontos se chamam spred, eles servem para definir que o valor
//da variável será apenas copiado e não compartilhado
const b = {...a};
const c = a;

a.nome = 'Teste'
console.log(a);
console.log(b);
console.log(c);