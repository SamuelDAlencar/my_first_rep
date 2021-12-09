// Exercise 1
// A, B, C

// Exercise 2
// C, B, A

// Exercise 3
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

setTimeout(() => {
  getPlanet(); // imprime Marte depois de 4 segundos
}, 4000);


// Exercise 4, 5 and 6
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback, mainFuc) => {
  mainFuc(callback);
  console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`);
  console.log(`--------------------------------`)
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handler = (callback) => {
  let percent = Math.floor(Math.random() * 100)

  if (percent >= 60) {
    console.log(`Rate: ${percent}%. Success on reaching the extra data.`)
    callback(getMarsTemperature());
  } else {
    console.log(`Rate: ${percent}%. Failed to reach the extra data, robot too busy.`)
  };
};

setTimeout(() => {
  sendMarsTemperature(temperatureInFahrenheit, handler);
  sendMarsTemperature(greet, handler);
}, messageDelay());

// Exercise 7


const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

uppercase('aaa', console.log);
// Exercise 8


// Exercise 9

// ----------------------------------------
module.exports = uppercase;