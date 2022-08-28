const resultado = document.querySelector('.data');
const data = new Date();

var options = {
  dateStyle: 'full'//,
  //timeStyle: 'short'
}

resultado.innerHTML = '';
resultado.innerHTML += data.toLocaleDateString('pt-BR', options);
resultado.innerHTML += '<br>';
resultado.innerHTML += '<br>';
resultado.innerHTML += '<br>';
resultado.innerHTML += '<br>outra forma, jogando as opções direto na sentaça';
resultado.innerHTML += '<br>';
resultado.innerHTML += '<br>';
resultado.innerHTML += '<br>';
//por algum motivo, a hora não funcionou, li a documentação, fiz exatemenente igual a aula
//mesmo assim não funcionou
resultado.innerHTML += data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });