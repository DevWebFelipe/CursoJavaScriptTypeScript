function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('Novo', ''); //intercepta o valor, valida
      //da um replace tirando Novo do nome do produto
      nome = valor; //seta o valor do nome com o valor recebido
    }
  }
};

const p1 = criaProduto('Camiseta');
p1.nome = 'Novo Produto alterou nome';
console.log(p1);
console.log(p1.nome);