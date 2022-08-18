let outraString = 'O rato roeu a roupa do rei de roma.';

//Ver o tamanho de uma string, quantidade de caracteres
console.log(outraString.length);

//Pegar um intervalo de uma string, basta passar o indice incial e final que quero
console.log(outraString.slice(30, 30));
//Passando negatigo, pego do último para traz, a quantidade que eu passar
console.log(outraString.slice(-5));
//Passando só um numero positivo, pego da sua posição para frente, a quantidade que restar
console.log(outraString.slice(30));
//Passando um numero negativo, pego da sua posição para frente, até a posição que eu passar
console.log(outraString.slice(-5, (outraString.length - 1)));
console.log(outraString.slice(-5, - 1));

//faz o mesmo que a função acima, porém é mais trabalhoso, tem que escrever mais código, 
//então é melhor usar o SLICE que vai ter o mesmo resultado
console.log(outraString.substring(outraString.length - 5));
console.log(outraString.substring((outraString.length - 5), (outraString.length - 1)));