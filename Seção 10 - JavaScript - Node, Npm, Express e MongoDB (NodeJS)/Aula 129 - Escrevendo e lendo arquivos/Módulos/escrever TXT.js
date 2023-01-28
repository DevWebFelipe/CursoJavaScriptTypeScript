const fs = require('fs').promises;
const path = require('path');

/*
  __dirname   -> pega o caminho até dentro da pasta onde está o arquivo que o chamou
  '..'        -> volta uma pasta, para escrever na pasta Aula 129.... ao invés de escrever dentro da pasta módulos
  'teste.txt' -> nome do arquivo onde será escrito
*/
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');

/*
  caminhoArquivo    -> caminho do arquivo a ser escrito
  'Frase 1'         -> Frase que será escrita
  \n                -> no final da string que vai ser escrita, faz com que quebre a linha
  flag: 'w'         -> Vai mandar um comando para apagar tudo que tiver lá, e escrever só o que eu estiver mandando
  flag: 'a'         -> Vai mandar um comando para escrever o que eu estiver mandando mantendo o que já tinha lá
  encoding: 'utf-8' -> Por padrão já envia utf-8, então não é necessário enviar, mas foi colocado pra ficar de exemplo
*/
fs.writeFile(caminhoArquivo, 'Frase 2\n', {flag: 'a', encoding: 'utf-8'});