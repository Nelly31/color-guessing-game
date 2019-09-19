let numSquares = 6
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay")
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1")
let resetButton = document.querySelector("#reset")
let easyButton = document.querySelector("#easyBtn")
let hardButton = document.querySelector("#hardBtn")


easyButton.addEventListener("click", function() {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected")
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  h1.style.backgroundColor = "#232323";
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor.toUpperCase();
  for (let i = 0; i <squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
})

hardButton.addEventListener("click", function() {
  hardButton.classList.add("selected")
  easyButton.classList.remove("selected")
  numSquares = 6
  colors = generateRandomColors(numSquares);
  h1.style.backgroundColor = "#232323";
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor.toUpperCase();
  for (let i = 0; i <squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
  }
})

resetButton.addEventListener("click", function(){
  numSquares = 6
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor.toUpperCase();

  for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i]
  }
  h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor.toUpperCase();

for (let i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i]
  // add click listeners to squares
  squares[i].addEventListener("click", function() {
    clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor);
      resetButton.textContent = "Play Again?"
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again"
    } 
  })
}

function changeColors(color) {
  //loop through all squares and change each color
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);

  return colors[random];
}

function generateRandomColors(num) {
  //make an array of num random colors
  let colorArray = [];

  for (let i = 0; i < num; i++) {
   //get random color and push into array
   colorArray.push(randomColor())
  }
  return colorArray;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)

  return `rgb(${r}, ${g}, ${b})`
};