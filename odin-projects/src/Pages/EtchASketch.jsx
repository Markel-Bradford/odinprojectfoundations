import React, { useEffect } from "react";
import "./etchasketchstyles.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EtchASketch = () => {
  useEffect(() => {
    const container = document.getElementById("container");
    let newGridBtn = document.getElementById("newGridBtn");
    let rainbowBtn = document.getElementById("rainbowBtn");
    let blackBtn = document.getElementById("blackBtn");

    function makeGrid(cells) {
      // Clear existing grid when makeGrid is called
      container.innerHTML = " ";

      // Create a loop to create new divs based on the numbers given
      for (let i = 0; i < cells; i++) {
        let row = document.createElement("div");
        row.className = "row";
        if (i === 0) row.classList.add("first-row");
        if (i === cells - 1) row.classList.add("last-row");
        container.appendChild(row);

        for (let c = 0; c < cells; c++) {
          let col = document.createElement("div");
          col.className = "col";
          if (c === 0) col.classList.add("first-col");
          if (c === cells - 1) col.classList.add("last-col");
          row.appendChild(col);

          // Initialize the lightness property
          col.dataset.lightness = 100;

          // Create an event listener to color each grid item on hover
          // Imitates the trail left on an etch-a-sketch
          col.addEventListener("mouseover", (e) => {
            // Decrease the lightness of each item when hovered over
            let lightness = parseFloat(e.target.dataset.lightness) - 10;
            e.target.dataset.lightness = lightness;
            e.target.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
          });
        }
      }
    }

    function newGrid() {
      // Prompt the user to enter the desired number of rows and columns
      let dimensions = prompt("Enter board dimensions: ");

      let cells = parseInt(dimensions);

      // Create conditional statement that will require an input between 1 and 100
      if (isNaN(cells) || cells > 100 || cells < 1) {
        alert("Please enter numbers between 1 and 100 rows and columns.");
        return;
      }

      makeGrid(cells);
    }
    newGridBtn.onclick = newGrid;

    // Initial grid state
    makeGrid(16);

    // Create a funtion to generate a random number between 0 and 255, the rgb scale
    function randomInteger(max) {
      return Math.floor(Math.random() * (max + 1));
    }

    // Create function to return a random rgb value based on a max value of 255 (RGB scale limit)
    function colors() {
      let r = randomInteger(255);
      let g = randomInteger(255);
      let b = randomInteger(255);
      return `rgb(${r},${g},${b})`;
    }

    function rgbMouseoverHandler(e) {
      let color = colors();
      e.target.style.backgroundColor = color;
      e.target.dataset.originalColor = color;
      // Set lightness to 100%
      e.target.dataset.lightness = 100;
    }

    function blackMouseoverHandler(e) {
      let lightness = parseFloat(e.target.dataset.lightness) - 10;
      e.target.dataset.lightness = lightness;
      e.target.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
    }

    function rgb() {
      // Select all cols with a query selector
      const cols = document.querySelectorAll(".col");
      // Use forEach to call the colors function for each element in the query
      cols.forEach((col) => {
        // Remove any existing mouseover event listeners
        col.removeEventListener("mouseover", blackMouseoverHandler);
        // Create event listener that will output the RGB values on mouse over
        col.addEventListener("mouseover", rgbMouseoverHandler);
      });
    }

    // Create an onclick event that will change the mouse over event to rgb
    rainbowBtn.onclick = rgb;

    function black() {
      // Select all cols with a query selector
      const cols = document.querySelectorAll(".col");

      // Iterate over each cell and initialize the lightness property
      cols.forEach((col) => {
        col.dataset.lightness = 100;
        // Remove any existing mouseover event listeners
        col.removeEventListener("mouseover", rgbMouseoverHandler);
        // Add new event listener for black mode
        col.addEventListener("mouseover", blackMouseoverHandler);
      });
    }

    // Create onclick event that will call the black function to change mouseover event
    blackBtn.onclick = black;
  }, []);

  return (
    <motion.div 
    initial={{scale: 0}}
    animate={{scale: 1, transition:{duration: .2}}}
    exit={{scale: 0, transition:{duration: .2}}} className="eas-body">
      <h1>Etch-a-Sketch</h1>
      <div className="btnContainer">
        <button className="eas-button" id="newGridBtn">Make New Grid</button>
        <button className="eas-button" id="blackBtn">Black</button>
        <button className="eas-button" id="rainbowBtn">Rainbow</button>
      </div>
      <div id="container"></div>
      <Link to="/">
        <button className="homeBtn">Back to Home</button>
      </Link>
      <a href="https://github.com/Markel-Bradford/etch-a-sketch" target="_blank">
        <img className="whiteGithub" src="/odinprojectfoundations/images/whitegithub.png" alt="white git hub logo" />
        <img className="github" src="/odinprojectfoundations/images/github.png" alt="github logo" />
      </a>
    </motion.div>
  );
};

export default EtchASketch;
