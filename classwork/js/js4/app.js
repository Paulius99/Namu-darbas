//secNum = document.getElementById("sec");
//mygtukas = document
//  .getElementById("button")
//  .addEventListener("click", mainFlow);
//
//function sum(x, y)  {
//  x + y;
//};

function mainFlow() {
  firstNum = document.getElementById("first").value;
  secNum = document.getElementById("sec").value;
  sum = Number(firstNum) + Number(secNum);
  console.log(sum);
  document.getElementById("main-content").innerHTML = sum;
}
