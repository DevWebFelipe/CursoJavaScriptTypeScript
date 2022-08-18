let num1 = 10; //number
let num2 = 2.5; //number
let num3 = '3';

//converter number em string
console.log(num1 + num2);
console.log(num1.toString() + num2.toString());
console.log(num1 + num2 + Number(num3));

console.log(typeof num1);
num1 = num1.toString();
console.log(typeof num1);
num1 = Number(num1);
console.log(typeof num1);

let num4 = 1500;
//representação binária de um número, basta passar o parametro 2 na função toString
console.log(num4.toString(2))

let num5 = 10.56554987654321;
//Arredondar valores com toFixed, basta passar no parametro a quantidade de casas que vai arredondar
console.log(num5.toFixed(2));

//Verificar se um número é inteiro ou não
console.log(Number.isInteger(num1));

//Testar se será possível executar uma determinada conta
let temp = num1 * '5';
console.log(Number.isNaN(temp));