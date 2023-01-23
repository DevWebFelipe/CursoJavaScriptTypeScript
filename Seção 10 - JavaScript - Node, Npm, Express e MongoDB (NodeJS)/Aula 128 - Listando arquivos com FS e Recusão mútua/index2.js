const fs = require('fs').promises;
const { stat } = require('fs');
const path = require('path');

/* Esse exemplo usa a recurcividade, que seia ir entrando em cada uma das pastas encontradas no caminho determiado, depois irá listar o que tiver dentro dessas pastas individualmente, a recursividade ven de entrar em uma pasta dentro do caminho estipulado, listar o que encontrar, voltar para pasta de origem, entrar na próxima e repetir até listar todos os arquivos encontrados */

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir) ;

  walk(files, rootDir);
}

async function walk(files, rootDir) {
   for(let file of files) {
      const fileFullPath = path.resolve(rootDir, file);
      const stats = await fs.stat(fileFullPath);    
      
      /* descartando pasta do git */
      /* EXPRESSÃO REGULAR, quer dizer que o arquivo termirá com .git */
      if(/\.git/g.test(fileFullPath)) continue;

      /* descartando pasta node_modules */
      /* EXPRESSÃO REGULAR, quer dizer que o nome do arquivo tem que ser node_modules */
      if(/node_modules/g.test(fileFullPath)) continue;

      if(stats.isDirectory()){
         readdir(fileFullPath);
         continue;
      }     

      /* Aqui entra um pouco de lógica de programação, para eu saber se a extenção do arquivo termina em .css, preciso ler o arquivo
         então precisa estar depois do IF que descarta pastas e le os arquivos, pois caso contrário, irá descartar as pastas por não terminar com
         .css e aí não vai ler nada */
      /* pegando apenas arquivos de CSS */
      /* EXPRESSÃO REGULAR, a exclação quer dizer DIFERENTE, então se o nome do arquivo for diferente
         da condição que estou estipulando no IF, nesse caso, se o final do arquivo for diferente de .css
         o SIFRÃO $ quer dizer que não pode ter mais nada depois de .css */
         if(!/\.css$/g.test(fileFullPath) &&
            !/\.html$/g.test(fileFullPath)) continue;               

      console.log(fileFullPath, stats.isDirectory());
   }
};

readdir('/Cursos/Web/Udemy/JavaScript e TypeScript');