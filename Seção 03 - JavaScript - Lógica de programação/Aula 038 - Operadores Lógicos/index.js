/*

Operadores lógicos

&& -> AND -> E   -> Todas as condições precisam ser verdadeiras
|| -> OR  -> OU  -> Uma das condições precisa ser verdadeira
!  -> NOT -> NÃO -> A condição precisa ser falsa

*/

console.log('10 é menor que 20 E maior que 50?', (10 < 20) && (10 > 50));
console.log('10 é menor que 20 E maior que 5?', (10 < 20) && (10 > 5));

console.log('10 é menor que 20 OU maior que 50?', (10 < 20) || (10 > 50));
console.log('10 é menor que 5 OU maior que 50?', (10 < 5) || (10 > 50));

console.log('A sentença é não é verdadeira (10 é menor que 20 OU maior que 50?)', !((10 < 20) || (10 > 50)));
console.log('A sentença é não é verdadeira (10 é menor que 5 OU maior que 50?)', !((10 < 5) || (10 > 50)));

console.log('(10 é menor que 5 E maior que 20) OU 10 é igual 10?', ((10 > 20) && (10 < 5)) || (10 === 10));
console.log('(10 é menor que 5 E maior que 20) OU 10 é igual 5?', ((10 > 20) && (10 < 5)) || (10 === 5));

const usuario = 'Felipe';
const senha = '123456';

var vaiLogar = (usuario === 'Felipe') && (senha === '123456');
console.log('Login válido?', vaiLogar);

var vaiLogar = (usuario === 'Felipe') && (senha === '654321');
console.log('Login válido?', vaiLogar);

var vaiLogar = !((usuario === 'Felipe') && (senha === '123456'));
console.log('Login inválido?', vaiLogar);

var vaiLogar = !((usuario === 'Felipe') && (senha === '654321'));
console.log('Login inválido?', vaiLogar);