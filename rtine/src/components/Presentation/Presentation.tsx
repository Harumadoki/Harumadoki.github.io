import "./Presentation.scss";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ThreeDimensionalProjects from "../ThreeDimensionalProjects/ThreeDimensionalProjects";
import Wordle from "../Wordle/Wordle";
import { useEffect, useState } from "react";

const Introduction = () => {
  return (
    <div className="introduction-content">
      <h1 className="test">RASOANAIVO HERITIANA</h1>
      <p>
        A french full stack developer with more than three years of experience
        in <strong>React, Angular and .NET</strong>.
        <br /> <br />I love building web applications, solving complex problems,
        and working in <strong>Agile teams</strong>. Currently based in{" "}
        <strong>Abu Dhabi</strong>, I'm always looking for new challenges and
        opportunities to grow.
      </p>
      <p>
        On this website, you can find my <strong>resume</strong> and explore the
        various <strong>projects</strong> I'm currently working on and
        continuously adding to the site. <br />
        <br />
        This website is developed using <strong>React</strong> to showcase my
        work and experience!
        <br />
        Let's create something amazing together!
      </p>
    </div>
  );
};

const DesktopPresentation = () => {
  return (
    <>
      <div className="introduction-container">
        <Introduction />
      </div>
      <Projects />
      <About />
      <Wordle />
      <ThreeDimensionalProjects />
    </>
  );
};

const MobilePresentation = () => {
  return (
    <div className="mobile-container">
      <div className="mobile-content">
        <h1>Mobile version of the website currently in development.</h1>
        <p>Please access the website via a desktop</p>
      </div>
    </div>
  );
};

const Presentation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobilePresentation /> : <DesktopPresentation />;
};

export default Presentation;
