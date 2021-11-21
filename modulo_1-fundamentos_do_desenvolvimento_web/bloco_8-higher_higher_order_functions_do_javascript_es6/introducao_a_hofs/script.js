// Exercise 1 ------------------------

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }

  return employees;
};

const employee = (fullName) => {
  const email = `${fullName.replace(' ', '_').toLowerCase()}@betrybe.com`;

  return {
    fullName,
    email: email,
  }
};

console.log(newEmployees(employee));

// Exercise 2 ------------------------

const randomizer = () => {
  const randomNum = Math.floor(Math.random() * 5)

  return randomNum;
}

const prizeDraw = (number, callback) => {
  if (number === callback) {
    console.log('Congrats!!!');
  } else {
    console.log('Maybe next time :/');
  }

  return callback
}

console.log(prizeDraw(2, randomizer()))

// Exercise 3 ------------------------

const correctAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentsAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const resCheckFunc = (corrAns, studAns) => {
  let counter = 0.0;

  studAns.forEach((ans, i) => {
    if (ans === corrAns[i]) {
      counter += 1.0;
    } else if (ans != corrAns[i] && ans != 'N.A') {
      counter -= 0.5
    }
  })

  return counter
};

const template = (corrAns, studAns, callback) => {
  return callback(corrAns, studAns)
};

console.log(template(correctAnswers, studentsAnswers, resCheckFunc));