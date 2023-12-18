let x = Math.floor(Math.random() * 100);
function random() {
  let num1 = document.getElementById("num1").value;
  num1 = Number(num1);
  if (num1 > x) {
    document.getElementById("answer").innerText = "Too high";
  } else if (num1 < x) {
    document.getElementById("answer").innerText = "Too low";
  } else {
    document.getElementById("answer").innerText = "Congrats";
  }
}
random();
function reset() {
  let x = Math.floor(Math.random() * 100);
  document.getElementById("num1").value = "";
}
reset();
