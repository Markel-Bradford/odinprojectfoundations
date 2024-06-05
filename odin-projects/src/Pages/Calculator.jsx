import React, { useEffect } from "react";
import "./calcstyles.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Calculator = () => {
  useEffect(() => {
    const container = document.getElementById("calc-container");
      const screen = document.getElementById("screen");
      let currentInput = "";
      let firstNum = null;
      let secondNum = null;
      let currentOperator = null;
      let resetScreen = false;
  
      const valuesArray = [
        "A/C", "", "", "/",
        "1", "2", "3", "*",
        "4", "5", "6", "-",
        "7", "8", "9", "+",
        "Bksp", "0", ".", "=",
      ];
  
      function makeKeys(numberOfRows, numberOfColumns) {
        for (let i = 0; i < numberOfRows; i++) {
          let row = document.createElement("div");
          row.className = "rows";
          container.appendChild(row);
  
          for (let c = 0; c < numberOfColumns; c++) {
            let col = document.createElement("button");
            col.className = "cols";
            const value = valuesArray[i * numberOfColumns + c]; // Assign value from the array
            col.innerText = value;
            col.id = `key-${value}`; // Assign an ID
            row.appendChild(col);
  
            // Add onclick event listener
            col.addEventListener("click", () => handleInput(value));
          }
        }
      }
  
      makeKeys(5, 4);
  
      // Handle button click or key press
      function handleInput(value) {
        if (value === "A/C") {
          // Reset everything
          currentInput = "";
          firstNum = null;
          secondNum = null;
          currentOperator = null;
        } else if (value === "Bksp") {
          if (currentInput.length > 0) {
            currentInput = currentInput.slice(0, -1); // Backspace functionality
          }
        } else if (value === "=") {
          if (currentOperator !== null && firstNum !== null) {
            secondNum = parseFloat(currentInput);
            currentInput = roundRes(
              operate(firstNum, secondNum, currentOperator)
            ).toString();
            firstNum = null;
            currentOperator = null;
          }
        } else if (value === ".") {
          if (!currentInput.includes(".")) {
            currentInput += value;
          }
        } else if (["+", "-", "*", "/"].includes(value)) {
          if (firstNum === null) {
            firstNum = parseFloat(currentInput); // Set firstNum if it is null
          } else if (currentOperator !== null) {
            secondNum = parseFloat(currentInput);
            firstNum = roundRes(operate(firstNum, secondNum, currentOperator));
            currentInput = firstNum.toString();
          }
          currentOperator = value; // Set the operator
          resetScreen = true;
        } else {
          if (resetScreen) {
            currentInput = value;
            resetScreen = false;
          } else {
            currentInput += value;
          }
        }
        updateDisplay();
      }
  
      function updateDisplay() {
        screen.innerText = currentInput;
      }
  
      // Map the keys to the expected value for keydown event
      const keyMap = {
        Delete: "A/C",
        "/": "/",
        1: "1",
        2: "2",
        3: "3",
        "*": "*",
        4: "4",
        5: "5",
        6: "6",
        "-": "-",
        7: "7",
        8: "8",
        9: "9",
        "+": "+",
        0: "0",
        ".": ".",
        Enter: "=",
        Backspace: "Bksp",
      };
  
      // Add keydown event listener to highlight keys
    const handleKeyDown = (event) => {
      const key = event.key;
      if (keyMap[key]) {
        handleInput(keyMap[key]);
        highlightKey(keyMap[key]);
      }
    };

    // Add keyup event listener to remove highlight
    const handleKeyUp = (event) => {
      const key = event.key;
      if (keyMap[key]) {
        removeHighlight(keyMap[key]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  
      // Highlight the key
      function highlightKey(key) {
        const button = document.getElementById(`key-${key}`);
        if (button) {
          button.classList.add("highlight");
        }
      }
  
      // Remove the highlight
      function removeHighlight(key) {
        const button = document.getElementById(`key-${key}`);
        if (button) {
          button.classList.remove("highlight");
        }
      }
  
      // Create math functions
      function add(num1, num2) {
        return num1 + num2;
      }
  
      function subtract(num1, num2) {
        return num1 - num2;
      }
  
      function multiply(num1, num2) {
        return num1 * num2;
      }
  
      function divide(num1, num2) {
        return num1 / num2;
      }
  
      // Create function that performs the desired operation based on the operator case
      function operate(num1, num2, operator) {
        switch (operator) {
          case "+":
            return add(num1, num2);
          case "-":
            return subtract(num1, num2);
          case "*":
            return multiply(num1, num2);
          case "/":
            if (num2 !== 0) {
              return divide(num1, num2);
            } else {
              return "Error! That's a no-go pal!";
            }
          default:
            return null;
        }
      }
  
      // Create a function to round the result to two decimal places using Math.round
      function roundRes(num) {
        return Math.round(num * 100) / 100;
      }

      // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };

}, [])

  return (
    <motion.div 
    initial={{scale: 0}}
    animate={{scale: 1, transition:{duration: .2}}}
    exit={{scale: 0, transition:{duration: .2}}} 
    className="calc-body">
      <h1>Calculator App</h1>
      <div className="calcContainer" id="calc-container">
        <div>
          <div id="screen"></div>
        </div>
      </div>
      <Link to="/">
        <button className="homeBtn">Back to Home</button>
      </Link>
      <a href="https://github.com/Markel-Bradford/calculator" target="_blank">
        <img className="whiteGithub" src="/odinprojectfoundations/images/whitegithub.png" alt="white git hub logo" />
        <img className="github" src="/odinprojectfoundations/images/github.png" alt="github logo" />
      </a>
    </motion.div>
  );
};
