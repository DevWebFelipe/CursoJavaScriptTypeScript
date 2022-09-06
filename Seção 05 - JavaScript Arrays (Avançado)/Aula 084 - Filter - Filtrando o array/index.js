// Retorne os números maiores que 10
const numeros = [1, 5, 15, 3, 6, 50, 10, 35, 1000, 4, 90, 60, 30, 2];

// .filter = Recebe uma função que vai ser executada para cada posição do meu array
// é chamada de função de callback
const numerosFiltrados = numeros.filter(callbackFilter);

// Forma 1 de fazer (forma longa, não muito utilizada, mas apenas para ter de exemplo)
// Ao usar essa função dentro de um método filter() de um array
// automaticamente essa função vai receber 3 parâmetros, sem precisar passar nada
// 1º - VALOR = é o valor contido em cada posição
// 2º - INDICE = é a posição que está sendo verificada, o FILTER varre posição do array
// 3º - ARRAY = é o valor do array completo
function callbackFilter(valor, indice, array) { //vou colocar os parâmetros aqui apenas para ficar mais
  //fácil de eu entender, mas nem precisaria declarar o indice e array, pois não serão utilizados
  //basta entender que essa função pode trabalhar com esses 3 parametros, mesmo sem eu passar um valor
  //na chamada dela, pois os valores desses 3 parametros vem do filter()
  if (valor > 10) { //o Filter espera que seja retornado Boolean, True ou False, então se for maior
    //que 10, retorna True, o valor/indice que estiver sendo varrido e retornar True, será 
    //retornado no novo array que está recebendo o filtro desse array
    return true;
  } else {
    false;
  } //Lembrando que essa é uma forma longa para ficar de exemplo, tem formas melhores de fazer
}

const filtrandoMaiorQueDez = numeros.filter(callbackFilter); //nesse caso não será passado o ()
//pois a função será executada pelo filter, então, não posso passar ela e executar ()

console.log(filtrandoMaiorQueDez);