import React, { FC } from "react";
import "./Projects.scss";
import Project from "../Project/Project";
import "../../constants/index";
import { PROJECTS } from "../../constants/data";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => (
  <div className="Projects">
    {PROJECTS.map((item, index) => (
      <Project key={index} obj={item} />
    ))}
  </div>
);

export default Projects;
