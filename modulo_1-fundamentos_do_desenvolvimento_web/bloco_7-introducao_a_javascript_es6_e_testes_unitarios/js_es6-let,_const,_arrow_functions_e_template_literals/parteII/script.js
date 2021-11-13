// const button = document.getElementById('counterButton');
// const howManyP = document.getElementById('howMany');
// let counter = 0;

// button.addEventListener('click', () => {
//   counter += 1
//   howManyP.innerText = counter
// });

let phrase = 'Meu nome é Samuel x Alencar';
let skills = ['css', 'javascript', 'html']
let x = '';

const xFinder = (string) => {
  for (let i = 0; i < phrase.split(' ').length; i += 1) {
    if (phrase.split(' ')[i] == 'x') {
      x = phrase.split(' ')[i]

      phrase = phrase.replace(x, string)
    }
  }

  console.log(phrase);
}

xFinder('de')

const skillsAdder = (phrase) => {
  console.log(`${phrase}! Minhas três habilidades principais são: ${skills}`)
}

skillsAdder(phrase);