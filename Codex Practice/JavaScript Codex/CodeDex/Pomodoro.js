const bells = new Audio('Alarm.mp3'); 
const startBtn = document.querySelector('.btn-start'); 
const resetBtn = document.querySelector('.btn-reset');
const pauseBtn = document.querySelector('.btn-pause'); 
const session = document.querySelector('.minutes'); 
const secondDiv = document.querySelector('.seconds');
let myInterval; 
let state = true;
let isPaused = false;
let totalSeconds;

function appTimer(){
    const sessionAmount = Number.parseInt(session.textContent)
  
    if(state || isPaused) {
      state = false;
      isPaused = false;
      if (!totalSeconds) {
        totalSeconds = sessionAmount * 60;
      }
      
      const updateSeconds = () => {
        if (!isPaused) {
          totalSeconds--;
        
          let minutesLeft = Math.floor(totalSeconds/60);
          let secondsLeft = totalSeconds % 60;
        
          if(secondsLeft < 10) {
            secondDiv.textContent = '0' + secondsLeft;
          } else {
            secondDiv.textContent = secondsLeft;
          }
          session.textContent = minutesLeft;
        
          if(totalSeconds <= 0) {
            bells.play()
            clearInterval(myInterval);
            state = true;
            isPaused = false;
          }
        }
      }
      myInterval = setInterval(updateSeconds, 1000);
    } 
    else {
      alert('Session has already started.')
    }
  }

  function resetTimer(){
    clearInterval(myInterval)
    state = true;
    isPaused = false;
    bells.pause();
    bells.currentTime = 0;
    session.textContent = '25';
    secondDiv.textContent = '00';
  }

  function pauseTimer() {
    if (!state) {
      isPaused = !isPaused;
    }
    bells.pause();
    bells.currentTime = 0;  
  }

  startBtn.addEventListener('click', appTimer);
  resetBtn.addEventListener('click', resetTimer);
  pauseBtn.addEventListener('click', pauseTimer);