//função anonima
const raiz = function(mNumero) {
  return mNumero ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//arrow function, com 1 parametro, não precisa dos parenteses
const raizquadradasimplificada = mNumero => mNumero ** 0.5;
console.log(raizquadradasimplificada(9));
console.log(raizquadradasimplificada(16));
console.log(raizquadradasimplificada(25));

//arrow com mais de um parametro, pode-se remover toda a carcaça da função
const raizquadrada = (mNumeroA, mNumeroB) => (mNumeroA + mNumeroB) ** 0.5;
console.log(raizquadrada(3, 6));
console.log(raizquadrada(10, 6));
console.log(raizquadrada(10, 15));