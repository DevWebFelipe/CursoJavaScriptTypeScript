//Funções que chamam elas proprias, gera uma espécie de loop

//A função recebe um parâmetro
function recursiva(max) { 
  //Se esse parâmetro atender a uma determinada condição, executa o código da função
  if (max >= 10) return;

  //incremento o meu parâmetro
  max++;
  console.log(max);

  // chamo a função novamente com meu parâmetro atualizado, assim, ao passar pela 
  //validação do IF novament,e irá ver se continua atendendoa  condição
  recursiva(max);
}

recursiva(0);