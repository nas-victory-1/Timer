// const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector(".stop-button");
const resetButton = document.querySelector(".reset-button");


let secondSecondCounter = 1;
  let firstSecondCounter = 0;
  let secondMinuteCounter = 0;
  let firstMinuteCounter = 0;

  const secondSecond = document.querySelector(".second-second");

  const firstSecond = document.querySelector(".first-second");

  const secondMinute = document.querySelector(".second-minute");

  const firstMinute = document.querySelector(".first-minute");

  
  
function timerStart() {
  setInterval(incrementer, 10);

  function incrementer() {

    timeIncrementer(secondSecondCounter, 9, firstSecondCounter);
    timeIncrementer(firstSecondCounter,6,secondMinuteCounter);
    timeIncrementer(secondMinuteCounter, 10, firstMinuteCounter);
    

    // if (secondSecondCounter >= 9) {
    //   secondSecondCounter = -1;
    //   firstSecondCounter++;

    //   if (firstSecondCounter >= 6) {
    //     firstSecondCounter = 0;
    //     secondMinuteCounter++;

    //     if (secondMinuteCounter >= 10) {
    //       secondMinuteCounter = 0;
    //       firstMinuteCounter++;
    //       firstMinute.innerHTML = firstMinuteCounter;
    //     }
    //     secondMinute.innerHTML = secondMinuteCounter;
    //   }
    //   firstSecond.innerHTML = firstSecondCounter;
    // }

    // secondSecondCounter++;
    // secondSecond.innerHTML = secondSecondCounter;
  }
}

function timeIncrementer(firstCounter, highestNumber, secondCounter){
  if(firstCounter >= highestNumber){
    firstCounter = 0;
    secondCounter++;
  }
  firstMinute.innerHTML = firstMinuteCounter;
  secondMinute.innerHTML = secondMinuteCounter;
  firstSecond.innerHTML = firstSecondCounter;
  secondSecond.innerHTML = secondSecondCounter;
 // return secondCounter; 
}