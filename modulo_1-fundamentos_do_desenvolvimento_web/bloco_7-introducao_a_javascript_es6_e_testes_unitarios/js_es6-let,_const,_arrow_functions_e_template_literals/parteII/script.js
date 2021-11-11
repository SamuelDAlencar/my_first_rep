const button = document.getElementById('counterButton');
const howManyP = document.getElementById('howMany');
let counter = 0;

button.addEventListener('click', () => {
  counter += 1
  howManyP.innerText = counter
});