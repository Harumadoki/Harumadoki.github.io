import "./HomePage.scss";
import testImage from "../../assets/screenCode/test.png";
import wordleImage from "../../assets/screenCode/wordle.png";

const HomePage = () => {
  return (
    <div className="HomePage">
      <h2>Wordle Project</h2>
      <div className="img-container">
        <img alt="" src={testImage}></img>
        <img alt="" src={wordleImage}></img>
      </div>
    </div>
  );
};

export default HomePage;
