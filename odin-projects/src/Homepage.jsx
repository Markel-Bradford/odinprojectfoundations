import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Homepage = () => {
  return (
    <motion.div 
    initial={{scale: 0}}
    animate={{scale: 1, transition:{duration: .2}}}
    exit={{scale: 0, transition:{duration: .2}}}
    className="home">
      <h1 className="title">Completed Odin Projects</h1>
      <div className="intro-container">
      <p className="intro">
        Below, you will find a collection of my completed Odin projects that
        demonstrate my understanding of the foundations of web development,
        HTML, CSS, and JavaScript. Click the thumbnail to view the page and 
        a link to the repository.
      </p>
      </div>
      <div className="thumbnails">
        <Link to="/landingpage">
          <img
            className="thumbnailImg"
            src="/odinprojectfoundations/images/landingpage.png"
            alt="A landing page for a gym membership created for an odin project assignment."
          />
        </Link>
        <Link to="/rps">
          <img
            className="thumbnailImg"
            src="/odinprojectfoundations/images/rps.png"
            alt="Rock, paper, scissors game created during the oding project completion"
          />
        </Link>
        <Link to="/etchasketch">
          <img
            className="thumbnailImg"
            src="/odinprojectfoundations/images/etchasketch.png"
            alt="Interactive etch-a-sketch created during odin project foundations completion"
          />
        </Link>
        <Link to="/calculator">
          <img
            className="thumbnailImg"
            src="/odinprojectfoundations/images/calculator.png"
            alt="Functional calculator capable of performing basic math operations."
          />
        </Link>
      </div>
    </motion.div>
  );
};
