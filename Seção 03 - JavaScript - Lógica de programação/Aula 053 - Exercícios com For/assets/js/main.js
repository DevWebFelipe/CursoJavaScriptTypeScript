const elementos = [
  {tag: 'p', texto: 'Frase 1'},       //0
  {tag: 'div', texto: 'Frase 2'},     //1
  {tag: 'footer', texto: 'Frase 3'},  //2
  {tag: 'section', texto: 'Frase 4'}, //3
]

const container = document.querySelector('.container');
const divContainer = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  /*console.log(elementos[i]); // Pegando a tag de cada objeto dentro do array de acordo com sua posição
  console.log(elementos[i].tag);
  console.log(elementos[i].texto);*/

  //Desestruturando array de objetos
  let { tag, texto } = elementos[i];
  //console.log(tag, texto)

  let elemento = document.createElement(tag);
  //elemento.innerText = texto; //se só tiver texto, não precisa usar o innerHTML
  //elemento.innerHTML = texto; //se tiver qualquer tag HTML tem que usar o innerHTML
  
  //outra forma de inserir o texto, seria criar um Node texto
  let textoNode = document.createTextNode(texto);
  elemento.appendChild(textoNode);

  divContainer.appendChild(elemento);
}

container.appendChild(divContainer);