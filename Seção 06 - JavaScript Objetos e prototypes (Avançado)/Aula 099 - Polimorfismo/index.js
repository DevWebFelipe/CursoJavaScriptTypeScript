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

console.log('*****     Conta Nubank     *****');
console.log();
const contaNubank = new Conta(001, 132655458, 350.50);
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

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.create = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
  if ((this.saldo + this.limite) < valor) {
    this.verSaldo();
    console.log('Saldo insuficiente')
    return;
  }    

  this.saldo -= valor;
  this.verSaldo();
};

console.log('*****     Conta Corrente     *****');
console.log();
const contaCorrente = new ContaCorrente(001, 132655458, 350.50, 200);
console.log('Operação: Saldo');
contaCorrente.verSaldo();
console.log();
console.log(`Operação: Depósito R$ 400,00`);
contaCorrente.depositar(400);
console.log();
console.log('Operação: Saque R$ 300,77');
contaCorrente.sacar(300.77);
console.log();
console.log('Operação: Saque R$ 500,00');
contaCorrente.sacar(500);
console.log();
console.log('Operação: Saque R$ 500,00');
contaCorrente.sacar(500);
console.log();

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.create = ContaPoupanca;

console.log('*****     Conta Poupança     *****');
console.log();
const contaPoupanca = new ContaPoupanca(001, 132655458, 350.50);
console.log('Operação: Saldo');
contaPoupanca.verSaldo();
console.log();
console.log(`Operação: Depósito R$ 400,00`);
contaPoupanca.depositar(400);
console.log();
console.log('Operação: Saque R$ 300,77');
contaPoupanca.sacar(300.77);
console.log();
console.log('Operação: Saque R$ 500,00');
contaPoupanca.sacar(500);
console.log();
console.log('Operação: Saque R$ 500,00');
contaPoupanca.sacar(500);
console.log();