const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const nightShift = (object, key, value) => {
  let shift = {}
  shift[key] = value;

  Object.assign(object, shift);
}

nightShift(lesson2, 'turno', 'noite')

console.log(lesson2)