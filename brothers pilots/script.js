

let width = 4;
let height = 4;

function StartGame(width, height){
    const grid = document.querySelector('.grid');
    scoreDoc.innerHTML = 'Score: ' + score.toString();

    for (let i = 0; i < width; i++){
        for (let j = 0; j < height; j++){
            const button = document.createElement('button');
            button.className = 'not-active';
            button.id = i.toString() + j.toString();
            button.addEventListener('click', newTurn);
            playArea.insertAdjacentElement('beforeend', button)
        }
    }
    score = 0;
}

function newTurn(){

    let x = this.id[0];
    let y = this.id[1];

    for (let i = 0; i < width; i++) {
        let elem = document.getElementById(x.toString() + i.toString());
        paintCells(elem);

        elem = document.getElementById(i.toString() + y.toString());
        paintCells(elem);
    }

    paintCells(this);

    checkForWin();
}

function checkForWin(){
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            const elem = document.getElementById(i.toString() + j.toString());
            if (elem.className == 'not-active'){
                return;
            }
        }
    }
    alert('VICTORY! GURA~NYA');
    reloadGame();
}

function paintCells(elem){
    if (elem.className == 'active'){
        elem.className = 'not-active';
    }
    else{
        elem.className = 'active';
    }
}


function restart(){
    let audio = new Audio('restart.ogg')
    audio.play();
    const elems = document.querySelectorAll('button');
    elems.forEach(elem => elem.className='not-active');
}

StartGame(width, height);
