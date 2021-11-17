const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }

  return employees;
};

const employee = (fullName) => {
  const email = `${fullName.replace(' ', '_').toLowerCase()}@betrybe.com`;

  return {
    fullName,
    email: email,
  }
};

console.log(newEmployees(employee));