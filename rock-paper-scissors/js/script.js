function getComputerChoice() {
    let pcAnswer = Math.floor(Math.random() * 3);
    
    if (pcAnswer === 0) {
        return "rock"
    } else if (pcAnswer === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let control = Boolean(true)
    while (control) {
        let humanAnswer = window.prompt("Rock, Paper, Scissors?").toLowerCase();
        if (humanAnswer === "rock" || humanAnswer === "paper" || humanAnswer === "scissors") {
            return humanAnswer;
        } else alert("You have to pick either Rock, Paper, Scissors!");
    }
}

// for (i = 0; i < 10; i++) {
//     console.log(getComputerChoice());
// }

function playRound(humanChoice, computerChoice) {
    let control = Boolean(true)
    while (control) {
        if (humanChoice === computerChoice) {
            alert("Even! Play again!")
            return playRound(getHumanChoice(), getComputerChoice());
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
            humanScore += 1;
            alert("Human wins the round! " + humanChoice + " beats the " + computerChoice);
            break;
        } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "scissors")) {
            pcScore += 1;
            alert("Clanker wins the round! " + computerChoice + " beats the " + humanChoice);
            break;
        }
    }
}

function playGame(maxRounds) {
    for (i = 1; i <= maxRounds; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
}

let humanScore = 0;
let pcScore = 0;

// playRound(getHumanChoice(), getComputerChoice());
// console.log("PC Score: " + pcScore);
// console.log("Human Score: " + humanScore);
playGame(5);
alert("PC Score: " + pcScore + ", Human Score: " + humanScore);
// alert("Human Score: " + humanScore);

// kamen nuzky, nuzky kamen, 
// kamen papir, papir kamen,
// nuzky papir, papri nuzky