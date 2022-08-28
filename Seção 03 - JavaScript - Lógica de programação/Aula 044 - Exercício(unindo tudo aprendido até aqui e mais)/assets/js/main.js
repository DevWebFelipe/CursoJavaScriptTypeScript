//Capturar o evento de submit do formulário

//1º Selecionar o formulário para acessar seus elementos
const form = document.querySelector('#formulario')

//2º Acessar a lista de eventos do form, passar o evento
//que desejo capturar, e passar o preventDefault vazio
//Assim, ao clicar, não vai enviar a página e vou poder 
//fazer os tratamentos que eu desejar
form.addEventListener('submit', function (event) {
  event.preventDefault(); //para não permtir enviar o formulário
  const inputPeso = event.target.querySelector('#peso');
  const inputAltura = event.target.querySelector('#altura');
  
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResult('Peso inválido', false);
    return; //só para não seguir no código caso tivesse, se o valor for 
    //inválido, tem que sair fora da função
  }

  if (!altura) {
    setResult('Altura inválido', false);
    return; //só para não seguir no código caso tivesse, se o valor for 
    //inválido, tem que sair fora da função
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é: <strong>${imc}</strong><br>O seu nível IMC é: <strong>${nivelImc}</strong>`;

  setResult(msg, true);
});

function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  /*if (imc >= 39.9) {
    return nivel[5];
  } else if (imc >= 34.9) {
    return nivel[4];
  } else if (imc >= 29.9) {
    return nivel[3];
  } else if (imc >= 24.9) {
    return nivel[2];
  } else if (imc >= 18.5) {
    return nivel[1];
  } else {
    return nivel[0];
  }*///como o return finaliza o if, não precisa verificar com else

  /*if (imc >= 39.9) {
    return nivel[5];
  }

  if (imc >= 34.9) {
    return nivel[4];
  }

  if (imc >= 29.9) {
    return nivel[3];
  }

  if (imc >= 24.9) {
    return nivel[2];
  }

  if (imc >= 18.5) {
    return nivel[1];
  }

  if (imc < 18.5) {
    return nivel[0];
  }*///como é uma instrução pequena, posso colocar em uma única linha
  //porém, não é recomendável

  if (imc >= 39.9) return nivel[5];    
  if (imc >= 34.9) return nivel[4];    
  if (imc >= 29.9) return nivel[3];    
  if (imc >= 24.9) return nivel[2];    
  if (imc >= 18.5) return nivel[1];    
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso/(altura ** 2);
  return imc.toFixed(2);
}

function criaParagrafo () {
  const paragrafo = document.createElement('p');
  return paragrafo;
}

//Criar uma função para exibir o resultado
function setResult (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
 
  const paragrafo = criaParagrafo();

  if (isValid) {
    paragrafo.classList.add('paragrafo-resultado');
  } else {
    paragrafo.classList.add('paragrafo-erro');
  }

  paragrafo.classList.add('bordas-arredondadas');
  
  paragrafo.innerHTML = msg;
  resultado.appendChild(paragrafo);

}