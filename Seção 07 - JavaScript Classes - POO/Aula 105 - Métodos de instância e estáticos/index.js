
//métodos que vão poder ser chamados sem precisar instanciar a classe
//no delphi, é o equivalente a CLASS FUNCTION e CLASS PROCEDURE
function teste() {
  console.log('Função criada fora da classe mas chamada dentro da classe');
}

class ControleRemoto{
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
    teste();
  }

  aumentarVolume() {
    this.volume++;
  }

  //Método de instância, chamado com nome da instância que recebe a classe
  diminuirVolume() {
    this.volume--
  }

  //Método estático -> Mesma coisa que CLASS FUNCTION e CLASS PROCEDURE do Delphi
  static trocarPilhas() {
    console.log('Trocado pilhas');
  }
}

const controleUm = new ControleRemoto('Tv SALA');
controleUm.aumentarVolume();
controleUm.aumentarVolume();
controleUm.aumentarVolume();
controleUm.aumentarVolume();
console.log(controleUm);

//chamada de um método estático deve ser feito direto pela classe
ControleRemoto.trocarPilhas();