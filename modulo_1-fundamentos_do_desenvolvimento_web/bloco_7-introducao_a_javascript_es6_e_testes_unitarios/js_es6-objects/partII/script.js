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

const howManyStudents = () => {
  let howManyStudentsCount = 0;

  howManyStudentsCount += allLessons.lesson1.numeroEstudantes
  howManyStudentsCount += allLessons.lesson2.numeroEstudantes
  howManyStudentsCount += allLessons.lesson3.numeroEstudantes

  return howManyStudentsCount;
}

console.log(howManyStudents())

const getValueByNumber = (lesson, key) => {
  if (key === 0) {
    return allLessons[lesson].materia
  } else if (key === 1) {
    return allLessons[lesson].numeroEstudantes
  } else if (key === 2) {
    return allLessons[lesson].professor
  } else if (key === 3) {
    return allLessons[lesson].turno
  }
};

console.log(getValueByNumber('lesson1', 0));

const verifyPair = (lesson, property, value) => {
  if (allLessons[lesson][property] === value) {
    return true;
  } else {
    return false;
  }
};
console.log(verifyPair('lesson1', 'turno', 'manhã'));

