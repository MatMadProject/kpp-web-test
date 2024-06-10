import '../sass/main.scss'

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0; // Timer stop at 0
        }
    }, 1000);
}

window.onload = () => {
    const thirtyMinutes = 30 * 60;
    const display = document.getElementById("timer");
    startTimer(thirtyMinutes, display);
};
