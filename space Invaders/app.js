function init() {
  let currentShooterIndex = 202;
  let width = 15;
  let direction = 1;
  let invadersId;
  let goingRight = true;
  let aliensRemoved = [];
  let result = 0;
  const grid = document.querySelector(".grid");
  let resultDisplay = document.querySelector(".result");
  for (let i = 0; i <= 224; i++) {
    const square = document.createElement("div");
    grid.appendChild(square);
  }

  const squares = Array.from(document.querySelectorAll(".grid div"));
  const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39,
  ];
  //Draw Alien Invaders
  function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
      if (!aliensRemoved.includes(i)) {
        squares[alienInvaders[i]].classList.add("invader");
      }
    }
  }
  draw();

  function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
      squares[alienInvaders[i]].classList.remove("invader");
    }
  }

  squares[currentShooterIndex].classList.add("shooter");
  //move the shooter
  function moveShooter(e) {
    squares[currentShooterIndex].classList.remove("shooter");
    switch (e.key) {
      case "ArrowLeft":
        if (currentShooterIndex % width !== 0) currentShooterIndex--;
        break;

      case "ArrowRight":
        if (currentShooterIndex % width < width - 1) currentShooterIndex++;
        break;
    }
    squares[currentShooterIndex].classList.add("shooter");
  }
  document.addEventListener("keydown", moveShooter);

  function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge =
      alienInvaders[alienInvaders.length - 1] % width === width - 1;
    remove();

    if (rightEdge && goingRight) {
      for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += width + 1;
        direction = -1;
        goingRight = false;
      }
    }
    if (leftEdge && !goingRight) {
      for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += width - 1;
        direction = 1;
        goingRight = true;
      }
    }
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += direction;
    }
    draw();

    if (squares[currentShooterIndex].classList.contains("invader", "shooter")) {
      resultDisplay.innerHTML = "Game Over";
      clearInterval(invadersId);
    }
    for (let i = 0; i < alienInvaders.length; i++) {
      if (alienInvaders[i] > squares.length) {
        resultDisplay.innerHTML = "Game Over";
        clearInterval(invadersId);
      }
    }
    if (aliensRemoved.length === alienInvaders.length) {
      resultDisplay.innerHTML = "You win";
      clearInterval(invadersId);
    }
  }
  invadersId = setInterval(moveInvaders, 500);

  function shoot(e) {
    let laserId;
    let currentLaserId = currentShooterIndex;
    function moveLaser() {
      squares[currentLaserId].classList.remove("laser");
      currentLaserId -= width;
      squares[currentLaserId].classList.add("laser");

      if (squares[currentLaserId].classList.contains("invader")) {
        squares[currentLaserId].classList.remove("laser");
        squares[currentLaserId].classList.remove("invader");
        squares[currentLaserId].classList.add("boom");
        setTimeout(() => squares[currentLaserId].classList.remove("boom"), 300);
        clearInterval(laserId);
        const alienRemoved = alienInvaders.indexOf(currentLaserId);
        aliensRemoved.push(alienRemoved);
        result++;
        resultDisplay.innerHTML = result;
      }
    }
    switch (e.key) {
      case "ArrowUp":
        laserId = setInterval(moveLaser, 100);
        break;
    }
  }
  document.addEventListener("keydown", shoot);
}
