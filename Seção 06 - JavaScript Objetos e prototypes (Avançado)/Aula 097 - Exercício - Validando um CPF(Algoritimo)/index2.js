let cpf = '705.484.450-52';
let cpfSemMascara = cpf.replace(/\D+/g, ''); //isso aqui é uma expressão
//ela vai remover da string, tudo que não for número;

let cpfArray = Array.from(cpfSemMascara); //Transformar uma string em um array
//de letras/numeros

console.log(cpfArray.reduce((ac, val) => ac += Number(val), 0));