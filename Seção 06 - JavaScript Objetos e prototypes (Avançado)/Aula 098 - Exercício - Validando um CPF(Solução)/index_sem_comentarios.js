function ValidaCPF(cpf) {
  Object.defineProperty(this, 'cpfSemMascara', {
    enumerable: true,
    get: function() {
      return cpf.replace(/\D+/g, '');
    }
  })  
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfSemMascara === 'undefined') return false;
  if (this.cpfSemMascara.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParfcial = this.cpfSemMascara.slice(0, -2);
  const digito1 = this.buscaDigito(cpfParfcial);
  const digito2 = this.buscaDigito(cpfParfcial + digito1);
  const novoCpf = cpfParfcial + digito1 + digito2;
  
  return novoCpf === this.cpfSemMascara;
};

ValidaCPF.prototype.buscaDigito = function (cpfParcial) {
  const arrayCpf = Array.from(cpfParcial);
  let regressivo = (arrayCpf.length + 1);

  const total = arrayCpf.reduce((ac, val) => {
    ac += (regressivo * Number(val));
    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11);

  return digito > 9 ? '0' : String(digito);
}

ValidaCPF.prototype.isSequencia = function (cpfSemMascara) {
  const sequencia = this.cpfSemMascara[0].repeat(this.cpfSemMascara.length);
  return sequencia === this.cpfSemMascara;
}

const cpf1 = '705.484.450-52';
const cpf2 = '070.987.720-03';
const cpf3 = '111.111.111-11';
const cpf4 = '091.502.259-10';
const cpf5 = '091.502.259-11';
const cpf6 = '091.503.259-10';

const validaCpf1 = new ValidaCPF(cpf1);
const validaCpf2 = new ValidaCPF(cpf2);
const validaCpf3 = new ValidaCPF(cpf3);
const validaCpf4 = new ValidaCPF(cpf4);
const validaCpf5 = new ValidaCPF(cpf5);
const validaCpf6 = new ValidaCPF(cpf6);

console.log(`O CPF ${cpf1} é válido?`, validaCpf1.valida());
console.log(`O CPF ${cpf2} é válido?`, validaCpf2.valida());
console.log(`O CPF ${cpf3} é válido?`, validaCpf3.valida());
console.log(`O CPF ${cpf4} é válido?`, validaCpf4.valida());
console.log(`O CPF ${cpf5} é válido?`, validaCpf5.valida());
console.log(`O CPF ${cpf6} é válido?`, validaCpf6.valida());