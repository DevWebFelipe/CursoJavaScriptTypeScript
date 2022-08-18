let numBase1 = 0.7;
let numBase2 = 0.1;
let num1 = numBase1;
let num2 = numBase2;
let num3;

num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

console.log(num1);
console.log(Number.isInteger(num1));

//removendo imprecisão com cálculos
num3 = numBase1;
num3 = ((num3 * 100) + (numBase2 * 100)) / 100; //0.8
num3 = ((num3 * 100) + (numBase2 * 100)) / 100; //0.9
num3 = ((num3 * 100) + (numBase2 * 100)) / 100; //1.0
console.log(num3);
console.log(Number.isInteger(num3));