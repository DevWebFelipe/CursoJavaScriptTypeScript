//Capturar o evento de submit do formulário

//1º Selecionar o formulário para acessar seus elementos
const form = document.querySelector('#formulario')

//2º Acessar a lista de eventos do form, passar o evento
//que desejo capturar, e passar o preventDefault vazio
//Assim, ao clicar, não vai enviar a página e vou poder 
//fazer os tratamentos que eu desejar
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputPeso = event.target.querySelector('#peso');
  const inputAltura = event.target.querySelector('#altura');
  
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResult('Peso inválido', false);
    return; //só para não seguir no código, se o valor for 
    //inválido, tem que sair fora da função
  }

  if (!altura) {
    setResult('Altura inválido', false);
    return; //só para não seguir no código, se o valor for 
    //inválido, tem que sair fora da função
  }

  console.log(peso, altura)
});

function criaParagrafo () {
  const paragrafo = document.createElement('p');
  return paragrafo;
}

//Criar uma função para exibir o resultado
function setResult (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  resultado.appendChild(criaParagrafo('paragrafo-resultado'));
  const paragrafo = criaParagrafo();
}