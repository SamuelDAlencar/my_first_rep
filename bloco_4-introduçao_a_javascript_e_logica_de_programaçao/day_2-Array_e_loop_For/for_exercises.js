let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (index = 0 ; index < numbers.length ; index++) {
  console.log(numbers[index])
}

// -------------------------------

for (index = 0 ; index < numbers.length ; index++) {
  soma += numbers[index];
}

console.log(soma);

// -------------------------------

let mediaAritmetica = soma / numbers.length;

console.log(mediaAritmetica);

if (mediaAritmetica > 20) {
  console.log("valor maior que 20") 
} else {
  console.log("valor menor que 20")
}

// -------------------------------

let maiorNumero = 0;

for (index = 0 ; index < numbers.length ; index++) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}

console.log(maiorNumero)

// -------------------------------

numerosImpares = 0

for (index = 0 ; index < numbers.length ; index++) {
  if (numbers[index] % 2 != 0) {
    numerosImpares++
  } else if (numerosImpares == 0){
    console.log("erro")
  }
}

console.log(numerosImpares)

// -------------------------------

let menorNumero = 0;

for (index = 0 ; index < numbers.length ; index++) {
  if (numbers[index] != 0 || numbers[index] < numbers[index]) {
    menorNumero = numbers[index];
  }
}

console.log(menorNumero)

// -------------------------------