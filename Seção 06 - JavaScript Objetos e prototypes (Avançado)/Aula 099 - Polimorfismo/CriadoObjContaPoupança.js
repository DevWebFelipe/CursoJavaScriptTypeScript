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

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.create = ContaPoupanca;


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