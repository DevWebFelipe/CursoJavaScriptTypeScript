const fs = require('fs').promises;
const path = require('path');

/* vai pegar todas as pastas e arquivos que tiverem no caminho recebido e chamar a função
Walk para listar tudo que encontrou */
async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir) ;

  walk(files);
}

function walk(files) {
   for(let file of files) {
      console.log(file);
   }
};

readdir('/Cursos/Web/Udemy');