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

info.recorrente = "sim"

// -------------------------------

for (let objetos in info) {
console.log (objetos)
}

console.log("----------------------------")
// -------------------------------

for (let objetos in info) {
  console.log(info[objetos])
}

console.log("----------------------------")
// -------------------------------
