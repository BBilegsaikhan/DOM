// Дэлгэцэн дээр 3н input, 2 button байна.
// Program эхлэхэд эхний 2 input дээр random - оор тоо гарч ирнэ.
// Харин 3 дахь input дээр тэр 2н нийлбэрийг бичээд эхний (Шалгах) гэсэн button - ыг дарахад зөв байвал Зөв байна гэсэн alert өгнө.
// Буруу байвал Буруу байна гэсэн alert өгнө.
// Хамгийн сүүлийн (Шинэчлэх) гэсэн button дарахад эхний 2 input дээр шинээр random тоонууд гарч ирнэ. -->
let x = Math.floor(Math.random() * 100);
function random() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
}
random();
function reset() {
  let x = Math.floor(Math.random() * 100);
  document.getElementById("num1").value = "";
}
reset();
