function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function calendarDays(days) {
  for (i = 1 ; i <= days ; i++) {
    document.getElementById('days').appendChild(document.createElement('li')).classList.add('day')

    var child = document.getElementById('days').childNodes[i];

    console.log(child)

  }
}

calendarDays(28)