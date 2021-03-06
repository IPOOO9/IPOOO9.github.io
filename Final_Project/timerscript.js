let start = document.querySelector('.start');
let countdown = document.querySelector('.score');
let minute, seconds, milliseconds;



start.addEventListener('click', TimerStart);


function TimerStart() {
    start.innerText = 'Перезапуск';
    document.getElementById("end").hidden=true;

    minute = 1;
    seconds = 0;
    milliseconds = 0;

   
    const promise = new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            updateTimer();

            milliseconds -= 84;
            if (milliseconds <= 0) {
                milliseconds = 999;
                seconds--;
            }

            if (seconds <= 0) {
                milliseconds = 999;
                seconds = 59;
                minute--;
            }

            if (minute < 0) {
                minute = 0;
                seconds = 0;
                milliseconds = 0;
                updateTimer();
                clearInterval(interval);
                resolve('Ok');
            }
        }, 84);
    });
       promise.then(function () {
        let Object1 = document.createElement('div');
        Object1.className="end";
        document.getElementById("end").hidden=false;
    });
}


function updateTimer() {
    countdown.innerText = `${('00' + minute).slice(-2)}:${('00' + seconds).slice(-2)}:${('000' + milliseconds).slice(-3)}`;
}
