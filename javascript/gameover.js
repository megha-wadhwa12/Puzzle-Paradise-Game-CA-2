let input1 = JSON.parse(localStorage.getItem("Name: "));
let input2 = JSON.parse(localStorage.getItem("Nickname: "));

let score = JSON.parse(localStorage.getItem("Score: "))
let scores = document.getElementById("score")

console.log(input1);
console.log(input2);

let input = document.getElementById("input");
input.innerText = input1;
console.log(input);

let winningMessages = [
  ", Congratulations! You've solved the puzzle!",
  ", Well done! Puzzle completed!",
  ", You're a puzzle-solving master! Victory is yours!",
  ", Puzzle accomplished! You're the winner!",
  ", Impressive! Puzzle solved successfully!",
];

let losingMessages = [
  ", Oops, time's up! Try again",
  ", Better luck next time! Keep practicing",
  ", Don't give up! Try to solve the puzzle again",
  ", Time's run out, but you can still win on the next try",
  ", Close, but not quite. You'll conquer it next time!",
];


let messagebox = document.getElementById("messages");

function randomise(curr){
    var randomIndex= Math.floor(Math.random()*curr.length);
    messagebox.textContent = curr[randomIndex];
}
// randomise(winningMessages);
// randomise(losingMessages);
if (score>0) {
  randomise(winningMessages)
} else if(score==0){
  randomise(losingMessages)
}

let playAgain = document.querySelector(".play-again")

playAgain.onclick = ()=>{
    window.open("../html/chapters.html" , "_self")
}


scores.textContent = score;