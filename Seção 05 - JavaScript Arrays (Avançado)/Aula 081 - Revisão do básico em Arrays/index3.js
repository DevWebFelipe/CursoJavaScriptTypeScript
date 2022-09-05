//convertendo uma string em um array
const nomes = 'Giulia Gabrielle Breis Texeira'; 
console.log(`Nome completo: ${nomes}`);
const arrayNomes = nomes.split(' '); //pega uma string, quebra ela no caracter que eu delimitar
//e monta um array onde cada posição/índice do array é um intervalo entre o caracter delimitador
console.log('Array do nome: ', arrayNomes);
console.log('Nome: ', arrayNomes.shift(), ' Sobrenome : ', arrayNomes.join(' ')); 
//nome está na posição 0  então uso o shift, assim pego o valor do primeiro índice e removo ele 
//sobrenome está a partir da posição 1, como removi a posição 0, uso o JOIN, que junta o array 
//em uma string, aí posso passar o caractere que quero usar como separador para cada elemento do array
