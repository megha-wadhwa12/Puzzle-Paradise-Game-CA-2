// Sounds

// let backgroundSound = new Audio("../sounds/bgSound.mp3");
// backgroundSound.play();
// backgroundSound.loop = true;
// backgroundSound.volume = 0.1;

function clickSound() {
  let clickSound = new Audio("../sounds/click.mp3");
  clickSound.play();
  clickSound.volume = 0.2;
}


function swipeSound() {
  let swipeSound = new Audio("../sounds/swipe.mp3");
  swipeSound.play();
  swipeSound.volume = 0.5;
}

// Define a mapping function to return the index based on tile number

// 11 12 13 14 15
// 21 22 23 24 25
// 31 32 33 34 35
// 41 42 43 44 45
// 51 52 53 54 55 using this format

function returnIndex(num) {
  if (num == 11) return 0;
  else if (num == 12) return 1;
  else if (num == 13) return 2;
  else if (num == 21) return 3;
  else if (num == 22) return 4;
  else if (num == 23) return 5;
  else if (num == 31) return 6;
  else if (num == 32) return 7;
  else if (num == 33) return 8;
  else if (num == 12) return 9;
  else if (num == 13) return 10;
  else if (num == 21) return 11;
  else if (num == 22) return 12;
  else if (num == 23) return 13;
  else if (num == 31) return 14;
  else if (num == 32) return 15;
  else if (num == 33) return 16;
  else if (num == 12) return 17;
  else if (num == 13) return 18;
  else if (num == 21) return 19;
  else if (num == 22) return 20;
  else if (num == 23) return 21;
  else if (num == 31) return 22;
  else if (num == 32) return 23;
  else if (num == 33) return 24;
}

// Check if a given puzzle is solvable
function isSolvable(puzzle) {
  let flatPuzzle = puzzle.flat();
  let length = flatPuzzle.length;
  let inversions = 0;

  // Count inversions in the flat puzzle array
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (
        flatPuzzle[i] > flatPuzzle[j] &&
        flatPuzzle[i] !== length &&
        flatPuzzle[j] !== length
      ) {
        inversions++;
      }
    }
  }
  // Check if the number of inversions is even
  return inversions % 2 === 0;
}

// Generate and check the puzzle
function generateAndCheckPuzzle() {
  // Array of tile image file names
let parts = [
    "../image3/row-1-column-1.png",
    "../image3/row-1-column-2.png",
    "../image3/row-1-column-3.png",
    "../image3/row-1-column-4.png",
    "../image3/row-1-column-5.png",
    "../image3/row-2-column-1.png",
    "../image3/row-2-column-2.png",
    "../image3/row-2-column-3.png",
    "../image3/row-2-column-4.png",
    "../image3/row-2-column-5.png",
    "../image3/row-3-column-1.png",
    "../image3/row-3-column-2.png",
    "../image3/row-3-column-3.png",
    "../image3/row-3-column-4.png",
    "../image3/row-3-column-5.png",
    "../image3/row-4-column-1.png",
    "../image3/row-4-column-2.png",
    "../image3/row-4-column-3.png",
    "../image3/row-4-column-4.png",
    "../image3/row-4-column-5.png",
    "../image3/row-5-column-1.png",
    "../image3/row-5-column-2.png",
    "../image3/row-5-column-3.png",
    "../image3/row-5-column-4.png",
    "../assets/white-tile.jpg"
    // "../image3/row-5-column-5.png"
  ];

  // Get the container for the puzzle grid

  let griddiv = document.getElementById("grid");

  // Create tile elements based on the image file names

  let tileElements = parts.map((curr, i) => {
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.backgroundImage = `url(../image1/${curr})`;
    tile.id = `tile-${i + 1}`;
    griddiv.appendChild(tile);
    return tile;
  });

  let gridSize = 5;
  let numTiles = gridSize * gridSize;

  let emptyTileIndex = numTiles - 1;
  let adjacentTileIndices = getAdjacentTileIndices(emptyTileIndex);
  console.log(adjacentTileIndices);
  randomPosition = [];

  function shuffleTiles() {
    for (let i = tileElements.length - 2; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      let tempBackground = tileElements[i].style.backgroundImage;
      tileElements[i].style.backgroundImage =
        tileElements[j].style.backgroundImage;
      tileElements[j].style.backgroundImage = tempBackground;
    }
    let shuffledArrayIndex = makeFlatArray(tileElements);

    if (!isSolvable(shuffledArrayIndex)) {
      alert("Puzzle Not Solvable,pls wait while we shuffle tiles......");
      shuffleTiles();
    }
  }
  // Shuffle the tiles

  shuffleTiles();

  // Create a flat array representing the shuffled puzzle

  function makeFlatArray(tileElements) {
    tileElements.forEach((curr) => {
      let split = curr.style.cssText.split("-column-");
      // console.log("split: ", split);
      if (split.length == 2) {
        let idx = split[0].at(-1) + split[1].at(0);
        idx = Number(idx);
        let idx2 = returnIndex(idx);
        randomPosition.push(idx2);
      }
    });
    randomPosition.push(8);

    return randomPosition;
  }

  // Event listener for clicking on tiles

  tileElements.forEach((tile, index) => {
    tile.addEventListener("click", () => {
      if (adjacentTileIndices.includes(index)) {
        swapTiles(index, emptyTileIndex);
        swipeSound()
        emptyTileIndex = index;
        adjacentTileIndices = getAdjacentTileIndices(emptyTileIndex);
        if (isPuzzleSolved()) {
          alert("Puzzle solved!");
        }
      }
    });
  });

  // Get indices of adjacent tiles

  function getAdjacentTileIndices(emptyIndex) {
    const adjacentIndices = [];
    const row = Math.floor(emptyIndex / gridSize);
    const col = emptyIndex % gridSize;
    if (row > 0) adjacentIndices.push(emptyIndex - gridSize); // Top tile
    if (row < gridSize - 1) adjacentIndices.push(emptyIndex + gridSize); // Bottom tile
    if (col > 0) adjacentIndices.push(emptyIndex - 1); // Left tile
    if (col < gridSize - 1) adjacentIndices.push(emptyIndex + 1); // Right tile

    return adjacentIndices;
  }

  // Swap the positions of two tiles

  function swapTiles(index1, index2) {
    const tempBackground = tileElements[index1].style.backgroundImage;
    tileElements[index1].style.backgroundImage =
      tileElements[index2].style.backgroundImage;
    tileElements[index2].style.backgroundImage = tempBackground;
  }

  // Check if the puzzle is solved

  function isPuzzleSolved() {
    for (let i = 0; i < numTiles - 1; i++) {
      if (
        tileElements[i].style.backgroundImage !==
        `url("../image1/row-${Math.floor(i / gridSize + 1)}-column-${
          (i % gridSize) + 1
        }.png")`
      ) {
        return false;
      }
    }
    return true;
  }

  // Additional game functionality and event handling


  // Onclick logo button , Start-Page will appear
  var logo = document.getElementById("logo");

  logo.onclick = () => {
    window.open("../index.html", "_self");
    clickSound()
  };

  // To display the total number of hints left for the user
  var hint = document.getElementById("hint");
  let preview = document.getElementById("preview");
  let hint_no = document.getElementById("hint-available");

  var total_hints = 3;
  hint_no.textContent = `${total_hints}`;
  isTimerOver = false;
  hint.onclick = () => {
    if (total_hints != 0) {
      previewTimer();
      total_hints--;
      hint_no.textContent = `${total_hints}`;
    } else if (isTimerOver) {
      alert("No more hints");
    }
    clickSound()
  };

  // Time in which user has to solve the given grid image puzzle

  let time;
  let timer_box = document.getElementById("timer");
  let interval;
  var score = 100;
  timer_box.textContent = 100;

  function startInterval() {
    time = 100;
    interval = setInterval(() => {
      timer_box.textContent = time;
      time--;
      score--;
      localStorage.setItem("Score: ", score);

      if (time == 0) {
        clearInterval(interval);
        gameOver();
      }
    }, 1000);
  }

  startInterval();


  // To display Preview as hint for a particular duration.
  let hintTime = document.getElementById("hint-time");

  function previewTimer() {
    let timing;
    timing = 20;
    preview.style.display = "block";
    hintTime.textContent = timing;
    interval = setInterval(() => {
      timing--;
      hintTime.textContent = timing;
      console.log(interval);
      if (timing < 0) {
        clearInterval(interval);
        preview.style.display = "none";
      }
    }, 1000);
  }

  // To access and display scores in Gameover Page
  localStorage.setItem("Score: ", score);

  // Function to handle the game over state

  function gameOver() {
    location.href = "../html/gameover.html";
  }
}

// Call the function to start the game

generateAndCheckPuzzle();
