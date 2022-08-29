const verdadeira = true;

// Let tem escopo de bloco (tudo que ta dentro de chaves{} é independente do que ta fora)
// Com isso, a variável de fora do escopo não é afetada pela variável de dentro do escopo
// e nenhuma LET dentro de um bloco, poderá ser vista de fora dele
// Var só tem escopo de função, ou seja, a variável dentro de um escopo de bloco, afeta
// a variável fora do escopo em todas as ocasiões, exceto quando for uma função

let nome = 'Felipe';
var nome2 = 'Felipe';

console.log('Escopo global:', nome, ' - ', nome2);

// Bloco aninhado, chaves dentro de chaves {função {outra função {if}}}
// O JS vai buscar de dentro para fora, o primeiro que encontrar ele retornará
// então uma função pode usar qualquer variável que estiver no escopo global, 
// mas nenhuma variável dentro de seu escopo, poderá ser usada por ninguém além
// dela própria
if (verdadeira) { //1 escopo de bloco
  let nome = 'Isis';
  console.log('Escopo de bloco:', nome, ' - ', nome2);

  if (verdadeira) { //2 escopo de bloco
    let nome = 'outra coisa'
    console.log('Escopo bloco dentro de outro bloco:', nome, ' - ', nome2);
  }
}

console.log('Escopo global:', nome, ' - ', nome2);

//nesse caso, diferente do VAR, vai dar erro, porque o JS não joga sua decalração para o topo do 
//arquivo
console.log(teste);
let teste = 'teste';


//para funções que comecem com function, também são jogadas para topo do arquivo
// mas tem que ser uma função para isso, caso seja um const que recebe uma função por exemplo
//o JS não vai elevar a declaração para o top do arquivo