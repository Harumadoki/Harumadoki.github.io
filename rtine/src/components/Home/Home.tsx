import "./Home.scss";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ThreeDimensionalProjects from "../ThreeDimensionalProjects/ThreeDimensionalProjects";
import Wordle from "../Wordle/Wordle";
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

const Home = () => {
  return (
    <>
      <div className="introduction-container">
        <Introduction />
      </div>
      <Projects />
      <About />
      {/* <Wordle /> */}
      <Projects isPersonal={true} />
      {/* <ThreeDimensionalProjects /> */}
      <div className="contact-container">
        <Contact />
      </div>
    </>
  );
};

export default Home;
