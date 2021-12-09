// Exercise 1

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const arraysSum = arrays.reduce((array, currentItem, i) => {
    currentItem.forEach((item) => {
      array.push(item)
    })

    return array
  }, [])

  return arraysSum;
};

console.log(flatten());

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Exercise 2

function reduceNames() {
  const allNames = books.reduce((allNamesString, currentBook) => {
    return allNamesString += `${currentBook.author.name}, `
  }, '');

  return allNames
}

console.log(reduceNames())

// Exercise 3

function averageAge() {
  const agesSum = books.reduce((allAges, currentBook) => {
    return allAges += (currentBook.releaseYear - currentBook.author.birthYear)
  }, 0)

  return agesSum / books.length
}

console.log(averageAge())

// Exercise 4

function longestNamedBook() {
  const longestBookName = books.reduce((biggestNameBook, currentBook) => {
    if (currentBook.name.length > biggestNameBook) {
      return biggestNameBook = currentBook
    } else {
      return biggestNameBook
    }
  })

  return longestBookName;
}

console.log(longestNamedBook())

// Exercise 5

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const aChecker = names.reduce((aAmount, currentName) => {
    for (let i = 0; i < currentName.length; i += 1) {
      if (currentName[i].toLowerCase() === 'a') {
        aAmount = aAmount += 1;
      }
    }

    return aAmount;
  }, 0)

  return aChecker;
}

console.log(containsA())

// Exercise 6

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const reducerFunc = (i) => {
  const gradeCalc = grades[i].reduce((finalSomation, currentNum) => {
    finalSomation = finalSomation += currentNum;
    return finalSomation
  }, 0)

  return gradeCalc;
}

function studentAverage() {
  const firstStudentGrade = reducerFunc(0) / 5;
  const secondStudentGrade = reducerFunc(1) / 5;
  const thirdStudentGrade = reducerFunc(2) / 5;
  const allStudents = [firstStudentGrade, secondStudentGrade, thirdStudentGrade]

  const finalReport = students.map((currentStudent, i) => {
    return { name: currentStudent, average: allStudents[i] }
  })

  return finalReport
}

console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
