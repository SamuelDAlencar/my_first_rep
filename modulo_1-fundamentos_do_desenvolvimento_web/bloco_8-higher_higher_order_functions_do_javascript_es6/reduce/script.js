// Exercise 1

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const arraysSum = arrays.reduce((array = [], currentItem) => {
    array.push(currentItem);

    return array
  })

  return arraysSum;
};

console.log(flatten());
console.log(arrays[1]);