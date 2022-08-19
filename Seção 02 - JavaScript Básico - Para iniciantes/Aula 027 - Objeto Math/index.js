let num1 = 9.49;

//Arredondar para menos
var num2 = Math.floor(num1);
console.log(num2);

//Arredondar para mais
var num2 = Math.ceil(num1);
console.log(num2);

//Arredondar conforme próxima casa decimal
var num2 = Math.round(num1);
console.log(num2);

//Localizar o maior número dentre os números passados
console.log(Math.max(1, 2, 9, 50, 3, -5));

//Localizar o menor número dentre os números passados
console.log(Math.min(1, 2, 9, 50, 3, -5));

//Gerar um número aletório entre 0 e 1
console.log(Math.random());

//Gerar um número aletório entre 10 e 5
const aletorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aletorio);

//valor de PI
console.log(Math.PI);

//potenciação
console.log(Math.pow(2, 10));
console.log(2**10); //usar o operador ** é mais fácil

//Pegar a raiz quadrada
var num2 = 81;
console.log(num2 ** (1/2));
console.log(num2 ** 0.5);

//dividir por 0, no JS é possível, tem que cuidar
console.log(100/0);
console.log(!!(100/0));