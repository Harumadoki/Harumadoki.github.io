import { FC } from "react";
import "./Projects.scss";
import Project from "../Project/Project";
import "../../constants/index";
import { PROJECTS, PERSONAL_PROJECTS } from "../../constants/data";
import { Link } from "react-router-dom";

interface ProjectsProps {
  isPersonal?: boolean;
}

const ProjectsIntro = () => {
  return (
    <div className="intro">
      <h2>Creativity & Innovation</h2>
      <p className="projects-intro">
        This section is where I showcase the projects I’m currently developing,
        blending creativity with technology. From integrating a 3D Gameboy model
        in Three.js to building a social fitness tracker with React Native, each
        project is an opportunity to explore new concepts and push my skills
        further. I’m still actively working on these projects and continuously
        adding them to this website. Stay tuned as I update this space with new
        features, improvements, and fresh ideas!
      </p>
    </div>
  );
};

const Projects: FC<ProjectsProps> = ({ isPersonal }: ProjectsProps) => {
  const projects_list = isPersonal ? PERSONAL_PROJECTS : PROJECTS;
  return (
    <>
      {isPersonal && <ProjectsIntro />}
      <div className="Projects-grid">
        {projects_list.map((item) => (
          <Link key={item.title} to={item.lien}>
            <Project obj={item} isPersonal={isPersonal} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Projects;
