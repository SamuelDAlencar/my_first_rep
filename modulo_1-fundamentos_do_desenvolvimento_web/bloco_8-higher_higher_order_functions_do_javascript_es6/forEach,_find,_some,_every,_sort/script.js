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

// Adicione o código do exercício aqui:

// 1 

function authorBornIn1947() {
  const finder = books.find((book) => {
    return book.author.birthYear === 1947
  })

  return finder
}

console.log(authorBornIn1947())

// 2

function smallerName() {
  let smallestBook;

  books.forEach((book) => {
    if (!smallestBook || book.name.length < smallestBook.length) {
      smallestBook = book.name;
    }
  })

  return smallestBook;
}

console.log(smallerName())

// 3

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  let nameW26Char = books.find((book) => {
    return book.name.length === 26
  });

  return nameW26Char;
}

console.log(getNamedBook());

// 4

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => { return b.releaseYear - a.releaseYear });
}

console.log(booksOrderedByReleaseYearDesc());

// 5

function everyoneWasBornOnSecXX() {
  return books.every((book) => book.author.birthYear >= 1901)
}

console.log(everyoneWasBornOnSecXX());

// 6

function someBookWasReleaseOnThe80s() {
  return books.some((book) => book.releaseYear > 1980 && book.releaseYear < 1990)
}

console.log(someBookWasReleaseOnThe80s());

// 7

function authorUnique() {
  let repeatValue = 0;

  for (let i1 = 0; i1 < books.length; i1 += 1) {
    for (let i2 = 0; i2 < books.length; i2 += 1) {
      if (books[i1].author.birthYear === books[i2].author.birthYear && books[i1].name != books[i2].name) {
        repeatValue += 1;
      }
    };
  };

  if (repeatValue === 0) {
    return true
  } else {
    return false
  }
};

console.log(authorUnique())
