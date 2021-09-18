// const currentTime = new Date().toLocaleTimeString();
// console.log(currentTime);

const stopWatchTag = document.getElementsByClassName("clock")[0];
const startBtnTag = document.getElementsByClassName("startBtn")[0];
const pauseBtnTag = document.getElementsByClassName("pauseBtn")[0];
const containueBtnTag = document.getElementsByClassName("containueBtn")[0];
const restartBtnTag = document.getElementsByClassName("restartBtn")[0];

let seconds = 0,
  minutes = 0,
  hours = 0;

const startTime = () => {
  seconds += 1;
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;

    if (minutes === 60) {
      minutes = 0;
      hours += 1;
    }
  }
  const secondText = seconds < 10 === true ? "0" + seconds.toString() : seconds;
  const minuteText = minutes < 10 === true ? "0" + minutes.toString() : minutes;
  const hourText = hours < 10 === true ? "0" + hours.toString() : hours;

  stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText;
  console.log(seconds, minutes, hours);
};

let runningTime;

//start btn control this
const start = () => {
  runningTime = setInterval(startTime, 1000);
  startBtnTag.remove();
};

//pause btn control this
const pause = () => {
  clearInterval(runningTime);
};

//containue btn control this
const containue = () => {
  clearInterval(runningTime);
  runningTime = setInterval(startTime, 1000);
};

//restart btn control this
const restart = () => {
  startBtnTag.remove();
  clearInterval(runningTime);
  seconds = 0;
  minutes = 0;
  hours = 0;
  runningTime = setInterval(startTime, 1000);
};

startBtnTag.addEventListener("click", start);
pauseBtnTag.addEventListener("click", pause);
containueBtnTag.addEventListener("click", containue);
restartBtnTag.addEventListener("click", restart);
