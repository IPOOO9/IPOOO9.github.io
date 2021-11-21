function SpawnImage() {
    document.getElementById("button").hidden=true;
    fetch('pic.json').then(response => {
        response.json().then(result => {
            let arr = [result.S89, result.SPower,result.Assault,result.FuckNATO];
            for (let i = 0; i < 4; i++) {
                    let pic = new Image();
                    pic.src = arr[i];
                    document.getElementById("img").append(pic);
            }
        });
    })
}
