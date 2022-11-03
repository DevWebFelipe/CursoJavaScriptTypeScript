const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateLetterUppercase = () => String.fromCharCode(rand(65, 91));
const generateLetterLowercase = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));

const symbol = ',.;[]{}"!@#$%&*()-_=+ªº/;:';
const generateSymbol = () => symbol[rand(0, symbol.length)]

export default function generatePassword(quantity, uppercase, lowercase, numbers, symbols) {
  const arrayPassword = [];
  quantity = Number(quantity);

  for(let i = 0; i < quantity; i++) {
    uppercase && arrayPassword.push(generateLetterUppercase());
    lowercase && arrayPassword.push(generateLetterLowercase());
    numbers && arrayPassword.push(generateNumber());
    symbols && arrayPassword.push(generateSymbol());
  }

  return arrayPassword.join('').slice(0, quantity);
}