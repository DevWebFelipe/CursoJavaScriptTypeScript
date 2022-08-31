function ePaisagem(largura, altura) {
  //a funcção vai retornar ou true ou false, então não precisa escrever o retorno
  //porque o próprio resultado da verificação já pode ser o retorno
  return (largura >= altura)// ? false : true;
}
console.log('A imagem está em formato paisagem?', ePaisagem(1920, 1080));

//fatorando para Arrow function
const ePaisagem2 = (largura, altura) => (largura >= altura);
console.log('A imagem está em formato paisagem?', ePaisagem2(1080, 1920));