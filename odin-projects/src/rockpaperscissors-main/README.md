# Rock-Paper-Scissors Game
## Overview

This project is a simple implementation of the classic game Rock-Paper-Scissors. It is designed to be played in a web browser and allows a human player to compete against the computer. The game runs for a set number of turns, and the scores are tracked and displayed after each round and at the end of the game.

## Features

Interactive Gameplay: The player is prompted to enter their choice of "rock", "paper", or "scissors".
Computer Opponent: The computer randomly selects its choice each round.
Score Tracking: The game keeps track of the number of wins, losses, and ties.
Round-based: The game runs for a fixed number of turns (5 turns by default).

## How to Play

Start the Game: Load the game in a web browser.
Make Your Choice: When prompted, enter your choice of "rock", "paper", or "scissors".
View Results: After each round, the game will display the result of that round (win, lose, or tie) and the current score.
End of Game: After all rounds have been played, the final scores will be displayed, and the winner will be announced.

## Code Structure

getComputerChoice(): Function that randomly selects and returns the computer's choice of "rock", "paper", or "scissors".
getHumanChoice(): Function that prompts the player to enter their choice, validates the input, and returns it.
playGame(): Main function that runs the game, handles the game loop, and tracks the scores.
playRound(humanChoice, computerChoice): Helper function within playGame() that determines the outcome of each round and updates the scores accordingly.

## Running the Game

Ensure you have a modern web browser installed.
Copy the game code into an HTML file and open it with your web browser.
Follow the on-screen prompts to play the game.