// Exercise 2
const fetchCoin = () => {
  const apiURL = `https://api.coincap.io/v2/assets`;
  mainSection = document.querySelector('#main-content')
  mainP = document.querySelector('#main-p')
  mainUl = document.querySelector('#main-ul')
  li = document.createElement('li')

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      let counter = 0;
      Object.entries(data.data).forEach((currData) => {
        counter += 1
        if (counter <= 10) {
          mainUl.appendChild(document.createElement('li')).innerText = `${currData[1].name} (${currData[1].symbol}): ${currData[1].priceUsd}`
          console.log(currData)
        }
      })
    })
};

window.onload = () => fetchCoin();