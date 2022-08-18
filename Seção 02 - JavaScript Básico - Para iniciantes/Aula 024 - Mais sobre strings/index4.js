let outraString = 'O rato roeu a roupa do rei de roma.';

//Transforma a senteça em um array, ondem cada palavra vai ser um indice do array resultante
console.log(outraString.split(' '));
console.log(outraString.split('r'));
//Posso limitar o array resultante, dizendo que quero somente algumas ocorrências do split
console.log(outraString.split(' ', 2));
console.log(outraString.split('r', 4));


console.log(outraString.toUpperCase());
console.log(outraString.toLowerCase());