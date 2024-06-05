import React from "react";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className="home">
      <h1>Completed Odin Projects</h1>
      <p>
        Below, you will find a collection of my completed Odin projects that
        demonstrate my understanding of the foundations of web development,
        HTML, CSS, and JavaScript.
      </p>
      <div className="thumbnails">
        <Link to="/landingpage">
          <img
            className="thumbnailImg"
            src="images/landingpage.png"
            alt="A landing page for a gym membership created for an odin project assignment."
          />
        </Link>
        <Link to="/rps">
          <img
            className="thumbnailImg"
            src="images/rps.png"
            alt="Rock, paper, scissors game created during the oding project completion"
          />
        </Link>
        <Link to="/etchasketch">
          <img
            className="thumbnailImg"
            src="images/etchasketch.png"
            alt="Interactive etch-a-sketch created during odin project foundations completion"
          />
        </Link>
        <Link to="/calculator">
          <img
            className="thumbnailImg"
            src="images/calculator.png"
            alt="Functional calculator capable of performing basic math operations."
          />
        </Link>
      </div>
    </div>
  );
};
