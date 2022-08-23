/*
Primitivos (imnutáveis) - string, number, boolean, undefined, null (bigint, symbol)
Valores copiados

Refência (mutável) - array, object, function

*/
/***************************************   Primitivo   ***************************************/
let nome = 'Luiz';
nome = 'Felipe';
console.log(nome);

let a = 'A';
let b = a; //estou apenas fazendo uma cópia do valor A, e armazenado
// no valor de B
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);

/***************************************   Referência   ***************************************/

let c = [1, 2, 3];
let d = c; //estou passando a instância de A, sendo que A e B terão
//os mesmos valores, pois estão apontados para o mesmo local da memória
console.log(c, d);
c.push(4);

console.log(c, d)
//mesmo sendo um dado de referência, posso criar uma cópia caso deseje, 
//basta fazer dessa maneira
let e = [...c];
c.push(5);
d.pop();
e.pop();
console.log('Array C', c);
console.log('Array D', d);
console.log('Array E', e);

/************************************************************************************/