let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro número');

console.log(typeof num1, typeof num2);
console.log(num1 + num2);

num1 = Number(num1);
num2 = Number(num2);

console.log(num1 + num2);

const resultado = num1 + num2;

alert(`O resultado da sua conta foi: ${resultado}`);

alert(`O resultado da sua conta foi: ${num1 + num2}`);

alert(`O resultado da sua conta foi: ${Number(num1) + Number(num2)}`);

alert(`O resultado da sua conta foi: ${Number(prompt('Digite um número')) + Number(prompt('Digite outro número'))}`);