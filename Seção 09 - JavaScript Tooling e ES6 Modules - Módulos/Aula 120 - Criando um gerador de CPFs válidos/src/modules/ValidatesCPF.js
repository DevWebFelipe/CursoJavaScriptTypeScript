export default class ValidatesCPF {
  constructor(cpfReceived
    ) {
    Object.defineProperty(this, 'CleanCPF', {
      writable: false, 
      enumerable: true,
      configurable: false,
      value: cpfReceived.replace(/\D+/g, '')
    })
  }

  isSequential() {
    return this.CleanCPF.charAt(0).repeat(11) === this.CleanCPF;
  }

  generateNewCPF() {
    const cpfWithoutDigits = this.CleanCPF.slice(0, -2);
    const digit1 = ValidatesCPF.generateDigit(cpfWithoutDigits); 
    const digit2 = ValidatesCPF.generateDigit(cpfWithoutDigits + digit1);    
    this.newCPF = cpfWithoutDigits + digit1 + digit2;
  }

  static generateDigit(cpfWithoutDigits) {
    let total = 0; 
    let reverse = cpfWithoutDigits.length + 1;
    
    for(let string of cpfWithoutDigits) {
      total += reverse * Number(string);
      reverse --;
    }
    
    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : '0';
  }

  validates() {
    if(!this.CleanCPF) return false;
    if(typeof this.CleanCPF !== 'string') return false;
    if(this.CleanCPF.length !== 11) return false;
    if(this.isSequential()) return false;
    this.generateNewCPF();
    return this.newCPF === this.CleanCPF;
  }
}

console.log('dentro do valida cpf')