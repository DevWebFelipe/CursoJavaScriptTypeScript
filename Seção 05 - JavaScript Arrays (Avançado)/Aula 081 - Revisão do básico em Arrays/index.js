const  nomes = ['Felipe', 'Isis', 'Giulia']; //Arrey literal
console.log('nomes: ', nomes);
console.log();
console.log('Alterado nome Giulia para Francisco');
nomes[2] = 'Francisco'; //Alterado valor do índice 2
console.log('nomes: ', nomes);
console.log();
console.log('deletado valor do ultimo campo do array nomes');
delete nomes[2]; //Deletado valor do índice 2, mas o índice 2 continua existindo, só que está vazio agora
console.log('nomes: ', nomes);
console.log();

//é um valor por referência, ou seja, abaixo novo está recebendo nomes, então tudo que fizer em nomes
//reflete em novo, tudo que fizer em novo, reflete em nomes
console.log('copiado por referencia o array nomes para o array novo');
const novo = nomes;
console.log('deletado ultimo índice do array novo, como é referencia do nomes, afeta ambos');
novo.pop(); //deleta o último índice de um array, nesse caso, vai deletar no novo, mas como é 
//um valor de referencia, também será deletado no nomes, como podemos ver abaixo
console.log('nomes: ', nomes);
console.log('novo: ', novo);

//caso queira copiar o valor de um array para o outro, mas não por referencia, ou seja
//após copiado, o que for feito em um, não irá interferir no outro, uso o operador spred
//que no caso, vai simplesmente pegar os valores de um array, e jogar para outro array
const novoCopia = [...novo];
console.log();
console.log('Copiado novo para novoCopia');
novo.push('Giulia'); //insere um novo índice a um array
console.log('Adicionado "Giulia" ao array novo, que é referencia do nomes, então afeta ambos');
console.log('nomes: ', nomes);
console.log('novo: ', novo);
console.log('novoCopia: ', novoCopia);



const  nomes1 = new Array('Felipe', 'Isis', 'Giulia'); //Essa é uma outra forma de criar um array
//usando um constructor, mas é pouco usado, funciona da mesma forma que o array literal