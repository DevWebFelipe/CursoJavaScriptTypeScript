import generatePassword from './generators';

const generatedPassword = document.querySelector('.generatedPassword');
const numberOfCharacters = document.querySelector('.numberOfCharacters');
const chkUpperCase = document.querySelector('.chkUpperCase');
const chkLowerCase = document.querySelector('.chkLowerCase');
const chkNumbers = document.querySelector('.chkNumbers');
const chkSymbols = document.querySelector('.chkSymbols');
const btnGenerate = document.querySelector('.generate');

export default () => {
  btnGenerate.addEventListener('click', () => {
    generatedPassword.innerHTML = generate();
  });
};

function generate() {
  const password = generatePassword(
    numberOfCharacters.value,
    chkUpperCase.checked,
    chkLowerCase.checked,
    chkNumbers.checked,
    chkSymbols.checked
  );

  return password || 'Password parameters not defined';
}