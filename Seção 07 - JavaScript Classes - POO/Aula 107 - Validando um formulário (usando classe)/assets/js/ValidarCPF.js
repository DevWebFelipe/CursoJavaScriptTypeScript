class ValidateCPF {
  constructor(cpfReceived) {
    Object.defineProperty(this, 'cpfClear', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfReceived.replace(/\D+/g, '')
    })
  }
  
  sequential() {
    return this.cpfClear.charAt(0).repeat(11) === this.cpfClear;
  }

  generateNewCPF() {
    const cpfNoDigits = this.cpfClear.slice(0, -2);
    const digit1 = ValidateCPF.generateDigit(cpfNoDigits); 
    const digit2 = ValidateCPF.generateDigit(cpfNoDigits + digit1);    
    this.newCPF = cpfNoDigits + digit1 + digit2;
  }

  static generateDigit(cpfNoDigits) {
    let total = 0; 
    let reverse = cpfNoDigits.length + 1;
    
    for(let string of cpfNoDigits) {
      total += reverse * Number(string);
      reverse --;
    }
    
    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : '0';
  }

  validate() {
    if(!this.cpfClear) return false;
    if(typeof this.cpfClear !== 'string') return false;
    if(this.cpfClear.length !== 11) return false;
    if(this.sequential()) return false;
    this.generateNewCPF();
    return this.newCPF === this.cpfClear;
  }
}

const teste = new ValidateCPF('091.502.159-10');
console.log(teste.validate());