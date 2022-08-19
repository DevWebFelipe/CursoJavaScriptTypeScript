const mNumero = Number(prompt('Digite um número'));

const mNumeroTitulo = document.getElementById('numero-titulo');
const mDivTexto = document.getElementById('texto');

mNumeroTitulo.innerHTML = mNumero;
mDivTexto.innerHTML = `<p>A raiz quadrada: <strong>${(mNumero ** (1/2))}</strong></p>`;
mDivTexto.innerHTML += `<p><strong>${mNumero}</strong> é inteiro? <strong>${Number.isInteger(mNumero)}</strong> </p>`;
mDivTexto.innerHTML += `<p><strong>${mNumero}</strong> é NaN? <strong>${Number.isNaN(mNumero)}</strong> </p>`;
mDivTexto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(mNumero)}</strong> </p>`;
mDivTexto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(mNumero)}</strong> </p>`;
mDivTexto.innerHTML += `<p>Arredondando com duas casas decimais: <strong>${mNumero.toFixed(2)}</strong> </p>`;