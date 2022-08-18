//Assim como no delphi, as strings são um array de caracteres

let umaString = "um \"texto\""; //não fica bom, mas se quiser usar uma aspa dupla dentro de uma string aberta com aspa dupla
//da de colocar uma barra invertida, mas não é recomendado, melhor usar string com crase `` daí
console.log(umaString);

let umaString1 = "um \\texto"; //se quiser usar uma barra invertida, vai precisar colocar duas, apenas uma, ela vai bugar o texto
console.log(umaString1);

//                0123456789.....................31
let umaString2 = 'Strings são arrays de caracteres';
console.log(umaString2[3] + umaString2[6] + umaString2[3] + umaString2[6]); //como é um array de caracteres posso pegar o caractere
//que ta naquela determinada posição

let umaString3 = 'String qualquer';
console.log(umaString3.charAt(0) + umaString3.charAt(3)); //é mais fácil pegar a posição direto com [], mas da de usar essa função também

console.log(umaString3.concat(' em', ' um', ' lindo', ' dia')); //é bem melhor usar template string, mas só pra saber que assim tabém da
console.log(umaString3 + ' em um lindo dia'); //exemplo concatenando com +
console.log(`${umaString3} em um lindo dia`); //exemplo com teplate string

//Caso não encontre a senteça solicitada, retornará 0, irá começar do indice 0, ou seja, a primeira letra
console.log(umaString3.indexOf('qualquer')); //Retorna o indíce em que encontra a sentença solicitada
console.log(umaString3.indexOf('qualquer', 8)); //Retorna o indíce em que encontra a sentença solicitada a partir do indice indicado

//Caso não encontre a senteça solicitada, retornará 0, irá começar do indice final, ou seja, a ultima letra
console.log(umaString3.lastIndexOf('qualquer')); //Retorna o indíce em que encontra a sentença solicitada
console.log(umaString3.lastIndexOf('qualquer', 3)); //Retorna o indíce em que encontra a sentença solicitada a partir do indice indicado