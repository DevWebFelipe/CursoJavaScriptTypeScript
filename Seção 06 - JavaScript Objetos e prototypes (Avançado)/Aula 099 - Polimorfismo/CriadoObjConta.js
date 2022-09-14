
// Superclasse/Superclass/Classe pai/Classe mãe
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