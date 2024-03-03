let interval;
let minutes = 25;
let seconds = 0;
let isPaused = true;
let workDuration = 25;
let breakDuration = 5;

function startTimer() {
    isPaused = false;
    interval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    isPaused = true;
    clearInterval(interval);
}

function resetTimer() {
    isPaused = true;
    clearInterval(interval);
    minutes = workDuration;
    seconds = 0;
    updateDisplay();
}

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(interval);
            alert("Pomodoro Completed!");
            resetTimer();
            return;
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function updateSettings() {
    workDuration = parseInt(document.getElementById('workDuration').value);
    breakDuration = parseInt(document.getElementById('breakDuration').value);
    resetTimer();
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
document.getElementById('workDuration').addEventListener('change', updateSettings);
document.getElementById('breakDuration').addEventListener('change', updateSettings);

updateDisplay();
