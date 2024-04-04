const myData = [
  {
    day: 'mon',
    amount: 17.45,
  },
  {
    day: 'tue',
    amount: 34.91,
  },
  {
    day: 'wed',
    amount: 52.36,
  },
  {
    day: 'thu',
    amount: 31.07,
  },
  {
    day: 'fri',
    amount: 23.39,
  },
  {
    day: 'sat',
    amount: 43.28,
  },
  {
    day: 'sun',
    amount: 25.48,
  },
];

const colContainers = document.querySelectorAll('.col_container');

function getWeekDay() {
  const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const date = new Date().getDay();
  const currentWeekDay = weekdays[date];
  return currentWeekDay;
}

function displayColumns(data) {
  const currentWeekDay = getWeekDay();
  colContainers.forEach((container) => {
    const col = container.querySelector('.column');
    const day = container.querySelector('.week_day');
    const amount = container.querySelector('.amount');
    if (day.textContent === currentWeekDay) {
      col.style.backgroundColor = 'hsl(186, 34%, 60%)';
    }

    data.forEach((date) => {
      if (date.day === day.textContent) {
        col.style.height = `${date.amount * 2.5}px`;
        col.addEventListener('mouseover', () => {
          amount.classList.remove('hidden');
          amount.textContent = `$${date.amount}`;
        });
        col.addEventListener('mouseout', () => {
          amount.classList.add('hidden');
        });
      }
    });
  });
}

displayColumns(myData);
