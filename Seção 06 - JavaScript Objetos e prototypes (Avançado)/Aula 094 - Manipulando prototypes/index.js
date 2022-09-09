//new Object -> Object.prototype
const objA = {
  chaveA: 'A',
  //__proto__: Object.prototype
};

//objA.__proto__ === Object.prototype

const objB = {
  chaveB: 'B',
  //Agora quero que para o objB, o __proto__ seja o objA
  //__proto__: objA
};

//agora vou criar um objeto C que vai acessar o B que acessa o A
const objC = new Object();
objC.chaveC = 'C';

//agora, mesmo sem ter o objA atribuído a uma chave do objB, 
//Posso acessar o objA a partir do objB
Object.setPrototypeOf(objB, objA);
//Vai mostrar o valor da chaveA do objA pelo objB
console.log(objB.chaveA);

//Objeto C vai acessar B que acessa o A
Object.setPrototypeOf(objC, objB);