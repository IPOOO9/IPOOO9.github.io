let count=0;
let time = 60;
let timerId = null;
let pos;
let mark=false;
let sec;
const timeLeft = document.querySelector('.time');
const blocks = document.querySelectorAll('.square');
const necoarc = document.querySelector('.necoarc');
const score = document.querySelector('.score');
function onload(){
    let score = document.getElementById('score')
}
if (mark===true){
    timerId=setInterval(spawn, 700);
}
function fet(){
    let begin=new Audio('sharingan.mp3');
    begin.play();
    document.getElementById('fedor').hidden=true;
    document.getElementById('c').style.visibility="visible";
    mark=true;
    timeLeft.textContent = 'Time:'+time;
    sec = setInterval(timer, 1000);
    timerId=setInterval(spawn, 700);
}
function spawn(){
    blocks.forEach(it=>
    {
        it.classList.remove('naruto');
    })
    pos=Math.floor(Math.random() *16);
    blocks.forEach(it=> {
        if(pos==it.id){
            it.classList.add('necoarc');
        }
    })
    blocks.forEach(it=>
    {
        it.addEventListener('mousedown', () => {
            console.log(pos);
            if (Number(it.id) == pos) {
                count++;
                it.classList.remove('necoarc');
                let audio = new Audio('chidori.mp3')
                audio.play();
                score.innerHTML="Your score:"+count;
                pos=null;
            }
        })
    })
}
function timer(){
    time--;
    timeLeft.textContent = 'Time:'+time;
    if (time === 0) {
        document.getElementById('fedor').hidden=false;
        document.getElementById('c').style.visibility="hidden";
        clearInterval(sec);
        clearInterval(timerId);
        alert('Your final score: ' + count);
        blocks.forEach(it=>
        {
            it.classList.remove('necoarc');
        })
        count=0;
        time=60;
        timeLeft.textContent = 'Time:'+time;
        score.innerHTML="Your score:"+count;
        timerId=null;
    }
}
