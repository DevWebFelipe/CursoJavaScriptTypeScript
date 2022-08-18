let umaString = "Um texto";

//isso é uma expressão regular, em sítese, ela vai me trazer um array(por conta do parametro G que passei) 
//com todas as letras mínusculas entre a até z
console.log(umaString.match(/[a-z]/g)); 

/* sem o parametro G, vai me retornar a primeira letra que encontrar, seu index, o texto onde foi
executado esse MATCH, e como não passei que quero um array, ele vai me retornar 
GROUPS UNDEFINED
 */
console.log(umaString.match(/[a-z]/)); 

//vai retornar o índice onde encontrou a primeira letra que se enquadrou na consulta que passe para fazer
console.log(umaString.search(/[a-z]/)); 
console.log(umaString.search(/x/)); 

//substituir uma palavra da sentença por outra
console.log(umaString.replace('Um', 'Outro')); 
console.log(umaString.replace(/Um/, 'Outro')); 

let outraString = 'O rato roeu a roupa do rei de roma';
//Substitui o primeiro que econtrar
console.log(outraString.replace(/r/, '#')); 

//Substutui todos que encontrar, basta colocar o G
console.log(outraString.replace(/r/g, '#')); 