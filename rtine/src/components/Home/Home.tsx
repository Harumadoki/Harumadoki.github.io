import "./Home.scss";
import About from "../About/About";
import Projects from "../Projects/Projects";
import { useEffect, useState } from "react";

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

const Home = () => {
  const [arrowVisible, setArrowVisible] = useState(false);
  let timeoutId: ReturnType<typeof setTimeout>;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setArrowVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setArrowVisible(false), 1500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <button
        className={`arrow-scroll ${arrowVisible ? "arrow-scroll-visible" : ""}`}
        onClick={() => handleClick()}
        aria-label="Scroll to top"
      >
        ↑
      </button>
      <div className="introduction-container">
        <Introduction />
      </div>
      <Projects />
      <About />
      <Projects isPersonal={true} />
    </>
  );
};

export default Home;
