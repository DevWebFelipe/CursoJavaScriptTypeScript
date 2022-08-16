/** Operadores aritméticos
 *    +  Adição e concatenação de texto
 *    -  Subtração
 *    /  Divisão
 *    *  Multiplicação
 *    ** Potenciação Ex: 2 ** 5 = 2 * 2 * 2 * 2 * 2 = 32
 *    %  Resto da divisão Ex: 10 / 3 = 9 resto = 1
 */

/* Ordem de execução dos cálculos 
  1º O que estiver entre parenteses
  2º ** Potenciação
  3º * Multiplicação / Divisão % Modulo/Resto
  4º + Adição - Subtração
  A regra de sinais conta como na matemática
*/

const num1 = 5;
const num2 = 10;
const num3 = '20';
const num4 = 2;
const num5 = 5;
const num6 = 3;

console.log('');
console.log('*****   NaN - Not a Number   *****');
console.log();

const teste = 5;
const teste1 = 'L5';
const teste2 = '6';
const teste3 = '5.85';
const teste4 = '5.35';
console.log('Valor que o JS vai apontar como NaN  : ' + (teste * teste1));
console.log('Valor que o JS vai tentar arrumar    : ' + (teste * teste2));
console.log('Valor será concatenado               : ' + (teste + teste2));
console.log('Convertendo String 6 para Integer    : ' + (teste + parseInt(teste2))); // método antigo

//parseInt retorna apenas inteiro, então nesse caso, ele vai truncar o valor de ponto flutuante
console.log('Convertendo String 5.85 para Integer : ' + (teste + parseInt(teste3))); // método antigo
console.log('Convertendo String 5.35 para Integer : ' + (teste + parseInt(teste4))); // método antigo
console.log('Valor que o JS vai apontar como NaN  : ' + (teste * parseInt(teste1)));

//parseFloat vai retornar o ponto flutante, somando o valor total sem trucar as casas decimais
console.log('Convertendo String 5.85 para Float   : ' + (teste + parseFloat(teste3))); // método antigo
console.log('Convertendo String 5.35 para Float   : ' + (teste + parseFloat(teste4))); // método antigo
console.log('Valor que o JS vai apontar como NaN  : ' + (teste * parseFloat(teste1)));

//Number vai retornar o que tiver, sem truncar ou validar se inteiro ou ponto flutuante
console.log('Convertendo String 6 para Integer    : ' + (teste + Number(teste2))); // método mais fácil
console.log('Convertendo String 5.35 para Float   : ' + (teste + Number(teste4))); // método mais fácil
console.log('Valor que o JS vai apontar como NaN  : ' + (teste * Number(teste1)));

console.log();
console.log('*****   Abaixo operadores aritiméticos   *****');
console.log();

console.log('Somando valores                : ' + (num1 + num2));
console.log('Somando valores e concatenando : ' + (num1 + num2) + num3);
console.log('Subtraindo valores             : ' + (num2 - num1));
console.log('Divindo valores                : ' + num2 / num1);
console.log('Multiplicando valores          : ' + num2 * num2);
console.log('Multiplicando valores e sinais : ' + (- num2 * num1));
console.log('Potenciação de valores         : ' + num4 ** num5);
console.log('Resto de divisão               : ' + num2 % num6);
console.log('Polinômio                      : ' + ((num1 * num2) + (((num2 % num6) * num4) ** num5) - (num5 * num2)) * num4);

console.log();
console.log('*****   Abaixo operador de incremento   *****');
console.log();

let contadorInc = 1;
++contadorInc; //incrementa 1 unidade ao valor da variável
contadorInc++; //3
++contadorInc; //4
contadorInc++; //5
//pode ser tanto antes quanto depois
console.log('Resultado incremento a partir de 1  : ' + contadorInc);

let diferencaContadorInc = 1;
console.log('Mostrou o valor, depois incrementou : ' + diferencaContadorInc++); //vai mostrar 1 depois incrementar
console.log('Incrementou, depois mostrou o valor : ' + (++diferencaContadorInc)); //vai incrementar 1 depois mostrar o valor
//nesse caso, vai pular o dois, porque vai mostrar 1, incrementar para 2
//incrementar para 3 depois mostrar o 3

const valorPularInc = 2;
let valorContadorInc = 0;
valorContadorInc += valorPularInc;  // valorContadorInc = valorContadorInc + valorPularInc;
console.log('Incrementando valor diferente de 1  : ' + valorContadorInc);
valorContadorInc += valorPularInc;  // valorContadorInc = valorContadorInc + valorPularInc;
console.log('Incrementando valor diferente de 1  : ' + valorContadorInc);
valorContadorInc += valorPularInc;  // valorContadorInc = valorContadorInc + valorPularInc;
console.log('Incrementando valor diferente de 1  : ' + valorContadorInc);

contadorInc = 2;
contadorInc *= 6; //nesse caso, estou usando um atalho, dizendo a expressão que quer, e já atribuindo o resultado
console.log('Incrementando valor multiplicado    : ' + contadorInc);
contadorInc *= 6;
console.log('Incrementando valor multiplicado    : ' + contadorInc);
contadorInc *= 6;
console.log('Incrementando valor multiplicado    : ' + contadorInc);
//esses operadores de +=, -=, *=, **= são chamados de operadores de atribuição
contadorInc = 2;
contadorInc **= 10;
console.log('Incrementando valor com potenciação : ' + contadorInc);

console.log();
console.log('*****   Abaixo operador de decremento   *****');
console.log();

let contadorDec = 5;
--contadorDec; //decrementa 1 unidade ao valor da variável
contadorDec--; //3
--contadorDec; //2
contadorDec--; //1
//pode ser tanto antes quanto depois
console.log('Resultado Decremento a partir de 5  : ' + contadorDec);

let diferencaContadorDec = 3;
console.log('Mostrou o valor, depois decrementou : ' + diferencaContadorDec--); //vai mostrar 3 depois decrementa
console.log('Decrementou, depois mostrou o valor : ' + (--diferencaContadorDec)); //vai decrementar 3 depois mostrar o valor
//nesse caso, vai pular o dois, porque vai mostrar 3, decrementar para 2
//decrementar para 1 depois mostrar o 1

const valorPularDec = 2;
let valorContadorDec = 10;
valorContadorDec -= valorPularDec; // valorContadorDec = valorContadorDec - valorPularDec;
console.log('Decrementando valor diferente de 1  : ' + valorContadorDec);
valorContadorDec -= valorPularDec; // valorContadorDec = valorContadorDec - valorPularDec;
console.log('Decrementando valor diferente de 1  : ' + valorContadorDec);
valorContadorDec -= valorPularDec; // valorContadorDec = valorContadorDec - valorPularDec;
console.log('Decrementando valor diferente de 1  : ' + valorContadorDec);