const submitButton = document.getElementById("submit");
submitButton.onclick = buttonClicked;
var secretWord = "cat";
var secretArray = getSecretArray();
var correctArray = [];
var emojiArray = ["(","╯","ರ", "~", "ರ","）","╯","︵","┻","━","┻"];
var wrongWords = 0;

function buttonClicked() {
  var input = document.getElementById("input").value;
  for (let i = 0; i < secretArray.length; i++) {
    if (input == secretArray[i]) {
      appendAnswer(secretArray[i]);
      correctArray.push(secretArray[i]);
      checkIfHaveWon();
      return;
    }
  }
  updateWrongWords();
}

function checkIfHaveWon() {
  if (secretArray.length == correctArray.length) {
    overwriteOutput("You have won!");
    return true;
  }
  return false;
}

function updateWrongWords() {
  if (wrongWords < emojiArray.length) {
    appendToEmoji(emojiArray[wrongWords]);
    wrongWords++;
    overwriteOutput("Wrong answer!");
  }
  else {
    overwriteOutput("You lost!");
    overwriteAnswer("You made the cat flip the table!");
  }
}

function getSecretArray() {
  return secretWord.split("");
}

function overwriteAnswer(text){
    var output = document.querySelector('#answer');
    output.innerText = text;
}

function appendAnswer(text) {
    var output = document.querySelector('#answer');
    output.innerText += text;
}

function overwriteEmoji(text){
    var output = document.querySelector('#emoji');
    output.innerText = text;
}

function appendToEmoji(text) {
    var output = document.querySelector('#emoji');
    output.innerText += text;
}

function overwriteOutput(text){
    var output = document.querySelector('#output');
    output.innerText = text;
}

function appendOutput(text) {
    var output = document.querySelector('#output');
    output.innerText += text;
}
