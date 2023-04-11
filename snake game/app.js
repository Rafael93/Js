function init() {
  let snakeCurrentPosition = 455;
  let snakeId;
  let direction = 1;
  const width = 32;
  const result = document.querySelector(".result");
  //Create grid
  const grid = document.querySelector(".grid");
  for (let i = 0; i < 1024; i++) {
    square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
  }
  const squares = Array.from(document.querySelectorAll(".square"));
  //create Walls
  function generateLeftWall() {
    let leftWallSquare = 0;
    for (let i = 0; i < 31; i++) {
      leftWallSquare += width;
      squares[leftWallSquare].classList.add("wall");
    }
  }
  generateLeftWall();
  //Right Wall
  function generateRightWall() {
    let rightWallSquare = 31;
    for (let i = 0; i < 31; i++) {
      rightWallSquare += width;
      squares[rightWallSquare].classList.add("wall");
    }
  }
  generateRightWall();
  //Top Wall
  function generateTopWall() {
    let topWallSquares = 0;
    for (let i = 0; i <= 31; i++) {
      squares[topWallSquares].classList.add("wall");
      topWallSquares++;
    }
  }
  generateTopWall();
  //GenerateBottomWall
  function generateBottomWall() {
    bottomWallSquares = 992;
    for (let i = 0; i < 31; i++) {
      bottomWallSquares++;
      squares[bottomWallSquares].classList.add("wall");
    }
  }
  generateBottomWall();
  //Create snake
  function drawSnake() {
    snake = squares[snakeCurrentPosition].classList.add("snake");
  }
  drawSnake();
  //Move Snake
  function moveSnake() {
    squares[snakeCurrentPosition].classList.remove("snake");
    snakeCurrentPosition += direction;
    squares[snakeCurrentPosition].classList.add("snake");
    checkForGameOver();
  }
  snakeId = setInterval(moveSnake, 200);
  //check for game over
  function checkForGameOver() {
    if (squares[snakeCurrentPosition].classList.contains("wall")) {
      clearInterval(snakeId);
      snakeCurrentPosition = result.innerHTML = "Game Over";
    }
  }
  //change snake directions
  function changeDirections(e) {
    switch (e.key) {
      case "ArrowRight":
        direction = 1;
        break;
      case "ArrowLeft":
        direction = -1;
        break;
      case "ArrowUp":
        direction = -30;
        break;
      case "ArrowDown":
        direction = +30;
        break;
    }
  }
  document.addEventListener("keydown", changeDirections);
}
