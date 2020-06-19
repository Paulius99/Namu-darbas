namePromptLenght = prompt("koks tavo vardas?").length;

for (i = 0; i < 1; i++) {
  if (namePromptLenght < 2) {
    namePromptLenght = prompt("koks tavo vardas?").length;
  }
  if (namePromptLenght > 2) {
    break;
  }
  alert("gali buti kad jusu vardas blogas");
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
