/*   && -> AND -> E   -> Todas as condições precisam ser verdadeiras
**   || -> OR  -> OU  -> Uma das condições precisa ser verdadeira
**   !  -> NOT -> NÃO -> A condição precisa ser falsa

Sentenças que resultam em false
false - Valor Literal
0  - Zero (Representação de false)
'' - String vazia (Representação de false)
"" - String vazia (Representação de false)
`` - String vazia (Representação de false)
null      - Nulo (Representação de false)
undefined - Indefinido (Representação de false)
NaN       - Não é um número (Representação de false)

qualquer coisa diferente disso, será avaliado como True   */

//Vai retornar o primeiro valor que quebrou a verificação
console.log('Felipe' && 0 && 'Giulia');

//Vai retornar o último valor verdadeiro que encontrou
console.log('Felipe' && true && 'Giulia');

console.log('Giulia' && 'Felipe');
console.log('Giulia' && '' && 'Felipe');
console.log('Giulia' && null && 'Felipe');

function falaOi () {
  console.log('Oi');
}

function retornaOi () {
  return 'Oi';
}

//Isso é uma avalizção de curto circuito, eu executo a função, somente se a variável for verdadeira
//caso não seja, já vai quebrar o código e não vai executar a função
let executarFunction = false;

executarFunction && falaOi();
executarFunction || falaOi();
executarFunction = true;
executarFunction && falaOi();

executarFunction = null;
console.log('Cumprimentou?', (executarFunction && retornaOi()));
console.log('Cumprimentou?', (executarFunction || retornaOi()));

executarFunction = 'Teste';
console.log('Cumprimentou?', (executarFunction && retornaOi()));

//O || OR OU retorna o primeiro valor verdadeiro que encontrar
executarFunction = ''
console.log('1º sentença verdadeira?', (executarFunction || NaN || 0 || null || 'Felipe' || retornaOi()));
console.log('1º sentença verdadeira?', (executarFunction || NaN || 0 || null || retornaOi() || 'Felipe'));

var corUsuario = null;
var corPadrao = corUsuario || 'red';
console.log(corPadrao);

var corUsuario = 'black';
var corPadrao = corUsuario || 'red';
console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false text';
const d = false;
const e = NaN;
console.log(a || b || c || d || e);