function FadeLine()
{
    document.getElementById("in").focus();
}
if(localStorage.length>0){
    count = localStorage.getItem('count')
} else {
    count = 0
}
function MessageOnScreen(){
    let TextHolder = document.getElementById('in')
    let MessageText = document.createTextNode(TextHolder.value)
    if(MessageText.textContent.length>0){
        ShowMessageText(MessageText)
        count++
        localStorage.setItem('count', count)
        localStorage.setItem(count, MessageText.textContent)
        TextHolder.value=''
    }
}
function ShowMessageText(text){
    let messagebox=document.getElementById('msg_window')
    let message = document.createElement("div")
    message.className="msg"
    message.append(text)
    messagebox.append(message)
    msg_scroll()
}
addEventListener('keydown', function(key) {
    if (key.keyCode == 13)
        MessageOnScreen();
})
document.addEventListener("DOMContentLoaded", function() {
    download();
})
function download(){
    for(let i = 1; i<=localStorage.getItem('count');i++){
        let MessageText = document.createTextNode(localStorage.getItem(i));
        ShowMessageText(MessageText)
    }
}

function msg_scroll(b) {
    var e = document.querySelector('.Scrolling');
    if (!e) return;

    e.scrollIntoView({
        behavior: b || 'auto',
        block: 'end',
    });
}

function soundClick() {
  var audio = new Audio(); 
  audio.src = '!!!.mp3'; 
  audio.autoplay = true; 
}
