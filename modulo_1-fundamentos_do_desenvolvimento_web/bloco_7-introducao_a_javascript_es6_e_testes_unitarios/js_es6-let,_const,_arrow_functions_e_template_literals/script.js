// First exercise

const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const oddsAndEvensFunction = () => {
  return oddsAndEvens.sort(function (a, b) {
    return a - b
  })
}

console.log(`Os números ${oddsAndEvensFunction()} se encontram ordenados de forma crescente!`);

// -----------------------------------------------------------------------------------------------------------------

// Second exercise

const factorial = (n) => {
  let nF = Number
  let initialNumber = n;

  for (let i = n; i > 0; i -= 1) {
    nF = (n *= i)
  }

  return nF / initialNumber;
}

console.log(factorial(5));