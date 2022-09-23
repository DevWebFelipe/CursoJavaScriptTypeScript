//As nomenclaturas, vão ser feitas mais parecidas com o que se 
//encontra no mundo real, tudo em ingles

class IsValidForm {
  constructor() {
    this.form = document.querySelector('.form');
    this.events();
  }

  events() {
    //foi usado arrow function, porque caso contrário, seria chamada 
    //uma nova instância, que faria com que o THIS não fosse mais a classe
    //ValidaFormulario, como arrow function não permite alteração no this
    //ela mantém ele como sendo a classe ValidaFormulario
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
      //this.form.submit(); agora seria só enviar
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

    //Antes de validar, tem que limpar as validações anteriores para que não fique
    //sempre criando novos erros na tela
    for(let errorMessage of this.form.querySelectorAll('.error-message')) {
      errorMessage.remove();
    }
    
    for(let field of this.form.querySelectorAll('.valid-field')) {
      //abaixo, estou pegando o valor contido no texto do elemento anterior ao meu
      //campo, nesse caso, estou pegando o Label do input
      const label = field.previousElementSibling.innerText;

      //uma string vazia valida como falso(no delphi usamos IsEmpty, é a mesma coisa)
      //então para executar algo caso o campo esteja vazio, da pra usar 
      //!field.value, que quer dizer 'Campo não está prenchido'
      if(!field.value) {
        this.createException(field, `Campo "${label}" precisa ser preenchido.`);
        isValid = false;
      }

      //verifica se o campo varrido contém a classe CPF
      if(field.classList.contains('cpf')) {
        if(!this.validateDocument(field)) isValid = false;
      }

      //verifica se o campo varrido comtém a classe user
      if(field.classList.contains('user')) {
        if(!this.validateUser(field)) isValid = false;
      }      
    }

    return isValid;
  }

  validateUser(field) {
    const userName = field.value;
    let isValid = true;

    //verifica se o usuário contém menos de 3 caracteres ou mais de 12 caracteres
    if(userName.length < 3 || userName.length > 12) {
      this.createException(field, 'Quantidade de caracteres inválida para o usuário (Min: 3 Max: 12)');
      isValid = false;
    }

    //verifica se o nome contém apenas letras e numeros
    if(!userName.match(/[a-zA-Z0-9]+$/g)) {
      this.createException(field, 'Usuário não pode conter caracteres especiais');
      isValid = false;
    }

    return true;
  }

  validateDocument(field) {
    //valida o CPF com uma classe de outro arquivo
    const document = new ValidateCPF(field.value);
    
    if(!document.validate()) {
      this.createException(field, 'CPF inválido');
    }

    return true;
  }

  createException(field, messageError) {
    //cria um novo elemento na tela
    const div = document.createElement('div');
    //coloca no texto desse elemento, a mensagem de erro que receber
    div.innerHTML = messageError;
    //adiciona uma classe a esse novo elemento que recebe o stilo de erros
    div.classList.add('error-message');

    field.insertAdjacentElement('afterend', div);//isso quer dizer que após o término do elemento 
    //varrido vai inserir o erro caso ele exista
  }
}

const isValid = new IsValidForm();