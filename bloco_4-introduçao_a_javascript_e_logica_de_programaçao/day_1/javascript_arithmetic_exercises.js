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