// JS/game/timer.js

let timer = null;
let timeLeft = 15;

function renderTimer() {
    const tiempoEl = document.getElementById("tiempo");
    if (tiempoEl) {
        tiempoEl.textContent = `⏳ ${timeLeft}s`;
    }
}

function startTimer(onTimeout) {
    stopTimer();
    timeLeft = 15;
    renderTimer();

    timer = setInterval(() => {
        timeLeft--;
        renderTimer();

        if (timeLeft <= 0) {
            stopTimer();
            onTimeout(); // 🔥 el juego decide qué pasa
        }
    }, 1000);
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function clearTimer() {
    stopTimer();
    const tiempoEl = document.getElementById("tiempo");
    if (tiempoEl) tiempoEl.textContent = "";
}

export {
    startTimer,
    stopTimer,
    clearTimer
};
