function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  function recebeEventoForm (evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    const objetoPessoa = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    }

    pessoas.push(objetoPessoa);    
    console.log(pessoas);

    resultado.innerHTML += `<p>${objetoPessoa.nome} ${objetoPessoa.sobrenome} ${objetoPessoa.peso} ${objetoPessoa.altura}</p>`;
  }
  form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();