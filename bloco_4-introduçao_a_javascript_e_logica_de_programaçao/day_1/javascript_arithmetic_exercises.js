let a = 7
let b = 18
let c = 4
const d = 35

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

if (d > 0) {
  console.log("positive")
} else if (d < 0) {
  console.log("negative")
} else {
  console.log("zero")
}