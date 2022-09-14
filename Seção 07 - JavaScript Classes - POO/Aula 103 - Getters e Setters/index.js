
const _velocidade = Symbol('velocidade');//isso cria um chave privada, é uma forma de proteger o meu
//campo de receber um valor direto, nesse caso, usei o UNDERLINE pra eu saber que se refere a uma chave
//privada, depois, pra chamar ela dentro do meu objeto, eu chamo this[] com colchetes e passo a chave
//o Symbol faz gera uma ID interna toda vez que chamado, então nunca vai repetir
//pra eu acessar essa chave agora, eu vou utilizar um GETTER
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  get velocidade() {
    return this[_velocidade];
  }

  set velocidade(valor) {
    if(typeof valor!== 'number') return;
    if(valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  acelerar() {
    if(this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if(this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const carroUm = new Carro('C4');

for (let i = 0; i<= 200; i++) {
  carroUm.acelerar();
}
console.log(carroUm);
console.log();

carroUm.velocidade = 2000;
console.log(carroUm.velocidade);
carroUm.velocidade = 50;
console.log(carroUm.velocidade);