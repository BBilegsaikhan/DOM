let num1 = (document.getElementById("num1").value = Math.floor(
  Math.random() * 100 + 1
));
let num2 = (document.getElementById("num2").value = Math.floor(
  Math.random() * 100 + 1
));
function check() {
  let sum = num1 + num2;
  if (Number(document.getElementById("sum").value) == sum) {
    document.getElementById("result").innerText = "True";
  } else document.getElementById("result").innerText = "False";
}
function update() {
  num1 = document.getElementById("num1").value = Math.floor(
    Math.random() * 100 + 1
  );
  num2 = document.getElementById("num2").value = Math.floor(
    Math.random() * 100 + 1
  );
}
