/*
fetch('pessoas.json')
  .then(response => response.json())
  .then(json => {
    console.log(json)
    loadJson(json)
  });
*/
axios('pessoas.json')  
  .then(response => loadJson(response.data))

function loadJson(json) {
  const table = document.createElement('table');

  for(let pessoa of json) {
    const tr = document.createElement('tr');

    let tdName = document.createElement('td');
    tdName.innerHTML = pessoa.nome;
    tr.appendChild(tdName);

    let tdAge = document.createElement('td');
    tdAge.innerHTML = pessoa.idade; 
    tr.appendChild(tdAge);

    let tdEmail = document.createElement('td');
    tdEmail.innerHTML = pessoa.email;
    tr.appendChild(tdEmail);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.result');
  resultado.appendChild(table);
}
