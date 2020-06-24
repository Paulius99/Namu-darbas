function dalyba(x, y) {
  let res = x / y;
  return res;
}


function display() {
  alert(dalyba(10, 2));
}

document.getElementById('btn').addEventListener('click', () => {
  alert(display());
});