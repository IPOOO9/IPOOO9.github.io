let count=0;
let time = 60;
let timerId = null;
let pos;
let mark=false;
let sec;
const timeLeft = document.querySelector('.time');
const blocks = document.querySelectorAll('.sircle');
const necoarc = document.querySelector('.necoarc');
const score = document.querySelector('.score');
const scoref = document.querySelector('.scorefinal');
document.getElementById('.scorefinal').style.visibility="hidden";
function onload(){
    let score = document.getElementById('score')
    let scoref = document.getElementById('scorefinal')
}
if (mark===true){
    timerId=setInterval(spawn, 700);
}
function Neco(){
    time=60;
    let begin=new Audio('beg.mp3');
    begin.play();
    document.getElementById('button').hidden=true;
    document.getElementById('c').style.visibility="visible";
    mark=true;
    timeLeft.textContent = 'Time:'+time;
    sec = setInterval(timer, 1000);
    timerId=setInterval(spawn, 700);
}
function spawn(){
    blocks.forEach(it=>
    {
        it.classList.remove('necoarc');
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
                let audio = new Audio('meow.mp3')
                audio.play();
                score.innerHTML="Score:"+count;
                pos=null;
            }
        })
    })
}
function timer(){
    time--;
    timeLeft.textContent = 'Time:'+time;
    if (time === 0) {
        document.getElementById('button').hidden=false;
        document.getElementById('c').style.visibility="hidden";
        clearInterval(sec);
        clearInterval(timerId);
        document.getElementById('.scorefinal').style.visibility="visible";
        scoref.innerHTML="Your final score:" + count;
        blocks.forEach(it=>
        {
            it.classList.remove('necoarc');
        })
        count=0;
        time=60;
        timeLeft.textContent = 'Time:'+time;
        score.innerHTML="Score:"+count;
        timerId=null;
    }
}
