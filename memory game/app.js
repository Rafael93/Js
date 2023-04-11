const cardArray = [
  {
    name: "fries",
    img: "images/fried.png",
  },
  {
    name: "cheeseBurger",
    img: "images/burger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "iceCream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fried.png",
  },
  {
    name: "cheeseBurger",
    img: "images/burger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "iceCream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector("#grid");
let resultDisplay = document.getElementById("result");
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  console.log(cards);
  console.log(cardsChosen[0]);
  console.log(cardsChosen[1]);
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (optionOneId == optionTwoId) {
    alert("You have clicked the same card");
    cardsChosen.pop();
  }
  if (cardsChosen[0] == cardsChosen[1]) {
    cards[optionOneId].setAttribute("src", "images/done.png");
    cards[optionTwoId].setAttribute("src", "images/done.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
  }
  cardsChosen = [];
  cardsChosenId = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = +100;
    createBoard();
  }
}
function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
