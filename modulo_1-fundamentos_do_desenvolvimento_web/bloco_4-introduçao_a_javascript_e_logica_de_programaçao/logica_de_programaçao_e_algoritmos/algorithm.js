// Exercise 1 ------------------------------------------

let n = 5;

let text1 = '';

for (let iC = 0; iC < n; iC++) {
  text1 += "*"
}

for (iL = 0; iL < n; iL++) {
  console.log(text1)
}

console.log("---------------------------")

// Exercise 2 ------------------------------------------

let text2 = '';

for (let i = 0; i < n; i++) {
  text2 += "*"

  console.log(text2)
}

console.log("---------------------------")

// Exercise 3 ------------------------------------------

let text3 = '';
let symbol = '*';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      text3 = text3 + ' ';
    } else {
      text3 = text3 + symbol;
    }
  }

  console.log(text3);
  text3 = '';
  inputPosition -= 1;
};

console.log("---------------------------")
