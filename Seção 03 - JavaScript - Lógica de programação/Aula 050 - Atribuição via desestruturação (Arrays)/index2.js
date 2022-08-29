// ... rest, pega o resto
// ... spred, espalha as coisas

// Índice        0   1   2   3   4   5    6   7    8   9
const numeros = [65, 98, 67, 15, 35, 669, 70, 846, 90, 100]; // Valor de cada índice

//nesse caso, estou pegando os valores dos índices 0 e 1 e atribuindo ás duas variáveis que passei na
//desestruturação do array
const [primeiroNumero, segundoNumero, ...restoArray] = numeros;

console.log(primeiroNumero, segundoNumero);
console.log(restoArray);
console.log();
console.log();

// se eu quiser pegar valores saltados no meio do array pela desestruturação
const [um, , tres, , cinco, , , oito] = numeros;
console.log(um, tres, cinco, oito);