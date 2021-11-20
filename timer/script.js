let maxMinutes = 60, maxSeconds = 60;
let currenTime = new Date(0, 0, 0, 0, 1, 0);
let startTime = new Date(0, 0, 0, 0, 0, 0);

async function Starter(){
    const promise = new Promise((resolve, reject) => {
        if(currenTime > new Date(0, 0, 0, 0, 0, 0)){
            currenTime.setSeconds(currenTime.getSeconds() - 1);
            timeout = setTimeout(Starter, 1000);
            document.getElementById('startButton').disabled = true;
            document.getElementById('startButton').style.backgroundColor = '#bdb76b';
            document.getElementById('generateButton').disabled = true;
            document.getElementById('generateButton').style.backgroundColor = '#bdb76b';
            document.getElementById('time').innerText = currenTime.toLocaleTimeString();
        }else {
            resolve(currenTime);
        }
    }).then( value => {
        document.getElementById('time').innerText = currenTime.toLocaleTimeString();
        document.getElementById('startButton').disabled = false;
        document.getElementById('startButton').style.backgroundColor = '#ffebcd';
        document.getElementById('generateButton').disabled = false;
        document.getElementById('generateButton').style.backgroundColor = '#ffebcd';
        alert('Это конец...Или новое начало?');
    })
}

function RandomTime(){
    let randomMinute = Math.floor(Math.random() * maxMinutes);
    let randomSecond = Math.floor(Math.random() * maxSeconds);

    currenTime.setMinutes(randomMinute);
    currenTime.setSeconds(randomSecond);

    document.getElementById('time').innerText = currenTime.toLocaleTimeString();
    document.getElementById('time').innerText = currenTime.toLocaleTimeString();
}
