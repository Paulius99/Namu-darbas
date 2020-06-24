let age = document.getElementById('age').value;

function validate() {
  if(age < 18) {
    alert("you're too young");
  } else {
    alert('hi!');
  }
}

document.getElementById('submit').addEventListener('click', validate());

