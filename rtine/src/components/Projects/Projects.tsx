import React, { FC } from 'react';
import './Projects.scss';
import Project from '../Project/Project';

interface ProjectsProps {}

const test = ["Test 1", "Test 2", "Test 3", "Test 4"];

const testObj = [
  {
    "title": "Test1",
    "img": "/rtine/src/assets/projectsImage/test.png",
    "tags": ["angular", "react"],
    "lien": "lien1",
  },
  {
    "title": "Test2",
    "img": "/rtine/src/assets/projectsImage/dbz.jpg",
    "tags": [".NET", "Spring Boot"],
    "lien": "lien2",
  },
  {
    "title": "Test3",
    "img": "/rtine/src/assets/projectsImage/dbz.jpg/",
    "tags": ["Blender", "DaVinci"],
    "lien": "lien3",
  },
  {
    "title": "Test4",
    "img": "/rtine/src/assets/projectsImage/leventseleve.jpeg",
    "tags": ["Git", "AWS"],
    "lien": "lien4",
  },
]

const Projects: FC<ProjectsProps> = () => (
  <div className="Projects">
    {testObj.map((item, index) => (
      <Project key={index} obj={item} />
    ))}
  </div>
);

export default Projects;
