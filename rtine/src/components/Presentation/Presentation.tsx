import "./Presentation.scss";
import About from "../About/About";
import HomePage from "../HomePage/HomePage";
import Projects from "../Projects/Projects";
import ThreeDimensionalProjects from "../ThreeDimensionalProjects/ThreeDimensionalProjects";

const Introduction = () => {
  return (
    <div className="introduction">
      <p>
        I'm <strong>Heritiana Rasoanaivo</strong>. A Full Stack Developer with
        experience in <strong>React, Angular, .NET</strong>. <br />I love
        building web applications, solving complex problems, and working in{" "}
        <strong>Agile teams</strong>. Currently based in <strong>Tokyo</strong>,
        I'm always looking for new challenges and opportunities to grow. Let's
        create something amazing together! 🚀
      </p>
      <p>
        On this website, you can find my <strong>resume</strong> and explore the
        various <strong>projects</strong> I'm currently working on and
        continuously adding to the site. <br />
        <br />
        This website is developed using <strong>React</strong> to showcase my
        work and experience!
        <br />
        Let's create something amazing together! 🚀
      </p>
    </div>
  );
};

const Presentation = () => {
  return (
    <>
      <Introduction />
      <Projects />
      <About />
      <div style={{ backgroundColor: "black" }}>
        <HomePage />
      </div>
      <ThreeDimensionalProjects />
    </>
  );
};

export default Presentation;
