class IsValidForm {
  constructor() {
    this.form = document.querySelector('.form');
    this.events();
  }

  events() {
    this.form.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const validateField = this.isValidFields();
    const validatePassword = this.isValidPassword();

    if (validateField & validatePassword) {
      alert('Formulário validado com sucesso');
    }
  }

  isValidPassword() {
    let isValid = true;

    const password = this.form.querySelector('.password');
    const checkPassword = this.form.querySelector('.check-password');

    if(password.value !== checkPassword.value){
      isValid = false;
      this.createException(password, 'As senhas precisam ser iguais');
      this.createException(checkPassword, 'As senhas precisam ser iguais');
    }

    if(password.value.length < 6 || password.value.length > 12) {
      this.createException(password, 'Quantidade de caracteres inválida para a senha (Min: 6 Max: 12)');
      isValid = false;
    }    

    if(checkPassword.value.length < 6 || checkPassword.value.length > 12) {
      this.createException(checkPassword, 'Quantidade de caracteres inválida para a senha (Min: 6 Max: 12)');
      isValid = false;
    }    

    return isValid;
  }

  isValidFields() {
    let isValid = true;

    for(let errorMessage of this.form.querySelectorAll('.error-message')) {
      errorMessage.remove();
    }
    
    for(let field of this.form.querySelectorAll('.valid-field')) {
      const label = field.previousElementSibling.innerText;

      if(!field.value) {
        this.createException(field, `Campo "${label}" precisa ser preenchido.`);
        isValid = false;
      }

      if(field.classList.contains('cpf')) {
        if(!this.validateDocument(field)) isValid = false;
      }

      if(field.classList.contains('user')) {
        if(!this.validateUser(field)) isValid = false;
      }      
    }

    return isValid;
  }

  validateUser(field) {
    const userName = field.value;
    let isValid = true;

    if(userName.length < 3 || userName.length > 12) {
      this.createException(field, 'Quantidade de caracteres inválida para o usuário (Min: 3 Max: 12)');
      isValid = false;
    }

    if(!userName.match(/[a-zA-Z0-9]+$/g)) {
      this.createException(field, 'Usuário não pode conter caracteres especiais');
      isValid = false;
    }

    return true;
  }

  validateDocument(field) {
    const document = new ValidateCPF(field.value);
    
    if(!document.validate()) {
      this.createException(field, 'CPF inválido');
    }

    return true;
  }

  createException(field, messageError) {
    const div = document.createElement('div');
    div.innerHTML = messageError;
    div.classList.add('error-message');

    field.insertAdjacentElement('afterend', div);
  }
}

const isValid = new IsValidForm();