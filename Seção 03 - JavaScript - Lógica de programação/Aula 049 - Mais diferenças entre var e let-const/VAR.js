
const verdadeira = true;

let nome = 'Felipe';
var nome2 = 'Felipe';

// Após redeclarada, ela assume o novo valor para todas as chamadas, indenpendente
// da origem dessa chamada
var nome2 = 'Teixeira'; //redeclarada

console.log('Escopo global:', nome, ' - ', nome2);

if (verdadeira) { //1 escopo de bloco
  var nome2 = 'Amélia'; //redeclarada
  let nome = 'Isis';
  console.log('Escopo de bloco:', nome, ' - ', nome2);

  if (verdadeira) { //2 escopo de bloco
    var nome2 = 'Amora'; //redeclarada
    let nome = 'outra coisa'
    console.log('Escopo bloco dentro de outro bloco:', nome, ' - ', nome2);
  }
}

console.log('Escopo global:', nome, ' - ', nome2);

// a função, protegeu a VAR nome2, não deixando que afetasse a VAR nome2 declarada fora de seu escopo
function falaOi () {  
  var nome2 = 'dentro função';  
  return nome2;
}

console.log('Escopo global:', nome, ' - ', falaOi());
console.log('Escopo global:', nome, ' - ', nome2);

//Tudo que é VAR, sofre uma alteração, a sua declaração é jogada para o topo do arquivo, 
//então no exemplo abaixo, não vai dar erro, porém a variável vai ficar como não definida
//porque o JS jogou sua declaração para o topo do arquivo, porém, o valor dela, continuará sendo 
//cetado onde havia sido definido

console.log(teste);
var teste = 'teste';