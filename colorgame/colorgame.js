const root = document.getElementById("root");

const startButton = document.createElement("button");
startButton.innerText = "Start";
root.appendChild(startButton);

startButton.addEventListener("click", startGame);

function startGame() {
  const box = document.createElement("div");
  const diffbox = document.createElement("div");
  const red = Math.floor(Math.random() * 245) + 10;
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${red},${green},${blue})`;
  const differentColor = `rgb(${red - 10},${green},${blue})`;

  box.setAttribute("class", "box");
  diffbox.setAttribute("class", "box");
  box.style.backgroundColor = randomColor;
  root.appendChild(box);
  root.appendChild(diffbox);
}
localStorage.setItem("item", "andy");
console.log(localStorage.getItem("item"));
