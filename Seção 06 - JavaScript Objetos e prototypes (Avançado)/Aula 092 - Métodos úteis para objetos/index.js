const produto = {nome: 'Caneca', preco: 1.8};

//dessa forma, ambas as constantes apontam para o mesmo endereço na memória
//ou seja, tudo que for alterado em um, altera em outro, pois se trata de um 
//objeto apenas, porém, dois endereçadores que acessam esses mesmo objeto
const outroProduto1 = produto;

//para fazer uma cópia realmente e ter dois endereços na memória, pode-se usar
//o operador SPREAD, assim como no array, só que além de copiar as chaves do 
//objeto PAI, eu também posso adicionar novas chaves, caso não queira
//é só deixar { ...ObjetoCopiar }
const outroProduto = {
  ...produto,
  material: 'Moletom'
};

produto.nome = 'Roupa';
console.log(produto);
console.log(outroProduto);

outroProduto.nome = 'Calça';
outroProduto.preco = 2.9;
outroProduto.material = 'Lã';
console.log(produto);
console.log(outroProduto);

console.log();
console.log();

//Outra forma de fazer essa cópia do endereçamento de memória, é usar o assigned
//para usar o assign, primeiro eu passo um objeto vazio, que vai ser onde o novo
//objeto vai ser criado, basicamente, estou dizendoq quero reservar um endereçamento
//vazio para receber a instância do novo objeto, depois eu passo o objeto que será
//criado nesse novo endereçamento
const produtoAssigned = Object.assign({}, produto);
console.log(produto);
console.log(produtoAssigned);
produtoAssigned.nome = 'Bermuda';
produtoAssigned.preco = 2.5;
console.log(produto);
console.log(produtoAssigned);

console.log();
console.log();

//Outra forma ainda, é pegar cada chave, criando novas chaves, mas é a pior forma
//possível, tem que ver se vai realmente útil
const produtosFormaManual = {nome: produto.nome, preco: produto.preco};
console.log(produto);
console.log(produtosFormaManual);
produtosFormaManual.nome = 'Bola';
produtosFormaManual.preco = 3.8;
console.log(produto);
console.log(produtosFormaManual);