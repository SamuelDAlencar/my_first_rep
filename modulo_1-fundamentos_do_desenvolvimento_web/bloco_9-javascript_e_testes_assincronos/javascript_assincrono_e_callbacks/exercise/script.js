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


// Exercise 4 and 5
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback, errorManager, errorReason) => {
  console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`);

  callback(getMarsTemperature());
  errorManager(errorReason);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

setTimeout(() => {
  sendMarsTemperature(temperatureInFahrenheit, handleError, 'Robot is busy');
  sendMarsTemperature(greet, handleError, 'Robot is busy');
}, messageDelay());


// Exercise 6


// Exercise 7


// Exercise 8


// Exercise 9

