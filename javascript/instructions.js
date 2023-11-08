// Sounds

let backgroundSound = new Audio("../sounds/bgSound.mp3");
backgroundSound.play();
backgroundSound.loop = true;
backgroundSound.volume = 0.1;

function clickSound() {
  let clickSound = new Audio("../sounds/click.mp3");
  clickSound.play();
  clickSound.volume = 0.2;
}

var crossdiv = document.getElementById("cross");
var logo = document.getElementById("logo");

crossdiv.onclick = () => {
  window.open("../index.html", "_self");
  clickSound();
};

logo.onclick = () => {
  window.open("../index.html", "_self");
  clickSound();
};
