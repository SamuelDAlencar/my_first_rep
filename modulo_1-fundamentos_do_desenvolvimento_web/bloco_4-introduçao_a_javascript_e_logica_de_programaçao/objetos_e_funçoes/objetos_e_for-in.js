// Exercise 1 -------------------------------

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Eren',
  origem: 'AoT',
  nota: 'Protagonista do anime',
};

console.log("bem vinda, " + info.personagem)

console.log("----------------------------")

// Exercise 2 -------------------------------

info.recorrente = "sim"

for (objetos in info) {
  console.log(objetos + ': "' + info[objetos] + '"')
}

console.log("----------------------------")

// Exercise 3 -------------------------------

for (let objetos in info) {
  console.log(objetos)
}

console.log("----------------------------")

// Exercise 4 -------------------------------

for (let objetos in info) {
  console.log(info[objetos])
}

console.log("----------------------------")

// Exercise 5 -------------------------------

for (object in info) {
  if (object != "recorrente") {
    console.log(info[object] + ' e ' + info2[object])
  }

  if (info[object] == "sim") {
    console.log('Ambos recorrentes')
  }
}