// const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector(".stop-button");
const resetButton = document.querySelector(".reset-button");

function timerStart() {
  const secondSecond = document.querySelector(".second-second");
  secondSecond.innerHTML = "1";

  const firstSecond = document.querySelector(".first-second");

  const secondMinute = document.querySelector(".second-minute");

  const firstMinute = document.querySelector(".first-minute");

  let secondSecondCounter = 1;
  let firstSecondCounter = 0;
  let secondMinuteCounter = 0;
  let firstMinuteCounter = 0;
  setInterval(secondSecondIncrementer, 10);

  function secondSecondIncrementer() {
    if (secondSecondCounter >= 9) {
      secondSecondCounter = -1;
      firstSecondCounter++;

      if (firstSecondCounter >= 6) {
        firstSecondCounter = 0;
        secondMinuteCounter++;

        if (secondMinuteCounter >= 10) {
          secondMinuteCounter = 0;
          firstMinuteCounter++;
          firstMinute.innerHTML = firstMinuteCounter;
        }
        secondMinute.innerHTML = secondMinuteCounter;
      }
      firstSecond.innerHTML = firstSecondCounter;
    }

    secondSecondCounter++;
    secondSecond.innerHTML = secondSecondCounter;
  }
}
