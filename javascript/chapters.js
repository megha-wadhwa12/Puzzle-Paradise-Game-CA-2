let backgroundSound = new Audio("../sounds/bgSound.mp3");
backgroundSound.play();
backgroundSound.loop = true;
backgroundSound.volume = 0.1;

function clickSound() {
    let clickSound = new Audio("../sounds/click.mp3");
    clickSound.play();
    clickSound.volume = 0.2;
  }


var easy = document.getElementById("easy")
var medium = document.getElementById("medium")
var hard = document.getElementById("hard")

var logo = document.getElementById("logo")

logo.onclick = ()=>{
    window.open("../index.html" , "_self")
    clickSound()
}

easy.onclick = ()=>{
    window.open("../html/easy.html" , "_self")
    clickSound()
}

medium.onclick = ()=>{
    window.open("../html/medium.html" , "_self")
    clickSound()
}

hard.onclick = ()=>{
    window.open("../html/hard.html" , "_self")
    clickSound()
}
