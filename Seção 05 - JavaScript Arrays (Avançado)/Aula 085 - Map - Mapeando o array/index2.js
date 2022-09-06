

const pessoas = [
  {nome: 'Felipe', idade: 28},
  {nome: 'Giulia', idade: 25},
  {nome: 'Isis', idade: 0},
  {nome: 'Amora', idade: 2},
  {nome: 'Amelia', idade: 1},
]

//Para cada índice, retorne apenas uma string com o nome da pessoa
const pessoasArray = pessoas.map(valor => valor.nome);
console.log(pessoasArray);

//Remova apenas a chave "nome" do objeto

// Forma 1 de fazer
/*const idadeArray = pessoas.map(valor => {
  delete valor.nome;  //vai deletar a chave nome do objeto
  return valor; //assim, posso retornar o próprio objeto que já vai estar sem a chave nome
});*/

//Forma 2 de fazer
/*const idadeArray = pessoas.map(valor => {
  return { idade: valor.idade }; //retornar um objeto passando somente a idade
  //do objeto original
});*/

//Forma 3 de fazer
const idadeArray = pessoas.map(valor => ({ idade: valor.idade })); //aqui ao transformar em 
//arrow function, iria dar um problema, porque objeto tem chaves, então o JS iria
//interpretar como se fossem chaves da função, por isso usa o parênteses, 
//assim, vai ser transformado em uma expressão, de modo que vai funcionar sem o JS interpretar
// as chaves de forma errada
console.log(idadeArray);


//Adicione uma chave id em cada objeto
const idArray = pessoas.map((valor, indice) => {
  //Dessa forma, vai alterar o objeto original, então se não quiser isso
  //tem que criar um novo
  /*valor.id = (indice + 1); //é só chamar um 'novo' campo
  return valor;*/
  const objetoNovo = {...valor}; //fazendo SPREAD do objeto original, vai ser criado um novo,
  //assim ao alterar esse novo, não vai interferir no original
  objetoNovo.id = (indice + 1);
  return objetoNovo;
});
console.log(idArray);
console.log(pessoas)