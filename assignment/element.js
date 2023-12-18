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
