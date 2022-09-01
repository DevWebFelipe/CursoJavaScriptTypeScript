try {
  //console.log(a); //forçar dar erro para ver o funcionamento
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerou erro (deu erro aqui e não fechou o arquivo)');
  console.log('Fechei o arquivo');
  console.log();
  try {    
    console.log('Entrou no try interno');
    console.log('Abri outro arquivo')
    console.log(a);
    console.log('Fechei o arquivo do try interno');
  } catch (e) {
    console.log('Deu erro no try interno');
  } finally {
    console.log('Verifico se o arquivo do try interno está aberto, se estiver, fecho');
  }
  console.log();
  //Executa sempre
} catch (e) {
  console.log('Tratei o erro');
  //Se der erro, executa
} finally {
  console.log('Verifico se está aberto, se estiver, fecho')
  //Dando erro ou não, vai ser executado
}