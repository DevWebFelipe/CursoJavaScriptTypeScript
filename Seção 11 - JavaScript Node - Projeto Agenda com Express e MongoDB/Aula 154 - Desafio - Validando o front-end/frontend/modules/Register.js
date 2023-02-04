import validator from "validator";

export default class Register {
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
    const passwordInput = el.querySelector('input[name="password"]');
    const nameInput = el.querySelector('input[name="name"]');
    let error = false;

    if(!nameInput.value) {
      alert('Necessário informar o nome do usuário');
      error = true;
    }

    if(!validator.isEmail(emailInput.value)) {
      alert('Email inválido!');
      error = true;
    }

    if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      alert('A senha precisa ter entre 3 e 50 caracteres!');
      error = true;
    }

    if(!error) el.submit();
  }
}