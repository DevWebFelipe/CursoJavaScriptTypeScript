function ValidaCPF(cpf) {
  Object.defineProperty(this, 'cpfSemMascara', {
    enumerable: true,
    get: function() {
      return cpf.replace(/\D+/g, '');
    }
  })  
}

ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfSemMascara === 'undefined') return false; //valida se tem algo informado
  if (this.cpfSemMascara.length !== 11) return false; //valida se o que tem informado contém 11 caracteres
  if (this.isSequencia()) return false; //valida se o CPF é sequencial ou de números repeditos
  //é um método criado no prototype

  const cpfParfcial = this.cpfSemMascara.slice(0, -2); //pega da posição 0 até a 
  //posição final -2, que no caso seria a posição 9

  const digito1 = this.buscaDigito(cpfParfcial); //com os 9 primeiros dígitos, busca o 10º dígito
  const digito2 = this.buscaDigito(cpfParfcial + digito1); //com os 10 primeiris dígitos, busca o 11º dígito
  const novoCpf = cpfParfcial + digito1 + digito2; //monta um novo CPF com os 9 primeiros dígitos mais os 2 
  //retornados
  return novoCpf === this.cpfSemMascara; //valida se o CPF montado é igual ao CPF passado para validar
};

ValidaCPF.prototype.buscaDigito = function (cpfParcial) { //recebe os 9 primeiros dígitos na primeira chamada
  //e os 10 primeiros na segunda chamada

  const arrayCpf = Array.from(cpfParcial); //transforma o cpfParcial recebido em um Array
  let regressivo = (arrayCpf.length + 1); //determia o valor da multimplicação regressiva, quando 9 dígitos, 
  //começará de 10, quando 10 começará de 11

  const total = arrayCpf.reduce((ac, val) => {
    ac += (regressivo * Number(val));
    regressivo--;
    return ac;
  }, 0); //Aqui é mais complicado
  //1º está sendo usado o reduce que vai varrer cada posição do array e acumular o valor em uma variável
  //2º o valor acumulado está recebendo ele próprio + o valor regressivo vezes o valor do índice atual do array
  //3º vai decrementar o regressivo
  //4º vai retornar o valor acumulado para que possa ser usado na próxima inderação do laço
  //5º está setando um valor inicial

  const digito = 11 - (total % 11); //conforme fórmula, o retorno do tota, vai ser usado aqui
  //11 menos o resto da divisão(mod = %) entre o total retornado na varredura do array acima

  return digito > 9 ? '0' : String(digito); //se o valor do cálculo acima for maior que nov
  //vai retornar zero, foi suado uma operação ternária para montar essa condição
  //para que depois possa ser possível  montar o CPF novamente em uma string para comparar com o CPF
  //passado na chamada da função, está sendo convertido o retorno para string
}

ValidaCPF.prototype.isSequencia = function (cpfSemMascara) {
  const sequencia = this.cpfSemMascara[0].repeat(this.cpfSemMascara.length); //essa função repeat, vai repetir 
  //o caracter que receber, a quantidade de vezes que eu determiar, nesse caso, ta pegando o primeiro caracter
  //do cfpSemMascara e repetindo até a quantidade de caracteres que tiver no cpfSemMascara

  return sequencia === this.cpfSemMascara;
}

const cpf1 = '705.484.450-52';
const cpf2 = '070.987.720-03';
const cpf3 = '111.111.111-11';
const cpf4 = '091.502.259-10';
const cpf5 = '091.502.259-11';
const cpf6 = '091.503.259-10';

const validaCpf1 = new ValidaCPF(cpf1);
const validaCpf2 = new ValidaCPF(cpf2);
const validaCpf3 = new ValidaCPF(cpf3);
const validaCpf4 = new ValidaCPF(cpf4);
const validaCpf5 = new ValidaCPF(cpf5);
const validaCpf6 = new ValidaCPF(cpf6);

console.log(`O CPF ${cpf1} é válido?`, validaCpf1.valida());
console.log(`O CPF ${cpf2} é válido?`, validaCpf2.valida());
console.log(`O CPF ${cpf3} é válido?`, validaCpf3.valida());
console.log(`O CPF ${cpf4} é válido?`, validaCpf4.valida());
console.log(`O CPF ${cpf5} é válido?`, validaCpf5.valida());
console.log(`O CPF ${cpf6} é válido?`, validaCpf6.valida());

/*
Uma validação de formulário por exemplo ficaria assim

if (cpf.valida(intupNaTela)) {
  console.log('Cpf válido')
} else {
  console.log('Cpf inválido');
}

*/