import "./Wordle.scss";
import testImage from "../../assets/screenCode/test.png";
import wordleImage from "../../assets/screenCode/wordle.png";

const Wordle = () => {
  return (
    <div className="Wordle">
      <h2>Wordle Project</h2>
      <p className="wordle-intro">
        Welcome to my Wordle Project, a fun and interactive take on the popular
        word-guessing game! 🎯 The goal of this project is to replicate and
        enhance the classic Wordle experience while exploring modern web
        development technologies. This project serves as a playground for
        experimenting with React, state management, and UI design to create a
        smooth and engaging gameplay experience.
      </p>
      <div className="img-container">
        <img alt="" src={testImage}></img>
        <img alt="" src={wordleImage}></img>
      </div>
    </div>
    // </div>
  );
};

export default Wordle;
