const cpf1 = '705.484.450-52';
const cpf2 = '070.987.720-03';
const cpf3 = '111.111.111-11';
const cpf4 = '091.502.259-10';
const cpf5 = '091.502.259-11';
const cpf6 = '091.503.259-10';

class ValidaCPF {
  constructor(cpfRecebido) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false, //se pode ser sobrescrita
      enumerable: true, //Determina se vai aparecer quando eu der um log
      configurable: false, //se pode ser reconfigurada
      value: cpfRecebido.replace(/\D+/g, '') //Essa expressão remove tudoq ue for diferente de número
    })
  }

  sequencial() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    /*const digito1 = this.geraDigito(cpfSemDigitos); 
    const digito2 = this.geraDigito(cpfSemDigitos + digito1);*/
    //como eu converti o método geraDigito para um método estático
    //eu tenho que mudar a chamada dele, para isso, ao invés de usar o 
    //THIS eu uso a própria classe
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos); 
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);    
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  //o método abaixo não possui nenhum This, ou seja, ele não depende
  //da minha classe, então ele pode se tornar um método estático
  //todo método dentro de uma classe que não usa nada da própria classe, 
  //pode se tornar um método estático
  static geraDigito(cpfSemDigitos) {
    let total = 0; 
    let reverso = cpfSemDigitos.length + 1;
    
    for(let string of cpfSemDigitos) {
      total += reverso * Number(string);
      reverso --;
    }
    
    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }//         Se     Então            senão

  valida() {
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.sequencial()) return false;
    this.geraNovoCpf();
    return this.novoCPF === this.cpfLimpo;
  }
}

const validaCPF = new ValidaCPF(cpf4);
const validaCPF2 = new ValidaCPF(cpf3);

let status = 'Válido';
if (!validaCPF.valida()) {
  status = 'Inválido'
}
console.log(`O CPF ${cpf4} é ${status}`);

status = 'Válido';
if (!validaCPF2.valida()) {
  status = 'Inválido'
}
console.log(`O CPF ${cpf3} é ${status}`);