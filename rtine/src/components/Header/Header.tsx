import { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const LINKS = [
  {
    redirect: "/home",
    description: "Home",
  },
  {
    redirect: "/tf1",
    description: "TF1",
  },
  {
    redirect: "/elengy",
    description: "Elengy",
  },
  {
    redirect: "/3dProjects",
    description: "Gameboy",
  },
  {
    redirect: "/contact",
    description: "Contact",
  },
];

// TODO: faire un const avec une list pour plus tard
// TODO: Partager dans un store/context la variable isMobile (?) ou media queries
// is Mobile used for the moment as long as the different css is not responsive

const Header = () => {
  // small to large phone: 1024px
  const MOBILE_SIZE_MAX = 1024;
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MOBILE_SIZE_MAX
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_SIZE_MAX);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Header">
      <h1>
        <Link className="logo-link" to="/home">
          r.
        </Link>
      </h1>
      {!isMobile && (
        <ul>
          {LINKS.map((link) => {
            return (
              <li key={link.redirect}>
                <Link className="link" to={link.redirect}>
                  {link.description}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
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
