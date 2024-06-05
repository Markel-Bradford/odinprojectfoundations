import React, { useEffect } from "react";
import "./rpsstyles.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const RPS = () => {
  useEffect(() => {
    // Global variables
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let playerSelection = "player";
    let computerSelection = "computer";
    let playerMove = document.getElementById('playerMove');
    let computerMove = document.getElementById('computerMove');
    let rockBtn = document.getElementById('rockBtn');
    let paperBtn = document.getElementById('paperBtn');
    let scissorsBtn = document.getElementById('scissorsBtn');
    let choiceImg = document.getElementById('choiceImg');
    let cpuImg = document.getElementById('cpuImg');
    let turnsPlayed = 0;
    let turnsCompleted = document.getElementById('turnsCompleted');
    let humanScore = 0;
    let winnerMsg = document.getElementById('winnerMsg');
    let playerScore = document.getElementById('playerScore');
    let computerScore = 0;
    let cpuScore = document.getElementById('cpuScore');
    let ties = 0;
    let tieCount = document.getElementById('tieCount');
    let gameStatus = document.getElementById('gameStatus');
    let resetBtn = document.getElementById('resetBtn');
  
    function getComputerChoice() {
      // Create an array that lists all choices for the game
      let choices = [
        { choice: "Rock!!", img: "images/rock.png" },
        { choice: "Paper!!", img: "images/paper.png" },
        { choice: "Scissors!!", img: "images/scissors.png" },
      ];
      // Use Math.floor to round down the float that Math.random returns and 
      // return an actual integer that will match the choices index of 0, 1, or 2
      let choiceObj = choices[Math.floor(Math.random() * choices.length)];
      return choiceObj;
    }
  
    function getHumanChoice() {
      // Create a function to pass an event to the rock btn
      rockBtn.onclick = function() {
        playerSelection = rock;
        console.log(playerSelection);
        playerMove.innerText = "Rock!!";
        choiceImg.src = "images/rock.png";
        let computerSelectionObj = getComputerChoice();
        computerSelection = computerSelectionObj.choice;
        computerMove.innerText = computerSelectionObj.choice;
        cpuImg.src = computerSelectionObj.img;
        console.log(computerSelectionObj); // Correct variable to log
        playRound(playerSelection, computerSelection);
      };
      // Create a function to pass an event to the paper btn
      paperBtn.onclick = function() {
        playerSelection = paper;
        console.log(playerSelection);
        playerMove.innerText = "Paper!!";
        choiceImg.src = "images/paper.png";
        let computerSelectionObj = getComputerChoice();
        computerSelection = computerSelectionObj.choice;
        computerMove.innerText = computerSelectionObj.choice;
        cpuImg.src = computerSelectionObj.img;
        console.log(computerSelectionObj); // Correct variable to log
        playRound(playerSelection, computerSelection);
      };
      // Create a function to pass an event to the scissors btn
      scissorsBtn.onclick = function() {
        playerSelection = scissors;
        console.log(playerSelection);
        playerMove.innerText = "Scissors!!";
        choiceImg.src = "images/scissors.png";
        let computerSelectionObj = getComputerChoice();
        computerSelection = computerSelectionObj.choice;
        computerMove.innerText = computerSelectionObj.choice;
        cpuImg.src = computerSelectionObj.img;
        playRound(playerSelection, computerSelection);
      };
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
        winnerMsg.innerText = "Draw!";
      }
  
      // Log the updated score after each turn in the DOM
      playerScore.innerText = "Player score: " + humanScore;
      cpuScore.innerText = "Computer score: " + computerScore;
      tieCount.innerText = "Number of ties: " + ties;
      turnsCompleted.innerText = "Turns played: " + ++turnsPlayed;
  
      // Call the win condition within playRound to activate when condition is met
      winCondtion();
    }
  
    function winCondtion() {
      if (humanScore === 5) {
        gameStatus.innerText = "Game over! Player wins!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
      } else if (computerScore === 5) {
        gameStatus.innerText = "Game over! CPU wins!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
      }
    }
  
    // Call the functions at the end to activate the program
    // This prevent execution before playRound executes
    getHumanChoice();
  
    function resetGame() {
      humanScore = 0;
      computerScore = 0;
      ties = 0;
      turnsPlayed = 0;
  
      playerScore.innerText = "Player score: " + humanScore;
      cpuScore.innerText = "Computer score: " + computerScore;
      tieCount.innerText = "Number of ties: " + ties;
      turnsCompleted.innerText = "Turns played: " + turnsPlayed;
      winnerMsg.innerText = " ";
      gameStatus.innerText = " ";
      playerMove.innerText = " ";
      computerMove.innerText = " ";
      choiceImg.src = " ";
      cpuImg.src = " ";
  
      rockBtn.disabled = false;
      paperBtn.disabled = false;
      scissorsBtn.disabled = false;
    }
  
    resetBtn.onclick = resetGame;
  }, [])
  
    return (
      <motion.div 
      initial={{scale: 0}}
      animate={{scale: 1, transition:{duration: .2}}}
      exit={{scale: 0, transition:{duration: .2}}} className="rps-body">
      <header className="rps-header">
        <h1>ROSHAMBO!!!!</h1>
      </header>
      <h1 className="game-instruction">The first to score 5 points wins!!</h1>
      <h2 id="winnerMsg"></h2>
      <div className="game" id="game">
        <div className="playerInfo player">
          <h1>Player:</h1>

          <h1 id="playerMove"></h1>
          <img id="choiceImg" />
        </div>
        <div className="scoreContainer">
          <div className="score">
            <div className="counts">
              <p id="turnsCompleted"></p>
              <p id="playerScore"></p>
              <p id="cpuScore"></p>
              <p id="tieCount"></p>
              <h2 id="gameStatus"></h2>
            </div>
          </div>
        </div>
        <div className="playerInfo cpu">
          <h1>CPU:</h1>
          <h1 id="computerMove"></h1>
          <img id="cpuImg" />
        </div>
      </div>
      <div className="btnContainer">
        <button className="choiceBtn" id="rockBtn">
          <i className="fa-solid fa-hand-back-fist"></i>
        </button>
        <button className="choiceBtn" id="paperBtn">
          <i className="fa-solid fa-hand"></i>
        </button>
        <button className="choiceBtn" id="scissorsBtn">
          <i className="fa-solid fa-hand-scissors"></i>
        </button>
      </div>
      <div className="restart">
        <button id="resetBtn" className="choiceBtn" type="reset">
          Reset
        </button>
      </div>
      <Link to="/">
        <button className="homeBtn">Back to Home</button>
      </Link>
      <a href="https://github.com/Markel-Bradford/rockpaperscissors" target="_blank">
        <img className="whiteGithub" src="images/whitegithub.png" alt="white git hub logo" />
        <img className="github" src="images/github.png" alt="github logo" />
      </a>
      <footer className="rps-footer">
        <p>&copy; Markel Bradford 2024</p>
      </footer>
    </motion.div>
  );
};

export default RPS;
