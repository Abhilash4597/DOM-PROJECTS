const daysCount = document.getElementById('days');
const hoursCount = document.getElementById('hours');
const minsCount = document.getElementById('mins');
const secondsCount = document.getElementById('seconds');

const newYears = '4 May 2023';

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  // console.log(days)
  // console.log(hours)
  // console.log(mins)
  // console.log(seconds)

  daysCount.innerHTML = days;
  hoursCount.innerHTML = formatTime(hours);
  minsCount.innerHTML = formatTime(mins);
  secondsCount.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
