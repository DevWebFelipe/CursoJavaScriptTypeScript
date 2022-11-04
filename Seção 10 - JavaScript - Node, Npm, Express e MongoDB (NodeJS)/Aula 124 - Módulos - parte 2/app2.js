const path = require('path');
// na pasta do arquivo, ele vai voltar duas pastas, vai entrar
//na pasta arquivos e depois na pasta imagens
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));

console.log(__filename); //caminho completo até o arquivo
console.log(__dirname); //caminho completo até a pasta do arquivo sem a barra de entrada na pasta