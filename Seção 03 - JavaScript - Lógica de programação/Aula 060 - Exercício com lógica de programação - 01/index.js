console.log('Como eu fiz');
console.log();

function maiorNumero(num1, num2) {
  if (num1 > num2) {
    return num1
  } else {
    return num2;
  }
}

let num1 = 25;
let num2 = 50;
let resultado = maiorNumero(num1, num2);

console.log(`O maior número entre ${num1} e ${num2} é ${resultado}`);
console.log();
console.log('Instrutor');
console.log();

function max(x, y) {
  if (x > y) return x; //IF pequeno, simples, da pra fazer em uma linha sem chaves
  return y;            //Como o return já finaliza a funçaõ, não preciso do else 
    //se só tem uma única outra alternativa
}
console.log(max(10, 2));

function max2(x, y) {
  if (x > y) {
    return x;
  }   

  return y; //Como o return já finaliza a função, não preciso do else se só tem uma única outra alternativa
}
console.log(max2(10, 15));

function max3(x, y) {
  //Usando operador ternário, ficaria 'RETORNE (SE x MAIOR QUE y) (?)ENTÃO RETORNA x (:) SENÃO RETORNA y'
  return (x > y) ? x : y;
}  
console.log(max3(25, 15));

//usando Arrow function
const max4 = (x, y) => {
  return (x > y) ? x : y;
}
console.log(max4(25, 35));

//usando Arrow function, quando é muito simples, da de fazer em uma linha só, e quando ta em uma linha
//fica implícito o que é o retorno, então da pra tirar o return também
const max5 = (x, y) => (x > y) ? x : y;
console.log(max5(45, 35));