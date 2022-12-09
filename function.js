let choices = []

function addChoice() {
    let choice = document.getElementById("newChoice").value;
    choices.push(choice);
    document.getElementById("newChoice").value = "";
    document.getElementById("allChoices").innerHTML = choices
}

function displayResult() {
    document.getElementById("chosenChoice").innerHTML = getRandomElement(choices);
}

function getRandomElement(werte) {
    let num = Math.floor(Math.random() * werte.length);
    return werte[num];
}