class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado) {
      console.log(`${this.nome} já está ligado!`);
      return;
    }

    console.log(`Ligando ${this.nome}`);
    this.ligado = true;
  }

  desligar(){
    if(this.ligado) console.log(`Desligando ${this.nome}`);
    this.ligado = false;
  }
}

const dipositivoUm = new DispositivoEletronico('Smartphone');
console.log(dipositivoUm);
dipositivoUm.desligar();
dipositivoUm.ligar();
dipositivoUm.ligar();
dipositivoUm.desligar();

console.log();
console.log();
/* Classe que herdará o corpo da classe DispositivoEletronico */
class Smartphone extends DispositivoEletronico {//EXTENDS quer dizer que a classe Spartiphone vai 
  //extender/herdar de DispositivoEletronico
  constructor(nome, memoria, cor) {
    super(nome); //Como quero implementar mais coisa além do que já tem na classe de quem estou herdando
    //tenho que chamar o SUPER, nele, tenho que passar os parametros que são usados na classe de pai
    this.memoria = memoria;
    this.cor = cor
  }
}

const smartphone = new Smartphone('Moto Edge 20', '128Gb', 'Preto');
console.log(smartphone);
smartphone.desligar();
smartphone.ligar();
smartphone.ligar();
smartphone.desligar();

console.log();
console.log();

class Tablet extends DispositivoEletronico{
  constructor(nome, cor, bateria) {
    super(nome);
    this.cor = cor;
    this.bateria = bateria
  }

  ligar() {
    if(this.ligado) {
      console.log(`${this.nome} já está ligado`);
      return;
    }

    console.log(`Ligando ${this.nome}`)
    if(this.bateria < 10) console.log(`${this.nome} com bateria fraca`);
    this.ligado = true;
  }

  mostraBateria() {
    if(!this.ligado) return; //se this.ligado diferente de verdadeiro, ou seja
    //se o tabled estiver desligado, então retorna de onde está e não mostra a bateria
    console.log(`Capacidade da bateria em ${this.bateria}%`);
  }
}

const tablet = new Tablet('iPad', 'Branco', 5);
console.log(tablet);
tablet.desligar();
tablet.mostraBateria();
tablet.ligar();
tablet.ligar();
tablet.mostraBateria();
tablet.desligar();
tablet.mostraBateria();