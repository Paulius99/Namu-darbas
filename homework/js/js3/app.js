namePromptLenght = prompt("koks tavo vardas?").length;

while (namePromptLenght < 3 || namePromptLenght === "") {
  namePromptLenght = prompt("koks tavo vardas?").length;
}

for (i = 0; i < 1; i++) {
  if ((agePrompt = prompt("koks tavo amžius?") > 18)) {
    break;
  }
  if ((agePrompt = prompt("koks tavo amžius?") > 18)) {
    break;
  }
  alert("nepilnameciams negalima cia buti");
}
