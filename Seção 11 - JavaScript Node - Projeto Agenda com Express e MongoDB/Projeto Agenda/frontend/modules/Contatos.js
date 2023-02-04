import validator from "validator";

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }  

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    })
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');
    const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
    const nomeInput = el.querySelector('input[name="nome"]');
    let error = false;

    if(!telefoneInput.value && !emailInput.value) {
      alert('Necessário informar um telefone ou email');
      error = true;
    }

    if(emailInput && !validator.isEmail(emailInput.value)) {
      alert('Email inválido!');
      error = true;
    }

    if(!nomeInput.value) {
      alert('Necessário informar o nome do contato');
      error = true;
    }

    if(!error) el.submit();
  }
}