const headsButton = document.querySelector("#heads");
const tailsButton = document.querySelector("#tails");

const outcome = document.querySelector("h1");
const feedback = document.querySelector("#feedback");

const winCounter = document.querySelector("#winCounter");
const loseCounter = document.querySelector("#loseCounter");

let winCount = 0;
let loseCount = 0;

// Computer chooses 'Heads' or 'Tails'.
const cpChoice = () => {
    computerChoice = Math.random() <= 0.5 ? "Heads" : "Tails";
    outcome.innerHTML = computerChoice;
}

const winner = () => {
    if (playerChoice === computerChoice) {
        feedback.innerHTML = "You WON!";
        winCount++;
        winCounter.innerHTML = winCount;
    } else {
        feedback.innerHTML = "You lost..";
        loseCount++;
        loseCounter.innerHTML = loseCount;
    }
}
const tailsFunc = () => {
    cpChoice();
    playerChoice = "Heads";
    winner();
};
const headsFunc = () => {
    cpChoice();
    playerChoice = "Tails";
    winner();
};

// Player chooses 'Heads' or 'Tails'.
headsButton.addEventListener('click', headsFunc);
tailsButton.addEventListener('click', tailsFunc);



