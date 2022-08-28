const data = new Date('1994-10-23 11:03:00');
const indiceDiaSemana = data.getDay();

//case sempre vai ter que ter o break, caso contrário, vai executar todas as demais
//instruções, incluindo o default

/*switch (indice) {
  case 0: 
    NomeDiaSemana = 'Domingo';
    break;
  case 1: 
    NomeDiaSemana = 'Segunda';
    break;
  case 2: 
    NomeDiaSemana = 'Terça';
    break;
  case 3: 
    NomeDiaSemana = 'Quarta';
    break;
  case 4: 
    NomeDiaSemana = 'Quinta';
    break;
  case 5: 
    NomeDiaSemana = 'Sexta';
    break;
  case 6: 
    NomeDiaSemana = 'Sábado';
    break;
  default:
    NomeDiaSemana = 'Dia incorreto';
    break;
}*/

//se o case estiver dentro de uma função, basta usar o return, que já vai quebrar o código
//assim não precisa colocar o break em cada condição do case

function getNomeDiaSemana (indice) {
  switch (indice) {
    case 0: return 'Domingo';
    case 1: return 'Segunda';
    case 2: return 'Terça';
    case 3: return 'Quarta';
    case 4: return 'Quinta';
    case 5: return 'Sexta';
    case 6: return 'Sábado';
    default: return 'Dia incorreto';
  }
}

console.log(indiceDiaSemana, getNomeDiaSemana(indiceDiaSemana));