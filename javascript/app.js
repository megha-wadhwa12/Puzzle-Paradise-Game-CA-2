let play = document.getElementById("play")
console.log(play)

play.onclick = () => {
    console.log("Button clicked!");
    window.open("./html/information.html" , "_self");
}

let instructions = document.getElementById("instructions")
instructions.onclick = () =>{
    window.open("../html/instructions.html" , "_self")
}