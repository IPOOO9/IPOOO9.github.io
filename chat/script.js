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
        showRealMessage(MessageText)
        count++
        localStorage.setItem('count', count)
        localStorage.setItem(count, MessageText.textContent)
        TextHolder.value=''
    }
}
function showRealMessage(text){
    let messagebox=document.getElementById('messages')
    let message = document.createElement("div")
    message.className="message"
    message.append(text)
    messagebox.append(message)
}
addEventListener('keydown', function(key) {
    if (key.keyCode == 13)
        ShowMessage();
    if (key.keyCode == 16)
        document.myForm.reset();
})
document.addEventListener("DOMContentLoaded", function() {
    download();
})
function download(){
    for(let i = 1; i<=localStorage.getItem('count');i++){
        let MessageText = document.createTextNode(localStorage.getItem(i));
        showRealMessage(MessageText)
    }
}

}
