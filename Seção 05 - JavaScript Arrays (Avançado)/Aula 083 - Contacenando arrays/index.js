const humanos = ['Felipe', 'Giulia', 'Isis'];
const cachorros = ['Amora', 'Amelia'];
const peixes = ['Amadeu', 'Matilda'];
//para concatenar, chama o array que quiser que fique na frente, usa o concat
//e chama o array que venha depois, pode-se concatenar mais de um array,
//basta usar vírgula, e não precisa ser const de array, posso passar array litera
//ou mesmo passar direto o valor
const animais = cachorros.concat(peixes);
const todos = humanos.concat(cachorros, peixes);

console.log('humanos:   ', humanos);
console.log('cachorros: ', cachorros);
console.log('peixes:    ', peixes);
console.log('animais:   ', animais);
console.log();
console.log('todos:     ', todos);

console.log();
console.log('Exemplo da aula "CONCAT"');
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], humanos, 'teste');
console.log(a3);

//outra forma, é usar o SPREAD OPERATOR (Três pontos ...)
console.log();
console.log('Outro exemplo da aula "SPREAD ..."');
//tem uma diferença aqui, tem que prestar atenção, se for usar o SPREAD, e passar um 
//array literal, ele vai passar o array como sendo uma posição, então tem
//que usar o SPREAD nele também
const a4 = [...a1, ...a2, ...[7, 8, 9], ...humanos, 'teste'];// a1.concat(a2, [7, 8, 9], humanos, 'teste');
console.log(a4);