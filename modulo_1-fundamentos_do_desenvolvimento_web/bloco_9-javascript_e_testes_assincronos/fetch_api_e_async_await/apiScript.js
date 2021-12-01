// Exercise 1
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  space = document.getElementById('jokeContainer');

  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      space.innerText = data.joke
    
    console.log(data)
    })
};

window.onload = () => fetchJoke();
