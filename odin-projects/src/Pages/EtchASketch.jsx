import React from "react";
import "./etchasketchstyles.css";
import "./scripts/script"

const EtchASketch = () => {


  return (
    <div className="eas-body">
      <h1>Etch-a-Sketch</h1>
      <div className="btnContainer">
        <button className="eas-button" id="newGridBtn">Make New Grid</button>
        <button className="eas-button" id="blackBtn">Black</button>
        <button className="eas-button" id="rainbowBtn">Rainbow</button>
      </div>
      <div id="container"></div>
    </div>
  );
};

export default EtchASketch;
