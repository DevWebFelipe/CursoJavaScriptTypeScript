const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'ViaAppJS.json');
const escreve = require('./Módulos/escrever');
const ler = require('./Módulos/ler');

const pessoas = [
  {nome: 'João'},
  {nome: 'Maria'},
  {nome: 'Eduardo'},
  {nome: 'Giulia'},
  {nome: 'Isis'},
  {nome: 'Felipe'},
];

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json)

async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  return dados;
}

const dadosLidos = lerArquivo(caminhoArquivo)
  .then(dados => console.log(dados));