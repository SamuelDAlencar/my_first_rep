let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (index = 0 ; index < numbers.length ; index++) {
  console.log(numbers[index])
}

console.log("// -------------------------------")
// -------------------------------

for (index = 0 ; index < numbers.length ; index++) {
  soma += numbers[index];
}

console.log(soma);

console.log("// -------------------------------")
// -------------------------------

let mediaAritmetica = soma / numbers.length;

console.log("A média aritmetica é: " + mediaAritmetica);

if (mediaAritmetica > 20) {
  console.log("A média aritmetica é maior que 20") 
} else {
  console.log("A média aritmetica é menor que 20")
}

console.log("// -------------------------------")
// -------------------------------

let maiorNumero = 0;

for (index = 0 ; index < numbers.length ; index++) {
  if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
  }
}

console.log(maiorNumero)

console.log("// -------------------------------")
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

console.log("// -------------------------------")
// -------------------------------

let menorNumero = 0;

for (index = 0 ; index < numbers.length ; index++) {
  if (numbers[index] < numbers[index]) {
    menorNumero = numbers[index];
  }
}

console.log(menorNumero)

console.log("// -------------------------------")
// -------------------------------

let counter = []

for (let i = 1 ; i <= 25 ; i++) {
  counter.push(i)
}

console.log(counter)

console.log("// -------------------------------")
// -------------------------------

for (let i = 0 ; i < counter.length ; i++) {
  console.log(counter[i] / 2);
}

console.log("// -------------------------------")
// -------------------------------
