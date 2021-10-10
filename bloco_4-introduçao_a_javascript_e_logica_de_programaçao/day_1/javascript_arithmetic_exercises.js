let a = 7
let b = 18
let c = 4

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

const d = 35

if (d > 0) {
  console.log("positive")
} else if (d < 0) {
  console.log("negative")
} else {
  console.log("zero")
}

// ----------------------------------

const L1 = 60
const L2 = 60
const L3 = 60

if (L1 + L2 + L3 == 180) {
  console.log("true")
} else {
  console.log("error")
}


