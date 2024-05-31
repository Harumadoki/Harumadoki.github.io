import React, { FC } from 'react';
import { ProjectsWrapper } from './Projects.styled';

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => (
 <ProjectsWrapper data-testid="Projects">
    Projects Component
 </ProjectsWrapper>
);

export default Projects;
