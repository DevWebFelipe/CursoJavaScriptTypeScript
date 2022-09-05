const  nomes = ['Felipe', 'Giulia', 'Isis', 'Amora', 'Amelia', 'Amadeu', 'Matilda'];
console.log('Array nomes original: ', nomes);

const peixes = nomes.slice(5); //pega os índices do array nome de 5 até o último
console.log();
console.log('Peixes da casa: ', peixes);

const cachorros = nomes.slice(3, 5); //pega os índices do array nome de 3 até 5
//mas o 5 não é incluído, então pega o 3 e 4
console.log();
console.log('Cachorros da casa: ', cachorros);

const humanos = nomes.slice(0, -4); //pega os índices do array nome a partir de 0 deixando 
//os 4 últimos de fora
console.log();
console.log('Humanos da casa: ', humanos);

const bebes = nomes.slice(2, -4); //pega os índices do array nome a partir de 2 deixando 
//os 4 últimos de fora
console.log();
console.log('Bebes da casa: ', bebes);