
//é possível usar um gerador para chamar outro gerador
function* gerador() {
  yield 0;
  yield 1;
  yield 2;
}

function* gerador1() {
  yield* gerador();
  yield 3;
  yield 4;
  yield 5;
}

function* gerador2() {
  yield* gerador1();
  yield 6;
  yield 7;
  yield 8;
}

const gera = gerador2();

for (let valor of gera) {
  console.log(valor)
}

console.log();
console.log();

//posso fazer uma função geradora retornar outras funções
function* gerador3() {
  yield function() {
    console.log('Vim do y1');
  }
  yield function() {
    console.log('Vim do y2');
  }
  //o RETURN, vai finalizar a função geradora
  return function() {
    console.log('Vim do return');
  }
  yield function() {
    console.log('Vim do y4');
  }
}

const g = gerador3();
const func1 = g.next().value;
const func2 = g.next().value;
const func3 = g.next().value;

func1();
func2();
func3();