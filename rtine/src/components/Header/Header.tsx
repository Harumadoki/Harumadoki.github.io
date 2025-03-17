import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <h1>
        <Link className="logo-link" to="/presentation">
          r.
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="link" to="/presentation">
            Presentation
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            Resume
          </Link>
        </li>
        <li>
          <Link className="link" to="/3dProjects">
            Gameboy
          </Link>
        </li>
        <li>
          <Link className="link" to="/wordle">
            Wordle
          </Link>
        </li>
        {/* <li>
          <Link className="link" to="/projects">
            Photos
          </Link>
        </li> */}
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="SocialNetwork">
        <a
          href="https://www.linkedin.com/in/heritiana-rasoanaivo-241149158/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <input
            type="image"
            src={require("../../assets/linkedin_white.png")}
            alt=""
            width="50"
            height="50"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
