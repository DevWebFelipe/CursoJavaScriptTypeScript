// IEEE 754-2008 -> Padrão para casas decimais

let num1 = 0.7;
let num2 = 0.1;

console.log(num1 + num2); //o padrão de cálculo causa uma imprecisão nos resultados, de modo que 
//0.7 + 0.1 será 0.79999999 e não 0.8

// o += significa que vai a variável que vai receber o novo valor, receberá
// ela própria + o valor da variável atribuída
num1 += num2; //num1 = num1 + num2
console.log(num1); //resultado será 0.79999999

//tentar chegar a 1.0
num1 += num2; //0.89999999
console.log(num1)

num1 += num2; //0.99999999
console.log(num1)

let num3 = num1;
num3 = num3.toFixed(2);
console.log(num3);
console.log(Number.isInteger(num3));

//Removendo imprecisões com a função parseFloat
num1 = parseFloat(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));

//Removendo imprecisões com a função Number
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 = Number(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1));