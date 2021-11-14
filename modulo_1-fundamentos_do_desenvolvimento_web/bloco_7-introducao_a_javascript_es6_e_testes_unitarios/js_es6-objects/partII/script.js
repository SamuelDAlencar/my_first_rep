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

const objectKeys = (object) => {
  console.log(Object.keys(object))
};

objectKeys(lesson2);

const howManyInObj = (object) => {
  console.log(Object.keys(object).length)
};

howManyInObj(lesson2);

const objectValues = (object) => {
  console.log(Object.values(object))
};

objectValues(lesson2);

let allLessons = {}

const objectAdder = () => {
  allLessons.lesson1 = Object.assign(lesson1)
  allLessons.lesson2 = Object.assign(lesson2)
  allLessons.lesson3 = Object.assign(lesson3)
  console.log(allLessons);
}

objectAdder();

let studentsCounter = 0;

const howManyStudents = () => {
  for (let i = 0; i < Object.keys(allLessons).length; i += 1) {
    for (let c = 0; i < Object.values(allLessons)[i].length; c += 1) {

    }
  }
}

howManyStudents();
