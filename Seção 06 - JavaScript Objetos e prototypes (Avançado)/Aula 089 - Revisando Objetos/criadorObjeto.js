// Factory functions / Constructor functions / Classes // São padrões de projeto

/************   Isso é uma Factory functions   ************/
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() { //pode ser escrito sem o GET, mas aí fica meio vago
      return `${this.nome} ${this.sobrenome}`;
    }
  }  
}

const p1 = criaPessoa('Felipe', 'Texeira');
console.log(p1.nomeCompleto);


/************   Isso é uma Constructor functions   ************/
function Pessoa(nome, sobrenome) {//Começa com letra maiúscula, não se usa o CRIA/CRIAR
    this.nome = nome; //o THIS, que agora ficará atrelado a quem o criou, vai controlar
    //as propriedades, para que cada objeto criado, fique com os valores atribuidos a ele    
    this.sobrenome = sobrenome;
    //Como na criação, vai ser usado o new, não precisa usar return, pois o new já vai
    //fazer o JS entender que tem que retornar a instância criada para o chamador do 
    //métdo, então vai retornar o THIS automaticamente

  Object.freeze(this); //Dessa maneira, nenhum objeto criado dentro desta função
  //poderá ser alterado
}

// NEW Cria um novo objeto vazio, e já vincula o THIS a esse objeto
const p2 = new Pessoa('Felipe', 'Texeira');
const p3 = new Pessoa('Isis', 'Texeira');
console.log(p2);
console.log(p3);

p2.nome = 'Teste';
console.log(p2.nome);

Object.freeze(p2); // Bloqueia qualquer alteração no objeto posterior a essa linha de código
//Isso funciona para arrays também, se quiser criar um que nunca possa ser alterado, 
//basta passar o freeze logo depois de criar o array

p2.nome = 'Alterar de novo';
console.log(p2.nome);

//no log, também vai mostrar o método que criou o objeto
