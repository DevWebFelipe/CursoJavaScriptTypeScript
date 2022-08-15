/**
 * Felipe Teixeira tem 27 anos, pesa 126kg
 * tem 1.8 de altura e seu IMC é de 25.925925925925924
 * Felipe Teixeira nasceu em 1994 em Blumenau
*/

const mNome = 'Felipe';
const mSobranome = 'Teixeira'
const mIdade = 28;
const mAnoAtual = 2022;
const mPeso = 126;
const mAlturaEmMT = 1.80;
let mIndiceMassaCorporal; //peso / (altura * altura)
let mAnoNascimento;
const mCidadeNatal = 'Blumenau';

mIndiceMassaCorporal = mPeso / (mAlturaEmMT * mAlturaEmMT);
mAnoNascimento = mAnoAtual - mIdade;

//dessa maneira, cada sentença é um valor distinto, e o espaço entre eles gera automaticamente
console.log(mNome, mSobranome, 'tem', mIdade, 'anos, pesa', mPeso, 'kg,');

//dessa maneira, estou usando TEMPLATE STRING, dentro da string, tenho vairáveis que serão usadas
console.log(`tem ${mAlturaEmMT} de altura e seu IMC é de ${mIndiceMassaCorporal}.`);

//dessa maneira, estou usando concatenação, tenho melhor controle sobre cada elemento da sentença
console.log(mNome + ' nasceu em ' + mAnoNascimento + ' em ' + mCidadeNatal + '.');