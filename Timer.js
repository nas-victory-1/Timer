const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector(".stop-button");
const resetButton = document.querySelector(".reset-button");


let secondSecondCounter = 0;
let firstSecondCounter = 0;
let secondMinuteCounter = 0;
let firstMinuteCounter = 0;

const secondSecond = document.querySelector(".second-second");

const firstSecond = document.querySelector(".first-second");

const secondMinute = document.querySelector(".second-minute");

const firstMinute = document.querySelector(".first-minute");

let intervalID;

const pulsing = document.querySelector('.pulsing');
  
  
function timerStart() {
  let toggled = startButton.classList.contains('is-toggled');
  if(!toggled){
    startButton.innerHTML = 'Stop';
    startButton.classList.add('stop-button');
    startButton.classList.add('is-toggled');
    document.querySelector('.timer-container').classList.add('started-timer');
    document.querySelector('.pulsing').classList.add('pulsing-active');
    playAnimation();
    intervalID = setInterval(incrementer, 100);
    
  }else{
    startButton.innerHTML = 'Start';
    startButton.classList.remove('stop-button');
    startButton.classList.remove('is-toggled');
    // document.querySelector('.timer-container').classList.remove('started-timer');
    //document.querySelector('.pulsing').classList.remove('pulsing-active');
    pauseAnimation();
    clearInterval(intervalID);
    
  }


}

function incrementer() {

  /*timeIncrementer(secondSecondCounter, 9, firstSecondCounter);
  timeIncrementer(firstSecondCounter,6,secondMinuteCounter);
  timeIncrementer(secondMinuteCounter, 10, firstMinuteCounter);*/
  

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

function resetTimer(){
  clearInterval(intervalID);
  startButton.innerHTML = 'Start';
  startButton.classList.remove('stop-button');
  startButton.classList.remove('is-toggled');
  document.querySelector('.timer-container').classList.remove('started-timer');
  document.querySelector('.pulsing').classList.remove('pulsing-active');
  secondSecond.innerHTML = 0;
  secondMinute.innerHTML = 0;
  firstMinute.innerHTML = 0;
  firstSecond.innerHTML = 0;
  secondMinuteCounter = 0;
  secondSecondCounter = 0;
  firstMinuteCounter = 0;
  firstSecondCounter = 0;
}

function pauseAnimation(){
  pulsing.style.animationPlayState = 'paused';
}
function playAnimation(){
  pulsing.style.animationPlayState = 'running';
}