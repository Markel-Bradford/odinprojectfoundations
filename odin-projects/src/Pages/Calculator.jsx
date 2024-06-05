import React, { useEffect } from "react";
import "./calcstyles.css";
import "./scripts/calculator"

export const Calculator = () => {

  return (
    <div className="calc-body">
      <h1>Calculator App</h1>
      <div className="calcContainer" id="calc-container">
        <div>
          <div id="screen"></div>
        </div>
      </div>
    </div>
  );
};
