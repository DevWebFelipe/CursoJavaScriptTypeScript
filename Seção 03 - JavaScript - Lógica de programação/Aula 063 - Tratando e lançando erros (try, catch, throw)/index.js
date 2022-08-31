
// TRY - Tente executar algo
// CATCH - Se não conseguir, execute isso
console.log();
console.log('Tratando erro');
try {
  console.log(naoExisto);
} catch (err) {
  console.log('Variável inexistente. (naoExisto)')
  console.log(err) //normalmente, deve-se tratar isso, salvar em log
  //ou na base de dados, mas não se deve mostrar isso no console
}

console.log();
console.log();

console.log('Gerando erro para capturar depois');
function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    //throw('x e y precisam ser números');    
    throw new Error('x e y precisam ser números');    
  }

  return x + y;
}

//Tratando o erro que foi gerado na função
try {
  console.log(soma(1, 3));
  console.log(soma('1', 3));
} catch(err) {
  //console.log(err);  //esse, sempre deve ser usado apenas para o desenvolvedor
  console.log('Erro amigável');
}
