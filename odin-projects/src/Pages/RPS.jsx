import React from "react";
import "./scripts/rps";
import "./rpsstyles.css";

const RPS = () => {
  return (
    <div className="rps-body">
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
      <footer>
        <p>&copy; Markel Bradford 2024</p>
      </footer>
    </div>
  );
};

export default RPS;
