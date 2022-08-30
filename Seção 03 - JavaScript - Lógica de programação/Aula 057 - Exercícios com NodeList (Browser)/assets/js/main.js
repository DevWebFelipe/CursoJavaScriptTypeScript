// querySelector - só retorna 1 elemento, retorna o 1º que encontrar com essa classe
const paragrafos = document.querySelector('.paragrafo'); 

// querySelectorAll - Retorna uma coleção, no caso, todos os P que tiveren no elemento pai
const tagP = paragrafos.querySelectorAll('p');

// o retorno da seleção acima, se comporta de forma muito semelhante a um array, inclusive com
// índice, então eu posso fazer um FOR OF, que me retornará o o próprio parágrafo
// dentro do índice da seleção
for (let p of tagP) {
  console.log(p);
}

// pegar os estilos aplicados a um elemento com a função getComputedStyle()
// nesse caso, vou pegar do que foi aplicado ao body, depois, eu seleciono
// o estilo aplicado que vou querer utilizar, no caso, quero usar a cor de 
// fundo do body, para depois aplicar ao fundo dos meus parágrados
const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;


for (let p of tagP) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#fff';
}