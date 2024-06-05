import React from "react";
import './lpstyles.css'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
    <motion.div 
    initial={{scale: 0}}
    animate={{scale: 1, transition:{duration: .2}}}
    eit={{scaleX: 0, transition:{duration: .2}}}
    className=".lp-body">
      <header className="header">
        <nav>
          <p className="logo">Beyond Fitness</p>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="main-text">Take your fitness to the next level</h1>
            <p className="secondary-text">
              With Beyond Fitness, you can <strong>exceed</strong> your fitness
              goals!
            </p>
            <button className="sign-up" type="submit">
              Sign up
            </button>
          </div>
          <img
            className="hero-img"
            src="images/fitness.jpg"
            alt="Group of people exercising."
          />
        </div>
      </div>
      <div className="options-container">
        <h2 id="option-title">What fitness path are you interested in?</h2>
        <div className="option-imgs">
          <div>
            <img className="option-img" src="images/cardio.jpg" alt="" />
            <figcaption>
              Interested in improving your cardiovascular performance? Learn
              more here!
            </figcaption>
          </div>
          <div>
            <img className="option-img" src="images/strength.jpg" alt="" />
            <figcaption>
              Want to get stronger? Look no further! Click here to get started.
            </figcaption>
          </div>
          <div>
            <img className="option-img" src="images/yoga.jpg" alt="" />
            <figcaption>
              Need some zen in your life? Click here to check our yoga program.{" "}
            </figcaption>
          </div>
          <div>
            <img className="option-img" src="images/calesthenics.jpg" alt="" />
            <figcaption>
              Do you want functional strength? Learn more about calesthentics
              here.
            </figcaption>
          </div>
        </div>
      </div>
      <div className="quote-section">
        <div className="quote-container">
          <p className="quote">
            "Today, I will do what others won't, so tomorrow I can accomplish
            what others can't."
          </p>
          <p className="quote-origin">- Jerry Rice</p>
        </div>
      </div>
      <div className="call-to-action-container">
        <div className="call-to-action">
          <div className="call-to-action-message">
            <p className="call-text">
              <strong>Call to action! Achieve your goals!</strong>
            </p>
            <p>
              {" "}
              <small>
                Sign up for a consultation today by clicking that button over
                there!
              </small>
            </p>
          </div>
          <div className="call-btn">
            <button className="sign-up call" type="submit">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="homeBtn">Back to Home</button>
      </Link>
      <a href="https://github.com/Markel-Bradford/landingpage" target="_blank">
        <img className="whiteGithub" src="images/whitegithub.png" alt="white git hub logo" />
        <img className="github" src="images/github.png" alt="github logo" />
      </a>
      <footer className="footer">
        <p>Copyright &copy; Markel Bradford 2024</p>
      </footer>
    </motion.div>
  );
};

export default LandingPage;
