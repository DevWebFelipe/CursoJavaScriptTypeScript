// interar = varrer?
const produto = {nome: 'Caneca', preco: 1.8};

//para ver as configurações de uma propriedade, basta passar o objeto
//e a propriedade do objeto cujas configurações quero visualizar
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(Object.keys(produto)); //retorna todas as chaves do objeto
console.log(Object.values(produto)); //retorna todos os valores de cada 
//chave do objeto

//esse cara vai permitir que eu intere sobre o retorno
console.log(Object.entries(produto)); //retorna um array com outro array
//para cada chave e valor 

//dessa forma, vai varrer cada chave e retornar um array com a chave e
//o valor da chave
for (let entry of Object.entries(produto)) {
  console.log(entry);
}

//isso se chama desctructor, está retirando individualmente os valores
//do array retornado, chave e valor da chave
for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}

//outra forma de fazer a mesma coisa da função acima, porém, mais 
//simplificada em termos de entendimento, para quem ainda está se
//acostumando, desta forma, estou pegando a posição 0 e 1 de cada
//array retornado, que seria a chave e o valor da chave
for (let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}