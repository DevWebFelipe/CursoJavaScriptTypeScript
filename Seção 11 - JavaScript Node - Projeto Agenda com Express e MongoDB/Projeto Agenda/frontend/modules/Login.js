import validator from "validator";

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }  

  events() {
    if(!this.form) return;
    this.form.addEventListener('submit', e => {
      const el = e.target;
      e.preventDefault();
      
      const isValid = this.validate(e);
      if(isValid) el.submit();
    })
  }

  validate(e) { 
    for(let errorText of this.form.querySelectorAll('.error')) {
      errorText.remove();
    }

    let valid = true;  

    for(let field of this.form.querySelectorAll('.validate')) {
      const label = field.previousElementSibling.innerText;

      if(!field.value) {
        if(field.name === 'email' && !validator.isEmail(field.value)) {
          this.createError(field, `O e-mail informado não é um e-mail válido`);
          valid = false;
        } else {
          this.createError(field, `O campo "${label}" não pode ficar vazio`);
          valid = false;
        }
      }
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