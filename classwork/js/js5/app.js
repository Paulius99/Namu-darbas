document.getElementById('change-color').addEventListener('click', nclick('color'));

function nclick(x) {
  if (document.getElementById('main-content').classList.contains(x)) {
    document.getElementById('main-content').classList.remove(x);
  } else {
    document.getElementById('main-content').className = x;
  }
}