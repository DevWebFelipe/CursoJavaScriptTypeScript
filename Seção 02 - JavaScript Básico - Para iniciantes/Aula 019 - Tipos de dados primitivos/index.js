/** são os dados primitivos os seguintes:
 * STRING, 
 * NUMBER, 
 * UNDEFINED, 
 * NULL, 
 * BOOLEAN, 
 * SYMBOL 
 */

const nome = 'Felipe';     //string
const nome1 = "Felipe";    //string
const nome2 = `Felipe`;    //string
const num = 10;            //number
const num1 = 15.58;        //number
let nomeAluno;             //undefined = não configura tipagem
const sobrenomeAluno = null; //nulo = não configura tipagem

//nulo <> undefined
//nulo vai ser usado quando propositalmente quero setar uma variavel com valor nulo
//undefined vai ser usado quando eu for setar um valor depois de declarar a variável

const aprovado = false;     //boolean - true ou false

console.log(typeof nome, nome);
console.log(typeof nome1, nome1);
console.log(typeof nome2, nome2);
console.log(typeof num, num);
console.log(typeof num1, num1);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

//no exemplo abaixo, o exemplo está referenciando na constante B
//o mesmo endereço de memória atribuído na constante A
//porém, como é um dado primitivo, ele vai fazer uma cópia, e não será alterado
//onde por sua vez, caso fosse um valor não primitivo, iria trabalhar ambas as 
//constantes porém com um único endereço de memória, onde ao alterar o B, alteraria o A também
let A = 2;
let B = A;
console.log(A, B); //2 2

A = 3;
console.log(A, B); //3 2


//o exemplo abaixo, elucida o uso de dados não primitivos, ARRAY, que seria um dado por referência
//dados passados por referência, o B recebeu uma instância do A
const a = [1, 2];
const b = a;
console.log(a, b); // [1, 2] [1, 2]

//quando alterado B, a alteração reflete no A também, uma vez que ambos
//A e B apontam para a mesma refência na memória
b.push(3);
console.log(a, b); // [1, 2, 3] [1, 2, 3]