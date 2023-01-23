const fs = require('fs').promises;
const path = require('path');

/* vai retornar todos os arquivos dentro da pasta onde está sendo executado
   essa função */
fs.readdir(path.resolve(__dirname))
  .then(files => console.log(files))
  .catch(e => console.log(e));