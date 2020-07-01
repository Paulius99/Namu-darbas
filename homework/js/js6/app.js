document.getElementById('submit').addEventListener('click', validate);

function validate() {
  let age = document.getElementById('age').value;
  if (age < 18) {
    alert("you're too young");
  } else {
    alert("hi!");
  }
}