function saudacao(mNome) {
  //console.log(`Bom dia! ${mNome}`);

  //o que eu quiser retornar na função, deverá ser posto no RETURN
  
  //return `Retorno da função: ${mNome}`;
  return `Bom dia! ${mNome}`
}

let mNome = '';
mNome = 'Felipe'
console.log(saudacao(mNome));
mNome = 'Isis'
console.log(saudacao(mNome));
mNome = 'Giulia'
console.log(saudacao(mNome));

//nesse momento não foi especificado o que é desejado que seja retornado no 
//result da função, então o retorno será undefined
//por padrão, toda função que não tenha um retorno especificado irá retornar
//undefined
const variavel = saudacao(mNome);
console.log(variavel);