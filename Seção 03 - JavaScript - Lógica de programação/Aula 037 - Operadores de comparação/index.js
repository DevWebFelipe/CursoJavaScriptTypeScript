/*

>      Maior que
>=     Maior ou Igual
<      Menor que
<=     Menor ou Igual
==     Igual (= Atribuição, cuidar para não confundir) - Checa se o valor é igual
===    Igual estrito                                   - Checa se o valor é igual e se são do mesmo tipo
!=     Diferente                                       - Checa se o valor é diferente
!==    Diferente estrito                               - Checa se o valor é diferente e se o tipo é diferente
*/

//Evitar usar o ==, tentar usar sempre o === pois vai comparar o valor e o tipo do valor

//Posso tanto verificar direto, quanto atribuir a verificação a uma variável ou constante

const maiorQue = 10 > 5;
console.log('">"   10 maior que 5?', maiorQue);

const maiorIgual = 10 >= 5;
console.log('">="  10 maior ou igual a 5?', maiorIgual);

const menorQue = 10 < 5;
console.log('"<"   10 menor que 5?', menorQue);

let menorIgual = 10 <= 5;
console.log('"<="  10 menor ou igual a 5?', menorIgual);

let resultadoComparacao = 10 == 5;
console.log('"=="  10 igual a 5?', resultadoComparacao);
resultadoComparacao = '10' == 10;
console.log('"=="  10 tipo string igual a 10 tipo integer?', resultadoComparacao);

resultadoComparacao = '10' === 10;
console.log('"===" 10 tipo string igual a 10 tipo integer?', resultadoComparacao);

const num1 = 10;
const num2 = 5;
const texto10 = '10';
console.log('"!="  10 tipo string diferente de 10 tipo integer?', texto10 != num1);

console.log('"!==" 10 tipo string diferente de 10 tipo integer?', texto10 !== num1);
console.log('"!==" 10 tipo string diferente de 10 tipo integer?', texto10 !== num2);