let a = 7;
let b = 18;
let c = 4;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

if (a > b) {
  console.log(a)
} else {
  console.log(b)
}

if (a > b && c) {
  console.log(a)
} else if (b > a && c) {
  console.log(b)
} else {
  console.log(c)
}

// ----------------------------------

const d = 35;

if (d > 0) {
  console.log("positive")
} else if (d < 0) {
  console.log("negative")
} else {
  console.log("zero")
}

// ----------------------------------

const L1 = 60;
const L2 = 60;
const L3 = 60;

if (L1 + L2 + L3 == 180) {
  console.log("true")
} else {
  console.log("error")
}

// ----------------------------------

let piece = "bishop"

piece.toUpperCase();

switch (piece) {
  case "king": console.log("Any direction")
    break;

  case "bishop": console.log("Diagonally")
    break;
  
  case "knight": console.log("L shape")
    break;
}

// ---------------------------------- 

let nota = 90

if (nota >= 90) {
  console.log("A")
} else if (nota >= 90) {
  console.log("B")
} else if (nota >= 80) {
  console.log("C")
} else if (nota >= 70) {
  console.log("D")
} else if (nota >= 60) {
  console.log("E")
} else if (nota < 50) {
  console.log("F")
} else if (nota < 0 || nota > 100) {
  console.log ("!!! error !!!")
}

// ---------------------------------- 

const number1 = 16;
const number2 = 7;
const number3 = 35;

if (number1 % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0) {
  console.log(true)
} else {
  console.log(false)
}

// ---------------------------------- 

const numberA = 54;
const numberB = 17;
const numberC = 26;

if (numberA % 2 > 0 || numberB % 2 > 0 || numberC % 2 > 0) {
  console.log(true)
} else {
  console.log(false)
}

// ---------------------------------- 

const Custo = 50;
const ImpostoSobCusto = 10;
const CustoTotal = Custo + ImpostoSobCusto;
const ValorDeVenda = 70;



if (ValorDeVenda && Custo > 0) {
  const lucro = ValorDeVenda * 1000 - CustoTotal * 1000
  console.log(lucro)
} else {
  console.log("! error ! invalid entry numbers ")
}

// ---------------------------------- 

let salarioBruto = 3500.70;

if (salarioBruto <= 1556.94) {
  let salarioBase = salarioBruto -= 280.056
} else if (salarioBruto >= 1556.95 &&  salarioBruto < 2594.92) {
  salarioBase = salarioBruto -= 315.063
} else if (salarioBruto >= 2594.93 &&  salarioBruto < 5189.82) {
  salarioBase = salarioBruto -= 385.077
} else if (salarioBruto > 5189.82) {
  salarioBase = salarioBruto -= 570.88
}

console.log ("Salario base: " + salarioBase)

if (salarioBase <= 1903.98) {
  console.log("Isento de imposto de renda")
} else if (salarioBase > 1903.99 && salarioBase < 2826.65) {
  let salarioLiquido = salarioBase -= (233.67 - 142.80)
} else if (salarioBase > 2826.66 && salarioBase < 3751.05) {
  let salarioLiquido = salarioBase -= (467.34 - 354.80)
} else if (salarioBase > 3751.06 && salarioBase < 4664.68) {
  let salarioLiquido = salarioBase -= (701.01 - 636.13)
} else if (salarioBase > 4664.68) {
  let salarioLiquido = salarioBase -= (856.79 - 869.36)
}

console.log ("Salario liquido: " + salarioBase)

// ---------------------------------- 