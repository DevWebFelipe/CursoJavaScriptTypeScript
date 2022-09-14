function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
  if (this.saldo < valor) {
    this.verSaldo();
    console.log('Saldo insuficiente')
    return;
  }    

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function(valor){
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function() {
  console.log(`Agência : ${this.agencia}`);
  console.log(`Conta   : ${this.conta}`);
  console.log(`Saldo   : R$ ${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {//Como vai herdar de conta, tem que
  //ter os mesmos parâmetros
  Conta.call(this, agencia, conta, saldo); //isso é para ContaCorrente herdar de Conta
  //Além do que vai herdar de Conta, posso passar mais parâmetros/funções normalmente
  this.limite = limite;
}

//Assin como estou herdando as propriedades e métodos de Conta para ContaCorrente
//posso também herdar o que estiver no prototype
ContaCorrente.prototype = Object.create(Conta.prototype);
//Depois de herdar o prototype, preciso devolver o controle do criador para a
//conta corrente
ContaCorrente.prototype.create = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){ //essa função, irá sobrescrever a função 
  //sacar do objeto que estou herdando, isso porque conta corrente vai ter algumas validações
  //diferentes
  if ((this.saldo + this.limite) < valor) {
    this.verSaldo();
    console.log('Saldo insuficiente')
    return;
  }    

  this.saldo -= valor;
  this.verSaldo();
};

const contaNubank = new ContaCorrente(001, 132655458, 350.50, 200);
console.log('Operação: Saldo');
contaNubank.verSaldo();
console.log();
console.log(`Operação: Depósito R$ 400,00`);
contaNubank.depositar(400);
console.log();
console.log('Operação: Saque R$ 300,77');
contaNubank.sacar(300.77);
console.log();
console.log('Operação: Saque R$ 500,00');
contaNubank.sacar(500);
console.log();
console.log('Operação: Saque R$ 500,00');
contaNubank.sacar(500);
console.log();