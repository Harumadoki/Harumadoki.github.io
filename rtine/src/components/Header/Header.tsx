import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <h1>
        <Link className="logo-link" to="/projects">
          r.
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="link" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            Resume
          </Link>
          {/* <Link className="link" to="/about">
            About
          </Link> */}
        </li>
        <li>
          <Link className="link" to="/3dProjects">
            3D
          </Link>
        </li>
        <li>
          <Link className="link" to="/Home">
            Wordle
          </Link>
          {/* <Link className="link" to="/Home">
            Home
          </Link> */}
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
