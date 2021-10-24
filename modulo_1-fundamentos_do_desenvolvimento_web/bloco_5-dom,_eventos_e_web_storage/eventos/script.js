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

// Exercise 1 -----------------------------------------------------

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function calendarDays() {
  for (i = 0; i <= dezDaysList.length; i++) {
    let ul = document.getElementById('days')
    ul.childNodes[i].innerText = dezDaysList[i - 1]

    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      ul.appendChild(document.createElement('li')).classList.add('day', 'holiday')
    } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
      ul.appendChild(document.createElement('li')).classList.add('day', 'friday')
    } else {
      ul.appendChild(document.createElement('li')).classList.add('day')
    }
  }
}

calendarDays()

// Exercise 2 -----------------------------------------------------

function holidayButton(holidays) {
  let container = document.getElementsByClassName('buttons-container')[0]
  container.appendChild(document.createElement('button')).id = 'btn-holiday'

  document.getElementById('btn-holiday').innerText = 'Feriados'
}

holidayButton()

// Exercise 3 -----------------------------------------------------

function buttonColor() {
  let button = document.getElementById('btn-holiday')
  let undo = 0

  button.addEventListener('click', function () {
    let holiday = document.getElementsByClassName('holiday')

    if (undo == 0) {
      for (i = 0; i < holiday.length; i++) {
        holiday[i].style.backgroundColor = 'green';
        holiday[i].style.color = 'white';
      }
      undo = 1
    } else if (undo == 1) {
      for (i = 0; i < holiday.length; i++) {
        holiday[i].style.backgroundColor = 'rgb(238,238,238)';
        holiday[i].style.color = '#777';
      }
      undo = 0
    }
  })
}

buttonColor()

// Exercise 4 -----------------------------------------------------

function fridayButton(day) {
  let container = document.getElementsByClassName('buttons-container')[0]
  container.appendChild(document.createElement('button')).id = 'btn-friday'

  document.getElementById('btn-friday').innerText = day
}

fridayButton('Sexta-feira')

// Exercise 5 -----------------------------------------------------

function buttonText() {
  let button = document.getElementById('btn-friday')
  let undo = 0

  button.addEventListener('click', function () {
    if (undo == 0) {
      for (i = 0; i < dezDaysList.length; i++) {
        if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
          document.getElementsByClassName('day')[i].style.border = 'solid black 1px'
        }
      }
      undo = 1
    } else if (undo == 1) {
      for (i = 0; i < dezDaysList.length; i++) {
        if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
          document.getElementsByClassName('day')[i].style.border = '0'
        }
      }
      undo = 0
    }
  })
}

buttonText()

// Exercise 6 -----------------------------------------------------

function zoom() {
  for (i = 0; i < dezDaysList.length; i++) {
    let day = document.getElementsByClassName('day')[i]

    day.addEventListener('mouseover', function () {
      day.style.fontSize = '25px'
    })

    day.addEventListener('mouseleave', function () {
      day.style.fontSize = '20px'
    })
  }
}

zoom()

// Exercise 7 -----------------------------------------------------

function taskCreator(task) {
  let parent = document.getElementsByClassName('my-tasks')[0]

  parent.appendChild(document.createElement('span')).innerText = task

}

taskCreator('Comer')

// Exercise 8 -----------------------------------------------------

function legenda(cor) {
  let parent = document.getElementsByClassName('my-tasks')[0]

  parent.appendChild(document.createElement('div')).className = 'task'

  document.getElementsByClassName('task')[0].style.backgroundColor = cor
}

legenda('red')

// Exercise 9 -----------------------------------------------------

function taskSelection() {
  let div = document.getElementsByClassName('task')[0]
  let undo = 0

  div.addEventListener('click', function () {
    if (undo == 0) {
      div.classList.add('selected')

      undo = 1
    } else if (undo == 1) {
      div.classList.remove('selected')

      undo = 0
    }
  })
}

taskSelection()

// Exercise 10 -----------------------------------------------------

function taskDay(cor) {
  for (i = 0; i < dezDaysList.length; i++) {
    let day = document.getElementsByClassName('day')[i]
    let undo = 0
    day.addEventListener('click', function () {
      if (undo == 0) {
        day.style.color = cor

        undo = 1
      } else if (undo == 1) {
        day.style.color = 'rgb(119,119,119)'

        undo = 0
      }
    })
  }
}

taskDay('red')