function add() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 + num2;
  document.getElementById("answer").innerText = sum;
}
add();
function subtrac() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 - num2;
  document.getElementById("answer").innerText = sum;
}
subtrac();
function mult() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 * num2;
  document.getElementById("answer").innerText = sum;
}
mult();
function divid() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let sum = num1 / num2;
  document.getElementById("answer").innerText = sum;
}
divid();
let x = Math.floor(Math.random() * 100 + 1);
document.getElementById("Result1").innerHTML = x;
function random() {
  let num1 = Number(document.getElementById("numb").value);
  if (num1 > x) {
    document.getElementById("Result1").innerText = "Ih too";
  } else if (num1 < x) {
    document.getElementById("Result1").innerText = "Baga too";
  } else {
    document.getElementById("Result1").innerText = "Tentsuu";
  }
}
function reset() {
  let x = Math.floor(Math.random() * 100 + 1);
  document.getElementById("Result1").innerHTML = x;
}
