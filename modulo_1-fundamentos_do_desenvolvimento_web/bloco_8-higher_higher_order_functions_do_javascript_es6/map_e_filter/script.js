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

function formatedBookNames() {
  return books.map((book) => {
    const newArr = `${book.name} - ${book.genre} - ${book.author.name}`;

    return newArr;
  })
}
console.log(formatedBookNames())

// 2

function nameAndAge() {
  return books.map((book) => {
    return { age: `${2021 - book.author.birthYear}`, author: `${book.author.name}` }
  }).sort((a, b) => a.age - b.age);
}
console.log(nameAndAge())

// 3

function fantasyOrScienceFiction() {
  return books.filter((book) => {
    return book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
  });
}
console.log(fantasyOrScienceFiction())

// 4

function oldBooksOrdered() {
  return books.filter((book) => {
    return book.releaseYear < 1961;
  }).sort((a, b) => a.releaseYear - b.releaseYear);
}
console.log(oldBooksOrdered())

// 5

function fantasyOrScienceFictionAuthors(funcReturn) {
  let authors = []

  funcReturn().forEach((book) => {
    authors.push(book.author.name)
  })

  return authors.sort();
}

console.log(fantasyOrScienceFictionAuthors(fantasyOrScienceFiction));

// 6

function oldBooks(funcReturn) {
  let authors = []

  funcReturn().forEach((book) => {
    authors.push(book.name)
  })

  return authors;
}

console.log(oldBooks(oldBooksOrdered));

// 7

function authorWith3DotsOnName() {
  let bookName = '';
  bookName = books.find((book) => book.author.name.includes('J. R. R.')).name

  return bookName;
}

console.log(authorWith3DotsOnName())
