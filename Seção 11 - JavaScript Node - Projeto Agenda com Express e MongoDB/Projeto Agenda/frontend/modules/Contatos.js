import validator from "validator";

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', e => {
      const el = e.target;
      e.preventDefault();

      const isValid = this.validate(e);
      if (isValid) el.submit();
    })
  }

  validate(e) {
    for (let errorText of this.form.querySelectorAll('.error')) {
      errorText.remove();
    }

    let fonePreenchido = '';
    let enderecoEmail = '';
    let fieldFone;
    let fieldEmail;
    let valid = true;

    for (let field of this.form.querySelectorAll('.validate')) {
      const label = field.previousElementSibling.innerText;
      if (field.name === 'telefone') {
        fonePreenchido = field.value;
        fieldFone = field;
      }
      if (field.name === 'email') {
        enderecoEmail = field.value;
        fieldEmail = field;
      }

      if (field.name !== 'telefone' && field.name !== 'email') {
        if (!field.value) {
          if (field.name === 'email' && field.value && !validator.isEmail(field.value)) {
            this.createError(field, `O e-mail informado não é um e-mail válido`);
            valid = false;
          } else {
            this.createError(field, `O campo "${label}" não pode ficar vazio`);
            valid = false;
          }
        }
      }
    }

    console.log('fone', !fonePreenchido);
    console.log('email', !enderecoEmail);

    if (!fonePreenchido && !enderecoEmail) {
      this.createError(fieldFone, `Necessário informar número do telefone ou e-mail`);
      this.createError(fieldEmail, `Necessário informar número do telefone ou e-mail`);
      valid = false;
    }

    return valid;
  }

  createError(field, message) {
    const small = document.createElement('small');
    small.innerHTML = message;
    small.classList.add('text-danger');
    small.classList.add('error');
    field.insertAdjacentElement('afterend', small);
  }
}