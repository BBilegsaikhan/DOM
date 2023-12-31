const root = document.getElementById("root");
const header = document.createElement("div");
header.setAttribute("class", "header");

let levelC = 0;
const level = document.createElement("p");
level.innerText = "level " + levelC;

const startButton = document.createElement("button");
startButton.setAttribute("id", "startButton");
startButton.innerText = "Start";

let chanceC = 3;

const chance = document.createElement("p");
chance.setAttribute("class", "chance");
chance.innerText = "Chance " + chanceC;

header.appendChild(level);
header.appendChild(startButton);
header.appendChild(chance);

const gameBody = document.createElement("div");
gameBody.setAttribute("class", "gameBody");
const boxes = document.createElement("div");
boxes.setAttribute("class", "boxes");

root.appendChild(header);
root.appendChild(gameBody);

startButton.addEventListener("click", startGame);

function addBoxes() {
  const red = Math.floor(Math.random() * 250);
  const green = Math.floor(Math.random() * 250);
  const blue = Math.floor(Math.random() * 250);
  const randomColor = `rgb(${red}, ${green},${blue}`;
  const random = Math.floor(Math.random() * 8);
  for (i = 0; i < 9; i++) {
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", i);
    if (i == random) {
      box.style.backgroundColor = `rgb(${red-5}, ${green - 5}, ${blue-5})`;
    } else {
      box.style.backgroundColor = randomColor;
    }
    boxes.appendChild(box);

    box.addEventListener("click", (e) => {
      let boxId = e.target.id;
      if (boxId == random) {
        levelC = levelC + 1;
        boxes.innerHTML = "";
        level.innerText = "Level " + levelC;
        if (levelC == 5) {
          gameBody.innerHTML = "Win";
        } else {
          addBoxes();
        }
      } else {
        chanceC--;
        if (chanceC == 0) {
          gameBody.innerHTML = "Lose";
        }
        chance.innerText = "Chance " + chanceC;
      }
    });
  }
  gameBody.appendChild(boxes);
}
function startGame() {
  levelC = 0;
  level.innerText = "Level " + levelC;
  chanceC = 3;
  chance.innerText = "Chance " + chanceC;
  boxes.innerHTML = "";
  addBoxes();
}
