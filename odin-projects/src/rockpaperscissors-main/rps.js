// Global variables
let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let playerSelection = "player"
let computerSelection = "computer"
let playerMove = document.getElementById('playerMove')
let computerMove = document.getElementById('computerMove')
let rockBtn = document.getElementById('rockBtn')
let paperBtn = document.getElementById('paperBtn')
let scissorsBtn = document.getElementById('scissorsBtn')
let choiceImg = document.getElementById('choiceImg')
let cpuImg = document.getElementById('cpuImg')
let numTurns = 5;
let turnsPlayed = 0;
let turnsCompleted = document.getElementById('turnsCompleted')
let humanScore = 0;
let winnerMsg = document.getElementById('winnerMsg')
let playerScore = document.getElementById('playerScore')
let computerScore = 0;
let cpuScore = document.getElementById('cpuScore')
let ties = 0;
let tieCount = document.getElementById('tieCount')
let gameStatus = document.getElementById('gameStatus')
let resetBtn = document.getElementById('resetBtn')

function getComputerChoice() {
  // Create an array that lists all choices for the game
  let choices = [
    {choice : "Rock!!", img : "rock.png" },
    {choice : "Paper!!", img : "paper.png"},
    {choice : "Scissors!!", img: "scissors.png"},
  ]
  {
    /* Use Math.floor to round down the float that Math.random returns and 
    return an actual integer that will match the choices index of 0, 1, or 2 */
  }
   choiceObj = choices[Math.floor(Math.random() * choices.length)];

   return choiceObj
}

function getHumanChoice() {
  // Create a funtion to pass an event to the rock btn
  rockBtn.onclick = function() {
  playerSelection = rock
  console.log(playerSelection)
  playerMove.innerText = "Rock!!"
  choiceImg.src = "rock.png"
  let computerSelectionObj = getComputerChoice()
  computerSelection = computerSelectionObj.choice
  computerMove.innerText = computerSelectionObj.choice
  cpuImg.src = computerSelectionObj.img
  console.log(choiceObj)
  playRound(playerSelection, computerSelection)
  }
  // Create a funtion to pass an event to the paper btn
  paperBtn.onclick = function() {
  playerSelection = paper
  console.log(playerSelection)
  playerMove.innerText = "Paper!!"
  choiceImg.src = "paper.png"
  let computerSelectionObj = getComputerChoice()
  computerSelection = computerSelectionObj.choice
  computerMove.innerText = computerSelectionObj.choice
  cpuImg.src = computerSelectionObj.img
  console.log(choiceObj)
  playRound(playerSelection, computerSelection)
  }
  // Create a funtion to pass an event to the scissors btn
  scissorsBtn.onclick = function() {
  playerSelection = scissors
  console.log(playerSelection)
  playerMove.innerText = "Scissors!!"
  choiceImg.src = "scissors.png"
  let computerSelectionObj = getComputerChoice()
  computerSelection = computerSelectionObj.choice
  computerMove.innerText = computerSelectionObj.choice
  cpuImg.src = computerSelectionObj.img
  playRound(playerSelection, computerSelection)
  }
}


function playRound(humanChoice, computerChoice) { 
  // Create conditional statements for win conditions
  if (humanChoice === "rock" && computerChoice === "Scissors!!") {
      // Use ++ to increment score
    ++humanScore;
    // Log the condition message in the DOM using inner text
    winnerMsg.innerText = "Human wins! Rock beats scissors";
  } else if (humanChoice === "paper" && computerChoice === "Rock!!") {
    ++humanScore;
    winnerMsg.innerText = "Human wins! Paper beats rock";
  } else if (humanChoice === "scissors" && computerChoice === "Paper!!") {
    ++humanScore;
    winnerMsg.innerText = "Human wins! Scissors beat paper";
  } else if (computerChoice === "Paper!!" && humanChoice === "rock") {
    ++computerScore;
    winnerMsg.innerText = "CPU wins! Paper beats rock";
  } else if (computerChoice === "Scissors!!" && humanChoice === "paper") {
    ++computerScore;
    winnerMsg.innerText = "CPU wins! Scissors beats paper";
  } else if (computerChoice === "Rock!!" && humanChoice === "scissors") {
    ++computerScore;
    winnerMsg.innerText = "CPU wins! Rock beats scissors";
  } else {
    ++ties;
    winnerMsg.innerText = "Draw!"
  }

  // Log the updated score after each turn in the DOM
  playerScore.innerText = "Player score: " + humanScore;
  cpuScore.innerText = "Computer score: " + computerScore;
  tieCount.innerText = "Number of ties: " + ties;
  turnsCompleted.innerText = "Turns played: " + ++turnsPlayed

  // Call the win condition within playRound to activate when condition is met
  winCondtion()
}

function winCondtion() {
    if (humanScore === 5) {
      gameStatus.innerText = "Game over! Player wins!"
      rockBtn.disabled = true
      paperBtn.disabled = true
      scissorsBtn.disabled = true
    } else if (computerScore === 5) {
      gameStatus.innerText = "Game over! CPU wins!"
      rockBtn.disabled = true
      paperBtn.disabled = true
      scissorsBtn.disabled = true
    }
  }

// Call the functions at the end to activate the program
// This prevent execution before playRound executes
getHumanChoice()
getComputerChoice()

function resetGame() {
    humanScore = 0
    computerScore = 0
    ties = 0
    turnsPlayed = 0
  
    playerScore.innerText = "Player score: " + humanScore;
    cpuScore.innerText = "Computer score: " + computerScore;
    tieCount.innerText = "Number of ties: " + ties;
    turnsCompleted.innerText = "Turns played: " + turnsPlayed
    winnerMsg.innerText = " "
    gameStatus.innerText = " "
    playerMove.innerText = " "
    computerMove.innerText = " "
    choiceImg.src = " "
    cpuImg.src = " "

    rockBtn.disabled = false
    paperBtn.disabled = false
    scissorsBtn.disabled = false
}

resetBtn.onclick = resetGame