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

// function getHumanChoice() {
//     let control = Boolean(true)
//     while (control) {
//         let humanAnswer = window.prompt("Rock, Paper, Scissors?").toLowerCase();
//         if (humanAnswer === "rock" || humanAnswer === "paper" || humanAnswer === "scissors") {
//             return humanAnswer;
//         } else alert("You have to pick either Rock, Paper, Scissors!");
//     }
// }

function playRound(humanChoice, computerChoice) {
    let control = Boolean(true)
    while (control) {
        if (humanChoice === computerChoice) {
            alert("Even! Play again!")
            // return playRound(getHumanChoice(), getComputerChoice());
            break;
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
            humanScore += 1;
            if (humanScore < 5) {
                alert("Human wins the round! " + humanChoice + " beats the " + computerChoice);
            } else {
                alert("Human wins the game!");
                humanScore = 0, pcScore = 0;
            }
            break;
        } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "scissors")) {
            pcScore += 1;
            if (pcScore < 5) {
                alert("Clanker wins the round! " + computerChoice + " beats the " + humanChoice);
            } else {
                alert("Clanker wins the game!")
                humanScore = 0, pcScore = 0;
            }
            break;
        }
    }
}

// function playGame(maxRounds) {
//     for (i = 1; i <= maxRounds; i++) {
//         playRound(getHumanChoice(), getComputerChoice())
//     }
// }

document.querySelectorAll("button").forEach(item => {
    item.addEventListener('click', event => {
        // playGame(5);
        playRound(item.id, getComputerChoice())
        content.textContent = "Human score: " + humanScore + ", PC score: " + pcScore;
    })
})

let humanScore = 0;
let pcScore = 0;
let round = 0;

const container = document.querySelector("#results");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Human score: " + humanScore + ", PC score: " + pcScore;

container.append(content);