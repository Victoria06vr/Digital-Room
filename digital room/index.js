let totalTime = 5 * 60; // 5 minutes
let timeLeft = totalTime;
let timerInterval = null;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("timer").textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval) return; // Prevent multiple intervals

    timerInterval = setInterval(() => {
        timeLeft--;

        if (timeLeft < 0) {
            stopTimer();
            timeLeft = 0;
            updateTimer();
            return;
        }

        updateTimer();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function restartTimer() {
    stopTimer();
    timeLeft = totalTime;
    updateTimer();
}

updateTimer();

// Button hookup
document.getElementById("startBtn").onclick = startTimer;
document.getElementById("stopBtn").onclick = stopTimer;
document.getElementById("restartBtn").onclick = restartTimer;

const soundBtn = document.getElementById("soundBtn");
const stopSoundBtn = document.getElementById("stopSoundBtn");
const music = document.getElementById("timerMusic");

soundBtn.addEventListener("click", () => {
    music.play();
});

stopSoundBtn.addEventListener("click", () => {
    music.pause();
    music.currentTime = 0; // reset to start
});