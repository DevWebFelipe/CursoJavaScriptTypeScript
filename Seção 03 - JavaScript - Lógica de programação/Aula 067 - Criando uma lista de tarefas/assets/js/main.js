const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
  const li = document.createElement('li');
  return li;
}

function criaTarefa(textoInput) {
  const li = criaLi();   
  li.innerText += textoInput;  
  tarefas.appendChild(li);
  limpaInput();
  criaBotapApagar(li);
  salvarTarefas();
}

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas); //converte JSON para STRING
  localStorage.setItem('tarefas', tarefasJSON);
}

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaBotapApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  //botaoApagar.classList.add('btn');
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'Apagar essa tarefa');
  botaoApagar.innerText = 'Apagar';
  li.appendChild(botaoApagar);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas); //converte STRING para JSON

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

inputTarefa.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
})

btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
  const elementoClicado = e.target;

  if (elementoClicado.classList.contains('apagar')) {
    elementoClicado.parentElement.remove();
    salvarTarefas();
  }
})

adicionaTarefasSalvas();