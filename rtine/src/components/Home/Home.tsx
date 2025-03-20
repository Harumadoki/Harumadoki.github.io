import "./Home.scss";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ThreeDimensionalProjects from "../ThreeDimensionalProjects/ThreeDimensionalProjects";
import Wordle from "../Wordle/Wordle";
import { useEffect, useState } from "react";
import Contact from "../Contact/Contact";

const Introduction = () => {
  return (
    <div className="introduction-content">
      <h1>RASOANAIVO HERITIANA</h1>
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

const DesktopVersion = () => {
  return (
    <>
      <div className="introduction-container">
        <Introduction />
      </div>
      <Projects />
      <About />
      <Wordle />
      <ThreeDimensionalProjects />
      <Contact />
    </>
  );
};

const MobileVersion = () => {
  return (
    <div className="mobile-container">
      <div className="mobile-content">
        <h1>Mobile version of the website currently in development.</h1>
        <p>Please access the website via a desktop</p>
      </div>
    </div>
  );
};

const Home = () => {
  // small to large phone: 1024px
  const MOBILE_SIZE_MAX = 768;
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_SIZE_MAX);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      // setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileVersion /> : <DesktopVersion />;
};

export default Home;
