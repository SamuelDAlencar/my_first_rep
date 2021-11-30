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


// Exercise 4
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => {
  console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`)
};

setTimeout(() => {
  sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
}, messageDelay());

// Exercise 5


// Exercise 6


// Exercise 7


// Exercise 8


// Exercise 9

