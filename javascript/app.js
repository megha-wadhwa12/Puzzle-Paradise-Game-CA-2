let backgroundSound = new Audio("../sounds/bgSound.mp3");
backgroundSound.play();
backgroundSound.loop = true;
backgroundSound.volume = 0.1;

function clickSound() {
    let clickSound = new Audio("../sounds/click.mp3");
    clickSound.play();
    clickSound.volume = 0.2;
  }

let play = document.getElementById("play")
console.log(play)

play.onclick = () => {
    console.log("Button clicked!");
    window.open("./html/information.html" , "_self");
    clickSound()
}

let instructions = document.getElementById("instructions")
instructions.onclick = () =>{
    window.open("../html/instructions.html" , "_self")
    clickSound()
}