/*
Bom dia   - 0  - 12
Boa tarde - 12 - 18
Boa noite - 18 - 23
*/

function saudar (hora) {
  if (hora >= 0 && hora <= 12)  {
    return 'Bom dia';
  } else if (hora > 12 && hora <= 18) {
    return 'Boa tarde';
  } else if (hora > 18 && hora <= 23) {
    return 'Boa noite';
  } else {
    return 'Olá';
  }
}

let hora = 5;
console.log('São ' + hora + ' horas.', saudar(hora));

hora = 15;
console.log('São ' + hora + ' horas.', saudar(hora));

hora = 20;
console.log('São ' + hora + ' horas.', saudar(hora));

hora = 34;
console.log('São ' + hora + ' horas.', saudar(hora));

const estaEnsolarado = true;

if (estaEnsolarado) {
  console.log('vou sair de casa');
} else {
  console.log('vou ficar em casa');
}